"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58457],{23093:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"auto-docs/services_task_service/TaskService/getTasksForEvent","title":"getTasksForEvent method","description":"Future&lt;void> getTasksForEvent","source":"@site/docs/auto-docs/services_task_service/TaskService/getTasksForEvent.md","sourceDirName":"auto-docs/services_task_service/TaskService","slug":"/auto-docs/services_task_service/TaskService/getTasksForEvent","permalink":"/docs/auto-docs/services_task_service/TaskService/getTasksForEvent","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/services_task_service/TaskService/getTasksForEvent.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"getTasksByUser method","permalink":"/docs/auto-docs/services_task_service/TaskService/getTasksByUser"},"next":{"title":"tasks property","permalink":"/docs/auto-docs/services_task_service/TaskService/tasks"}}');var r=t(74848),a=t(28453);const o={},i="getTasksForEvent method",c={},d=[{value:"Implementation",id:"implementation",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"gettasksforevent-method",children:"getTasksForEvent method"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> getTasksForEvent\n(",(0,r.jsx)(s.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," eventId)"]}),"\n",(0,r.jsx)("p",{children:"This function is used to get all the tasks for the event."}),"\n",(0,r.jsx)("p",{children:"params:"}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)(s.code,{children:"darteventId"})," : id of an event for which tasks need to fetched,"]})}),"\n",(0,r.jsx)(s.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-dart",children:"Future<void> getTasksForEvent(String eventId) async \\{\n  await _databaseMutationFunctions\n      .refreshAccessToken(_userConfig.currentUser.refreshToken!);\n  final res = await _databaseMutationFunctions\n      .gqlNonAuthQuery(TaskQueries.eventTasks(eventId));\n\n  if (res != null) \\{\n    _tasks.clear();\n    final tasksList = res.data!['tasksByEvent'] as List;\n    tasksList.forEach((task) \\{\n      _tasks.add(Task.fromJson(task as Map<String, dynamic>));\n    \\});\n  \\}\n\\}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>i});var n=t(96540);const r={},a=n.createContext(r);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);