webpackJsonp([0],[function(t,e,n){"use strict";n(1),n(2)},function(t,e){},function(t,e,n){"use strict";!function(){document.querySelector(".navigation__toggle").addEventListener("click",function(t){t.preventDefault(),document.querySelector(".navigation").classList.toggle("navigation--dropdown")}),document.querySelectorAll(".navigation__link").forEach(function(t){t.addEventListener("click",function(){document.querySelector(".navigation").classList.remove("navigation--dropdown")})});var t=document.querySelectorAll(".navigation__link"),e=[];t.forEach(function(t){t.hash&&e.push(document.querySelector(t.hash))});var n=0,o=document.querySelector(".navigation__link--active");window.addEventListener("scroll",function(){var t=document.body.scrollTop,i=t>n;n=t,e.forEach(function(t){var e=t.getBoundingClientRect(),n=document.documentElement.clientHeight,c=n/2;if(e.top<=c&&e.top>=-2&&i||e.bottom>=c&&e.bottom<=n&&!i){document.querySelector(".navigation__link--active").getAttribute("href").slice(1)!==t.id&&(o.classList.remove("navigation__link--active"),o=document.querySelector('[href="#'+t.id+'"]'),o.classList.add("navigation__link--active"))}})})}()}],[0]);