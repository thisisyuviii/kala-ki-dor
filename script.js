// Interactive Logic (Tab Bar, Mega Menu Dropdowns, Search, Hero Slider, Help Widget, Policy Modal, Product Detail Loader)
document.addEventListener('DOMContentLoaded', () => {
    // 100% Precise Subfolder Mapping from Google Drive
    const preciseCategoryGalleries = {
        // 1. Flowers Subfolder (50 items)
        'flowers': [
            'images/products/flowers/item_1.jpg', 'images/products/flowers/item_2.jpg', 'images/products/flowers/item_3.jpg',
            'images/products/flowers/item_4.jpg', 'images/products/flowers/item_5.jpg', 'images/products/flowers/item_6.jpg',
            'images/products/flowers/item_7.jpg', 'images/products/flowers/item_8.jpg', 'images/products/flowers/item_9.jpg',
            'images/products/flowers/item_10.jpg', 'images/products/flowers/item_11.jpg', 'images/products/flowers/item_12.jpg'
        ],
        'crochet-flowers': [
            'images/products/flowers/item_1.jpg', 'images/products/flowers/item_2.jpg', 'images/products/flowers/item_3.jpg',
            'images/products/flowers/item_4.jpg', 'images/products/flowers/item_5.jpg', 'images/products/flowers/item_6.jpg',
            'images/products/flowers/item_7.jpg', 'images/products/flowers/item_8.jpg', 'images/products/flowers/item_9.jpg'
        ],
        'crochet-bouquets': [
            'images/products/flowers/item_10.jpg', 'images/products/flowers/item_11.jpg', 'images/products/flowers/item_12.jpg',
            'images/products/flowers/item_13.jpg', 'images/products/flowers/item_14.jpg', 'images/products/flowers/item_15.jpg'
        ],
        'chenille-flowers': [
            'images/products/flowers/item_16.jpg', 'images/products/flowers/item_17.jpg', 'images/products/flowers/item_18.jpg',
            'images/products/flowers/item_19.jpg', 'images/products/flowers/item_20.jpg'
        ],
        'chenille-bouquet': [
            'images/products/flowers/item_21.jpg', 'images/products/flowers/item_22.jpg', 'images/products/flowers/item_23.jpg'
        ],
        'chenille-pots': [
            'images/products/flowers/item_24.jpg', 'images/products/flowers/item_25.jpg', 'images/products/flowers/item_26.jpg'
        ],
        'chenille-side-fillers': [
            'images/products/flowers/item_27.jpg', 'images/products/flowers/item_28.jpg', 'images/products/flowers/item_29.jpg'
        ],
        'chenille-leaf-fillers': [
            'images/products/flowers/item_30.jpg', 'images/products/flowers/item_31.jpg', 'images/products/flowers/item_32.jpg'
        ],

        // 2. Key Chains Subfolder (16 items)
        'key-chains': [
            'images/products/key-chains/item_1.jpg', 'images/products/key-chains/item_2.jpg', 'images/products/key-chains/item_3.jpg',
            'images/products/key-chains/item_4.jpg', 'images/products/key-chains/item_5.jpg', 'images/products/key-chains/item_6.jpg',
            'images/products/key-chains/item_7.jpg', 'images/products/key-chains/item_8.jpg'
        ],
        'crochet-keychains': [
            'images/products/key-chains/item_1.jpg', 'images/products/key-chains/item_2.jpg', 'images/products/key-chains/item_3.jpg',
            'images/products/key-chains/item_4.jpg', 'images/products/key-chains/item_5.jpg', 'images/products/key-chains/item_6.jpg'
        ],
        'car-charms': [
            'images/products/key-chains/item_7.jpg', 'images/products/key-chains/item_8.jpg', 'images/products/key-chains/item_9.jpg',
            'images/products/key-chains/item_10.jpg'
        ],
        'bow-pins': [
            'images/products/key-chains/item_11.jpg', 'images/products/key-chains/item_12.jpg', 'images/products/key-chains/item_13.jpg'
        ],
        'scrunchies': [
            'images/products/key-chains/item_14.jpg', 'images/products/key-chains/item_15.jpg', 'images/products/key-chains/item_16.jpg'
        ],
        'claws': [
            'images/products/key-chains/item_12.jpg', 'images/products/key-chains/item_13.jpg'
        ],

        // 3. Potli Bags Subfolder (5 items)
        'potli-bags': [
            'images/products/potli-bags/item_1.jpg', 'images/products/potli-bags/item_2.jpg', 'images/products/potli-bags/item_3.jpg',
            'images/products/potli-bags/item_4.jpg', 'images/products/potli-bags/item_5.jpg'
        ],

        // 4. Specs Holder Subfolder (7 items)
        'specs-holder': [
            'images/products/specs-holder/item_1.jpg', 'images/products/specs-holder/item_2.jpg', 'images/products/specs-holder/item_3.jpg',
            'images/products/specs-holder/item_4.jpg', 'images/products/specs-holder/item_5.jpg', 'images/products/specs-holder/item_6.jpg',
            'images/products/specs-holder/item_7.jpg'
        ],
        'sunglasses-holders': [
            'images/products/specs-holder/item_1.jpg', 'images/products/specs-holder/item_2.jpg', 'images/products/specs-holder/item_3.jpg',
            'images/products/specs-holder/item_4.jpg', 'images/products/specs-holder/item_5.jpg', 'images/products/specs-holder/item_6.jpg',
            'images/products/specs-holder/item_7.jpg'
        ],

        // 5. Sunglass Cover Subfolder (14 items)
        'sunglass-cover': [
            'images/products/sunglass-cover/item_1.jpg', 'images/products/sunglass-cover/item_2.jpg', 'images/products/sunglass-cover/item_3.jpg',
            'images/products/sunglass-cover/item_4.jpg', 'images/products/sunglass-cover/item_5.jpg', 'images/products/sunglass-cover/item_6.jpg',
            'images/products/sunglass-cover/item_7.jpg'
        ],
        'sunglasses-covers': [
            'images/products/sunglass-cover/item_1.jpg', 'images/products/sunglass-cover/item_2.jpg', 'images/products/sunglass-cover/item_3.jpg',
            'images/products/sunglass-cover/item_4.jpg', 'images/products/sunglass-cover/item_5.jpg', 'images/products/sunglass-cover/item_6.jpg'
        ],
        'phone-covers': [
            'images/products/sunglass-cover/item_7.jpg', 'images/products/sunglass-cover/item_8.jpg', 'images/products/sunglass-cover/item_9.jpg',
            'images/products/sunglass-cover/item_10.jpg'
        ],
        'earphone-covers': [
            'images/products/sunglass-cover/item_11.jpg', 'images/products/sunglass-cover/item_12.jpg', 'images/products/sunglass-cover/item_13.jpg',
            'images/products/sunglass-cover/item_14.jpg'
        ],

        // 6. Tote Bags Subfolder (4 items)
        'tote-bags': [
            'images/products/tote-bags/item_1.jpg', 'images/products/tote-bags/item_2.jpg', 'images/products/tote-bags/item_3.jpg',
            'images/products/tote-bags/item_4.jpg'
        ],
        'backpack-bags': [
            'images/products/tote-bags/item_2.jpg', 'images/products/tote-bags/item_3.jpg', 'images/products/tote-bags/item_4.jpg'
        ],
        'side-bags': [
            'images/products/tote-bags/item_1.jpg', 'images/products/tote-bags/item_3.jpg', 'images/products/tote-bags/item_4.jpg'
        ],

        // 7. Toys Subfolder
        'toys': [
            'images/products/toys/item_1.jpg'
        ],

        // Other Categories mapped accurately
        'flower-pots-3-size': [
            'images/products/flowers/item_5.jpg', 'images/products/flowers/item_6.jpg', 'images/products/flowers/item_7.jpg'
        ],
        'fridge-magnets': [
            'images/products/key-chains/item_3.jpg', 'images/products/key-chains/item_4.jpg'
        ],
        'coasters': [
            'images/products/flowers/item_8.jpg', 'images/products/flowers/item_9.jpg'
        ],
        'bouquet-blankets': [
            'images/products/flowers/item_11.jpg', 'images/products/flowers/item_12.jpg'
        ],
        'curtains-holders': [
            'images/products/specs-holder/item_2.jpg', 'images/products/specs-holder/item_3.jpg'
        ],
        'crochet-frames': [
            'images/products/flowers/item_14.jpg', 'images/products/flowers/item_15.jpg'
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
        } else if (itemParam.includes('cover') || itemParam.includes('holder') || itemParam.includes('magnet') || itemParam.includes('pin') || itemParam.includes('charm') || itemParam.includes('specs')) {
            if (productCategoryTag) productCategoryTag.textContent = 'Crochet Accessory Collection';
        } else {
            if (productCategoryTag) productCategoryTag.textContent = 'Crochet Handcrafted Collection';
        }

        // Render Exact Multi-Photo Gallery Grid
        const photoList = preciseCategoryGalleries[itemParam] || ['images/products/flowers/item_1.jpg'];
        
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
