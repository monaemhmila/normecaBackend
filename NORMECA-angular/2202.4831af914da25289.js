"use strict";(self.webpackChunkNORMECA_angular=self.webpackChunkNORMECA_angular||[]).push([[2202],{2202:(B,u,o)=>{o.r(u),o.d(u,{FreelancerModule:()=>U});var c=o(177),r=o(1188),n=o(7705),d=o(1691),m=o(7738),g=o(4527),f=o(2710);function v(t,a){if(1&t&&(n.qex(0),n.j41(1,"li",17)(2,"a",18),n.EFF(3),n.k0s()(),n.bVm()),2&t){const e=n.XpG().$implicit,i=n.XpG();n.R7$(1),n.AVh("active",i.base===e.base),n.R7$(1),n.Y8G("routerLink",e.route),n.R7$(1),n.JRh(e.tittle)}}function C(t,a){if(1&t&&(n.qex(0),n.j41(1,"li",17)(2,"a",18),n.EFF(3),n.k0s()(),n.bVm()),2&t){const e=n.XpG().$implicit,i=n.XpG(3);n.R7$(1),n.AVh("active",i.page===e.page),n.R7$(1),n.Y8G("routerLink",e.route),n.R7$(1),n.JRh(e.menuValue)}}function R(t,a){if(1&t&&(n.qex(0),n.j41(1,"li")(2,"a",18),n.EFF(3),n.k0s()(),n.bVm()),2&t){const e=a.$implicit,i=n.XpG(5);n.R7$(1),n.AVh("active",i.base===e.base&&i.page===e.page),n.R7$(1),n.Y8G("routerLink",e.route),n.R7$(1),n.JRh(e.menuValue)}}const p=function(t){return{"d-block":t}};function b(t,a){if(1&t){const e=n.RV6();n.qex(0),n.j41(1,"li",23)(2,"a",24),n.bIt("click",function(){n.eBV(e);const s=n.XpG().$implicit;return n.Njj(s.showSubRoute=!s.showSubRoute)}),n.EFF(3),n.k0s(),n.j41(4,"ul",22),n.DNE(5,R,4,4,"ng-container",15),n.k0s()(),n.bVm()}if(2&t){const e=n.XpG().$implicit,i=n.XpG(3);n.R7$(1),n.AVh("active",i.page===e.page),n.R7$(1),n.Y8G("routerLink",e.route),n.R7$(1),n.JRh(e.menuValue),n.R7$(1),n.Y8G("ngClass",n.eq3(6,p,!0===e.showSubRoute)),n.R7$(1),n.Y8G("ngForOf",e.subMenus)}}function $(t,a){if(1&t&&(n.qex(0),n.DNE(1,C,4,4,"ng-container",16),n.DNE(2,b,6,8,"ng-container",16),n.bVm()),2&t){const e=a.$implicit;n.R7$(1),n.Y8G("ngIf",!1===e.hasSubRoute),n.R7$(1),n.Y8G("ngIf",!0===e.hasSubRoute)}}function F(t,a){if(1&t){const e=n.RV6();n.qex(0),n.j41(1,"li",19)(2,"a",20),n.bIt("click",function(){n.eBV(e);const s=n.XpG().$implicit;return n.Njj(s.showAsTab=!s.showAsTab)}),n.EFF(3),n.nrm(4,"i",21),n.k0s(),n.j41(5,"ul",22),n.DNE(6,$,3,2,"ng-container",15),n.k0s()(),n.bVm()}if(2&t){const e=n.XpG().$implicit,i=n.XpG();n.R7$(1),n.AVh("active",i.base===e.base||i.base===e.base1),n.R7$(2),n.SpI("",e.tittle," "),n.R7$(2),n.Y8G("ngClass",n.eq3(5,p,!0===e.showAsTab)),n.R7$(1),n.Y8G("ngForOf",e.menu)}}function j(t,a){if(1&t&&(n.qex(0),n.DNE(1,v,4,4,"ng-container",16),n.DNE(2,F,7,7,"ng-container",16),n.bVm()),2&t){const e=a.$implicit;n.R7$(1),n.Y8G("ngIf",!0===e.separateRoute),n.R7$(1),n.Y8G("ngIf",!1===e.separateRoute)}}const G=function(){return{}};let M=(()=>{class t{constructor(e,i,s,l){this.router=e,this.data=i,this.navservices=s,this.common=l,this.base="",this.page="",this.last="",this.routes=g.J,this.navbar=[],this.anotherMenu=!1,this.common.base.subscribe(h=>{this.base=h}),this.common.page.subscribe(h=>{this.page=h}),this.common.last.subscribe(h=>{this.last=h}),this.router.events.subscribe(h=>{h instanceof r.wF&&this.getRoutes(this.router)}),this.navbar=this.data.sideBar}employer(){localStorage.setItem("employer","employer")}freelancer(){localStorage.setItem("freelancer","freelancer")}otherPages(e){localStorage.setItem(e,e)}toggleSidebar(){this.navservices.openSidebar()}hideSidebar(){this.navservices.closeSidebar()}getRoutes(e){const i=e.url.split("/");this.common.base.next(i[1]),this.common.page.next(i[2]),this.common.last.next(i[3]),console.log("base",this.base),console.log("page",this.page),console.log("last",this.last),this.anotherMenu="project"===e.url.split("/")[2]||"project-details"===e.url.split("/")[2]||"developer-profile"===e.url.split("/")[2]}static{this.\u0275fac=function(i){return new(i||t)(n.rXU(r.Ix),n.rXU(m.L),n.rXU(f.q),n.rXU(d.h))}}static{this.\u0275cmp=n.VBU({type:t,selectors:[["app-freelancerheader"]],decls:19,vars:5,consts:[[1,"header",3,"ngClass"],[1,"container"],[1,"navbar","navbar-expand-lg","header-nav","p-0"],[1,"navbar-header"],["id","mobile_btn","href","javascript:void(0);",3,"click"],[1,"bar-icon"],[1,"navbar-brand","logo",3,"routerLink"],["src","assets/img/logo.png","alt","Logo",1,"img-fluid"],[1,"main-menu-wrapper"],[1,"menu-header"],[1,"menu-logo",3,"routerLink"],["src","assets/img/logo-01.png","alt","Logo",1,"img-fluid"],["id","menu_close","href","javascript:void(0);",1,"menu-close",3,"click"],[1,"fas","fa-times"],[1,"main-nav"],[4,"ngFor","ngForOf"],[4,"ngIf"],["routerLinkActive","active"],[3,"routerLink"],[1,"has-submenu"],["href","javascript:void(0);",3,"click"],[1,"fas","fa-chevron-down"],[1,"submenu",3,"ngClass"],["routerLinkActive","active",1,"has-submenu"],[3,"routerLink","click"]],template:function(i,s){1&i&&(n.j41(0,"header",0)(1,"div",1)(2,"nav",2)(3,"div",3)(4,"a",4),n.bIt("click",function(){return s.toggleSidebar()}),n.j41(5,"span",5),n.nrm(6,"span")(7,"span")(8,"span"),n.k0s()(),n.j41(9,"a",6),n.nrm(10,"img",7),n.k0s()(),n.j41(11,"div",8)(12,"div",9)(13,"a",10),n.nrm(14,"img",11),n.k0s(),n.j41(15,"a",12),n.bIt("click",function(){return s.hideSidebar()}),n.nrm(16,"i",13),n.k0s()(),n.j41(17,"ul",14),n.DNE(18,j,3,2,"ng-container",15),n.k0s()()()()()),2&i&&(n.Y8G("ngClass",n.lJ4(4,G)),n.R7$(9),n.Y8G("routerLink","/home"),n.R7$(4),n.Y8G("routerLink","/home"),n.R7$(5),n.Y8G("ngForOf",s.navbar))},dependencies:[c.YU,c.Sq,c.bT,r.Wk,r.wQ]})}}return t})();function x(t,a){if(1&t&&(n.qex(0),n.j41(1,"li",11)(2,"a",12),n.nrm(3,"img",13),n.EFF(4),n.k0s()(),n.bVm()),2&t){const e=n.XpG().$implicit,i=n.XpG();n.R7$(2),n.AVh("active",i.page===e.page),n.Y8G("routerLink",e.routes),n.R7$(1),n.Y8G("src",e.icon,n.B4B),n.R7$(1),n.SpI(" ",e.title," ")}}function I(t,a){1&t&&n.nrm(0,"span",19)}function V(t,a){if(1&t&&(n.j41(0,"li")(1,"a",2),n.EFF(2),n.k0s()()),2&t){const e=a.$implicit,i=n.XpG(4);n.R7$(1),n.AVh("active",i.page===e.page),n.Y8G("routerLink",e.routes),n.R7$(1),n.JRh(e.title)}}const S=function(t){return{subdrop:t}},Y=function(t,a){return{"d-block":t,"d-none":a}};function T(t,a){if(1&t){const e=n.RV6();n.j41(0,"li",15)(1,"a",16),n.bIt("click",function(){n.eBV(e);const s=n.XpG(2).$implicit,l=n.XpG();return n.Njj(l.toggleSubMenu(s))}),n.nrm(2,"img",13),n.EFF(3),n.DNE(4,I,1,0,"span",17),n.k0s(),n.j41(5,"ul",18),n.DNE(6,V,3,4,"li",9),n.k0s()()}if(2&t){const e=n.XpG(2).$implicit,i=n.XpG();n.R7$(1),n.AVh("active",i.page===e.page1||i.page===e.page2||i.page===e.page3||i.page===e.page4||i.page===e.page5),n.Y8G("ngClass",n.eq3(8,S,e.expanded)),n.R7$(1),n.Y8G("src",e.icon,n.B4B),n.R7$(1),n.SpI(" ",e.title," "),n.R7$(1),n.Y8G("ngIf",e.submenu),n.R7$(1),n.Y8G("ngClass",n.l_i(10,Y,e.expanded,!e.expanded)),n.R7$(1),n.Y8G("ngForOf",e.submenu)}}function X(t,a){if(1&t&&(n.qex(0),n.DNE(1,T,7,13,"li",14),n.bVm()),2&t){const e=n.XpG().$implicit;n.R7$(1),n.Y8G("ngIf",e.submenu)}}function y(t,a){if(1&t&&(n.qex(0),n.DNE(1,x,5,5,"ng-container",10),n.DNE(2,X,2,1,"ng-container",10),n.bVm()),2&t){const e=a.$implicit;n.R7$(1),n.Y8G("ngIf",!1===e.hasSubRoute),n.R7$(1),n.Y8G("ngIf",!0===e.hasSubRoute)}}let E=(()=>{class t{constructor(e,i){this.data=e,this.common=i,this.routes=g.J,this.base="",this.page="",this.last="",this.currentroute="",this.sidebar=[],this.menuItems=[],this.common.base.subscribe(s=>{this.base=s}),this.common.page.subscribe(s=>{this.page=s}),this.common.last.subscribe(s=>{this.last=s}),this.menuItems=this.data.freelancer_sidebar}toggleSubMenu(e){e.expanded=!e.expanded}static{this.\u0275fac=function(i){return new(i||t)(n.rXU(m.L),n.rXU(d.h))}}static{this.\u0275cmp=n.VBU({type:t,selectors:[["app-sidemenu"]],decls:15,vars:3,consts:[[1,"settings-widget"],[1,"settings-header","d-sm-flex","flex-row","flex-wrap","text-center","text-sm-start","align-items-center"],[3,"routerLink"],["alt","profile image","src","assets/img/user/avatar-1.jpg",1,"avatar-lg","rounded-circle"],[1,"ms-sm-3","ms-md-0","ms-lg-3","mt-2","mt-sm-0","mt-md-2","mt-lg-0"],[1,"mb-0"],["src","assets/img/icon/verified-badge.svg","alt","Img",1,"ms-1"],[1,"settings-menu"],["id","sidebar-menu",1,"sidebar-menu"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLink"],["alt","Img",3,"src"],["class","nav-item submenu",4,"ngIf"],[1,"nav-item","submenu"],["href","javascript:void(0)",1,"nav-link",3,"ngClass","click"],["class","menu-arrow",4,"ngIf"],[1,"sub-menu-ul",3,"ngClass"],[1,"menu-arrow"]],template:function(i,s){1&i&&(n.j41(0,"div",0)(1,"div",1)(2,"a",2),n.nrm(3,"img",3),n.k0s(),n.j41(4,"div",4)(5,"h3",5)(6,"a",2),n.EFF(7,"Bruce Bush"),n.k0s(),n.nrm(8,"img",6),n.k0s(),n.j41(9,"p",5),n.EFF(10,"@brucebush"),n.k0s()()(),n.j41(11,"div",7)(12,"div",8)(13,"ul"),n.DNE(14,y,3,2,"ng-container",9),n.k0s()()()()),2&i&&(n.R7$(2),n.Y8G("routerLink",s.routes.freelancer_portfolio),n.R7$(4),n.Y8G("routerLink",s.routes.freelancer_portfolio),n.R7$(8),n.Y8G("ngForOf",s.menuItems))},dependencies:[c.YU,c.Sq,c.bT,r.Wk,r.wQ],styles:[".container-fluid[_ngcontent-%COMP%]{padding-left:30px;padding-right:30px}"]})}}return t})();const L=function(t,a){return{"portfolio-page":t,bookmark:a}};function D(t,a){if(1&t&&(n.qex(0),n.j41(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),n.nrm(6,"app-sidemenu"),n.k0s()(),n.j41(7,"div",6),n.nrm(8,"router-outlet"),n.k0s()()()(),n.bVm()),2&t){const e=n.XpG();n.R7$(1),n.Y8G("ngClass",n.l_i(1,L,"portfolio"===e.page,"withdraw-money"===e.last))}}function N(t,a){1&t&&(n.qex(0),n.nrm(1,"router-outlet"),n.bVm())}const P=[{path:"",component:(()=>{class t{constructor(e,i,s){this.Router=e,this.common=i,this.data=s,this.breadcrum=!0,this.freelancer=!0,this.base="",this.page="",this.last="",this.sidebar=[],this.common.base.subscribe(l=>{this.base=l}),this.common.page.subscribe(l=>{this.page=l}),this.common.last.subscribe(l=>{this.last=l}),e.events.subscribe(l=>{l instanceof r.Z&&this.getRoutes(l)}),this.getRoutes(this.Router)}getRoutes(e){const i=e.url.split("/");this.base=i[1],this.page=i[2],this.last=i[3],"/freelancer/chats"===e.url||"/freelancer/project"===e.url||"/freelancer/project-details"===e.url||"/freelancer/developer-profile"===e.url||"/freelancer/developers-details"===e.url||"/freelancer/project-list"===e.url?(this.freelancer=!1,this.breadcrum=!1):(this.freelancer=!0,this.breadcrum=!0)}static{this.\u0275fac=function(i){return new(i||t)(n.rXU(r.Ix),n.rXU(d.h),n.rXU(m.L))}}static{this.\u0275cmp=n.VBU({type:t,selectors:[["app-freelancer"]],decls:3,vars:2,consts:[[4,"ngIf"],[1,"content","content-page",3,"ngClass"],[1,"container"],[1,"row"],[1,"col-xl-3","col-lg-4","theiaStickySidebar"],[1,"stickybar"],[1,"col-xl-9","col-lg-8"]],template:function(i,s){1&i&&(n.nrm(0,"app-freelancerheader"),n.DNE(1,D,9,4,"ng-container",0),n.DNE(2,N,2,0,"ng-container",0)),2&i&&(n.R7$(1),n.Y8G("ngIf",!0===s.freelancer),n.R7$(1),n.Y8G("ngIf",!1===s.freelancer))},dependencies:[c.YU,c.bT,r.n3,M,E]})}}return t})(),children:[{path:"",redirectTo:"dashboards",pathMatch:"full"},{path:"dashboards",loadChildren:()=>o.e(7012).then(o.bind(o,7012)).then(t=>t.DashboardModule)},{path:"developer-profile",loadChildren:()=>o.e(5401).then(o.bind(o,5401)).then(t=>t.ProfileModule)},{path:"membership",loadChildren:()=>o.e(9366).then(o.bind(o,9366)).then(t=>t.MembershipModule)},{path:"chats",loadChildren:()=>Promise.all([o.e(1429),o.e(7412)]).then(o.bind(o,7412)).then(t=>t.ChatsModule)},{path:"reviews",loadChildren:()=>o.e(3486).then(o.bind(o,1105)).then(t=>t.ReviewModule)},{path:"project",loadChildren:()=>o.e(3077).then(o.bind(o,3077)).then(t=>t.ProjectsModule)},{path:"project-details",loadChildren:()=>o.e(6261).then(o.bind(o,6261)).then(t=>t.ProjectsDetailsModule)},{path:"portfolio",loadChildren:()=>o.e(1906).then(o.bind(o,1906)).then(t=>t.PortfolioModule)},{path:"statement",loadChildren:()=>o.e(2487).then(o.bind(o,2487)).then(t=>t.StatementModule)},{path:"payout",loadChildren:()=>o.e(6914).then(o.bind(o,6914)).then(t=>t.PayoutModule)},{path:"ongoing-projects",loadChildren:()=>o.e(1406).then(o.bind(o,1406)).then(t=>t.OngoingProjectsModule)},{path:"completed-projects",loadChildren:()=>o.e(8520).then(o.bind(o,8520)).then(t=>t.CompletedProjectsModule)},{path:"cancelled-projects",loadChildren:()=>o.e(7298).then(o.bind(o,7298)).then(t=>t.CancelledProjectsModule)},{path:"project-list",loadChildren:()=>o.e(7545).then(o.bind(o,7545)).then(t=>t.ProjectListModule)},{path:"favourites",loadChildren:()=>o.e(5087).then(o.bind(o,5087)).then(t=>t.FreelancerFavouritesModule)},{path:"invitations",loadChildren:()=>o.e(2514).then(o.bind(o,2514)).then(t=>t.FreelancerInvitationsModule)},{path:"files",loadChildren:()=>o.e(2099).then(o.bind(o,2099)).then(t=>t.FilesModule)},{path:"milestones",loadChildren:()=>o.e(8776).then(o.bind(o,8776)).then(t=>t.MilestonesModule)},{path:"payments",loadChildren:()=>o.e(4623).then(o.bind(o,4623)).then(t=>t.PaymentsModule)},{path:"profile-settings",loadChildren:()=>o.e(8298).then(o.bind(o,8298)).then(t=>t.ProfileSettingsModule)},{path:"project-proposals",loadChildren:()=>o.e(4349).then(o.bind(o,4349)).then(t=>t.ProjectProposalsModule)},{path:"task",loadChildren:()=>o.e(4976).then(o.bind(o,4976)).then(t=>t.TaskModule)},{path:"verified",loadChildren:()=>o.e(6886).then(o.bind(o,6886)).then(t=>t.VerifiedModule)},{path:"verify-identity",loadChildren:()=>o.e(7233).then(o.bind(o,7233)).then(t=>t.VerifyIdentityModule)},{path:"view-project-detail",loadChildren:()=>o.e(3636).then(o.bind(o,3636)).then(t=>t.ViewProjectDetailModule)},{path:"delete-account",loadChildren:()=>o.e(1089).then(o.bind(o,1089)).then(t=>t.DeleteAccountModule)},{path:"withdraw-money",loadChildren:()=>o.e(7052).then(o.bind(o,7052)).then(t=>t.WithdrawMoneyModule)},{path:"change-password",loadChildren:()=>o.e(7879).then(o.bind(o,7879)).then(t=>t.ChangePasswordModule)}]}];let A=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=n.$C({type:t})}static{this.\u0275inj=n.G2t({imports:[r.iI.forChild(P),r.iI]})}}return t})(),U=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=n.$C({type:t})}static{this.\u0275inj=n.G2t({imports:[c.MD,A]})}}return t})()}}]);