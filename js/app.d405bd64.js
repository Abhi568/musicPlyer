(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],p=0,d=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/musicPlyer/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"12ac":function(t,e,n){t.exports=n.p+"media/AUD-20220523-WA0000.0a845e0c.mp3"},"20ae":function(t,e,n){t.exports=n.p+"media/Teri Jhalak Asharfi.5f7653d3.mp3"},"33a6":function(t,e,n){t.exports=n.p+"media/Kyon Ki Itna Pyaar Tumse.a6d9a89d.mp3"},"3af1":function(t,e,n){t.exports=n.p+"media/Yaaron Sab Dua Karo - Stebin Ben.cf6d6246.mp3"},"3b73":function(t,e,n){t.exports=n.p+"media/Dil_Tod_Ke_1.4ec64cba.mp3"},"437e":function(t,e,n){t.exports=n.p+"media/O Mere Dil Ke Chain - Mere Jeevan Saathi 128 Kbps.aff69e1f.mp3"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"https://unpkg.com/element-ui/lib/theme-chalk/index.css"}}),a("div",{staticClass:"header_container"},[t._m(0),a("el-autocomplete",{attrs:{"popper-class":"my-autocomplete","fetch-suggestions":t.querySearchAsync,placeholder:t.placeholder,"trigger-on-focus":!1},on:{select:t.handleSelect},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[a("span",{staticClass:"value"},[t._v(t._s(n.title))])]}}]),model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1),a("div",{staticClass:"body_container"},t._l(t.songs,(function(e,i){return a("div",{key:i},[a("div",{staticClass:"song_play",on:{click:function(n){return t.playSong(e)}}},[a("h2",[t._v(t._s(e.title))]),a("img",{staticStyle:{display:"none"},attrs:{id:"visible_play_animation"+i,src:n("ccf9"),alt:""}})])])})),0),a("div",{staticClass:"bottom_play_div"},[t.playSongVisible?a("div",{staticClass:"bottom_play_song"},[a("div",{staticClass:"bottom_play_songleft"},[a("h2",[a("i",[t._v("Title:")]),t._v(" "+t._s(t.currSong.title)+" ")]),a("h2",[a("i",[t._v("Artists:")]),t._v(" "+t._s(t.currSong.artist)+" ")])]),a("div",{staticClass:"images"},[t.playSongVar?a("img",{staticClass:"bottom_animation_icon",attrs:{src:n("ccf9"),alt:""}}):t._e(),a("img",{attrs:{src:"https://www.shareicon.net/data/512x512/2016/04/10/747449_arrows_512x512.png",alt:""},on:{click:t.playBackSong}}),t.playSongVar?a("img",{attrs:{src:"http://icons.iconarchive.com/icons/mazenl77/I-like-buttons/64/Aqua-Pause-icon.png",alt:""},on:{click:t.pauseCurrSong}}):a("img",{attrs:{src:"https://www.freepngimg.com/thumb/button/63144-play-icons-button-youtube-computer-icon.png",alt:""},on:{click:function(e){return t.playSong(t.currSong)}}}),a("img",{attrs:{src:"https://cdn4.iconfinder.com/data/icons/flat-circle-content/800/circle-content-play-512.png",alt:""},on:{click:t.playNextSong}})]),a("div",{staticClass:"bottom_play_song_right",on:{click:t.cancelSong}},[a("img",{attrs:{src:"https://freesvg.org/img/mcol_cross.png",alt:""}})])]):t._e()])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app_title"},[n("img",{attrs:{src:"https://www.downloadclipart.net/large/9405-music-icon-design.png",alt:""}}),n("h1",[t._v("Music Player")])])}],s=n("b85c"),r=(n("4de4"),n("d3b7"),{name:"App",data:function(){return{links:[],state:"",timeout:null,inputValue:"",newPlayList:[],counter:0,currSong:"",playSongVisible:!1,playSongVar:!1,placeholder:"🎻 Search By Song Name or Singer Name ♬",songs:[{title:"Teri Jhalak Asharfi",artist:"Javed Ali",src:n("20ae")},{title:"Main Duniya Bhula Doonga",artist:"Nadeem Akhtar Saifi, Shravan Kumar Rathod",src:n("f668")},{title:"Mere Sapnon Ki Rani",artist:"Kishore Kumar",src:n("d016")},{title:"Kyon Ki Itna Pyaar Tumse",artist:"Alka Yagnik, Udit Narayan",src:n("33a6")},{title:"Yaaron Sab Dua Karo",artist:"Stebin Ben & Danish Sabri",src:n("3af1")},{title:"Dil tod ke",artist:"B Praak",src:n("3b73")},{title:"Mujho saja de",artist:"Yasser Desai",src:n("12ac")},{title:"O Mere Dil Ke Chain",artist:"Kishore Kumar",src:n("437e")},{title:"Rab Se Tujhe Maanga Kare",artist:"Darpan Shah",src:n("bbdd")},{title:"Teri Aadat Pai Gayi Aa",artist:"Ninja",src:n("778e")},{title:"Choti-Choti-Gaiya-Chote-Chote-Gwal",artist:"Studio Sangeeta",src:n("e2bd")},{title:"Hare Krishna Hare Rama",artist:"Devangi Das, Manoj Sargam",src:n("fe30")}],player:new Audio}},mounted:function(){this.links=this.loadAll()},methods:{loadAll:function(){return this.songs},querySearchAsync:function(t,e){var n=this.links,a=t?n.filter(this.createFilter(t)):n;clearTimeout(this.timeout),this.timeout=setTimeout((function(){e(a)}),3e3*Math.random())},createFilter:function(t){return function(e){return-1!==e.title.toLowerCase().indexOf(t.toLowerCase())||-1!==e.artist.toLowerCase().indexOf(t.toLowerCase())}},handleSelect:function(t){this.playSong(t)},playBackSong:function(){document.getElementById("visible_play_animation".concat(this.counter)).style.display="none",this.counter>0?(this.counter-=1,document.getElementById("visible_play_animation".concat(this.counter)).style.display="block"):(this.counter=this.songs.length-1,document.getElementById("visible_play_animation".concat(this.counter)).style.display="block"),this.player.src=this.songs[this.counter].src,this.currSong=this.songs[this.counter],this.player.play()},playNextSong:function(){document.getElementById("visible_play_animation".concat(this.counter)).style.display="none",this.counter+1>this.songs.length-1?(this.counter=0,document.getElementById("visible_play_animation".concat(this.counter)).style.display="block"):(this.counter+=1,document.getElementById("visible_play_animation".concat(this.counter)).style.display="block"),this.player.src=this.songs[this.counter].src,this.currSong=this.songs[this.counter],this.player.play()},playSong:function(t){document.getElementById("visible_play_animation".concat(this.counter)).style.display="none",this.currSong=t,this.player.src=t.src,this.player.play(),this.playSongVisible=!0,this.playSongVar=!0,this.counter=0;var e,n=Object(s["a"])(this.songs);try{for(n.s();!(e=n.n()).done;){if(t=e.value,this.currSong.title===t.title)return document.getElementById("visible_play_animation".concat(this.counter)).style.display="block",!1;this.counter+=1}}catch(a){n.e(a)}finally{n.f()}},pauseCurrSong:function(){this.player.src=this.currSong.src,this.player.pause(),document.getElementById("visible_play_animation".concat(this.counter)).style.display="none",this.playSongVar=!1},cancelSong:function(){this.player.pause(),this.playSongVisible=!1,this.playSongVar=!1,document.getElementById("visible_play_animation".concat(this.counter)).style.display="none"}}}),c=r,l=(n("5c0b"),n("2877")),u=Object(l["a"])(c,i,o,!1,null,null,null),p=u.exports,d=n("5c96"),h=n.n(d);a["default"].config.productionTip=!1,a["default"].use(h.a),new a["default"]({render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"778e":function(t,e,n){t.exports=n.p+"media/Teri Aadat Pai Gayi Aa(Mr-Jatt1.com).59c495fb.mp3"},"9c0c":function(t,e,n){},bbdd:function(t,e,n){t.exports=n.p+"media/Rab Se Tujhe Maanga Kare (EDM Version)(PaglaSongs).0b471762.mp3"},ccf9:function(t,e,n){t.exports=n.p+"img/play_icon.7c863d39.gif"},d016:function(t,e,n){t.exports=n.p+"media/Mere Sapnon Ki Rani.6cdd24f1.mp3"},e2bd:function(t,e,n){t.exports=n.p+"media/Choti-Choti-Gaiya-Chote-Chote-Gwal.05bcc3d9.mp3"},f668:function(t,e,n){t.exports=n.p+"media/Main Duniya Bhula Doonga.088df7bc.mp3"},fe30:function(t,e,n){t.exports=n.p+"media/Hare Krishna Hare Rama.08f09a95.mp3"}});
//# sourceMappingURL=app.d405bd64.js.map