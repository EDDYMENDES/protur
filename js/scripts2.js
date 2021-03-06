! function(e) {
    "use strict";

    function a() {
        var a = e('input[type="search"], input[type="text"], input[type="email"], textarea');
        a.each(function() {
            var a = e(this).val();
            e(this).focus(function() {
                e(this).val() === a && e(this).val("")
            }), e(this).blur(function() {
                "" === e(this).val() && e(this).val(a)
            })
        })
    }

    function t() {
        e(".awe-masonry").each(function() {
            var a = e(this),
                t = a.children(".awe-masonry__item");
            setTimeout(function() {
                a.masonry({
                    columnWidth: ".awe-masonry__item:first-child",
                    itemSelector: ".awe-masonry__item"
                })
            }, 1), 1 === t.length && a.addClass("item-1"), 2 === t.length && a.addClass("item-2"), 3 === t.length && a.addClass("item-3"), 4 === t.length && a.addClass("item-4"), 5 === t.length && a.addClass("item-5"), 6 === t.length && a.addClass("item-6"), 7 === t.length && a.addClass("item-7"), 8 === t.length && a.addClass("item-8"), 9 === t.length && a.addClass("item-9")
        })
    }

    function i() {
        e(".awe-parallax").each(function() {
            w.any() || e(this).parallax("50%", .2)
        })
    }

    function n() {
        var a = ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'];
        e(".purpose-slider").length && e(".purpose-slider").owlCarousel({
            autoPlay: !1,
            slideSpeed: 300,
            items: 7,
            navigation: !0,
            pagination: !1,
            autoHeight: !0,
            navigationText: a
        }), e(".related-slider").length && e(".related-slider").owlCarousel({
            autoPlay: 1e4,
            slideSpeed: 300,
            navigation: !0,
            pagination: !1,
            singleItem: !0,
            autoHeight: !0,
            navigationText: a
        }), e(".product-slider").length && (e(".product-slider").owlCarousel({
            autoPlay: !1,
            slideSpeed: 500,
            navigation: !0,
            pagination: !1,
            singleItem: !0,
            autoHeight: !0,
            navigationText: a,
            afterAction: o
        }), e(".product-slider-thumb").owlCarousel({
            slideSpeed: 500,
            items: 5,
            itemsCustom: [
                [320, 3],
                [480, 4],
                [768, 4],
                [992, 5],
                [1200, 5]
            ],
            pagination: !1,
            navigation: !1,
            navigationText: a,
            mouseDrag: !1,
            afterInit: function(e) {
                e.find(".owl-item").eq(0).addClass("synced")
            }
        }), e(".product-slider-thumb").on("click", ".owl-item", function(a) {
            if (a.preventDefault(), e(this).hasClass("synced")) return !1;
            var t = e(this).data("owlItem");
            e(".product-slider").trigger("owl.goTo", t)
        }))
    }

    function o(a) {
        var t = this.currentItem;
        e(".product-slider-thumb").find(".owl-item").removeClass("synced").eq(t).addClass("synced"), void 0 !== e(".product-slider-thumb").data("owlCarousel") && r(t)
    }

    function r(a) {
        var t = e(".product-slider-thumb").data("owlCarousel").owl.visibleItems,
            i = a,
            n = !1;
        for (var o in t)
            if (i == t[o]) var n = !0;
        0 == n ? i > t[t.length - 1] ? e(".product-slider-thumb").trigger("owl.goTo", i - t.length + 2) : (i - 1 == -1 && (i = 0), e(".product-slider-thumb").trigger("owl.goTo", i)) : i == t[t.length - 1] ? e(".product-slider-thumb").trigger("owl.goTo", t[1]) : i == t[0] && e(".product-slider-thumb").trigger("owl.goTo", i - 1)
    }

    function s() {
        e(".awe-calendar").each(function() {
            e(this).datepicker({
                showOtherMonths: !0,
                selectOtherMonths: !0,
                dayNamesMin: ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"]
            })
        })
    }

    function l() {
        e(".price-slider").each(function() {
            var a = e(this);
            a.slider({
                min: 0,
                max: 1e4,
                step: 5,
                values: [0, 1e4],
                range: !0,
                slide: function(t, i) {
                    var n = (e(this), i.values);
                    a.siblings(".price_slider_amount").find(".from").text("$" + n[0]), a.siblings(".price_slider_amount").find(".to").text("$" + n[1])
                }
            });
            var t = a.slider("option", "values");
            a.siblings(".price_slider_amount").find(".from").text("$" + t[0]), a.siblings(".price_slider_amount").find(".to").text("$" + t[1])
        })
    }

    function c() {
        e(".awe-select").each(function() {
            var a = e(this);
            a.wrap('<div class="awe-select-wrapper"></div>'), a.after('<i class="fa fa-caret-down"></i>')
        })
    }

    function d() {
        e(".tabs").tabs({
            active: 0,
            show: {
                effect: "fade",
                duration: 200
            },
            hide: {
                effect: "fade",
                duration: 200
            }
        })
    }

    function p() {
        e(".accordion").accordion({
            collapsible: !0,
            heightStyle: "content",
            animate: 200
        })
    }

    function g() {
        var a = e(".travelling-tabs__time").find(".season"),
            t = a.find(".item"),
            i = e(".travelling-tabs__time").find(".month"),
            n = i.find(".item");
        t.each(function() {
            var a = e(this);
            a.hover(function() {
                e(this).addClass("hover-active"), e(this).hasClass("spring") && e('[data-season="spring"]').addClass("hover-active"), e(this).hasClass("summer") && e('[data-season="summer"]').addClass("hover-active"), e(this).hasClass("autumn") && e('[data-season="autumn"]').addClass("hover-active"), e(this).hasClass("winter") && e('[data-season="winter"]').addClass("hover-active")
            }, function() {
                e(this).removeClass("hover-active"), n.removeClass("hover-active")
            }), n.hover(function() {
                var a = e(this),
                    t = a.data("season");
                a.addClass("hover-active"), e("." + t).addClass("hover-active")
            }, function() {
                n.removeClass("hover-active"), t.removeClass("hover-active")
            })
        })
    }

    function h() {
        e(".awe-services").length > 0 && e(".awe-services").parent().theiaStickySidebar({
            updateSidebarHeight: !0
        }), e(".detail-sidebar").length > 0 && e(".detail-sidebar").parent().theiaStickySidebar({
            updateSidebarHeight: !0,
            additionalMarginTop: -40
        })
    }

    function u() {
        e(".initiative-choose-other-open").length && e(".initiative-choose-other-open").magnificPopup({
            type: "ajax",
            closeMarkup: '<button title="%title%" class="mfp-close">Cancel <i class="awe-icon awe-icon-close-o"></i></button>'
        }), e(".flight-popup-open").length && e(".flight-popup-open").magnificPopup({
            type: "ajax",
            callbacks: {
                ajaxContentAdded: function() {
                    var a = ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'];
                    e(".flight-popup__slider").owlCarousel({
                        autoPlay: !1,
                        slideSpeed: 300,
                        navigation: !0,
                        pagination: !1,
                        singleItem: !0,
                        autoHeight: !0,
                        navigationText: a
                    }), e(".flight-popup__map-content-list").mdMapExtend({
                        appendTo: ".flight-popup__map-info",
                        autoCenter: !0,
                        zoom: 9,
                        style: "lightGray",
                        iconMarker: "images/marker.png",
                        scrollwheel: !1
                    }), w.any() || e(".flight-popup__scrollbar").each(function() {
                        var a = e(this);
                        a.perfectScrollbar({
                            maxScrollbarLength: 150,
                            wheelSpeed: .5
                        }), a.perfectScrollbar("update")
                    }), e(".tabs").tabs({
                        active: 0,
                        show: {
                            effect: "fade",
                            duration: 200
                        },
                        hide: {
                            effect: "fade",
                            duration: 200
                        },
                        activate: function(a, t) {
                            e(".flight-popup__grid-wrapper .image-wrap").imageCover(), e(".flight-popup__grid-wrapper", t.newPanel).length && !e(".flight-popup__grid-wrapper", t.newPanel).data("mansory-loaded") && (e(".flight-popup__grid-wrapper", t.newPanel).masonry({
                                columnWidth: ".grid-item.col-md-3",
                                itemSelector: ".grid-item"
                            }), e(".flight-popup__grid-wrapper", t.newPanel).data("mansory-loaded", 1))
                        }
                    }), e(".flight-popup__grid-wrapper").length && (e(".flight-popup__grid-wrapper .grid-item:nth-of-type(1), .flight-popup__grid-wrapper .grid-item:nth-of-type(10n + 1)").removeClass("col-md-3").addClass("col-md-6"), e(".flight-popup__grid-wrapper .grid-item:nth-of-type(8), .flight-popup__grid-wrapper .grid-item:nth-of-type(10n + 8)").removeClass("col-md-3").addClass("col-md-6"))
                }
            }
        }), e(".full-price-open-popup").length && e(".full-price-open-popup").magnificPopup({
            type: "ajax",
            closeMarkup: '<button title="%title%" class="mfp-close">Cancel <i class="awe-icon awe-icon-close-o"></i></button>',
            callbacks: {
                ajaxContentAdded: function() {
                    c(), a(), e(".awe-calendar").each(function() {
                        e(this).datepicker({
                            showOtherMonths: !0,
                            selectOtherMonths: !0,
                            dayNamesMin: ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"]
                        })
                    })
                }
            }
        })
    }

    function m() {
        var a = e(".header-page__inner"),
            t = a.offset().top,
            i = e(window).scrollTop(),
            n = a.outerHeight(),
            o = t + n;
        a.data("scrollTop", i), e(window).scroll(function() {
            var i = e(window).scrollTop(),
                r = a.data("scrollTop");
            if (i > r) {
                if (a.hasClass("header-page__fixed")) {
                    var s = a.data("y"),
                        l = r - i,
                        c = n > s + l ? s - l : n,
                        d = "translateY(-" + c + "px)";
                    a.css({
                        "-webkit-transform": d,
                        "-moz-transform": d,
                        "-ms-transform": d,
                        "-o-transform": d,
                        transform: d
                    }).data("y", c)
                } else if (i > o) {
                    var p = "translateY(-" + n + "px)";
                    a.addClass("header-page__fixed").css({
                        "-webkit-transform": p,
                        "-moz-transform": p,
                        "-ms-transform": p,
                        "-o-transform": p,
                        transform: p
                    }).data("y", n)
                }
            } else if (a.hasClass("header-page__fixed")) {
                var s = a.data("y"),
                    l = r - i,
                    c = s - l > 0 ? s - l : 0,
                    d = "translateY(-" + c + "px)";
                a.css({
                    "-webkit-transform": d,
                    "-moz-transform": d,
                    "-ms-transform": d,
                    "-o-transform": d,
                    transform: d
                }).data("y", c), t > i && (a.removeClass("header-page__fixed"), a.css({
                    "-webkit-transform": "translateY(0px)",
                    "-moz-transform": "translateY(0px)",
                    "-ms-transform": "translateY(0px)",
                    "-o-transform": "translateY(0px)",
                    transform: "translateY(0px)"
                }).data("y", c))
            }
            a.data("scrollTop", i)
        }).trigger("scroll")
    }

    function f() {
        0 === e(".menu-list").find(".submenu-toggle").length && (e(".menu-item-has-children").children("a").after('<span class="submenu-toggle">                            <i class="fa fa-angle-right"></i>                        </span>                    '), e(".menu-list").on("click", ".submenu-toggle", function(a) {
            a.preventDefault(), e(this).siblings(".sub-menu").addClass("sub-menu-active")
        }))
    }

    function v() {
        e(".menu-list .sub-menu").each(function() {
            var a = e(this);
            0 === a.find(".back-mb").length && a.prepend('<li class="back-mb">                                <a href="#">                                    <i class="fa fa-angle-left"></i>Back                                </a>                            </li>                        '), e(".menu-list").on("click", ".back-mb a", function(a) {
                a.preventDefault(), e(this).parent().parent().removeClass("sub-menu-active")
            })
        })
    }
    var w = {
        Android: function() {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function() {
            return w.Android() || w.BlackBerry() || w.iOS() || w.Opera() || w.Windows()
        }
    };
    e.fn.imageCover = function() {
        e(this).each(function() {
            var a = e(this),
                t = a.find("img"),
                i = a.outerHeight(),
                n = (t.outerWidth(), t.outerHeight());
            i > n && t.css({
                height: "100%",
                width: "auto"
            })
        })
    }, e(window).on("load resize", function() {
        var a = e(".navigation").data("responsive"),
            t = window.innerWidth,
            i = window.innerHeight,
            n = e("#header-page").height();
        e(".toggle-menu-responsive").hide(), a >= t ? (e(".toggle-menu-responsive").show(), e(".navigation").prependTo("#page-wrap"), e(".navigation").removeClass("awe-navigation").addClass("awe-navigation-responsive"), e(".awe-navigation-responsive").height(i - n), e(".search-box .form-search").css("right", "-60px"), f(), v()) : (e(".navigation").insertAfter(".header-page__inner .logo"), e(".navigation").removeClass("awe-navigation-responsive").addClass("awe-navigation"), e(document).find(".navigation").css("height", "auto"), e(".search-box .form-search").css("right", "0"), e(".submenu-toggle, .back-mb").remove()), e(".search-box .form-search").width(e("#header-page .container").width())
    }), e(".toggle-menu-responsive").on("click", function(a) {
        a.preventDefault(), e(this).toggleClass("toggle-active"), e(document).find(".awe-navigation-responsive").toggleClass("awe-navigation-responsive-active")
    }), e(window).load(function() {
        e(".preloader").fadeOut(1200), t(), a(), i(), n(), e(".image-cover").imageCover(), e("body").hasClass("single-post") === !1 && (e(".post .image-wrap").addClass("image-style"), setTimeout(function() {
            e(".post .image-wrap").imageCover()
        }, 10)), e(".related-post .post .image-wrap").addClass("image-style"), setTimeout(function() {
            e(".related-post .post .image-wrap").imageCover()
        }, 10)
    }), e(document).ready(function() {
        s(), l(), c(), g(), d(), p(), h(), u(), m(), e("#header-page nav").hasClass("awe-navigation-hamburger") && e("#header-page nav").attr("data-responsive", 1e5), w.iOS() && e(".awe-parallax, .awe-static").addClass("fix-background-ios"), e(".write-review").on("click", function(a) {
            a.preventDefault(), e("#add_review").slideToggle(400), e(this).toggleClass("write-review-active")
        }), e("#page-wrap.dark").parent("body").addClass("body-dark"), e(".product-map").length && e(".product-map").mdMapExtend({
            appendTo: ".product-map",
            autoCenter: !0,
            zoom: 10,
            style: "shadesOfGrey",
            iconMarker: "images/marker-product-map.png",
            scrollwheel: !1
        }), e(".tour-map").length && e(".tour-map").mdMapExtend({
            appendTo: ".tour-map",
            autoCenter: !0,
            zoom: 10,
            style: "shadesOfGrey",
            iconMarker: "images/marker-product-map.png",
            scrollwheel: !1
        }), e(".contact-page__map").length && (window.innerWidth >= 992 && e(".contact-page__map").height(e(".contact-page__form").outerHeight()), e(".contact-page__map").mdMapExtend({
            appendTo: ".contact-page__map",
            autoCenter: !0,
            zoom: 16,
            style: 'lightGray',
            iconMarker: "images/marker.png",
			title: 'Protur',
            scrollwheel: !1
        })), w.any() ? (e(".search-box").on("click", ".searchtoggle", function() {
            e(this).toggleClass("searchtoggle-active"), e(this).siblings(".form-search").toggleClass("form-active")
        }), e(document).on("click", function() {
            e(".search-box .searchtoggle").removeClass("searchtoggle-active"), e(".search-box .form-search").removeClass("form-active"), e(".minicart-body").removeClass("cart-toggle"), e(".toggle-minicart").removeClass("toggle-active")
        }), e(document).on("click", ".search-box", function(e) {
            e.stopPropagation()
        })) : e(".search-box").hover(function() {
            e(".search-box .form-search").addClass("form-active")
        }, function() {
            e(".search-box .form-search").removeClass("form-active")
        })
    })
}(jQuery);