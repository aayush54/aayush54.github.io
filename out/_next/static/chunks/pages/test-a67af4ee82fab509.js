(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{5693:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return o(7573)}])},7344:function(e,t,o){"use strict";o.d(t,{t:function(){return i}});var n=o(5893),r=o(7294),a=o(6124),l=(o(5675),o(537)),c=o.n(l),i=function(){var e=(0,r.useState)(!0),t=e[0],o=e[1];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(a.u,{opened:t,onClose:function(){return o(!1)},title:"This site is under construction!",transition:"fade",transitionDuration:600,transitionTimingFunction:"ease",children:[(0,n.jsx)("div",{className:c().background}),(0,n.jsx)("p",{children:"Hi! Thanks for visiting my site. I'm still working on some of the cooler, prettier stuff but feel free to look around"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})})}},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(4941).Z;o(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,a=o(7273).Z,l=r(o(7294)),c=o(6273),i=o(2725),s=o(3462),u=o(1018),f=o(7190),d=o(1210),p=o(8684),_={};function h(e,t,o,n){if(e&&c.isLocalURL(t)){Promise.resolve(e.prefetch(t,o,n)).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;_[t+"%"+o+(r?"%"+r:"")]=!0}}var m=l.default.forwardRef((function(e,t){var o,r=e.href,m=e.as,v=e.children,x=e.prefetch,j=e.passHref,y=e.replace,g=e.shallow,C=e.scroll,b=e.locale,L=e.onClick,k=e.onMouseEnter,H=e.onTouchStart,N=e.legacyBehavior,P=void 0===N?!0!==Boolean(!1):N,w=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=v,!P||"string"!==typeof o&&"number"!==typeof o||(o=l.default.createElement("a",null,o));var E=!1!==x,M=l.default.useContext(s.RouterContext),R=l.default.useContext(u.AppRouterContext);R&&(M=R);var T,O=l.default.useMemo((function(){var e=n(c.resolveHref(M,r,!0),2),t=e[0],o=e[1];return{href:t,as:m?c.resolveHref(M,m):o||t}}),[M,r,m]),A=O.href,D=O.as,K=l.default.useRef(A),S=l.default.useRef(D);P&&(T=l.default.Children.only(o));var B=P?T&&"object"===typeof T&&T.ref:t,U=n(f.useIntersection({rootMargin:"200px"}),3),Z=U[0],V=U[1],I=U[2],Q=l.default.useCallback((function(e){S.current===D&&K.current===A||(I(),S.current=D,K.current=A),Z(e),B&&("function"===typeof B?B(e):"object"===typeof B&&(B.current=e))}),[D,B,A,I,Z]);l.default.useEffect((function(){var e=V&&E&&c.isLocalURL(A),t="undefined"!==typeof b?b:M&&M.locale,o=_[A+"%"+D+(t?"%"+t:"")];e&&!o&&h(M,A,D,{locale:t})}),[D,A,V,b,E,M]);var F={ref:Q,onClick:function(e){P||"function"!==typeof L||L(e),P&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,o,n,r,a,i,s,u,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(o)){e.preventDefault();var d=function(){"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:s,scroll:i}):t[r?"replace":"push"](o,{forceOptimisticNavigation:!f})};u?l.default.startTransition(d):d()}}(e,M,A,D,y,g,C,b,Boolean(R),E)},onMouseEnter:function(e){P||"function"!==typeof k||k(e),P&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),!E&&R||c.isLocalURL(A)&&h(M,A,D,{priority:!0})},onTouchStart:function(e){P||"function"!==typeof H||H(e),P&&T.props&&"function"===typeof T.props.onTouchStart&&T.props.onTouchStart(e),!E&&R||c.isLocalURL(A)&&h(M,A,D,{priority:!0})}};if(!P||j||"a"===T.type&&!("href"in T.props)){var G="undefined"!==typeof b?b:M&&M.locale,q=M&&M.isLocaleDomain&&d.getDomainLocale(D,G,M.locales,M.domainLocales);F.href=q||p.addBasePath(i.addLocale(D,G,M&&M.defaultLocale))}return P?l.default.cloneElement(T,F):l.default.createElement("a",Object.assign({},w,F),o)}));t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,o(2648).Z)(o(7294)),r=n.default.createContext(null);t.AppRouterContext=r;var a=n.default.createContext(null);t.LayoutRouterContext=a;var l=n.default.createContext(null);t.GlobalLayoutRouterContext=l;var c=n.default.createContext(null);t.TemplateContext=c},7573:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return _}});var n=o(5893),r=(o(7294),o(9008)),a=o.n(r),l=o(5675),c=o.n(l),i=o(1673),s=o.n(i),u=o(7344),f=o(1664),d=o.n(f),p=["Hello",","," ","I'm"," ","Aayush",","," ","student",","," ","software engineer",","," ","etc","."];function _(){return console.log(p),(0,n.jsxs)("div",{className:s().container,children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(u.t,{}),(0,n.jsxs)("main",{className:s().main,children:[(0,n.jsxs)("div",{className:s().hello,children:[(0,n.jsx)("div",{className:s().left,children:p.map((function(e,t){return" "!==e?(0,n.jsx)("div",{className:s().letter,children:e},t):(0,n.jsx)("div",{className:s().space},t)}))}),(0,n.jsx)("div",{className:s().right,children:(0,n.jsx)("h1",{children:"A"})})]}),(0,n.jsx)("div",{className:s().grid,children:(0,n.jsx)(d(),{href:"/projects",children:(0,n.jsxs)("a",{className:s().card,children:[(0,n.jsx)("h2",{children:"Projects \u2192"}),(0,n.jsx)("p",{children:"Check out some projects I've worked on"})]})})})]}),(0,n.jsx)("footer",{className:s().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:s().logo,children:(0,n.jsx)(c(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},537:function(e){e.exports={text:"ConstructionPopup_text__KqeYV",background:"ConstructionPopup_background__xul53"}},1673:function(e){e.exports={container:"Home_container__97eC3",main:"Home_main__OVLM4",hello:"Home_hello__jJ7Vl",left:"Home_left__PDvAo",right:"Home_right__Q3ZHY",space:"Home_space__5mKVl",letter:"Home_letter__ZWWQ3",footer:"Home_footer__zed0_",title:"Home_title__q0Qg4",description:"Home_description__JhekB",code:"Home_code__2i1pD",grid:"Home_grid__npx0i",card:"Home_card__K7aTN",logo:"Home_logo__FLQOc"}},1664:function(e,t,o){e.exports=o(8418)}},function(e){e.O(0,[959,124,774,888,179],(function(){return t=5693,e(e.s=t);var t}));var t=e.O();_N_E=t}]);