"use strict";(self.webpackChunkNORMECA_angular=self.webpackChunkNORMECA_angular||[]).push([[426],{426:(q,p,r)=>{r.r(p),r.d(p,{ProjectsModule:()=>w});var g=r(6814),c=r(4190),u=r(8613),m=r(9315),f=r(9402),v=r(4664),h=r(4841),e=r(5879),Z=r(9136),_=r(586),d=r(6223);const C=["categoryModal"];function b(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"div")(1,"label",64)(2,"input",65),e.NdJ("ngModelChange",function(n){const s=e.CHM(t).$implicit;return e.KtG(s.selected=n)}),e.qZA(),e._UZ(3,"span",66),e._uU(4),e.qZA()()}if(2&a){const t=l.$implicit;e.xp6(2),e.Q6J("ngModel",t.selected),e.xp6(2),e.hij(" ",t.name," ")}}function A(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"div")(1,"label",64)(2,"input",65),e.NdJ("ngModelChange",function(n){const s=e.CHM(t).$implicit;return e.KtG(s.selected=n)}),e.qZA(),e._UZ(3,"span",66),e._uU(4),e.qZA()()}if(2&a){const t=l.$implicit;e.xp6(2),e.Q6J("ngModel",t.selected),e.xp6(2),e.hij(" ",t.name," ")}}function T(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"div")(1,"label",64)(2,"input",65),e.NdJ("ngModelChange",function(n){const s=e.CHM(t).$implicit;return e.KtG(s.selected=n)}),e.qZA(),e._UZ(3,"span",66),e._uU(4),e.qZA()()}if(2&a){const t=l.$implicit;e.xp6(2),e.Q6J("ngModel",t.selected),e.xp6(2),e.hij(" ",t.name," ")}}function x(a,l){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.Categorie.Libelle," ")}}function y(a,l){if(1&a){const t=e.EpF();e.TgZ(0,"div",67)(1,"div",68)(2,"div",69)(3,"div",70)(4,"div",71)(5,"a",40),e._UZ(6,"img",72),e.qZA()(),e.TgZ(7,"div",73)(8,"div",74),e._uU(9),e.qZA()(),e.TgZ(10,"div",75)(11,"h3"),e.YNc(12,x,2,1,"ng-container",76),e.qZA()(),e.TgZ(13,"div",77)(14,"span",78),e._uU(15),e.qZA()()()(),e.TgZ(16,"div",79)(17,"a",80),e.NdJ("click",function(){const o=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.viewProjectDetails(o))}),e._uU(18,"View Project"),e.qZA()()()()}if(2&a){const t=l.$implicit,i=e.oxw();e.xp6(6),e.Q6J("src",i.getFullImageUrl(t.Photo),e.LSH),e.xp6(3),e.Oqu(t.Reference),e.xp6(3),e.Q6J("ngIf",i.isCategoryObject(t.Categorie)),e.xp6(3),e.Oqu(t.Designation)}}const U=[{path:"",component:(()=>{class a{ngOnInit(){this.getTableDatacategory(),this.GetCategories(),(0,m.D)([this.appService.getCategories(),this.appService.getArticles()]).pipe((0,v.w)(([t,i])=>(this.Category=t,this.Articles=i,this.filteredArticles=i,this.filteredArticlestrue=i,this.dataSource.data=this.filteredArticles,[]))).subscribe(),setTimeout(()=>{},100),f.init({duration:1200,once:!0})}openModal(){"/Products"===this.router.url&&(this.categoryModal?.nativeElement?$(this.categoryModal.nativeElement).modal("show"):console.error("categoryModal is not defined"))}isCategoryObject(t){return"string"!=typeof t&&"_id"in t}GetCategories(){this.appService.getCategories()}getTableDatacategory(){this.categorys=[],this.serialNumberArray=[],this.appService.getCategories().subscribe(t=>{this.totalData=t.length,t.map((i,n)=>{n>=this.skip&&n+1<=this.limit&&this.categorys.push({_id:i._id,description:i.description,Libelle:i.Libelle,createdAt:i.createdAt,updatedAt:i.updatedAt,__v:i.__v})}),this.dataSourceCategorys=new h.r4(this.categorys)},t=>{console.error("Error fetching categories:",t)})}constructor(t,i,n){this.router=t,this.dataservice=i,this.appService=n,this.like=[!1],this.isButtonVisible=!0,this.isButtonsVisible=!0,this.isButtonVisibles=!0,this.isButtonVisibl=!0,this.isButtonsVisibles=!0,this.Libelle="",this.serialNumberArray=[],this.totalData=0,this.skip=0,this.pageSize=10,this.limit=this.pageSize,this.selectedCategory="",this.searchTerm="",this.routes=u._,this.filteredArticles=[],this.filteredArticlestrue=[],this.selectedMaterial=[],this.materialFilters=[{name:"Acier Inoxydable",selected:!1},{name:"Acier Galvanis\xe9",selected:!1},{name:"inox",selected:!1}],this.typeProductFilters=[{name:"Caniveaux et Siphons",selected:!1},{name:"Hotte de cuisine",selected:!1},{name:"TABLE",selected:!1},{name:"\xc9tag\xe8res",selected:!1},{name:"Plonges",selected:!1},{name:"Chariots",selected:!1},{name:"Pupitres",selected:!1},{name:"Cadres Tampon",selected:!1},{name:"Corni\xe8res \xe0 Sceller - Forme L",selected:!1},{name:"Tables avec Trou Vide-Ordure",selected:!1},{name:"\xc9tag\xe8res \xe0 4 Niveaux en T\xf4le Pleine",selected:!1}],this.industryFilters=[{name:"Vinicole",selected:!1},{name:"Brassicole",selected:!1},{name:"Agro-alimentaire et surfaces de vente",selected:!1},{name:"Cuisines collectives",selected:!1},{name:"Espaces aquatiques, piscines, spa, baln\xe9o",selected:!1},{name:"Sanitaire, salles de bains, douches",selected:!1},{name:"Chimique et pharmaceutique",selected:!1},{name:"Voirie, terrasses, balcons, parkings",selected:!1},{name:"Tour IGH",selected:!1}],this.dataSource=new h.r4(this.Articles)}toggleLike(t){this.like[t]=!this.like[t]}getFullImageUrl(t){return"/"+t}navigation(){this.router.navigate([u._.freelancer_project])}selectCategory(t){this.selectedCategory=this.selectedCategory===t._id?null:t._id,this.applyFilter()}resetCategoryFilter(){this.selectedCategory=null,this.applyFilter()}applyFilter(){this.filteredArticles=this.filteredArticlestrue.filter(t=>this.materialFilters.every(i=>!i.selected||t.Designation.toLowerCase().includes(i.name.toLowerCase())||t.description.toLowerCase().includes(i.name.toLowerCase())||t.Reference.toLowerCase().includes(i.name.toLowerCase()))&&this.industryFilters.every(i=>!i.selected||t.Designation.toLowerCase().includes(i.name.toLowerCase())||t.description.toLowerCase().includes(i.name.toLowerCase())||t.Reference.toLowerCase().includes(i.name.toLowerCase()))&&this.typeProductFilters.every(i=>!i.selected||t.Designation.toLowerCase().includes(i.name.toLowerCase())||t.description.toLowerCase().includes(i.name.toLowerCase())||t.Reference.toLowerCase().includes(i.name.toLowerCase())))}onSearchInputChange(){this.filteredArticles=this.searchTerm&&""!==this.searchTerm.trim()?this.filteredArticlestrue.filter(t=>t.Reference.toLowerCase().includes(this.searchTerm.toLowerCase())||t.description.toLowerCase().includes(this.searchTerm.toLowerCase())||t.Designation.toLowerCase().includes(this.searchTerm.toLowerCase())||!1):this.selectedCategory?this.Articles.filter(t=>(this.isCategoryObject(t.Categorie)?t.Categorie._id:null)===this.selectedCategory):this.Articles}viewProjectDetails(t){const i=encodeURIComponent(JSON.stringify(t));this.router.navigate(["/project-details",{article:i}])}static#e=this.\u0275fac=function(i){return new(i||a)(e.Y36(c.F0),e.Y36(Z.u),e.Y36(_.z))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-projects"]],viewQuery:function(i,n){if(1&i&&e.Gf(C,5),2&i){let o;e.iGM(o=e.CRH())&&(n.categoryModal=o.first)}},decls:183,vars:5,consts:[[1,"bread-crumb-bar"],[1,"container"],[1,"row","align-items-center","inner-banner"],[1,"col-md-12","col-12","text-center"],[1,"breadcrumb-list"],["aria-label","breadcrumb",1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","#"],["aria-current","page",1,"breadcrumb-item","active"],[1,"content"],[1,"row"],[1,"col-md-12","col-lg-4","col-xl-3","theiaStickySidebar"],[1,"card","search-filter"],[1,"card-header","d-flex","justify-content-between"],[1,"card-title","mb-0"],[1,"card-body"],[1,"filter-widget"],["data-bs-toggle","collapse","data-bs-target","#collapseMaterial","aria-expanded","true","aria-controls","collapseMaterial",1,"filter-title"],["href","javascript:void(0);",1,"w-100"],[1,"float-end"],["id","materialIcon",1,"fa-solid","fa-chevron-down"],["id","collapseMaterial","data-bs-parent","#accordionExample1",1,"collapse"],[4,"ngFor","ngForOf"],["data-bs-toggle","collapse","data-bs-target","#collapseTypeProduct","aria-expanded","true","aria-controls","collapseTypeProduct",1,"filter-title"],["id","typeProductIcon",1,"fa-solid","fa-chevron-down"],["id","collapseTypeProduct","data-bs-parent","#accordionExample1",1,"collapse"],["data-bs-toggle","collapse","data-bs-target","#collapseIndustry","aria-expanded","true","aria-controls","collapseIndustry",1,"filter-title"],["id","industryIcon",1,"fa-solid","fa-chevron-down"],["id","collapseIndustry","data-bs-parent","#accordionExample1",1,"collapse"],[1,"btn-search"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-block",3,"click"],[1,"col-md-12","col-lg-8","col-xl-9"],[1,"search-bar"],["type","text","placeholder","Search projects...",1,"form-control",3,"ngModel","ngModelChange","input"],["class","col-lg-3 col-md-6 appear",4,"ngFor","ngForOf"],[1,"col-md-12"],[1,"paginations","list-pagination"],[1,"page-item"],["href","javascript:void(0);"],[1,"feather","icon-chevron-left"],["href","javascript:void(0);",1,"active"],[1,"feather","icon-chevron-right"],["tabindex","-1","aria-labelledby","add-category-label","aria-hidden","true",1,"modal","fade","custom-modal"],["categoryModal",""],[1,"modal-dialog","modal-dialog-centered","modal-xl"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal",1,"close"],[1,"modal-body"],["data-aos","zoom-in","data-aos-duration","2000",1,"col-lg-3","col-md-6","col-12","aos"],[1,"popular-catergories"],[1,"popular-catergories-img"],["src","assets/img/icon/categories1.svg","alt","img",2,"width","50px","height","50px"],[1,"popular-catergories-content"],[1,"feather","icon-arrow-right","ms-2"],["src","assets/img/icon/categories8.svg","alt","img",2,"width","50px","height","50px"],["src","assets/img/icon/categories3.svg","alt","img",2,"width","50px","height","50px"],["src","assets/img/icon/categories4.svg","alt","img",2,"width","50px","height","50px"],["src","assets/img/icon/categories5.svg","alt","img",2,"width","50px","height","50px"],["src","assets/img/icon/categories6.svg","alt","img",2,"width","50px","height","50px"],["src","assets/img/icon/categories7.svg","alt","img",2,"width","50px","height","50px"],[1,"custom_check"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmark"],[1,"col-lg-3","col-md-6","appear"],[1,"freelance-widget","widget-author","position-relative"],[1,"freelance-content"],[1,"author-heading"],[1,"freelance-img"],["alt","Category Image",1,"me-2",3,"src"],[1,"profile-name"],[1,"author-location"],[1,"freelance-info"],[4,"ngIf"],[1,"freelance-tags"],[1,"badge","badge-pill","badge-design"],[1,"cart-hover"],["tabindex","-1",1,"btn-cart",3,"routerLink","click"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3"),e._uU(6,"Project Grid"),e.qZA(),e.TgZ(7,"nav",5)(8,"ol",6)(9,"li",7)(10,"a",8),e._uU(11,"Home"),e.qZA()(),e.TgZ(12,"li",9),e._uU(13,"Projects"),e.qZA()()()()()()()(),e.TgZ(14,"div",10)(15,"div",1)(16,"div",11)(17,"div",12)(18,"div",13)(19,"div",14)(20,"h4",15),e._uU(21,"Filtre de recherche"),e.qZA()(),e.TgZ(22,"div",16)(23,"div",17)(24,"h4",18)(25,"a",19),e._uU(26," Material "),e.TgZ(27,"span",20),e._UZ(28,"i",21),e.qZA()()(),e.TgZ(29,"div",22),e.YNc(30,b,5,2,"div",23),e.qZA()(),e.TgZ(31,"div",17)(32,"h4",24)(33,"a",19),e._uU(34," Type de produit "),e.TgZ(35,"span",20),e._UZ(36,"i",25),e.qZA()()(),e.TgZ(37,"div",26),e.YNc(38,A,5,2,"div",23),e.qZA()(),e.TgZ(39,"div",17)(40,"h4",27)(41,"a",19),e._uU(42," Application dans le Domain "),e.TgZ(43,"span",20),e._UZ(44,"i",28),e.qZA()()(),e.TgZ(45,"div",29),e.YNc(46,T,5,2,"div",23),e.qZA()(),e.TgZ(47,"div",30)(48,"button",31),e.NdJ("click",function(){return n.applyFilter()}),e._uU(49,"Search"),e.qZA(),e.TgZ(50,"button",32),e.NdJ("click",function(){return n.applyFilter()}),e._uU(51,"Reset"),e.qZA()()()()(),e.TgZ(52,"div",33)(53,"div",11)(54,"div",34)(55,"input",35),e.NdJ("ngModelChange",function(s){return n.searchTerm=s})("input",function(){return n.onSearchInputChange()}),e.qZA()(),e.YNc(56,y,19,4,"div",36),e.qZA(),e.TgZ(57,"div",11)(58,"div",37)(59,"ul",38)(60,"li",39)(61,"a",40),e._UZ(62,"i",41),e.qZA()(),e.TgZ(63,"li",39)(64,"a",42),e._uU(65,"1"),e.qZA()(),e.TgZ(66,"li",39)(67,"a",40),e._uU(68,"2"),e.qZA()(),e.TgZ(69,"li",39)(70,"a",40),e._uU(71,"3"),e.qZA()(),e.TgZ(72,"li",39)(73,"a",40),e._uU(74,"..."),e.qZA()(),e.TgZ(75,"li",39)(76,"a",40),e._uU(77,"10"),e.qZA()(),e.TgZ(78,"li",39)(79,"a",40),e._UZ(80,"i",43),e.qZA()()()()()()()()(),e.TgZ(81,"div",44,45)(83,"div",46)(84,"div",47)(85,"div",48)(86,"h4",49),e._uU(87,"Select industry"),e.qZA(),e.TgZ(88,"button",50)(89,"span"),e._uU(90,"\xd7"),e.qZA()()(),e.TgZ(91,"div",51)(92,"div",1)(93,"div",11)(94,"div",11)(95,"div",52)(96,"div",53)(97,"div",54)(98,"span"),e._UZ(99,"img",55),e.qZA()(),e.TgZ(100,"div",56)(101,"h5"),e._uU(102,"Agroalimentaire"),e.qZA(),e.TgZ(103,"a",40),e._uU(104,"Agroalimentaire"),e._UZ(105,"i",57),e.qZA()()()(),e.TgZ(106,"div",52)(107,"div",53)(108,"div",54)(109,"span"),e._UZ(110,"img",58),e.qZA()(),e.TgZ(111,"div",56)(112,"h5"),e._uU(113,"Pharmaceutique"),e.qZA(),e.TgZ(114,"a",40),e._uU(115,"Pharmaceutique"),e._UZ(116,"i",57),e.qZA()()()(),e.TgZ(117,"div",52)(118,"div",53)(119,"div",54)(120,"span"),e._UZ(121,"img",59),e.qZA()(),e.TgZ(122,"div",56)(123,"h5"),e._uU(124,"Chimique"),e.qZA(),e.TgZ(125,"a",40),e._uU(126,"Chimique"),e._UZ(127,"i",57),e.qZA()()()(),e.TgZ(128,"div",52)(129,"div",53)(130,"div",54)(131,"span"),e._UZ(132,"img",60),e.qZA()(),e.TgZ(133,"div",56)(134,"h5"),e._uU(135,"Automobile"),e.qZA(),e.TgZ(136,"a",40),e._uU(137,"Automobile"),e._UZ(138,"i",57),e.qZA()()()(),e.TgZ(139,"div",52)(140,"div",53)(141,"div",54)(142,"span"),e._UZ(143,"img",61),e.qZA()(),e.TgZ(144,"div",56)(145,"h5"),e._uU(146,"A\xe9rospatiale et de D\xe9fense"),e.qZA(),e.TgZ(147,"a",40),e._uU(148,"A\xe9rospatiale"),e._UZ(149,"i",57),e.qZA()()()(),e.TgZ(150,"div",52)(151,"div",53)(152,"div",54)(153,"span"),e._UZ(154,"img",62),e.qZA()(),e.TgZ(155,"div",56)(156,"h5"),e._uU(157,"\xc9nergie"),e.qZA(),e.TgZ(158,"a",40),e._uU(159,"\xc9nergie"),e._UZ(160,"i",57),e.qZA()()()(),e.TgZ(161,"div",52)(162,"div",53)(163,"div",54)(164,"span"),e._UZ(165,"img",63),e.qZA()(),e.TgZ(166,"div",56)(167,"h5"),e._uU(168,"Environnement"),e.qZA(),e.TgZ(169,"a",40),e._uU(170,"Environnement"),e._UZ(171,"i",57),e.qZA()()()(),e.TgZ(172,"div",52)(173,"div",53)(174,"div",54)(175,"span"),e._UZ(176,"img",63),e.qZA()(),e.TgZ(177,"div",56)(178,"h5"),e._uU(179,"Securite"),e.qZA(),e.TgZ(180,"a",40),e._uU(181,"Securite"),e._UZ(182,"i",57),e.qZA()()()()()()()()()()()),2&i&&(e.xp6(30),e.Q6J("ngForOf",n.materialFilters),e.xp6(8),e.Q6J("ngForOf",n.typeProductFilters),e.xp6(8),e.Q6J("ngForOf",n.industryFilters),e.xp6(9),e.Q6J("ngModel",n.searchTerm),e.xp6(1),e.Q6J("ngForOf",n.filteredArticles))},dependencies:[g.sg,g.O5,c.rH,d.Fj,d.Wl,d.JJ,d.On],styles:["@keyframes _ngcontent-%COMP%_appearAnimation{0%{opacity:0;transform:translateY(200px)}to{opacity:1;transform:translateY(0)}}.appear[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_appearAnimation 2s ease-out}.nav-link[_ngcontent-%COMP%]{padding:10px 20px;border-radius:5px;font-size:18px}.search-bar[_ngcontent-%COMP%]{margin-bottom:20px;display:flex;align-items:center;background-color:#fff;padding:10px;border-radius:5px;box-shadow:0 4px 6px #0000001a}.search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex:1;padding:8px;font-size:16px;border:none;outline:none;background-color:transparent}.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:38px;background-color:#3449a1;color:#fff;border:none;border-radius:5px;font-size:16px;margin-left:10px;transition:background-color .3s ease}.search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#2c3b87}.freelance-content[_ngcontent-%COMP%]{position:relative;z-index:1}.freelance-img[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden}.freelance-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.filter-widget-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.filter-widget.highlighted[_ngcontent-%COMP%]{background-color:#ffc107;border-radius:10px;padding:15px;box-shadow:0 0 10px #0003;transition:all .3s ease}.filter-widget.highlighted[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 0 15px #0000004d}.filter-widget.highlighted[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#212529;text-decoration:none}.filter-widget.highlighted[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})}return a})()}];let M=(()=>{class a{static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275mod=e.oAB({type:a});static#i=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(U),c.Bz]})}return a})();var P=r(45);let w=(()=>{class a{static#e=this.\u0275fac=function(i){return new(i||a)};static#t=this.\u0275mod=e.oAB({type:a});static#i=this.\u0275inj=e.cJS({imports:[g.ez,M,P.m]})}return a})()}}]);