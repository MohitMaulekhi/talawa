"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10670],{17475:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>_});const o=JSON.parse('{"id":"auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/refreshEvents","title":"refreshEvents method","description":"Future&lt;void> refreshEvents","source":"@site/docs/auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/refreshEvents.md","sourceDirName":"auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel","slug":"/auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/refreshEvents","permalink":"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/refreshEvents","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/refreshEvents.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"initialise method","permalink":"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/initialise"},"next":{"title":"ExploreEventsViewModel class","permalink":"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel-class"}}');var n=s(74848),r=s(28453);const i={},d="refreshEvents method",l={},_=[{value:"Implementation",id:"implementation",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"refreshevents-method",children:"refreshEvents method"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> refreshEvents\n()"]}),"\n",(0,n.jsxs)("p",{children:["This function is used to refresh the events in the organization.\nThe function uses ",(0,n.jsx)(t.code,{children:"dartgetEvents"})," method from ",(0,n.jsx)(t.code,{children:"dartEventService"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"Future<void> refreshEvents() async \\{\n  setState(ViewState.busy);\n  _events.clear();\n  _uniqueEventIds.clear();\n  await _eventService.getEvents();\n  setState(ViewState.idle);\n\\}\n"})})]})}function v(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>d});var o=s(96540);const n={},r=o.createContext(n);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);