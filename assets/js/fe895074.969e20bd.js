"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74323],{13566:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"auto-docs/utils_validators/Validator/validateLastName","title":"validateLastName method","description":"String? validateLastName","source":"@site/docs/auto-docs/utils_validators/Validator/validateLastName.md","sourceDirName":"auto-docs/utils_validators/Validator","slug":"/auto-docs/utils_validators/Validator/validateLastName","permalink":"/docs/auto-docs/utils_validators/Validator/validateLastName","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/utils_validators/Validator/validateLastName.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"validateFirstName method","permalink":"/docs/auto-docs/utils_validators/Validator/validateFirstName"},"next":{"title":"validatePassword method","permalink":"/docs/auto-docs/utils_validators/Validator/validatePassword"}}');var s=e(74848),r=e(28453);const i={},o="validateLastName method",l={},d=[{value:"Implementation",id:"implementation",level:2}];function c(t){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"validatelastname-method",children:"validateLastName method"})}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),"? validateLastName\n(",(0,s.jsx)(a.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," value)"]}),"\n",(0,s.jsx)(a.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-dart",children:'static String? validateLastName(String value) \\{\n  if (value.isEmpty) \\{\n    return \'Lastname must not be left blank.\';\n  \\}\n  // ignore: unnecessary_raw_strings\n  const String pattern = r"(?=.*?[A-Za-z]).+";\n  final RegExp regex = RegExp(pattern);\n  if (!regex.hasMatch(value)) \\{\n    return "Invalid Lastname";\n  \\}\n  return null;\n\\}\n'})})]})}function u(t={}){const{wrapper:a}={...(0,r.R)(),...t.components};return a?(0,s.jsx)(a,{...t,children:(0,s.jsx)(c,{...t})}):c(t)}},28453:(t,a,e)=>{e.d(a,{R:()=>i,x:()=>o});var n=e(96540);const s={},r=n.createContext(s);function i(t){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(a):{...a,...t}}),[a,t])}function o(t){let a;return a=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),n.createElement(r.Provider,{value:a},t.children)}}}]);