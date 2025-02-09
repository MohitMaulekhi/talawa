"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77472],{78510:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"auto-docs/view_model_lang_view_model/AppLanguage/dbLanguageUpdate","title":"dbLanguageUpdate method","description":"Future&lt;void> dbLanguageUpdate","source":"@site/docs/auto-docs/view_model_lang_view_model/AppLanguage/dbLanguageUpdate.md","sourceDirName":"auto-docs/view_model_lang_view_model/AppLanguage","slug":"/auto-docs/view_model_lang_view_model/AppLanguage/dbLanguageUpdate","permalink":"/docs/auto-docs/view_model_lang_view_model/AppLanguage/dbLanguageUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/view_model_lang_view_model/AppLanguage/dbLanguageUpdate.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"databaseFunctions property","permalink":"/docs/auto-docs/view_model_lang_view_model/AppLanguage/databaseFunctions"},"next":{"title":"fetchLocale method","permalink":"/docs/auto-docs/view_model_lang_view_model/AppLanguage/fetchLocale"}}');var d=t(74848),o=t(28453);const s={},i="dbLanguageUpdate method",u={},l=[{value:"Implementation",id:"implementation",level:2}];function r(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.header,{children:(0,d.jsx)(a.h1,{id:"dblanguageupdate-method",children:"dbLanguageUpdate method"})}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> dbLanguageUpdate\n()"]}),"\n",(0,d.jsxs)("p",{children:["This function updates the Database Language by running the graphQL ",(0,d.jsx)(a.code,{children:"dartmutations"}),"."]}),"\n",(0,d.jsx)(a.h2,{id:"implementation",children:"Implementation"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-dart",children:"Future<void> dbLanguageUpdate() async \\{\n  try \\{\n    await databaseFunctions\n        .gqlAuthMutation(queries.updateLanguage(_appLocale.languageCode));\n    print('Language Updated in Database');\n  \\} catch (e) \\{\n    print(e);\n  \\}\n\\}\n"})})]})}function c(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(r,{...e})}):r(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>i});var n=t(96540);const d={},o=n.createContext(d);function s(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);