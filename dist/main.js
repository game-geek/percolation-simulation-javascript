(()=>{"use strict";var t={28:(t,e,r)=>{r.d(e,{Z:()=>a});var i=r(81),s=r.n(i),n=r(645),o=r.n(n)()(s());o.push([t.id,":root {\r\n    --width: 10px;\r\n    --height: 10px;\r\n}\r\n\r\nh1 {\r\n    color: red;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n}\r\n\r\n#canvas1 {\r\n    position: absolute;\r\n    left: 10%;\r\n    width: 1000px;\r\n    height: 500px;\r\n    /* display for children */\r\n}\r\n\r\n.holder {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: gray;\r\n    width: var(--width);\r\n    height: var(--height);\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\nform {\r\n    z-index: 1;\r\n}\r\n\r\ntoggle-show {\r\n}",""]);const a=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",i=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),i&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),i&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,i,s,n){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var h=this[a][0];null!=h&&(o[h]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);i&&o[l[0]]||(void 0!==n&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=n),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,i=0;i<e.length;i++)if(e[i].identifier===t){r=i;break}return r}function i(t,i){for(var n={},o=[],a=0;a<t.length;a++){var h=t[a],c=i.base?h[0]+i.base:h[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=r(d),g={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var p=s(g,i);i.byIndex=a,e.splice(a,0,{identifier:d,updater:p,references:1})}o.push(d)}return o}function s(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,s){var n=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<n.length;o++){var a=r(n[o]);e[a].references--}for(var h=i(t,s),c=0;c<n.length;c++){var l=r(n[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}n=h}}},569:t=>{var e={};t.exports=function(t,r){var i=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var i="";r.supports&&(i+="@supports (".concat(r.supports,") {")),r.media&&(i+="@media ".concat(r.media," {"));var s=void 0!==r.layer;s&&(i+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),i+=r.css,s&&(i+="}"),r.media&&(i+="}"),r.supports&&(i+="}");var n=r.sourceMap;n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(i){var s=e[i];if(void 0!==s)return s.exports;var n=e[i]={id:i,exports:{}};return t[i](n,n.exports,r),n.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=r(379),e=r.n(t),i=r(795),s=r.n(i),n=r(569),o=r.n(n),a=r(565),h=r.n(a),c=r(216),l=r.n(c),d=r(589),u=r.n(d),g=r(28),p={};function f(...t){console.log(t)}p.styleTagTransform=u(),p.setAttributes=h(),p.insert=o().bind(null,"head"),p.domAPI=s(),p.insertStyleElement=l(),e()(g.Z,p),g.Z&&g.Z.locals&&g.Z.locals;class y{constructor(t,e,r,i,s={width:100,height:50},n=!1,o,a,h=!1,c=!0){this.x=t,this.y=e,this.gridPointer=r,this.DomArrayPointer=i,this.width=s.width,this.height=s.height,this.blocked=!1,this.color=this.getRandomColor(),this.first=n,n||(this.fromTread=o,this.fromTreadAt=a),this.history=[],this.at=0,this.initialized=!c,h&&(this.gridPointer[this.y][this.x]=2,this.DomArrayPointer[this.y][this.x].style.backgroundColor=this.color,this.history.push({x:this.x,y:this.y}),this.at++)}getRandomColor(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}check_bottom(){return this.snapshot.y<this.height-1&&0==this.gridPointer[this.snapshot.y+1][this.snapshot.x]}check_right(){return this.snapshot.x<this.width-1&&0==this.gridPointer[this.snapshot.y][this.snapshot.x+1]}check_left(){return this.snapshot.x>0&&0==this.gridPointer[this.snapshot.y][this.snapshot.x-1]}check_top(){return this.snapshot.y>0&&0==this.gridPointer[this.snapshot.y-1][this.snapshot.x]}update(){this.gridPointer[this.y][this.x]=2,this.DomArrayPointer[this.y][this.x].style.backgroundColor=this.color,this.at++,this.history.push({x:this.x,y:this.y})}first_step(){return this.check_bottom()?(this.y++,this.update(),{}):(this.blocked=!0,{found:!1})}step(){let t={at:this.at};if(this.snapshot={x:this.x,y:this.y},!this.initialized)return this.initialized=!0,this.first_step();let e=!1;return this.check_bottom()&&(e=!0,this.y++,this.y===this.height-1)?(this.update(),t.found=!0,t):(this.check_right()&&(e?t.right={x:this.snapshot.x+1,y:this.snapshot.y}:(e=!0,this.x++)),this.check_left()&&(e?t.left={x:this.snapshot.x-1,y:this.snapshot.y}:(e=!0,this.x--)),this.check_top()&&(e?t.top={x:this.snapshot.x,y:this.snapshot.y-1}:(e=!0,this.y--)),e?this.update():(this.blocked=!0,t.found=!1),t)}}class v{constructor(t){this.canvasManager=t}find(t){console.log("finding ...");let e=this.getBottomPoints(t),r=this.resolvePaths(e);console.log(r),this.clearAndWrite(r)}clearAndWrite(t){for(let t=0;t<this.canvasManager.height;t++)for(let e=0;e<this.canvasManager.width;e++)1!==this.canvasManager.grid[t][e]&&(this.canvasManager.grid[t][e]=0,this.canvasManager.DomArrayPointer[t][e].style.backgroundColor="gray");console.log(t),t.forEach((t=>{let e=this.getRandomColor();t.forEach((t=>{this.canvasManager.DomArrayPointer[t.y][t.x].style.backgroundColor=e}))}))}getRandomColor(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}resolvePaths(t){let e=[];return t.forEach((t=>{let r=[],i=!1,s=t,n=0;if(r.push(...s.history),console.log(t.first),!t.first)for(n=s.fromTreadAt,s=s.fromTread;!i;){console.log(s.history.slice(0,n));for(let t=0;t<n;t++)r.push(s.history[t]);1==s.history.length&&console.log("uwu"),s.first?i=!0:(n=s.fromTreadAt,s=s.fromTread)}e.push(r)})),e}getBottomPoints(t){let e=[];return t.forEach((t=>{t.history.length>0&&t.history[t.history.length-1].y==this.canvasManager.height-1&&e.push(t)})),e}}const m=document.querySelector(":root"),x=document.querySelector("#canvas1"),w=document.querySelector("#update-density"),b=document.querySelector(".show"),P=document.querySelector("#toggle-show"),M=new class{constructor(t,e,r={width:100,height:50}){this.canvas=t,this.root=e,this.width=r.width,this.height=r.height,this.init()}init(){this.generate_grid(),this.resizeCanvas(),this.generateDomPointerGrid()}generateDomPointerGrid(){let t=[],e=Array.from(this.canvas.children);for(let r=0;r<this.height;r++)t.push(Array.from(e[r].children));this.DomArrayPointer=t}resizeCanvas(){f(this.canvas.clientHeight,this.canvas.clientWidth),this.root.style.setProperty("--height",this.canvas.clientHeight/50+"px"),this.root.style.setProperty("--width",this.canvas.clientWidth/100+"px"),f("window resized")}generate_grid(){let t="";for(let e=0;e<50;e++){t+='<div class="holder">';for(let e=0;e<100;e++)t+='<div class="white block"></div>';t+="</div>"}this.canvas.innerHTML=t}}(x,m),k=new class{generate(t,e){return Math.floor(Math.random()*(e-t+1))+t}generateGrid(t,e,r){let i=t*e/100*r,s=[],n=[];for(let r=0;r<e;r++){for(let e=0;e<t;e++)n.push(0);s.push(n),n=[]}let o=0;for(;o!=i;){let r=this.generate(0,t-1),i=this.generate(0,e-1);0==s[i][r]&&(s[i][r]=1,o++)}return s}}({height:50,width:100}),T=new class{constructor(t){this.canvasManager=t}load(t){this.canvasManager.grid=t;for(let e=0;e<t.length;e++)for(let r=0;r<t[e].length;r++)1==t[e][r]?this.canvasManager.DomArrayPointer[e][r].style.backgroundColor="black":this.canvasManager.DomArrayPointer[e][r].style.backgroundColor="gray"}}(M),A=new class{constructor(t){this.canvasManager=t,this.treads=[],this.shortest=new v(t),this.running=!1}init(){this.running=!0;for(let t=0;t<100;t++)this.addTread(t,-1)}reset(){this.running=!1,this.treads=[]}addTread(t,e,r=!0,i,s,n=!1,o=!0){this.treads.push(new y(t,e,this.canvasManager.grid,this.canvasManager.DomArrayPointer,{width:this.canvasManager.width,height:this.canvasManager.height},r,i,s,n,o))}step(){let t=!1,e=this.treads.length;for(let r=0;r<e;r++)if(!this.treads[r].blocked){let e=this.treads[r].step();null!=e.found&&(!0===e.found?t=!0:e.found),null!=e.right&&(this.addTread(e.right.x,e.right.y,!1,this.treads[r],e.at,!0,!1),console.log("right")),null!=e.left&&(this.addTread(e.left.x,e.left.y,!1,this.treads[r],e.at,!0,!1),console.log("left")),null!=e.top&&(this.addTread(e.top.x,e.top.y,!1,this.treads[r],e.at,!0,!1),console.log("top"))}return t&&(this.running=!1),t}findShortestPath(){this.shortest.find(this.treads)}}(M);let C=k.generateGrid(M.width,M.height,25);T.load(C),A.init();let E=P.show.checked;console.log(E);let D=!1,S=!1;function _(){S?S=!1:(D=A.step(),D?E&&A.findShortestPath():setTimeout(_,10))}setTimeout(_,10),P.addEventListener("click",(t=>{E=!!t.target.checked})),b.addEventListener("click",(()=>{!1===A.running&&A.findShortestPath()})),w.addEventListener("submit",(t=>{t.preventDefault();let e=k.generateGrid(M.width,M.height,t.target.density.value);T.load(e),D?D=!1:S=!0,A.reset(),A.init(),setTimeout(_,10),t.target.reset()})),window.addEventListener("resize",(()=>{m.style.setProperty("--height",x.clientHeight/M.height+"px"),m.style.setProperty("--width",x.clientWidth/M.width+"px"),f("window resized")}))})()})();