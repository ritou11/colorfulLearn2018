// ==UserScript==
// @name         ChangeColor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://learn.tsinghua.edu.cn/*
// @grant    GM_addStyle
// @run-at   document-start
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle ( `
.home .item .title {color: #843bca;}
.header {background-color: #843bca;}
.null-div p a {color: #843bca;}
.header .w {background-color: #843bca;}
.tabbox .mytabs li.active {color: #843bca;}
.tabbox .mytabs li:hover{color: #843bca;}
.done {color: #843bca;}
.search a.btn{background-color: #843bca;}
.nav #myTabs li.active a {color: #843bca;border-bottom: 3px solid #843bca;}
.crumb a:first-child{border-left: 4px solid #843bca;}
.crumb .item:not(:last-child) a {color: #843bca;}
input[type="submit"].btn {background-color: #843bca;}
input.zancun.btn {background-color: #843bca;}
.controldiv>li:hover {color: #843bca;}
.count-color {color: #843bca}
#pagefooter a:hover{background-color: #843bca;}
#pagefooter span.active {background-color: #843bca;}
.EditCell_TextBox {border: 1px solid #843bca;}
.navbar a{color: #843bca;}
.navbar a.active{border-bottom: 2px solid  #843bca;}
.tablist .btn:hover{border-color: #843bca;color: #843bca;}
.detail .note_search a{background-color: #843bca;}
#dw li:hover{color: #843bca;}
#dw .slideThree label {background: #843bca;}
ol.breadcrumb>li a{color:#843bca;}
.breadcrumb+.tit .name{border-bottom:2px solid #843bca;}
.wdhere a:hover{color:#843bca;}
.outbox a:hover{color:#843bca!important;}
` );
})();
