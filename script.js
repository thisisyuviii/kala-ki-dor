// Theme Initialization (Immediate Execution to avoid flash)
(() => {
    const savedTheme = localStorage.getItem('kala_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

// Interactive Logic (Theme Switcher, Tab Bar, Mega Menu, Search, Hero Slider, Help Widget, Policy Modal, Mobile Drawer)
document.addEventListener('DOMContentLoaded', () => {

    // 0. Theme Toggle Handlers & UI Synchronization
    const updateThemeUI = (theme) => {
        const isDark = theme === 'dark';
        
        // Update floating switch button
        const floatingIcon = document.getElementById('themeSwitchIcon');
        const floatingText = document.getElementById('themeSwitchText');
        if (floatingIcon && floatingText) {
            floatingIcon.textContent = isDark ? '☀️' : '🌙';
            floatingText.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        }

        // Update nav bar switch buttons
        const navIcons = document.querySelectorAll('.theme-nav-icon');
        const navLabels = document.querySelectorAll('.theme-nav-label');
        navIcons.forEach(icon => {
            icon.textContent = isDark ? '☀️' : '🌙';
        });
        navLabels.forEach(label => {
            label.textContent = isDark ? 'Light Mode' : 'Dark Mode';
        });
    };

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateThemeUI(currentTheme);

    const toggleTheme = () => {
        const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('kala_theme', newTheme);
        updateThemeUI(newTheme);
    };

    const themeToggleBtns = document.querySelectorAll('.theme-switch-pill, .theme-nav-pill-btn, #themeToggleBtn, #mobileThemeToggleBtn, #themeSwitchPillBtn');
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });

    // 1. Tab Bar Navigation & Mega Menu Handlers
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

    // 2. Mobile Navigation Drawer Toggle Handlers
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNavDrawer = document.getElementById('mobileNavDrawer');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-sublink');

    const openMobileNav = () => {
        if (mobileNavDrawer && mobileNavOverlay) {
            mobileNavDrawer.classList.add('open');
            mobileNavOverlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeMobileNav = () => {
        if (mobileNavDrawer && mobileNavOverlay) {
            mobileNavDrawer.classList.remove('open');
            mobileNavOverlay.classList.remove('open');
            document.body.style.overflow = '';
        }
    };

    if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMobileNav);
    if (closeMobileNavBtn) closeMobileNavBtn.addEventListener('click', closeMobileNav);
    if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileNav);
    mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileNav));

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
                userBubble.style.backgroundColor = '#f59e0b';
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
