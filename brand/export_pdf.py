"""Write compact, editable vector PDF companions for the iTakda SVG marks."""

from pathlib import Path


NAVY = "0.066667 0.066667 0.231373"
ORANGE = "0.913725 0.474510 0.196078"


def icon_commands(page_height: int, offset: int = 0) -> str:
    return f"""
q 1 0 0 -1 {offset} {page_height - offset} cm
{NAVY} RG 4.5 w 0 J 0 j
16 13 m 48 13 l 51.866 13 55 16.134 55 20 c
55 49 l 55 52.866 51.866 56 48 56 c
16 56 l 12.134 56 9 52.866 9 49 c
9 20 l 9 16.134 12.134 13 16 13 c h S
1 J 4.5 w
9 25 m 55 25 l S
21 8 m 21 19 l S
43 8 m 43 19 l S
{ORANGE} RG 5.5 w 1 j
21 39 m 29 47 l 46 28 l S
Q
"""


def pdf_bytes(width: int, height: int, commands: str) -> bytes:
    stream = commands.encode("ascii")
    objects = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        (f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {width} {height}] "
         "/Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>").encode(),
        b"<< /Length " + str(len(stream)).encode() + b" >>\nstream\n" + stream + b"endstream",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    ]
    result = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
    offsets = [0]
    for number, obj in enumerate(objects, 1):
        offsets.append(len(result))
        result.extend(f"{number} 0 obj\n".encode() + obj + b"\nendobj\n")
    start_xref = len(result)
    result.extend(f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n".encode())
    for offset in offsets[1:]:
        result.extend(f"{offset:010d} 00000 n \n".encode())
    result.extend((f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\n"
                   f"startxref\n{start_xref}\n%%EOF\n").encode())
    return bytes(result)


directory = Path(__file__).resolve().parent
(directory / "itakda-calendar.pdf").write_bytes(pdf_bytes(64, 64, icon_commands(64)))
wordmark = "q\n" + icon_commands(80, 8) + f"{NAVY} rg\nBT /F1 48 Tf -1.8 Tc 86 23 Td (iTakda) Tj ET\nQ\n"
(directory / "itakda-lockup.pdf").write_bytes(pdf_bytes(320, 80, wordmark))
