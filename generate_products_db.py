import os
import json

# Build complete database of every separate product in the 7 Drive subfolders
categories = {
    'flowers': {
        'name': 'Handcrafted Flowers & Bouquets',
        'category': 'Flowers',
        'tag': 'Crochet & Chenille Flowers',
        'dir': 'images/products/flowers',
        'price': '₹299 - ₹899'
    },
    'key-chains': {
        'name': 'Handmade Key Chains & Charms',
        'category': 'Key Chains',
        'tag': 'Crochet Keychains & Charms',
        'dir': 'images/products/key-chains',
        'price': '₹149 - ₹349'
    },
    'potli-bags': {
        'name': 'Traditional Potli Bags',
        'category': 'Potli Bags',
        'tag': 'Handcrafted Traditional Bags',
        'dir': 'images/products/potli-bags',
        'price': '₹599 - ₹1,299'
    },
    'specs-holder': {
        'name': 'Handcrafted Specs Holders',
        'category': 'Specs Holder',
        'tag': 'Crochet Eyewear Holders',
        'dir': 'images/products/specs-holder',
        'price': '₹249 - ₹499'
    },
    'sunglass-cover': {
        'name': 'Handcrafted Sunglass Covers',
        'category': 'Sunglass Cover',
        'tag': 'Crochet Protective Covers',
        'dir': 'images/products/sunglass-cover',
        'price': '₹299 - ₹599'
    },
    'tote-bags': {
        'name': 'Artisan Tote & Side Bags',
        'category': 'Tote Bags',
        'tag': 'Handcrafted Fashion Bags',
        'dir': 'images/products/tote-bags',
        'price': '₹799 - ₹1,899'
    },
    'toys': {
        'name': 'Handmade Plush Toys',
        'category': 'Toys',
        'tag': 'Crochet Amigurumi Toys',
        'dir': 'images/products/toys',
        'price': '₹399 - ₹799'
    }
}

all_products = []
product_id = 1

for cat_slug, cat_info in categories.items():
    folder_path = cat_info['dir']
    
    # Specific featured product for Key Chains
    if cat_slug == 'key-chains':
        all_products.append({
            'id': str(product_id),
            'slug': 'crochet-minion-keychain',
            'categorySlug': 'key-chains',
            'category': 'Key Chains',
            'tag': 'Crochet Keychains & Charms',
            'title': '🔔 Crochet Minion Keychain',
            'image': 'images/products/key-chains/crochet-minion-keychain.jpg',
            'price': '₹200/-',
            'description': """🌸 100% Handmade with soft, premium yarn
🔑 Perfect for keys, bags & backpacks
💧 Washable & easy to maintain
🌿 Lightweight, reusable & durable
🎨 Colour customisation available
🎁 Perfect for gifting & return favours

Handmade • Cute • Functional • Giftable ✨"""
        })
        product_id += 1

    if os.path.exists(folder_path):
        files = sorted(
            [f for f in os.listdir(folder_path) if (f.endswith('.jpg') or f.endswith('.jpeg')) and f != 'crochet-minion-keychain.jpg'],
            key=lambda x: int(x.split('_')[1].split('.')[0]) if '_' in x and x.split('_')[1].split('.')[0].isdigit() else 999
        )
        for idx, fname in enumerate(files):
            img_rel_path = f"{folder_path}/{fname}"
            item_name = f"{cat_info['category']} - Design #{idx+1}"
            
            # Custom descriptions based on category
            if cat_slug == 'flowers':
                desc = "Exquisitely hand-knitted floral masterpiece crafted with ultra-soft cotton/chenille yarn. Perfect for evergreen home decor, gifting, or personalized bouquets."
            elif cat_slug == 'key-chains':
                desc = "Charming handcrafted crochet keychain & bag accessory made with vibrant yarn and sturdy metallic clip. Adds a touch of artisanal warmth to your daily carry."
            elif cat_slug == 'potli-bags':
                desc = "Graceful festive potli bag with traditional crochet weaving, delicate drawstring tassels, and ample room for festive essentials and celebrations."
            elif cat_slug == 'specs-holder':
                desc = "Practical and elegant handmade crochet specs strap/holder designed to protect and keep your eyeglasses or sunglasses conveniently accessible."
            elif cat_slug == 'sunglass-cover':
                desc = "Cushioned protective crochet sleeve tailored to guard sunglasses and mobile accessories against scratches and daily bumps in style."
            elif cat_slug == 'tote-bags':
                desc = "Durable, eco-friendly handcrafted crochet tote bag made with reinforced premium yarn handles. Spacious and chic for casual outings or work."
            elif cat_slug == 'toys':
                desc = "Adorable handmade amigurumi crochet plush toy, knitted with baby-safe hypoallergenic soft yarn and filled with love."
            else:
                desc = "Artisanal handcrafted creation made with love by our women artisan collective at Kala ki Dor."

            all_products.append({
                'id': str(product_id),
                'slug': f"{cat_slug}-{idx+1}",
                'categorySlug': cat_slug,
                'category': cat_info['category'],
                'tag': cat_info['tag'],
                'title': item_name,
                'image': img_rel_path,
                'price': cat_info['price'],
                'description': desc
            })
            product_id += 1

print(f"Total individual separate products created: {len(all_products)}")

# Write to JavaScript DB file
js_content = f"// Complete Handcrafted Products Database\nconst KALA_PRODUCTS = {json.dumps(all_products, indent=2)};\n"
with open('products_data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Saved products_data.js successfully with Crochet Minion Keychain!")
