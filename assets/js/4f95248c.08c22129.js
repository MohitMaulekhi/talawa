"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86226],{28159:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>n,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/fillTask","title":"fillTask method","description":"void fillTask","source":"@site/docs/auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/fillTask.md","sourceDirName":"auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel","slug":"/auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/fillTask","permalink":"/docs/auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/fillTask","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/fillTask.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"editTask method","permalink":"/docs/auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/editTask"},"next":{"title":"taskDescriptionTextController property","permalink":"/docs/auto-docs/view_model_after_auth_view_models_task_view_models_create_task_view_model/CreateTaskViewModel/taskDescriptionTextController"}}');var o=a(74848),i=a(28453);const l={},d="fillTask method",n={},r=[{value:"Implementation",id:"implementation",level:2}];function _(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"filltask-method",children:"fillTask method"})}),"\n",(0,o.jsxs)(t.p,{children:["void fillTask\n(",(0,o.jsx)(t.a,{href:"/docs/auto-docs/models_task_task_model/Task-class",children:"Task"})," task)"]}),"\n",(0,o.jsx)("p",{children:"This functions fills the task controller data."}),"\n",(0,o.jsx)("p",{children:"params:"}),"\n",(0,o.jsx)("ul",{children:(0,o.jsxs)("li",{children:[(0,o.jsx)(t.code,{children:"darttask"})," : ",(0,o.jsx)(t.code,{children:"dartTask"})," type contain task data."]})}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"void fillTask(Task task) \\{\n  taskTitleTextController.text = task.title;\n  taskDescriptionTextController.text = task.description ?? '';\n  if (task.deadline != null) \\{\n    taskEndDate =\n        DateTime.fromMicrosecondsSinceEpoch(int.parse(task.deadline!));\n    taskEndTime = TimeOfDay.fromDateTime(taskEndDate);\n  \\}\n\\}\n"})})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(_,{...e})}):_(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>d});var s=a(96540);const o={},i=s.createContext(o);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);