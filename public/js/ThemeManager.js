export class ThemeManager {
    'use-strict';
    /**
     * Constructs object of class ThemeManager
     * @param {string} themeToggle - the element that changes the website theme on click
     * @param {string} theme - light for initial theme light and vice versa for dark
     */
    constructor(themeToggle, theme = 'light') {
        //get theme toggle DOM node
        if (!themeToggle) {
            console.error(`A valid DOM element must be passed as the themeToggle. You passed ${themeToggle}`);
            return;
        }
        this.themeToggle = themeToggle;
        this.themeToggle.addEventListener('click', () => this.switchTheme());

        //get initial theme and apply it
        this.theme = theme;
        if (localStorage.getItem('data-theme')) {
            if (localStorage.getItem('data-theme') === (theme === 'light' ? 'dark' : 'light')) {
                this.theme = (theme === 'light' ? 'dark' : 'light');
            }
        }
        else if (window.matchMedia(`(prefers-color-scheme: ${(theme === 'light' ? 'dark' : 'light')})`).matches) {
            this.theme = (theme === 'light' ? 'dark' : 'light');
        }
        this._applyTheme();

        //add listener to change web theme on os theme change
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
            this.theme = (e.matches ? 'light' : 'dark');
            this._applyTheme();
        });

    }

    /**
     * Private _applyTheme sets documentElement and localStorage 'data-theme' attribute
     * effectively changing the style of the page due to the css changing on 'data-theme'
     */
    _applyTheme = () => {
        this.themeToggle.innerHTML = (this.theme === 'light' ? 'Dark' : 'Light');
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('data-theme', this.theme);
    }

    /**
     * switchTheme toggles the website theme on themeToggle event: 'click'
     */
    switchTheme = () => {
        this.theme = (this.theme === 'light' ? 'dark' : 'light');
        this._applyTheme();
    }
}
