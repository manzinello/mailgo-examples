!function(e){var o={};function t(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=o,t.d=function(e,o,a){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(a,n,function(o){return e[o]}.bind(null,n));return a},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=1)}([function(e,o,t){var a;"undefined"!=typeof self&&self,a=function(){return function(){var e={581:function(e){"use strict";e.exports=JSON.parse('{"languages":["en","it","es","de","fr","pt","nl","ru","sv","no","dk","is","zh"],"translations":{"en":{"open_in_":"open in ","cc_":"cc ","bcc_":"bcc ","subject_":"subject ","body_":"body ","gmail":"Gmail","outlook":"Outlook","yahoo":"Yahoo Mail","telegram":"Telegram","whatsapp":"WhatsApp","skype":"Skype","call":"call","open":"open","_default":" default","_as_default":" as default","copy":"copy","copied":"copied"},"it":{"open_in_":"apri con ","bcc_":"ccn ","subject_":"oggetto ","body_":"testo ","call":"chiama","open":"apri","_default":" ","_as_default":" ","copy":"copia","copied":"copiato"},"es":{"open_in_":"abrir con ","bcc_":"cco ","subject_":"asunto ","body_":"cuerpo ","call":"llamar","open":"abrir","_default":" predefinido","_as_default":" por defecto","copy":"copiar","copied":"copiado"},"de":{"open_in_":"Öffnen in ","subject_":"Betreff ","body_":"Nachricht ","call":"Anrufen","open":"Öffnen","_default":" mit Standard","_as_default":" mit Standard","copy":"kopieren","copied":"kopiert"},"pt":{"open_in_":"abrir com ","bcc_":"cco ","subject_":"assunto ","body_":"corpo ","call":"ligar","open":"abrir","_default":" padrão","_as_default":" por padrão","copy":"copiar","copied":"copiado"},"fr":{"open_in_":"Ouvrir dans ","bcc_":"cci ","subject_":"sujet ","body_":"contenu ","call":"Appeler","open":"Ouvrir","_default":" par défaut","_as_default":" par défaut","copy":"Copier","copied":"copié"},"nl":{"subject_":"onderwerp ","body_":"bericht ","call":"bellen","open":"openen","_default":" standaard","_as_default":" als standaard","copy":"kopiëren"},"ru":{"open_in_":"открыть в ","subject_":"тема ","body_":"тело ","call":"позвонить","open":"открыть","_default":" по умолчанию","_as_default":" по умолчанию","copy":"скопировать"},"sv":{"open_in_":"öppna i ","subject_":"ämne ","body_":"meddelandetext ","call":"ring","open":"öppna","_default":" förval","_as_default":" som förval","copy":"kopiera","copied":"kopierad"},"no":{"open_in_":"åpne i ","subject_":"emne ","call":"ringe","open":"åpne","_as_default":" som standard","copy":"kopiere","copied":"kopiert"},"dk":{"open_in_":"åpne i ","subject_":"emne ","call":"ringe op","open":"åben","_as_default":" som standard","copy":"kopi","copied":"kopieret"},"is":{"open_in_":"opið inn ","subject_":"viðfangsefni ","body_":"líkami ","call":"hringja","open":"opið","_default":" sjálfgefið","_as_default":" sem sjálfgefið","copy":"afrita","copied":"afritað"},"zh":{"open_in_":"開啟 ","cc_":"副本 ","bcc_":"密件副本 ","subject_":"主旨 ","body_":"內文 ","call":"通話","open":"開啟","_default":" 預設","_as_default":" 預設","copy":"複製","copied":"已複製"}}}')},495:function(e,o,t){"use strict";t.r(o),t.d(o,{MAILTO:function(){return a},MAILGO:function(){return n},TEL:function(){return d},CALLTO:function(){return l},SMS:function(){return i},outlookDeepLink:function(){return r},NO_MAILGO:function(){return c},MAILGO_MAIL:function(){return m},MAILGO_TEL:function(){return s},spanHTMLTag:function(){return p},aHTMLTag:function(){return u},pHTMLTag:function(){return f},defaultLang:function(){return g},mailgoReadyTag:function(){return v},mailgoRenderTag:function(){return b}});var a="mailto:",n="mailgo:",d="tel:",l="callto:",i="sms:",r="ms-outlook://",c="no-mailgo",m="mailgo",s="mailgo-tel",p="span",u="a",f="p",g="en",v="mailgo-ready",b="mailgo-render"},434:function(e,o,t){"use strict";t.r(o),t.d(o,{validateEmail:function(){return a},validateEmails:function(){return n},validateTel:function(){return d},copyToClipboard:function(){return l},setFocusLoop:function(){return i},leaveLastLink:function(){return r},leaveFirstLink:function(){return c}});var a=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},n=function(e){return e.every(a)},d=function(e){return/^[+]{0,1}[\s0-9]{0,}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(e)},l=function(e){var o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style.position="absolute",o.style.left="-9999px",document.body.appendChild(o);var t=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);return o.select(),document.execCommand("copy"),document.body.removeChild(o),!!t&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(t),!0)},i=function(e){var o=e;o.querySelector(".m-modal-content a:last-of-type").addEventListener("keydown",r),o.querySelector(".m-modal-content a:first-of-type").addEventListener("keydown",c)},r=function(e){"Tab"===e.code&&!1===e.shiftKey&&(e.preventDefault(),e.target.closest("div").querySelector("a:first-of-type").focus())},c=function(e){"Tab"===e.code&&!0===e.shiftKey&&(e.preventDefault(),e.target.closest("div").querySelector("a:last-of-type").focus())}},91:function(e,o,t){var a=t(476)((function(e){return e[1]}));a.push([e.id,'.m-modal{position:fixed;top:0;right:0;bottom:0;left:0;justify-content:center;align-items:center;flex-direction:column;overflow:hidden;font-size:16.5px;z-index:10000}.m-modal p,.m-modal span,.m-modal strong,.m-modal a{margin:0;padding:0;font-size:100%;line-height:1;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";text-rendering:optimizeLegibility}.m-modal strong{font-weight:700}.m-modal .m-modal-back{position:absolute;z-index:10001;top:0;right:0;bottom:0;left:0;background-color:#20232a;opacity:0.8}.m-modal .m-modal-content{position:relative;z-index:10002;box-sizing:content-box;text-align:center;min-width:200px;max-width:240px;background-color:#fff;opacity:0.95;border-radius:20px;box-shadow:0 3px 20px rgba(32,35,42,0.5);color:#4a4a4a;display:flex;flex-direction:column;overflow:auto;padding:24px;transition:0.5s box-shadow}.m-modal .m-modal-content:hover,.m-modal .m-modal-content:focus,.m-modal .m-modal-content:active{opacity:1}.m-modal .m-modal-content .m-title{margin-bottom:8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:1.2em}.m-modal .m-modal-content .m-details{margin-bottom:10px}.m-modal .m-modal-content .m-details p{font-size:12px;margin-top:3px;margin-bottom:3px}.m-modal .m-modal-content a{cursor:pointer;padding:10px;color:#4a4a4a;border-radius:20px;text-decoration:none}.m-modal .m-modal-content a.m-gmail{color:#c0372a}.m-modal .m-modal-content a.m-gmail:hover,.m-modal .m-modal-content a.m-gmail:focus,.m-modal .m-modal-content a.m-gmail:active{background-color:rgba(192,55,42,0.08);color:#c0372a}.m-modal .m-modal-content a.m-outlook{color:#0967aa}.m-modal .m-modal-content a.m-outlook:hover,.m-modal .m-modal-content a.m-outlook:focus,.m-modal .m-modal-content a.m-outlook:active{background-color:rgba(9,103,170,0.08);color:#0967aa}.m-modal .m-modal-content a.m-yahoo{color:#4a00a0}.m-modal .m-modal-content a.m-yahoo:hover,.m-modal .m-modal-content a.m-yahoo:focus,.m-modal .m-modal-content a.m-yahoo:active{background-color:rgba(74,0,160,0.08);color:#4a00a0}.m-modal .m-modal-content a.m-tg{color:#086da0}.m-modal .m-modal-content a.m-tg:hover,.m-modal .m-modal-content a.m-tg:focus,.m-modal .m-modal-content a.m-tg:active{background-color:rgba(8,109,160,0.08);color:#086da0}.m-modal .m-modal-content a.m-wa{color:#067466}.m-modal .m-modal-content a.m-wa:hover,.m-modal .m-modal-content a.m-wa:focus,.m-modal .m-modal-content a.m-wa:active{background-color:rgba(6,116,102,0.08);color:#067466}.m-modal .m-modal-content a.m-skype{color:#076d92}.m-modal .m-modal-content a.m-skype:hover,.m-modal .m-modal-content a.m-skype:focus,.m-modal .m-modal-content a.m-skype:active{background-color:rgba(7,109,146,0.08);color:#076d92}.m-modal .m-modal-content a.m-copy{padding:16px 10px;font-size:16px}.m-modal .m-modal-content a.m-default:hover,.m-modal .m-modal-content a.m-default:focus,.m-modal .m-modal-content a.m-default:active,.m-modal .m-modal-content a.m-copy:hover,.m-modal .m-modal-content a.m-copy:focus,.m-modal .m-modal-content a.m-copy:active{background-color:rgba(0,0,0,0.08);color:#4a4a4a}.m-modal .m-modal-content a.m-by{font-size:12px;margin-top:0.8rem;padding:5px;color:#4a4a4a}.m-modal .m-modal-content a.m-by:hover,.m-modal .m-modal-content a.m-by:focus,.m-modal .m-modal-content a.m-by:active{color:#3d3d3d}.m-modal .m-modal-content .w-500{font-weight:500}.m-modal.m-dark .m-modal-content{background-color:#20232a}.m-modal.m-dark .m-modal-content,.m-modal.m-dark .m-modal-content p,.m-modal.m-dark .m-modal-content p span,.m-modal.m-dark .m-modal-content strong{color:#fff}.m-modal.m-dark .m-modal-content a{color:#eaeaea}.m-modal.m-dark .m-modal-content a:not(.m-by):hover,.m-modal.m-dark .m-modal-content a:not(.m-by):focus,.m-modal.m-dark .m-modal-content a:not(.m-by):active{background-color:rgba(134,134,134,0.08);color:#eaeaea}.m-modal.m-dark .m-modal-content a.m-gmail{color:#e07d73}.m-modal.m-dark .m-modal-content a.m-gmail:hover,.m-modal.m-dark .m-modal-content a.m-gmail:focus,.m-modal.m-dark .m-modal-content a.m-gmail:active{background-color:rgba(224,125,115,0.08);color:#e07d73}.m-modal.m-dark .m-modal-content a.m-outlook{color:#4c9cd7}.m-modal.m-dark .m-modal-content a.m-outlook:hover,.m-modal.m-dark .m-modal-content a.m-outlook:focus,.m-modal.m-dark .m-modal-content a.m-outlook:active{background-color:rgba(76,156,215,0.08);color:#4c9cd7}.m-modal.m-dark .m-modal-content a.m-yahoo{color:#ac88d3}.m-modal.m-dark .m-modal-content a.m-yahoo:hover,.m-modal.m-dark .m-modal-content a.m-yahoo:focus,.m-modal.m-dark .m-modal-content a.m-yahoo:active{background-color:rgba(172,136,211,0.08);color:#ac88d3}.m-modal.m-dark .m-modal-content a.m-tg{color:#4cabdb}.m-modal.m-dark .m-modal-content a.m-tg:hover,.m-modal.m-dark .m-modal-content a.m-tg:focus,.m-modal.m-dark .m-modal-content a.m-tg:active{background-color:rgba(76,171,219,0.08);color:#4cabdb}.m-modal.m-dark .m-modal-content a.m-wa{color:#4cd2c0}.m-modal.m-dark .m-modal-content a.m-wa:hover,.m-modal.m-dark .m-modal-content a.m-wa:focus,.m-modal.m-dark .m-modal-content a.m-wa:active{background-color:rgba(76,210,192,0.08);color:#4cd2c0}.m-modal.m-dark .m-modal-content a.m-skype{color:#4cc7f4}.m-modal.m-dark .m-modal-content a.m-skype:hover,.m-modal.m-dark .m-modal-content a.m-skype:focus,.m-modal.m-dark .m-modal-content a.m-skype:active{background-color:rgba(76,199,244,0.08);color:#4cc7f4}.m-modal.m-dark .m-modal-content a.m-by:hover,.m-modal.m-dark .m-modal-content a.m-by:focus,.m-modal.m-dark .m-modal-content a.m-by:active{color:#fff}\n',""]),e.exports=a},476:function(e){"use strict";e.exports=function(e){var o=[];return o.toString=function(){return this.map((function(o){var t=e(o);return o[2]?"@media ".concat(o[2]," {").concat(t,"}"):t})).join("")},o.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(a)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(n[l]=!0)}for(var i=0;i<e.length;i++){var r=[].concat(e[i]);a&&n[r[0]]||(t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),o.push(r))}},o}},801:function(e,o,t){var a=t(91);e.exports="string"==typeof a?a:a.toString()},851:function(e,o,t){"use strict";function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){d(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function d(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}t.r(o),t.d(o,{default:function(){return Ve},getMailgoTypeByElement:function(){return Re},mailgoCheckRender:function(){return he},mailgoDirectRender:function(){return ke},mailgoPreRender:function(){return _e},mailgoRender:function(){return we}});var l,i,r,c,m,s,p,u,f,g,v,b,y,h,_,k,w,C,L,x,j,E,A,O,T,S,M,R,I,N,D,P,U,z,H,B,G,F=t(495),q=F.MAILTO,K=F.MAILGO,W=F.TEL,Z=F.CALLTO,$=F.SMS,J=F.MAILGO_MAIL,Y=F.MAILGO_TEL,Q=F.NO_MAILGO,V=F.spanHTMLTag,X=F.aHTMLTag,ee=F.pHTMLTag,oe=F.defaultLang,te=t(434),ae=te.validateEmails,ne=te.validateTel,de=te.copyToClipboard,le=te.setFocusLoop,ie=t(581),re=t(801).toString(),ce=ie.translations,me=oe,se=ce[oe],pe=!0,ue=!0,fe=!0,ge=!0,ve=!0,be=!0,ye=function(){if(!document.getElementById(J)){var e,o;(r=ze()).style.display="none",r.id=J,r.classList.add("m-modal"),r.setAttribute("role","dialog"),r.setAttribute("tabindex","-1"),r.setAttribute("aria-labelledby","m-title"),Ye(),(null===(e=i)||void 0===e?void 0:e.dark)?We(J):Ze(J);var t=ze();t.className="m-modal-back",r.appendChild(t);var a=ze();a.className="m-modal-content",r.appendChild(a),(_=ze("strong")).id="m-title",_.className="m-title",a.appendChild(_);var n=ze();n.id="m-details",n.className="m-details",(w=ze(ee)).id="m-cc";var d=ze(V);d.className="w-500",d.appendChild(He(l.cc_||se.cc_)),(E=ze(V)).id="m-cc-value",w.appendChild(d),w.appendChild(E),n.appendChild(w),(C=ze(ee)).id="m-bcc";var m=ze(V);m.className="w-500",m.appendChild(He(l.bcc_||se.bcc_)),(A=ze(V)).id="m-bcc-value",C.appendChild(m),C.appendChild(A),n.appendChild(C),(L=ze(ee)).id="m-subject";var s=ze(V);s.className="w-500",s.appendChild(He(l.subject_||se.subject_)),(O=ze(V)).id="m-subject-value",L.appendChild(s),L.appendChild(O),n.appendChild(L),(x=ze(ee)).id="m-body";var p=ze(V);p.className="w-500",p.appendChild(He(l.body_||se.body_)),(T=ze(V)).id="m-body-value",x.appendChild(p),x.appendChild(T),n.appendChild(x),a.appendChild(n),(R=ze(X)).id="m-gmail",R.href="#mailgo-gmail",R.classList.add("m-open"),R.classList.add("m-gmail"),R.appendChild(He(l.open_in_||se.open_in_));var u=ze(V);u.className="w-500",u.appendChild(He(l.gmail||se.gmail)),R.appendChild(u),Je("gmail")&&a.appendChild(R),(I=ze(X)).id="m-outlook",I.href="#mailgo-outlook",I.classList.add("m-open"),I.classList.add("m-outlook"),I.appendChild(He(l.open_in_||se.open_in_));var f=ze(V);f.className="w-500",f.appendChild(He(l.outlook||se.outlook)),I.appendChild(f),Je("outlook")&&a.appendChild(I),(N=ze(X)).id="m-yahoo",N.href="#mailgo-yahoo",N.classList.add("m-open"),N.classList.add("m-yahoo"),N.appendChild(He(l.open_in_||se.open_in_));var g=ze(V);g.className="w-500",g.appendChild(He(l.yahoo||se.yahoo)),N.appendChild(g),Je("yahoo")&&a.appendChild(N),(D=ze(X)).id="m-open",D.href="#mailgo-open",D.classList.add("m-open"),D.classList.add("m-default");var v=ze(V);v.className="w-500",v.appendChild(He(l.open||se.open)),D.appendChild(v),D.appendChild(He(l._default||se._default)),a.appendChild(D),(B=ze(X)).id="m-copy",B.href="#mailgo-copy",B.classList.add("m-copy"),B.classList.add("w-500"),B.appendChild(He(l.copy||se.copy)),a.appendChild(B),void 0!==(null===(o=i)||void 0===o?void 0:o.showFooter)&&(ve=i.showFooter),ve&&a.appendChild(Ue()),document.body.appendChild(r),t.addEventListener("click",De)}if(!document.getElementById(Y)){var b,y;(c=ze()).style.display="none",c.id=Y,c.classList.add("m-modal"),c.setAttribute("role","dialog"),c.setAttribute("tabindex","-1"),c.setAttribute("aria-labelledby","m-tel-title"),(null===(b=i)||void 0===b?void 0:b.dark)?We(Y):Ze(Y);var h=ze();h.className="m-modal-back",c.appendChild(h);var M=ze();M.className="m-modal-content",c.appendChild(M),(k=ze("strong")).id="m-tel-title",k.className="m-title",M.appendChild(k);var F=ze();F.id="m-tel-details",F.className="m-details",(j=ze(ee)).id="m-msg";var q=ze(V);q.className="w-500",q.appendChild(He(l.body_||se.body_)),(S=ze(V)).id="m-msg-value",j.appendChild(q),j.appendChild(S),F.appendChild(j),M.appendChild(F),(P=ze(X)).id="m-tg",P.href="#mailgo-telegram",P.classList.add("m-open"),P.classList.add("m-tg"),P.style.display="none",P.appendChild(He(l.open_in_||se.open_in_));var K=ze(V);K.className="w-500",K.appendChild(He(l.telegram||se.telegram)),P.appendChild(K),Je("telegram")&&M.appendChild(P),(U=ze(X)).id="m-wa",U.href="#mailgo-whatsapp",U.classList.add("m-open"),U.classList.add("m-wa"),U.appendChild(He(l.open_in_||se.open_in_));var W=ze(V);W.className="w-500",W.appendChild(He(l.whatsapp||se.whatsapp)),U.appendChild(W),Je("whatsapp")&&M.appendChild(U),(z=ze(X)).id="m-skype",z.href="#mailgo-skype",z.classList.add("m-open"),z.classList.add("m-skype"),z.appendChild(He(l.open_in_||se.open_in_));var Z=ze(V);Z.className="w-500",Z.appendChild(He(l.skype||se.skype)),z.appendChild(Z),Je("skype")&&M.appendChild(z),(H=ze(X)).id="m-call",H.href="#mailgo-open",H.classList.add("m-open"),H.classList.add("m-default");var $=ze(V);$.className="w-500",$.appendChild(He(l.call||se.call)),H.appendChild($),H.appendChild(He(l._as_default||se._as_default)),M.appendChild(H),(G=ze(X)).id="m-tel-copy",G.href="#mailgo-copy",G.classList.add("m-copy"),G.classList.add("w-500"),G.appendChild(He(l.copy||se.copy)),M.appendChild(G),void 0!==(null===(y=i)||void 0===y?void 0:y.showFooter)&&(ve=i.showFooter),ve&&M.appendChild(Ue()),document.body.appendChild(c),h.addEventListener("click",De)}document.addEventListener("click",he)};function he(e){if(!document.body.contains(r)||!document.body.contains(c))return!1;if(Pe(J)||Pe(Y))return!1;var o=e.composedPath&&e.composedPath()||$e(e.target);return o&&o.forEach((function(o){return!(o instanceof HTMLDocument||o instanceof Window)&&(pe&&Re(o)===J?(e.preventDefault(),_e(J,o),!0):ue&&Re(o)==Y?(e.preventDefault(),_e(Y,o),!0):void 0)})),!1}function _e(){var e,o,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,n=arguments.length>1?arguments[1]:void 0;if("string"==typeof n?o=n:(o=n.href,t=n),!o)return!1;if(a===J){var d;if(Me(o,q)||Me(o,K)){Me(o,q)?m=decodeURIComponent(o.split("?")[0].split(q)[1].trim()):Me(o,K)&&(m=decodeURIComponent(o.split("?")[0].split(K)[1].trim()));try{var l=new URL(o).searchParams;p=l.get("cc"),u=l.get("bcc"),f=l.get("subject"),g=l.get("body")}catch(e){return!1}}else{m=t.getAttribute("data-address")+"@"+t.getAttribute("data-domain");try{new URL(q+encodeURIComponent(m))}catch(e){return!1}p=t.getAttribute("data-cc-address")+"@"+t.getAttribute("data-cc-domain"),u=t.getAttribute("data-bcc-address")+"@"+t.getAttribute("data-bcc-domain"),f=t.getAttribute("data-subject"),g=t.getAttribute("data-body")}if(void 0!==(null===(d=i)||void 0===d?void 0:d.validateEmail)&&(fe=i.validateEmail),fe){if(!ae(m.split(",")))return!1;p&&!ae(p.split(","))&&(p=""),u&&!ae(u.split(","))&&(u="")}}else if(a===Y){var r;if(Me(o,W))v=decodeURIComponent(o.split("?")[0].split(W)[1].trim());else if(Me(o,Z))v=decodeURIComponent(o.split("?")[0].split(Z)[1].trim());else if(Me(o,$)){v=decodeURIComponent(o.split("?")[0].split($)[1].trim());try{var c=new URL(o).searchParams;b=c.get("body")}catch(e){return!1}}else t.hasAttribute("data-tel")&&(v=t.getAttribute("data-tel"),b=t.getAttribute("data-msg"));if(void 0!==(null===(r=i)||void 0===r?void 0:r.validateTel)&&(ge=i.validateTel),ge&&!ne(v))return;y=t&&t.hasAttribute("data-telegram")?t.getAttribute("data-telegram"):null,h=t&&t.hasAttribute("data-skype")?t.getAttribute("data-skype"):null}return t&&!(null===(e=i)||void 0===e?void 0:e.dark)&&(t.classList.contains("dark")?We(a):Ze(a)),we(a),!0}function ke(e){return Qe(),Me(e,q)||Me(e,K)?(new URL(e),_e(J,e),!0):!!(Me(e,W)||Me(e,Z)||Me(e,$))&&(new URL(e),_e(Y,e),!0)}function we(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;return e===J?(_.innerHTML=m.split(",").join("<br/>"),p?(w.style.display="block",E.innerHTML=p.split(",").join("<br/>")):w.style.display="none",u?(C.style.display="block",A.innerHTML=u.split(",").join("<br/>")):C.style.display="none",f?(L.style.display="block",O.textContent=f):L.style.display="none",g?(x.style.display="block",T.textContent=g):x.style.display="none",R.addEventListener("click",Ce),I.addEventListener("click",Le),N.addEventListener("click",xe),s=Ge(m),D.addEventListener("click",je),B.addEventListener("click",(function(e){e.preventDefault(),Se(m)}))):e===Y&&(k.innerHTML=v,b?(j.style.display="block",S.textContent=b):j.style.display="none",U.addEventListener("click",Oe),y?(document.getElementById("m-tg").style.display="block",P.addEventListener("click",Ee)):document.getElementById("m-tg").style.display="none",z.addEventListener("click",Ae),H.addEventListener("click",Te),G.addEventListener("click",(function(e){e.preventDefault(),Se(v)}))),Ne(e),document.addEventListener("keydown",Ie),!0}var Ce=function(e){e.preventDefault();var o="https://mail.google.com/mail/u/0/?view=cm&source=mailto&to="+encodeURIComponent(m);p&&(o=o.concat("&cc="+encodeURIComponent(p))),u&&(o=o.concat("&bcc="+encodeURIComponent(u))),f&&(o=o.concat("&subject="+f)),g&&(o=o.concat("&body="+g)),window.open(o,"_blank","noopener, noreferrer"),De()},Le=function(e){e.preventDefault();var o="https://outlook.live.com/owa/?path=/mail/action/compose&to="+encodeURIComponent(m);f&&(o=o.concat("&subject="+f)),g&&(o=o.concat("&body="+g)),window.open(o,"_blank","noopener, noreferrer"),De()},xe=function(e){e.preventDefault();var o="https://compose.mail.yahoo.com/?to="+encodeURIComponent(m);f&&(o=o.concat("&subject="+f)),g&&(o=o.concat("&body="+g)),window.open(o,"_blank","noopener, noreferrer"),De()},je=function(e){e.preventDefault(),Be(s),De()},Ee=function(e){if(e.preventDefault(),y){var o="https://t.me/"+y;window.open(o,"_blank","noopener, noreferrer"),De()}},Ae=function(e){e.preventDefault();var o="skype:"+(h||v);window.open(o,"_blank","noopener, noreferrer"),De()},Oe=function(e){e.preventDefault();var o="https://wa.me/"+v;window.open(o,"_blank","noopener, noreferrer"),De()},Te=function(e){e.preventDefault();var o=W+v;window.open(o),De()},Se=function(e){var o;de(e),(o=Pe(J)?B:G).textContent=l.copied||se.copied,setTimeout((function(){o.textContent=l.copy||se.copy,De()}),999)},Me=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:q,t=new RegExp("^"+o,"gi");return t.test(e)};function Re(e){var o=e.href;return o&&(Me(o,q)||Me(o,K))&&!e.classList.contains(Q)||e.hasAttribute("data-address")&&(o&&"#mailgo"===e.getAttribute("href").toLowerCase()||e.classList&&e.classList.contains("mailgo"))?J:o&&(Me(o,W)||Me(o,Z)||Me(o,$))&&!e.classList.contains(Q)||e.hasAttribute("data-tel")&&o&&"#mailgo"===e.getAttribute("href").toLowerCase()||e.classList&&e.classList.contains("mailgo")?Y:null}var Ie=function(e){if(Pe(J))switch(e.keyCode){case 27:return De(),!0;case 71:return Ce(),!0;case 79:return Le(),!0;case 89:return xe(),!0;case 32:case 13:return je(),!0;case 67:return Se(m),!0;default:return!1}else if(Pe(Y))switch(e.keyCode){case 27:return De(),!0;case 84:return Ee(),!0;case 87:return Oe(),!0;case 83:return Ae(),!0;case 32:case 13:return Te(),!0;case 67:return Se(v),!0;default:return!1}return!1},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;Ke(e,"flex")},De=function(){Ke(J,"none"),Ke(Y,"none"),document.removeEventListener("keydown",Ie)},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;return"flex"===qe(e)},Ue=function(){var e=ze(X);return e.href="https://mailgo.dev?ref=mailgo-modal",e.className="m-by",e.target="_blank",e.rel="noopener noreferrer",e.appendChild(He("mailgo.dev")),e},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div";return document.createElement(e)},He=function(e){return document.createTextNode(e)},Be=function(e){return window.location.href=q+atob(e)},Ge=function(e){return btoa(e)},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;return e===Y?c:r},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;return Fe(e).style.display},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,o=arguments.length>1?arguments[1]:void 0,t=Fe(e);t.style.display=o,"flex"===o?(M=document.activeElement,t.setAttribute("aria-hidden","false"),t.setAttribute("tabindex","0"),t.focus(),le(t)):(t.setAttribute("aria-hidden","true"),t.setAttribute("tabindex","-1"),M.focus())},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;return Fe(e).classList.add("m-dark")},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J;return Fe(e).classList.remove("m-dark")},$e=function(e){for(var o=[];e;){if(o.push(e),"HTML"===e.tagName)return o.push(document),o.push(window),o;e=e.parentElement}},Je=function(e){var o,t;return!(i&&(!i||(null===(o=i)||void 0===o?void 0:o.actions))&&i&&i.actions&&!1===(null===(t=i)||void 0===t?void 0:t.actions[e]))},Ye=function(){var e,o="default lang";if((null===(e=i)||void 0===e?void 0:e.lang)&&-1!==ie.languages.indexOf(i.lang))me=i.lang,o="config lang";else{var t=document.documentElement.lang;ie.languages.forEach((function(e){new RegExp("^"+e,"gi").test(t)&&(me=t,o="html lang")}))}return l=ce[me],o};function Qe(e){try{var o,t,a,d,l,r,c;if(i=n(n({},e),(null===(o=window)||void 0===o?void 0:o.mailgoConfig)||null),window&&"undefined"!=typeof window)return void 0!==(null===(t=i)||void 0===t?void 0:t.loadCSS)&&(be=i.loadCSS),void 0!==(null===(a=i)||void 0===a?void 0:a.mailto)&&(pe=i.mailto),void 0!==(null===(d=i)||void 0===d?void 0:d.tel)&&(ue=i.tel),void 0!==(null===(l=i)||void 0===l?void 0:l.sms)&&i.sms,be&&function(){if(!document.getElementById("mailgo-style")){var e=ze("style");e.id="mailgo-style",e.type="text/css",e.appendChild(He(re)),document.head.appendChild(e)}}(),(null===(r=i)||void 0===r?void 0:r.initEvent)?(null===(c=i)||void 0===c?void 0:c.listenerOptions)?document.addEventListener(i.initEvent,ye,i.listenerOptions):document.addEventListener(i.initEvent,ye):ye(),!0}catch(e){return!1}return!1}window&&"undefined"!=typeof window&&(window.getMailgoTypeByElement=Re,window.mailgoCheckRender=he,window.mailgoPreRender=_e,window.mailgoDirectRender=ke,window.mailgoRender=we,window.mailgo=Qe);var Ve=Qe}},o={};function t(a){if(o[a])return o[a].exports;var n=o[a]={id:a,exports:{}};return e[a](n,n.exports,t),n.exports}return t.d=function(e,o){for(var a in o)t.o(o,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(851)}()},e.exports=a()},function(e,o,t){"use strict";t.r(o);var a=t(0);t.n(a)()(),document.getElementById("direct-button").addEventListener("click",()=>{Object(a.mailgoDirectRender)("mailto:matteo@manzinello.dev")}),document.getElementById("direct-button-tel").addEventListener("click",()=>{Object(a.mailgoDirectRender)("tel:123456789")})}]);