"use strict";

$(function () {
  $(window).scroll(function () {
    //セクション２から３の間はこれ
    if (
      $(window).scrollTop() > $("#sec2").offset().top &&
      $(window).scrollTop() < $("#sec3").offset().top
    ) {
      $("topnav").css("background-color", "#2e2e2e");
    } //セクション３より進んだらこれ
    else if ($(window).scrollTop() > $("#sec3").offset().top) {
      $("nav ul li").css("color", "#ff0000");
    } //それ以外（つまりセクション１である場合）はこれ
    else $("nav ul li").css("color", "#000");
  });
});
