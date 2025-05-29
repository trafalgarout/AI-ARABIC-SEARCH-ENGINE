document.addEventListener('DOMContentLoaded', function() {
    // Google CSE will handle everything automatically
    
    // Ensure the Google CSE is properly initialized
    window.__gcse = window.__gcse || {};
    window.__gcse.searchCallbacks = {
        web: {
            ready: function() {
                // CSE is ready
                console.log('Google CSE is ready');
                
                // Remove Google branding
                removeGoogleBranding();
                
                // Set up a mutation observer to remove branding that might be added dynamically
                setupBrandingObserver();
            }
        }
    };
    
    // Function to remove all Google branding elements
    function removeGoogleBranding() {
        // List of selectors for Google branding elements
        const brandingSelectors = [
            '.gsib_b',
            '.gcsc-branding',
            '.gsc-branding',
            '.gsc-branding-text',
            '.gcsc-branding-text',
            '.gsc-branding-text-name',
            '.gcsc-branding-text-name',
            '.gsc-branding-img-noclear',
            '.gcsc-branding-img-noclear',
            '.gsc-branding-img',
            '.gcsc-branding-img',
            '.gs-visibleUrl',
            '.gs-visibleUrl-short',
            '.gs-visibleUrl-long',
            '.gsc-url-top',
            '.gsc-url-bottom',
            '.gs-promotion-url'
        ];
        
        // Remove each branding element
        brandingSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (element) {
                    element.style.display = 'none';
                    element.style.visibility = 'hidden';
                    element.style.width = '0';
                    element.style.height = '0';
                    element.style.overflow = 'hidden';
                    element.innerHTML = '';
                }
            });
        });
    }
    
    // Set up a mutation observer to remove branding that might be added dynamically
    function setupBrandingObserver() {
        // Create a new observer
        const observer = new MutationObserver(function(mutations) {
            removeGoogleBranding();
        });
        
        // Start observing the document with the configured parameters
        observer.observe(document.body, { childList: true, subtree: true });
        
        // Also set up an interval as a backup
        setInterval(removeGoogleBranding, 1000);
    }
    
    // Initial removal attempt
    setTimeout(removeGoogleBranding, 1000);
    
    // Handle collapsible categories
    setupCollapsibleCategories();
    
    // Handle search keywords
    setupSearchKeywords();
    
    // Handle trending tags in footer
    setupTrendingTags();
    
    // Handle newsletter form
    setupNewsletterForm();
    
    // Handle FAQ section
    setupFaqSection();
    
    // Function to set up collapsible categories
    function setupCollapsibleCategories() {
        const categoryHeaders = document.querySelectorAll('.category-header');
        
        categoryHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const category = this.parentElement;
                
                // Toggle active class
                if (category.classList.contains('active')) {
                    category.classList.remove('active');
                } else {
                    // Close all other categories
                    document.querySelectorAll('.category').forEach(cat => {
                        cat.classList.remove('active');
                    });
                    
                    // Open this category
                    category.classList.add('active');
                }
            });
        });
    }
    
    // Function to set up search keywords
    function setupSearchKeywords() {
        const searchKeywords = document.querySelectorAll('.search-keyword');
        
        searchKeywords.forEach(keyword => {
            keyword.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get the keyword text
                const keywordText = this.textContent.trim();
                
                // Find the search input and set its value
                const searchInput = document.querySelector('input.gsc-input');
                if (searchInput) {
                    searchInput.value = keywordText;
                    
                    // Trigger the search
                    if (window.__gcse && window.__gcse.search) {
                        window.__gcse.search.execute(keywordText);
                    }
                }
            });
        });
    }
    
    // Function to set up trending tags in footer
    function setupTrendingTags() {
        const trendingTags = document.querySelectorAll('.footer-section.trending .tag');
        
        trendingTags.forEach(tag => {
            tag.addEventListener('click', function() {
                // Get the tag text
                const tagText = this.textContent.trim();
                
                // Find the search input and set its value
                const searchInput = document.querySelector('input.gsc-input');
                if (searchInput) {
                    searchInput.value = tagText;
                    
                    // Trigger the search
                    if (window.__gcse && window.__gcse.search) {
                        window.__gcse.search.execute(tagText);
                    }
                    
                    // Scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    }
    
    // Function to handle newsletter form submission
    function setupNewsletterForm() {
        const newsletterForm = document.querySelector('.newsletter-form');
        
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const emailInput = this.querySelector('.newsletter-input');
                const email = emailInput.value.trim();
                
                if (email && isValidEmail(email)) {
                    // In a real implementation, you would send this to your server
                    alert('Thank you for subscribing with ' + email);
                    emailInput.value = '';
                } else {
                    alert('Please enter a valid email address');
                }
            });
        }
    }
    
    // Helper function to validate email
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Function to handle FAQ section interactivity
    function setupFaqSection() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                
                // Toggle active class
                if (faqItem.classList.contains('active')) {
                    faqItem.classList.remove('active');
                } else {
                    // Close all other FAQ items
                    document.querySelectorAll('.faq-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    
                    // Open this FAQ item
                    faqItem.classList.add('active');
                }
            });
        });
        
        // Open the first FAQ item by default
        const firstFaqItem = document.querySelector('.faq-item');
        if (firstFaqItem) {
            firstFaqItem.classList.add('active');
        }
    }
});
