import re
import os
import json

# Read drive_page.html dumped earlier
with open('drive_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

# In Google Drive table rows:
# <tr data-id="FOLDER_ID" ...> ... aria-label="FOLDER_NAME" ...
# Or regex search for data-id and nearby aria-label
rows = re.findall(r'<tr[^>]*data-id=\"([a-zA-Z0-9_-]+)\"[^>]*>.*?aria-label=\"(.*?)\"', html, re.DOTALL)

print(f"Extracted {len(rows)} table row matches:")
folder_map = {}
for fid, label in rows:
    # Clean label
    clean_label = label.split('\n')[0].strip()
    if clean_label not in ['Download', 'More actions', 'Size not available']:
        folder_map[clean_label] = fid
        print(f"Folder/Item: '{clean_label}' -> ID: {fid}")

# Also look for data-id and folder names in general
all_data_ids = re.findall(r'data-id=\"([a-zA-Z0-9_-]{28,45})\"', html)
print(f"\nTotal data-ids found: {len(set(all_data_ids))}")

# Check specific known names
known = ['Flowers', 'Key Chains', 'Potli Bags', 'Specs Holder', 'Sunglass Cover', 'Tote Bags', 'Toys']
for k in known:
    m = re.findall(rf'data-id=\"([a-zA-Z0-9_-]+)\"[^>]*>.*?{k}', html, re.DOTALL)
    if m:
        print(f"Match for {k}: {m[-1]}")
