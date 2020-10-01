(this.webpackJsonpuptag=this.webpackJsonpuptag||[]).push([[0],{26:function(e,t,a){e.exports=a(53)},31:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(23),r=a.n(i),c=(a(31),a(8)),s=a.n(c),l=a(24),u=a(2),m=a(3),v=a(5),p=a(4),h=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.currentMovie;return o.a.createElement("div",{className:"App wrapper"},o.a.createElement("section",{className:"movie"},o.a.createElement("h3",null,e?e.title:"Movie Title Not Found"),o.a.createElement("div",{className:"movieBox"},o.a.createElement("button",{onClick:this.props.handleClickLeft,className:"bigButt"},o.a.createElement("i",{className:"fas fa-chevron-circle-left"})),o.a.createElement("div",{className:"imgContainer"},o.a.createElement("img",{src:e?e.img:"No poster = no posts. Try another",alt:"The promotional poster for the movie ".concat(e.title)})),o.a.createElement("button",{onClick:this.props.handleClickRight,className:"bigButt"},o.a.createElement("i",{className:"fas fa-chevron-circle-right"}))),o.a.createElement("p",{className:"winner"},e?e.title:"Movie Title Not Found")))}}]),a}(n.Component),d=a(9),f=a.n(d);a(34);f.a.initializeApp({apiKey:"AIzaSyDvlxTwfSMPppXfDKDaMX-SE0aREjUt0w4",authDomain:"uptag-623f0.firebaseapp.com",databaseURL:"https://uptag-623f0.firebaseio.com",projectId:"uptag-623f0",storageBucket:"uptag-623f0.appspot.com",messagingSenderId:"369383170296",appId:"1:369383170296:web:5475a44309b2b9d8bddb0d"});var g=f.a,b=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).getComments=function(){g.database().ref().on("value",(function(t){var a=[],n=t.val();for(var o in n)a.push({key:o,id:n[o].id,tag:n[o].tag,voteCount:n[o].voteCount});e.setState({comments:a})}))},e.handleChange=function(t){e.setState({userTag:t.target.value})},e.handleClick=function(t){t.preventDefault();var a=g.database().ref(),n={id:e.props.movieID,tag:e.state.userTag,voteCount:0};a.push(n),e.setState({userTag:""})},e.upVote=function(){var t=g.database().ref(),a=e.state.voteCount+1;t.push(a)},e.state={comments:[],userTag:""},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getComments()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"commentList"},o.a.createElement("form",{action:"submit"},o.a.createElement("label",{htmlFor:"newTag",className:"visuallyHidden"},"tag it"),o.a.createElement("input",{type:"text",id:"newTag",className:"",onChange:this.handleChange,value:this.state.userTag}),o.a.createElement("button",{onClick:this.handleClick,className:"tag"},"tag it")),o.a.createElement("ul",null,this.state.comments.filter((function(t){return t.id===e.props.movieID})).sort((function(e,t){return parseInt(e.voteCount)-t.voteCount})).map((function(t){return o.a.createElement("li",{key:t.key},o.a.createElement("div",null,o.a.createElement("p",{className:"votes",id:"voteCount"},o.a.createElement("span",null,t.voteCount))),o.a.createElement("p",{className:"tagged"},t.tag),o.a.createElement("div",{className:"voteButtBox"},o.a.createElement("button",{className:"voteButt",onClick:e.upVote},o.a.createElement("i",{className:"fas fa-chevron-circle-up"})),o.a.createElement("button",{className:"voteButt",onClick:t.downVote},o.a.createElement("i",{className:"fas fa-chevron-circle-down"}))))}))))}}]),a}(n.Component),E=a(25),C=a.n(E),k=(a(52),function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).fetchPosters=Object(l.a)(s.a.mark((function t(){var a,n,o,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"3a88c3b23db1c59c856ca8f70aa6fb16",a="http://image.tmdb.org/t/p/w185",n=[594084,694919,550412,582218,726739].map((function(e){return C()({url:"https://api.themoviedb.org/3/movie/".concat(e),params:{api_key:"3a88c3b23db1c59c856ca8f70aa6fb16",language:"en-US"}})})),t.next=6,Promise.all(n);case 6:o=t.sent,i=[],o.forEach((function(e){var t=e.data,n={id:t.id,title:t.original_title,img:a+t.poster_path};i.push(n)})),e.setState({movieList:i,currentMovie:i[e.state.currentMovieIndex]});case 10:case"end":return t.stop()}}),t)}))),e.movieChange=function(t){e.setState({currentMovie:t})},e.handleClickRight=function(){var t=e.state.currentMovieIndex+1;t>=e.state.movieList.length&&(t=0),e.setState({currentMovieIndex:t,currentMovie:e.state.movieList[t]})},e.handleClickLeft=function(){var t=e.state.currentMovieIndex-1;t<0&&(t=e.state.movieList.length-1),e.setState({currentMovieIndex:t,currentMovie:e.state.movieList[t]})},e.state={movieList:[],currentMovie:{},currentMovieIndex:0},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchPosters()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App wrapper"},o.a.createElement(h,{movieChange:this.movieChange,currentMovie:this.state.currentMovie,handleClickLeft:this.handleClickLeft,handleClickRight:this.handleClickRight}),o.a.createElement(b,{movieID:this.state.currentMovie.id}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.b26325b2.chunk.js.map