(this.webpackJsonppipepuzzle=this.webpackJsonppipepuzzle||[]).push([[0],[,,,,,,function(e,t,r){e.exports=r.p+"static/media/bgmusic.1dbb9d4e.ogg"},function(e,t,r){e.exports=r.p+"static/media/move.908b1b89.wav"},,,function(e,t,r){e.exports=r(19)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(1),o=r.n(i),s=(r(15),r(3)),l=r(4),u=r(8),f=r(5),c=r(9),d=r(6),h=r.n(d),v=r(7),p=r.n(v);r(16),r(17);var m=function(e){return a.a.createElement("div",{className:"title"},a.a.createElement("h1",{className:"fadeIn first"},"Welcome to the Game of Life!!!"),a.a.createElement("h2",{className:"fadeIn second"},"Because just like your life, this game is pointless and serves no purpose."),a.a.createElement("h3",{className:"fadeIn third"},"Please select the level according to how worthless you consider your time."),a.a.createElement("select",{className:"fadeIn third",id:"gridsize"},a.a.createElement("option",{value:"2"},"2"),a.a.createElement("option",{value:"3"},"3"),a.a.createElement("option",{value:"4"},"4")),a.a.createElement("br",null),a.a.createElement("input",{className:"fadeIn third",id:"levelselect",type:"submit",value:"Start",onClick:e.onClick}))};r(18);var y=function(e){for(var t=[],r=window.innerWidth/e.size-e.size,n=window.innerHeight/e.size-4*e.size,i=0;i<e.size;i++){for(var o=[],s=0;s<e.size;s++)" "!==e.puzzleArray[i][s]?o.push(a.a.createElement("td",{className:"td",style:{height:n,width:r},id:i+""+s},e.puzzleArray[i][s])):o.push(a.a.createElement("td",{className:"tdblank",style:{height:n,width:r},id:i+""+s},e.puzzleArray[i][s]));t.push(a.a.createElement("tr",{className:"tr",id:i},o))}return a.a.createElement("table",{style:{border:1},onKeyPress:e.onKeyPress,id:"tbl"},a.a.createElement("tbody",{id:"tblbody"},t))},z={shuffle:function(e){e.sort((function(){return Math.random()-.5}))},shuffle2d:function(e){for(var t in e)e[t].sort((function(){return Math.random()-.5}))},shuffle2dArray:function(e,t){for(var r=[],n=0;n<10;n++){var a=Math.random();a<=.25?(console.log("left"),e=z.shiftLeft(e,t),r.push("right")):a>.25&&a<=.5?(console.log("right"),e=z.shiftRight(e,t),r.push("left")):a>.5&&a<=.75?(console.log("down"),e=z.shiftDown(e,t),r.push("up")):(console.log("up"),e=z.shiftUp(e,t),r.push("down"))}return window.answer=[],window.answer=r.reverse(),e},shiftDown:function(e,t){for(var r,n=e,a=[],i=[],o=[],s=0;s<t;s++){a[s]=[],i[s]=[],o[s]=[];for(var l=0;l<t;l++)" "===n[s][l]&&(r=l),a[s].push(n[s][l])}for(s=0;s<t;s++)for(l=0;l<t;l++)l===r?o[(s+1)%t][l]=a[s][l]:o[s][l]=a[s][l];for(s=0;s<t;s++)for(l=0;l<t;l++)i[s][l]=o[s][l];return i},shiftUp:function(e,t){for(var r,n=e,a=[],i=[],o=[],s=0;s<t;s++){a[s]=[],i[s]=[],o[s]=[];for(var l=0;l<t;l++)" "===n[s][l]&&(r=l),a[s].push(n[s][l])}for(s=0;s<t;s++)for(l=0;l<t;l++)o[s][l]=l===r?a[(s+1)%t][l]:a[s][l];for(s=0;s<t;s++)for(l=0;l<t;l++)i[s][l]=o[s][l];return i},shiftLeft:function(e,t){for(var r,n=e,a=[],i=[],o=[],s=0;s<t;s++){a[s]=[],i[s]=[],o[s]=[];for(var l=0;l<t;l++)" "===n[s][l]&&(r=s),a[s].push(n[s][l])}for(s=0;s<t;s++)for(l=0;l<t;l++)o[s][l]=s===r?a[s][(l+1)%t]:a[s][l];for(s=0;s<t;s++)for(l=0;l<t;l++)i[s][l]=o[s][l];return i},shiftRight:function(e,t){for(var r,n=e,a=[],i=[],o=[],s=0;s<t;s++){a[s]=[],i[s]=[],o[s]=[];for(var l=0;l<t;l++)" "===n[s][l]&&(r=s),a[s].push(n[s][l])}for(s=0;s<t;s++)for(l=0;l<t;l++)s===r?o[s][(l+1)%t]=a[s][l]:o[s][l]=a[s][l];return o}};window.utility=z;var w=z,A=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(r=Object(u.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).state={started:!1,overlay:!1,win:!1},r.clickevent=function(e,t){var r=this;this.interval=setInterval((function(){return r.setState({timer:r.state.timer+1})}),1e3),this.bgAudio=new Audio,this.bgAudio.src=h.a,this.bgAudio.loop=!0,this.bgAudio.addEventListener("ended",(function(){this.currentTime=0,this.play()}),!1),this.bgAudio.play(),this.moveAudio=new Audio,this.moveAudio.src=p.a;for(var n="undefined"!=typeof t?t:document.getElementById("gridsize"),a=n.options[n.selectedIndex].value,i=[],o=0;o<a;o++){i[o]=[];for(var s=0;s<a;s++)i[o].push(o*a+s+1),o===a-1&&s===a-1&&(i[o][s]=" ");o%2===0&&(i[o]=i[o].reverse())}i=w.shuffle2dArray(i,a),this.setState({started:!0,size:a,blank:{x:a-1,y:a-1},timer:0,overlay:!1,win:!1,puzzleArray:i})},r.shiftDown=function(){for(var e,t=r.state.puzzleArray,n=[],a=r.state.size,i=[],o=[],s=0;s<a;s++){n[s]=[],i[s]=[],o[s]=[];for(var l=0;l<a;l++)" "===t[s][l]&&(s,e=l),n[s].push(t[s][l])}for(s=0;s<a;s++)for(l=0;l<a;l++)l===e?o[(s+1)%a][l]=n[s][l]:o[s][l]=n[s][l];for(s=0;s<a;s++)for(l=0;l<a;l++)i[s][l]=o[s][l];r.setState({puzzleArray:i})},r.shiftUp=function(){for(var e,t=r.state.puzzleArray,n=[],a=r.state.size,i=[],o=[],s=0;s<a;s++){n[s]=[],i[s]=[],o[s]=[];for(var l=0;l<a;l++)" "===t[s][l]&&(e=l),n[s].push(t[s][l])}for(s=0;s<a;s++)for(l=0;l<a;l++)o[s][l]=l===e?n[(s+1)%a][l]:n[s][l];for(s=0;s<a;s++)for(l=0;l<a;l++)i[s][l]=o[s][l];r.setState({puzzleArray:i})},r.shiftLeft=function(){for(var e,t=r.state.puzzleArray,n=[],a=r.state.size,i=[],o=[],s=0;s<a;s++){n[s]=[],i[s]=[],o[s]=[];for(var l=0;l<a;l++)" "===t[s][l]&&(e=s),n[s].push(t[s][l])}for(s=0;s<a;s++)for(l=0;l<a;l++)o[s][l]=s===e?n[s][(l+1)%a]:n[s][l];for(s=0;s<a;s++)for(l=0;l<a;l++)i[s][l]=o[s][l];r.setState({puzzleArray:i})},r.shiftRight=function(){for(var e,t=r.state.puzzleArray,n=[],a=r.state.size,i=[],o=[],s=0;s<a;s++){n[s]=[],i[s]=[],o[s]=[];for(var l=0;l<a;l++)" "===t[s][l]&&(e=s),n[s].push(t[s][l])}for(s=0;s<a;s++)for(l=0;l<a;l++)s===e?o[s][(l+1)%a]=n[s][l]:o[s][l]=n[s][l];r.setState({puzzleArray:o})},r.handleKeyPress=function(e){"ArrowUp"===e.key||"w"===e.key||"W"===e.key?(r.shiftUp(),r.moveAudio.play()):"ArrowDown"===e.key||"s"===e.key||"S"===e.key?(r.shiftDown(),r.moveAudio.play()):"ArrowRight"===e.key||"d"===e.key||"D"===e.key?(r.shiftRight(),r.moveAudio.play()):"ArrowLeft"!==e.key&&"a"!==e.key&&"A"!==e.key||(r.shiftLeft(),r.moveAudio.play()),r.checkWin()},r.nextLevel=function(){var e=parseInt(r.state.size)+1;r.interval=setInterval((function(){return r.setState({timer:r.state.timer+1})}),1e3);for(var t=[],n=0;n<e;n++){t[n]=[];for(var a=0;a<e;a++)t[n].push(n*e+a+1)}for(t[e-1][e-1]=" ",w.shuffle2d(t);!0===r.checkWin(t,e,!0);)w.shuffle2d(t);r.setState({started:!0,size:e,blank:{x:e-1,y:e-1},timer:0,overlay:!1,win:!1,puzzleArray:t})},r.Wintext=function(){return a.a.createElement("div",{id:"overlay"},a.a.createElement("div",{id:"overlaytext"},"You Win",a.a.createElement("br",null),a.a.createElement("button",{id:"overlaytextbutton",onClick:r.nextLevel},"Play Next Level")))},r.checkWin=function(e,t,n){var a,i,o=e||r.state.puzzleArray,s=t||r.state.size;for(n="undefined"!=typeof n,a=0;a<s;a++)for(i=0;i<s;i++){var l=o[a][i],u=l+1;if(l!==s*s-1&&" "!==l){if(a<s-1&&o[a+1][i]===u||i<s-1&&o[a][i+1]===u||a>0&&o[a-1][i]===u||i>0&&o[a][i-1]===u)continue;return!1}}return!1===n&&r.setState({win:!0}),clearInterval(r.interval),!0},r}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("levelselect").focus()}},{key:"render",value:function(){var e=null;return!1===this.state.started?e=a.a.createElement("div",null,a.a.createElement(m,{onClick:this.clickevent.bind(this)})):(!1===this.state.win&&document.addEventListener("keydown",this.handleKeyPress),e=a.a.createElement("div",null,a.a.createElement("div",{class:"float-button"},(parseInt(this.state.timer/60)+"").padStart(2,"0")+":"+(parseInt(this.state.timer%60)+"").padStart(2,"0")),a.a.createElement(y,{size:this.state.size,blank:this.state.blank,puzzleArray:this.state.puzzleArray}))),!0===this.state.started&&!0===this.state.win&&(document.removeEventListener("keydown",this.handleKeyPress),e=a.a.createElement("div",null,a.a.createElement(this.Wintext,null),e)),e}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.4fa55eaf.chunk.js.map