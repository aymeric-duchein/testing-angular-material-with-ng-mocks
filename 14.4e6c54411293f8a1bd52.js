(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"5lWk":function(t,a,e){"use strict";e.r(a),e.d(a,"SimpleBadgeModule",function(){return u});var r=e("ofXK"),i=e("fXoL"),n=e("Wp6s"),c=e("sdMC"),d=e("TU8p"),o=e("bTqV"),s=e("NFeN");let m=(()=>{class t{constructor(){this.hidden=!1,this.disabled=!0,this.overlap=!0}toggleBadgeVisibility(){this.hidden=!this.hidden}toggleBadgeOverlap(){this.overlap=!this.overlap}toggleBadgeDisabled(){this.disabled=!this.disabled}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=i.Fb({type:t,selectors:[["app-simple-badge"]],decls:24,vars:3,consts:[["matBadge","4","matBadgeOverlap","false"],["matBadge","1","matBadgeSize","large"],["mat-raised-button","","color","primary","matBadge","8","matBadgePosition","before","matBadgeColor","accent"],["mat-raised-button","","matBadge","7",3,"matBadgeHidden","click"],["matBadge","15","matBadgeColor","warn"],["mat-button","","id","overlapping","matBadge","O",3,"matBadgeOverlap","click"],["mat-button","","id","disabled","matBadge","D",3,"matBadgeDisabled","click"]],template:function(t,a){1&t&&(i.Qb(0,"p"),i.Qb(1,"span",0),i.uc(2,"Text with a badge"),i.Pb(),i.Pb(),i.Qb(3,"p"),i.Qb(4,"span",1),i.uc(5,"Text with large badge"),i.Pb(),i.Pb(),i.Qb(6,"p"),i.uc(7," Button with a badge on the left "),i.Qb(8,"button",2),i.uc(9," Action "),i.Pb(),i.Pb(),i.Qb(10,"p"),i.uc(11," Button toggles badge visibility "),i.Qb(12,"button",3),i.Xb("click",function(){return a.toggleBadgeVisibility()}),i.uc(13," Hide "),i.Pb(),i.Pb(),i.Qb(14,"p"),i.uc(15," Icon with a badge "),i.Qb(16,"mat-icon",4),i.uc(17,"home"),i.Pb(),i.Pb(),i.Qb(18,"p"),i.Qb(19,"button",5),i.Xb("click",function(){return a.toggleBadgeOverlap()}),i.uc(20,"Overlapping"),i.Pb(),i.Pb(),i.Qb(21,"p"),i.Qb(22,"button",6),i.Xb("click",function(){return a.toggleBadgeDisabled()}),i.uc(23,"Disabled"),i.Pb(),i.Pb()),2&t&&(i.Bb(12),i.gc("matBadgeHidden",a.hidden),i.Bb(7),i.gc("matBadgeOverlap",a.overlap),i.Bb(3),i.gc("matBadgeDisabled",a.disabled))},directives:[d.a,o.b,s.a],styles:["p[_ngcontent-%COMP%]:first-child{padding-top:32px}"]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=i.Fb({type:t,selectors:[["app-container"]],decls:6,vars:0,consts:[["htmlFile","simple-badge.component.html","tsFile","simple-badge.component.ts","specFile","simple-badge.component.spec.ts"]],template:function(t,a){1&t&&(i.Qb(0,"h4"),i.uc(1,"Simple Badge"),i.Pb(),i.Qb(2,"mat-card"),i.Qb(3,"mat-card-content"),i.Qb(4,"app-item-template",0),i.Mb(5,"app-simple-badge"),i.Pb(),i.Pb(),i.Pb())},directives:[n.a,n.d,c.a,m],styles:[""]}),t})();var p=e("6gGk"),b=e("tyNb");const g=[{path:"",component:l}];let u=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({imports:[[b.e.forChild(g),r.c,p.a,n.g,o.c,d.b,s.b]]}),t})()},Wp6s:function(t,a,e){"use strict";e.d(a,"a",function(){return h}),e.d(a,"b",function(){return b}),e.d(a,"c",function(){return u}),e.d(a,"d",function(){return m}),e.d(a,"e",function(){return f}),e.d(a,"f",function(){return g}),e.d(a,"g",function(){return x}),e.d(a,"h",function(){return p}),e.d(a,"i",function(){return l});var r=e("R1ws"),i=e("FKr1"),n=e("fXoL");const c=["*",[["mat-card-footer"]]],d=["*","mat-card-footer"],o=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],s=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let m=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=n.Gb({type:t,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=n.Gb({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=n.Gb({type:t,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),t})(),b=(()=>{class t{constructor(){this.align="start"}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=n.Gb({type:t,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(t,a){2&t&&n.Db("mat-card-actions-align-end","end"===a.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=n.Gb({type:t,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=n.Gb({type:t,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-card-avatar"]}),t})(),h=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(a){return new(a||t)(n.Lb(r.a,8))},t.\u0275cmp=n.Fb({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,a){2&t&&n.Db("_mat-animation-noopable","NoopAnimations"===a._animationMode)},exportAs:["matCard"],ngContentSelectors:d,decls:2,vars:0,template:function(t,a){1&t&&(n.fc(c),n.ec(0),n.ec(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),f=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:s,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(t,a){1&t&&(n.fc(o),n.ec(0),n.Qb(1,"div",0),n.ec(2,1),n.Pb(),n.ec(3,2))},encapsulation:2,changeDetection:0}),t})(),x=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=n.Jb({type:t}),t.\u0275inj=n.Ib({imports:[[i.g],i.g]}),t})()}}]);