import urllib.request
import re
import json

url = 'https://drive.google.com/drive/folders/1gjkPm7DuxZTc5W7YDpJdpP2foSoNsZU5'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8', errors='ignore')

    # Look for subfolder items and names in JS data
    # Pattern: ["ID", "Folder Name", null, "application/vnd.google-apps.folder"]
    folder_entries = re.findall(r'\[\"([a-zA-Z0-9_-]{28,45})\",\[\"(.*?)\"', html)
    print(f"Total entries found: {len(folder_entries)}")
    
    folders = {}
    for fid, name in folder_entries:
        if len(name) < 50 and not name.startswith('http') and not name.startswith('image/'):
            folders[fid] = name

    print(f"\nUnique Folder/Item Names found ({len(folders)}):")
    for fid, name in list(folders.items())[:30]:
        print(f"  ID: {fid} -> Name: '{name}'")

except Exception as e:
    print("Error:", e)
