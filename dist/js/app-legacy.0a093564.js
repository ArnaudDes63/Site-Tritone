(function(){var t={2151:function(t){var e=[{name:"Deuxieme",image:"https://tse1.mm.bing.net/th?id=OIP.Ae_dE9qvceJmkhNy_ssI8gHaHa&pid=Api&P=0&w=165&h=165",note:"1",info:"Ma deuxieme Info !!"},{name:"Troisieme",image:"https://tse2.explicit.bing.net/th?id=OIP.sm7rtTtccQP6szrIaKrQDAHaGS&pid=Api&P=0&w=193&h=164",note:"5",info:"Ma Troisieme Info !!"},{name:"Quatrieme",image:"https://tse1.mm.bing.net/th?id=OIP.cpM6_dI7eorIQRyXqpHIKwHaHa&pid=Api&P=0&w=165&h=165",note:"4",info:"Ma Quatrieme Info !!"},{name:"Cinquieme",image:"https://tse1.mm.bing.net/th?id=OIP.fHJjaZrhGzX1Ht4kC5F9DgHaHa&pid=Api&P=0&w=181&h=181",note:"3",info:"Ma Cinquieme Info !!"},{name:"Sixieme",image:"https://tse3.mm.bing.net/th?id=OIP.mrF0PPB2s-KGHbh-sAF4OwHaHa&pid=Api&P=0&w=168&h=168",note:"2",info:"Ma Sixieme Info !!"},{name:"Septieme",image:"https://tse4.mm.bing.net/th?id=OIP.Xf798yDSe24PNc_w5Gqr6QHaG_&pid=Api&P=0&w=173&h=164",note:"1",info:"Ma Septieme Info !!"},{name:"Huitieme",image:"https://tse1.mm.bing.net/th?id=OIP.xI6oDJQ4kYt757ieXIoEWgHaJ4&pid=Api&P=0&w=122&h=163",note:"5",info:"Ma Huitieme Info !!"},{name:"Neuvieme",image:"https://tse3.mm.bing.net/th?id=OIP.XqdzBaOY8dLZtIR1pf1FtwHaJm&pid=Api&P=0&w=133&h=173",note:"4",drive:"Ma Neuvieme Info !!"},{name:"Dixieme",image:"https://tse1.mm.bing.net/th?id=OIP.YT0L04yRgUv-VdpaxOLfPQHaJm&pid=Api&P=0&w=132&h=172",note:"3",drive_time:"Ma Dixieme Info !!"},{name:"Onzieme",image:"https://tse1.mm.bing.net/th?id=OIP.fYJK9rKKv4jKZQQg9o2mCwHaHa&pid=Api&P=0&w=174&h=174",note:"2",drive_time:"Ma Onzieme Info !!"},{name:"Douzieme",image:"https://tse4.mm.bing.net/th?id=OIP.CQD9l3wyShEede5CWKUvdQHaJR&pid=Api&P=0&w=142&h=178",note:"1",drive_time:"Ma Douzieme Info !!"}];t.exports=e},6394:function(t,e,i){"use strict";i(6992),i(8674),i(9601),i(7727);var a=i(8935),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"MonHeader"},[i("mon-header")],1),i("router-view"),i("div",{staticClass:"Monfooter"},[i("mon-footer")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header"},[i("nav",[i("ul",[i("div",{staticClass:"item"},[i("router-link",{attrs:{to:"/",exact:""}},[t._v("Acceuil")])],1),i("div",{staticClass:"item"},[i("router-link",{attrs:{to:"/MaPageContact"}},[t._v("Contact")])],1),i("div",{staticClass:"item"},[i("router-link",{attrs:{to:"/MaPageAchat"}},[t._v("Achat")])],1),i("div",{staticClass:"item"},[i("router-link",{attrs:{to:"/MaPageProduit"}},[t._v("Produit")])],1)])])])},s=[],c={name:"MonFooter"},l=c,m=i(1001),u=(0,m.Z)(l,r,s,!1,null,"02d03f6c",null),d=u.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar fixed-top navbar-expand-lg navbar-dark"},[a("div",{staticClass:"has-bg-img"},[a("img",{staticClass:"bg-img",attrs:{src:i(4528)}}),a("div"),a("p",[t._v("Virtual Instrument Engine")])])])}],f={name:"MonHeader"},h=f,g=(0,m.Z)(h,p,v,!1,null,"d23f9db6",null),_=g.exports,C={name:"App",components:{MonFooter:d,MonHeader:_}},b=C,x=(0,m.Z)(b,n,o,!1,null,null,null),P=x.exports,M=(i(4232),i(2809)),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero"},[t._m(0),a("ma-modale",{attrs:{revele:t.revele,toggleModale:t.toggleModale}}),a("div",{staticClass:"btn btn-danger",on:{click:t.toggleModale}},[t._v("Ouvrir La Vidéo D'Intro")]),a("img",{staticClass:"logo",attrs:{src:i(9574),alt:"Ici ce trouve le Logo du site tritone"}})],1)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("h1",[t._v("Bienvenue Sur triTone")]),a("span",[t._v("RETRO")]),a("img",{attrs:{src:i(3479),alt:""}})])}],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.revele?a("div",{staticClass:"bloc-modale"},[a("div",{staticClass:"overlay",on:{click:t.toggleModale}}),a("div",{staticClass:"modale card"},[a("video",{ref:"videoRef",attrs:{src:i(4923),id:"video-container",width:"350px",height:"200px",controls:""}}),a("div",{staticClass:"btn-modale btn btn-danger",on:{click:t.toggleModale}},[t._v("X")])])]):t._e()},w=[],A={name:"MaModale",props:["revele","toggleModale"]},k=A,H=(0,m.Z)(k,O,w,!1,null,"045d8ae2",null),E=H.exports,j={name:"MonAccueil",components:{MaModale:E},data:function(){return{revele:!1}},methods:{toggleModale:function(){this.revele=!this.revele}}},Z=j,T=(0,m.Z)(Z,y,I,!1,null,"da223458",null),$=T.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"item"},[a("form",{staticClass:"text-center p-5",attrs:{action:"#!"}},[a("p",{staticClass:"h2 mb-4"},[t._v("Nous Contactez")]),a("input",{staticClass:"form-control mb-5",attrs:{type:"text",id:"defaultContactFormName",placeholder:"Nom / Prénom"}}),a("input",{staticClass:"form-control mb-5",attrs:{type:"text",id:"defaultContactFormName",placeholder:"Entreprise / Particulier"}}),a("input",{staticClass:"form-control mb-5",attrs:{type:"text",id:"defaultContactFormName",placeholder:"TéLéphone"}}),a("input",{staticClass:"form-control mb-5",attrs:{type:"email",id:"defaultContactFormEmail",placeholder:"E-mail"}}),a("div",{staticClass:"form-group"},[a("textarea",{staticClass:"form-control rounded-0",attrs:{id:"exampleFormControlTextarea2",rows:"3",placeholder:"Message"}})]),a("button",{staticClass:"btn btn-danger btn-block mt-2 p-2",attrs:{type:"submit"}},[t._v("Envoyer")])])]),a("div",{staticClass:"item"},[a("img",{attrs:{src:i(1971),alt:"Photo garçon avec un micro"}})])])}],Q={name:"MaPageContact"},D=Q,N=(0,m.Z)(D,S,F,!1,null,"5b3385be",null),z=N.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"achats"},[i("h1",[t._v("Nos Articles")]),i("ma-card")],1)},K=[],R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"galerie"},[i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://cdn.pixabay.com/photo/2016/10/12/23/22/electric-guitar-1736291__340.jpg",alt:""}}),i("div",{staticClass:"lien"},[i("router-link",{attrs:{to:"/",exact:""}},[t._v("Acceuil🎬")])],1)]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://cdn.pixabay.com/photo/2016/08/15/16/48/vinyl-1595847__340.jpg",alt:""}}),i("div",{staticClass:"lien"},[i("router-link",{attrs:{to:"/",exact:""}},[t._v("Acceuil🎬")])],1)]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://cdn.pixabay.com/photo/2010/12/13/10/01/guitar-2119__340.jpg",alt:""}}),i("div",{staticClass:"lien"},[i("router-link",{attrs:{to:"/",exact:""}},[t._v("Acceuil🎬")])],1)]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612__340.jpg",alt:""}}),i("div",{staticClass:"lien"},[i("router-link",{attrs:{to:"/",exact:""}},[t._v("Acceuil🎬")])],1)]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://cdn.pixabay.com/photo/2020/04/15/14/45/microphone-5046876__340.jpg",alt:""}}),i("div",{staticClass:"lien"},[i("router-link",{attrs:{to:"/",exact:""}},[t._v("Acceuil🎬")])],1)]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://cdn.pixabay.com/photo/2016/11/21/11/32/audio-1844798__340.jpg",alt:""}}),i("div",{staticClass:"lien"},[i("router-link",{attrs:{to:"/",exact:""}},[t._v("Acceuil🎬")])],1)]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://cdn.pixabay.com/photo/2019/12/18/04/11/dj-4702977__340.jpg",alt:""}}),i("div",{staticClass:"lien"},[i("router-link",{attrs:{to:"/",exact:""}},[t._v("Acceuil🎬")])],1)]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"https://cdn.pixabay.com/photo/2016/11/23/00/43/audio-1851517__340.jpg",alt:""}}),i("div",{staticClass:"lien"},[i("router-link",{attrs:{to:"/",exact:""}},[t._v("Acceuil🎬")])],1)])])},q=[],L={name:"MaCard"},X=L,G=(0,m.Z)(X,R,q,!1,null,"deb6daf6",null),V=G.exports,Y={components:{MaCard:V},name:"MaPageAchat"},B=Y,U=(0,m.Z)(B,J,K,!1,null,"3034e186",null),W=U.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h1",[t._v("Nos Produits")])])}],it={name:"MaPageProduit"},at=it,nt=(0,m.Z)(at,tt,et,!1,null,"a6bcf754",null),ot=nt.exports,rt=[{path:"/",component:$},{path:"/MaPageContact",component:z},{path:"/MaPageAchat",component:W},{path:"/MaPageProduit",component:ot}];i(2151);a.Z.config.productionTip=!1,a.Z.use(M.Z);var st=new M.Z({routes:rt,mode:"history"});new a.Z({render:function(t){return t(P)},router:st}).$mount("#app")},9574:function(t,e,i){"use strict";t.exports=i.p+"img/logo.806930a0.svg"},3479:function(t,e,i){"use strict";t.exports=i.p+"img/saxophone.c2b2ddb9.svg"},4923:function(t,e,i){"use strict";t.exports=i.p+"media/Video_accueil.3dc21ee9.mp4"},1971:function(t,e,i){"use strict";t.exports=i.p+"img/shout.79b6691f.jpg"},4528:function(t,e,i){"use strict";t.exports=i.p+"img/triTone.08d2311c.png"}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,o){if(!a){var r=1/0;for(m=0;m<t.length;m++){a=t[m][0],n=t[m][1],o=t[m][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||r>=o)&&Object.keys(i.O).every((function(t){return i.O[t](a[c])}))?a.splice(c--,1):(s=!1,o<r&&(r=o));if(s){t.splice(m--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var m=t.length;m>0&&t[m-1][2]>o;m--)t[m]=t[m-1];t[m]=[a,n,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,r=a[0],s=a[1],c=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)var m=c(i)}for(e&&e(a);l<r.length;l++)o=r[l],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(m)},a=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(6394)}));a=i.O(a)})();
//# sourceMappingURL=app-legacy.0a093564.js.map