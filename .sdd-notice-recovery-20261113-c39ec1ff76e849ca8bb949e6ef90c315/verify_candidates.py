import hashlib, json, re
from pathlib import Path

root = Path(__file__).parent
entries = json.loads((root / 'candidate-manifest.json').read_text(encoding='utf-8'))
failures = []
tables = 0
criteria = 0
for entry in entries:
    before = (root / entry['name']).read_bytes()
    after = (root / 'candidates' / entry['name']).read_bytes()
    digest = lambda b: hashlib.sha256(b).hexdigest().upper()
    if digest(before) != entry['originalSha256'] or digest(after) != entry['candidateSha256']:
        failures.append(f"{entry['id']}: hash mismatch")
        continue
    version = entry['version']
    notice = (f"> **CURRENT STATUS: APPROVED — SDD-{entry['id']} v{version}, within its documented specification scope.** "
              "Product Owner decision supplied in this conversation; approval date not separately supplied; recorded 2026-11-13. "
              "Earlier draft-status statements below describe the pre-approval review state. Prior approvals and open questions remain; "
              "implementation, specialist sign-off and release are not authorized.").encode('utf-8')
    block = b'\r\n\r\n' + notice + b'\r\n'
    if before.count(block) != entry['noticesBefore'] or after.count(block) != 1:
        failures.append(f"{entry['id']}: block count mismatch")
        continue
    view_before = before.replace(block, b'\r\n')
    view_after = after.replace(block, b'\r\n')
    if view_before != view_after or digest(view_before) != entry['nonBannerSha256']:
        failures.append(f"{entry['id']}: stripped non-banner bytes differ")
    text = after.decode('utf-8')
    if not text.startswith(f"# SDD-{entry['id']} ") or text.count('**CURRENT STATUS: APPROVED') != 1:
        failures.append(f"{entry['id']}: heading or approval status mismatch")
    tables += len(re.findall(r'(?m)^\|\s*:?---', text))
    criteria += len(set(re.findall(rf'SDD-{entry["id"]}-C\d+', text)))
print(f"Independently checked {len(entries)} candidates; tables={tables}; distinct local criteria across files={criteria}; failures={len(failures)}")
for failure in failures:
    print(failure)
raise SystemExit(bool(failures))
