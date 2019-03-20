// ==UserScript==
// @name         ChangeColor
// @version      1.0.0
// @match        http://learn.tsinghua.edu.cn/*
// @grant    GM_addStyle
// @run-at   document-start
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle( `
.detail .cont .navli .title{color:#743481;}.navli .playli ul:hover li .spancolor{color:#743481;}.navli .playli ul.selected li i.circle{background-color:#743481;}.navli .playli ul.selected li .spancolor{color:#743481;}
.colo_1392f1{color:#743481;}.header{background-color:#743481;}.header .w{background-color:#743481;}.nav #myTabs li.active a{color:#743481;border-bottom:3px solid #743481;}.crumb .item:not(:last-child) a{color:#743481;}input[type="submit"].btn{background-color:#743481;}input.zancun.btn{background-color:#743481;}.tabbox .mytabs li.active{color:#743481;border-top:3px solid #743481;}.tabbox .mytabs li:hover{color:#743481;}.done{color:#743481;}.controldiv>li:hover{color:#743481;}.count-color{color:#743481;}#pagefooter a:hover{background-color:#743481;}#pagefooter span.active{background-color:#743481;}.navbar a{color:#743481;}.tablist .btn:hover{border-color:#743481;color:#743481;}.detail .note_search a{background-color:#743481;}#dw li:hover{color:#743481;}#dw .slideThree label{background:#743481;}ol.breadcrumb>li a{color:#743481;}.search a.btn{background-color:#743481;}.wdhere a:hover{color:#743481;}.null-div p a{color:#743481;}

.tit .right:hover .more{color:#743481;}.con .line{background-color:#743481;}.con .item{color:#743481;box-shadow:0 0 10px #743481;}.con .con-hover .hover-item:hover{background-color:#743481;}.con .item-global:hover{color:#743481;}.con .item-global:hover .title{color:#743481;}#myTabs .content li a:hover{color:#743481;}.boxdetail .hdtitle a{color:#743481;}.hdtitle .btngroup .btn{background-color:#743481;}.remind .more a:hover{color:#743481;}table.dataTable tbody tr:hover .listtitle{color:#743481;}.listtitle.text:hover{color:#743481;}
.home .item .title{color:#743481;}.home .item .title .right a:hover{color:#743481;}.home .item .content .list a:hover{color:#743481;}.home .item .content .list div:nth-child(3) a:hover{color:#743481;}.con-answer a:hover{color:#743481;}.c4title:hover{color:#743481;}.home .item .homework .list a:hover{color:#743481;}.home .item .file .list a:hover{color:#743481;}.home .item .file .list div:nth-child(4) a:hover{color:#743481;}.null-div p a{color:#743481;}.changec .webicon-nth:hover{color:#743481;}.course .droppanel .title{color:#743481;}.course .droppanel li a:hover{color:#743481;}.course .droppanel li:hover{color:#743481;}
.tit .home{border-left:4px solid #743481;color:#743481;}.tit >a.select{border-left:4px solid #743481;color:#743481;}.tit >a.select [class^="webicon-"]{color:#743481;}.tit >a:hover{color:#743481;}.tit >a:hover i{color:#743481;}.notice .tit{color:#743481;}.notice .tit .xuetang{border-left:4px solid #743481;color:#743481;}.notice .tit .right a{background-color:#743481;}.detail .detail-title{color:#743481;}.detail .file label>div:first-child span{color:#743481;}

.dataTables_wrapper .dataTables_paginate .paginate_button.current,.dataTables_wrapper .dataTables_paginate .paginate_button.current:hover{background-color:#743481;background:#743481;}.dataTables_wrapper .dataTables_paginate .paginate_button:hover{background:#743481;}table th .fa{color:#743481;}span .paginate_button:hover{background:#743481;}.searchbtn{background-color:#743481;}table tbody tr[role="row"] a.btn:hover{color:#743481;border:1px solid #743481;}table tbody tr[role="row"] a:hover{color:#743481;}table tbody tr[role="row"] a[type='td_title']:hover{color:#743481;}table tbody tr[role="row"] a.link:hover{color:#743481;}
.boxdetail .hdtitle a.title { color: #743481!important; }
.crumb a { color: #743481!important; }
.crumb a:first-child {border-left: 4px solid #743481!important;}
.navli .playli ul.selected li .spancolor { color: #743481!important; }
.notice .tit .xuetang { color: #743481!important; }
.dataTables_wrapper .dataTables_paginate .paginate_button.current { background-color: #743481!important;}
.calendar h3 { background-color: #743481!important;}
` );
}());
