import subprocess
import urllib.request
import re
import os
import time

edge_path = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
if not os.path.exists(edge_path):
    edge_path = r'C:\Program Files\Microsoft\Edge\Application\msedge.exe'

folders = {
    'flowers': ('1q3lDLNj-h3iHrol7jwxmjKLzWaqlHz4Z', 'Flowers'),
    'key-chains': ('1mO6HLC7tkYK-eoYYAnKXKNlKoeD_4a4_', 'Key Chains'),
    'potli-bags': ('1ZnGYw6raOEfRjAVqocHedmdChV8NMfGZ', 'Potli Bags'),
    'specs-holder': ('1xPbL9hgOvTxvqJx95gBJLeMn5hd1xU50', 'Specs Holder'),
    'sunglass-cover': ('1tQBlurV3YBToOKbLsdNb88xZ1BV16ph8', 'Sunglass Cover'),
    'tote-bags': ('1cWfpej_JGcjiNZRW5i6JRoj8ucG744lx', 'Tote Bags'),
    'toys': ('1jhmULxOVEIouSG3BNL4l6aWa4lcJmQ4m', 'Toys')
}

all_category_files = {}

for slug, (folder_id, folder_name) in folders.items():
    print(f"\n==========================================")
    print(f"Fetching exact items for: {folder_name} (ID: {folder_id})")
    print(f"==========================================")
    
    target_dir = f'images/products/{slug}'
    os.makedirs(target_dir, exist_ok=True)
    
    folder_url = f'https://drive.google.com/drive/folders/{folder_id}'
    cmd = [edge_path, '--headless', '--dump-dom', folder_url]
    res = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8', errors='ignore')
    dom = res.stdout
    
    # Extract file IDs in this folder
    # In table rows: data-id="FILE_ID" and data-target="doc"
    file_ids = re.findall(r'data-id=\"([a-zA-Z0-9_-]{28,45})\"[^>]*data-target=\"doc\"', dom)
    if not file_ids:
        # Fallback to general candidates
        file_ids = re.findall(r'data-id=\"([a-zA-Z0-9_-]{28,45})\"', dom)
        file_ids = [fid for fid in file_ids if fid != folder_id]

    unique_fids = list(dict.fromkeys(file_ids))
    print(f"Found {len(unique_fids)} files in '{folder_name}'")
    
    saved_images = []
    for idx, fid in enumerate(unique_fids):
        img_url = f'https://lh3.googleusercontent.com/d/{fid}=s1000'
        out_path = f'{target_dir}/img_{idx+1}.jpg'
        try:
            req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as resp:
                content_type = resp.headers.get('Content-Type', '')
                if 'image' in content_type:
                    data = resp.read()
                    if len(data) > 4000:
                        with open(out_path, 'wb') as img_file:
                            img_file.write(data)
                        saved_images.append(out_path)
                        print(f"  [+] Saved: {out_path} ({len(data)} bytes, ID: {fid})")
        except Exception as e:
            print(f"  [-] Failed to download ID {fid}: {e}")

    all_category_files[slug] = saved_images

print("\nFinal Download Summary by exact subfolder:")
for slug, imgs in all_category_files.items():
    print(f"  {slug}: {len(imgs)} images saved")

with open('category_files.json', 'w') as jf:
    json.dump(all_category_files, jf, indent=2)
