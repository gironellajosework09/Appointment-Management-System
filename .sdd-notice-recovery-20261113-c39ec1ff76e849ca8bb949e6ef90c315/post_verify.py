import hashlib, json, re
from pathlib import Path

root = Path(__file__).parent
workspace = root.parent
specs = workspace / 'docs' / 'specs'
entries = json.loads((root / 'candidate-manifest.json').read_text(encoding='utf-8'))
expected = {'001':'0.3','002':'0.5','003':'0.5','004':'0.3','005':'0.4','006':'0.1','007':'0.3','008':'0.2','009':'0.2','010':'0.2','011':'0.2','012':'0.1','013':'0.3','014':'0.1','015':'0.1','016':'0.1','017':'0.1','018':'0.1','019':'0.1','020':'0.1','021':'0.2','022':'0.2','023':'0.3','024':'0.2','025':'0.3','026':'0.3','027':'0.1'}
failures = []
for entry in entries:
    source = specs / entry['name']
    candidate = root / 'candidates' / entry['name']
    if source.read_bytes() != candidate.read_bytes(): failures.append(f"{entry['id']}: installed file differs from checked candidate")
    if hashlib.sha256(source.read_bytes()).hexdigest().upper() != entry['candidateSha256']: failures.append(f"{entry['id']}: installed hash mismatch")
for id, version in expected.items():
    matches = list(specs.glob(f'SDD-{id}-*.md'))
    if len(matches) != 1:
        failures.append(f'{id}: file count {len(matches)}')
        continue
    head = '\n'.join(matches[0].read_text(encoding='utf-8').splitlines()[:8])
    if not re.search(rf'APPROVED — SDD-{id} v{re.escape(version)}\b', head): failures.append(f'{id}: current approval/version absent')
tables = links = 0
for entry in entries:
    f = specs / entry['name']
    text = f.read_text(encoding='utf-8')
    lines = text.splitlines()
    for i, line in enumerate(lines):
        if re.match(r'^\|\s*:?-{3,}', line):
            tables += 1
            if not i or not lines[i-1].startswith('|'): failures.append(f"{entry['id']}: table separator lacks preceding row at {i+1}")
    for dest in re.findall(r'\]\(([^)#]+)(?:#[^)]*)?\)', text):
        if re.match(r'^(https?://|mailto:)', dest): continue
        links += 1
        if not (f.parent / dest).exists(): failures.append(f"{entry['id']}: missing relative file {dest}")
print(f'Installed candidate hashes checked: {len(entries)}; current exact approvals checked: {len(expected)}; table headers: {tables}; relative files: {links}; failures: {len(failures)}')
for failure in failures: print(failure)
raise SystemExit(bool(failures))
