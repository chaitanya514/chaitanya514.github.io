(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=(a(48),a(31),a(3)),i=(a(97),a(10)),m=a(4),s=a(12),u=a(13),d=a(15),h=a(14),p=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100",margin:"auto"}},r.a.createElement(o.Grid,{className:"landing-grid"},r.a.createElement(o.Cell,{col:12},r.a.createElement("img",{src:"https://miro.medium.com/max/1200/1*lbRRHICAZjLkotvrMY7MLQ.png",alt:"avatar",className:"avatar-img"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,"Full-Stack Developer"),r.a.createElement("hr",null),r.a.createElement("p",null,"HTML/CSS | JavaScript | React | React-Native| Redux | Postgres | GraphQL | MongoDB | Express | Node"),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/chaitanya-patel-a195579a/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),r.a.createElement("a",{href:"https://github.com/chaitanya514",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})))))))}}]),a}(n.Component),E=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Me"))}}]),a}(n.Component),b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Contact"))}}]),a}(n.Component),v=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={activeTab:0},n}return Object(u.a)(a,[{key:"toggleCategories",value:function(){return 0===this.state.activeTab?r.a.createElement("div",{className:"project-grid"},r.a.createElement(o.Card,{shadow:0,style:{width:"350px",height:"350px",margin:"auto"}},r.a.createElement(o.CardTitle,{expand:!0,style:{color:"#fff",background:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png) bottom right 15% no-repeat #46B6AC"}},"React Project #1"),r.a.createElement(o.CardText,null,"counter react project"),r.a.createElement(o.CardActions,{border:!0},r.a.createElement(o.Button,{colored:!0},"GitHub Repo."))),r.a.createElement(o.Card,{shadow:0,style:{width:"350px",height:"350px",margin:"auto"}},r.a.createElement(o.CardTitle,{expand:!0,style:{color:"#fff",background:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png) bottom right 15% no-repeat #46B6AC"}},"React Project #1"),r.a.createElement(o.CardText,null,"counter react project"),r.a.createElement(o.CardActions,{border:!0},r.a.createElement(o.Button,{colored:!0},"GitHub Repo."))),r.a.createElement(o.Card,{shadow:0,style:{width:"350px",height:"350px",margin:"auto"}},r.a.createElement(o.CardTitle,{expand:!0,style:{color:"#fff",background:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png) bottom right 15% no-repeat #46B6AC"}},"React Project #1"),r.a.createElement(o.CardText,null,"counter react project"),r.a.createElement(o.CardActions,{border:!0},r.a.createElement(o.Button,{colored:!0},"GitHub Repo.")))):1===this.state.activeTab?r.a.createElement("div",null,r.a.createElement("h1",null,"This is Redux")):2===this.state.activeTab?r.a.createElement("div",null,r.a.createElement("h1",null,"This is Postgres")):3===this.state.activeTab?r.a.createElement("div",null,r.a.createElement("h1",null,"This is GraphQl")):void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"demo-tabs"},r.a.createElement(o.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(o.Tab,null,"React"),r.a.createElement(o.Tab,null,"Redux"),r.a.createElement(o.Tab,null,"Postgres"),r.a.createElement(o.Tab,null,"GraphQl")),r.a.createElement("section",{className:"demo-tab"},r.a.createElement("div",{className:"content"},"Content for the tab: ",this.state.activeTab,r.a.createElement(o.Grid,{className:"projects-grid"},r.a.createElement(o.Cell,{col:12},r.a.createElement("div",{className:"content"}," ",this.toggleCategories()))))))}}]),a}(n.Component),g=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Resume"))}}]),a}(n.Component),f=function(){return r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:p}),r.a.createElement(m.a,{path:"/Aboutme",component:E}),r.a.createElement(m.a,{path:"/Contact",component:b}),r.a.createElement(m.a,{path:"/Projects",component:v}),r.a.createElement(m.a,{path:"/Resume",component:g}))};var C=function(){return r.a.createElement("div",{className:"demo-big-content"},r.a.createElement(o.Layout,null,r.a.createElement(o.Header,{className:"header-color",title:"Chaitanya Patel",scroll:!0},r.a.createElement(o.Navigation,null,r.a.createElement(i.b,{to:"/Resume"},"Resume"),r.a.createElement(i.b,{to:"/Projects"},"Projects"),r.a.createElement(i.b,{to:"/Aboutme"},"About Me"),r.a.createElement(i.b,{to:"/Contact"},"Contact"))),r.a.createElement(o.Drawer,{title:"Chaitanya Patel"},r.a.createElement(o.Navigation,null,r.a.createElement(i.b,{to:"/Resume"},"Resume"),r.a.createElement(i.b,{to:"/Aboutme"},"Projects"),r.a.createElement(i.b,{to:"/Aboutme"},"About Me"),r.a.createElement(i.b,{to:"/Contact"},"Contact"))),r.a.createElement(o.Content,null,r.a.createElement("div",{className:"page-content"}),r.a.createElement(f,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(100);l.a.render(r.a.createElement(i.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,a){},43:function(e,t,a){e.exports=a(101)},48:function(e,t,a){}},[[43,1,2]]]);
//# sourceMappingURL=main.363a37be.chunk.js.map