// Product Data - Directly embedded for immediate display
// You can also load from products.json using loadProductsFromFile()
let products = [
    {
        "id": 1,
        "name": "Boat Nirvana Ion ANC",
        "description": "ANC(~32dB), 120Hrs Battery, App Support, Crystal Bionic Sound, 4Mics ENx",
        "price": "₹1799.00",
        "image": "Screenshot 2026-02-22 001321.png",
        "amazonLink": "https://www.amazon.com/dp/B09V3KXJPB?tag=your-affiliate-id",
        "category": "Electronics"
    },
    {
        "id": 2,
        "name": "Smart Fitness Watch",
        "description": "Track your health, heart rate, steps, and sleep with this sleek smartwatch",
        "price": "$149.99",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        "amazonLink": "https://www.amazon.com/dp/B09V3KXJPB?tag=your-affiliate-id",
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
