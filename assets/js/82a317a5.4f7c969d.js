"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88947],{802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/getCurrentOrgUsersList","title":"getCurrentOrgUsersList method","description":"Future&lt;List&lt;User>> getCurrentOrgUsersList","source":"@site/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/getCurrentOrgUsersList.md","sourceDirName":"auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel","slug":"/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/getCurrentOrgUsersList","permalink":"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/getCurrentOrgUsersList","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/getCurrentOrgUsersList.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"formKey property","permalink":"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/formKey"},"next":{"title":"getImageFromGallery method","permalink":"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/getImageFromGallery"}}');var n=r(74848),o=r(28453);const i={},d="getCurrentOrgUsersList method",a={},l=[{value:"Implementation",id:"implementation",level:2}];function _(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"getcurrentorguserslist-method",children:"getCurrentOrgUsersList method"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<",(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,n.jsx)(t.a,{href:"/docs/auto-docs/models_user_user_info/User-class",children:"User"}),">> getCurrentOrgUsersList\n()"]}),"\n",(0,n.jsxs)("p",{children:["This function fetch all the users in the current organization and return ",(0,n.jsx)(t.code,{children:"dartList"}),"."]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"params"}),":\nNone"]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"dartFuture&lt;List&lt;User&gt;&gt;"}),": Current Organization Users List"]})}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:"Future<List<User>> getCurrentOrgUsersList() async \\{\n  if (orgMembersList.isEmpty) \\{\n    orgMembersList = await organizationService\n        .getOrgMembersList(userConfig.currentOrg.id!);\n  \\}\n\n  // loop through list\n  orgMembersList.forEach((orgMember) \\{\n    _memberCheckedMap.putIfAbsent(orgMember.id!, () => false);\n    _memberCheckedMap.putIfAbsent(orgMember.id!, () => false);\n  \\});\n  // return list\n  return orgMembersList;\n\\}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(_,{...e})}):_(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>d});var s=r(96540);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);