import subprocess
import urllib.request
import re
import os
import json

edge_path = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
if not os.path.exists(edge_path):
    edge_path = r'C:\Program Files\Microsoft\Edge\Application\msedge.exe'

folders = [
    ('flowers', '1q3lDLNj-h3iHrol7jwxmjKLzWaqlHz4Z', 'Flowers'),
    ('key-chains', '1mO6HLC7tkYK-eoYYAnKXKNlKoeD_4a4_', 'Key Chains'),
    ('potli-bags', '1ZnGYw6raOEfRjAVqocHedmdChV8NMfGZ', 'Potli Bags'),
    ('specs-holder', '1xPbL9hgOvTxvqJx95gBJLeMn5hd1xU50', 'Specs Holder'),
    ('sunglass-cover', '1tQBlurV3YBToOKbLsdNb88xZ1BV16ph8', 'Sunglass Cover'),
    ('tote-bags', '1cWfpej_JGcjiNZRW5i6JRoj8ucG744lx', 'Tote Bags'),
    ('toys', '1jhmULxOVEIouSG3BNL4l6aWa4lcJmQ4m', 'Toys')
]

results = {}

for slug, fid, fname in folders:
    target_dir = f'images/products/{slug}'
    os.makedirs(target_dir, exist_ok=True)
    
    url = f'https://drive.google.com/drive/folders/{fid}'
    cmd = [edge_path, '--headless', '--dump-dom', url]
    res = subprocess.run(cmd, capture_output=True, text=True, encoding='utf-8', errors='ignore')
    
    # Find all table rows with data-id and aria-label
    # Google Drive table rows: <tr ... data-id="(ID)" ... aria-label="(FILE_NAME)"
    rows = re.findall(r'<tr[^>]*data-id=\"([a-zA-Z0-9_-]{28,45})\"[^>]*>.*?aria-label=\"(.*?)\"', res.stdout, re.DOTALL)
    
    items = []
    for item_id, item_label in rows:
        label_line = item_label.split('\n')[0].strip()
        # Exclude header/system labels
        if label_line not in ['Download', 'More actions', 'Size not available', fname, f'{fname} Shared folder']:
            items.append((item_id, label_line))
    
    print(f"\nFolder: '{fname}' (ID: {fid}) -> Found {len(items)} items:")
    saved_list = []
    
    for idx, (item_id, item_title) in enumerate(items):
        out_name = f'{target_dir}/item_{idx+1}.jpg'
        img_url = f'https://lh3.googleusercontent.com/d/{item_id}=s1000'
        try:
            req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as resp:
                if 'image' in resp.headers.get('Content-Type', ''):
                    data = resp.read()
                    if len(data) > 3000:
                        with open(out_name, 'wb') as img_f:
                            img_f.write(data)
                        saved_list.append({'path': out_name, 'id': item_id, 'title': item_title})
                        print(f"  [+] Saved {out_name}: '{item_title}' ({len(data)} bytes)")
        except Exception as e:
            print(f"  [-] Failed {item_id}: {e}")
            
    results[slug] = saved_list

with open('precise_catalog.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)

print("\nDone! Saved catalog mapping to precise_catalog.json")
