(this.webpackJsonpbikesfrontend=this.webpackJsonpbikesfrontend||[]).push([[0],{16:function(e,t,a){e.exports=a(46)},21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),u=(a(21),a(1)),s=a.n(u),i=a(2),o=(a(23),function(e){var t=e.brand,a=e.model,n=e.year,l=e.price,c=e.addBike,u=e.handleImage,s=e.description,i=e.location,o=e.handleTypeChange,m=e.contact,d=["Maantie","Aika-ajo","Maasto t\xe4ysjousitettu","Maasto etujousitettu","Maasto jousittamaton","Hybridi","Cyclocross","Yksivaihteinen","Kaupunki"];return d.sort(),r.a.createElement("form",{className:"newbikeform",onSubmit:c},r.a.createElement("h2",null,"Lis\xe4\xe4 py\xf6r\xe4"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"inputinfo"},"Tyyppi *"),r.a.createElement("td",null,r.a.createElement("select",{onChange:o},r.a.createElement("option",null,"Tyyppi"),d.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))),r.a.createElement("tr",null,r.a.createElement("td",{className:"inputinfo"},"Merkki *"),r.a.createElement("td",null,r.a.createElement("input",t.withoutReset))),r.a.createElement("tr",null,r.a.createElement("td",{className:"inputinfo"},"Malli *"),r.a.createElement("td",null,r.a.createElement("input",a.withoutReset))),r.a.createElement("tr",null,r.a.createElement("td",{className:"inputinfo"},"Vuosimalli"),r.a.createElement("td",null,r.a.createElement("input",n.withoutReset))),r.a.createElement("tr",null,r.a.createElement("td",{className:"inputinfo"},"Hinta *"),r.a.createElement("td",null,r.a.createElement("input",l.withoutReset))),r.a.createElement("tr",null,r.a.createElement("td",{className:"inputinfo"},"Paikkakunta *"),r.a.createElement("td",null,r.a.createElement("input",i.withoutReset))),r.a.createElement("tr",null,r.a.createElement("td",{className:"inputinfo"},"Yhteydenotto **"),r.a.createElement("td",null,r.a.createElement("textarea",m.withoutReset))),r.a.createElement("tr",null,r.a.createElement("td",{className:"inputinfo"},"Kuva"),r.a.createElement("td",null,r.a.createElement("input",{type:"file",onChange:u}))),r.a.createElement("tr",null,r.a.createElement("td",{className:"inputinfo"},"Kuvaus *"),r.a.createElement("td",null,r.a.createElement("textarea",s.withoutReset))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"submit"},"L\xe4het\xe4"))),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"2",className:"smalltext"},"* T\xe4hdell\xe4 merkityt ovat pakollisia tietoja")),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"2",className:"smalltext"},"** S\xe4hk\xf6posti tai puhelinnumero")))))}),m=(a(24),function(e){var t=e.bikes,a=e.bikeInfo;return r.a.createElement("div",{className:"table"},t.map((function(e){return r.a.createElement("table",{className:"bikesdata",key:e.id,value:e.id},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{rowSpan:"2",className:"image"},r.a.createElement("img",{className:"thumbnail",src:e.imgUrl,alt:"bike",onClick:function(){return a(e)}})),r.a.createElement("td",{className:"bikesbrand"},e.brand),r.a.createElement("td",{className:"bikesmodel"},e.model),r.a.createElement("td",{className:"bikesyear"},e.year),r.a.createElement("td",{className:"bikesprice"},e.price,"\u20ac")),r.a.createElement("tr",null,r.a.createElement("td",{className:"bikeslocation"},e.location),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return a(e)}},"Lis\xe4tietoja")))))})))}),d=a(15),p=(a(25),function(e){var t=e.filterBikes,a=e.bikes,n=e.handleBrandChange,l=e.clear,c=a.map((function(e){return e.brand}));c.sort();var u=Object(d.a)(new Set(c));return r.a.createElement("div",{className:"search"},r.a.createElement("h2",null,"Haku"),r.a.createElement("form",{onSubmit:t},r.a.createElement("select",{className:"brand",onChange:n},r.a.createElement("option",{key:"-"},"Merkki"),u.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Hae")," ",r.a.createElement("button",{onClick:l},"Tyhjenn\xe4 haku"))))}),E=(a(26),function(e){var t=e.bike,a=e.backToList,n=e.handleDelete,l=e.username,c=t.imgUrl;return r.a.createElement("div",{className:"onebike"},r.a.createElement("div",null,r.a.createElement("button",{onClick:a},"Takaisin"),null!==l&&l===t.user.username&&r.a.createElement("button",{onClick:function(){return n(t)}},"Poista")),r.a.createElement("br",null),r.a.createElement("div",{className:"headinfo"},r.a.createElement("div",{className:"brandmodelyear"},t.brand," ",t.model," ",t.year),r.a.createElement("div",{className:"price"}," ",t.price,"\u20ac")),r.a.createElement("div",null,r.a.createElement("img",{className:"img",src:c,alt:"a bike"})),r.a.createElement("div",{className:"description"},t.description),r.a.createElement("div",null,"Myyj\xe4: ",t.user.firstname," ",t.user.lastname),r.a.createElement("div",null,"Sijainti: ",t.location),r.a.createElement("div",null,"Yhteydenotto: ",t.contact))}),b=function(e){var t=e.username,a=e.password,n=e.handleLogin;return r.a.createElement("form",{onSubmit:n},r.a.createElement("h2",null,"Kirjaudu sis\xe4\xe4n"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"K\xe4ytt\xe4j\xe4tunnus"),r.a.createElement("td",null,r.a.createElement("input",t.withoutReset))),r.a.createElement("tr",null,r.a.createElement("td",null,"Salasana"),r.a.createElement("td",null,r.a.createElement("input",a.withoutReset))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"submit"},"Kirjaudu sis\xe4\xe4n"))))))},f=function(e){var t=e.username,a=e.password,n=e.firstname,l=e.lastname,c=e.handleRegister;return r.a.createElement("form",{onSubmit:c},r.a.createElement("h2",null,"Rekister\xf6idy"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Etunimi"),r.a.createElement("td",null,r.a.createElement("input",n.withoutReset))),r.a.createElement("tr",null,r.a.createElement("td",null,"Sukunimi"),r.a.createElement("td",null,r.a.createElement("input",l.withoutReset))),r.a.createElement("tr",null,r.a.createElement("td",null,"K\xe4ytt\xe4j\xe4tunnus"),r.a.createElement("td",null,r.a.createElement("input",t.withoutReset))),r.a.createElement("tr",null,r.a.createElement("td",null,"Salasana"),r.a.createElement("td",null,r.a.createElement("input",a.withoutReset))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"submit"},"Rekister\xf6idy"))))))},v=a(4),k=a.n(v),h=null,y=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(k.a.get("/api/bikes"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}))},j=function(e,t){var a,n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a={headers:{Authorization:h}},t.append("type",e.type),t.append("brand",e.brand),t.append("model",e.model),t.append("year",e.year),t.append("price",e.price),t.append("location",e.location),t.append("contact",e.contact),t.append("description",e.description),r.next=11,s.a.awrap(k.a.post("/api/bikes",t,a));case 11:return n=r.sent,r.abrupt("return",n.data);case 13:case"end":return r.stop()}}))},w=function(e){h="bearer ".concat(e)},g=function(e){var t,a;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={headers:{Authorization:h}},n.next=3,s.a.awrap(k.a.delete("".concat("/api/bikes","/").concat(e.id),t));case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}))},N=function(e){var t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(k.a.post("/api/login",e));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}))},x=function(e){var t,a;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={firstname:e.firstname,lastname:e.lastname,username:e.username,password:e.password},n.next=3,s.a.awrap(k.a.post("/api/users",t));case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}))},O=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1],c=function(e){l(e.target.value)};return{type:e,value:r,onChange:c,reset:function(){l("")},withoutReset:{type:e,value:r,onChange:c}}},S=(a(45),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],c=O("text"),u=O("text"),d=O("text"),v=O("text"),k=O("text"),h=O("text"),S=O("text"),R=Object(n.useState)(""),C=Object(i.a)(R,2),K=C[0],T=C[1],L=Object(n.useState)(!1),I=Object(i.a)(L,2),M=I[0],D=I[1],B=Object(n.useState)(""),A=Object(i.a)(B,2),H=A[0],J=A[1],U=Object(n.useState)(!1),P=Object(i.a)(U,2),Y=P[0],z=P[1],F=Object(n.useState)(!1),V=Object(i.a)(F,2),q=V[0],G=V[1],Q=Object(n.useState)("Lis\xe4\xe4 py\xf6r\xe4"),W=Object(i.a)(Q,2),X=W[0],Z=W[1],$=O("text"),_=O("password"),ee=O("text"),te=O("text"),ae=O("text"),ne=O("password"),re=Object(n.useState)(null),le=Object(i.a)(re,2),ce=le[0],ue=le[1],se=Object(n.useState)(!1),ie=Object(i.a)(se,2),oe=ie[0],me=ie[1],de=Object(n.useState)(!1),pe=Object(i.a)(de,2),Ee=pe[0],be=pe[1],fe=Object(n.useState)("Rekister\xf6idy"),ve=Object(i.a)(fe,2),ke=ve[0],he=ve[1],ye=Object(n.useState)("Kirjaudu sis\xe4\xe4n"),je=Object(i.a)(ye,2),we=je[0],ge=je[1],Ne=Object(n.useState)(null),xe=Object(i.a)(Ne,2),Oe=xe[0],Se=xe[1],Re=Object(n.useState)(!0),Ce=Object(i.a)(Re,2),Ke=Ce[0],Te=Ce[1],Le=Object(n.useState)(""),Ie=Object(i.a)(Le,2),Me=Ie[0],De=Ie[1];Object(n.useEffect)((function(){y().then((function(e){l(e)}))}),[]),Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedAppUser");if(e){var t=JSON.parse(e);ue(t),w(t.token)}}),[]);var Be=function(e){J(a.find((function(t){return t.id===e.id}))),z(!0),Te(!1)},Ae=function(e){var t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.a.awrap(g(e));case 3:t=n.sent,console.log("succesfully removed",t),l(a.filter((function(t){return t.id!==e.id}))),z(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("error");case 12:case"end":return n.stop()}}),null,null,[[0,9]])},He=function(){z(!1),Te(!0)};return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"headerbackground"},r.a.createElement("h1",{className:"header"},"Tervetuloa py\xf6r\xe4kauppaan!"),r.a.createElement("p",{className:"info"},"T\xe4m\xe4 on k\xe4ytettyjen py\xf6rien kauppapaikka. T\xe4\xe4lt\xe4 l\xf6yd\xe4t niin k\xe4ytetyt py\xf6r\xe4t, kuin varusteetkin.")),r.a.createElement("div",{className:"buttons"},null===ce&&r.a.createElement("button",{onClick:function(){!1===oe?(me(!0),he("Sulje rekister\xf6intilomake"),Te(!1)):(me(!1),he("Rekister\xf6idy"),Te(!0),be(!1),ge("Kirjaudu sis\xe4\xe4n"))}},ke),null===ce&&r.a.createElement("button",{onClick:function(){!1===Ee?(be(!0),ge("Sulje kirjautumislomake"),Te(!1)):(be(!1),ge("Kirjaudu sis\xe4\xe4n"),Te(!0),me(!1),he("Rekister\xf6idy"))}},we),null!==ce&&!1===Y&&r.a.createElement("button",{onClick:function(){!1===q?(G(!0),Z("Sulje")):(G(!1),Z("Lis\xe4\xe4 py\xf6r\xe4"))}},X),null!==ce&&r.a.createElement("button",{onClick:function(){ue(null),window.localStorage.clear(),ge("Kirjaudu sis\xe4\xe4n")}},"Kirjaudu ulos")),r.a.createElement("div",{className:"logregforms"},!0===oe&&r.a.createElement(f,{username:ae,password:ne,firstname:ee,lastname:te,handleRegister:function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,s.a.awrap(x({firstname:ee.value,lastname:te.value,username:ae.value,password:ne.value}));case 4:ee.reset(),te.reset(),ae.reset(),ne.reset(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log("something missing");case 13:case"end":return t.stop()}}),null,null,[[1,10]])}}),!0===Ee&&r.a.createElement(b,{username:$,password:_,handleLogin:function(e){var t;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),a.prev=1,a.next=4,s.a.awrap(N({username:$.value,password:_.value}));case 4:t=a.sent,window.localStorage.setItem("loggedAppUser",JSON.stringify(t)),w(t.token),ue(t),be(!1),$.reset(),_.reset(),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),console.log("wrong credentials");case 16:case"end":return a.stop()}}),null,null,[[1,13]])}})),r.a.createElement("div",{className:"newbikeform"},!0===q&&r.a.createElement(o,{brand:c,model:u,year:d,price:v,addBike:function(e){var t,n,r;return s.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e.preventDefault(),(t=new FormData).append("File",Oe),n={type:Me,brand:c.value,model:u.value,year:d.value,price:v.value,location:k.value,contact:S.value,description:h.value},i.next=6,s.a.awrap(j(n,t));case 6:r=i.sent,l(a.concat(r)),c.reset(),u.reset(),d.reset(),v.reset(),k.reset(),h.reset(),S.reset(),G(!1),Z("Lis\xe4\xe4 py\xf6r\xe4");case 17:case"end":return i.stop()}}))},handleImage:function(e){Se(e.target.files[0])},location:k,description:h,handleTypeChange:function(e){var t=e.target;De(t.value)},contact:S})),r.a.createElement("div",{className:"filterbikes"},!0===Ke&&r.a.createElement(p,{filterBikes:function(e){e.preventDefault(),D(!0)},bikes:a,handleBrandChange:function(e){var t=e.target;T(t.value),D(!1)},clear:function(e){e.preventDefault(),D(!1)},bikeInfo:Be})),r.a.createElement("div",{className:"bikeslist"},!1===q&&(Y?r.a.createElement(E,{bike:H,backToList:He,handleDelete:Ae,username:null!==ce?ce.username:"testdude"}):!1===M?r.a.createElement(m,{bikes:a,bikeInfo:Be}):!0===M?r.a.createElement(m,{bikes:a.filter((function(e){return e.brand.includes(K)})),bikeInfo:Be}):void 0)),r.a.createElement("div",{className:"footer"},r.a.createElement("p",{className:"footertext"},"Copyright Mikko Paajanen 2020")))});c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.58b5bc9b.chunk.js.map