(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"D0c/":function(t,e,o){"use strict";o.r(e),o.d(e,"AdvancedAutocompleteModule",function(){return Q});var n=o("ofXK"),a=o("fXoL"),c=o("Wp6s"),l=o("sdMC"),s=o("3Pt+"),p=o("JX91"),m=o("lJxs"),i=o("kmnG"),r=o("qFsG"),u=o("/1cH"),b=o("FKr1");function d(t,e){if(1&t&&(a.Qb(0,"mat-option",6),a.uc(1),a.Pb()),2&t){const t=e.$implicit;a.gc("value",t),a.Bb(1),a.wc(" ",t.name," ")}}let f=(()=>{class t{constructor(){this.myControl=new s.c,this.options=[{name:"Mary"},{name:"Shelley"},{name:"Igor"}],this.filteredOptions=this.myControl.valueChanges.pipe(Object(p.a)(""),Object(m.a)(t=>"string"==typeof t?t:t.name),Object(m.a)(t=>t?this._filter(t):this.options.slice()))}displayFn(t){return t&&t.name?t.name:""}_filter(t){const e=t.toLowerCase();return this.options.filter(t=>0===t.name.toLowerCase().indexOf(e))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Fb({type:t,selectors:[["app-advanced-autocomplete"]],decls:11,vars:7,consts:[[1,"example-form"],[1,"example-full-width"],["type","text","matInput","",3,"formControl","matAutocomplete"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){if(1&t&&(a.Qb(0,"form",0),a.Qb(1,"mat-form-field",1),a.Qb(2,"mat-label"),a.uc(3,"Assignee"),a.Pb(),a.Mb(4,"input",2),a.Qb(5,"mat-autocomplete",3,4),a.sc(7,d,2,2,"mat-option",5),a.cc(8,"async"),a.Pb(),a.Pb(),a.Pb(),a.Qb(9,"p"),a.uc(10),a.Pb()),2&t){const t=a.lc(6);a.Bb(4),a.gc("formControl",e.myControl)("matAutocomplete",t),a.Bb(1),a.gc("displayWith",e.displayFn),a.Bb(2),a.gc("ngForOf",a.dc(8,5,e.filteredOptions)),a.Bb(3),a.wc(" Selected option: ",null!=e.myControl.value&&e.myControl.value.name?null==e.myControl.value?null:e.myControl.value.name:e.myControl.value," ")}},directives:[s.o,s.k,i.b,i.e,r.a,s.b,u.c,s.j,s.d,u.a,n.j,b.j],pipes:[n.b],styles:[""]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Fb({type:t,selectors:[["app-container"]],decls:6,vars:0,consts:[["htmlFile","advanced-autocomplete.component.html","tsFile","advanced-autocomplete.component.ts","specFile","advanced-autocomplete.component.spec.ts"]],template:function(t,e){1&t&&(a.Qb(0,"h4"),a.uc(1,"Simple Autocomplete"),a.Pb(),a.Qb(2,"mat-card"),a.Qb(3,"mat-card-content"),a.Qb(4,"app-item-template",0),a.Mb(5,"app-advanced-autocomplete"),a.Pb(),a.Pb(),a.Pb())},directives:[c.a,c.b,l.a,f],styles:[""]}),t})();var v=o("6gGk"),h=o("tyNb"),C=o("2ChS"),w=o("bTqV"),g=o("f0Cb"),F=o("1jcm");const P=[{path:"",component:y}];let Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({imports:[[h.e.forChild(P),s.n,n.c,v.a,C.c,c.c,g.b,w.c,i.d,u.b,r.b,F.b]]}),t})()}}]);