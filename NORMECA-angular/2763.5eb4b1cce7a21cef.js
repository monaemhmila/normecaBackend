"use strict";(self.webpackChunkNORMECA_angular=self.webpackChunkNORMECA_angular||[]).push([[2763],{2763:(T,h,s)=>{s.r(h),s.d(h,{ProjectsModule:()=>w});var p=s(177),d=s(1188),j=s(416),t=s(7705),F=s(7738),g=s(4626),c=s(9417),m=s(2042);const k=["chart"];function _(n,l){if(1&n&&(t.j41(0,"td")(1,"button",80),t.EFF(2),t.k0s()()),2&n){const e=t.XpG().$implicit;t.R7$(2),t.JRh(e.status)}}function f(n,l){if(1&n&&(t.j41(0,"td")(1,"button",80),t.EFF(2),t.k0s()()),2&n){const e=t.XpG().$implicit;t.R7$(2),t.JRh(e.status)}}function b(n,l){if(1&n&&(t.j41(0,"td")(1,"button",81),t.EFF(2),t.k0s()()),2&n){const e=t.XpG().$implicit;t.R7$(2),t.JRh(e.status)}}function v(n,l){if(1&n&&(t.j41(0,"tr")(1,"td")(2,"div",50),t.nrm(3,"input",71)(4,"label",52),t.k0s()(),t.j41(5,"td")(6,"a",72),t.EFF(7),t.k0s()(),t.j41(8,"td")(9,"a",73),t.EFF(10),t.k0s()(),t.j41(11,"td"),t.EFF(12),t.k0s(),t.j41(13,"td"),t.EFF(14),t.k0s(),t.j41(15,"td"),t.EFF(16),t.k0s(),t.j41(17,"td"),t.EFF(18),t.k0s(),t.DNE(19,_,3,1,"td",74),t.DNE(20,f,3,1,"td",74),t.DNE(21,b,3,1,"td",74),t.j41(22,"td",75)(23,"a",76),t.nrm(24,"i",77),t.k0s(),t.j41(25,"a",78),t.nrm(26,"i",79),t.k0s()()()),2&n){const e=l.$implicit;t.R7$(7),t.JRh(e.name),t.R7$(3),t.JRh(e.project),t.R7$(2),t.JRh(e.startdate),t.R7$(2),t.JRh(e.enddate),t.R7$(2),t.JRh(e.freelancer),t.R7$(2),t.JRh(e.milestone),t.R7$(1),t.Y8G("ngIf","Completed"===e.status),t.R7$(1),t.Y8G("ngIf","Inprogress"===e.status),t.R7$(1),t.Y8G("ngIf","Incomplete"===e.status)}}function E(n,l){if(1&n){const e=t.RV6();t.j41(0,"li",83),t.bIt("click",function(){t.eBV(e);const o=t.XpG(2);return t.Njj(o.moveToPage(o.currentPage-2))})("keydown.enter",function(){t.eBV(e);const o=t.XpG(2);return t.Njj(o.moveToPage(o.currentPage-2))}),t.j41(1,"a",84),t.EFF(2," ... "),t.k0s()()}if(2&n){const e=t.XpG(2);t.Y8G("hidden",1===e.currentPage)}}function P(n,l){if(1&n){const e=t.RV6();t.j41(0,"li",83),t.bIt("click",function(){t.eBV(e);const o=t.XpG(2);return t.Njj(o.moveToPage(o.currentPage+2))})("keydown.enter",function(){t.eBV(e);const o=t.XpG(2);return t.Njj(o.moveToPage(o.currentPage+2))}),t.j41(1,"a",84),t.EFF(2," ... "),t.k0s()()}if(2&n){const e=t.XpG(2);t.Y8G("hidden",e.currentPage>=e.pageNumberArray[e.pageNumberArray.length-2]||e.totalData<e.serialNumberArray[e.serialNumberArray.length-1])}}function y(n,l){if(1&n){const e=t.RV6();t.qex(0),t.j41(1,"li",68)(2,"a",70),t.bIt("click",function(){const a=t.eBV(e).$implicit,r=t.XpG();return t.Njj(r.moveToPage(a))})("keydown.enter",function(){const a=t.eBV(e).$implicit,r=t.XpG();return t.Njj(r.moveToPage(a))}),t.EFF(3),t.k0s()(),t.DNE(4,E,3,1,"li",82),t.DNE(5,P,3,1,"li",82),t.bVm()}if(2&n){const e=l.$implicit,i=l.index,o=t.XpG();t.R7$(1),t.AVh("active",e===o.currentPage),t.Y8G("ngClass",o.pageNumberArray[o.currentPage-2]>e&&1!==e&&o.pageNumberArray.length>6||o.pageNumberArray[o.currentPage]<e&&1!==e&&o.pageNumberArray.length>6&&o.pageNumberArray.length!==e?"hide-page-no":"show-page-no"),t.R7$(2),t.SpI(" ",e," "),t.R7$(1),t.Y8G("ngIf",0===i&&o.pageNumberArray.length>6&&o.currentPage>2),t.R7$(1),t.Y8G("ngIf",i===o.pageNumberArray.length-2&&o.pageNumberArray.length>6)}}const u=function(n){return{disabled:n}},C=[{path:"",component:(()=>{class n{constructor(e){this.data=e,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0,this.chartOptions={series:[{name:"Maximum",data:[11,8,15,18,19,17,10,8,15,5],color:"#F38345"}],chart:{type:"bar",height:350,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"20px",endingShape:"rounded"}},dataLabels:{enabled:!1},grid:{show:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{axisTicks:{show:!0,color:"#000000"},axisBorder:{show:!0,color:"#000000"},categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{axisTicks:{show:!0,color:"#000000"},axisBorder:{show:!0,color:"#000000"},min:0,max:20},fill:{opacity:1},tooltip:{y:{formatter:function(i){return i}}}}}ngOnInit(){this.getlstProj()}getlstProj(){this.lstProj=[],this.serialNumberArray=[],this.data.adminReports().subscribe(e=>{this.totalData=e.totalData,e.data.map((i,o)=>{const a=o+1;o>=this.skip&&a<=this.limit&&(i.id=a,this.lstProj.push(i),this.serialNumberArray.push(a))}),this.dataSource=new j.Nf(this.lstProj),this.calculateTotalPages(this.totalData,this.pageSize)})}sortData(e){const i=this.lstProj.slice();this.lstProj=e.active&&""!==e.direction?i.sort((o,a)=>(o[e.active]<a[e.active]?-1:1)*("asc"===e.direction?1:-1)):i}searchData(e){this.dataSource.filter=e.trim().toLowerCase(),this.lstProj=this.dataSource.filteredData}getMoreData(e){"next"==e?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getlstProj()):"previous"==e&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getlstProj())}moveToPage(e){this.currentPage=e,this.skip=this.pageSelection[e-1].skip,this.limit=this.pageSelection[e-1].limit,e>this.currentPage?this.pageIndex=e-1:e<this.currentPage&&(this.pageIndex=e+1),this.getlstProj()}changePageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getlstProj()}calculateTotalPages(e,i){this.pageNumberArray=[],this.totalPages=e/i,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(let o=1;o<=this.totalPages;o++){const a=i*o,r=a-i;this.pageNumberArray.push(o),this.pageSelection.push({skip:r,limit:a})}}static{this.\u0275fac=function(i){return new(i||n)(t.rXU(F.L))}}static{this.\u0275cmp=t.VBU({type:n,selectors:[["app-projects"]],viewQuery:function(i,o){if(1&i&&t.GBs(k,5),2&i){let a;t.mGM(a=t.lsd())&&(o.chart=a.first)}},decls:193,vars:28,consts:[[1,"page-wrapper"],[1,"content","report-box","container-fluid"],[1,"page-header","page-border"],[1,"row","align-items-center"],[1,"col-lg-6"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"col-lg-6","report-btns"],[1,"project-report"],[1,"active-project"],[1,"project-chart"],[1,"row"],[1,"col-xl-12","d-flex"],[1,"card","flex-fill"],[1,"card-header"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],[1,"dropdown"],["type","button","id","dropdownMenuButton","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-white","btn-sm","dropdown-toggle"],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu"],["href","javascript:void(0);",1,"dropdown-item"],[1,"card-body"],["id","chart-bar",1,"earing-chart"],[3,"series","chart","dataLabels","plotOptions","yaxis","legend","fill","stroke","tooltip","xaxis"],[1,"project-download"],[1,"title-group","d-flex"],[1,"down-load"],["href","javascript:void()",1,"btn-primary"],[1,"fas","fa-cloud-download-alt"],[1,"select-group"],[1,"col-lg-2","col-md-6"],[1,"form-select"],[1,"card"],[1,"table-responsive"],[1,"table_header"],[1,"dataTables_length"],["for","show"],[1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],["value","10"],["value","25"],["value","50"],["value","100"],["for","entries"],[1,"dataTables_filter"],["for","search"],[1,"table-scroll"],["matSort","",1,"table","table-center","table-hover","mb-0","datatable",3,"matSortChange"],[1,"form-check","custom-checkbox"],["type","checkbox","id","select-all",1,"form-check-input"],["for","customCheck1",1,"form-check-label"],["mat-sort-header","name"],["mat-sort-header","project"],["mat-sort-header","startdate"],["mat-sort-header","enddate"],["mat-sort-header","freelancer"],["mat-sort-header","milestone"],["mat-sort-header","status"],[1,"text-end"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click","keydown.enter"],["href","javascript:void(0);",1,"page-link",3,"click","keydown.enter"],["type","checkbox","id","customCheck1",1,"form-check-input"],["href","javascript:",1,"active-name"],["href","javascript:"],[4,"ngIf"],[1,"text-end","subscription-end"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#edit-category",1,"btn","btn-sm","btn-secondary","me-2"],[1,"far","fa-edit"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#delete_category",1,"btn","btn-sm","btn-danger"],[1,"far","fa-trash-alt"],[1,"btn","active-btn"],[1,"btn","inactive-btn"],["class","page-item","tabindex","0",3,"hidden","click","keydown.enter",4,"ngIf"],["tabindex","0",1,"page-item",3,"hidden","click","keydown.enter"],["href","javascript:void(0);",1,"page-link"]],template:function(i,o){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),t.EFF(6,"Reports"),t.k0s(),t.j41(7,"ul",6)(8,"li",7)(9,"a",8),t.EFF(10,"Home"),t.k0s()(),t.j41(11,"li",9),t.EFF(12,"Reports"),t.k0s()()(),t.j41(13,"div",10)(14,"ul",11)(15,"li",12)(16,"a",8),t.EFF(17,"Projects"),t.k0s()(),t.j41(18,"li")(19,"a",8),t.EFF(20,"Bidding"),t.k0s()(),t.j41(21,"li")(22,"a",8),t.EFF(23,"Invoices"),t.k0s()(),t.j41(24,"li")(25,"a",8),t.EFF(26,"Earnings"),t.k0s()()()()()(),t.j41(27,"div",13)(28,"div",14)(29,"div",15)(30,"div",16)(31,"div",17)(32,"div",18)(33,"h5",19),t.EFF(34,"Projects Report"),t.k0s(),t.j41(35,"div",20)(36,"button",21),t.EFF(37," 2022 "),t.k0s(),t.j41(38,"ul",22)(39,"li")(40,"a",23),t.EFF(41,"2021"),t.k0s()(),t.j41(42,"li")(43,"a",23),t.EFF(44,"2022"),t.k0s()(),t.j41(45,"li")(46,"a",23),t.EFF(47,"2020"),t.k0s()()()()()(),t.j41(48,"div",24)(49,"div",25),t.nrm(50,"apx-chart",26),t.k0s()()()()()(),t.j41(51,"div",27)(52,"div",28)(53,"h2"),t.EFF(54,"Projects"),t.k0s(),t.j41(55,"div",29)(56,"a",30),t.nrm(57,"i",31),t.EFF(58,"Download"),t.k0s()()(),t.j41(59,"div",32)(60,"div",14)(61,"div",33)(62,"select",34)(63,"option"),t.EFF(64," Name"),t.k0s(),t.j41(65,"option"),t.EFF(66,"Option 1"),t.k0s(),t.j41(67,"option"),t.EFF(68,"Option 2"),t.k0s(),t.j41(69,"option"),t.EFF(70,"Option 3"),t.k0s(),t.j41(71,"option"),t.EFF(72,"Option 4"),t.k0s(),t.j41(73,"option"),t.EFF(74,"Option 5"),t.k0s()()(),t.j41(75,"div",33)(76,"select",34)(77,"option"),t.EFF(78," Project name"),t.k0s(),t.j41(79,"option"),t.EFF(80,"Option 1"),t.k0s(),t.j41(81,"option"),t.EFF(82,"Option 2"),t.k0s(),t.j41(83,"option"),t.EFF(84,"Option 3"),t.k0s(),t.j41(85,"option"),t.EFF(86,"Option 4"),t.k0s(),t.j41(87,"option"),t.EFF(88,"Option 5"),t.k0s()()(),t.j41(89,"div",33)(90,"select",34)(91,"option"),t.EFF(92," Date"),t.k0s(),t.j41(93,"option"),t.EFF(94,"Option 1"),t.k0s(),t.j41(95,"option"),t.EFF(96,"Option 2"),t.k0s(),t.j41(97,"option"),t.EFF(98,"Option 3"),t.k0s(),t.j41(99,"option"),t.EFF(100,"Option 4"),t.k0s(),t.j41(101,"option"),t.EFF(102,"Option 5"),t.k0s()()(),t.j41(103,"div",33)(104,"select",34)(105,"option"),t.EFF(106," Freelancer"),t.k0s(),t.j41(107,"option"),t.EFF(108,"Option 1"),t.k0s(),t.j41(109,"option"),t.EFF(110,"Option 2"),t.k0s(),t.j41(111,"option"),t.EFF(112,"Option 3"),t.k0s(),t.j41(113,"option"),t.EFF(114,"Option 4"),t.k0s(),t.j41(115,"option"),t.EFF(116,"Option 5"),t.k0s()()(),t.j41(117,"div",33)(118,"select",34)(119,"option"),t.EFF(120," status"),t.k0s(),t.j41(121,"option"),t.EFF(122,"Option 1"),t.k0s(),t.j41(123,"option"),t.EFF(124,"Option 2"),t.k0s(),t.j41(125,"option"),t.EFF(126,"Option 3"),t.k0s(),t.j41(127,"option"),t.EFF(128,"Option 4"),t.k0s(),t.j41(129,"option"),t.EFF(130,"Option 5"),t.k0s()()()()()(),t.j41(131,"div",35)(132,"div",24)(133,"div",36)(134,"div",37)(135,"div",38)(136,"label",39),t.EFF(137," Show "),t.k0s(),t.j41(138,"select",40),t.bIt("ngModelChange",function(r){return o.pageSize=r})("ngModelChange",function(){return o.changePageSize()}),t.j41(139,"option",41),t.EFF(140,"10"),t.k0s(),t.j41(141,"option",42),t.EFF(142,"25"),t.k0s(),t.j41(143,"option",43),t.EFF(144,"50"),t.k0s(),t.j41(145,"option",44),t.EFF(146,"100"),t.k0s()(),t.j41(147,"label",45),t.EFF(148,"Entries"),t.k0s()(),t.j41(149,"div",46)(150,"label",47),t.EFF(151," Search: "),t.k0s(),t.j41(152,"input",40),t.bIt("ngModelChange",function(r){return o.searchDataValue=r})("ngModelChange",function(){return o.searchData(o.searchDataValue)}),t.k0s()()(),t.j41(153,"div",48)(154,"table",49),t.bIt("matSortChange",function(r){return o.sortData(r)}),t.j41(155,"thead")(156,"tr")(157,"th")(158,"div",50),t.nrm(159,"input",51)(160,"label",52),t.k0s()(),t.j41(161,"th",53),t.EFF(162,"Name"),t.k0s(),t.j41(163,"th",54),t.EFF(164,"Project Name"),t.k0s(),t.j41(165,"th",55),t.EFF(166,"Start Date"),t.k0s(),t.j41(167,"th",56),t.EFF(168,"End date"),t.k0s(),t.j41(169,"th",57),t.EFF(170,"Freelancer"),t.k0s(),t.j41(171,"th",58),t.EFF(172,"Milestones"),t.k0s(),t.j41(173,"th",59),t.EFF(174,"Status"),t.k0s(),t.j41(175,"th",60),t.EFF(176,"Actions"),t.k0s()()(),t.j41(177,"tbody"),t.DNE(178,v,27,9,"tr",61),t.k0s()()(),t.j41(179,"div",62)(180,"div",63)(181,"div",64),t.EFF(182),t.k0s()(),t.j41(183,"div",65)(184,"div",66)(185,"ul",67)(186,"li",68)(187,"a",69),t.bIt("click",function(){return o.getMoreData("previous")})("keydown.enter",function(){return o.getMoreData("previous")}),t.EFF(188,"Previous"),t.k0s()(),t.DNE(189,y,6,6,"ng-container",61),t.j41(190,"li",68)(191,"a",70),t.bIt("click",function(){return o.getMoreData("next")})("keydown.enter",function(){return o.getMoreData("next")}),t.EFF(192,"Next "),t.k0s()()()()()()()()()()()),2&i&&(t.R7$(9),t.Y8G("routerLink","/home"),t.R7$(7),t.Y8G("routerLink","/admin/reports/projects"),t.R7$(3),t.Y8G("routerLink","/admin/reports/bidding"),t.R7$(3),t.Y8G("routerLink","/admin/reports/invoices"),t.R7$(3),t.Y8G("routerLink","/admin/reports/earnings"),t.R7$(25),t.Y8G("series",o.chartOptions.series)("chart",o.chartOptions.chart)("dataLabels",o.chartOptions.dataLabels)("plotOptions",o.chartOptions.plotOptions)("yaxis",o.chartOptions.yaxis)("legend",o.chartOptions.legend)("fill",o.chartOptions.fill)("stroke",o.chartOptions.stroke)("tooltip",o.chartOptions.tooltip)("xaxis",o.chartOptions.xaxis),t.R7$(88),t.Y8G("ngModel",o.pageSize),t.R7$(14),t.Y8G("ngModel",o.searchDataValue),t.R7$(26),t.Y8G("ngForOf",o.lstProj),t.R7$(4),t.E5c(" Showing ",o.serialNumberArray[0]," to ",o.serialNumberArray[o.serialNumberArray.length-1]," of ",o.totalData," entries "),t.R7$(4),t.Y8G("ngClass",t.eq3(24,u,1===o.currentPage)),t.R7$(3),t.Y8G("ngForOf",o.pageNumberArray),t.R7$(1),t.Y8G("ngClass",t.eq3(26,u,o.currentPage===o.pageNumberArray[o.pageNumberArray.length-1]||0===o.lstProj.length)))},dependencies:[p.YU,p.Sq,p.bT,d.Wk,g.Q,c.xH,c.y7,c.me,c.wz,c.BC,c.vS,m.B4,m.aE]})}}return n})()}];let R=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[d.iI.forChild(C),d.iI]})}}return n})();var O=s(9688);let w=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=t.$C({type:n})}static{this.\u0275inj=t.G2t({imports:[p.MD,R,g.J,O.G]})}}return n})()}}]);