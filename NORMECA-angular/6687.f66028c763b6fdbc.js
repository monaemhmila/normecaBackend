"use strict";(self.webpackChunkNORMECA_angular=self.webpackChunkNORMECA_angular||[]).push([[6687],{6687:(E,h,s)=>{s.r(h),s.d(h,{PaymentProjectModule:()=>C});var c=s(177),m=s(1188),u=s(4069),d=s(1413),y=s(4527),t=s(7705),P=s(7738),p=s(2042);function _(n,l){if(1&n&&(t.j41(0,"tr")(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td")(8,"span",29),t.EFF(9,"Completed"),t.k0s()(),t.j41(10,"td"),t.EFF(11),t.k0s(),t.j41(12,"td")(13,"div",30)(14,"div",31)(15,"a",32),t.nrm(16,"i",33),t.k0s()()()()()),2&n){const e=l.$implicit;t.R7$(2),t.SpI("",e.name," "),t.R7$(2),t.SpI(" ",e.type," "),t.R7$(2),t.JRh(e.price),t.R7$(5),t.JRh(e.date)}}function j(n,l){if(1&n){const e=t.RV6();t.j41(0,"li",35),t.bIt("click",function(){t.eBV(e);const a=t.XpG(2);return t.Njj(a.moveToPage(a.currentPage-2))})("keydown.enter",function(){t.eBV(e);const a=t.XpG(2);return t.Njj(a.moveToPage(a.currentPage-2))}),t.j41(1,"a",36),t.EFF(2," ... "),t.k0s()()}if(2&n){const e=t.XpG(2);t.Y8G("hidden",1===e.currentPage)}}function k(n,l){if(1&n){const e=t.RV6();t.j41(0,"li",35),t.bIt("click",function(){t.eBV(e);const a=t.XpG(2);return t.Njj(a.moveToPage(a.currentPage+2))})("keydown.enter",function(){t.eBV(e);const a=t.XpG(2);return t.Njj(a.moveToPage(a.currentPage+2))}),t.j41(1,"a",36),t.EFF(2," ... "),t.k0s()()}if(2&n){const e=t.XpG(2);t.Y8G("hidden",e.currentPage>=e.pageNumberArray[e.pageNumberArray.length-2]||e.totalData<e.serialNumberArray[e.serialNumberArray.length-1])}}function v(n,l){if(1&n){const e=t.RV6();t.qex(0),t.j41(1,"li",26)(2,"a",28),t.bIt("click",function(){const r=t.eBV(e).$implicit,o=t.XpG();return t.Njj(o.moveToPage(r))})("keydown.enter",function(){const r=t.eBV(e).$implicit,o=t.XpG();return t.Njj(o.moveToPage(r))}),t.EFF(3),t.k0s()(),t.DNE(4,j,3,1,"li",34),t.DNE(5,k,3,1,"li",34),t.bVm()}if(2&n){const e=l.$implicit,i=l.index,a=t.XpG();t.R7$(1),t.AVh("active",e===a.currentPage),t.Y8G("ngClass",a.pageNumberArray[a.currentPage-2]>e&&1!==e&&a.pageNumberArray.length>6||a.pageNumberArray[a.currentPage]<e&&1!==e&&a.pageNumberArray.length>6&&a.pageNumberArray.length!==e?"hide-page-no":"show-page-no"),t.R7$(2),t.SpI(" ",e," "),t.R7$(1),t.Y8G("ngIf",0===i&&a.pageNumberArray.length>6&&a.currentPage>2),t.R7$(1),t.Y8G("ngIf",i===a.pageNumberArray.length-2&&a.pageNumberArray.length>6)}}const g=function(n){return{disabled:n}},b=[{path:"",component:(()=>{class n{constructor(e){this.data=e,this.routes=y.J,this.dtTrigger=new d.B,this.payment=[],this.url="milestones",this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0}ngOnInit(){this.getTableData()}getTableData(){this.payment=[],this.serialNumberArray=[],this.data.getEmployerPayment().subscribe(e=>{this.totalData=e.totalData,e.data.map((i,a)=>{const r=a+1;a>=this.skip&&r<=this.limit&&(this.payment.push(i),this.serialNumberArray.push(r))}),this.dataSource=new u.I6(this.payment),this.calculateTotalPages(this.totalData,this.pageSize)})}sortData(e){const i=this.payment.slice();this.payment=e.active&&""!==e.direction?i.sort((a,r)=>(a[e.active]<r[e.active]?-1:1)*("asc"===e.direction?1:-1)):i}getMoreData(e){"next"==e?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==e&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(e){this.currentPage=e,this.skip=this.pageSelection[e-1].skip,this.limit=this.pageSelection[e-1].limit,e>this.currentPage?this.pageIndex=e-1:e<this.currentPage&&(this.pageIndex=e+1),this.getTableData()}PageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(e,i){this.pageNumberArray=[],this.totalPages=e/i,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(let a=1;a<=this.totalPages;a++){const r=i*a,o=r-i;this.pageNumberArray.push(a),this.pageSelection.push({skip:o,limit:r})}}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(P.L))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-payment-project"]],decls:58,vars:16,consts:[[1,"page-title"],[1,"user-tabs","mb-4"],[1,"nav","nav-tabs","nav-tabs-bottom","nav-justified"],[1,"nav-item"],[1,"nav-link",3,"routerLink"],[1,"nav-link","active",3,"routerLink"],[1,"my-projects-view"],[1,"row"],[1,"col-lg-12"],[1,"title-head","d-flex","justify-content-between","align-items-center","mb-4"],[1,"mb-0"],[1,"table-responsive","table-box","manage-projects-table"],["matSort","",1,"table","table-center","table-hover","datatable","no-sort",3,"matSortChange"],[1,"thead-pink"],["mat-sort-header","image"],["mat-sort-header","name"],["mat-sort-header","type"],["mat-sort-header","status"],["mat-sort-header","date"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click","keydown.enter"],["href","javascript:void(0);",1,"page-link",3,"click","keydown.enter"],[1,"badge","badge-pill","bg-success-light"],[1,"action-table-data"],[1,"edit-delete-action","m-0"],["href","javascript:void(0);",1,"download-icon"],[1,"feather","icon-download"],["class","page-item","tabindex","0",3,"hidden","click","keydown.enter",4,"ngIf"],["tabindex","0",1,"page-item",3,"hidden","click","keydown.enter"],["href","javascript:void(0);",1,"page-link"]],template:function(i,a){1&i&&(t.j41(0,"div",0)(1,"h3"),t.EFF(2,"Manage Projects"),t.k0s()(),t.j41(3,"nav",1)(4,"ul",2)(5,"li",3)(6,"a",4),t.EFF(7,"Overview & Discussions"),t.k0s()(),t.j41(8,"li",3)(9,"a",4),t.EFF(10,"Milestones"),t.k0s()(),t.j41(11,"li",3)(12,"a",4),t.EFF(13,"Tasks"),t.k0s()(),t.j41(14,"li",3)(15,"a",4),t.EFF(16,"Files"),t.k0s()(),t.j41(17,"li",3)(18,"a",5),t.EFF(19,"Payments"),t.k0s()()()(),t.j41(20,"div",6)(21,"div",7)(22,"div",8)(23,"div",9)(24,"h4",10),t.EFF(25,"Payments"),t.k0s()(),t.j41(26,"div",11)(27,"table",12),t.bIt("matSortChange",function(o){return a.sortData(o)}),t.j41(28,"thead",13)(29,"tr")(30,"th",14),t.EFF(31,"Name"),t.k0s(),t.j41(32,"th",15),t.EFF(33,"Type of Payment"),t.k0s(),t.j41(34,"th",16),t.EFF(35,"Budget"),t.k0s(),t.j41(36,"th",17),t.EFF(37,"Status"),t.k0s(),t.j41(38,"th",18),t.EFF(39,"Paid On"),t.k0s(),t.j41(40,"th",18),t.EFF(41,"Invoice"),t.k0s()()(),t.j41(42,"tbody"),t.DNE(43,_,17,4,"tr",19),t.k0s()()(),t.j41(44,"div",20)(45,"div",21)(46,"div",22),t.EFF(47),t.k0s()(),t.j41(48,"div",23)(49,"div",24)(50,"ul",25)(51,"li",26)(52,"a",27),t.bIt("click",function(){return a.getMoreData("previous")})("keydown.enter",function(){return a.getMoreData("previous")}),t.EFF(53,"Previous"),t.k0s()(),t.DNE(54,v,6,6,"ng-container",19),t.j41(55,"li",26)(56,"a",28),t.bIt("click",function(){return a.getMoreData("next")})("keydown.enter",function(){return a.getMoreData("next")}),t.EFF(57,"Next "),t.k0s()()()()()()()()()),2&i&&(t.R7$(6),t.Y8G("routerLink",a.routes.completedviewproject),t.R7$(3),t.Y8G("routerLink",a.routes.projectmilestone),t.R7$(3),t.Y8G("routerLink",a.routes.projecttask),t.R7$(3),t.Y8G("routerLink",a.routes.milestonefiles),t.R7$(3),t.Y8G("routerLink",a.routes.paymentproject),t.R7$(25),t.Y8G("ngForOf",a.payment),t.R7$(4),t.E5c(" Showing ",a.serialNumberArray[0]," to ",a.serialNumberArray[a.serialNumberArray.length-1]," of ",a.totalData," entries "),t.R7$(4),t.Y8G("ngClass",t.eq3(12,g,1===a.currentPage)),t.R7$(3),t.Y8G("ngForOf",a.pageNumberArray),t.R7$(1),t.Y8G("ngClass",t.eq3(14,g,a.currentPage===a.pageNumberArray[a.pageNumberArray.length-1]||0===a.payment.length)))},dependencies:[c.YU,c.Sq,c.bT,m.Wk,p.B4,p.aE]})}}return n})()}];let f=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[m.iI.forChild(b),m.iI]})}}return n})();var F=s(9688);let C=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[c.MD,f,F.G]})}}return n})()}}]);