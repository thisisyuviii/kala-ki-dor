import subprocess
import os
import re
import time

edge_path = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
if not os.path.exists(edge_path):
    edge_path = r'C:\Program Files\Microsoft\Edge\Application\msedge.exe'

html_out = 'drive_page.html'
cmd = [edge_path, '--headless', '--dump-dom', 'https://drive.google.com/drive/folders/1gjkPm7DuxZTc5W7YDpJdpP2foSoNsZU5']

print("Dumping rendered Google Drive DOM...")
res = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8', errors='ignore')

with open(html_out, 'w', encoding='utf-8') as f:
    f.write(res.stdout)

print(f"Dumped DOM length: {len(res.stdout)} chars")

# Extract visible folder names and image titles from rendered DOM
folder_names = re.findall(r'data-target=\"folder\".*?aria-label=\"(.*?)\"', res.stdout)
grid_titles = re.findall(r'aria-label=\"(.*?)\"', res.stdout)

print(f"Found {len(folder_names)} data-target folders:")
for fn in folder_names:
    print("  Folder:", fn)

print("\nSample aria-labels found:")
unique_labels = list(dict.fromkeys(grid_titles))
for label in unique_labels[:30]:
    if any(k in label.lower() for k in ['crochet', 'flower', 'bag', 'pot', 'key', 'scrunch', 'bow', 'toy', 'coast', 'chenille', 'filler', 'cover', 'holder', 'frame', 'charm', 'magnet', 'curtain']):
        print("  Label:", label)
