"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36515],{46195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"auto-docs/utils_event_queries/EventQueries/fetchOrgEvents","title":"fetchOrgEvents method","description":"String fetchOrgEvents","source":"@site/docs/auto-docs/utils_event_queries/EventQueries/fetchOrgEvents.md","sourceDirName":"auto-docs/utils_event_queries/EventQueries","slug":"/auto-docs/utils_event_queries/EventQueries/fetchOrgEvents","permalink":"/docs/auto-docs/utils_event_queries/EventQueries/fetchOrgEvents","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/utils_event_queries/EventQueries/fetchOrgEvents.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"deleteEvent method","permalink":"/docs/auto-docs/utils_event_queries/EventQueries/deleteEvent"},"next":{"title":"registerForEvent method","permalink":"/docs/auto-docs/utils_event_queries/EventQueries/registerForEvent"}}');var s=n(74848),i=n(28453);const o={},a="fetchOrgEvents method",c={},d=[{value:"Implementation",id:"implementation",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"fetchorgevents-method",children:"fetchOrgEvents method"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," fetchOrgEvents\n(",(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," orgId)"]}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:'String fetchOrgEvents(String orgId) \\{\n  return """\n    query \\{\n      eventsByOrganization(id: "$orgId")\\{\n        _id\n        organization \\{\n          _id\n          image\n        \\}\n        title\n        description\n        isPublic\n        isRegisterable\n        recurring\n        recurrance\n        startDate\n        endDate\n        allDay\n        startTime\n        endTime\n        location\n        creator\\{\n          _id\n          firstName\n          lastName\n        \\}\n        admins \\{\n          firstName\n          lastName\n        \\}\n        registrants \\{\n          user \\{\n            _id\n          \\}\n        \\}\n      \\}\n    \\}\n  """;\n\\}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);