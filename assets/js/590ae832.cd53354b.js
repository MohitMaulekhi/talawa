"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43744],{7071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>v,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"auto-docs/services_event_service/EventService/registerForAnEvent","title":"registerForAnEvent method","description":"Future registerForAnEvent","source":"@site/docs/auto-docs/services_event_service/EventService/registerForAnEvent.md","sourceDirName":"auto-docs/services_event_service/EventService","slug":"/auto-docs/services_event_service/EventService/registerForAnEvent","permalink":"/docs/auto-docs/services_event_service/EventService/registerForAnEvent","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/services_event_service/EventService/registerForAnEvent.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"getEvents method","permalink":"/docs/auto-docs/services_event_service/EventService/getEvents"},"next":{"title":"setOrgStreamSubscription method","permalink":"/docs/auto-docs/services_event_service/EventService/setOrgStreamSubscription"}}');var s=n(74848),i=n(28453);const o={},c="registerForAnEvent method",a={},d=[{value:"Implementation",id:"implementation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"registerforanevent-method",children:"registerForAnEvent method"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"})," registerForAnEvent\n(",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," eventId)"]}),"\n",(0,s.jsx)("p",{children:"This function is used to register user for an event."}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"params"}),":"]}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"darteventId"}),": id of an event."]})}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"dartFuture&lt;dynamic&gt;"}),": Information about the event registration."]})}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"Future<dynamic> registerForAnEvent(String eventId) async \\{\n  final tokenResult = await _dbFunctions\n      .refreshAccessToken(userConfig.currentUser.refreshToken!);\n  debugPrint(tokenResult.toString());\n  final Map<String, dynamic> variables = \\{'eventId': eventId\\};\n  final result = await _dbFunctions.gqlAuthMutation(\n    EventQueries().registerForEvent(),\n    variables: variables,\n  );\n  return result;\n\\}\n"})})]})}function v(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);