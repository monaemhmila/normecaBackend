"use strict";(self.webpackChunkNORMECA_angular=self.webpackChunkNORMECA_angular||[]).push([[2515],{2515:(E,h,r)=>{r.r(h),r.d(h,{PaymentsModule:()=>T});var c=r(177),m=r(1188),u=r(4069),d=r(1413),y=r(4527),t=r(7705),_=r(7738),g=r(2042);const k=function(n,l){return{"bg-success-light":n,"bg-warning-light":l}};function P(n,l){if(1&n&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td")(8,"span",28),t.EFF(9),t.k0s()(),t.j41(10,"td"),t.EFF(11),t.k0s(),t.j41(12,"td")(13,"div",29)(14,"div",30)(15,"a",31),t.nrm(16,"i",32),t.k0s()()()()()),2&n){const e=l.$implicit;t.R7$(2),t.JRh(e.name),t.R7$(2),t.SpI(" ",e.type," "),t.R7$(2),t.JRh(e.price),t.R7$(2),t.Y8G("ngClass",t.l_i(6,k,"Completed"===e.status,"Pending"===e.status)),t.R7$(1),t.JRh(e.status),t.R7$(2),t.JRh(e.date)}}function v(n,l){if(1&n){const e=t.RV6();t.j41(0,"li",34),t.bIt("click",function(){t.eBV(e);const a=t.XpG(2);return t.Njj(a.moveToPage(a.currentPage-2))})("keydown.enter",function(){t.eBV(e);const a=t.XpG(2);return t.Njj(a.moveToPage(a.currentPage-2))}),t.j41(1,"a",35),t.EFF(2," ... "),t.k0s()()}if(2&n){const e=t.XpG(2);t.Y8G("hidden",1===e.currentPage)}}function b(n,l){if(1&n){const e=t.RV6();t.j41(0,"li",34),t.bIt("click",function(){t.eBV(e);const a=t.XpG(2);return t.Njj(a.moveToPage(a.currentPage+2))})("keydown.enter",function(){t.eBV(e);const a=t.XpG(2);return t.Njj(a.moveToPage(a.currentPage+2))}),t.j41(1,"a",35),t.EFF(2," ... "),t.k0s()()}if(2&n){const e=t.XpG(2);t.Y8G("hidden",e.currentPage>=e.pageNumberArray[e.pageNumberArray.length-2]||e.totalData<e.serialNumberArray[e.serialNumberArray.length-1])}}function f(n,l){if(1&n){const e=t.RV6();t.qex(0),t.j41(1,"li",25)(2,"a",27),t.bIt("click",function(){const s=t.eBV(e).$implicit,o=t.XpG();return t.Njj(o.moveToPage(s))})("keydown.enter",function(){const s=t.eBV(e).$implicit,o=t.XpG();return t.Njj(o.moveToPage(s))}),t.EFF(3),t.k0s()(),t.DNE(4,v,3,1,"li",33),t.DNE(5,b,3,1,"li",33),t.bVm()}if(2&n){const e=l.$implicit,i=l.index,a=t.XpG();t.R7$(1),t.AVh("active",e===a.currentPage),t.Y8G("ngClass",a.pageNumberArray[a.currentPage-2]>e&&1!==e&&a.pageNumberArray.length>6||a.pageNumberArray[a.currentPage]<e&&1!==e&&a.pageNumberArray.length>6&&a.pageNumberArray.length!==e?"hide-page-no":"show-page-no"),t.R7$(2),t.SpI(" ",e," "),t.R7$(1),t.Y8G("ngIf",0===i&&a.pageNumberArray.length>6&&a.currentPage>2),t.R7$(1),t.Y8G("ngIf",i===a.pageNumberArray.length-2&&a.pageNumberArray.length>6)}}const p=function(n){return{disabled:n}},F=[{path:"",component:(()=>{class n{constructor(e){this.data=e,this.dtTrigger=new d.B,this.routes=y.J,this.payment=[],this.showFilter=!1,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0}ngOnInit(){this.getTableData()}getTableData(){this.payment=[],this.serialNumberArray=[],this.data.getEmployerPayment().subscribe(e=>{this.totalData=e.totalData,e.data.map((i,a)=>{const s=a+1;a>=this.skip&&s<=this.limit&&(this.payment.push(i),this.serialNumberArray.push(s))}),this.dataSource=new u.I6(this.payment),this.calculateTotalPages(this.totalData,this.pageSize)})}sortData(e){const i=this.payment.slice();this.payment=e.active&&""!==e.direction?i.sort((a,s)=>(a[e.active]<s[e.active]?-1:1)*("asc"===e.direction?1:-1)):i}getMoreData(e){"next"==e?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==e&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(e){this.currentPage=e,this.skip=this.pageSelection[e-1].skip,this.limit=this.pageSelection[e-1].limit,e>this.currentPage?this.pageIndex=e-1:e<this.currentPage&&(this.pageIndex=e+1),this.getTableData()}PageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(e,i){this.pageNumberArray=[],this.totalPages=e/i,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(let a=1;a<=this.totalPages;a++){const s=i*a,o=s-i;this.pageNumberArray.push(a),this.pageSelection.push({skip:o,limit:s})}}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(_.L))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-payments"]],decls:55,vars:16,consts:[[1,"user-tabs","mb-4"],[1,"nav","nav-tabs","nav-tabs-bottom","nav-justified"],[1,"nav-item"],[1,"nav-link",3,"routerLink"],[1,"nav-link","active",3,"routerLink"],[1,"my-projects-view"],[1,"row"],[1,"col-lg-12"],[1,"title-head","d-flex","justify-content-between","align-items-center","mb-4"],[1,"mb-0"],[1,"table-responsive","table-box","manage-projects-table"],["matSort","",1,"table","table-center","table-hover","datatable","no-sort",3,"matSortChange"],[1,"thead-pink"],["mat-sort-header","image"],["mat-sort-header","name"],["mat-sort-header","type"],["mat-sort-header","status"],["mat-sort-header","date"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click","keydown.enter"],["href","javascript:void(0);",1,"page-link",3,"click","keydown.enter"],[1,"badge","badge-pill",3,"ngClass"],[1,"action-table-data"],[1,"edit-delete-action","m-0"],["href","javascript:void(0);",1,"download-icon"],[1,"feather","icon-download"],["class","page-item","tabindex","0",3,"hidden","click","keydown.enter",4,"ngIf"],["tabindex","0",1,"page-item",3,"hidden","click","keydown.enter"],["href","javascript:void(0);",1,"page-link"]],template:function(i,a){1&i&&(t.j41(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),t.EFF(4,"Overview & Discussions"),t.k0s()(),t.j41(5,"li",2)(6,"a",3),t.EFF(7,"Milestones"),t.k0s()(),t.j41(8,"li",2)(9,"a",3),t.EFF(10,"Tasks"),t.k0s()(),t.j41(11,"li",2)(12,"a",3),t.EFF(13,"Files"),t.k0s()(),t.j41(14,"li",2)(15,"a",4),t.EFF(16,"Payments"),t.k0s()()()(),t.j41(17,"div",5)(18,"div",6)(19,"div",7)(20,"div",8)(21,"h4",9),t.EFF(22,"Payments"),t.k0s()(),t.j41(23,"div",10)(24,"table",11),t.bIt("matSortChange",function(o){return a.sortData(o)}),t.j41(25,"thead",12)(26,"tr")(27,"th",13),t.EFF(28,"Name"),t.k0s(),t.j41(29,"th",14),t.EFF(30,"Type of Payment"),t.k0s(),t.j41(31,"th",15),t.EFF(32,"Budget"),t.k0s(),t.j41(33,"th",16),t.EFF(34,"Status"),t.k0s(),t.j41(35,"th",17),t.EFF(36,"Paid On"),t.k0s(),t.j41(37,"th",17),t.EFF(38,"Invoice"),t.k0s()()(),t.j41(39,"tbody"),t.DNE(40,P,17,9,"tr",18),t.k0s()()(),t.j41(41,"div",19)(42,"div",20)(43,"div",21),t.EFF(44),t.k0s()(),t.j41(45,"div",22)(46,"div",23)(47,"ul",24)(48,"li",25)(49,"a",26),t.bIt("click",function(){return a.getMoreData("previous")})("keydown.enter",function(){return a.getMoreData("previous")}),t.EFF(50,"Previous"),t.k0s()(),t.DNE(51,f,6,6,"ng-container",18),t.j41(52,"li",25)(53,"a",27),t.bIt("click",function(){return a.getMoreData("next")})("keydown.enter",function(){return a.getMoreData("next")}),t.EFF(54,"Next "),t.k0s()()()()()()()()()),2&i&&(t.R7$(3),t.Y8G("routerLink",a.routes.milestoneoverview),t.R7$(3),t.Y8G("routerLink",a.routes.employee_milestone),t.R7$(3),t.Y8G("routerLink",a.routes.milestonetask),t.R7$(3),t.Y8G("routerLink",a.routes.milestonefiles),t.R7$(3),t.Y8G("routerLink",a.routes.milestonepayment),t.R7$(25),t.Y8G("ngForOf",a.payment),t.R7$(4),t.E5c(" Showing ",a.serialNumberArray[0]," to ",a.serialNumberArray[a.serialNumberArray.length-1]," of ",a.totalData," entries "),t.R7$(4),t.Y8G("ngClass",t.eq3(12,p,1===a.currentPage)),t.R7$(3),t.Y8G("ngForOf",a.pageNumberArray),t.R7$(1),t.Y8G("ngClass",t.eq3(14,p,a.currentPage===a.pageNumberArray[a.pageNumberArray.length-1]||0===a.payment.length)))},dependencies:[c.YU,c.Sq,c.bT,m.Wk,g.B4,g.aE]})}}return n})()}];let j=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[m.iI.forChild(F),m.iI]})}}return n})();var C=r(9688);let T=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[c.MD,j,C.G]})}}return n})()}}]);