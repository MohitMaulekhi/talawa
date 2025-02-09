"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4468],{8061:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"auto-docs/view_model_main_screen_view_model/MainScreenViewModel/tourEventTargets","title":"tourEventTargets method","description":"void tourEventTargets","source":"@site/docs/auto-docs/view_model_main_screen_view_model/MainScreenViewModel/tourEventTargets.md","sourceDirName":"auto-docs/view_model_main_screen_view_model/MainScreenViewModel","slug":"/auto-docs/view_model_main_screen_view_model/MainScreenViewModel/tourEventTargets","permalink":"/docs/auto-docs/view_model_main_screen_view_model/MainScreenViewModel/tourEventTargets","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/view_model_main_screen_view_model/MainScreenViewModel/tourEventTargets.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"tourComplete property","permalink":"/docs/auto-docs/view_model_main_screen_view_model/MainScreenViewModel/tourComplete"},"next":{"title":"tourHomeTargets method","permalink":"/docs/auto-docs/view_model_main_screen_view_model/MainScreenViewModel/tourHomeTargets"}}');var r=t(74848),a=t(28453);const s={},i="tourEventTargets method",d={},c=[{value:"Implementation",id:"implementation",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"toureventtargets-method",children:"tourEventTargets method"})}),"\n",(0,r.jsx)(n.p,{children:"void tourEventTargets\n()"}),"\n",(0,r.jsx)("p",{children:"This function show the tutorial for Events."}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"params"}),":\nNone"]}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"returns"}),":\nNone"]}),"\n",(0,r.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dart",children:"void tourEventTargets() \\{\n  targets.clear();\n  targets.add(\n    focusTarget(\n      keyBNEvents,\n      'keyBNEvents',\n      'This is the Events tab here you can see all event related information of the current selected organization',\n      isCircle: true,\n      align: ContentAlign.top,\n    ),\n  );\n  targets.add(\n    focusTarget(\n      keySECategoryMenu,\n      'keySECategoryMenu',\n      'Filter Events based on categories',\n    ),\n  );\n  targets.add(\n    focusTarget(\n      keySEDateFilter,\n      'keySEDateFilter',\n      'Filter Events between selected dates',\n    ),\n  );\n  targets.add(\n    focusTarget(\n      keySECard,\n      'keySECard',\n      'Description of event to see more details click on the card',\n    ),\n  );\n  targets.add(\n    focusTarget(\n      keySEAdd,\n      'keySEAdd',\n      'You can create a new event from here',\n      align: ContentAlign.top,\n    ),\n  );\n  showTutorial(\n    onFinish: () \\{\n      onTabTapped(currentPageIndex + 1);\n      if (!tourComplete && !tourSkipped) \\{\n        tourAddPost();\n      \\}\n    \\},\n    onClickTarget: (TargetFocus a) \\{\\},\n  );\n\\}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var o=t(96540);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);