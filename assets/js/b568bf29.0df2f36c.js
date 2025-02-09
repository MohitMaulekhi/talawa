"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92877],{11619:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"auto-docs/services_task_service/TaskService/deleteTask","title":"deleteTask method","description":"Future&lt;void> deleteTask","source":"@site/docs/auto-docs/services_task_service/TaskService/deleteTask.md","sourceDirName":"auto-docs/services_task_service/TaskService","slug":"/auto-docs/services_task_service/TaskService/deleteTask","permalink":"/docs/auto-docs/services_task_service/TaskService/deleteTask","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/services_task_service/TaskService/deleteTask.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"createTask method","permalink":"/docs/auto-docs/services_task_service/TaskService/createTask"},"next":{"title":"editTask method","permalink":"/docs/auto-docs/services_task_service/TaskService/editTask"}}');var a=s(74848),n=s(28453);const i={},d="deleteTask method",c={},o=[{value:"Implementation",id:"implementation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"deletetask-method",children:"deleteTask method"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> deleteTask\n(",(0,a.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," taskId, ",(0,a.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," creatorId)"]}),"\n",(0,a.jsx)("p",{children:"This function is used to delete a task."}),"\n",(0,a.jsx)("p",{children:"params:"}),"\n",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)(t.code,{children:"darttaskId"})," : id of a task need to be deleted."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)(t.code,{children:"dartcreatorId"})," : id of the task creator."]})]}),"\n",(0,a.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"Future<void> deleteTask(String taskId, String creatorId) async \\{\n  if (creatorId == _userConfig.currentUser.id) \\{\n    await _databaseMutationFunctions\n        .refreshAccessToken(_userConfig.currentUser.refreshToken!);\n    final res = await _databaseMutationFunctions\n        .gqlAuthMutation(TaskQueries.deleteTask(taskId));\n    if (res != null) _tasks.removeWhere((task) => task.id == taskId);\n  \\}\n\\}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>d});var r=s(96540);const a={},n=r.createContext(a);function i(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);