/* (c) 2008-2012 AddThis, Inc */
if(!((window._atc||{}).ver)){var _atd="www.addthis.com/",_atr="//s7.addthis.com/",_atrc="//c.copyth.is/",_euc=encodeURIComponent,_duc=decodeURIComponent,_atc={dbg:0,rrev:117843,dr:0,ver:250,loc:0,enote:"",cwait:500,bamp:0.25,camp:1,csmp:0.0001,damp:0,famp:0.02,pamp:0.2,tamp:1,lamp:1,plmp:0.00001,vamp:1,vrmp:0.0001,ohmp:0,ltj:1,xamp:1,abf:!!window.addthis_do_ab,qs:0,cdn:0,rsrcs:{bookmark:_atr+"static/r07/bookmark024.html",atimg:_atr+"static/r07/atimg024.html",countercss:_atr+"static/r07/counter006.css",counterIE67css:_atr+"static/r07/counterIE67003.css",counter:_atr+"static/r07/counter005.js",core:_atr+"static/r07/core046.js",wombat:_atr+"static/r07/bar012.js",wombatcss:_atr+"static/r07/bar001.css",qbarcss:_atr+"bannerQuirks.css",fltcss:_atr+"static/r07/floating004.css",barcss:_atr+"static/r07/banner004.css",barjs:_atr+"static/r07/banner001.js",contentcss:_atr+"static/r07/content005C.css",contentjs:_atr+"static/r07/content007.js",copythis:_atrc+"static/r07/copythis00C.js",copythiscss:_atrc+"static/r07/copythis00C.css",ssojs:_atr+"static/r07/ssi004.js",ssocss:_atr+"static/r07/ssi004.css",authjs:_atr+"static/r07/auth008.js",peekaboocss:_atr+"static/r07/peekaboo002.css",overlayjs:_atr+"static/r07/overlay005.js",widget32css:_atr+"static/r07/widgetbig047.css",widget20css:_atr+"static/r07/widgetmed000.css",widgetcss:_atr+"static/r07/widget097.css",widgetIE67css:_atr+"static/r07/widgetIE67005.css",widgetpng:"//s7.addthis.com/static/r07/widget047.png",embed:_atr+"static/r07/embed001.js",link:_atr+"static/r07/link005.html",pinit:_atr+"static/r07/pinit007.html",linkedin:_atr+"static/r07/linkedin020.html",fbshare:_atr+"static/r07/fbshare001.html",tweet:_atr+"static/r07/tweet024.html",menujs:_atr+"static/r07/menu130.js",sh:_atr+"static/r07/sh103.html"}};}(function(){var g;var p=(window.location.protocol=="https:"),D,m,z=(navigator.userAgent||"unk").toLowerCase(),v=(/firefox/.test(z)),o=(/msie/.test(z)&&!(/opera/.test(z))),c={0:_atr,1:"//ct1.addthis.com/",2:"//ct2.addthis.com/",3:"//ct3.addthis.com/",4:"//ct4.addthis.com/",5:"//ct5.addthis.com/",100:"//ct0.addthis.com/"},C={au:"1",hk:"1",is:"1",id:"1",jp:"1",my:"1",ph:"1",sg:"1",kr:"1",ch:"1",tw:"1",th:"1",tr:"1",ru:"1",vn:"1"},E={de:"1",es:"1"},j={no:"1",pl:"1"},f={be:"1",ca:"1",fr:"1",mx:"1",nl:"1",no:"1",pl:"1",gb:"1",us:"1"},n={at:"1",cz:"1",dk:"1",fi:"1",gr:"1",hu:"1",it:"1",pt:"1",ro:"1",se:"1",ua:"1"};_atc.cdn=0;if(!window.addthis||window.addthis.nodeType!==g){try{D=window.navigator?(navigator.userLanguage||navigator.language):"";m=D.split("-").pop().toLowerCase();if(m.length!=2){m="unk";}if(p||_atr.indexOf("-")>-1){}else{if(window.addthis_cdn!==g){_atc.cdn=window.addthis_cdn;}else{if(C[m]){_atc.cdn=5;}else{if(f[m]){_atc.cdn=(v||o)?5:1;}else{if(E[m]){_atc.cdn=(o||(/chrome/.test(z)))?5:1;}else{if(j[m]){_atc.cdn=v?5:1;}else{if(n[m]){_atc.cdn=(o)?5:1;}}}}}}}if(_atc.cdn){for(var y in _atc.rsrcs){if(_atc.rsrcs.hasOwnProperty(y)){_atc.rsrcs[y]=_atc.rsrcs[y].replace(_atr,typeof(window.addthis_cdn)==="string"?window.addthis_cdn:c[_atc.cdn]).replace(/live\/([a-z])07/,"live/$107");}}_atr=c[_atc.cdn];}}catch(A){}function b(r,k,e,a){return function(){if(!this.qs){this.qs=0;}_atc.qs++;if(!((this.qs++>0&&a)||_atc.qs>1000)&&window.addthis){window.addthis.plo.push({call:r,args:arguments,ns:k,ctx:e});}};}function x(k){var e=this,a=this.queue=[];this.name=k;this.call=function(){a.push(arguments);};this.call.queuer=this;this.flush=function(F,s){this.flushed=1;for(var r=0;r<a.length;r++){F.apply(s||e,a[r]);}return F;};}window.addthis={ost:0,cache:{},plo:[],links:[],ems:[],timer:{load:((new Date()).getTime())},_Queuer:x,_queueFor:b,data:{getShareCount:b("getShareCount","data")},bar:{show:b("show","bar"),initialize:b("initialize","bar")},login:{initialize:b("initialize","login"),connect:b("connect","login")},configure:function(r){if(!w.addthis_config){w.addthis_config={};}if(!w.addthis_share){w.addthis_share={};}for(var a in r){if(a=="share"&&typeof(r[a])=="object"){for(var e in r[a]){if(r[a].hasOwnProperty(e)){if(!addthis.ost){w.addthis_share[e]=r[a][e];}else{addthis.update("share",e,r[a][e]);}}}}else{if(r.hasOwnProperty(a)){if(!addthis.ost){w.addthis_config[a]=r[a];}else{addthis.update("config",a,r[a]);}}}}},box:b("box"),button:b("button"),counter:b("counter"),count:b("count"),toolbox:b("toolbox"),update:b("update"),init:b("init"),ad:{menu:b("menu","ad","ad"),event:b("event","ad"),getPixels:b("getPixels","ad")},util:{getServiceName:b("getServiceName")},ready:b("ready"),addEventListener:b("addEventListener","ed","ed"),removeEventListener:b("removeEventListener","ed","ed"),user:{getID:b("getID","user"),getGeolocation:b("getGeolocation","user",null,true),getPreferredServices:b("getPreferredServices","user",null,true),getServiceShareHistory:b("getServiceShareHistory","user",null,true),ready:b("ready","user"),isReturning:b("isReturning","user"),isOptedOut:b("isOptedOut","user"),isUserOf:b("isUserOf","user"),hasInterest:b("hasInterest","user"),isLocatedIn:b("isLocatedIn","user"),interests:b("getInterests","user"),services:b("getServices","user"),location:b("getLocation","user")},session:{source:b("getSource","session"),isSocial:b("isSocial","session"),isSearch:b("isSearch","session")},_pmh:new x("pmh")};var t=document.getElementsByTagName("script")[0];function d(a){a.style.width=a.style.height="1px";a.style.position="absolute";a.style.zIndex=100000;}if(document.location.href.indexOf(_atr)==-1){var q=document.getElementById("_atssh");if(!q){q=document.createElement("div");q.style.visibility="hidden";q.id="_atssh";d(q);t.parentNode.appendChild(q);}function h(a){if(a&&!(a.data||{})["addthisxf"]){if(addthis._pmh.flushed){_ate.pmh(a);}else{addthis._pmh.call(a);}}}if(window.postMessage){if(window.attachEvent){window.attachEvent("onmessage",h);}else{if(window.addEventListener){window.addEventListener("message",h,false);}}}if(!q.firstChild){var i,z=navigator.userAgent.toLowerCase(),u=Math.floor(Math.random()*1000);if(o){q.innerHTML="<iframe id=\"_atssh"+u+"\" width=\"1\" height=\"1\" title=\"AddThis utility frame\" name=\"_atssh"+u+"\" src=\"\">";i=document.getElementById("_atssh"+u);}else{i=document.createElement("iframe");i.id="_atssh"+u;i.title="AddThis utility frame";q.appendChild(i);}d(i);i.frameborder=i.style.border=0;i.style.top=i.style.left=0;_atc._atf=i;}}var B=document.createElement("script");B.type="text/javascript";B.src=(p?"https:":"http:")+_atc.rsrcs.core;t.parentNode.appendChild(B);var l=10000;setTimeout(function(){if(!window.addthis.timer.core){if(Math.random()<_atc.ohmp){(new Image()).src="//m.addthisedge.com/live/t00/oh.gif?"+Math.floor(Math.random()*4294967295).toString(36)+"&cdn="+_atc.cdn+"&sr="+_atc.ohmp+"&rev="+_atc.rrev+"&to="+l;}if(_atc.cdn!==0){var e=document.createElement("script");e.type="text/javascript";e.src=(p?"https:":"http:")+_atr+"static/r07/core046.js";t.parentNode.appendChild(e);}}},l);}})();