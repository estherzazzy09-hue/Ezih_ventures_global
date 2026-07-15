// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Smooth scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Product Filter
function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter products
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.animation = 'fadeIn 0.5s ease';
            }, 0);
        } else {
            card.style.display = 'none';
        }
    });
}

// Product Modal
function openProductModal(productId) {
    const modal = document.getElementById('productModal');
    const products = {
        1: {
            title: 'Premium Product 1',
            image: 'https://via.placeholder.com/400x300?text=Product+1',
            category: 'General Supply',
            description: 'This is a high-quality premium product with excellent durability and reliability. Suitable for various business applications.'
        },
        2: {
            title: 'Premium Product 2',
            image: 'https://via.placeholder.com/400x300?text=Product+2',
            category: 'Import/Export',
            description: 'Certified international product meeting all global standards. Perfect for global trade and distribution.'
        },
        3: {
            title: 'Premium Product 3',
            image: 'https://via.placeholder.com/400x300?text=Product+3',
            category: 'Construction Materials',
            description: 'Premium construction material designed for durability and reliability. Tested and proven quality.'
        },
        4: {
            title: 'Premium Product 4',
            image: 'https://via.placeholder.com/400x300?text=Product+4',
            category: 'General Supply',
            description: 'Reliable and cost-effective solution for your business needs. High performance and quality assured.'
        },
        5: {
            title: 'Premium Product 5',
            image: 'https://via.placeholder.com/400x300?text=Product+5',
            category: 'Import/Export',
            description: 'Global standard quality product. Ideal for international trade and business partnerships.'
        },
        6: {
            title: 'Premium Product 6',
            image: 'https://via.placeholder.com/400x300?text=Product+6',
            category: 'Construction Materials',
            description: 'Durable and tested materials for construction projects. Meets international quality standards.'
        }
    };
    
    const product = products[productId];
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalCategory').textContent = product.category;
    document.getElementById('modalDescription').textContent = product.description;
    
    modal.style.display = 'block';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Contact for product
function contactForProduct() {
    const phone = '+2347064273192';
    const message = 'Hello, I am interested in your products. Please provide more information.';
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Add scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.service-card, .value-card, .benefit, .card, .product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

console.log('EZIH Ventures Global website loaded successfully!');
