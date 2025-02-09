"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63062],{97226:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>v,frontMatter:()=>d,metadata:()=>n,toc:()=>_});const n=JSON.parse('{"id":"auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/fetchNewEvents","title":"fetchNewEvents method","description":"Future&lt;void> fetchNewEvents","source":"@site/docs/auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/fetchNewEvents.md","sourceDirName":"auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel","slug":"/auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/fetchNewEvents","permalink":"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/fetchNewEvents","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/fetchNewEvents.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"events property","permalink":"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/events"},"next":{"title":"initialise method","permalink":"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_explore_events_view_model/ExploreEventsViewModel/initialise"}}');var s=o(74848),i=o(28453);const d={},l="fetchNewEvents method",r={},_=[{value:"Implementation",id:"implementation",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"fetchnewevents-method",children:"fetchNewEvents method"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> fetchNewEvents\n()"]}),"\n",(0,s.jsxs)("p",{children:["This function is used to fetch new events in the organization.\nThe function uses ",(0,s.jsx)(t.code,{children:"dartgetEvents"})," method from ",(0,s.jsx)(t.code,{children:"dartEventService"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"Future<void> fetchNewEvents() async \\{\n  setState(ViewState.busy);\n  notifyListeners();\n  await _eventService.getEvents();\n  setState(ViewState.idle);\n\\}\n"})})]})}function v(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>d,x:()=>l});var n=o(96540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);