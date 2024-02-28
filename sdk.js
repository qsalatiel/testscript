"use strict";const U="palattine",w="__PALATTINE_CONFIG__",J={palattineFingerPrintId:"__plttfid"},M={palattineUserId:"pltt",palattineEmail:"email",palattinePhone:"phone",utmSource:"utm_source",utmCampaign:"utm_campaign",utmMedium:"utm_medium",utmContent:"utm_content",utmTerm:"utm_term"},cr="https://app.palattine.com.br/api",dr=`${cr}/eventos`;var _=(o=>(o.SETUP="palattine",o.PING="ping",o.IDENTIFY="identify",o.PAGEVIEW="pageview",o.LEAD="lead",o.GET_CONFIG="get_config",o))(_||{});function gr(){if(typeof window.ga=="function"){const o=window.ga.getAll()[0];if(o)return o.get("clientId")}return null}function vr(o){try{const f=new URL(o);return`${f.protocol}//${f.host}${f.pathname}`}catch{return window.location.href}}function hr(){let o="Unknown OS";return navigator.userAgent.indexOf("Win")!=-1&&(o="Windows"),navigator.userAgent.indexOf("Mac")!=-1&&(o="MacOS"),navigator.userAgent.indexOf("X11")!=-1&&(o="UNIX"),navigator.userAgent.indexOf("Linux")!=-1&&(o="Linux"),o}function pr(){var o=navigator.userAgent,f=navigator.appName,u=""+parseFloat(navigator.appVersion),g=parseInt(navigator.appVersion,10),v,l,S;return(l=o.indexOf("OPR/"))!=-1?(f="Opera",u=o.substring(l+4)):(l=o.indexOf("Opera"))!=-1?(f="Opera",u=o.substring(l+6),(l=o.indexOf("Version"))!=-1&&(u=o.substring(l+8))):(l=o.indexOf("MSIE"))!=-1?(f="Microsoft Internet Explorer",u=o.substring(l+5)):(l=o.indexOf("Chrome"))!=-1?(f="Chrome",u=o.substring(l+7)):(l=o.indexOf("Safari"))!=-1?(f="Safari",u=o.substring(l+7),(l=o.indexOf("Version"))!=-1&&(u=o.substring(l+8))):(l=o.indexOf("Firefox"))!=-1?(f="Firefox",u=o.substring(l+8)):(v=o.lastIndexOf(" ")+1)<(l=o.lastIndexOf("/"))&&(f=o.substring(v,l),u=o.substring(l+1),f.toLowerCase()==f.toUpperCase()&&(f=navigator.appName)),(S=u.indexOf(";"))!=-1&&(u=u.substring(0,S)),(S=u.indexOf(" "))!=-1&&(u=u.substring(0,S)),g=parseInt(""+u,10),isNaN(g)&&(u=""+parseFloat(navigator.appVersion),g=parseInt(navigator.appVersion,10)),{browserName:f,fullVersion:u}}function mr(o){const f=o[w],u=f.originUrl?new URL(f.originUrl).searchParams:new URLSearchParams;return{browser:pr().browserName,device:hr(),url:f.originUrl?vr(f.originUrl):null,ga4_client_id:gr(),utm_campaign:u.get(M.utmCampaign),utm_content:u.get(M.utmContent),utm_medium:u.get(M.utmMedium),utm_source:u.get(M.utmSource),utm_term:u.get(M.utmTerm)}}function Y(o,f){return u=>{const g=u[w];if(!g.fId)return console.error(`cant send event [${o}] without fId`);const v={event_name:o,user:{fingerprint:g.fId,id:g.uId,email:g.email,phone:g.phone},tracking:mr(u),metadata:f?Object.keys(f).map(l=>({key:l,value:f[l]})):void 0};fetch(`${dr}/${g.cId}/`,{body:JSON.stringify(v),method:"POST",headers:{"Content-Type":"application/json"}}).then(l=>console.log(l)).catch(l=>console.error(l))}}var Tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ar(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Q={exports:{}};(function(o){(function(f,u,g){typeof window<"u",o.exports?o.exports=g():u.exports?u.exports=g():u[f]=g()})("Fingerprint2",Tr,function(){typeof Array.isArray>"u"&&(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});var f=function(e,r){e=[e[0]>>>16,e[0]&65535,e[1]>>>16,e[1]&65535],r=[r[0]>>>16,r[0]&65535,r[1]>>>16,r[1]&65535];var t=[0,0,0,0];return t[3]+=e[3]+r[3],t[2]+=t[3]>>>16,t[3]&=65535,t[2]+=e[2]+r[2],t[1]+=t[2]>>>16,t[2]&=65535,t[1]+=e[1]+r[1],t[0]+=t[1]>>>16,t[1]&=65535,t[0]+=e[0]+r[0],t[0]&=65535,[t[0]<<16|t[1],t[2]<<16|t[3]]},u=function(e,r){e=[e[0]>>>16,e[0]&65535,e[1]>>>16,e[1]&65535],r=[r[0]>>>16,r[0]&65535,r[1]>>>16,r[1]&65535];var t=[0,0,0,0];return t[3]+=e[3]*r[3],t[2]+=t[3]>>>16,t[3]&=65535,t[2]+=e[2]*r[3],t[1]+=t[2]>>>16,t[2]&=65535,t[2]+=e[3]*r[2],t[1]+=t[2]>>>16,t[2]&=65535,t[1]+=e[1]*r[3],t[0]+=t[1]>>>16,t[1]&=65535,t[1]+=e[2]*r[2],t[0]+=t[1]>>>16,t[1]&=65535,t[1]+=e[3]*r[1],t[0]+=t[1]>>>16,t[1]&=65535,t[0]+=e[0]*r[3]+e[1]*r[2]+e[2]*r[1]+e[3]*r[0],t[0]&=65535,[t[0]<<16|t[1],t[2]<<16|t[3]]},g=function(e,r){return r%=64,r===32?[e[1],e[0]]:r<32?[e[0]<<r|e[1]>>>32-r,e[1]<<r|e[0]>>>32-r]:(r-=32,[e[1]<<r|e[0]>>>32-r,e[0]<<r|e[1]>>>32-r])},v=function(e,r){return r%=64,r===0?e:r<32?[e[0]<<r|e[1]>>>32-r,e[1]<<r]:[e[1]<<r-32,0]},l=function(e,r){return[e[0]^r[0],e[1]^r[1]]},S=function(e){return e=l(e,[0,e[0]>>>1]),e=u(e,[4283543511,3981806797]),e=l(e,[0,e[0]>>>1]),e=u(e,[3301882366,444984403]),e=l(e,[0,e[0]>>>1]),e},P=function(e,r){e=e||"",r=r||0;for(var t=e.length%16,a=e.length-t,n=[0,r],i=[0,r],s=[0,0],c=[0,0],p=[2277735313,289559509],m=[1291169091,658871167],d=0;d<a;d=d+16)s=[e.charCodeAt(d+4)&255|(e.charCodeAt(d+5)&255)<<8|(e.charCodeAt(d+6)&255)<<16|(e.charCodeAt(d+7)&255)<<24,e.charCodeAt(d)&255|(e.charCodeAt(d+1)&255)<<8|(e.charCodeAt(d+2)&255)<<16|(e.charCodeAt(d+3)&255)<<24],c=[e.charCodeAt(d+12)&255|(e.charCodeAt(d+13)&255)<<8|(e.charCodeAt(d+14)&255)<<16|(e.charCodeAt(d+15)&255)<<24,e.charCodeAt(d+8)&255|(e.charCodeAt(d+9)&255)<<8|(e.charCodeAt(d+10)&255)<<16|(e.charCodeAt(d+11)&255)<<24],s=u(s,p),s=g(s,31),s=u(s,m),n=l(n,s),n=g(n,27),n=f(n,i),n=f(u(n,[0,5]),[0,1390208809]),c=u(c,m),c=g(c,33),c=u(c,p),i=l(i,c),i=g(i,31),i=f(i,n),i=f(u(i,[0,5]),[0,944331445]);switch(s=[0,0],c=[0,0],t){case 15:c=l(c,v([0,e.charCodeAt(d+14)],48));case 14:c=l(c,v([0,e.charCodeAt(d+13)],40));case 13:c=l(c,v([0,e.charCodeAt(d+12)],32));case 12:c=l(c,v([0,e.charCodeAt(d+11)],24));case 11:c=l(c,v([0,e.charCodeAt(d+10)],16));case 10:c=l(c,v([0,e.charCodeAt(d+9)],8));case 9:c=l(c,[0,e.charCodeAt(d+8)]),c=u(c,m),c=g(c,33),c=u(c,p),i=l(i,c);case 8:s=l(s,v([0,e.charCodeAt(d+7)],56));case 7:s=l(s,v([0,e.charCodeAt(d+6)],48));case 6:s=l(s,v([0,e.charCodeAt(d+5)],40));case 5:s=l(s,v([0,e.charCodeAt(d+4)],32));case 4:s=l(s,v([0,e.charCodeAt(d+3)],24));case 3:s=l(s,v([0,e.charCodeAt(d+2)],16));case 2:s=l(s,v([0,e.charCodeAt(d+1)],8));case 1:s=l(s,[0,e.charCodeAt(d)]),s=u(s,p),s=g(s,31),s=u(s,m),n=l(n,s)}return n=l(n,[0,e.length]),i=l(i,[0,e.length]),n=f(n,i),i=f(i,n),n=S(n),i=S(i),n=f(n,i),i=f(i,n),("00000000"+(n[0]>>>0).toString(16)).slice(-8)+("00000000"+(n[1]>>>0).toString(16)).slice(-8)+("00000000"+(i[0]>>>0).toString(16)).slice(-8)+("00000000"+(i[1]>>>0).toString(16)).slice(-8)},E={preprocessor:null,audio:{timeout:1e3,excludeIOS11:!0},fonts:{swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",userDefinedFonts:[],extendedJsFonts:!1},screen:{detectScreenOrientation:!0},plugins:{sortPluginsFor:[/palemoon/i],excludeIE:!1},extraComponents:[],excludes:{enumerateDevices:!0,pixelRatio:!0,doNotTrack:!0,fontsFlash:!0,adBlock:!0},NOT_AVAILABLE:"not available",ERROR:"error",EXCLUDED:"excluded"},C=function(e,r){if(Array.prototype.forEach&&e.forEach===Array.prototype.forEach)e.forEach(r);else if(e.length===+e.length)for(var t=0,a=e.length;t<a;t++)r(e[t],t,e);else for(var n in e)e.hasOwnProperty(n)&&r(e[n],n,e)},L=function(e,r){var t=[];return e==null?t:Array.prototype.map&&e.map===Array.prototype.map?e.map(r):(C(e,function(a,n,i){t.push(r(a,n,i))}),t)},$=function(e,r){if(r==null)return e;var t,a;for(a in r)t=r[a],t!=null&&!Object.prototype.hasOwnProperty.call(e,a)&&(e[a]=t);return e},ee=function(e,r){if(!re())return e(r.NOT_AVAILABLE);navigator.mediaDevices.enumerateDevices().then(function(t){e(t.map(function(a){return"id="+a.deviceId+";gid="+a.groupId+";"+a.kind+";"+a.label}))}).catch(function(t){e(t)})},re=function(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices},te=function(e,r){var t=r.audio;if(t.excludeIOS11&&navigator.userAgent.match(/OS 11.+Version\/11.+Safari/))return e(r.EXCLUDED);var a=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(a==null)return e(r.NOT_AVAILABLE);var n=new a(1,44100,44100),i=n.createOscillator();i.type="triangle",i.frequency.setValueAtTime(1e4,n.currentTime);var s=n.createDynamicsCompressor();C([["threshold",-50],["knee",40],["ratio",12],["reduction",-20],["attack",0],["release",.25]],function(p){s[p[0]]!==void 0&&typeof s[p[0]].setValueAtTime=="function"&&s[p[0]].setValueAtTime(p[1],n.currentTime)}),i.connect(s),s.connect(n.destination),i.start(0),n.startRendering();var c=setTimeout(function(){return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/fingerprintjs/fingerprintjs with your user agent: "'+navigator.userAgent+'".'),n.oncomplete=function(){},n=null,e("audioTimeout")},t.timeout);n.oncomplete=function(p){var m;try{clearTimeout(c),m=p.renderedBuffer.getChannelData(0).slice(4500,5e3).reduce(function(d,O){return d+Math.abs(O)},0).toString(),i.disconnect(),s.disconnect()}catch(d){e(d);return}e(m)}},ae=function(e){e(navigator.userAgent)},ne=function(e,r){e(navigator.webdriver==null?r.NOT_AVAILABLE:navigator.webdriver)},ie=function(e,r){e(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||r.NOT_AVAILABLE)},oe=function(e,r){e(window.screen.colorDepth||r.NOT_AVAILABLE)},se=function(e,r){e(navigator.deviceMemory||r.NOT_AVAILABLE)},le=function(e,r){e(window.devicePixelRatio||r.NOT_AVAILABLE)},ue=function(e,r){e(fe(r))},fe=function(e){var r=[window.screen.width,window.screen.height];return e.screen.detectScreenOrientation&&r.sort().reverse(),r},ce=function(e,r){e(de(r))},de=function(e){if(window.screen.availWidth&&window.screen.availHeight){var r=[window.screen.availHeight,window.screen.availWidth];return e.screen.detectScreenOrientation&&r.sort().reverse(),r}return e.NOT_AVAILABLE},ge=function(e){e(new Date().getTimezoneOffset())},ve=function(e,r){if(window.Intl&&window.Intl.DateTimeFormat){e(new window.Intl.DateTimeFormat().resolvedOptions().timeZone||r.NOT_AVAILABLE);return}e(r.NOT_AVAILABLE)},he=function(e,r){e(ke(r))},pe=function(e,r){e(Ue(r))},me=function(e,r){e(Ge(r))},Te=function(e){e(!!window.HTMLElement.prototype.addBehavior)},Ae=function(e){e(!!window.openDatabase)},Se=function(e,r){e(He(r))},xe=function(e,r){e(Ke(r))},Ce=function(e,r){e(We(r))},we=function(e,r){if(X()){e(je(r));return}e(r.NOT_AVAILABLE)},Ee=function(e,r){if(j()){e(ze());return}e(r.NOT_AVAILABLE)},Be=function(e){if(j()){e(Ze());return}e()},Oe=function(e){e(Je())},ye=function(e){e(Ye())},Me=function(e){e(qe())},Pe=function(e){e(Qe())},Ie=function(e){e($e())},be=function(e,r){if(!tr())return e("swf object not loaded");if(!ar())return e("flash not installed");if(!r.fonts.swfPath)return e("missing options.fonts.swfPath");ir(function(t){e(t)},r)},Le=function(e,r){var t=["monospace","sans-serif","serif"],a=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"];if(r.fonts.extendedJsFonts){var n=["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"];a=a.concat(n)}a=a.concat(r.fonts.userDefinedFonts),a=a.filter(function(h,T){return a.indexOf(h)===T});var i="mmmmmmmmmmlli",s="72px",c=document.getElementsByTagName("body")[0],p=document.createElement("div"),m=document.createElement("div"),d={},O={},A=function(){var h=document.createElement("span");return h.style.position="absolute",h.style.left="-9999px",h.style.fontSize=s,h.style.fontStyle="normal",h.style.fontWeight="normal",h.style.letterSpacing="normal",h.style.lineBreak="auto",h.style.lineHeight="normal",h.style.textTransform="none",h.style.textAlign="left",h.style.textDecoration="none",h.style.textShadow="none",h.style.whiteSpace="normal",h.style.wordBreak="normal",h.style.wordSpacing="normal",h.innerHTML=i,h},I=function(h,T){var x=A();return x.style.fontFamily="'"+h+"',"+T,x},y=function(){for(var h=[],T=0,x=t.length;T<x;T++){var D=A();D.style.fontFamily=t[T],p.appendChild(D),h.push(D)}return h},b=function(){for(var h={},T=0,x=a.length;T<x;T++){for(var D=[],H=0,fr=t.length;H<fr;H++){var Z=I(a[T],t[H]);m.appendChild(Z),D.push(Z)}h[a[T]]=D}return h},V=function(h){for(var T=!1,x=0;x<t.length;x++)if(T=h[x].offsetWidth!==d[t[x]]||h[x].offsetHeight!==O[t[x]],T)return T;return T},F=y();c.appendChild(p);for(var R=0,sr=t.length;R<sr;R++)d[t[R]]=F[R].offsetWidth,O[t[R]]=F[R].offsetHeight;var lr=b();c.appendChild(m);for(var z=[],k=0,ur=a.length;k<ur;k++)V(lr[a[k]])&&z.push(a[k]);c.removeChild(m),c.removeChild(p),e(z)},Re=function(e,r){er()?r.plugins.excludeIE?e(r.EXCLUDED):e(De(r)):e(W(r))},W=function(e){if(navigator.plugins==null)return e.NOT_AVAILABLE;for(var r=[],t=0,a=navigator.plugins.length;t<a;t++)navigator.plugins[t]&&r.push(navigator.plugins[t]);return _e(e)&&(r=r.sort(function(n,i){return n.name>i.name?1:n.name<i.name?-1:0})),L(r,function(n){var i=L(n,function(s){return[s.type,s.suffixes]});return[n.name,n.description,i]})},De=function(e){var r=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){var t=["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"];r=L(t,function(a){try{return new window.ActiveXObject(a),a}catch{return e.ERROR}})}else r.push(e.NOT_AVAILABLE);return navigator.plugins&&(r=r.concat(W(e))),r},_e=function(e){for(var r=!1,t=0,a=e.plugins.sortPluginsFor.length;t<a;t++){var n=e.plugins.sortPluginsFor[t];if(navigator.userAgent.match(n)){r=!0;break}}return r},Ne=function(e){e(Xe())},Fe=function(e,r){e(Ve(r))},ke=function(e){try{return!!window.sessionStorage}catch{return e.ERROR}},Ue=function(e){try{return!!window.localStorage}catch{return e.ERROR}},Ge=function(e){if(rr())return e.EXCLUDED;try{return!!window.indexedDB}catch{return e.ERROR}},Ve=function(e){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:e.NOT_AVAILABLE},He=function(e){return navigator.cpuClass||e.NOT_AVAILABLE},Ke=function(e){return navigator.platform?navigator.platform:e.NOT_AVAILABLE},We=function(e){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:e.NOT_AVAILABLE},Xe=function(){var e=0,r;typeof navigator.maxTouchPoints<"u"?e=navigator.maxTouchPoints:typeof navigator.msMaxTouchPoints<"u"&&(e=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),r=!0}catch{r=!1}var t="ontouchstart"in window;return[e,r,t]},je=function(e){var r=[],t=document.createElement("canvas");t.width=2e3,t.height=200,t.style.display="inline";var a=t.getContext("2d");return a.rect(0,0,10,10),a.rect(2,2,6,6),r.push("canvas winding:"+(a.isPointInPath(5,5,"evenodd")===!1?"yes":"no")),a.textBaseline="alphabetic",a.fillStyle="#f60",a.fillRect(125,1,62,20),a.fillStyle="#069",e.dontUseFakeFontInCanvas?a.font="11pt Arial":a.font="11pt no-real-font-123",a.fillText("Cwm fjordbank glyphs vext quiz, 😃",2,15),a.fillStyle="rgba(102, 204, 0, 0.2)",a.font="18pt Arial",a.fillText("Cwm fjordbank glyphs vext quiz, 😃",4,45),a.globalCompositeOperation="multiply",a.fillStyle="rgb(255,0,255)",a.beginPath(),a.arc(50,50,50,0,Math.PI*2,!0),a.closePath(),a.fill(),a.fillStyle="rgb(0,255,255)",a.beginPath(),a.arc(100,50,50,0,Math.PI*2,!0),a.closePath(),a.fill(),a.fillStyle="rgb(255,255,0)",a.beginPath(),a.arc(75,100,50,0,Math.PI*2,!0),a.closePath(),a.fill(),a.fillStyle="rgb(255,0,255)",a.arc(75,75,75,0,Math.PI*2,!0),a.arc(75,75,25,0,Math.PI*2,!0),a.fill("evenodd"),t.toDataURL&&r.push("canvas fp:"+t.toDataURL()),r},ze=function(){var e,r=function(A){return e.clearColor(0,0,0,1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),"["+A[0]+", "+A[1]+"]"},t=function(A){var I=A.getExtension("EXT_texture_filter_anisotropic")||A.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||A.getExtension("MOZ_EXT_texture_filter_anisotropic");if(I){var y=A.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT);return y===0&&(y=2),y}else return null};if(e=G(),!e)return null;var a=[],n="attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",i="precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s);var c=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);e.bufferData(e.ARRAY_BUFFER,c,e.STATIC_DRAW),s.itemSize=3,s.numItems=3;var p=e.createProgram(),m=e.createShader(e.VERTEX_SHADER);e.shaderSource(m,n),e.compileShader(m);var d=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(d,i),e.compileShader(d),e.attachShader(p,m),e.attachShader(p,d),e.linkProgram(p),e.useProgram(p),p.vertexPosAttrib=e.getAttribLocation(p,"attrVertex"),p.offsetUniform=e.getUniformLocation(p,"uniformOffset"),e.enableVertexAttribArray(p.vertexPosArray),e.vertexAttribPointer(p.vertexPosAttrib,s.itemSize,e.FLOAT,!1,0,0),e.uniform2f(p.offsetUniform,1,1),e.drawArrays(e.TRIANGLE_STRIP,0,s.numItems);try{a.push(e.canvas.toDataURL())}catch{}a.push("extensions:"+(e.getSupportedExtensions()||[]).join(";")),a.push("webgl aliased line width range:"+r(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),a.push("webgl aliased point size range:"+r(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),a.push("webgl alpha bits:"+e.getParameter(e.ALPHA_BITS)),a.push("webgl antialiasing:"+(e.getContextAttributes().antialias?"yes":"no")),a.push("webgl blue bits:"+e.getParameter(e.BLUE_BITS)),a.push("webgl depth bits:"+e.getParameter(e.DEPTH_BITS)),a.push("webgl green bits:"+e.getParameter(e.GREEN_BITS)),a.push("webgl max anisotropy:"+t(e)),a.push("webgl max combined texture image units:"+e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),a.push("webgl max cube map texture size:"+e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),a.push("webgl max fragment uniform vectors:"+e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),a.push("webgl max render buffer size:"+e.getParameter(e.MAX_RENDERBUFFER_SIZE)),a.push("webgl max texture image units:"+e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),a.push("webgl max texture size:"+e.getParameter(e.MAX_TEXTURE_SIZE)),a.push("webgl max varying vectors:"+e.getParameter(e.MAX_VARYING_VECTORS)),a.push("webgl max vertex attribs:"+e.getParameter(e.MAX_VERTEX_ATTRIBS)),a.push("webgl max vertex texture image units:"+e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),a.push("webgl max vertex uniform vectors:"+e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),a.push("webgl max viewport dims:"+r(e.getParameter(e.MAX_VIEWPORT_DIMS))),a.push("webgl red bits:"+e.getParameter(e.RED_BITS)),a.push("webgl renderer:"+e.getParameter(e.RENDERER)),a.push("webgl shading language version:"+e.getParameter(e.SHADING_LANGUAGE_VERSION)),a.push("webgl stencil bits:"+e.getParameter(e.STENCIL_BITS)),a.push("webgl vendor:"+e.getParameter(e.VENDOR)),a.push("webgl version:"+e.getParameter(e.VERSION));try{var O=e.getExtension("WEBGL_debug_renderer_info");O&&(a.push("webgl unmasked vendor:"+e.getParameter(O.UNMASKED_VENDOR_WEBGL)),a.push("webgl unmasked renderer:"+e.getParameter(O.UNMASKED_RENDERER_WEBGL)))}catch{}return e.getShaderPrecisionFormat?(C(["FLOAT","INT"],function(A){C(["VERTEX","FRAGMENT"],function(I){C(["HIGH","MEDIUM","LOW"],function(y){C(["precision","rangeMin","rangeMax"],function(b){var V=e.getShaderPrecisionFormat(e[I+"_SHADER"],e[y+"_"+A])[b];b!=="precision"&&(b="precision "+b);var F=["webgl ",I.toLowerCase()," shader ",y.toLowerCase()," ",A.toLowerCase()," ",b,":",V].join("");a.push(F)})})})}),N(e),a):(N(e),a)},Ze=function(){try{var e=G(),r=e.getExtension("WEBGL_debug_renderer_info"),t=e.getParameter(r.UNMASKED_VENDOR_WEBGL)+"~"+e.getParameter(r.UNMASKED_RENDERER_WEBGL);return N(e),t}catch{return null}},Je=function(){var e=document.createElement("div");e.innerHTML="&nbsp;",e.className="adsbox";var r=!1;try{document.body.appendChild(e),r=document.getElementsByClassName("adsbox")[0].offsetHeight===0,document.body.removeChild(e)}catch{r=!1}return r},Ye=function(){if(typeof navigator.languages<"u")try{var e=navigator.languages[0].substr(0,2);if(e!==navigator.language.substr(0,2))return!0}catch{return!0}return!1},qe=function(){return window.screen.width<window.screen.availWidth||window.screen.height<window.screen.availHeight},Qe=function(){var e=navigator.userAgent.toLowerCase(),r=navigator.oscpu,t=navigator.platform.toLowerCase(),a;e.indexOf("windows phone")>=0?a="Windows Phone":e.indexOf("windows")>=0||e.indexOf("win16")>=0||e.indexOf("win32")>=0||e.indexOf("win64")>=0||e.indexOf("win95")>=0||e.indexOf("win98")>=0||e.indexOf("winnt")>=0||e.indexOf("wow64")>=0?a="Windows":e.indexOf("android")>=0?a="Android":e.indexOf("linux")>=0||e.indexOf("cros")>=0||e.indexOf("x11")>=0?a="Linux":e.indexOf("iphone")>=0||e.indexOf("ipad")>=0||e.indexOf("ipod")>=0||e.indexOf("crios")>=0||e.indexOf("fxios")>=0?a="iOS":e.indexOf("macintosh")>=0||e.indexOf("mac_powerpc)")>=0?a="Mac":a="Other";var n="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;if(n&&a!=="Windows"&&a!=="Windows Phone"&&a!=="Android"&&a!=="iOS"&&a!=="Other"&&e.indexOf("cros")===-1)return!0;if(typeof r<"u"){if(r=r.toLowerCase(),r.indexOf("win")>=0&&a!=="Windows"&&a!=="Windows Phone")return!0;if(r.indexOf("linux")>=0&&a!=="Linux"&&a!=="Android")return!0;if(r.indexOf("mac")>=0&&a!=="Mac"&&a!=="iOS")return!0;if((r.indexOf("win")===-1&&r.indexOf("linux")===-1&&r.indexOf("mac")===-1)!=(a==="Other"))return!0}if(t.indexOf("win")>=0&&a!=="Windows"&&a!=="Windows Phone")return!0;if((t.indexOf("linux")>=0||t.indexOf("android")>=0||t.indexOf("pike")>=0)&&a!=="Linux"&&a!=="Android")return!0;if((t.indexOf("mac")>=0||t.indexOf("ipad")>=0||t.indexOf("ipod")>=0||t.indexOf("iphone")>=0)&&a!=="Mac"&&a!=="iOS")return!0;if(t.indexOf("arm")>=0&&a==="Windows Phone")return!1;if(t.indexOf("pike")>=0&&e.indexOf("opera mini")>=0)return!1;var i=t.indexOf("win")<0&&t.indexOf("linux")<0&&t.indexOf("mac")<0&&t.indexOf("iphone")<0&&t.indexOf("ipad")<0&&t.indexOf("ipod")<0;return i!==(a==="Other")?!0:typeof navigator.plugins>"u"&&a!=="Windows"&&a!=="Windows Phone"},$e=function(){var e=navigator.userAgent.toLowerCase(),r=navigator.productSub,t;if(e.indexOf("edge/")>=0||e.indexOf("iemobile/")>=0)return!1;if(e.indexOf("opera mini")>=0)return!1;if(e.indexOf("firefox/")>=0?t="Firefox":e.indexOf("opera/")>=0||e.indexOf(" opr/")>=0?t="Opera":e.indexOf("chrome/")>=0?t="Chrome":e.indexOf("safari/")>=0?e.indexOf("android 1.")>=0||e.indexOf("android 2.")>=0||e.indexOf("android 3.")>=0||e.indexOf("android 4.")>=0?t="AOSP":t="Safari":e.indexOf("trident/")>=0?t="Internet Explorer":t="Other",(t==="Chrome"||t==="Safari"||t==="Opera")&&r!=="20030107")return!0;var a=eval.toString().length;if(a===37&&t!=="Safari"&&t!=="Firefox"&&t!=="Other")return!0;if(a===39&&t!=="Internet Explorer"&&t!=="Other")return!0;if(a===33&&t!=="Chrome"&&t!=="AOSP"&&t!=="Opera"&&t!=="Other")return!0;var n;try{throw"a"}catch(i){try{i.toSource(),n=!0}catch{n=!1}}return n&&t!=="Firefox"&&t!=="Other"},X=function(){var e=document.createElement("canvas");return!!(e.getContext&&e.getContext("2d"))},j=function(){if(!X())return!1;var e=G(),r=!!window.WebGLRenderingContext&&!!e;return N(e),r},er=function(){return navigator.appName==="Microsoft Internet Explorer"?!0:!!(navigator.appName==="Netscape"&&/Trident/.test(navigator.userAgent))},rr=function(){return("msWriteProfilerMark"in window)+("msLaunchUri"in navigator)+("msSaveBlob"in navigator)>=2},tr=function(){return typeof window.swfobject<"u"},ar=function(){return window.swfobject.hasFlashPlayerVersion("9.0.0")},nr=function(e){var r=document.createElement("div");r.setAttribute("id",e.fonts.swfContainerId),document.body.appendChild(r)},ir=function(e,r){var t="___fp_swf_loaded";window[t]=function(s){e(s)};var a=r.fonts.swfContainerId;nr();var n={onReady:t},i={allowScriptAccess:"always",menu:"false"};window.swfobject.embedSWF(r.fonts.swfPath,a,"1","1","9.0.0",!1,n,i,{})},G=function(){var e=document.createElement("canvas"),r=null;try{r=e.getContext("webgl")||e.getContext("experimental-webgl")}catch{}return r||(r=null),r},N=function(e){var r=e.getExtension("WEBGL_lose_context");r!=null&&r.loseContext()},or=[{key:"userAgent",getData:ae},{key:"webdriver",getData:ne},{key:"language",getData:ie},{key:"colorDepth",getData:oe},{key:"deviceMemory",getData:se},{key:"pixelRatio",getData:le},{key:"hardwareConcurrency",getData:Fe},{key:"screenResolution",getData:ue},{key:"availableScreenResolution",getData:ce},{key:"timezoneOffset",getData:ge},{key:"timezone",getData:ve},{key:"sessionStorage",getData:he},{key:"localStorage",getData:pe},{key:"indexedDb",getData:me},{key:"addBehavior",getData:Te},{key:"openDatabase",getData:Ae},{key:"cpuClass",getData:Se},{key:"platform",getData:xe},{key:"doNotTrack",getData:Ce},{key:"plugins",getData:Re},{key:"canvas",getData:we},{key:"webgl",getData:Ee},{key:"webglVendorAndRenderer",getData:Be},{key:"adBlock",getData:Oe},{key:"hasLiedLanguages",getData:ye},{key:"hasLiedResolution",getData:Me},{key:"hasLiedOs",getData:Pe},{key:"hasLiedBrowser",getData:Ie},{key:"touchSupport",getData:Ne},{key:"fonts",getData:Le,pauseBefore:!0},{key:"fontsFlash",getData:be,pauseBefore:!0},{key:"audio",getData:te},{key:"enumerateDevices",getData:ee}],B=function(e){throw new Error("'new Fingerprint()' is deprecated, see https://github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200")};return B.get=function(e,r){r?e||(e={}):(r=e,e={}),$(e,E),e.components=e.extraComponents.concat(or);var t={data:[],addPreprocessedComponent:function(i,s){typeof e.preprocessor=="function"&&(s=e.preprocessor(i,s)),t.data.push({key:i,value:s})}},a=-1,n=function(i){if(a+=1,a>=e.components.length){r(t.data);return}var s=e.components[a];if(e.excludes[s.key]){n(!1);return}if(!i&&s.pauseBefore){a-=1,setTimeout(function(){n(!0)},1);return}try{s.getData(function(c){t.addPreprocessedComponent(s.key,c),n(!1)},e)}catch(c){t.addPreprocessedComponent(s.key,String(c)),n(!1)}};n(!1)},B.getPromise=function(e){return new Promise(function(r,t){B.get(e,r)})},B.getV18=function(e,r){return r==null&&(r=e,e={}),B.get(e,function(t){for(var a=[],n=0;n<t.length;n++){var i=t[n];if(i.value===(e.NOT_AVAILABLE||"not available"))a.push({key:i.key,value:"unknown"});else if(i.key==="plugins")a.push({key:"plugins",value:L(i.value,function(c){var p=L(c[2],function(m){return m.join?m.join("~"):m}).join(",");return[c[0],c[1],p].join("::")})});else if(["canvas","webgl"].indexOf(i.key)!==-1&&Array.isArray(i.value))a.push({key:i.key,value:i.value.join("~")});else if(["sessionStorage","localStorage","indexedDb","addBehavior","openDatabase"].indexOf(i.key)!==-1)if(i.value)a.push({key:i.key,value:1});else continue;else i.value?a.push(i.value.join?{key:i.key,value:i.value.join(";")}:i):a.push({key:i.key,value:i.value})}var s=P(L(a,function(c){return c.value}).join("~~~"),31);r(s,a)})},B.x64hash128=P,B.VERSION="2.1.4",B})})(Q);var Sr=Q.exports;const q=Ar(Sr);async function xr(){const o=localStorage.getItem(J.palattineFingerPrintId);if(o)return o;const u=(await q.getPromise()).map(v=>v.value),g=q.x64hash128(u.join(""),31);return localStorage.setItem(J.palattineFingerPrintId,g),g}function Cr(o){return async function(f){var E;const u=f.location.href,g=new URL(u),v=g.searchParams.get(M.palattineUserId)??void 0,l=g.searchParams.get(M.palattineEmail)??void 0,S=g.searchParams.get(M.palattinePhone)??void 0,P=await xr();f[w]={setup:!0,originUrl:f.location.href,cId:o,fId:P,uId:v,email:l,phone:S,q:(E=f[U])==null?void 0:E.q}}}const K=(o,f,u)=>{var v,l,S,P;const g=()=>{let E;E=setInterval(()=>{var C;if(K(o,f,u),(C=u[w])!=null&&C.setup)return clearInterval(E)},100)};switch(o){case _.PING:return console.info("🏓 Pong!");case _.SETUP:Cr(f)(u);return;case _.PAGEVIEW:if(!((v=u[w])!=null&&v.setup))return g();Y(o,f)(u);return;case _.LEAD:if(!((l=u[w])!=null&&l.setup))return g();console.warn("event 'lead' is not implemented yet");return;case _.GET_CONFIG:return(S=u[w])!=null&&S.setup?u[w]:g();default:if(!((P=u[w])!=null&&P.setup))return g();Y(o,f)(u);return}};(function(o){const f=o[U];if((f??{}).hasOwnProperty("q")){const u=f.q;let g=[];u.forEach(v=>{try{const l=v[0],S=v[1];K(l,S,o),g.push(v)}catch(l){console.error(l)}}),o[U]=function(v,l){return K(v,l,o)},o[U].q=g}})(window);
