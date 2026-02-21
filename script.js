// Product Data - Directly embedded for immediate display
// You can also load from products.json using loadProductsFromFile()
let products = [
    {
        "id": 1,
        "name": "Boat Nirvana Ion ANC",
        "description": "ANC(~32dB), 120Hrs Battery, App Support, Crystal Bionic Sound, 4Mics ENx",
        "price": "₹1799.00",
        "image": "Screenshot 2026-02-22 022432.png",
        "amazonLink": "https://amzn.to/4rWIU6u",
        "category": "Electronics"
    },
    {
        "id": 2,
        "name": "boAt Airdopes Prime 701 ANC",
        "description": "46dB Hybrid ANC, 50Hr Battery, Real Spatial Audio,Multidevice Connect,App Support, Bluetooth Earbuds",
        "price": "₹1959.00",
        "image": "Screenshot 2026-02-22 022200.png",
        "amazonLink": "https://amzn.to/4avwn4i",
        "category": "Electronics"
    },
    {
        "id": 3,
        "name": "Premium Coffee Maker",
        "description": "Brew restaurant-quality coffee at home with this programmable coffee maker",
        "price": "$89.99",
        "image": "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=300&fit=crop",
        "amazonLink": "https://www.amazon.com/dp/B09V3KXJPB?tag=your-affiliate-id",
        "category": "Home & Kitchen"
    },
    {
        "id": 4,
        "name": "Professional Running Shoes",
        "description": "Lightweight, breathable running shoes with superior cushioning",
        "price": "$119.99",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
        "amazonLink": "https://www.amazon.com/dp/B09V3KXJPB?tag=your-affiliate-id",
        "category": "Sports"
    },
    {
        "id": 5,
        "name": "Portable Power Bank 20000mAh",
        "description": "Fast charging power bank compatible with all smartphones and tablets",
        "price": "$39.99",
        "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop",
        "amazonLink": "https://www.amazon.com/dp/B09V3KXJPB?tag=your-affiliate-id",
        "category": "Electronics"
    },
    {
        "id": 6,
        "name": "Premium Yoga Mat",
        "description": "Extra thick, non-slip yoga mat for comfortable workouts",
        "price": "$29.99",
        "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop",
        "amazonLink": "https://www.amazon.com/dp/B09V3KXJPB?tag=your-affiliate-id",
        "category": "Sports"
    },
    {
        "id": 7,
        "name": "Wireless Gaming Mouse",
        "description": "High-precision gaming mouse with RGB lighting and programmable buttons",
        "price": "$59.99",
        "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
        "amazonLink": "https://www.amazon.com/dp/B09V3KXJPB?tag=your-affiliate-id",
        "category": "Electronics"
    },
    {
        "id": 8,
        "name": "Stainless Steel Water Bottle",
        "description": "Insulated 32oz water bottle keeps drinks cold for 24 hours",
        "price": "$24.99",
        "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
        "amazonLink": "https://www.amazon.com/dp/B09V3KXJPB?tag=your-affiliate-id",
        "category": "Sports"
    },
    {
        "id": 9,
        "name": "Bluetooth Speaker",
        "description": "Portable waterproof speaker with 360-degree surround sound",
        "price": "$49.99",
        "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
        "amazonLink": "https://www.amazon.com/dp/B09V3KXJPB?tag=your-affiliate-id",
        "category": "Electronics"
    },
    {
        "id": 10,
        "name": "Backpack",
        "description": "Durable and stylish backpack for work, school, or travel",
        "price": "$39.99",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
        "amazonLink": "https://www.amazon.com/dp/B09V3KXJPB?tag=your-affiliate-id",
        "category": "Fashion"
    },
    {
        "id": 11,
        "name": "Desk Lamp",
        "description": "LED desk lamp with adjustable brightness and color temperature",
        "price": "$34.99",
        "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
        "amazonLink": "https://www.amazon.com/dp/B09V3KXJPB?tag=your-affiliate-id",
        "category": "Home & Kitchen"
    },
    {
        "id": 12,
        "name": "Yoga Blocks",
        "description": "Set of 2 eco-friendly yoga blocks for better support",
        "price": "$19.99",
        "image": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
        "amazonLink": "https://www.amazon.com/dp/B09V3KXJPB?tag=your-affiliate-id",
        "category": "Sports"
    }
];

// Load products from JSON file (for advanced users)
async function loadProductsFromFile() {
    try {
        const response = await fetch('products.json');
        if (!response.ok) {
            throw new Error('Failed to load products');
        }
        products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.log('Using embedded products (or run on server to load from JSON)');
    }
}

// Display products in the grid
function displayProducts(productsToDisplay) {
    const grid = document.getElementById('products-grid');
    
    if (productsToDisplay.length === 0) {
        grid.innerHTML = `
            <div class="loading">
                <p>No products found in this category.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = productsToDisplay.map(product => `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" class="product-image" 
                 onerror="this.src='https://via.placeholder.com/400x300?text=Product+Image'">
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <span class="product-price">${product.price}</span>
                <a href="${product.amazonLink}" target="_blank" rel="noopener noreferrer" class="buy-button">
                    Buy on Amazon 🛒
                </a>
            </div>
        </div>
    `).join('');
}

// Filter products by category
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(product => product.category === category);
        displayProducts(filtered);
    }
}

// Initialize category filter buttons
function initCategoryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter products
            const category = button.getAttribute('data-category');
            filterProducts(category);
        });
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);  // Display embedded products immediately
    initCategoryFilter();
    initMobileMenu();
    initSmoothScroll();
});
