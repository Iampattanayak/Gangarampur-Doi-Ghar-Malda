# 📸 How to Add Product Images

Your shop is now ready to display product images! Follow these simple steps:

## 🎯 Quick Start

1. **Locate the folders** - All product images go in:
   ```
   e:\shop\public\products\
   ```
   
2. **Four main folders**:
   - 📁 `signature/` - For Doi, Ghee, Para items
   - 📁 `ice-cream/` - For all Amul ice cream products
   - 📁 `chocolates/` - For all Cadbury products
   - 📁 `beverages/` - For all cold drinks

3. **Check the guide** - Open this file for complete list:
   ```
   e:\shop\public\products\IMAGE_GUIDE.md
   ```

---

## 📋 Step-by-Step Instructions

### Step 1: Get Your Images
- Take photos or download product images
- Recommended size: **800x800 pixels** (square)
- Best background: **White or transparent**
- Format: JPG, PNG, or WEBP

### Step 2: Rename Images
Use the **exact filenames** from the guide. Examples:
- Coca-Cola → Save as `coca-cola.jpg` in `/beverages/`
- Dairy Milk → Save as `cadbury-dairy-milk.jpg` in `/chocolates/`
- Khasa Doi → Save as `khasa-doi-small.jpg` in `/signature/`

### Step 3: Place Images in Correct Folders
Copy each image to its corresponding folder:

**Example for Beverages:**
```
/public/products/beverages/
├── campa-cola.jpg
├── campa-orange.jpg
├── coca-cola.jpg
├── sprite.jpg
├── thums-up.jpg
└── maaza.jpg
```

**Example for Chocolates:**
```
/public/products/chocolates/
├── cadbury-dairy-milk.jpg
├── cadbury-silk-plain.jpg
├── cadbury-5star.jpg
└── cadbury-celebrations.jpg
```

### Step 4: Refresh Browser
After adding images, simply **refresh your browser** at http://localhost:5173/

---

## ✅ What's Already Done (No Action Needed)

✓ Image folders created  
✓ Code updated to display images  
✓ Fallback to emojis if image not found  
✓ Automatic image optimization  
✓ Lazy loading for faster performance  

---

## 💡 Tips & Best Practices

### Image Quality
- **Clear & focused** - Make sure products are clearly visible
- **Good lighting** - Bright, even lighting works best
- **Consistent style** - Try to keep similar backgrounds and angles

### File Management
- **Keep original size reasonable** - Under 500KB per image
- **Use lowercase filenames** - Always use hyphens, not spaces
- **Backup originals** - Keep a copy of original high-res images

### Testing
1. Add a few images first (like 3-5 products)
2. Refresh browser to see them appear
3. If image doesn't show, check:
   - Filename matches exactly (including `.jpg` extension)
   - Image is in correct folder
   - No typos in filename

---

## 🎨 Priority Products (Start with these)

Start by adding images for these popular items first:

**Beverages** (Most visible):
- Coca-Cola (`coca-cola.jpg`)
- Sprite (`sprite.jpg`)
- Thums Up (`thums-up.jpg`)

**Chocolates** (Best sellers):
- Cadbury Dairy Milk (`cadbury-dairy-milk.jpg`)
- Cadbury Silk (`cadbury-silk-plain.jpg`)
- Cadbury Celebrations (`cadbury-celebrations.jpg`)

**Ice Cream** (Popular):
- Amul Butterscotch (`amul-butterscotch-bliss.jpg`)
- Amul Vanilla Magic (`amul-vanilla-magic.jpg`)

---

## 🔧 Troubleshooting

**Image not showing?**
- ✓ Check filename is exact match (case-sensitive)
- ✓ Confirm file is in correct folder
- ✓ Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- ✓ Check file extension (.jpg, .png, .webp)

**Image looks stretched/weird?**
- Use square images (1:1 ratio)
- Recommended: 800x800px or 1000x1000px

**Too many products?**
- Don't worry! Add them gradually
- Missing images will show emojis (looks fine)
- Can use same image for multiple variants temporarily

---

## 📞 Current Status

- ✅ **Image system installed and ready**
- ✅ **All folders created**
- ✅ **Code updated to use images**
- 🎯 **Next step: Add your product images!**

The system is live and working. As soon as you add an image with the correct filename to the correct folder, it will automatically appear on your site when you refresh!

---

## 🚀 Quick Reference

| Product Type | Folder Path | Example File |
|--------------|-------------|--------------|
| Beverages | `/products/beverages/` | `sprite.jpg` |
| Chocolates | `/products/chocolates/` | `cadbury-dairy-milk.jpg` |
| Ice Cream | `/products/ice-cream/` | `amul-vanilla-magic.jpg` |
| Signature | `/products/signature/` | `khasa-doi-small.jpg` |

**Full list**: See `/public/products/IMAGE_GUIDE.md`
