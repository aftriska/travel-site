import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader = $('.site-header');
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content")
    //because events() is not automatically recognized in js, we have to call it here.
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
}

export default MobileMenu;
