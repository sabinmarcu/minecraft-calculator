(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[0],{127:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n(17),i=(n(126),n(127),n(9)),o=n(69),u=n(12),l=n(235),s=n(213),j=n(10),b=n(61),f=n(14),O=n(8),d=function(){var e=Object(u.f)(),t=Object(c.useMemo)((function(){return window.location.search.substr(1).split("&").map((function(e){return e.split("=").map(decodeURIComponent)})).reduce((function(e,t){var n=Object(O.a)(t,2),r=n[0],c=n[1];return Object(f.a)(Object(f.a)({},e),{},{[r]:c})}),{})}),[]);return Object(c.useEffect)((function(){t.r&&e.push(t.r)}),[t,e]),Object(r.jsx)(r.Fragment,{})},p=n(173),m=n(40),v=n(217),x=n(45),h=n(103),g=n.n(h),y=n(102),C=n.n(y),w=n(101),k=n.n(w),S=n(104),E=n.n(S),A=Object(c.createContext)({isOpen:!1,open:function(){},close:function(){},toggle:function(){}}),I=function(){return Object(c.useContext)(A)},R=function(e){var t=e.children,n=Object(c.useState)(!1),a=Object(O.a)(n,2),i=a[0],o=a[1],u=Object(c.useCallback)((function(){return o(!0)}),[o]),l=Object(c.useCallback)((function(){return o(!1)}),[o]),s=Object(c.useCallback)((function(){return o((function(e){return!e}))}),[o]);return Object(r.jsx)(A.Provider,{value:{isOpen:i,open:u,close:l,toggle:s},children:t})},V=Object(c.createContext)({title:"Unknown",isRoot:!1,setTitle:function(){}}),M=function(){return Object(c.useContext)(V)},L=function(e){var t=e.children,n=Object(c.useState)("Unknown"),a=Object(O.a)(n,2),i=a[0],o=a[1],u=Object(c.useState)(!1),l=Object(O.a)(u,2),s=l[0],j=l[1],b=Object(c.useCallback)((function(e,t){o(e),j(!!t)}),[o,j]);return Object(r.jsx)(V.Provider,{value:{title:i,isRoot:s,setTitle:b},children:t})},B=function(e){var t=e.title,n=e.isRoot,a=e.children,i=M().setTitle;return Object(c.useEffect)((function(){return i(t||("string"===typeof a?a:void 0)||"unknown",n)}),[i,t,n]),Object(r.jsx)(r.Fragment,{})},T=n(109),F=n(209),P=n(18),N=!1,J="app",D=function(){var e;return N&&(e=console).groupCollapsed.apply(e,arguments)},z=function(){return N&&console.groupEnd()},U=function(){var e;return N&&(e=console).log.apply(e,arguments)},W=function(e,t){D("".concat(e," %c").concat(t),"color: grey; font-size: 0.9em");for(var n=arguments.length,r=new Array(n>2?n-2:0),c=2;c<n;c++)r[c-2]=arguments[c];r.forEach((function(e){Array.isArray(e)?U.apply(void 0,Object(P.a)(e)):U(e)})),z()},H=function(e){return new RegExp(["^",J].concat(Object(P.a)("undefined"!==typeof e?[":",e]:[])).join(""))},K=function(e,t){return[J,[t,e].join("")].join(":")},$=function(e,t){return e.match(H(t))},_=function(e){return"###".concat(e,"###")},G=function(e){return e.match(/^###([^#]+)###$/)},Z=function(e,t,n){W(e,t,["Key: %c".concat(t),"color: blue; text-decoration: underline"],["LocalStorage Key: %c".concat([J,t].join(":")),"color: blue; text-decoration: underline"],["Value:",n])},q=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e}),[e]),t.current},Q=function(e,t){var n=q(e),r=Object(c.useState)(!1),a=Object(O.a)(r,2),i=a[0],o=a[1],u=Object(c.useState)(),l=Object(O.a)(u,2),s=l[0],j=l[1];return Object(c.useEffect)((function(){if(!i||n!==e){o(!0);var r=localStorage.getItem(K(e));if(r)try{Z("\u2699 LocalStorage Get",e,r),j(JSON.parse(r))}catch(c){Z("\u274c Could not parse LS data",e,r),j(t)}else j(t)}}),[i,e,t]),Object(c.useEffect)((function(){if(i){var t=!0;try{var n=localStorage.getItem(K(e));try{n=JSON.parse(n)}catch(r){console.error(r)}finally{n&&n===s&&(t=!1)}}finally{t&&(null===s?(Z("\u2699 LocalStorage Remove",e,s),localStorage.removeItem(K(e))):(Z("\u2699 LocalStorage Set",e,s),localStorage.setItem(K(e),JSON.stringify(s))))}}}),[e,s,i]),Object(c.useEffect)((function(){var t=function(t){var n=t.storageArea,r=t.key,c=t.oldValue,a=t.newValue;if(r){var i=$(r),o=n===localStorage,u=r===K(e);if(o&&i&&u)try{var l=[JSON.parse(c),JSON.parse(a)],s=l[1];W("\u2699 LocalStorage Event",e,["Old Value: %c".concat(l[0]),"color: red; text-decoration: underline"],["New Value: %c".concat(s),"color: green; text-decoration: underline"]),j(s)}catch(b){Z("\u274c Could not parse LS data from Event",e,a)}}};return window.addEventListener("storage",t),function(){return window.removeEventListener("storage",t)}}),[j,e]),[s,j]},X=function(e){return window.matchMedia(e)},Y=function(e){var t=Object(c.useState)(X(e).matches),n=Object(O.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){var t=function(e){var t=e.matches;return a(t)},n=X(e);return n.addEventListener("change",t),function(){return n.removeEventListener("change",t)}}),[e,a]),r},ee={dark:Object(T.a)({palette:{type:"dark"}}),light:Object(T.a)({palette:{type:"light"}})},te="dark",ne=Object(c.createContext)({theme:te,t:ee.dark,toggle:function(){}}),re=function(e){var t=e.children,n=Q("theme",te),a=Object(O.a)(n,2),i=a[0],o=a[1],u=Q("theme-select"),l=Object(O.a)(u,2),s=l[0],j=l[1],b=Object(c.useCallback)((function(){j(!0),o((function(e){return"light"===e?"dark":"light"}))}),[o,j]),f=Object(c.useMemo)((function(){return i?ee[i]:ee.light}),[i]),d=Y("(prefers-color-scheme: light)"),p=Y("(prefers-color-scheme: dark)");return Object(c.useEffect)((function(){s||o(d?"light":p?"dark":te)}),[i,s,d,p,o]),Object(r.jsx)(ne.Provider,{value:{theme:i||"light",t:f,toggle:b},children:Object(r.jsx)(F.a,{theme:f,children:t})})},ce=n(210),ae=n(214),ie=n(215),oe=n(216),ue="(max-width: 500px)",le=function(){return Y(ue)};function se(){var e=Object(i.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: flex-end;\n"]);return se=function(){return e},e}function je(){var e=Object(i.a)(["\n  flex: 1;\n"]);return je=function(){return e},e}function be(){var e=Object(i.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  width: 100%;\n"]);return be=function(){return e},e}function fe(){var e=Object(i.a)(["\n  padding: 25px !important;\n  margin-top: 25px !important;\n  display: flex !important;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  outline: 0;\n  "," {\n    margin: 0;\n    width: 100vw;\n    padding: 15px;\n  }\n"]);return fe=function(){return e},e}function Oe(){var e=Object(i.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: inherit;\n"]);return Oe=function(){return e},e}function de(){var e=Object(i.a)(["\n    ","\n  "]);return de=function(){return e},e}var pe="@media ".concat(ue),me=function(e){var t=e.theme,n=t.palette,r=n.background.paper,c=n.text.primary,a=Object(O.a)(t.shadows,2)[1];return"\n  background: ".concat(r,";\n  color: ").concat(c,";\n  box-shadow: ").concat(a,"\n")},ve=Object(l.a)(Object(j.a)(ce.a)(de(),me)),xe=Object(j.a)(o.b)(Oe()),he=Object(j.a)(s.a)(fe(),pe),ge=function(e){var t=e.children,n=le(),c=Object(b.a)();return Object(r.jsx)(he,Object(f.a)(Object(f.a)({},n?{style:{height:c||"100vh"}}:{}),{},{children:t}))},ye=Object(j.a)(ae.a)(be()),Ce=Object(j.a)(ie.a)(je()),we=Object(j.a)(oe.a)(se());function ke(){var e=Object(i.a)(["\n  width: 100%;\n"]);return ke=function(){return e},e}function Se(){var e=Object(i.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n"]);return Se=function(){return e},e}function Ee(){var e=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Ee=function(){return e},e}function Ae(){var e=Object(i.a)(["\n  margin: 0 5px;\n"]);return Ae=function(){return e},e}function Ie(){var e=Object(i.a)(["\n  display: flex !important;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-between;\n"]);return Ie=function(){return e},e}var Re,Ve=Object(j.a)(s.a)(Ie()),Me=Object(j.a)(p.a)(Ae()),Le=Object(j.a)(m.a)(Ee()),Be=j.a.div(Se()),Te=j.a.div(ke()),Fe=function(){var e,t=I().open,n=M(),a=n.title,i=n.isRoot,o=Object(c.useContext)(ne),u=o.theme,l=o.toggle,s=Object(c.useState)(),j=Object(O.a)(s,2),b=j[0],f=j[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Te,{style:{height:null!==(e=null===b||void 0===b?void 0:b.height)&&void 0!==e?e:50}}),Object(r.jsx)(x.a,{bounds:!0,onResize:function(e){var t=e.bounds;return f(t)},children:function(e){var n=e.measureRef;return Object(r.jsx)(v.a,{position:"fixed",ref:n,children:Object(r.jsx)(ve,{children:Object(r.jsxs)(Ve,{children:[Object(r.jsx)(Be,{children:Object(r.jsxs)(Le,{variant:"body1",children:[!i&&Object(r.jsx)(xe,{to:"/",children:Object(r.jsx)(Me,{children:Object(r.jsx)(k.a,{})})}),a]})}),Object(r.jsxs)(Be,{children:[Object(r.jsx)(Me,{onClick:l,children:"light"===u?Object(r.jsx)(C.a,{}):Object(r.jsx)(g.a,{})}),Object(r.jsx)(Me,{onClick:t,children:Object(r.jsx)(E.a,{})})]})]})})})}})]})},Pe=n(231),Ne=n(72),Je=n.n(Ne),De=n(218),ze=n(219),Ue=n(220),We={steelCasing:{input:{steel:4,glass:4,osmium:1},output:1},fissionCasing:{input:{lead:4,steelCasing:1},output:4},fissionReactorPort:{input:{fissionCasing:4,eliteControlCircuit:1},output:2},fissionLogicAdapter:{input:{redstone:4,fissionCasing:1},output:1},fissionFuelAssembly:{input:{lead:6,steel:1,basicChemicalTank:1},output:1},basicChemicalTank:{input:{redstone:4,osmium:4},output:1},controlRodAssembly:{input:{steel:4,lead:4,eliteControlCircuit:1},output:1},reactorGlass:{input:{enrichedIron:4,lead:4,glass:1},output:4},eliteControlCircuit:{input:{reinforcedAlloy:2,advancedControlCircuit:1},output:1},advancedControlCircuit:{input:{infusedAlloy:2,basicControlCircuit:1},output:1},infusedAlloy:{input:{iron:1},output:1},basicControlCircuit:{input:{osmium:1},output:1},reinforcedAlloy:{input:{infusedAlloy:1},output:1},steel:{input:{iron:1},output:1},turbineCasing:{input:{steel:4,osmium:1},output:4},turbineBlade:{input:{steel:4,infusedAlloy:1},output:1},turbineRotor:{input:{steel:6,infusedAlloy:3},output:1},turbineValve:{input:{turbineCasing:4,advancedControlCircuit:1},output:2},turbineVent:{input:{turbineCasing:4,bars:1},output:2},pressureDispenser:{input:{steel:4,bars:4,infusedAlloy:1},output:1},electromagneticCoil:{input:{steel:4,gold:4,energyTablet:1},output:1},rotationalComplex:{input:{infusedAlloy:3,steel:4,advancedControlCircuit:2},output:1},structuralGlass:{input:{steel:4,glass:1},output:4},energyTablet:{input:{gold:3,infusedAlloy:2,redstone:4},output:1},inductionCasing:{input:{steel:4,energyTablet:1},output:4},inductionPort:{input:{inductionCasing:4,eliteControlCircuit:1},output:2},basicInductionCell:{input:{energyTablet:4,lithium:4,basicEnergyCube:1},output:1},basicEnergyCube:{input:{energyTablet:2,iron:2,redstone:4,steelCasing:1},output:1},basicInductionProvider:{input:{lithium:4,basicControlCircuit:4,basicEnergyCube:1},output:1}},He=function e(t,n){return Object.entries(t.input).map((function(t){var r,c,a=Object(O.a)(t,2),i=a[0],o=a[1];return i in n?Object(f.a)(Object(f.a)({},(r=e(n[i],n),c=Math.ceil(o/n[i].output),Object.entries(r).reduce((function(e,t){var n=Object(O.a)(t,2),r=n[0],a=n[1];return Object(f.a)(Object(f.a)({},e),{},{[r]:a*c})}),{}))),{},{["_".concat(i)]:o}):{[i]:o}})).reduce((function(e,t){return Object.entries(t).reduce((function(e,t){var n=Object(O.a)(t,2),r=n[0],c=n[1];return Object(f.a)(Object(f.a)({},e),{},{[r]:(e[r]||0)+c})}),e)}),{})},Ke=function e(t,n,r){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"root",a={name:c,parent:r};return a.children=Object.keys(t.input).map((function(t){return n[t]?e(n[t],n,a,t):{name:t,parent:a}})),a},$e=function e(t,n,r,c){console.log("circular",t,n);var a=Object.keys(n.input);console.log(a);var i=a.reduce((function(e,n){return e||n===t.name}),!1);if(console.log(i),i)return!0;var o=a.map((function(e){return c.find((function(t){return t.name===e}))})).filter(Boolean).filter((function(e){return e.composite})).map((function(e){var t=e.name;return r[t]})).filter(Boolean);return console.log(a.map((function(e){return c.find((function(t){return t.name===e}))})).filter(Boolean)),o.reduce((function(n,a){return n||e(t,a,r,c)}),!1)},_e=function e(t,n){return Object.entries(t).reduce((function(t,r){var c=Object(O.a)(r,2),a=c[0],i=c[1],o=[n,a].join(":");return[].concat(Object(P.a)(t),Object(P.a)("object"===typeof i?[{key:o,value:_(Array.isArray(i)?"array":"object")}].concat(Object(P.a)(e(i,o))):[{key:o,value:i}]))}),[])},Ge=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"object",r=new RegExp("^".concat(t,":[^:]+$")),c=Object.keys(localStorage).sort().filter((function(e){return r.test(e)})).map((function(n){var r=localStorage.getItem(n);if(r){var c=G(r);return c&&(r=e(n,c[1])||r),{key:n.replace([t,""].join(":"),""),value:r}}})).filter(Boolean),a=c.reduce((function(e,t){var n=t.key,r=t.value;return Object(f.a)(Object(f.a)({},e),{},{[n]:/^[0-9]+$/.test(r)?parseInt(r,10):r})}),{});switch(n){case"array":return Array.from(Object(f.a)(Object(f.a)({},a),{},{length:c.reduce((function(e,t){var n=t.key;return Math.max(parseInt(n,10),e)}),0)+1}));case"object":return a;default:return}};!function(e){e[e.remove=0]="remove",e[e.set=1]="set"}(Re||(Re={}));var Ze,qe=function e(t,n,r){var c=Object.keys(t),a=Object.keys(n),i=c.filter((function(e){return!a.includes(e)})).map((function(e){return{key:[r,e].join(":"),action:Re.remove}})),o=a.filter((function(e){return!c.includes(e)})).reduce((function(e,t){return[].concat(Object(P.a)(e),[{key:[r,t].join(":"),value:"object"===typeof n[t]&&(Array.isArray(n[t])?_("array"):_("object"))||n[t],action:Re.set}],Object(P.a)(_e(n[t],[r,t].join(":"))))}),[]).map((function(e){return Object(f.a)(Object(f.a)({},e),{},{action:Re.set})})),u=c.filter((function(e){return a.includes(e)})).filter((function(e){return t[e]!==n[e]})).reduce((function(e,t){return[].concat(Object(P.a)(e),Object(P.a)("object"===typeof n[t]?[{key:[r,t].join(":"),value:Array.isArray(n[t])?_("array"):_("object"),action:Re.set}].concat(Object(P.a)(_e(n[t],[r,t].join(":")).map((function(e){return Object(f.a)(Object(f.a)({},e),{},{action:Re.set})})))):[{key:[r,t].join(":"),value:n[t],action:Re.set}]))}),[]);return[].concat(Object(P.a)(i),Object(P.a)(o),Object(P.a)(u),Object(P.a)(c.filter((function(e){return a.includes(e)})).filter((function(e){return"object"===typeof t[e]})).reduce((function(c,a){return[].concat(Object(P.a)(c),Object(P.a)(e(t[a],n[a],[r,a].join(":"))))}),[]))).filter(Boolean)},Qe=function e(t,n,r){if(0===n.length)return/^[0-9]+$/.test(r)?parseInt(r,10):r;var c=n.indexOf(".");-1===c&&(c=n.length);var a=[n.substr(0,c),n.substr(c+1)],i=a[0],o=a[1];return Object(f.a)(Object(f.a)({},t),{},{[i]:e(t[i]||{},o,r)})};!function(e){e[e.initial=0]="initial",e[e.update=1]="update",e[e.network=2]="network"}(Ze||(Ze={}));var Xe=function(e,t){var n=q(e),r=Object(c.useState)(!1),a=Object(O.a)(r,2),i=a[0],o=a[1],u=Object(c.useState)(),l=Object(O.a)(u,2),s=l[0],j=l[1];Object(c.useEffect)((function(){if(!i||n!==e){o(!0);var r=K(e);localStorage.getItem(r)?j({value:Ge(r),action:Ze.initial}):(j({value:t,action:Ze.initial}),localStorage.setItem(r,_("object")),localStorage.getItem(r)&&_e(t,r).forEach((function(e){var t=e.key,n=e.value;return localStorage.setItem(t,n)})))}}),[i,e,t]);var b=Object(c.useCallback)((function(t){if((null===s||void 0===s?void 0:s.action)===Ze.update){var n=K(e),r=qe(Ge(n),t,n);r&&(Z("\u2699 LocalStorageObject Set",n,null===s||void 0===s?void 0:s.value),r.forEach((function(e){var t=e.key,n=e.value;return e.action===Re.remove?localStorage.removeItem(t):localStorage.setItem(t,n)})))}}),[s,e]),f=Object(c.useCallback)((function(e,t){var n=Qe(null===s||void 0===s?void 0:s.value,e,t);j({value:n,action:Ze.update})}),[s,e,j]);Object(c.useEffect)((function(){i&&((null===s||void 0===s?void 0:s.value)||(Z("\u2699 LocalStorageObject Remove",e,null===s||void 0===s?void 0:s.value),b({}),localStorage.removeItem(K(e))),b(null===s||void 0===s?void 0:s.value))}),[e,s,i,b]),Object(c.useEffect)((function(){var t=function(t){var n=t.storageArea,r=t.key;if(r){var c=$(r);n===localStorage&&c&&j({value:Ge(K(e)),action:Ze.network})}};return window.addEventListener("storage",t),function(){return window.removeEventListener("storage",t)}}),[j,e]);var d=Object(c.useCallback)((function(e){return j({value:e,action:Ze.update})}),[j]);return[null===s||void 0===s?void 0:s.value,d,f]},Ye=Object(c.createContext)({recipes:{},symbols:[],names:[],update:function(){},addRecipe:function(){}}),et=function(){return Object(c.useContext)(Ye)},tt=function(e){var t=e.children,n=Xe("recipes-v3",We),a=Object(O.a)(n,3),i=a[0],o=a[2],u=Object(c.useMemo)((function(){return i?Object.keys(i):[]}),[i]),l=Object(c.useMemo)((function(){return i?[].concat(Object(P.a)(u),Object(P.a)(Object.values(i).reduce((function(e,t){return[].concat(Object(P.a)(e),Object(P.a)(Object.keys(t.input)))}),[]))).sort().filter((function(e,t,n){return n.indexOf(e)===t})):[]}),[i,u]),s=Object(c.useMemo)((function(){return l.map((function(e){return{name:e,composite:u.includes(e)}}))}),[l,u]),j=Object(c.useCallback)((function(e){return o(e,{input:{},output:0})}),[o]);return Object(r.jsx)(Ye.Provider,{value:{recipes:i,symbols:s,names:u,update:o,addRecipe:j},children:t})},nt=Object(c.createContext)({recipe:{input:{},output:-1},resources:{},symbols:[],name:"unknown",update:function(){},addInput:function(){},removeInput:function(){}}),rt=function(e){var t=e.children,n=e.name,a=et(),i=Object(c.useMemo)((function(){var e;return(null===(e=a.recipes)||void 0===e?void 0:e[n])||void 0}),[a,n]),o=Object(c.useMemo)((function(){return(i?Object.keys(i.input):[]).map((function(e){return{name:e,composite:a.names.includes(e)}}))}),[i]),u=Object(c.useCallback)((function(e,t){a.update([n,e].join("."),t)}),[a,n]),l=Object(c.useCallback)((function(e){u(["input",e].join("."),0)}),[u,i]),s=Object(c.useCallback)((function(e){u("input",Object.entries(i.input||{}).filter((function(t){return Object(O.a)(t,1)[0]!==e})).reduce((function(e,t){var n=Object(O.a)(t,2),r=n[0],c=n[1];return Object(f.a)(Object(f.a)({},e),{},{[r]:c})}),{}))}),[u,i]),j=Object(c.useMemo)((function(){return a.recipes?He(i,a.recipes):{}}),[i,a]),b=Object(c.useMemo)((function(){return i?Ke(i,a.recipes,void 0,n):void 0}),[i,a,n]),d=Object(c.useMemo)((function(){return b?function(e,t){for(var n=[e],r=[],c=function(){var e=[];n.filter((function(e){var n=e.name;return t["_".concat(n)]})).forEach((function(n){var r=n.name;e.push({name:r,amount:t["_".concat(r)]||0})})),e.length>0&&r.push(e.filter((function(e,t,n){return n.findIndex((function(t){return t.name===e.name}))===t}))),n=n.filter((function(e){return e.children})).reduce((function(e,t){var n=t.children;return[].concat(Object(P.a)(e),Object(P.a)(n))}),[])};n.length>0;)c();return r.reverse()}(b,j):void 0}),[b,j]);return Object(r.jsx)(nt.Provider,{value:{recipe:i,symbols:o,name:n,resources:j,ast:b,steps:d,update:u,addInput:l,removeInput:s},children:t})},ct=function(){return Object(c.useContext)(nt)},at=function(e){return"".concat(e[0].toUpperCase()).concat(e.substr(1).replace(/[a-z][A-Z]/g,(function(e){return"".concat(e[0]," ").concat(e[1])})))},it=function(){var e=et().recipes,t=Object(c.useMemo)((function(){return Object.keys(e||{}).map((function(e){return{id:e,text:at(e)}}))}),[e]);return Object(r.jsx)(De.a,{children:t.map((function(e){var t=e.id,n=e.text;return Object(r.jsx)(xe,{to:"/recipes/".concat(t),children:Object(r.jsx)(ze.a,{button:!0,children:Object(r.jsx)(Ue.a,{children:n})})},t)}))})},ot=n(236);function ut(){var e=Object(i.a)(["\n  cursor: pointer;\n"]);return ut=function(){return e},e}function lt(){var e=Object(i.a)(["\n  margin: 5px;\n"]);return lt=function(){return e},e}function st(){var e=Object(i.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: flex-start;\n"]);return st=function(){return e},e}var jt=j.a.div(st()),bt=Object(j.a)(ot.a)(lt()),ft=Object(j.a)(bt)(ut()),Ot=function(e){var t=e.symbols,n=e.onDelete;return Object(r.jsx)(jt,{children:t.map((function(e){var t=e.name;return e.composite?Object(r.jsx)(xe,{to:"/recipes/".concat(t),children:Object(r.jsx)(ft,{label:t,onDelete:n&&n(t)})},t):Object(r.jsx)(bt,{variant:"outlined",label:t,onDelete:n&&n(t)},t)}))})},dt=function(){var e=et().symbols;return e?Object(r.jsx)(Ot,{symbols:e}):null};function pt(){var e=Object(i.a)(["\n  display: flex !important;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-between;\n"]);return pt=function(){return e},e}function mt(){var e=Object(i.a)(["\n  margin: 1.5rem 0 !important;\n"]);return mt=function(){return e},e}function vt(){var e=Object(i.a)(["\n  position: sticky !important;\n"]);return vt=function(){return e},e}function xt(){var e=Object(i.a)(["\n  .styledPaper {\n    min-width: min(100vw, 300px);\n    max-width: 500px;\n  }\n  .styledRoot {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: flex-start;\n  }\n"]);return xt=function(){return e},e}var ht=Object(j.a)(Pe.a)(xt()),gt=Object(j.a)(v.a)(vt()),yt=Object(j.a)(s.a)(mt()),Ct=Object(j.a)(s.a)(pt()),wt=function(e){var t=e.children,n=le(),c=I().close;return Object(r.jsx)(gt,{children:Object(r.jsx)(ce.a,{children:Object(r.jsxs)(Ct,{children:[Object(r.jsx)(m.a,{variant:"h4",children:t}),n&&Object(r.jsx)(p.a,{onClick:c,children:Object(r.jsx)(Je.a,{})})]})})})},kt=function(){var e=I(),t=e.isOpen,n=e.open,c=e.close;return Object(r.jsxs)(ht,{open:t,onOpen:n,onClose:c,anchor:"right",classes:{paper:"styledPaper",root:"styledRoot"},children:[Object(r.jsx)(wt,{children:"Symbols"}),Object(r.jsx)(yt,{children:Object(r.jsx)(dt,{})}),Object(r.jsx)(wt,{children:"Recipes"}),Object(r.jsx)(yt,{children:Object(r.jsx)(it,{})})]})},St=function(){var e=Object(u.f)(),t=I().close;return Object(c.useEffect)((function(){return e.listen((function(){t()}))}),[e,t]),Object(r.jsx)(r.Fragment,{})},Et=n(232),At=n(222),It=n(174),Rt=n(223),Vt=n(229),Mt=n(224),Lt=n(225),Bt=n(106),Tt=n.n(Bt),Ft=n(237),Pt=n(233);function Nt(){var e=Object(i.a)(["\n  width: 100%;\n"]);return Nt=function(){return e},e}function Jt(){var e=Object(i.a)(["\n  position: fixed;\n  bottom: 25px;\n  right: 25px;\n"]);return Jt=function(){return e},e}var Dt=j.a.div(Jt()),zt=j.a.div(Nt()),Ut=Object(Ft.a)(),Wt=function(e){var t=e.open,n=e.onClose,a=et(),i=a.symbols,o=a.addRecipe,u=Object(c.useMemo)((function(){return i.filter((function(e){return!e.composite}))}),[i]),l=Object(c.useState)(null),s=Object(O.a)(l,2),j=s[0],b=s[1],d=Object(c.useMemo)((function(){return null===j||void 0===j?void 0:j.name}),[j]),p=Object(c.useCallback)((function(){b(null),n()}),[b,n]),m=Object(c.useCallback)((function(){var e;d&&o("".concat((e=d)[0].toLowerCase()).concat(e.substr(1).replace(/ [a-zA-Z]/g,(function(e){return e[1].toUpperCase()})))),p()}),[d,p]);return Object(r.jsx)(Et.a,{open:t,onClose:p,closeAfterTransition:!0,disableEnforceFocus:!0,disableAutoFocus:!0,BackdropComponent:At.a,BackdropProps:{timeout:500},children:Object(r.jsx)(It.a,{in:t,children:Object(r.jsx)(ge,{children:Object(r.jsxs)(ye,{elevation:10,children:[Object(r.jsx)(Rt.a,{title:"Create new Recipe"}),Object(r.jsx)(Ce,{children:Object(r.jsx)(Pt.a,{value:j,onChange:function(e,t){"string"===typeof t?b({name:t,composite:!1}):t&&t.inputValue?b({name:t.inputValue,composite:!1}):b(t||null)},filterOptions:function(e,t){var n=Ut(e,t);return""!==t.inputValue&&n.push({inputValue:t.inputValue,name:'Add "'.concat(t.inputValue,'"')}),n},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,options:u,getOptionLabel:function(e){return"string"===typeof e?e:e&&e.inputValue?e.inputValue:e.name},renderOption:function(e){var t=e.name;return at(t)},renderInput:function(e){return Object(r.jsx)(Vt.a,Object(f.a)(Object(f.a)({},e),{},{fullWidth:!0,label:"Add Recipe"}))}})}),Object(r.jsxs)(we,{children:[Object(r.jsx)(Mt.a,{color:"primary",variant:"contained",onClick:m,children:"Save"}),Object(r.jsx)(Mt.a,{color:"secondary",onClick:p,children:"Cancel"})]})]})})})})},Ht=function(){var e=Object(c.useState)(!1),t=Object(O.a)(e,2),n=t[0],a=t[1],i=Object(c.useCallback)((function(){return a(!1)}),[a]),o=Object(c.useCallback)((function(){return a(!0)}),[a]),u=Object(c.useState)(),l=Object(O.a)(u,2),s=l[0],j=l[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x.a,{bounds:!0,onResize:function(e){var t=e.bounds;return j(t)},children:function(e){var t=e.measureRef;return Object(r.jsx)(Dt,{ref:t,children:Object(r.jsx)(Lt.a,{onClick:o,color:"primary",children:Object(r.jsx)(Tt.a,{})})})}}),Object(r.jsx)(zt,{style:{height:s?s.height+50:50}}),Object(r.jsx)(Wt,{open:n,onClose:i})]})};function Kt(){var e=Object(i.a)(["\n  display: grid !important;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n  padding: 1rem 0 !important;\n  "," {\n    grid-template-columns: 1fr;\n  }\n"]);return Kt=function(){return e},e}var $t=Object(j.a)(s.a)(Kt(),pe),_t=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(B,{title:"Home",isRoot:!0}),Object(r.jsxs)($t,{children:[Object(r.jsx)("div",{children:Object(r.jsxs)(ae.a,{children:[Object(r.jsx)(Rt.a,{title:"Symbols"}),Object(r.jsx)(ie.a,{children:Object(r.jsx)(dt,{})})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)(ae.a,{children:[Object(r.jsx)(Rt.a,{title:"Recipes"}),Object(r.jsx)(ie.a,{children:Object(r.jsx)(it,{})})]})})]})]})},Gt=n(230),Zt=n(228);function qt(){var e=Object(i.a)(["\n  flex: 1;\n"]);return qt=function(){return e},e}function Qt(){var e=Object(i.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n"]);return Qt=function(){return e},e}function Xt(){var e=Object(i.a)(["\n  margin: 0.5rem 0 !important;\n"]);return Xt=function(){return e},e}function Yt(){var e=Object(i.a)(["\n  display: grid !important;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n  padding: 1rem 0 !important;\n  "," {\n    grid-template-columns: 1fr;\n  }\n"]);return Yt=function(){return e},e}var en=Object(j.a)(s.a)(Yt(),pe),tn=Object(j.a)(Vt.a)(Xt()),nn=Object(j.a)(ae.a)(Qt()),rn=Object(j.a)(ie.a)(qt()),cn=function(e){var t=e.name,n=function(e){var t=ct(),n=t.recipe,r=t.update;return[Object(c.useMemo)((function(){return n.input[e]}),[n]),Object(c.useCallback)((function(t){return r(["input",e].join("."),parseInt(t,10))}),[r])]}(t),a=Object(O.a)(n,2),i=a[0],o=a[1],u=Object(c.useCallback)((function(e){var t=e.target.value;return o(t)}),[o]);return Object(r.jsx)(tn,{fullWidth:!0,label:at(t),value:i,type:"number",onChange:u})},an=function(){var e=function(){var e=ct(),t=e.recipe,n=e.update;return[Object(c.useMemo)((function(){return t.output}),[t]),Object(c.useCallback)((function(e){return n("output",parseInt(e,10))}),[n])]}(),t=Object(O.a)(e,2),n=t[0],a=t[1],i=Object(c.useCallback)((function(e){var t=e.target.value;return a(t)}),[a]);return Object(r.jsx)(tn,{fullWidth:!0,label:"Output Number",value:n,type:"number",onChange:i})},on=Object(Ft.a)(),un=function(){var e=et(),t=e.symbols,n=e.recipes,a=ct(),i=a.name,o=a.symbols,u=a.recipe,l=a.addInput,s=a.removeInput,j=Object(c.useMemo)((function(){var e=o.map((function(e){return e.name})),r=t.filter((function(e){var r=e.name;return!!e.composite&&$e({name:i},n[r],n,t)})).map((function(e){return e.name}));return t.filter((function(t){var n=t.name;return!e.includes(n)&&!r.includes(n)&&n!==i}))}),[o,t,n,i]),b=Object(c.useCallback)((function(e){return function(t){t.preventDefault(),s(e)}}),[s]),d=Object(c.useState)(null),p=Object(O.a)(d,2),m=p[0],v=p[1];return Object(c.useEffect)((function(){m&&(l(m.name),v(null))}),[m,l,v]),u?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(B,{title:"Edit: ".concat(at(i))}),Object(r.jsxs)(en,{children:[Object(r.jsx)("div",{children:Object(r.jsxs)(nn,{children:[Object(r.jsx)(Rt.a,{title:"Symbols Used"}),Object(r.jsx)(rn,{style:{flex:1},children:Object(r.jsx)(Ot,{symbols:o,onDelete:b})}),Object(r.jsx)(ie.a,{children:Object(r.jsx)(Pt.a,{value:m,onChange:function(e,t){"string"===typeof t?v({name:t,composite:!1}):t&&t.inputValue?v({name:t.inputValue,composite:!1}):v(t||null)},filterOptions:function(e,t){var n=on(e,t);return""!==t.inputValue&&n.push({inputValue:t.inputValue,name:'Add "'.concat(t.inputValue,'"')}),n},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,options:j,getOptionLabel:function(e){return"string"===typeof e?e:e&&e.inputValue?e.inputValue:e.name},renderOption:function(e){var t=e.name;return at(t)},renderInput:function(e){return Object(r.jsx)(Vt.a,Object(f.a)(Object(f.a)({},e),{},{fullWidth:!0,label:"Add Symbol"}))}})})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)(nn,{children:[Object(r.jsx)(Rt.a,{title:"Materials"}),Object(r.jsx)(rn,{children:Object.keys(u.input).sort().map((function(e){return Object(r.jsx)(cn,{name:e},e)}))}),Object(r.jsx)(ie.a,{children:Object(r.jsx)(an,{})})]})})]})]}):null},ln=n(226),sn=n(234),jn=n(227),bn=n(108),fn=n.n(bn),On=n(107),dn=n.n(On);function pn(){var e=Object(i.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n"]);return pn=function(){return e},e}function mn(){var e=Object(i.a)(["\n  grid-row-start: 1;\n  grid-row-end: 999;\n  grid-column: 2;\n  "," {\n    grid-row: 3;\n    grid-column: 1;\n  }\n"]);return mn=function(){return e},e}function vn(){var e=Object(i.a)(["\n  max-width: initial !important;\n"]);return vn=function(){return e},e}function xn(){var e=Object(i.a)(["\n  height: calc(95vh - 100px);\n  flex: 0;\n  display: flex;\n  flex-flow: column nowrap;\n"]);return xn=function(){return e},e}function hn(){var e=Object(i.a)(["\n    width: 100%;\n    height: 100%;\n    ","\n    .linkBase {\n      stroke: currentColor;\n      opacity: 0.5 !important;\n    }\n    .nodeBase, .nodeNameBase, .leafNodeBase {\n      fill: currentColor;\n      stroke: transparent;\n    }\n  "]);return hn=function(){return e},e}function gn(){var e=Object(i.a)(["\n  width: 100%;\n  height: 500px;\n  "," {\n    height: 300px;\n  }\n  flex: 1;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n"]);return gn=function(){return e},e}function yn(){var e=Object(i.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n"]);return yn=function(){return e},e}function Cn(){var e=Object(i.a)(["\n\n"]);return Cn=function(){return e},e}function wn(){var e=Object(i.a)(["\n  flex: 1;\n"]);return wn=function(){return e},e}function kn(){var e=Object(i.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-between;\n"]);return kn=function(){return e},e}function Sn(){var e=Object(i.a)(["\n  display: grid !important;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n  padding: 1rem 0 !important;\n  "," {\n    grid-template-columns: 1fr;\n  }\n"]);return Sn=function(){return e},e}var En=Object(j.a)(s.a)(Sn(),pe),An=j.a.div(kn()),In=Object(j.a)(m.a)(wn()),Rn=Object(j.a)(m.a)(Cn()),Vn=function(e){var t=e.text,n=e.amount;return Object(r.jsxs)(An,{children:[Object(r.jsx)(In,{children:at(t)}),Object(r.jsx)(Rn,{children:n})]})},Mn=function(){var e=Object(c.useContext)(nt).resources,t=Object(c.useMemo)((function(){return Object.entries(e).filter((function(e){return!Object(O.a)(e,1)[0].startsWith("_")}))}),[e]);return Object(r.jsxs)(ae.a,{children:[Object(r.jsx)(Rt.a,{title:"Total Resouces"}),Object(r.jsx)(ie.a,{children:t.map((function(e){var t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(r.jsx)(Vn,{text:n,amount:c},n)}))})]})},Ln=Object(j.a)(ae.a)(yn()),Bn=Object(j.a)(ie.a)(gn(),pe),Tn=Object(l.a)(j.a.div(hn(),(function(e){var t=e.theme,n=t.palette,r=n.background.default,c=n.text.primary,a=Object(O.a)(t.shadows,1)[0];return"\n  background: ".concat(r,";\n  color: ").concat(c,";\n  box-shadow: ").concat(a,";\n")}))),Fn=Object(j.a)(Ce)(xn()),Pn=Object(j.a)(ge)(vn()),Nn=function(e){var t=e.data,n=Object(c.useState)(),a=Object(O.a)(n,2),i=a[0],o=a[1],u=Object(c.useMemo)((function(){return i?{x:i.width/2,y:i.height/2}:void 0}),[i]);return Object(r.jsx)(Bn,{children:Object(r.jsx)(x.a,{bounds:!0,onResize:function(e){var t=e.bounds;return o(t)},children:function(e){var n=e.measureRef;return Object(r.jsx)(Tn,{ref:n,children:Object(r.jsx)(dn.a,{data:t,orientation:"vertical",collapsible:!1,translate:u,textLayout:{textAnchor:"start",y:0,x:15}})})}})})},Jn=function(){var e=Object(c.useState)(!1),t=Object(O.a)(e,2),n=t[0],a=t[1],i=Object(c.useCallback)((function(){return a(!0)}),[a]),o=Object(c.useCallback)((function(){return a(!1)}),[a]),u=Object(c.useContext)(nt).ast,l=Object(c.useMemo)((function(){if(u){return function e(t){var n=t.name,r=t.children;return Object(f.a)({name:at(n)},r?{children:r.map(e)}:{})}(u)}}),[u]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(Ln,{children:[Object(r.jsx)(Rt.a,{title:"Dependency Tree"}),l&&Object(r.jsx)(Nn,{data:l}),Object(r.jsx)(we,{children:Object(r.jsx)(Mt.a,{color:"primary",variant:"contained",onClick:i,children:"View Large"})})]}),Object(r.jsx)(Et.a,{open:n,onClose:o,closeAfterTransition:!0,BackdropComponent:At.a,BackdropProps:{timeout:500},children:Object(r.jsx)(It.a,{in:n,children:Object(r.jsx)(Pn,{children:Object(r.jsxs)(ye,{elevation:10,children:[Object(r.jsx)(Rt.a,{title:"Create new Recipe",action:Object(r.jsx)(p.a,{onClick:o,children:Object(r.jsx)(Je.a,{})})}),Object(r.jsx)(Fn,{children:l&&Object(r.jsx)(Nn,{data:l})})]})})})})]})},Dn=j.a.div(mn(),pe),zn=Object(j.a)(ln.a)(pn()),Un=function(){var e=Object(c.useContext)(nt).steps,t=Object(c.useState)(0),n=Object(O.a)(t,2),a=n[0],i=n[1],o=Object(c.useCallback)((function(e){return function(){return i(e)}}),[i]);return Object(r.jsx)("div",{children:e&&e.map((function(e,t){return Object(r.jsxs)(sn.a,{expanded:a===t,onChange:o(t),children:[Object(r.jsx)(jn.a,{expandIcon:Object(r.jsx)(fn.a,{}),children:"Step ".concat(t+1)}),Object(r.jsx)(zn,{children:e.map((function(e){var t=e.name,n=e.amount;return Object(r.jsx)(Vn,{text:t,amount:n},t)}))})]})}))})},Wn=function(){var e=ct().name;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(B,{title:"View: ".concat(at(e))}),Object(r.jsxs)(En,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(Mn,{})}),Object(r.jsx)(Dn,{children:Object(r.jsx)(Jn,{})}),Object(r.jsx)("div",{children:Object(r.jsx)(Un,{})})]})]})},Hn=function(){return Object(r.jsx)(Wn,{})};function Kn(){var e=Object(i.a)(["\n    .MuiTabs-flexContainer {\n      ","\n    }\n  "]);return Kn=function(){return e},e}function $n(){var e=Object(i.a)(["\n  padding: 1rem 0;\n"]);return $n=function(){return e},e}var _n=Object(j.a)(s.a)($n()),Gn=Object(l.a)(Object(j.a)(Gt.a)(Kn(),me)),Zn="/recipes/:name",qn=[{title:"Viewer",Component:Hn,route:"/view"},{title:"Editor",Component:un,route:"/edit"}],Qn=(qn.map((function(e){return e.route})),function(){var e=Object(u.f)(),t=Object(u.g)(),n=Object(u.i)({path:Zn});Object(c.useEffect)((function(){n&&n.isExact&&e.push("".concat(n.url).concat(qn[0].route))}),[n,e,t]);var a=Object(u.h)().name,i=le(),o=Object(c.useState)(0),l=Object(O.a)(o,2),s=l[0],j=l[1],b=q(s);Object(c.useEffect)((function(){n&&b!==s&&e.push("".concat(n.url).concat(qn[s].route))}),[e,n,s,b]);var f=Object(c.useCallback)((function(e,t){return j(t)}),[j]);return Object(r.jsx)(rt,{name:a,children:Object(r.jsxs)(_n,{children:[Object(r.jsx)(v.a,{position:"static",children:Object(r.jsx)(Gn,{value:s,onChange:f,variant:i?"fullWidth":void 0,children:qn.map((function(e){var t=e.title;return Object(r.jsx)(Zt.a,{label:t},t)}))})}),qn.map((function(e){var t=e.title,n=e.route,c=e.Component;return Object(r.jsx)(u.a,{exact:!0,path:"".concat(Zn).concat(n),component:c},t)}))]})})}),Xn=function(){var e=Xe("test",We),t=Object(O.a)(e,1)[0];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(B,{children:"Test Screen"}),Object(r.jsx)("code",{style:{whiteSpace:"pre-wrap"},children:JSON.stringify(t,void 0,2)})]})};function Yn(){var e=Object(i.a)(["\n    background: ",";\n    width: 100vw !important;\n    max-width: initial !important;\n  "]);return Yn=function(){return e},e}var er=Object(l.a)(Object(j.a)(s.a)(Yn(),(function(e){return e.theme.palette.background.default}))),tr=function(e){var t=e.children,n=Object(b.a)();return Object(r.jsx)(er,{style:{minHeight:n},children:t})},nr=function(){return Object(r.jsxs)(o.a,{basename:"/minecraft-calculator",children:[Object(r.jsx)(d,{}),Object(r.jsx)(St,{}),Object(r.jsxs)(tr,{children:[Object(r.jsx)(Fe,{}),Object(r.jsx)(kt,{}),Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/",component:_t}),Object(r.jsx)(u.a,{path:Zn,component:Qn}),Object(r.jsx)(u.a,{exact:!0,path:"/test",component:Xn})]}),Object(r.jsx)(Ht,{})]})]})},rr=document.getElementById("root");Object(a.render)(Object(r.jsx)(re,{children:Object(r.jsx)(R,{children:Object(r.jsx)(tt,{children:Object(r.jsx)(L,{children:Object(r.jsx)(nr,{})})})})}),rr)}},[[172,1,2]]]);
//# sourceMappingURL=main.8c9a0c30.chunk.js.map