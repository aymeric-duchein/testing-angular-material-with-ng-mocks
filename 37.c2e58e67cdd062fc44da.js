(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{ZPrz:function(t,e,a){"use strict";a.r(e),a.d(e,"TemplateDialogModule",function(){return h});var o=a("ofXK"),n=a("fXoL"),c=a("Wp6s"),l=a("sdMC"),i=a("0IaG"),s=a("bTqV");let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["app-base-example-dialog"]],decls:9,vars:1,consts:[["mat-dialog-title",""],["mat-button","","mat-dialog-close",""],["mat-button","",3,"mat-dialog-close"]],template:function(t,e){1&t&&(n.Qb(0,"h2",0),n.uc(1,"Use dialog title"),n.Pb(),n.Qb(2,"mat-dialog-content"),n.uc(3,"This is the dialog content. "),n.Pb(),n.Qb(4,"mat-dialog-actions"),n.Qb(5,"button",1),n.uc(6,"Cancel"),n.Pb(),n.Qb(7,"button",2),n.uc(8,"OK"),n.Pb(),n.Pb()),2&t&&(n.Bb(7),n.gc("mat-dialog-close",!0))},directives:[i.h,i.e,i.c,s.b,i.d],styles:[""]}),t})(),b=(()=>{class t{constructor(t){this.dialog=t,this.result=""}openDialog(){this.dialog.open(p,{height:"180px",width:"250px"}).afterClosed().subscribe(t=>this.result=t)}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(i.b))},t.\u0275cmp=n.Fb({type:t,selectors:[["app-template-dialog"]],decls:4,vars:1,consts:[["mat-raised-button","","color","accent",3,"click"]],template:function(t,e){1&t&&(n.Qb(0,"button",0),n.Xb("click",function(){return e.openDialog()}),n.uc(1," Open Dialog\n"),n.Pb(),n.Qb(2,"p"),n.uc(3),n.Pb()),2&t&&(n.Bb(3),n.wc("Closed with Ok button: ",e.result,""))},directives:[s.b],styles:[""]}),t})();var r=a("f0Cb");let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["app-container"]],decls:13,vars:0,consts:[["htmlFile","template-dialog.component.html","tsFile","template-dialog.component.ts","specFile","template-dialog.component.spec.ts"],["htmlFile","template-example-dialog.component.html","tsFile","template-example-dialog.component.ts","specFile","template-example-dialog.component.spec.ts"]],template:function(t,e){1&t&&(n.Qb(0,"h4"),n.uc(1,"Basic Dialog"),n.Pb(),n.Qb(2,"p"),n.uc(3,"Test the dialog and the parent component separately"),n.Pb(),n.Qb(4,"mat-card"),n.Qb(5,"mat-card-content"),n.Qb(6,"app-item-template",0),n.Mb(7,"app-template-dialog"),n.Pb(),n.Pb(),n.Pb(),n.Mb(8,"mat-divider"),n.Qb(9,"mat-card"),n.Qb(10,"mat-card-content"),n.Qb(11,"app-item-template",1),n.uc(12," Navigate to other tabs to see dialog implementation "),n.Pb(),n.Pb(),n.Pb())},directives:[c.a,c.d,l.a,b,r.a],styles:["mat-divider[_ngcontent-%COMP%]{margin:12px}"]}),t})();var d=a("6gGk"),u=a("tyNb");const g=[{path:"",component:m}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Jb({type:t}),t.\u0275inj=n.Ib({imports:[[u.e.forChild(g),o.c,d.a,i.f,c.g,r.b,s.c]]}),t})()}}]);