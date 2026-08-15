// Interactive Logic (Tab Bar, Mega Menu Dropdowns, Search, Hero Slider, Help Widget, Policy Modal, Product Detail Loader)
document.addEventListener('DOMContentLoaded', () => {
    // Exact mapping aligned with Google Drive Subfolder Structure:
    // Folders from Drive: Flowers, Key Chains, Potli Bags, Specs Holder, Sunglass Cover, Tote Bags, Toys, etc.
    const categoryGalleryMap = {
        'crochet-flowers': [
            'images/products/product_1.jpg',
            'images/products/product_21.jpg',
            'images/products/product_31.jpg',
            'images/products/product_41.jpg'
        ],
        'crochet-bouquets': [
            'images/products/product_2.jpg',
            'images/products/product_22.jpg',
            'images/products/product_32.jpg'
        ],
        'crochet-keychains': [
            'images/products/product_3.jpg',
            'images/products/product_20.jpg',
            'images/products/product_23.jpg',
            'images/products/product_43.jpg'
        ],
        'potli-bags': [
            'images/products/product_4.jpg',
            'images/products/product_24.jpg',
            'images/products/product_34.jpg',
            'images/products/product_44.jpg'
        ],
        'tote-bags': [
            'images/products/product_5.jpg',
            'images/products/product_25.jpg',
            'images/products/product_35.jpg',
            'images/products/product_45.jpg'
        ],
        'backpack-bags': [
            'images/products/product_6.jpg',
            'images/products/product_26.jpg',
            'images/products/product_36.jpg'
        ],
        'side-bags': [
            'images/products/product_7.jpg',
            'images/products/product_27.jpg',
            'images/products/product_37.jpg'
        ],
        'claws': [
            'images/products/product_8.jpg',
            'images/products/product_28.jpg',
            'images/products/product_38.jpg'
        ],
        'bouquet-blankets': [
            'images/products/product_9.jpg',
            'images/products/product_29.jpg',
            'images/products/product_39.jpg'
        ],
        'toys': [
            'images/products/product_10.jpg',
            'images/products/product_30.jpg',
            'images/products/product_40.jpg',
            'images/products/product_50.jpg'
        ],
        'coasters': [
            'images/products/product_11.jpg',
            'images/products/product_31.jpg',
            'images/products/product_41.jpg'
        ],
        'sunglasses-holders': [
            'images/products/product_12.jpg',
            'images/products/product_32.jpg',
            'images/products/product_42.jpg'
        ],
        'sunglasses-covers': [
            'images/products/product_13.jpg',
            'images/products/product_33.jpg',
            'images/products/product_43.jpg'
        ],
        'phone-covers': [
            'images/products/product_14.jpg',
            'images/products/product_34.jpg',
            'images/products/product_44.jpg'
        ],
        'earphone-covers': [
            'images/products/product_15.jpg',
            'images/products/product_35.jpg',
            'images/products/product_45.jpg'
        ],
        'flower-pots-3-size': [
            'images/products/product_16.jpg',
            'images/products/product_36.jpg',
            'images/products/product_46.jpg'
        ],
        'fridge-magnets': [
            'images/products/product_17.jpg',
            'images/products/product_37.jpg',
            'images/products/product_47.jpg'
        ],
        'scrunchies': [
            'images/products/product_18.jpg',
            'images/products/product_38.jpg',
            'images/products/product_48.jpg'
        ],
        'bow-pins': [
            'images/products/product_19.jpg',
            'images/products/product_39.jpg',
            'images/products/product_49.jpg'
        ],
        'car-charms': [
            'images/products/product_20.jpg',
            'images/products/product_40.jpg',
            'images/products/product_50.jpg'
        ],
        'curtains-holders': [
            'images/products/product_21.jpg',
            'images/products/product_1.jpg',
            'images/products/product_11.jpg'
        ],
        'crochet-frames': [
            'images/products/product_22.jpg',
            'images/products/product_2.jpg',
            'images/products/product_12.jpg'
        ],
        'chenille-flowers': [
            'images/products/product_23.jpg',
            'images/products/product_3.jpg',
            'images/products/product_13.jpg'
        ],
        'chenille-side-fillers': [
            'images/products/product_24.jpg',
            'images/products/product_4.jpg',
            'images/products/product_14.jpg'
        ],
        'chenille-leaf-fillers': [
            'images/products/product_25.jpg',
            'images/products/product_5.jpg',
            'images/products/product_15.jpg'
        ],
        'chenille-bouquet': [
            'images/products/product_26.jpg',
            'images/products/product_6.jpg',
            'images/products/product_16.jpg'
        ],
        'chenille-pots': [
            'images/products/product_27.jpg',
            'images/products/product_7.jpg',
            'images/products/product_17.jpg'
        ]
    };

    // 1. Tab Bar Navigation & Flawless Mega Menu Open/Close Handlers
    const tabLinks = document.querySelectorAll('.tab-link');
    const megaMenuPanel = document.getElementById('megaMenuPanel');
    const crochetTab = document.getElementById('tabCrochet');
    const dropdownItem = crochetTab ? crochetTab.closest('.has-dropdown') : null;

    tabLinks.forEach(tab => {
        tab.addEventListener('click', (e) => {
            if (tab !== crochetTab) {
                tabLinks.forEach(link => link.classList.remove('active'));
                e.currentTarget.classList.add('active');
            }
        });
    });

    if (dropdownItem && megaMenuPanel) {
        let menuTimer = null;

        const openMenu = () => {
            if (menuTimer) clearTimeout(menuTimer);
            megaMenuPanel.classList.add('open');
            crochetTab.classList.add('active');
        };

        const closeMenu = () => {
            menuTimer = setTimeout(() => {
                megaMenuPanel.classList.remove('open');
            }, 120);
        };

        dropdownItem.addEventListener('mouseenter', openMenu);
        dropdownItem.addEventListener('mouseleave', closeMenu);

        megaMenuPanel.addEventListener('mouseenter', openMenu);
        megaMenuPanel.addEventListener('mouseleave', closeMenu);

        crochetTab.addEventListener('click', (e) => {
            e.preventDefault();
            megaMenuPanel.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!dropdownItem.contains(e.target) && !megaMenuPanel.contains(e.target)) {
                megaMenuPanel.classList.remove('open');
            }
        });
    }

    // 2. Dynamic Product Detail Page Multi-Photo Gallery Loader
    const urlParams = new URLSearchParams(window.location.search);
    const itemParam = urlParams.get('item');
    const productTitle = document.getElementById('productTitle');
    const productNameBreadcrumb = document.getElementById('productNameBreadcrumb');
    const productCategoryTag = document.getElementById('productCategoryTag');
    const productImage = document.getElementById('productImage');
    const galleryThumbnails = document.getElementById('galleryThumbnails');

    if (itemParam && productTitle) {
        const formattedTitle = itemParam
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        productTitle.textContent = formattedTitle;
        if (productNameBreadcrumb) productNameBreadcrumb.textContent = formattedTitle;

        if (itemParam.includes('chenille')) {
            if (productCategoryTag) productCategoryTag.textContent = 'Chenille Handcrafted Collection';
        } else if (itemParam.includes('cover') || itemParam.includes('holder') || itemParam.includes('magnet') || itemParam.includes('pin') || itemParam.includes('charm')) {
            if (productCategoryTag) productCategoryTag.textContent = 'Crochet Accessory Collection';
        } else {
            if (productCategoryTag) productCategoryTag.textContent = 'Crochet Handcrafted Collection';
        }

        // Render Multi-Photo Gallery Grid
        const photoList = categoryGalleryMap[itemParam] || ['images/products/product_1.jpg'];
        
        if (productImage) {
            productImage.src = photoList[0];
        }

        if (galleryThumbnails && photoList.length > 0) {
            galleryThumbnails.innerHTML = '';
            photoList.forEach((src, idx) => {
                const thumbDiv = document.createElement('div');
                thumbDiv.className = `thumbnail-item ${idx === 0 ? 'active' : ''}`;
                
                const thumbImg = document.createElement('img');
                thumbImg.src = src;
                thumbImg.alt = `${formattedTitle} Photo ${idx + 1}`;

                thumbDiv.appendChild(thumbImg);
                
                thumbDiv.addEventListener('click', () => {
                    document.querySelectorAll('.thumbnail-item').forEach(t => t.classList.remove('active'));
                    thumbDiv.classList.add('active');
                    if (productImage) {
                        productImage.style.opacity = '0.3';
                        setTimeout(() => {
                            productImage.src = src;
                            productImage.style.opacity = '1';
                        }, 120);
                    }
                });

                galleryThumbnails.appendChild(thumbDiv);
            });
        }
    }

    // 3. Search Modal Overlay Toggle
    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearchBtn = document.getElementById('closeSearchBtn');
    const searchInput = document.getElementById('searchInput');

    if (searchBtn && searchOverlay && closeSearchBtn) {
        searchBtn.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            setTimeout(() => searchInput && searchInput.focus(), 100);
        });

        closeSearchBtn.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });

        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });
    }

    // 4. Return Policy Modal Toggle
    const policyModalOverlay = document.getElementById('policyModalOverlay');
    const closePolicyModalBtn = document.getElementById('closePolicyModalBtn');
    const openPolicyModalLink = document.getElementById('openPolicyModalLink');

    if (openPolicyModalLink && policyModalOverlay && closePolicyModalBtn) {
        openPolicyModalLink.addEventListener('click', (e) => {
            e.preventDefault();
            policyModalOverlay.classList.add('active');
        });

        closePolicyModalBtn.addEventListener('click', () => {
            policyModalOverlay.classList.remove('active');
        });

        policyModalOverlay.addEventListener('click', (e) => {
            if (e.target === policyModalOverlay) {
                policyModalOverlay.classList.remove('active');
            }
        });
    }

    // 5. Need Help Chat Modal Toggle
    const needHelpBtn = document.getElementById('needHelpBtn');
    const helpModal = document.getElementById('helpModal');
    const closeHelpBtn = document.getElementById('closeHelpBtn');
    const sendHelpMsgBtn = document.getElementById('sendHelpMsgBtn');
    const helpMsgInput = document.getElementById('helpMsgInput');

    if (needHelpBtn && helpModal && closeHelpBtn) {
        needHelpBtn.addEventListener('click', () => {
            helpModal.classList.toggle('active');
        });

        closeHelpBtn.addEventListener('click', () => {
            helpModal.classList.remove('active');
        });
    }

    if (sendHelpMsgBtn && helpMsgInput) {
        const handleSendMessage = () => {
            const text = helpMsgInput.value.trim();
            if (text) {
                const body = document.querySelector('.help-modal-body');
                const userBubble = document.createElement('div');
                userBubble.className = 'chat-bubble sent';
                userBubble.style.backgroundColor = '#072635';
                userBubble.style.color = '#ffffff';
                userBubble.style.padding = '10px 14px';
                userBubble.style.borderRadius = '12px 12px 2px 12px';
                userBubble.style.fontSize = '0.88rem';
                userBubble.style.marginTop = '10px';
                userBubble.style.alignSelf = 'flex-end';
                userBubble.textContent = text;
                body.appendChild(userBubble);
                helpMsgInput.value = '';
                body.scrollTop = body.scrollHeight;

                setTimeout(() => {
                    const replyBubble = document.createElement('div');
                    replyBubble.className = 'chat-bubble received';
                    replyBubble.style.marginTop = '10px';
                    replyBubble.textContent = 'Thank you for reaching out! Our artisan coordinator will connect with you shortly.';
                    body.appendChild(replyBubble);
                    body.scrollTop = body.scrollHeight;
                }, 1000);
            }
        };

        sendHelpMsgBtn.addEventListener('click', handleSendMessage);
        helpMsgInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSendMessage();
        });
    }

    // 6. Hero Slider Dots Interactive Switching
    const dotIndicators = document.querySelectorAll('.slider-indicators .dot-indicator');
    dotIndicators.forEach((dot) => {
        dot.addEventListener('click', () => {
            dotIndicators.forEach(d => d.classList.remove('active-pill'));
            dot.classList.add('active-pill');
        });
    });
});
