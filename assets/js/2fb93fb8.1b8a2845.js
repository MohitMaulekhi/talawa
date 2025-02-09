"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5285],{16289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"auto-docs/services_event_service/EventService/getEvents","title":"getEvents method","description":"Future&lt;void> getEvents","source":"@site/docs/auto-docs/services_event_service/EventService/getEvents.md","sourceDirName":"auto-docs/services_event_service/EventService","slug":"/auto-docs/services_event_service/EventService/getEvents","permalink":"/docs/auto-docs/services_event_service/EventService/getEvents","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/services_event_service/EventService/getEvents.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"fetchRegistrantsByEvent method","permalink":"/docs/auto-docs/services_event_service/EventService/fetchRegistrantsByEvent"},"next":{"title":"registerForAnEvent method","permalink":"/docs/auto-docs/services_event_service/EventService/registerForAnEvent"}}');var r=n(74848),i=n(28453);const o={},c="getEvents method",a={},d=[{value:"Implementation",id:"implementation",level:2}];function v(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getevents-method",children:"getEvents method"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> getEvents\n()"]}),"\n",(0,r.jsx)("p",{children:"This function is used to fetch all the events of an organization."}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"params"}),":\nNone"]}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)(t.code,{children:"dartFuture&lt;void&gt;"}),": void"]})}),"\n",(0,r.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:'Future<void> getEvents() async \\{\n  // refresh user\'s access token\n  await _dbFunctions.refreshAccessToken(userConfig.currentUser.refreshToken!);\n  _dbFunctions.init();\n\n  // get current organization id\n  final String currentOrgID = _currentOrg.id!;\n  // mutation to fetch the events\n  final String mutation = EventQueries().fetchOrgEvents(currentOrgID);\n  final result = await _dbFunctions.gqlAuthMutation(mutation);\n\n  if (result == null) return;\n  final List eventsJson = result.data!["eventsByOrganization"] as List;\n  eventsJson.forEach((eventJsonData) \\{\n    final Event event = Event.fromJson(eventJsonData as Map<String, dynamic>);\n    event.isRegistered = event.registrants?.any(\n          (registrant) => registrant.id == _userConfig.currentUser.id,\n        ) ??\n        false;\n    _eventStreamController.add(event);\n  \\});\n\\}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);