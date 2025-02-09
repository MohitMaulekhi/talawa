"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83529],{94403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>_,frontMatter:()=>n,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/createTask","title":"createTask method","description":"Future&lt;bool> createTask","source":"@site/docs/auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/createTask.md","sourceDirName":"auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel","slug":"/auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/createTask","permalink":"/docs/auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/createTask","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/createTask.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"CreateTaskViewModel constructor","permalink":"/docs/auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/"},"next":{"title":"dispose method","permalink":"/docs/auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/dispose"}}');var o=a(74848),r=a(28453);const n={},d="createTask method",i={},l=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"createtask-method",children:"createTask method"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<",(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"> createTask\n(",(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," eventId)"]}),"\n",(0,o.jsxs)("p",{children:["This function creates a new task for an event.\nThe function uses ",(0,o.jsx)(t.code,{children:"dartcreateTask"})," method provided by Task Services."]}),"\n",(0,o.jsx)("p",{children:"params:"}),"\n",(0,o.jsx)("ul",{children:(0,o.jsxs)("li",{children:[(0,o.jsx)(t.code,{children:"darteventId"})," : id of the event for which task need to be add."]})}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"Future<bool> createTask(String eventId) async \\{\n  final deadline = DateTime(\n    taskEndDate.year,\n    taskEndDate.month,\n    taskEndDate.day,\n    taskEndTime.hour,\n    taskEndTime.minute,\n  );\n  return _taskService.createTask(\n    title: taskTitleTextController.text,\n    description: taskDescriptionTextController.text,\n    deadline: deadline.microsecondsSinceEpoch.toString(),\n    eventId: eventId,\n  );\n\\}\n"})})]})}function _(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>d});var s=a(96540);const o={},r=s.createContext(o);function n(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);