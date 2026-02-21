# Amazon Affiliate Website

A beautiful single-page website to showcase and sell Amazon products as an affiliate.

## 📁 Files Included

- **index.html** - Main website page
- **styles.css** - Beautiful styling and design
- **script.js** - Product loading and interactions
- **products.json** - Your product data (edit this to add products)

## 🚀 How to Use

### 1. Open the Website
Simply double-click `index.html` to open it in your web browser.

### 2. Add Your Amazon Products

Open `products.json` in any text editor (Notepad, VS Code, etc.) and add your products following this format:

```
json
{
  "id": 1,
  "name": "Product Name",
  "description": "Product description",
  "price": "$99.99",
  "image": "https://example.com/product-image.jpg",
  "amazonLink": "https://www.amazon.com/dp/PRODUCT-ID?tag=YOUR-AFFILIATE-ID",
  "category": "Electronics"
}
```

### ⚠️ Important: Set Up Your Amazon Affiliate ID

1. Get your Amazon Affiliate tracking ID
2. In `products.json`, replace `your-affiliate-id` in the `amazonLink` with your actual affiliate ID
3. Do this for ALL products

Example:
```
json
"amazonLink": "https://www.amazon.com/dp/B09V3KXJPB?tag=your-affiliate-id"
```
Change to:
```
json
"amazonLink": "https://www.amazon.com/dp/B09V3KXJPB?tag=harsh-20"
```

### 3. Add Product Images

You have two options for product images:

**Option A: Use external image URLs**
Find product images on Amazon and use their image URLs in the `image` field.

**Option B: Use placeholder images**
The website includes a fallback placeholder image if the main image fails to load.

### 4. Add New Products

To add a new product, add a new object to the `products.json` array:

```
json
{
  "id": 7,
  "name": "New Product Name",
  "description": "Description here",
  "price": "$49.99",
  "image": "https://example.com/image.jpg",
  "amazonLink": "https://www.amazon.com/dp/EXAMPLE?tag=your-affiliate-id",
  "category": "Electronics"
}
```

Make sure each product has a unique `id` number.

## 🎨 Customization

### Change Colors
Open `styles.css` and find the `:root` section at the top. You can change:
- `--primary-color` - Main accent color (Amazon orange)
- `--secondary-color` - Dark background color

### Categories
Categories are defined in both `products.json` and `index.html`. Make sure they match!

## 📱 Features

- ✅ Responsive design (works on mobile, tablet, desktop)
- ✅ Category filtering
- ✅ Beautiful product cards
- ✅ Direct Amazon purchase links
- ✅ Easy product management via JSON

## 🔒 Important Notes

1. **Affiliate Disclosure**: The footer includes an Amazon Associate disclosure
2. **Image URLs**: Make sure to use direct image URLs from Amazon product pages
3. **Local Testing**: For best results, run this on a local web server (see below)

## 🖥️ Running on a Local Server (Recommended)

For the products to load correctly, it's best to use a local server:

### Using Python (already installed on most systems):
1. Open Command Prompt in the project folder
2. Run: `python -m http.server 8000`
3. Open: `http://localhost:8000`

### Using VS Code:
1. Install "Live Server" extension
2. Right-click `index.html` and select "Open with Live Server"

## 📞 Support

If you have questions or need help, feel free to reach out!

---

Created for Amazon Affiliates 💼
