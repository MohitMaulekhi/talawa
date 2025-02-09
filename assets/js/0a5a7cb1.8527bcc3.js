"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75453],{92508:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>_});const s=JSON.parse('{"id":"auto-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/refreshChats","title":"refreshChats method","description":"void refreshChats","source":"@site/docs/auto-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/refreshChats.md","sourceDirName":"auto-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel","slug":"/auto-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/refreshChats","permalink":"/docs/auto-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/refreshChats","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/refreshChats.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"name property","permalink":"/docs/auto-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/name"},"next":{"title":"sendMessageToDirectChat method","permalink":"/docs/auto-docs/view_model_after_auth_view_models_chat_view_models_direct_chat_view_model/DirectChatViewModel/sendMessageToDirectChat"}}');var a=o(74848),i=o(28453);const r={},d="refreshChats method",c={},_=[{value:"Implementation",id:"implementation",level:2}];function n(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"refreshchats-method",children:"refreshChats method"})}),"\n",(0,a.jsx)(t.p,{children:"void refreshChats\n()"}),"\n",(0,a.jsx)("p",{children:"This function refresh the chats."}),"\n",(0,a.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-dart",children:"void refreshChats() \\{\n  _chats.clear();\n  _uniqueChatIds.clear();\n  notifyListeners();\n  _chatService.getDirectChatsByUserId();\n\\}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(n,{...e})}):n(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>d});var s=o(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);