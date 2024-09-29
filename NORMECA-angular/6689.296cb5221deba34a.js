(self.webpackChunkNORMECA_angular=self.webpackChunkNORMECA_angular||[]).push([[6689],{6689:(F,i,t)=>{"use strict";t.r(i),t.d(i,{AdminModule:()=>V});var n=t(6814),o=t(4190),r=t(7344),e=t(5879),l=t(8832),a=t(7888),c=t(2543),s=t(9136),h=t(5619),u=t(8613);let y=(()=>{class d{constructor(v){this.router=v,this.checkAuth=new h.X(localStorage.getItem("authenticated")||"false")}login(){this.checkAuth.next("true"),localStorage.setItem("authenticated","true"),this.router.navigate([u._.admin_dashboard])}logout(){this.router.navigate([u._.admin_login]),this.checkAuth.next("false"),localStorage.clear(),sessionStorage.clear()}static#e=this.\u0275fac=function(j){return new(j||d)(e.LFG(o.F0))};static#n=this.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})();var p=t(6223),f=t(2700);function m(d,P){if(1&d&&(e.TgZ(0,"li")(1,"a",58),e._UZ(2,"i"),e.TgZ(3,"span"),e._uU(4),e.qZA()()()),2&d){const v=e.oxw().$implicit,j=e.oxw(2);e.ekj("active",j.page===v.base),e.xp6(1),e.Q6J("routerLink",v.route),e.xp6(1),e.Tol("feather feather "+v.icon),e.xp6(2),e.Oqu(null==v?null:v.menuValue)}}function x(d,P){if(1&d&&(e.ynx(0),e.TgZ(1,"li")(2,"a",58),e._uU(3),e.qZA()(),e.BQk()),2&d){const v=P.$implicit,j=e.oxw(4);e.xp6(2),e.ekj("active",j.page===v.base),e.Q6J("routerLink",v.route),e.xp6(1),e.Oqu(v.menuValue)}}const g=function(d){return{subdrop:d}};function M(d,P){if(1&d){const v=e.EpF();e.TgZ(0,"li",59)(1,"a",60),e.NdJ("click",function(){e.CHM(v);const b=e.oxw().$implicit,z=e.oxw(2);return e.KtG(z.expandSubMenus(b))}),e._UZ(2,"i"),e.TgZ(3,"span"),e._uU(4),e.qZA(),e._UZ(5,"span",61),e.qZA(),e.TgZ(6,"ul",62),e.YNc(7,x,4,4,"ng-container",54),e.qZA()()}if(2&d){const v=e.oxw().$implicit,j=e.oxw(2);e.ekj("active",j.base===v.base),e.xp6(1),e.Q6J("ngClass",e.VKq(8,g,!0===v.showSubRoute)),e.xp6(1),e.Tol("feather feather "+v.icon),e.xp6(2),e.hij(" ",v.menuValue,""),e.xp6(2),e.Q6J("ngClass",!0===v.showSubRoute?"d-block":"d-none"),e.xp6(1),e.Q6J("ngForOf",v.subMenus)}}function T(d,P){if(1&d&&(e.ynx(0),e.YNc(1,m,5,6,"li",56),e.YNc(2,M,8,10,"li",57),e.BQk()),2&d){const v=P.$implicit;e.xp6(1),e.Q6J("ngIf",!1===(null==v?null:v.hasSubRoute)),e.xp6(1),e.Q6J("ngIf",!0===v.hasSubRoute)}}function A(d,P){if(1&d&&(e.ynx(0),e.TgZ(1,"li",55)(2,"span"),e._uU(3),e.qZA()(),e.YNc(4,T,3,2,"ng-container",54),e.BQk()),2&d){const v=P.$implicit;e.xp6(3),e.Oqu(v.tittle),e.xp6(1),e.Q6J("ngForOf",null==v?null:v.menu)}}let w=(()=>{class d{constructor(v,j,b,z,Z){this.router=v,this.data=j,this.sideBar=b,this.common=z,this.auth=Z,this.base="",this.page="",this.last="",this.miniSidebar=!1,this.currentroute="",this.side_bar_data=[],this.common.base.subscribe(S=>{this.base=S}),this.common.page.subscribe(S=>{this.page=S}),this.common.last.subscribe(S=>{this.last=S}),this.data.getAdminSideBarData.subscribe(S=>{this.side_bar_data=S}),this.sideBar.toggleSideBar.subscribe(S=>{this.miniSidebar="true"==S})}toggleSideBar(){this.sideBar.switchSideMenuPosition()}toggleMobileSideBar(){this.sideBar.switchMobileSideBarPosition()}Logout(){localStorage.removeItem("LoginData"),this.router.navigate(["/admin/auth/login"])}miniSideBarMouseHover(v){this.sideBar.expandSideBar.next("over"==v)}expandSubMenus(v){sessionStorage.setItem("menuValue",v.menuValue),this.side_bar_data.map(j=>{j.menu.map(b=>{b.menuValue==v.menuValue?(v.showSubRoute=!v.showSubRoute,0==v.showSubRoute&&sessionStorage.removeItem("menuValue")):b.showSubRoute=!1})})}logOut(){this.auth.logout()}miniSideBarBlur(v){this.sideBar.expandSideBar.next("over"===v)}miniSideBarFocus(v){this.sideBar.expandSideBar.next("over"===v)}static#e=this.\u0275fac=function(j){return new(j||d)(e.Y36(o.F0),e.Y36(s.u),e.Y36(a.G),e.Y36(l.v),e.Y36(y))};static#n=this.\u0275cmp=e.Xpm({type:d,selectors:[["app-sidemenu"]],decls:124,vars:6,consts:[[1,"header"],[1,"header-left"],[1,"logo",3,"routerLink"],["src","assets/admin/img/logo.png","alt","Logo"],[1,"logo","logo-small",3,"routerLink","mouseover","mouseout","focus","blur"],["src","assets/admin/img/logo-small.png","alt","Logo","width","30","height","30"],["href","javascript:void(0);","id","toggle_btn",3,"click"],[1,"feather","icon-chevrons-left"],["tabindex","0","id","mobile_btn",1,"mobile_btn",3,"click","keydown.enter"],[1,"top-nav-search"],["type","text","placeholder","Start typing your Search...",1,"form-control"],["type","submit",1,"btn"],[1,"feather","icon-search"],[1,"nav","user-menu"],[1,"nav-item","dropdown"],["href","#","data-bs-toggle","dropdown",1,"dropdown-toggle","nav-link"],[1,"feather","icon-bell"],[1,"badge","badge-pill"],[1,"dropdown-menu","notifications"],[1,"topnav-dropdown-header"],[1,"notification-title"],["href","javascript:void(0)",1,"clear-noti"],[1,"noti-content"],[1,"notification-list"],[1,"notification-message"],["href","javascript:"],[1,"media","d-flex"],[1,"avatar","avatar-sm","flex-shrink-0"],["alt","","src","assets/img/profiles/avatar-02.jpg",1,"avatar-img","rounded-circle"],[1,"media-body","flex-grow-1"],[1,"noti-details"],[1,"noti-title"],[1,"noti-time"],[1,"notification-time"],["alt","","src","assets/img/profiles/avatar-03.jpg",1,"avatar-img","rounded-circle"],[1,"avatar-title","rounded-circle","bg-primary-light"],[1,"far","fa-user"],["alt","","src","assets/img/profiles/avatar-04.jpg",1,"avatar-img","rounded-circle"],[1,"avatar-title","rounded-circle","bg-info-light"],[1,"far","fa-comment"],[1,"topnav-dropdown-footer"],[1,"nav-item","dropdown","has-arrow","main-drop"],[1,"user-img"],["src","assets/img/profiles/avatar-07.jpg","alt",""],[1,"status","online"],[1,"dropdown-menu"],[1,"dropdown-item",3,"routerLink"],["data-feather","user",1,"me-1"],["data-feather","settings",1,"me-1"],["data-feather","log-out",1,"me-1"],["id","sidebar",1,"sidebar",3,"mouseover","mouseout","focus","blur"],["visibility","hover"],[1,"sidebar-inner","slimScroll"],["id","sidebar-menu",1,"sidebar-menu"],[4,"ngFor","ngForOf"],[1,"menu-title"],[3,"active",4,"ngIf"],["class","submenu",3,"active",4,"ngIf"],[3,"routerLink"],[1,"submenu"],["href","javascript:void(0);",3,"ngClass","click"],[1,"menu-arrow"],[3,"ngClass"]],template:function(j,b){1&j&&(e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"a",4),e.NdJ("mouseover",function(){return b.miniSideBarMouseHover("over")})("mouseout",function(){return b.miniSideBarMouseHover("out")})("focus",function(){return b.miniSideBarMouseHover("over")})("blur",function(){return b.miniSideBarMouseHover("out")}),e._UZ(5,"img",5),e.qZA(),e.TgZ(6,"a",6),e.NdJ("click",function(){return b.toggleSideBar()}),e._UZ(7,"i",7),e.qZA(),e.TgZ(8,"a",8),e.NdJ("click",function(){return b.toggleMobileSideBar()})("keydown.enter",function(){return b.toggleMobileSideBar()}),e._UZ(9,"i",7),e.qZA()(),e.TgZ(10,"div",9)(11,"form"),e._UZ(12,"input",10),e.TgZ(13,"button",11),e._UZ(14,"i",12),e.qZA()()(),e.TgZ(15,"ul",13)(16,"li",14)(17,"a",15),e._UZ(18,"i",16),e.TgZ(19,"span",17),e._uU(20,"5"),e.qZA()(),e.TgZ(21,"div",18)(22,"div",19)(23,"span",20),e._uU(24,"Notifications"),e.qZA(),e.TgZ(25,"a",21),e._uU(26," Clear All"),e.qZA()(),e.TgZ(27,"div",22)(28,"ul",23)(29,"li",24)(30,"a",25)(31,"div",26)(32,"span",27),e._UZ(33,"img",28),e.qZA(),e.TgZ(34,"div",29)(35,"p",30)(36,"span",31),e._uU(37,"Brian Johnson"),e.qZA(),e._uU(38," paid the invoice "),e.TgZ(39,"span",31),e._uU(40,"#DF65485"),e.qZA()(),e.TgZ(41,"p",32)(42,"span",33),e._uU(43,"4 mins ago"),e.qZA()()()()()(),e.TgZ(44,"li",24)(45,"a",25)(46,"div",26)(47,"span",27),e._UZ(48,"img",34),e.qZA(),e.TgZ(49,"div",29)(50,"p",30)(51,"span",31),e._uU(52,"Marie Canales"),e.qZA(),e._uU(53," has accepted your estimate "),e.TgZ(54,"span",31),e._uU(55,"#GTR458789"),e.qZA()(),e.TgZ(56,"p",32)(57,"span",33),e._uU(58,"6 mins ago"),e.qZA()()()()()(),e.TgZ(59,"li",24)(60,"a",25)(61,"div",26)(62,"div",27)(63,"span",35),e._UZ(64,"i",36),e.qZA()(),e.TgZ(65,"div",29)(66,"p",30)(67,"span",31),e._uU(68,"New user registered"),e.qZA()(),e.TgZ(69,"p",32)(70,"span",33),e._uU(71,"8 mins ago"),e.qZA()()()()()(),e.TgZ(72,"li",24)(73,"a",25)(74,"div",26)(75,"span",27),e._UZ(76,"img",37),e.qZA(),e.TgZ(77,"div",29)(78,"p",30)(79,"span",31),e._uU(80,"Barbara Moore"),e.qZA(),e._uU(81," declined the invoice "),e.TgZ(82,"span",31),e._uU(83,"#RDW026896"),e.qZA()(),e.TgZ(84,"p",32)(85,"span",33),e._uU(86,"12 mins ago"),e.qZA()()()()()(),e.TgZ(87,"li",24)(88,"a",25)(89,"div",26)(90,"div",27)(91,"span",38),e._UZ(92,"i",39),e.qZA()(),e.TgZ(93,"div",29)(94,"p",30)(95,"span",31),e._uU(96,"You have received a new message"),e.qZA()(),e.TgZ(97,"p",32)(98,"span",33),e._uU(99,"2 days ago"),e.qZA()()()()()()()(),e.TgZ(100,"div",40)(101,"a",25),e._uU(102,"View all Notifications"),e.qZA()()()(),e.TgZ(103,"li",41)(104,"a",15)(105,"span",42),e._UZ(106,"img",43)(107,"span",44),e.qZA()(),e.TgZ(108,"div",45)(109,"a",46),e._UZ(110,"i",47),e._uU(111," Profile"),e.qZA(),e.TgZ(112,"a",46),e._UZ(113,"i",48),e._uU(114," Settings"),e.qZA(),e.TgZ(115,"a",46),e._UZ(116,"i",49),e._uU(117," Logout"),e.qZA()()()()(),e.TgZ(118,"div",50),e.NdJ("mouseover",function(){return b.miniSideBarMouseHover("over")})("mouseout",function(){return b.miniSideBarMouseHover("out")})("focus",function(){return b.miniSideBarMouseHover("over")})("blur",function(){return b.miniSideBarBlur("out")}),e.TgZ(119,"ng-scrollbar",51)(120,"div",52)(121,"div",53)(122,"ul"),e.YNc(123,A,5,2,"ng-container",54),e.qZA()()()()()),2&j&&(e.xp6(2),e.Q6J("routerLink","/admin/dashboard"),e.xp6(2),e.Q6J("routerLink","/admin/dashboard"),e.xp6(105),e.Q6J("routerLink","/admin/profile"),e.xp6(3),e.Q6J("routerLink","/admin/settings/general"),e.xp6(3),e.Q6J("routerLink","/admin/auth/login"),e.xp6(8),e.Q6J("ngForOf",b.side_bar_data))},dependencies:[n.mk,n.sg,n.O5,o.rH,p._Y,p.JL,p.F,f.KC]})}return d})();const O=function(d,P,v,j){return{"login-body":d,"mini-sidebar":P,"expand-menu":v,"slide-nav":j}},R=function(d){return{"d-none":d}},H=[{path:"",component:(()=>{class d{constructor(v,j,b,z,Z){this.Router=v,this.common=j,this.sideBar=b,this.navservice=z,this.data=Z,this.base="",this.page="",this.last="",this.miniSidebar=!1,this.mobileSidebar=!1,this.showMiniSidebar=!1,this.expandMenu=!1,this.isSidemenu=!1,this.common.base.subscribe(S=>{this.base=S}),this.common.page.subscribe(S=>{this.page=S}),this.common.last.subscribe(S=>{this.last=S}),this.Router.events.subscribe(S=>{S instanceof o.OD&&(this.getRoutes(S),this.mobileSidebar=!1,localStorage.removeItem("isMobileSidebar"),localStorage.removeItem("sidebarPosition")),S instanceof o.m2&&(this.showMiniSidebar=!1)}),this.getRoutes(this.Router),this.navservice.toogleSidebar.subscribe(S=>{this.showMiniSidebar="true"==S}),this.sideBar.toggleSideBar.subscribe(S=>{this.miniSidebar="true"==S}),this.sideBar.toggleMobileSideBar.subscribe(S=>{this.mobileSidebar="true"==S||"true"==S}),this.sideBar.expandSideBar.subscribe(S=>{this.expandMenu=S,0==S&&1==this.miniSidebar&&this.data.Admin_sideBar.map(I=>{I.menu.map(C=>{C.showSubRoute=!1})}),1==S&&1==this.miniSidebar&&this.data.Admin_sideBar.map(I=>{I.menu.map(C=>{const E=sessionStorage.getItem("menuValue");C.showSubRoute=!(!E||E!=C.menuValue)})})})}ngAfterViewInit(){r.replace()}getRoutes(v){const j=v.url.split("/");this.common.base.next(j[1]),this.common.page.next(j[2]),this.common.last.next(j[3])}static#e=this.\u0275fac=function(j){return new(j||d)(e.Y36(o.F0),e.Y36(l.v),e.Y36(a.G),e.Y36(c.I),e.Y36(s.u))};static#n=this.\u0275cmp=e.Xpm({type:d,selectors:[["app-admin"]],decls:3,vars:9,consts:[[1,"main-wrapper",3,"ngClass"],[3,"ngClass"]],template:function(j,b){1&j&&(e.TgZ(0,"div",0),e._UZ(1,"app-sidemenu",1)(2,"router-outlet"),e.qZA()),2&j&&(e.Q6J("ngClass",e.l5B(2,O,"auth"===b.page,!0===b.miniSidebar,!0===b.expandMenu&&!0===b.miniSidebar,!0===b.mobileSidebar)),e.xp6(1),e.Q6J("ngClass",e.VKq(7,R,"auth"===b.page)))},dependencies:[n.mk,o.lC,w],encapsulation:2})}return d})(),children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"dashboard",loadChildren:()=>t.e(7631).then(t.bind(t,7631)).then(d=>d.DashboardModule)},{path:"categories",loadChildren:()=>t.e(2466).then(t.bind(t,2466)).then(d=>d.CategoriesModule)},{path:"freelancers",loadChildren:()=>t.e(6189).then(t.bind(t,6189)).then(d=>d.FreelancersModule)},{path:"deposit",loadChildren:()=>t.e(473).then(t.bind(t,473)).then(d=>d.DepositModule)},{path:"projects",loadChildren:()=>t.e(1334).then(t.bind(t,1334)).then(d=>d.ProjectsModule)},{path:"withdrawn",loadChildren:()=>t.e(9195).then(t.bind(t,9195)).then(d=>d.WithdrawnModule)},{path:"transaction",loadChildren:()=>t.e(5369).then(t.bind(t,5369)).then(d=>d.TransactionModule)},{path:"providers",loadChildren:()=>t.e(1102).then(t.bind(t,1102)).then(d=>d.ProvidersModule)},{path:"subscription",loadChildren:()=>t.e(1370).then(t.bind(t,1370)).then(d=>d.SubscriptionModule)},{path:"reports",loadChildren:()=>t.e(4802).then(t.bind(t,4802)).then(d=>d.ReportsModule)},{path:"roles",loadChildren:()=>t.e(2762).then(t.bind(t,2762)).then(d=>d.RolesModule)},{path:"skills",loadChildren:()=>t.e(6970).then(t.bind(t,6970)).then(d=>d.SkillsModule)},{path:"verifyidentity",loadChildren:()=>t.e(8914).then(t.bind(t,8914)).then(d=>d.VerifyidentityModule)},{path:"settings",loadChildren:()=>t.e(2123).then(t.bind(t,2123)).then(d=>d.SettingsModule)},{path:"components",loadChildren:()=>t.e(3899).then(t.bind(t,3899)).then(d=>d.CompnentsModule)},{path:"forms",loadChildren:()=>t.e(530).then(t.bind(t,530)).then(d=>d.FormsModule)},{path:"tables",loadChildren:()=>t.e(612).then(t.bind(t,612)).then(d=>d.TablesModule)},{path:"role-permission",loadChildren:()=>t.e(5065).then(t.bind(t,5065)).then(d=>d.RolePermissionModule)},{path:"profile",loadChildren:()=>t.e(7312).then(t.bind(t,7312)).then(d=>d.ProfileModule)},{path:"views",loadChildren:()=>t.e(6282).then(t.bind(t,6282)).then(d=>d.ViewsModule)},{path:"user-transactions",loadChildren:()=>t.e(6009).then(t.bind(t,6009)).then(d=>d.UserTransactionsModule)},{path:"activities",loadChildren:()=>t.e(745).then(t.bind(t,745)).then(d=>d.ActivitiesModule)},{path:"user-profile",loadChildren:()=>t.e(4465).then(t.bind(t,4465)).then(d=>d.UserProfileModule)},{path:"auth",loadChildren:()=>t.e(6053).then(t.bind(t,6053)).then(d=>d.AuthModule)}]}];let L=(()=>{class d{static#e=this.\u0275fac=function(j){return new(j||d)};static#n=this.\u0275mod=e.oAB({type:d});static#t=this.\u0275inj=e.cJS({imports:[o.Bz.forChild(H),o.Bz]})}return d})();var B=t(45);let V=(()=>{class d{static#e=this.\u0275fac=function(j){return new(j||d)};static#n=this.\u0275mod=e.oAB({type:d});static#t=this.\u0275inj=e.cJS({imports:[n.ez,L,B.m]})}return d})()},7344:function(F){typeof self<"u"&&self,F.exports=function(i){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return i[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=i,n.c=t,n.d=function(o,r,e){n.o(o,r)||Object.defineProperty(o,r,{configurable:!1,enumerable:!0,get:e})},n.r=function(o){Object.defineProperty(o,"__esModule",{value:!0})},n.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(r,"a",r),r},n.o=function(o,r){return Object.prototype.hasOwnProperty.call(o,r)},n.p="",n(n.s=0)}({"./dist/icons.json":
/*!*************************!*\
                !*** ./dist/icons.json ***!
                \*************************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, table, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */function(i){i.exports={activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',airplay:'<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',"alert-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-triangle":'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',"align-center":'<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',"align-justify":'<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',"align-left":'<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',"align-right":'<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',anchor:'<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',aperture:'<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',archive:'<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',"arrow-down-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',"arrow-down-left":'<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',"arrow-down-right":'<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',"arrow-down":'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',"arrow-left-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',"arrow-left":'<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',"arrow-right-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',"arrow-right":'<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',"arrow-up-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',"arrow-up-left":'<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',"arrow-up-right":'<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',"arrow-up":'<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',"at-sign":'<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',award:'<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',"bar-chart-2":'<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',"bar-chart":'<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',"battery-charging":'<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',battery:'<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',"bell-off":'<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',bluetooth:'<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',bold:'<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',"camera-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',cast:'<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',"check-circle":'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',"check-square":'<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',check:'<polyline points="20 6 9 17 4 12"></polyline>',"chevron-down":'<polyline points="6 9 12 15 18 9"></polyline>',"chevron-left":'<polyline points="15 18 9 12 15 6"></polyline>',"chevron-right":'<polyline points="9 18 15 12 9 6"></polyline>',"chevron-up":'<polyline points="18 15 12 9 6 15"></polyline>',"chevrons-down":'<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',"chevrons-left":'<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',"chevrons-right":'<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',"chevrons-up":'<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',chrome:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',circle:'<circle cx="12" cy="12" r="10"></circle>',clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',clock:'<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',"cloud-drizzle":'<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-lightning":'<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',"cloud-off":'<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',"cloud-rain":'<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-snow":'<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',code:'<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',codepen:'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',codesandbox:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',coffee:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',columns:'<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',compass:'<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',copy:'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',"corner-down-left":'<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',"corner-down-right":'<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',"corner-left-down":'<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',"corner-left-up":'<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',"corner-right-down":'<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',"corner-right-up":'<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',"corner-up-left":'<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',"corner-up-right":'<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',"credit-card":'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',crosshair:'<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',delete:'<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',disc:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',"divide-circle":'<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',"divide-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',divide:'<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',"dollar-sign":'<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',"download-cloud":'<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',dribbble:'<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',droplet:'<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',"edit-2":'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',"edit-3":'<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',"eye-off":'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',"fast-forward":'<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',figma:'<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',"file-minus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',"file-plus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',"file-text":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',film:'<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',"folder-minus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',"folder-plus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',framer:'<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',frown:'<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',gift:'<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',"git-commit":'<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',"git-merge":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',"git-pull-request":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',gitlab:'<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',globe:'<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',grid:'<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',"hard-drive":'<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',hash:'<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',"help-circle":'<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',image:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',info:'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',instagram:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',italic:'<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',layout:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',"life-buoy":'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',"link-2":'<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',list:'<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',loader:'<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',lock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',"map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',"maximize-2":'<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',meh:'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',menu:'<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',"message-circle":'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',"mic-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',"minimize-2":'<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',"minus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',"minus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',minus:'<line x1="5" y1="12" x2="19" y2="12"></line>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',"more-horizontal":'<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',"more-vertical":'<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',"mouse-pointer":'<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',move:'<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',music:'<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',"navigation-2":'<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',navigation:'<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',octagon:'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',paperclip:'<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',"pause-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',pause:'<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',"pen-tool":'<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',percent:'<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',"phone-call":'<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-forwarded":'<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-incoming":'<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-missed":'<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-off":'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',"phone-outgoing":'<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"pie-chart":'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',"play-circle":'<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',play:'<polygon points="5 3 19 12 5 21 5 3"></polygon>',"plus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',"plus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',plus:'<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',pocket:'<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',power:'<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',printer:'<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',radio:'<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',"refresh-ccw":'<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',"refresh-cw":'<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',repeat:'<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',rewind:'<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',"rotate-ccw":'<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',"rotate-cw":'<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',rss:'<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',scissors:'<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',search:'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',send:'<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',server:'<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',settings:'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',"share-2":'<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',"shield-off":'<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',"shopping-bag":'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',"shopping-cart":'<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',shuffle:'<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',"skip-back":'<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',slack:'<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',slash:'<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',sliders:'<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',smile:'<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',speaker:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',"stop-circle":'<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',sun:'<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',sunrise:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',sunset:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',table:'<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',tablet:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',target:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',terminal:'<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',thermometer:'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',"thumbs-down":'<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',"thumbs-up":'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',"toggle-left":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',"toggle-right":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',"trash-2":'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',trash:'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',trello:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',"trending-down":'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',"trending-up":'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',triangle:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',truck:'<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',tv:'<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',twitch:'<path d="M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7"></path>',twitter:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',type:'<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',umbrella:'<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',underline:'<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',"upload-cloud":'<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',"user-check":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',"user-minus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',"user-x":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',"video-off":'<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',video:'<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',voicemail:'<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',"volume-1":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-2":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-x":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',watch:'<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',"wifi-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wind:'<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',"x-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',x:'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',youtube:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',"zap-off":'<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',"zoom-in":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',"zoom-out":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'}},"./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
                !*** ./node_modules/classnames/dedupe.js ***!
                \*******************************************/
/*! no static exports found */function(i,t,n){var r;!function(){"use strict";var e=function(){function l(){}function a(m,x){for(var g=x.length,M=0;M<g;++M)p(m,x[M])}l.prototype=Object.create(null);var c={}.hasOwnProperty;var u=/\s+/;function p(m,x){if(x){var g=typeof x;"string"===g?function y(m,x){for(var g=x.split(u),M=g.length,T=0;T<M;++T)m[g[T]]=!0}(m,x):Array.isArray(x)?a(m,x):"object"===g?function h(m,x){for(var g in x)c.call(x,g)&&(m[g]=!!x[g])}(m,x):"number"===g&&function s(m,x){m[x]=!0}(m,x)}}return function f(){for(var m=arguments.length,x=Array(m),g=0;g<m;g++)x[g]=arguments[g];var M=new l;a(M,x);var T=[];for(var A in M)M[A]&&T.push(A);return T.join(" ")}}();typeof i<"u"&&i.exports?i.exports=e:void 0!==(r=function(){return e}.apply(t,[]))&&(i.exports=r)}()},"./node_modules/core-js/es/array/from.js":
/*!***********************************************!*\
                !*** ./node_modules/core-js/es/array/from.js ***!
                \***********************************************/
/*! no static exports found */function(i,t,n){n(
/*! ../../modules/es.string.iterator */
"./node_modules/core-js/modules/es.string.iterator.js"),n(
/*! ../../modules/es.array.from */
"./node_modules/core-js/modules/es.array.from.js");var o=n(
/*! ../../internals/path */
"./node_modules/core-js/internals/path.js");i.exports=o.Array.from},"./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
                !*** ./node_modules/core-js/internals/a-function.js ***!
                \******************************************************/
/*! no static exports found */function(i,t){i.exports=function(n){if("function"!=typeof n)throw TypeError(String(n)+" is not a function");return n}},"./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
                !*** ./node_modules/core-js/internals/an-object.js ***!
                \*****************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js");i.exports=function(r){if(!o(r))throw TypeError(String(r)+" is not an object");return r}},"./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
                !*** ./node_modules/core-js/internals/array-from.js ***!
                \******************************************************/
/*! no static exports found */function(i,t,n){"use strict";var o=n(
/*! ../internals/bind-context */
"./node_modules/core-js/internals/bind-context.js"),r=n(
/*! ../internals/to-object */
"./node_modules/core-js/internals/to-object.js"),e=n(
/*! ../internals/call-with-safe-iteration-closing */
"./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),l=n(
/*! ../internals/is-array-iterator-method */
"./node_modules/core-js/internals/is-array-iterator-method.js"),a=n(
/*! ../internals/to-length */
"./node_modules/core-js/internals/to-length.js"),c=n(
/*! ../internals/create-property */
"./node_modules/core-js/internals/create-property.js"),s=n(
/*! ../internals/get-iterator-method */
"./node_modules/core-js/internals/get-iterator-method.js");i.exports=function(u){var T,A,w,O,y=r(u),p="function"==typeof this?this:Array,f=arguments.length,m=f>1?arguments[1]:void 0,x=void 0!==m,g=0,M=s(y);if(x&&(m=o(m,f>2?arguments[2]:void 0,2)),null==M||p==Array&&l(M))for(A=new p(T=a(y.length));T>g;g++)c(A,g,x?m(y[g],g):y[g]);else for(O=M.call(y),A=new p;!(w=O.next()).done;g++)c(A,g,x?e(O,m,[w.value,g],!0):w.value);return A.length=g,A}},"./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
                !*** ./node_modules/core-js/internals/array-includes.js ***!
                \**********************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/to-indexed-object */
"./node_modules/core-js/internals/to-indexed-object.js"),r=n(
/*! ../internals/to-length */
"./node_modules/core-js/internals/to-length.js"),e=n(
/*! ../internals/to-absolute-index */
"./node_modules/core-js/internals/to-absolute-index.js");i.exports=function(l){return function(a,c,s){var p,h=o(a),u=r(h.length),y=e(s,u);if(l&&c!=c){for(;u>y;)if((p=h[y++])!=p)return!0}else for(;u>y;y++)if((l||y in h)&&h[y]===c)return l||y||0;return!l&&-1}}},"./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
                !*** ./node_modules/core-js/internals/bind-context.js ***!
                \********************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/a-function */
"./node_modules/core-js/internals/a-function.js");i.exports=function(r,e,l){if(o(r),void 0===e)return r;switch(l){case 0:return function(){return r.call(e)};case 1:return function(a){return r.call(e,a)};case 2:return function(a,c){return r.call(e,a,c)};case 3:return function(a,c,s){return r.call(e,a,c,s)}}return function(){return r.apply(e,arguments)}}},"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
                !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
                \****************************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js");i.exports=function(r,e,l,a){try{return a?e(o(l)[0],l[1]):e(l)}catch(s){var c=r.return;throw void 0!==c&&o(c.call(r)),s}}},"./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
                !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
                \**************************************************************************/
/*! no static exports found */function(i,t,n){var r=n(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("iterator"),e=!1;try{var l=0,a={next:function(){return{done:!!l++}},return:function(){e=!0}};a[r]=function(){return this},Array.from(a,function(){throw 2})}catch{}i.exports=function(c,s){if(!s&&!e)return!1;var h=!1;try{var u={};u[r]=function(){return{next:function(){return{done:h=!0}}}},c(u)}catch{}return h}},"./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
                !*** ./node_modules/core-js/internals/classof-raw.js ***!
                \*******************************************************/
/*! no static exports found */function(i,t){var n={}.toString;i.exports=function(o){return n.call(o).slice(8,-1)}},"./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
                !*** ./node_modules/core-js/internals/classof.js ***!
                \***************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/classof-raw */
"./node_modules/core-js/internals/classof-raw.js"),e=n(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("toStringTag"),l="Arguments"==o(function(){return arguments}());i.exports=function(c){var s,h,u;return void 0===c?"Undefined":null===c?"Null":"string"==typeof(h=function(c,s){try{return c[s]}catch{}}(s=Object(c),e))?h:l?o(s):"Object"==(u=o(s))&&"function"==typeof s.callee?"Arguments":u}},"./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
                !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
                \***********************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),r=n(
/*! ../internals/own-keys */
"./node_modules/core-js/internals/own-keys.js"),e=n(
/*! ../internals/object-get-own-property-descriptor */
"./node_modules/core-js/internals/object-get-own-property-descriptor.js"),l=n(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js");i.exports=function(a,c){for(var s=r(c),h=l.f,u=e.f,y=0;y<s.length;y++){var p=s[y];o(a,p)||h(a,p,u(c,p))}}},"./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
                !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
                \********************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js");i.exports=!o(function(){function r(){}return r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype})},"./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
                !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
                \***********************************************************************/
/*! no static exports found */function(i,t,n){"use strict";var o=n(
/*! ../internals/iterators-core */
"./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,r=n(
/*! ../internals/object-create */
"./node_modules/core-js/internals/object-create.js"),e=n(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js"),l=n(
/*! ../internals/set-to-string-tag */
"./node_modules/core-js/internals/set-to-string-tag.js"),a=n(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),c=function(){return this};i.exports=function(s,h,u){var y=h+" Iterator";return s.prototype=r(o,{next:e(1,u)}),l(s,y,!1,!0),a[y]=c,s}},"./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
                !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
                \**********************************************************************/
/*! no static exports found */function(i,t){i.exports=function(n,o){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:o}}},"./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
                !*** ./node_modules/core-js/internals/create-property.js ***!
                \***********************************************************/
/*! no static exports found */function(i,t,n){"use strict";var o=n(
/*! ../internals/to-primitive */
"./node_modules/core-js/internals/to-primitive.js"),r=n(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js"),e=n(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js");i.exports=function(l,a,c){var s=o(a);s in l?r.f(l,s,e(0,c)):l[s]=c}},"./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
                !*** ./node_modules/core-js/internals/define-iterator.js ***!
                \***********************************************************/
/*! no static exports found */function(i,t,n){"use strict";var o=n(
/*! ../internals/export */
"./node_modules/core-js/internals/export.js"),r=n(
/*! ../internals/create-iterator-constructor */
"./node_modules/core-js/internals/create-iterator-constructor.js"),e=n(
/*! ../internals/object-get-prototype-of */
"./node_modules/core-js/internals/object-get-prototype-of.js"),l=n(
/*! ../internals/object-set-prototype-of */
"./node_modules/core-js/internals/object-set-prototype-of.js"),a=n(
/*! ../internals/set-to-string-tag */
"./node_modules/core-js/internals/set-to-string-tag.js"),c=n(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),s=n(
/*! ../internals/redefine */
"./node_modules/core-js/internals/redefine.js"),h=n(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js"),u=n(
/*! ../internals/is-pure */
"./node_modules/core-js/internals/is-pure.js"),y=n(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),p=n(
/*! ../internals/iterators-core */
"./node_modules/core-js/internals/iterators-core.js"),f=p.IteratorPrototype,m=p.BUGGY_SAFARI_ITERATORS,x=h("iterator"),g="keys",M="values",T="entries",A=function(){return this};i.exports=function(w,O,R,U,H,L,B){r(R,O,U);var Z,S,I,V=function(C){if(C===H&&b)return b;if(!m&&C in v)return v[C];switch(C){case g:case M:case T:return function(){return new R(this,C)}}return function(){return new R(this)}},d=O+" Iterator",P=!1,v=w.prototype,j=v[x]||v["@@iterator"]||H&&v[H],b=!m&&j||V(H),z="Array"==O&&v.entries||j;if(z&&(Z=e(z.call(new w)),f!==Object.prototype&&Z.next&&(!u&&e(Z)!==f&&(l?l(Z,f):"function"!=typeof Z[x]&&c(Z,x,A)),a(Z,d,!0,!0),u&&(y[d]=A))),H==M&&j&&j.name!==M&&(P=!0,b=function(){return j.call(this)}),(!u||B)&&v[x]!==b&&c(v,x,b),y[O]=b,H)if(S={values:V(M),keys:L?b:V(g),entries:V(T)},B)for(I in S)(m||P||!(I in v))&&s(v,I,S[I]);else o({target:O,proto:!0,forced:m||P},S);return S}},"./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
                !*** ./node_modules/core-js/internals/descriptors.js ***!
                \*******************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js");i.exports=!o(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
                !*** ./node_modules/core-js/internals/document-create-element.js ***!
                \*******************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=n(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js"),e=o.document,l=r(e)&&r(e.createElement);i.exports=function(a){return l?e.createElement(a):{}}},"./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
                !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
                \*********************************************************/
/*! no static exports found */function(i,t){i.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
                !*** ./node_modules/core-js/internals/export.js ***!
                \**************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=n(
/*! ../internals/object-get-own-property-descriptor */
"./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,e=n(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),l=n(
/*! ../internals/redefine */
"./node_modules/core-js/internals/redefine.js"),a=n(
/*! ../internals/set-global */
"./node_modules/core-js/internals/set-global.js"),c=n(
/*! ../internals/copy-constructor-properties */
"./node_modules/core-js/internals/copy-constructor-properties.js"),s=n(
/*! ../internals/is-forced */
"./node_modules/core-js/internals/is-forced.js");i.exports=function(h,u){var x,g,M,T,A,y=h.target,p=h.global,f=h.stat;if(x=p?o:f?o[y]||a(y,{}):(o[y]||{}).prototype)for(g in u){if(T=u[g],M=h.noTargetGet?(A=r(x,g))&&A.value:x[g],!s(p?g:y+(f?".":"#")+g,h.forced)&&void 0!==M){if(typeof T==typeof M)continue;c(T,M)}(h.sham||M&&M.sham)&&e(T,"sham",!0),l(x,g,T,h)}}},"./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
                !*** ./node_modules/core-js/internals/fails.js ***!
                \*************************************************/
/*! no static exports found */function(i,t){i.exports=function(n){try{return!!n()}catch{return!0}}},"./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
                !*** ./node_modules/core-js/internals/function-to-string.js ***!
                \**************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js");i.exports=o("native-function-to-string",Function.toString)},"./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
                !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
                \***************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/classof */
"./node_modules/core-js/internals/classof.js"),r=n(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),l=n(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("iterator");i.exports=function(a){if(null!=a)return a[l]||a["@@iterator"]||r[o(a)]}},"./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
                !*** ./node_modules/core-js/internals/global.js ***!
                \**************************************************/
/*! no static exports found */function(i,t,n){(function(o){var r="object",e=function(l){return l&&l.Math==Math&&l};i.exports=e(typeof globalThis==r&&globalThis)||e(typeof window==r&&window)||e(typeof self==r&&self)||e(typeof o==r&&o)||Function("return this")()}).call(this,n(
/*! ./../../webpack/buildin/global.js */
"./node_modules/webpack/buildin/global.js"))},"./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
                !*** ./node_modules/core-js/internals/has.js ***!
                \***********************************************/
/*! no static exports found */function(i,t){var n={}.hasOwnProperty;i.exports=function(o,r){return n.call(o,r)}},"./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
                !*** ./node_modules/core-js/internals/hidden-keys.js ***!
                \*******************************************************/
/*! no static exports found */function(i,t){i.exports={}},"./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
                !*** ./node_modules/core-js/internals/hide.js ***!
                \************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),r=n(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js"),e=n(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js");i.exports=o?function(l,a,c){return r.f(l,a,e(1,c))}:function(l,a,c){return l[a]=c,l}},"./node_modules/core-js/internals/html.js":
/*!************************************************!*\
                !*** ./node_modules/core-js/internals/html.js ***!
                \************************************************/
/*! no static exports found */function(i,t,n){var r=n(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js").document;i.exports=r&&r.documentElement},"./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
                !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
                \**********************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),r=n(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js"),e=n(
/*! ../internals/document-create-element */
"./node_modules/core-js/internals/document-create-element.js");i.exports=!o&&!r(function(){return 7!=Object.defineProperty(e("div"),"a",{get:function(){return 7}}).a})},"./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
                !*** ./node_modules/core-js/internals/indexed-object.js ***!
                \**********************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js"),r=n(
/*! ../internals/classof-raw */
"./node_modules/core-js/internals/classof-raw.js"),e="".split;i.exports=o(function(){return!Object("z").propertyIsEnumerable(0)})?function(l){return"String"==r(l)?e.call(l,""):Object(l)}:Object},"./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
                !*** ./node_modules/core-js/internals/internal-state.js ***!
                \**********************************************************/
/*! no static exports found */function(i,t,n){var u,y,p,o=n(
/*! ../internals/native-weak-map */
"./node_modules/core-js/internals/native-weak-map.js"),r=n(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),e=n(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js"),l=n(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),a=n(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),c=n(
/*! ../internals/shared-key */
"./node_modules/core-js/internals/shared-key.js"),s=n(
/*! ../internals/hidden-keys */
"./node_modules/core-js/internals/hidden-keys.js");if(o){var x=new(0,r.WeakMap),g=x.get,M=x.has,T=x.set;u=function(w,O){return T.call(x,w,O),O},y=function(w){return g.call(x,w)||{}},p=function(w){return M.call(x,w)}}else{var A=c("state");s[A]=!0,u=function(w,O){return l(w,A,O),O},y=function(w){return a(w,A)?w[A]:{}},p=function(w){return a(w,A)}}i.exports={set:u,get:y,has:p,enforce:function(w){return p(w)?y(w):u(w,{})},getterFor:function(w){return function(O){var R;if(!e(O)||(R=y(O)).type!==w)throw TypeError("Incompatible receiver, "+w+" required");return R}}}},"./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
                !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
                \********************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js"),r=n(
/*! ../internals/iterators */
"./node_modules/core-js/internals/iterators.js"),e=o("iterator"),l=Array.prototype;i.exports=function(a){return void 0!==a&&(r.Array===a||l[e]===a)}},"./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
                !*** ./node_modules/core-js/internals/is-forced.js ***!
                \*****************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js"),r=/#|\.prototype\./,e=function(h,u){var y=a[l(h)];return y==s||y!=c&&("function"==typeof u?o(u):!!u)},l=e.normalize=function(h){return String(h).replace(r,".").toLowerCase()},a=e.data={},c=e.NATIVE="N",s=e.POLYFILL="P";i.exports=e},"./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
                !*** ./node_modules/core-js/internals/is-object.js ***!
                \*****************************************************/
/*! no static exports found */function(i,t){i.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},"./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
                !*** ./node_modules/core-js/internals/is-pure.js ***!
                \***************************************************/
/*! no static exports found */function(i,t){i.exports=!1},"./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
                !*** ./node_modules/core-js/internals/iterators-core.js ***!
                \**********************************************************/
/*! no static exports found */function(i,t,n){"use strict";var u,y,p,o=n(
/*! ../internals/object-get-prototype-of */
"./node_modules/core-js/internals/object-get-prototype-of.js"),r=n(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),e=n(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),l=n(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js"),a=n(
/*! ../internals/is-pure */
"./node_modules/core-js/internals/is-pure.js"),c=l("iterator"),s=!1;[].keys&&("next"in(p=[].keys())?(y=o(o(p)))!==Object.prototype&&(u=y):s=!0),null==u&&(u={}),!a&&!e(u,c)&&r(u,c,function(){return this}),i.exports={IteratorPrototype:u,BUGGY_SAFARI_ITERATORS:s}},"./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
                !*** ./node_modules/core-js/internals/iterators.js ***!
                \*****************************************************/
/*! no static exports found */function(i,t){i.exports={}},"./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
                !*** ./node_modules/core-js/internals/native-symbol.js ***!
                \*********************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/fails */
"./node_modules/core-js/internals/fails.js");i.exports=!!Object.getOwnPropertySymbols&&!o(function(){return!String(Symbol())})},"./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
                !*** ./node_modules/core-js/internals/native-weak-map.js ***!
                \***********************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=n(
/*! ../internals/function-to-string */
"./node_modules/core-js/internals/function-to-string.js"),e=o.WeakMap;i.exports="function"==typeof e&&/native code/.test(r.call(e))},"./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
                !*** ./node_modules/core-js/internals/object-create.js ***!
                \*********************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),r=n(
/*! ../internals/object-define-properties */
"./node_modules/core-js/internals/object-define-properties.js"),e=n(
/*! ../internals/enum-bug-keys */
"./node_modules/core-js/internals/enum-bug-keys.js"),l=n(
/*! ../internals/hidden-keys */
"./node_modules/core-js/internals/hidden-keys.js"),a=n(
/*! ../internals/html */
"./node_modules/core-js/internals/html.js"),c=n(
/*! ../internals/document-create-element */
"./node_modules/core-js/internals/document-create-element.js"),h=n(
/*! ../internals/shared-key */
"./node_modules/core-js/internals/shared-key.js")("IE_PROTO"),u="prototype",y=function(){},p=function(){var A,f=c("iframe"),m=e.length,g="script",T="java"+g+":";for(f.style.display="none",a.appendChild(f),f.src=String(T),(A=f.contentWindow.document).open(),A.write("<"+g+">document.F=Object</"+g+">"),A.close(),p=A.F;m--;)delete p[u][e[m]];return p()};i.exports=Object.create||function(m,x){var g;return null!==m?(y[u]=o(m),g=new y,y[u]=null,g[h]=m):g=p(),void 0===x?g:r(g,x)},l[h]=!0},"./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
                !*** ./node_modules/core-js/internals/object-define-properties.js ***!
                \********************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),r=n(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js"),e=n(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),l=n(
/*! ../internals/object-keys */
"./node_modules/core-js/internals/object-keys.js");i.exports=o?Object.defineProperties:function(c,s){e(c);for(var p,h=l(s),u=h.length,y=0;u>y;)r.f(c,p=h[y++],s[p]);return c}},"./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
                !*** ./node_modules/core-js/internals/object-define-property.js ***!
                \******************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),r=n(
/*! ../internals/ie8-dom-define */
"./node_modules/core-js/internals/ie8-dom-define.js"),e=n(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),l=n(
/*! ../internals/to-primitive */
"./node_modules/core-js/internals/to-primitive.js"),a=Object.defineProperty;t.f=o?a:function(s,h,u){if(e(s),h=l(h,!0),e(u),r)try{return a(s,h,u)}catch{}if("get"in u||"set"in u)throw TypeError("Accessors not supported");return"value"in u&&(s[h]=u.value),s}},"./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
                !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
                \******************************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/descriptors */
"./node_modules/core-js/internals/descriptors.js"),r=n(
/*! ../internals/object-property-is-enumerable */
"./node_modules/core-js/internals/object-property-is-enumerable.js"),e=n(
/*! ../internals/create-property-descriptor */
"./node_modules/core-js/internals/create-property-descriptor.js"),l=n(
/*! ../internals/to-indexed-object */
"./node_modules/core-js/internals/to-indexed-object.js"),a=n(
/*! ../internals/to-primitive */
"./node_modules/core-js/internals/to-primitive.js"),c=n(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),s=n(
/*! ../internals/ie8-dom-define */
"./node_modules/core-js/internals/ie8-dom-define.js"),h=Object.getOwnPropertyDescriptor;t.f=o?h:function(y,p){if(y=l(y),p=a(p,!0),s)try{return h(y,p)}catch{}if(c(y,p))return e(!r.f.call(y,p),y[p])}},"./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
                !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
                \*************************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/object-keys-internal */
"./node_modules/core-js/internals/object-keys-internal.js"),e=n(
/*! ../internals/enum-bug-keys */
"./node_modules/core-js/internals/enum-bug-keys.js").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(a){return o(a,e)}},"./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
                !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
                \***************************************************************************/
/*! no static exports found */function(i,t){t.f=Object.getOwnPropertySymbols},"./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
                !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
                \*******************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),r=n(
/*! ../internals/to-object */
"./node_modules/core-js/internals/to-object.js"),e=n(
/*! ../internals/shared-key */
"./node_modules/core-js/internals/shared-key.js"),l=n(
/*! ../internals/correct-prototype-getter */
"./node_modules/core-js/internals/correct-prototype-getter.js"),a=e("IE_PROTO"),c=Object.prototype;i.exports=l?Object.getPrototypeOf:function(s){return s=r(s),o(s,a)?s[a]:"function"==typeof s.constructor&&s instanceof s.constructor?s.constructor.prototype:s instanceof Object?c:null}},"./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
                !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
                \****************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),r=n(
/*! ../internals/to-indexed-object */
"./node_modules/core-js/internals/to-indexed-object.js"),e=n(
/*! ../internals/array-includes */
"./node_modules/core-js/internals/array-includes.js"),l=n(
/*! ../internals/hidden-keys */
"./node_modules/core-js/internals/hidden-keys.js"),a=e(!1);i.exports=function(c,s){var p,h=r(c),u=0,y=[];for(p in h)!o(l,p)&&o(h,p)&&y.push(p);for(;s.length>u;)o(h,p=s[u++])&&(~a(y,p)||y.push(p));return y}},"./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
                !*** ./node_modules/core-js/internals/object-keys.js ***!
                \*******************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/object-keys-internal */
"./node_modules/core-js/internals/object-keys-internal.js"),r=n(
/*! ../internals/enum-bug-keys */
"./node_modules/core-js/internals/enum-bug-keys.js");i.exports=Object.keys||function(l){return o(l,r)}},"./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
                !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
                \*************************************************************************/
/*! no static exports found */function(i,t,n){"use strict";var o={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,e=r&&!o.call({1:2},1);t.f=e?function(a){var c=r(this,a);return!!c&&c.enumerable}:o},"./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
                !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
                \*******************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/validate-set-prototype-of-arguments */
"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");i.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var l,r=!1,e={};try{(l=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),r=e instanceof Array}catch{}return function(c,s){return o(c,s),r?l.call(c,s):c.__proto__=s,c}}():void 0)},"./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
                !*** ./node_modules/core-js/internals/own-keys.js ***!
                \****************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=n(
/*! ../internals/object-get-own-property-names */
"./node_modules/core-js/internals/object-get-own-property-names.js"),e=n(
/*! ../internals/object-get-own-property-symbols */
"./node_modules/core-js/internals/object-get-own-property-symbols.js"),l=n(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js"),a=o.Reflect;i.exports=a&&a.ownKeys||function(s){var h=r.f(l(s)),u=e.f;return u?h.concat(u(s)):h}},"./node_modules/core-js/internals/path.js":
/*!************************************************!*\
                !*** ./node_modules/core-js/internals/path.js ***!
                \************************************************/
/*! no static exports found */function(i,t,n){i.exports=n(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js")},"./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
                !*** ./node_modules/core-js/internals/redefine.js ***!
                \****************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=n(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js"),e=n(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js"),l=n(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),a=n(
/*! ../internals/set-global */
"./node_modules/core-js/internals/set-global.js"),c=n(
/*! ../internals/function-to-string */
"./node_modules/core-js/internals/function-to-string.js"),s=n(
/*! ../internals/internal-state */
"./node_modules/core-js/internals/internal-state.js"),h=s.get,u=s.enforce,y=String(c).split("toString");r("inspectSource",function(p){return c.call(p)}),(i.exports=function(p,f,m,x){var g=!!x&&!!x.unsafe,M=!!x&&!!x.enumerable,T=!!x&&!!x.noTargetGet;"function"==typeof m&&("string"==typeof f&&!l(m,"name")&&e(m,"name",f),u(m).source=y.join("string"==typeof f?f:"")),p!==o?(g?!T&&p[f]&&(M=!0):delete p[f],M?p[f]=m:e(p,f,m)):M?p[f]=m:a(f,m)})(Function.prototype,"toString",function(){return"function"==typeof this&&h(this).source||c.call(this)})},"./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
                !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
                \********************************************************************/
/*! no static exports found */function(i,t){i.exports=function(n){if(null==n)throw TypeError("Can't call method on "+n);return n}},"./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
                !*** ./node_modules/core-js/internals/set-global.js ***!
                \******************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=n(
/*! ../internals/hide */
"./node_modules/core-js/internals/hide.js");i.exports=function(e,l){try{r(o,e,l)}catch{o[e]=l}return l}},"./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
                !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
                \*************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/object-define-property */
"./node_modules/core-js/internals/object-define-property.js").f,r=n(
/*! ../internals/has */
"./node_modules/core-js/internals/has.js"),l=n(
/*! ../internals/well-known-symbol */
"./node_modules/core-js/internals/well-known-symbol.js")("toStringTag");i.exports=function(a,c,s){a&&!r(a=s?a:a.prototype,l)&&o(a,l,{configurable:!0,value:c})}},"./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
                !*** ./node_modules/core-js/internals/shared-key.js ***!
                \******************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js"),r=n(
/*! ../internals/uid */
"./node_modules/core-js/internals/uid.js"),e=o("keys");i.exports=function(l){return e[l]||(e[l]=r(l))}},"./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
                !*** ./node_modules/core-js/internals/shared.js ***!
                \**************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=n(
/*! ../internals/set-global */
"./node_modules/core-js/internals/set-global.js"),e=n(
/*! ../internals/is-pure */
"./node_modules/core-js/internals/is-pure.js"),l="__core-js_shared__",a=o[l]||r(l,{});(i.exports=function(c,s){return a[c]||(a[c]=void 0!==s?s:{})})("versions",[]).push({version:"3.1.3",mode:e?"pure":"global",copyright:"\xa9 2019 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
                !*** ./node_modules/core-js/internals/string-at.js ***!
                \*****************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/to-integer */
"./node_modules/core-js/internals/to-integer.js"),r=n(
/*! ../internals/require-object-coercible */
"./node_modules/core-js/internals/require-object-coercible.js");i.exports=function(e,l,a){var u,y,c=String(r(e)),s=o(l),h=c.length;return s<0||s>=h?a?"":void 0:(u=c.charCodeAt(s))<55296||u>56319||s+1===h||(y=c.charCodeAt(s+1))<56320||y>57343?a?c.charAt(s):u:a?c.slice(s,s+2):y-56320+(u-55296<<10)+65536}},"./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
                !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
                \*************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/to-integer */
"./node_modules/core-js/internals/to-integer.js"),r=Math.max,e=Math.min;i.exports=function(l,a){var c=o(l);return c<0?r(c+a,0):e(c,a)}},"./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
                !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
                \*************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/indexed-object */
"./node_modules/core-js/internals/indexed-object.js"),r=n(
/*! ../internals/require-object-coercible */
"./node_modules/core-js/internals/require-object-coercible.js");i.exports=function(e){return o(r(e))}},"./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
                !*** ./node_modules/core-js/internals/to-integer.js ***!
                \******************************************************/
/*! no static exports found */function(i,t){var n=Math.ceil,o=Math.floor;i.exports=function(r){return isNaN(r=+r)?0:(r>0?o:n)(r)}},"./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
                !*** ./node_modules/core-js/internals/to-length.js ***!
                \*****************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/to-integer */
"./node_modules/core-js/internals/to-integer.js"),r=Math.min;i.exports=function(e){return e>0?r(o(e),9007199254740991):0}},"./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
                !*** ./node_modules/core-js/internals/to-object.js ***!
                \*****************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/require-object-coercible */
"./node_modules/core-js/internals/require-object-coercible.js");i.exports=function(r){return Object(o(r))}},"./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
                !*** ./node_modules/core-js/internals/to-primitive.js ***!
                \********************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js");i.exports=function(r,e){if(!o(r))return r;var l,a;if(e&&"function"==typeof(l=r.toString)&&!o(a=l.call(r))||"function"==typeof(l=r.valueOf)&&!o(a=l.call(r))||!e&&"function"==typeof(l=r.toString)&&!o(a=l.call(r)))return a;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
                !*** ./node_modules/core-js/internals/uid.js ***!
                \***********************************************/
/*! no static exports found */function(i,t){var n=0,o=Math.random();i.exports=function(r){return"Symbol(".concat(void 0===r?"":r,")_",(++n+o).toString(36))}},"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
                !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
                \*******************************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/is-object */
"./node_modules/core-js/internals/is-object.js"),r=n(
/*! ../internals/an-object */
"./node_modules/core-js/internals/an-object.js");i.exports=function(e,l){if(r(e),!o(l)&&null!==l)throw TypeError("Can't set "+String(l)+" as a prototype")}},"./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
                !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
                \*************************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/global */
"./node_modules/core-js/internals/global.js"),r=n(
/*! ../internals/shared */
"./node_modules/core-js/internals/shared.js"),e=n(
/*! ../internals/uid */
"./node_modules/core-js/internals/uid.js"),l=n(
/*! ../internals/native-symbol */
"./node_modules/core-js/internals/native-symbol.js"),a=o.Symbol,c=r("wks");i.exports=function(s){return c[s]||(c[s]=l&&a[s]||(l?a:e)("Symbol."+s))}},"./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
                !*** ./node_modules/core-js/modules/es.array.from.js ***!
                \*******************************************************/
/*! no static exports found */function(i,t,n){var o=n(
/*! ../internals/export */
"./node_modules/core-js/internals/export.js"),r=n(
/*! ../internals/array-from */
"./node_modules/core-js/internals/array-from.js");o({target:"Array",stat:!0,forced:!n(
/*! ../internals/check-correctness-of-iteration */
"./node_modules/core-js/internals/check-correctness-of-iteration.js")(function(a){Array.from(a)})},{from:r})},"./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
                !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
                \************************************************************/
/*! no static exports found */function(i,t,n){"use strict";var o=n(
/*! ../internals/string-at */
"./node_modules/core-js/internals/string-at.js"),r=n(
/*! ../internals/internal-state */
"./node_modules/core-js/internals/internal-state.js"),e=n(
/*! ../internals/define-iterator */
"./node_modules/core-js/internals/define-iterator.js"),l="String Iterator",a=r.set,c=r.getterFor(l);e(String,"String",function(s){a(this,{type:l,string:String(s),index:0})},function(){var p,h=c(this),u=h.string,y=h.index;return y>=u.length?{value:void 0,done:!0}:(p=o(u,y,!0),h.index+=p.length,{value:p,done:!1})})},"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
                !*** (webpack)/buildin/global.js ***!
                \***********************************/
/*! no static exports found */function(i,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch{"object"==typeof window&&(n=window)}i.exports=n},"./src/default-attrs.json":
/*!********************************!*\
                !*** ./src/default-attrs.json ***!
                \********************************/
/*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */function(i){i.exports={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}},"./src/icon.js":
/*!*********************!*\
                !*** ./src/icon.js ***!
                \*********************/
/*! no static exports found */function(i,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(p){for(var f=1;f<arguments.length;f++){var m=arguments[f];for(var x in m)Object.prototype.hasOwnProperty.call(m,x)&&(p[x]=m[x])}return p},r=function(){function p(f,m){for(var x=0;x<m.length;x++){var g=m[x];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(f,g.key,g)}}return function(f,m,x){return m&&p(f.prototype,m),x&&p(f,x),f}}(),l=s(n(
/*! classnames/dedupe */
"./node_modules/classnames/dedupe.js")),c=s(n(
/*! ./default-attrs.json */
"./src/default-attrs.json"));function s(p){return p&&p.__esModule?p:{default:p}}var u=function(){function p(f,m){var x=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];(function h(p,f){if(!(p instanceof f))throw new TypeError("Cannot call a class as a function")})(this,p),this.name=f,this.contents=m,this.tags=x,this.attrs=o({},c.default,{class:"feather feather-"+f})}return r(p,[{key:"toSvg",value:function(){var m=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"<svg "+function y(p){return Object.keys(p).map(function(f){return f+'="'+p[f]+'"'}).join(" ")}(o({},this.attrs,m,{class:(0,l.default)(this.attrs.class,m.class)}))+">"+this.contents+"</svg>"}},{key:"toString",value:function(){return this.contents}}]),p}();t.default=u},"./src/icons.js":
/*!**********************!*\
                !*** ./src/icons.js ***!
                \**********************/
/*! no static exports found */function(i,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(
/*! ./icon */
"./src/icon.js")),l=s(n(
/*! ../dist/icons.json */
"./dist/icons.json")),c=s(n(
/*! ./tags.json */
"./src/tags.json"));function s(h){return h&&h.__esModule?h:{default:h}}t.default=Object.keys(l.default).map(function(h){return new r.default(h,l.default[h],c.default[h])}).reduce(function(h,u){return h[u.name]=u,h},{})},"./src/index.js":
/*!**********************!*\
                !*** ./src/index.js ***!
                \**********************/
/*! no static exports found */function(i,t,n){"use strict";var r=s(n(
/*! ./icons */
"./src/icons.js")),l=s(n(
/*! ./to-svg */
"./src/to-svg.js")),c=s(n(
/*! ./replace */
"./src/replace.js"));function s(h){return h&&h.__esModule?h:{default:h}}i.exports={icons:r.default,toSvg:l.default,replace:c.default}},"./src/replace.js":
/*!************************!*\
                !*** ./src/replace.js ***!
                \************************/
/*! no static exports found */function(i,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(y){for(var p=1;p<arguments.length;p++){var f=arguments[p];for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&(y[m]=f[m])}return y},e=c(n(
/*! classnames/dedupe */
"./node_modules/classnames/dedupe.js")),a=c(n(
/*! ./icons */
"./src/icons.js"));function c(y){return y&&y.__esModule?y:{default:y}}t.default=function s(){var y=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(typeof document>"u")throw new Error("`feather.replace()` only works in a browser environment.");var p=document.querySelectorAll("[data-feather]");Array.from(p).forEach(function(f){return function h(y){var p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},f=function u(y){return Array.from(y.attributes).reduce(function(p,f){return p[f.name]=f.value,p},{})}(y),m=f["data-feather"];delete f["data-feather"];var x=a.default[m].toSvg(o({},p,f,{class:(0,e.default)(p.class,f.class)})),M=(new DOMParser).parseFromString(x,"image/svg+xml").querySelector("svg");y.parentNode.replaceChild(M,y)}(f,y)})}},"./src/tags.json":
/*!***********************!*\
                !*** ./src/tags.json ***!
                \***********************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, chevron-down, chevron-up, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-buoy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */function(i){i.exports={activity:["pulse","health","action","motion"],airplay:["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],anchor:[],archive:["index","box"],"at-sign":["mention","at","email","message"],award:["achievement","badge"],aperture:["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],battery:["power","electricity"],"battery-charging":["power","electricity"],bell:["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],bluetooth:["wireless"],"book-open":["read","library"],book:["read","dictionary","booklet","magazine","library"],bookmark:["read","clip","marker","tag"],box:["cube"],briefcase:["work","bag","baggage","folder"],calendar:["date"],camera:["photo"],cast:["chromecast","airplay"],"chevron-down":["expand"],"chevron-up":["collapse"],circle:["off","zero","record"],clipboard:["copy"],clock:["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],cloud:["weather"],codepen:["logo"],codesandbox:["logo"],code:["source","programming"],coffee:["drink","cup","mug","tea","cafe","hot","beverage"],columns:["layout"],command:["keyboard","cmd","terminal","prompt"],compass:["navigation","safari","travel","direction"],copy:["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],cpu:["processor","technology"],"credit-card":["purchase","payment","cc"],crop:["photo","image"],crosshair:["aim","target"],database:["storage","memory"],delete:["remove"],disc:["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],droplet:["water"],edit:["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],eye:["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],facebook:["logo","social"],"fast-forward":["music"],figma:["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],film:["movie","video"],filter:["funnel","hopper"],flag:["report"],"folder-minus":["directory"],"folder-plus":["directory"],folder:["directory"],framer:["logo","design","tool"],frown:["emoji","face","bad","sad","emotion"],gift:["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],github:["logo","version control"],gitlab:["logo","version control"],globe:["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],hash:["hashtag","number","pound"],headphones:["music","audio","sound"],heart:["like","love","emotion"],"help-circle":["question mark"],hexagon:["shape","node.js","logo"],home:["house","living"],image:["picture"],inbox:["email"],instagram:["logo","camera"],key:["password","login","authentication","secure"],layers:["stack"],layout:["window","webpage"],"life-buoy":["help","life ring","support"],link:["chain","url"],"link-2":["chain","url"],linkedin:["logo","social media"],list:["options"],lock:["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],mail:["email","message"],"map-pin":["location","navigation","travel","marker"],map:["location","navigation","travel"],maximize:["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],meh:["emoji","face","neutral","emotion"],menu:["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],mic:["record","sound","listen"],minimize:["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],minus:["subtract"],monitor:["tv","screen","display"],moon:["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],move:["arrows"],music:["note"],navigation:["location","travel"],"navigation-2":["location","travel"],octagon:["stop"],package:["box","container"],paperclip:["attachment"],pause:["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],percent:["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],phone:["call"],play:["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],plus:["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],pocket:["logo","save"],power:["on","off"],printer:["fax","office","device"],radio:["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],repeat:["loop","arrows"],rewind:["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],rss:["feed","subscribe"],save:["floppy disk"],scissors:["cut"],search:["find","magnifier","magnifying glass"],send:["message","mail","email","paper airplane","paper aeroplane"],settings:["cog","edit","gear","preferences"],"share-2":["network","connections"],shield:["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],shuffle:["music"],"skip-back":["music"],"skip-forward":["music"],slack:["logo"],slash:["ban","no"],sliders:["settings","controls"],smartphone:["cellphone","device"],smile:["emoji","face","happy","good","emotion"],speaker:["audio","music"],star:["bookmark","favorite","like"],"stop-circle":["media","music"],sun:["brightness","weather","light"],sunrise:["weather","time","morning","day"],sunset:["weather","time","evening","night"],tablet:["device"],tag:["label"],target:["logo","bullseye"],terminal:["code","command line","prompt"],thermometer:["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],tool:["settings","spanner"],trash:["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],triangle:["delta"],truck:["delivery","van","shipping","transport","lorry"],tv:["television","stream"],twitch:["logo"],twitter:["logo","social"],type:["text"],umbrella:["rain","weather"],unlock:["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],user:["person","account"],users:["group"],"video-off":["camera","movie","film"],video:["camera","movie","film"],voicemail:["phone"],volume:["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],watch:["clock","time"],"wifi-off":["disabled"],wifi:["connection","signal","wireless"],wind:["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],x:["cancel","close","delete","remove","times","clear"],youtube:["logo","video","play"],"zap-off":["flash","camera","lightning"],zap:["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]}},"./src/to-svg.js":
/*!***********************!*\
                !*** ./src/to-svg.js ***!
                \***********************/
/*! no static exports found */function(i,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function e(a){return a&&a.__esModule?a:{default:a}}(n(
/*! ./icons */
"./src/icons.js"));t.default=function l(a){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),!a)throw new Error("The required `key` (icon name) parameter is missing.");if(!r.default[a])throw new Error("No icon matching '"+a+"'. See the complete list of icons at https://feathericons.com");return r.default[a].toSvg(c)}},0:
/*!**************************************************!*\
                !*** multi core-js/es/array/from ./src/index.js ***!
                \**************************************************/
/*! no static exports found */function(i,t,n){n(
/*! core-js/es/array/from */
"./node_modules/core-js/es/array/from.js"),i.exports=n(
/*! /home/runner/work/feather/feather/src/index.js */
"./src/index.js")}})}}]);