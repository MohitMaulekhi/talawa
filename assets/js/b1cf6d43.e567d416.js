"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3126],{32265:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>u,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"auto-docs/view_model_lang_view_model/AppLanguage/userLanguageQuery","title":"userLanguageQuery method","description":"Future&lt;void> userLanguageQuery","source":"@site/docs/auto-docs/view_model_lang_view_model/AppLanguage/userLanguageQuery.md","sourceDirName":"auto-docs/view_model_lang_view_model/AppLanguage","slug":"/auto-docs/view_model_lang_view_model/AppLanguage/userLanguageQuery","permalink":"/docs/auto-docs/view_model_lang_view_model/AppLanguage/userLanguageQuery","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/view_model_lang_view_model/AppLanguage/userLanguageQuery.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"selectLanguagePress method","permalink":"/docs/auto-docs/view_model_lang_view_model/AppLanguage/selectLanguagePress"},"next":{"title":"AppLanguage class","permalink":"/docs/auto-docs/view_model_lang_view_model/AppLanguage-class"}}');var r=a(74848),s=a(28453);const u={},o="userLanguageQuery method",d={},i=[{value:"Implementation",id:"implementation",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"userlanguagequery-method",children:"userLanguageQuery method"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> userLanguageQuery\n(",(0,r.jsx)(n.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," userId)"]}),"\n",(0,r.jsxs)("p",{children:["This function perform graphQL query to check the user's language in the database.\nThe function uses ",(0,r.jsx)(n.code,{children:"dartgqlAuthQuery"})," method provided by Database Functions Services."]}),"\n",(0,r.jsx)("p",{children:"params:"}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)(n.code,{children:"dartuserId"})," : user for which language need to be fetch."]})}),"\n",(0,r.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"Future<void> userLanguageQuery(String userId) async \\{\n  try \\{\n    await databaseFunctions.gqlAuthQuery(queries.newUserLanguage(userId));\n  \\} catch (e) \\{\n    print(e);\n  \\}\n\\}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>u,x:()=>o});var t=a(96540);const r={},s=t.createContext(r);function u(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:u(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);