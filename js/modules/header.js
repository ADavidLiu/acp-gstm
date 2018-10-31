class Header {
    constructor() {
        this.selectors = {
            btn: ".nav-btn",
            nav: ".wrapper__nav"
        }

        this.$DOM = {
            btn: $(this.selectors.btn),
            nav: $(this.selectors.nav)
        }

        this.$DOM.btn.click(this.toggleMenu);
    }

    toggleMenu = () => {
        this.$DOM.btn.toggleClass(`${this.selectors.btn.split(".")[1]}--active`);
        this.$DOM.nav.toggleClass(`${this.selectors.nav.split(".")[1]}--active`);
    }
}