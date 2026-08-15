import urllib.request
import re
import json
import os

url = 'https://drive.google.com/drive/folders/1gjkPm7DuxZTc5W7YDpJdpP2foSoNsZU5'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})

try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8', errors='ignore')

    # Look for folder names and file names in drive data array
    # Drive embeds items in format: [["id", "name", ...]]
    folder_matches = re.findall(r'\[\"([a-zA-Z0-9_-]{25,45})\",\[\"(.*?)\",\"application/vnd\.google-apps\.folder\"', html)
    print(f"Found {len(folder_matches)} subfolders:")
    for fid, fname in folder_matches:
        print(f"Subfolder: '{fname}' -> ID: {fid}")

    file_matches = re.findall(r'\[\"([a-zA-Z0-9_-]{25,45})\",\[\"(.*?)\",\"image/(.*?)\"', html)
    print(f"\nFound {len(file_matches)} direct image items:")
    for fid, fname, ftype in file_matches[:20]:
        print(f"Image: '{fname}' (ID: {fid})")

except Exception as e:
    print("Error:", e)
