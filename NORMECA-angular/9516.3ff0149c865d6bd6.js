"use strict";(self.webpackChunkNORMECA_angular=self.webpackChunkNORMECA_angular||[]).push([[9516],{9516:(b,d,o)=>{o.r(d),o.d(d,{HomeModule:()=>j});var c=o(177),a=o(1188),l=o(235),m=o(4527),e=o(7705),r=o(9476);function g(t,w){if(1&t){const i=e.RV6();e.j41(0,"div",54)(1,"div",55)(2,"div",56)(3,"a"),e.nrm(4,"img",57),e.k0s()(),e.j41(5,"div",58)(6,"h3")(7,"a"),e.EFF(8),e.k0s()(),e.j41(9,"div",59),e.EFF(10),e.k0s()(),e.j41(11,"div",60)(12,"a",61),e.bIt("click",function(){e.eBV(i);const n=e.XpG().$implicit,u=e.XpG();return e.Njj(u.openCatalogDetails(n))}),e.EFF(13," Details "),e.k0s()()()()}if(2&t){const i=e.XpG().$implicit;e.R7$(4),e.Y8G("src",i.img,e.B4B),e.R7$(4),e.JRh(i.name),e.R7$(2),e.JRh(i.department)}}function p(t,w){1&t&&(e.qex(0),e.DNE(1,g,14,3,"ng-template",53),e.bVm())}const v=function(){return["/Savoirfaire/bureau"]},h=function(){return["/Savoirfaire/management"]},f=[{path:"",component:(()=>{class t{constructor(i,s){this.router=i,this.renderer=s,this.routes=m.J,this.selected="freelancers",this.getLink="project",this.selectedCatalog=null,this.pdfUrl="",this.customOptions={loop:!0,margin:30,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!1,navSpeed:700,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:4}},nav:!0},this.clinicsslides=[{img:"assets/img/blog/s1.png",name:"Normeca Catalogue",department:"Catalogue Description: Siphon de sol \xe0 sortie lat\xe9ral 300X300",pdfLink:"https://www.normeca.com.tn/uploads/Presentation%20%20Normeca%202021_compressed.pdf"}],this.tetimonialOptions={loop:!0,margin:30,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!1,navSpeed:700,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],responsive:{0:{items:1},768:{items:3},1170:{items:3}},nav:!0},this.testimonialslides=[{img:"assets/img/review/review-01.jpg",name:"Durso Raeen",position:"Project Lead",rating:"4.7"},{img:"assets/img/review/review-02.jpg",name:"Camelia Rennesa",position:"Project Lead",rating:"4.8"},{img:"assets/img/review/review-03.jpg",name:"Brayan",position:"Team Lead",rating:"5.0"},{img:"assets/img/review/review-02.jpg",name:"Davis Payerf",position:"Project Lead",rating:"3.2"}],this.companyOptions={loop:!0,margin:30,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!1,navSpeed:700,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],responsive:{0:{items:1},768:{items:6},1170:{items:6}},nav:!0},this.companyslides=[{img:"assets/img/company-logo-01.png"},{img:"assets/img/company-logo-02.svg"},{img:"assets/img/company-logo-03.svg"},{img:"assets/img/company-logo-04.svg"},{img:"assets/img/company-logo-05.svg"},{img:"assets/img/company-logo-06.svg"}],this.aboutusslides=[{id:1,img:"assets/img/review/review-01.jpg",name:"Process & Parc Machines",officer:"Responsable Technique",rating:"4.7",para:"\xc9quip\xe9 de machines de pointe comme TRULASER 3030 (fibre 4 kW) et presses Colly (2000), notre atelier assure une production pr\xe9cise et efficace."},{id:2,img:"assets/img/review/review-02.jpg",name:"Bureau d\u2019\xc9tudes",officer:"Responsable Bureau d'\xc9tudes",rating:"4.7",para:"Notre bureau d'\xe9tudes, avec un personnel qualifi\xe9 et des logiciels performants, prend en charge des projets en m\xe9canique, chaudronnerie, et conception de machines."},{id:3,img:"assets/img/review/review-03.jpg",name:"Gestion de Grands Projets",officer:"Chef de Projet",rating:"4.7",para:"NORMECA g\xe8re des projets d'envergure avec tra\xe7abilit\xe9 assur\xe9e via SAP, garantissant un suivi rigoureux et le respect des standards de qualit\xe9."}]}ngOnInit(){l.init({duration:1200,once:!0}),setTimeout(()=>{this.setZoomLevel(1.25)},0)}openCatalogDetails(i){window.open(i.pdfLink,"_blank")}onVideoEnded(){window.scrollBy(0,window.innerHeight)}setZoomLevel(i){document.querySelectorAll(".zoom-125").forEach(n=>{this.renderer.setStyle(n,"zoom",i.toString()),this.renderer.setStyle(n,"transform",`scale(${i})`),this.renderer.setStyle(n,"transform-origin","top left")})}search(){("projects"===this.selected||"freelancers"===this.selected)&&this.router.navigateByUrl("/freelancer/project")}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}static{this.\u0275fac=function(s){return new(s||t)(e.rXU(a.Ix),e.rXU(e.sFG))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["app-home"]],decls:165,vars:7,consts:[[1,"section","home-banner"],[1,"video-container"],["autoplay","",1,"banner-video",3,"muted","ended"],["videoPlayer",""],["src","assets/Normeca.mp4","type","video/mp4"],[1,"section","review"],[1,"container"],[1,"row"],[1,"col-md-12","col-sm-12","col-12","mx-auto","text-center"],["data-aos","fade-up",1,"section-header","aos"],[1,"header-title"],["data-aos","zoom-in","data-aos-duration","2000",1,"col-lg-3","col-md-6","col-12","aos"],[1,"popular-catergories"],[1,"popular-catergories-img"],["src","assets/img/icon/categories8.svg","alt","img",2,"width","50px","height","50px"],[1,"popular-catergories-content"],["href","https://www.normeca.com.tn/blog/6745ae7a9078b668d7b4c1ad"],[1,"feather","icon-arrow-right","ms-2"],["href","https://www.normeca.com.tn/blog/6745aecc9078b668d7b4c1b2"],["src","assets/img/icon/categories7.svg","alt","img",2,"width","50px","height","50px"],["href","https://www.normeca.com.tn/blog/6745aef09078b668d7b4c1b4"],["src","assets/img/icon/categories6.svg","alt","img",2,"width","50px","height","50px"],["href","https://www.normeca.com.tn/blog/6745af099078b668d7b4c1b7"],["data-aos","zoom-in","data-aos-duration","2000",1,"col-12","d-flex","justify-content-center","aos"],[1,"row","justify-content-center","w-100"],["href","https://www.normeca.com.tn/blog/6745af189078b668d7b4c1b9"],["src","assets/img/icon/categories5.svg","alt","img",2,"width","50px","height","50px"],["href","https://www.normeca.com.tn/blog/6745af269078b668d7b4c1bb"],[1,"section","projects","pt-0"],[1,"col-lg-6"],["data-aos","fade-up",1,"aos"],[1,"demand-professional"],[1,"work-set-image"],[1,"work-set"],["data-aos","zoom-in","data-aos-duration","1000",1,"recent-pro-img","aos"],["src","assets/img/blog/s1.png","alt","Img",1,"img-fluid"],[1,"work-sets"],[1,"recent-pro-img"],["src","assets/img/blog/s4.png","alt","Img","data-aos","zoom-in","data-aos-duration","2000",1,"img-fluid","mb-2","aos"],["src","assets/img/blog/s3.png","alt","Img","data-aos","zoom-in","data-aos-duration","2500",1,"img-fluid","aos"],[1,"col-12"],["data-aos","fade-up",1,"section-header","aos","text-center"],[1,"section","news","pt-0","review-set"],[1,"col-lg-6","col-md-12"],["data-aos","zoom-in","data-aos-duration","1000",1,"work-box","bg1"],[1,"work-content"],[1,"highlight-text"],[1,"btn","btn-primary",3,"routerLink"],["data-aos","zoom-in","data-aos-duration","2000",1,"work-box","aos","bg2"],[1,"section","developer"],["id","developers-slider",1,"text-center"],["data-aos","fade-up",1,"developers-slider","aos",3,"options"],[4,"ngFor","ngForOf"],["carouselSlide",""],[1,"freelance-widget"],[1,"freelance-content","d-flex","flex-column","align-items-center"],[1,"Catalogimg"],["alt","Product Image",1,"catalog-image",3,"src"],[1,"freelance-info","text-center"],[1,"freelance-specific"],[1,"cart-hover"],["tabindex","-1",1,"btn-cart",3,"click"]],template:function(s,n){1&s&&(e.j41(0,"body")(1,"section",0)(2,"div",1)(3,"video",2,3),e.bIt("ended",function(){return n.onVideoEnded()}),e.nrm(5,"source",4),e.EFF(6," Your browser does not support the video tag. "),e.k0s()()(),e.j41(7,"section",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"div",8)(13,"div",9)(14,"h2",10),e.EFF(15,"Bienvenue chez NORMECA"),e.k0s()()(),e.j41(16,"h2",10),e.EFF(17,"Notre specialite"),e.k0s()()(),e.j41(18,"div",11)(19,"div",12)(20,"div",13)(21,"span"),e.nrm(22,"img",14),e.k0s()(),e.j41(23,"div",15)(24,"h5"),e.EFF(25,"Etude"),e.k0s(),e.j41(26,"a",16),e.EFF(27,"DAO, CAO, gestion de projet"),e.nrm(28,"i",17),e.k0s()()()(),e.j41(29,"div",11)(30,"div",12)(31,"div",13)(32,"span"),e.nrm(33,"img",14),e.k0s()(),e.j41(34,"div",15)(35,"h5"),e.EFF(36,"D\xc9COUPE LASER"),e.k0s(),e.j41(37,"a",18),e.EFF(38,"Pr\xe9cis et rapide"),e.nrm(39,"i",17),e.k0s()()()(),e.j41(40,"div",11)(41,"div",12)(42,"div",13)(43,"span"),e.nrm(44,"img",19),e.k0s()(),e.j41(45,"div",15)(46,"h5"),e.EFF(47,"PLIAGE CN"),e.k0s(),e.j41(48,"a",20),e.nrm(49,"i",17),e.k0s()()()(),e.j41(50,"div",11)(51,"div",12)(52,"div",13)(53,"span"),e.nrm(54,"img",21),e.k0s()(),e.j41(55,"div",15)(56,"h5"),e.EFF(57,"SOUDURE"),e.k0s(),e.j41(58,"a",22),e.EFF(59,"TiG/MiG Par Points"),e.nrm(60,"i",17),e.k0s()()()(),e.j41(61,"div",23)(62,"div",24)(63,"div",11)(64,"div",12)(65,"div",13)(66,"span"),e.nrm(67,"img",19),e.k0s()(),e.j41(68,"div",15)(69,"h5"),e.EFF(70,"Traitement de surface"),e.k0s(),e.j41(71,"a",25),e.EFF(72,"Fa\xe7onner la t\xf4le indus"),e.nrm(73,"i",17),e.k0s()()()(),e.j41(74,"div",11)(75,"div",12)(76,"div",13)(77,"span"),e.nrm(78,"img",26),e.k0s()(),e.j41(79,"div",15)(80,"h5"),e.EFF(81,"ASSEMBLAGE"),e.k0s(),e.j41(82,"a",27),e.EFF(83,"Et pr\xe9montage des \xe9l\xe9ments"),e.nrm(84,"i",17),e.k0s()()()()()()()()(),e.j41(85,"section",28)(86,"div",6)(87,"div",7)(88,"div",29)(89,"div",30)(90,"div",31)(91,"h2"),e.EFF(92,"NORMECA : Votre Partenaire Expert en M\xe9cano-Soudure et Chaudronnerie de T\xf4lerie Fine Inoxydable"),e.k0s(),e.j41(93,"p"),e.EFF(94,"Fort de 40 ans d'exp\xe9rience dans les domaines de la m\xe9cano-soudure, de la chaudronnerie et de la t\xf4lerie fine inoxydable, NORMECA s'impose comme un acteur cl\xe9 dans la fabrication et le traitement de pi\xe8ces industrielles de haute pr\xe9cision."),e.k0s(),e.j41(95,"p"),e.EFF(96,"Notre entreprise met un point d'honneur \xe0 allier savoir-faire technique, qualit\xe9 irr\xe9prochable, comp\xe9titivit\xe9, flexibilit\xe9 et r\xe9activit\xe9 pour r\xe9pondre aux exigences de nos clients, notamment dans les secteurs exigeants tels que l'a\xe9ronautique."),e.k0s()(),e.j41(97,"div",31)(98,"h3"),e.EFF(99,"Notre Engagement envers la Satisfaction Client"),e.k0s(),e.j41(100,"p"),e.EFF(101,"Nous avons \xe0 c\u0153ur de garantir la satisfaction totale de nos clients en nous engageant \xe0 respecter leurs standards les plus stricts, ce qui nous permet de maintenir et d'augmenter leur fid\xe9lit\xe9."),e.k0s()(),e.j41(102,"div",31)(103,"h3"),e.EFF(104,"Une Croissance Sostenue par l'Innovation"),e.k0s(),e.j41(105,"p"),e.EFF(106,"Gr\xe2ce \xe0 l'int\xe9gration d'un syst\xe8me de gestion optimis\xe9 et \xe0 l'acquisition de technologies de pointe, notamment une nouvelle machine de d\xe9coupe laser fibre, NORMECA est d\xe9sormais en mesure d'offrir des solutions toujours plus performantes."),e.k0s(),e.j41(107,"p"),e.EFF(108,"Nous comptons sur cette innovation pour \xe9largir notre base de clients et soutenir une croissance significative de notre chiffre d'affaires."),e.k0s()()()(),e.j41(109,"div",29)(110,"div",32)(111,"div",33)(112,"div",34),e.nrm(113,"img",35),e.k0s()(),e.j41(114,"div",36)(115,"div",37),e.nrm(116,"img",38)(117,"img",39),e.k0s()()()()()()(),e.j41(118,"div",7)(119,"div",40)(120,"div",41)(121,"h2",10),e.EFF(122,"Savoir faire"),e.k0s()()()(),e.j41(123,"section",42)(124,"div",7)(125,"div",43)(126,"div",44)(127,"div",45)(128,"h2"),e.EFF(129,"Conception et Mod\xe9lisation "),e.j41(130,"span"),e.EFF(131,"de Projets sur Mesure"),e.k0s()(),e.j41(132,"p"),e.EFF(133," Notre bureau d'\xe9tudes utilise des outils de conception avanc\xe9s pour transformer vos id\xe9es en solutions sur mesure. Nous garantissons des r\xe9sultats optimis\xe9s, en respectant vos exigences de "),e.j41(134,"span",46),e.EFF(135,"qualit\xe9"),e.k0s(),e.EFF(136,"et de "),e.j41(137,"span",46),e.EFF(138,"pr\xe9cision"),e.k0s(),e.EFF(139,"."),e.nrm(140,"br")(141,"br"),e.k0s(),e.j41(142,"a",47),e.EFF(143,"D\xe9tails"),e.k0s()()()(),e.j41(144,"div",43)(145,"div",48)(146,"div",45)(147,"h2"),e.EFF(148,"Gestion de Grands Projets "),e.j41(149,"span"),e.EFF(150,"Suivi Rigoureux et Tra\xe7abilit\xe9"),e.k0s()(),e.j41(151,"p"),e.EFF(152,"NORMECA pilote des projets d'envergure avec un suivi rigoureux et une tra\xe7abilit\xe9 compl\xe8te gr\xe2ce \xe0 notre ERP SAP. Nous garantissons une gestion optimale respectant la qualit\xe9 et les exigences techniques. nous utilisent des \xe9quipements de derni\xe8re g\xe9n\xe9ration pour assurer une production pr\xe9cise et efficace."),e.k0s(),e.j41(153,"a",47),e.EFF(154,"D\xe9tails"),e.k0s()()()()()(),e.j41(155,"section",49)(156,"div",6)(157,"div",7)(158,"div",8)(159,"div",9)(160,"h2",10),e.EFF(161,"NOS Catalogues"),e.k0s()()()(),e.j41(162,"div",50)(163,"owl-carousel-o",51),e.DNE(164,p,2,0,"ng-container",52),e.k0s()()()()()),2&s&&(e.R7$(3),e.Y8G("muted","muted"),e.R7$(139),e.Y8G("routerLink",e.lJ4(5,v)),e.R7$(11),e.Y8G("routerLink",e.lJ4(6,h)),e.R7$(10),e.Y8G("options",n.customOptions),e.R7$(1),e.Y8G("ngForOf",n.clinicsslides))},dependencies:[c.Sq,a.Wk,r.gU,r.NA],styles:[".home-banner[_ngcontent-%COMP%]{position:relative;height:100vh}@media (max-width: 768px){.home-banner[_ngcontent-%COMP%]{display:none}.header-title[_ngcontent-%COMP%]{margin-top:150px}}.section.projects.pt-0[_ngcontent-%COMP%]{padding-top:50px!important}.video-container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.banner-video[_ngcontent-%COMP%]{width:100%;height:100%}.Catalogimg[_ngcontent-%COMP%]{max-width:200px;margin:0 auto;display:flex;justify-content:center;align-items:center}.catalog-image[_ngcontent-%COMP%]{width:100%;height:auto;max-height:450px;object-fit:contain}"]})}}return t})()}];let E=(()=>{class t{static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[a.iI.forChild(f),a.iI]})}}return t})();var F=o(9688);let j=(()=>{class t{static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[c.MD,E,r.Rl,F.G]})}}return t})()}}]);