// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set default language
    let currentLang = 'ar';
    
    // Get language selector element
    const languageSelect = document.getElementById('language-select');
    
    // Add event listener for language change
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const selectedLang = this.value;
            changeLanguage(selectedLang);
        });
    }
    
    // Function to change the language
    function changeLanguage(lang) {
        // Update current language
        currentLang = lang;
        
        // Change HTML direction attribute
        if (lang === 'ar' || lang === 'he') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }
        
        // Change HTML lang attribute
        document.documentElement.setAttribute('lang', lang);
        
        // Update page title
        document.title = translations[lang].title;
        
        // Update ad label
        const adLabel = document.querySelector('.ad-label');
        if (adLabel) {
            adLabel.textContent = translations[lang].adLabel;
        }
        
        // Update category headers
        updateCategoryHeaders(lang);
        
        // Update category keywords
        updateCategoryKeywords(lang);
        
        // Update footer content
        updateFooter(lang);
        
        // Save language preference to localStorage
        localStorage.setItem('preferredLanguage', lang);
    }
    
    // Function to update category headers
    function updateCategoryHeaders(lang) {
        const aiHeader = document.querySelector('.category:nth-child(1) .category-header h3');
        const businessHeader = document.querySelector('.category:nth-child(2) .category-header h3');
        const healthHeader = document.querySelector('.category:nth-child(3) .category-header h3');
        const travelHeader = document.querySelector('.category:nth-child(4) .category-header h3');
        const educationHeader = document.querySelector('.category:nth-child(5) .category-header h3');
        
        if (aiHeader) aiHeader.textContent = translations[lang].categories.ai;
        if (businessHeader) businessHeader.textContent = translations[lang].categories.business;
        if (healthHeader) healthHeader.textContent = translations[lang].categories.health;
        if (travelHeader) travelHeader.textContent = translations[lang].categories.travel;
        if (educationHeader) educationHeader.textContent = translations[lang].categories.education;
    }
    
    // Function to update category keywords
    function updateCategoryKeywords(lang) {
        // AI category keywords
        const aiKeywords = document.querySelectorAll('.category:nth-child(1) .category-content li a');
        if (aiKeywords.length > 0) {
            for (let i = 0; i < aiKeywords.length && i < translations[lang].aiKeywords.length; i++) {
                aiKeywords[i].textContent = translations[lang].aiKeywords[i];
            }
        }
        
        // Business category keywords
        const businessKeywords = document.querySelectorAll('.category:nth-child(2) .category-content li a');
        if (businessKeywords.length > 0) {
            for (let i = 0; i < businessKeywords.length && i < translations[lang].businessKeywords.length; i++) {
                businessKeywords[i].textContent = translations[lang].businessKeywords[i];
            }
        }
        
        // Health category keywords
        const healthKeywords = document.querySelectorAll('.category:nth-child(3) .category-content li a');
        if (healthKeywords.length > 0) {
            for (let i = 0; i < healthKeywords.length && i < translations[lang].healthKeywords.length; i++) {
                healthKeywords[i].textContent = translations[lang].healthKeywords[i];
            }
        }
        
        // Travel category keywords
        const travelKeywords = document.querySelectorAll('.category:nth-child(4) .category-content li a');
        if (travelKeywords.length > 0) {
            for (let i = 0; i < travelKeywords.length && i < translations[lang].travelKeywords.length; i++) {
                travelKeywords[i].textContent = translations[lang].travelKeywords[i];
            }
        }
        
        // Education category keywords
        const educationKeywords = document.querySelectorAll('.category:nth-child(5) .category-content li a');
        if (educationKeywords.length > 0) {
            for (let i = 0; i < educationKeywords.length && i < translations[lang].educationKeywords.length; i++) {
                educationKeywords[i].textContent = translations[lang].educationKeywords[i];
            }
        }
    }
    
    // Function to update footer content
    function updateFooter(lang) {
        // About section
        const aboutTitle = document.querySelector('.footer-section.about h3');
        const aboutDesc = document.querySelector('.footer-section.about p');
        const contactSpans = document.querySelectorAll('.footer-section.about .contact span');
        
        if (aboutTitle) aboutTitle.textContent = translations[lang].footer.about.title;
        if (aboutDesc) aboutDesc.textContent = translations[lang].footer.about.description;
        
        // Links section
        const linksTitle = document.querySelector('.footer-section.links h3');
        const linkItems = document.querySelectorAll('.footer-section.links ul li a');
        
        if (linksTitle) linksTitle.textContent = translations[lang].footer.links.title;
        if (linkItems.length > 0) {
            const linkTexts = [
                translations[lang].footer.links.home,
                translations[lang].footer.links.about,
                translations[lang].footer.links.services,
                translations[lang].footer.links.privacy,
                translations[lang].footer.links.terms,
                translations[lang].footer.links.contact
            ];
            
            for (let i = 0; i < linkItems.length && i < linkTexts.length; i++) {
                linkItems[i].textContent = linkTexts[i];
            }
        }
        
        // Trending section
        const trendingTitle = document.querySelector('.footer-section.trending h3');
        const trendingTags = document.querySelectorAll('.footer-section.trending .tag');
        
        if (trendingTitle) trendingTitle.textContent = translations[lang].footer.trending.title;
        if (trendingTags.length > 0) {
            for (let i = 0; i < trendingTags.length && i < translations[lang].footer.trending.tags.length; i++) {
                trendingTags[i].textContent = translations[lang].footer.trending.tags[i];
            }
        }
        
        // Newsletter section
        const newsletterTitle = document.querySelector('.footer-section.newsletter h3');
        const newsletterDesc = document.querySelector('.footer-section.newsletter p');
        const newsletterInput = document.querySelector('.footer-section.newsletter .newsletter-input');
        const newsletterBtn = document.querySelector('.footer-section.newsletter .newsletter-btn');
        
        if (newsletterTitle) newsletterTitle.textContent = translations[lang].footer.newsletter.title;
        if (newsletterDesc) newsletterDesc.textContent = translations[lang].footer.newsletter.description;
        if (newsletterInput) newsletterInput.placeholder = translations[lang].footer.newsletter.placeholder;
        if (newsletterBtn) newsletterBtn.textContent = translations[lang].footer.newsletter.button;
        
        // Footer bottom
        const copyright = document.querySelector('.footer-bottom p');
        const bottomLinks = document.querySelectorAll('.footer-bottom-links a');
        
        if (copyright) copyright.textContent = translations[lang].footer.bottom.copyright;
        if (bottomLinks.length > 0) {
            const bottomLinkTexts = [
                translations[lang].footer.bottom.privacy,
                translations[lang].footer.bottom.terms,
                translations[lang].footer.bottom.cookies
            ];
            
            for (let i = 0; i < bottomLinks.length && i < bottomLinkTexts.length; i++) {
                bottomLinks[i].textContent = bottomLinkTexts[i];
            }
        }
    }
    
    // Check if there's a saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        // Update language selector value
        if (languageSelect) {
            languageSelect.value = savedLang;
        }
        
        // Change to saved language
        changeLanguage(savedLang);
    } else {
        // Use default language (Arabic)
        changeLanguage('ar');
    }
});
