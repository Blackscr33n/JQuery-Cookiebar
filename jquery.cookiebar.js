! function(e) {
    e.cookieBar = function(o, c) {
        if ("cookies" == o) var t = "cookies";
        else if ("set" == o) var t = "set";
        else var t = !1;
        var n = {
                message: "We use cookies to track usage and preferences.",
                acceptButton: !0,
                acceptButtonColor: "green",
                acceptButtonColorHover: "cornflowerblue",
                acceptText: "I Understand",
                acceptFunction: function(e) {
                    "enabled" != e && "accepted" != e && (window.location = window.location.href)
                },
                declineButton: !1,
                declineText: "Disable Cookies",
                declineFunction: function(e) {
                    ("enabled" == e || "accepted" == e) && (window.location = window.location.href)
                },
                policyButton: !1,
                policyButtonColor: "blue",
                policyButtonColorHover: "cornflowerblue",
                policyText: "Privacy Policy",
                policyURL: "/privacy-policy/",
                policyTarget: "_blank",
                autoEnable: !0,
                acceptOnContinue: !1,
                acceptOnScroll: !1,
                acceptAnyClick: !1,
                expireDays: 365,
                renewOnVisit: !1,
                forceShow: !1,
                effect: "slide",
                element: "body",
                append: !1,
                fixed: !1,
                bottom: !1,
                zindex: "",
                domain: String(window.location.hostname),
                referrer: String(document.referrer),
                backgroundColor: "#000",
                fontSizeText: "15px",
                fontSizeButton: "14"
            },
            o = e.extend(n, o),
            i = new Date;
        i.setTime(i.getTime() + 864e5 * o.expireDays), i = i.toGMTString();
        var a, r, l = "cb-enabled={value}; expires=" + i + "; path=/",
            d = "",
            u = document.cookie.split("; ");
        for (a = 0; a < u.length; a++) r = u[a].split("="), "cb-enabled" == r[0] && (d = r[1]);
        if ("" == d && "cookies" != t && o.autoEnable ? (d = "enabled", document.cookie = l.replace("{value}", "enabled")) : "accepted" != d && "declined" != d || "cookies" == t || !o.renewOnVisit || (document.cookie = l.replace("{value}", d)), o.acceptOnContinue && o.referrer.indexOf(o.domain) >= 0 && -1 == String(window.location.href).indexOf(o.policyURL) && "cookies" != t && "set" != t && "accepted" != d && "declined" != d && (t = "set", c = "accepted"), "cookies" == t) return "enabled" == d || "accepted" == d ? !0 : !1;
        if ("set" == t && ("accepted" == c || "declined" == c)) return document.cookie = l.replace("{value}", c), "accepted" == c ? !0 : !1;
        var s = o.message.replace("{policy_url}", o.policyURL);
        if (o.acceptButton) var p = '<a href="" style="font-size:' + o.fontSizeButton + ";background:" + o.acceptButtonColor + '" class="cb-enable">' + o.acceptText + "</a>";
        else var p = "";
        if (o.declineButton) var f = '<a href="" class="cb-disable">' + o.declineText + "</a>";
        else var f = "";
        if (o.policyButton) {
            if (o.policyTarget) var b = '<a target="' + o.policyTarget + '" href="' + o.policyURL + '" style="font-size:' + o.fontSizeButton + ";background:" + o.policyButtonColor + '" class="cb-policy">' + o.policyText + "</a>";
            '<a target="' + o.policyTarget + '" href="' + o.policyURL + '" class="cb-policy">' + o.policyText + "</a>"
        } else var b = "";
        if (o.fixed)
            if (o.bottom) var k = ' class="fixed bottom"';
            else var k = ' class="fixed"';
        else var k = "";
        if ("" != o.zindex) var v = ' style="z-index:' + o.zindex + ';"';
        else var v = "";
        (o.forceShow || "enabled" == d || "" == d) && (o.append ? e(o.element).append('<div id="cookie-bar"' + k + v + "><p>" + s + p + f + b + "</p></div>") : e(o.element).prepend('<div id="cookie-bar"' + k + v + "><p>" + s + p + f + b + "</p></div>")), o.backgroundColor && (e("#cookie-bar").css("background", o.backgroundColor), e("#cookie-bar").css("font-size", o.fontSizeText)), o.policyButtonColorHover && e("#cookie-bar .cb-policy").mouseenter(function() {
            e(this).css("background", o.policyButtonColorHover)
        }).mouseleave(function() {
            e(this).css("background", o.policyButtonColor)
        }), o.acceptButtonColorHover && e("#cookie-bar .cb-enable").mouseenter(function() {
            e(this).css("background", o.acceptButtonColorHover)
        }).mouseleave(function() {
            e(this).css("background", o.acceptButtonColor)
        });
        var m = function(c) {
                o.acceptOnScroll && e(document).off("scroll"), "function" == typeof c && c(d), "slide" == o.effect ? e("#cookie-bar").slideUp(300, function() {
                    e("#cookie-bar").remove()
                }) : "fade" == o.effect ? e("#cookie-bar").fadeOut(300, function() {
                    e("#cookie-bar").remove()
                }) : e("#cookie-bar").hide(0, function() {
                    e("#cookie-bar").remove()
                }), e(document).unbind("click", x)
            },
            y = function() {
                document.cookie = l.replace("{value}", "accepted"), m(o.acceptFunction)
            },
            g = function() {
                var e = new Date;
                for (e.setTime(e.getTime() - 864e6), e = e.toGMTString(), u = document.cookie.split("; "), a = 0; a < u.length; a++) r = u[a].split("="), document.cookie = r[0].indexOf("_") >= 0 ? r[0] + "=0; expires=" + e + "; domain=" + o.domain.replace("www", "") + "; path=/" : r[0] + "=0; expires=" + e + "; path=/";
                document.cookie = l.replace("{value}", "declined"), m(o.declineFunction)
            },
            x = function(o) {
                e(o.target).hasClass("cb-policy") || y()
            };
        if (e("#cookie-bar .cb-enable").click(function() {
                return y(), !1
            }), e("#cookie-bar .cb-disable").click(function() {
                return g(), !1
            }), o.acceptOnScroll) {
            var w, h, B = e(document).scrollTop();
            e(document).on("scroll", function() {
                w = e(document).scrollTop(), h = w > B ? w - B : B - w, h >= Math.round(o.acceptOnScroll) && y()
            })
        }
        o.acceptAnyClick && e(document).bind("click", x)
    }
}(jQuery);