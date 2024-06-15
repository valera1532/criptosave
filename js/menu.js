var menu = "#overlay-m";
var menuBtnOpen = "#menu-btn";
var menuBtnClose = "#menu-close";

var mobileMenuItem = '.mobile-navigation .menu-item-has-children';
var searchBtn = '#search-btn';

// Mobile Menu
$(menuBtnOpen).click(function(event) {
    event.preventDefault();
    $(menu).toggleClass('menu_is_visible');
});
$(menuBtnClose).click(function(event) {
    event.preventDefault(); 
    $(menu).toggleClass('menu_is_visible');
});

// Mobile Menu Items
$(mobileMenuItem).click(function(event) {
    // event.preventDefault();
    $(this).children('ul').toggleClass('submenu-is-visible');
});
