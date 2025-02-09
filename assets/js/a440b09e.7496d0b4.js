"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63232],{22999:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>r});const d=JSON.parse('{"id":"auto-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/uploadPost","title":"uploadPost method","description":"Future&lt;void> uploadPost","source":"@site/docs/auto-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/uploadPost.md","sourceDirName":"auto-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel","slug":"/auto-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/uploadPost","permalink":"/docs/auto-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/uploadPost","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/uploadPost.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"titleController property","permalink":"/docs/auto-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/titleController"},"next":{"title":"userName property","permalink":"/docs/auto-docs/view_model_after_auth_view_models_add_post_view_models_add_post_view_model/AddPostViewModel/userName"}}');var s=o(74848),n=o(28453);const a={},i="uploadPost method",l={},r=[{value:"Implementation",id:"implementation",level:2}];function _(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"uploadpost-method",children:"uploadPost method"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> uploadPost\n()"]}),"\n",(0,s.jsx)("p",{children:"This function uploads the post finally, and navigate the success message or error message in Snack Bar."}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"params"}),":\nNone"]}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:[(0,s.jsx)(t.code,{children:"dartFuture&lt;void&gt;"}),": Uploading post by contacting queries"]})}),"\n",(0,s.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:'Future<void> uploadPost() async \\{\n  // \\{TODO: \\}\n  if (_imageFile == null) \\{\n    try \\{\n      await _dbFunctions.gqlAuthMutation(\n        PostQueries().uploadPost(),\n        variables: \\{\n          "text": _controller.text,\n          "organizationId": _selectedOrg.id,\n          "title": _titleController.text\n        \\},\n      );\n      _navigationService.showTalawaErrorSnackBar(\n        "Post is uploaded",\n        MessageType.info,\n      );\n    \\} on Exception catch (_) \\{\n      _navigationService.showTalawaErrorSnackBar(\n        "Something went wrong",\n        MessageType.error,\n      );\n    \\}\n  \\}\n  removeImage();\n  _controller.text = "";\n  _titleController.text = "";\n  notifyListeners();\n\\}\n'})})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(_,{...e})}):_(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var d=o(96540);const s={},n=d.createContext(s);function a(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),d.createElement(n.Provider,{value:t},e.children)}}}]);