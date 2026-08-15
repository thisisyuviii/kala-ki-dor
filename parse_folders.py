import re

with open('drive_page.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract all folder names ending with Shared folder
folders = re.findall(r'aria-label=\"(.*?Shared folder.*?)\"', html)
unique_folders = list(dict.fromkeys(folders))

print(f"Total Subfolders Found in Drive ({len(unique_folders)}):")
for folder in unique_folders:
    clean_name = folder.replace('Shared folder', '').strip()
    print(f"  Category Folder: '{clean_name}'")
