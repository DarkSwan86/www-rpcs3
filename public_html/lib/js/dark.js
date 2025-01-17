/* Handles dark mode save states (Needs refactoring)*/
$(document).ready(function() {
    var sel = $.cookie("save-darkmode"); // get the cookie
    sel = sel == "true";
    $('.toggle-darkmode').toggleClass("activate-darkmode", sel).on('click', function(e) {
        $('.darkmode-icon').toggleClass("dm-icon");
        $('body').toggleClass("dm-bg");
		$('.darkmode-gradient').toggleClass("dm-gradient");
        $('.darkmode-invert').toggleClass("dm-invert");
        $('.darkmode-header').toggleClass("dm-header");
		$('.darkmode-discord').toggleClass("dm-discord");
        $('.darkmode-header-patreon').toggleClass("dm-header-patreon");
        $('.darkmode-feature').toggleClass("dm-bg");
		$('.darkmode-slimbar').toggleClass("dm-bg-2");
		$('.darkmode-search-border').toggleClass("dm-search-border");
		$('.darkmode-search-bg').toggleClass("dm-search-bg");
        $('.darkmode-menubar').toggleClass("dm-menubar");
		$('.darkmode-arrow-left').toggleClass("dm-arrow-left");
		$('.darkmode-arrow-right').toggleClass("dm-arrow-right");
        $('.darkmode-context').toggleClass("dm-default");
        $('.darkmode-contribute').toggleClass("dm-default");
        $('.darkmode-panel').toggleClass("dm-panel");
        $('.darkmode-txt').toggleClass("dm-txt");
        $('.darkmode-txt2').toggleClass("landing-con-container-invert");
        $('.darkmode-menubar-l1').toggleClass("dm-menubar-l1");
        $('.submenu-con-outer').toggleClass("dm-submenu-outer");
        $('.submenu-btn-button').toggleClass("dm-submenu-btn");
        $('.submenu-ico-lip').toggleClass("dm-submenu-lip");
        $('.darkmode-navsidebar-title').toggleClass("dm-navsidebar-title");
        $('.darkmode-navsidebar-anim').toggleClass("dm-default");
        $('.darkmode-navsidebar-txt').toggleClass("dm-navsidebar-txt");
		$('.site-title a').toggleClass("dm-navsidebar-txt");
        $(".markdown-body").toggleClass("dm-txt");
        $(".markdown-body h2").toggleClass("dm-txt");
        $(".markdown-body h2").toggleClass("dm-udl");
        $(".container-con-block h2").toggleClass("dm-txt");
        $(".container-con-block p").toggleClass("dm-txt");
        $(".markdown-body li").toggleClass("dm-txt");
		$(".user-img-avatar").toggleClass("dm-avatar");
        $(".user-img-flag").toggleClass("dm-flag");
        $('.darkmode-footer-logo').toggleClass("dm-footer-logo");
        $(".divTableHeading").toggleClass("dm-txt");
        $(".divTableBody").toggleClass("dm-default");
        $(".divTableBody").toggleClass("dm-txt");
        $(".compat-tx1-criteria").toggleClass("dm-default");
        $(".compat-tx1-criteria").toggleClass("dm-txt");
        $(".compat-status-text").toggleClass("dm-txt");
        $(".compat-search-character").toggleClass("dm-default-search");
        $("#compat-con-pages").toggleClass("dm-txt");
        $("#compat-author").toggleClass("dm-compat-author");
        $(".nav-links").toggleClass("dm-default dm-txt");
        $(".entry-content").toggleClass("dm-blog-body dm-txt");
        $(".entry-header").toggleClass("dm-blog-header");
		$(".entry-title a").toggleClass("dm-txt");
		$(".entry-title").toggleClass("dm-txt");
        $(".entry-footer").toggleClass("dm-blog-footer");
        $(".entry-content h2").toggleClass("dm-blog-h2");
        $(".entry-content ul li").toggleClass("dm-txt");
        $(".site-description").toggleClass("dm-blog-sidebar");
        $(".widget-title").toggleClass("dm-blog-sidebar");
        $(".page-header").toggleClass("dm-default");
        $(".page-content").toggleClass("dm-default dm-txt");
        $(".debug-main").toggleClass("dm-default");
        $(".debug-left").toggleClass("dm-default");
    });
    $(".toggle-darkmode").on("click", function() {
        var $this = $(this);
        sel = !sel;
        $this.toggleClass("activate-darkmode", sel);
        $.cookie("save-darkmode", sel, {
            expires: 365,
            path: '/'
        });
    });
});
$(document).ready(function() {
    if ($('.toggle-darkmode').hasClass('activate-darkmode')) {
        $('.darkmode-icon').addClass("dm-icon");
        $('body').addClass("dm-bg");
		$('.darkmode-gradient').addClass("dm-gradient");
        $('.darkmode-invert').addClass("dm-invert");
        $('.darkmode-header').addClass("dm-header");
		$('.darkmode-discord').addClass("dm-discord");
        $('.darkmode-header-patreon').addClass("dm-header-patreon");
        $('.darkmode-feature').addClass("dm-bg");
		$('.darkmode-slimbar').addClass("dm-bg-2");
		$('.darkmode-search-border').addClass("dm-search-border");
		$('.darkmode-search-bg').addClass("dm-search-bg");
        $('.darkmode-menubar').addClass("dm-menubar");
		$('.darkmode-arrow-left').addClass("dm-arrow-left");
		$('.darkmode-arrow-right').addClass("dm-arrow-right");
        $('.darkmode-context').addClass("dm-default");
        $('.darkmode-contribute').addClass("dm-default");
        $('.darkmode-panel').addClass("dm-panel");
        $('.darkmode-txt').addClass("dm-txt");
        $('.darkmode-txt2').addClass("landing-con-container-invert");
        $('.darkmode-menubar-l1').addClass("dm-menubar-l1");
        $('.submenu-con-outer').addClass("dm-submenu-outer");
        $('.submenu-btn-button').addClass("dm-submenu-btn");
        $('.submenu-ico-lip').addClass("dm-submenu-lip");
        $('.darkmode-navsidebar-title').addClass("dm-navsidebar-title");
        $('.darkmode-navsidebar-anim').addClass("dm-default");
        $('.darkmode-navsidebar-txt').addClass("dm-navsidebar-txt");
		$('.site-title a').addClass("dm-navsidebar-txt");
        $(".markdown-body").addClass("dm-txt");
        $(".markdown-body h2").addClass("dm-txt");
        $(".markdown-body h2").addClass("dm-udl");
        $(".container-con-block h2").addClass("dm-txt");
        $(".container-con-block p").addClass("dm-txt");
        $(".markdown-body li").addClass("dm-txt");
		$(".user-img-avatar").addClass("dm-avatar");
        $(".user-img-flag").addClass("dm-flag");
        $('.darkmode-footer-logo').addClass("dm-footer-logo");
        $(".divTableHeading").toggleClass("dm-txt");
        $(".divTableBody").toggleClass("dm-default");
        $(".divTableBody").toggleClass("dm-txt");
        $(".compat-tx1-criteria").toggleClass("dm-default");
        $(".compat-tx1-criteria").toggleClass("dm-txt");
        $(".compat-status-text").toggleClass("dm-txt");
        $(".compat-search-character").toggleClass("dm-default-search");
        $("#compat-con-pages").toggleClass("dm-txt");
        $("#compat-author").toggleClass("dm-compat-author");
        $(".nav-links").addClass("dm-default dm-txt");
        $(".entry-content").addClass("dm-blog-body dm-txt");
        $(".entry-header").addClass("dm-blog-header");
		$(".entry-title a").addClass("dm-txt");
		$(".entry-title").addClass("dm-txt");
        $(".entry-footer").addClass("dm-blog-footer");
        $(".entry-content h2").addClass("dm-blog-h2");
        $(".entry-content ul li").addClass("dm-txt");
        $(".site-description").addClass("dm-blog-sidebar");
        $(".widget-title").addClass("dm-blog-sidebar");
        $(".page-header").addClass("dm-default");
        $(".page-content").addClass("dm-default dm-txt");
        $(".debug-main").addClass("dm-default");
        $(".debug-left").addClass("dm-default");
    } else {
        $('.darkmode-icon').removeClass("dm-icon");
        $('body').removeClass("dm-bg");
		$('.darkmode-gradient').removeClass("dm-gradient");
        $('.darkmode-invert').removeClass("dm-invert");
        $('.darkmode-header').removeClass("dm-header");
		$('.darkmode-discord').removeClass("dm-discord");
        $('.darkmode-header-patreon').removeClass("dm-header-patreon");
        $('.darkmode-feature').removeClass("dm-bg");
		$('.darkmode-slimbar').removeClass("dm-bg-2");
		$('.darkmode-search-border').removeClass("dm-search-border");
		$('.darkmode-search-bg').removeClass("dm-search-bg");
        $('.darkmode-menubar').removeClass("dm-menubar");
		$('.darkmode-arrow-left').removeClass("dm-arrow-left");
		$('.darkmode-arrow-right').removeClass("dm-arrow-right");
        $('.darkmode-context').removeClass("dm-default");
        $('.darkmode-contribute').removeClass("dm-default");
        $('.darkmode-panel').removeClass("dm-panel");
        $('.darkmode-txt').removeClass("dm-txt");
        $('.darkmode-txt2').addClass("landing-con-container-invert");
        $('.darkmode-menubar-l1').removeClass("dm-menubar-l1");
        $('.submenu-con-outer').removeClass("dm-submenu-outer");
        $('.submenu-btn-button').removeClass("dm-submenu-btn");
        $('.submenu-ico-lip').removeClass("dm-submenu-lip");
        $('.darkmode-navsidebar-title').removeClass("dm-navsidebar-title");
        $('.darkmode-navsidebar-anim').removeClass("dm-default");
        $('.darkmode-navsidebar-txt').removeClass("dm-navsidebar-txt");
		$('.site-title a').removeClass("dm-navsidebar-txt");
        $(".markdown-body").removeClass("dm-txt");
        $(".markdown-body h2").removeClass("dm-txt");
        $(".markdown-body h2").removeClass("dm-udl");
        $(".container-con-block h2").removeClass("dm-txt");
        $(".container-con-block p").removeClass("dm-txt");
        $(".markdown-body li").removeClass("dm-txt");
		$(".user-img-avatar").removeClass("dm-avatar");
        $(".user-img-flag").removeClass("dm-flag");
        $('.darkmode-footer-logo').removeClass("dm-footer-logo");
        $(".divTableHeading").removeClass("dm-txt");
        $(".divTableBody").removeClass("dm-default");
        $(".divTableBody").removeClass("dm-txt");
        $(".compat-tx1-criteria").removeClass("dm-default");
        $(".compat-tx1-criteria").removeClass("dm-txt");
        $(".compat-status-text").removeClass("dm-txt");
        $(".compat-search-character").removeClass("dm-default-search");
        $("#compat-con-pages").removeClass("dm-txt");
        $("#compat-author").removeClass("dm-compat-author");
        $(".nav-links").removeClass("dm-default dm-txt");
        $(".entry-content").removeClass("dm-blog-body dm-txt");
        $(".entry-header").removeClass("dm-blog-header");
		$(".entry-title a").removeClass("dm-txt");
		$(".entry-title").removeClass("dm-txt");
        $(".entry-footer").removeClass("dm-blog-footer");
        $(".entry-content h2").removeClass("dm-blog-h2");
        $(".entry-content ul li").removeClass("dm-txt");
        $(".site-description").removeClass("dm-blog-sidebar");
        $(".widget-title").removeClass("dm-blog-sidebar");
        $(".page-header").removeClass("dm-default");
        $(".page-content").removeClass("dm-default dm-txt");
        $(".debug-main").removeClass("dm-default");
        $(".debug-left").removeClass("dm-default");
    }
});