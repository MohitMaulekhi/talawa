"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97269],{69859:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"auto-docs/view_model_access_request_view_model/AccessScreenViewModel/sendMembershipRequest","title":"sendMembershipRequest method","description":"Future&lt;void> sendMembershipRequest","source":"@site/docs/auto-docs/view_model_access_request_view_model/AccessScreenViewModel/sendMembershipRequest.md","sourceDirName":"auto-docs/view_model_access_request_view_model/AccessScreenViewModel","slug":"/auto-docs/view_model_access_request_view_model/AccessScreenViewModel/sendMembershipRequest","permalink":"/docs/auto-docs/view_model_access_request_view_model/AccessScreenViewModel/sendMembershipRequest","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/view_model_access_request_view_model/AccessScreenViewModel/sendMembershipRequest.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"selectedOrganization property","permalink":"/docs/auto-docs/view_model_access_request_view_model/AccessScreenViewModel/selectedOrganization"},"next":{"title":"AccessScreenViewModel class","permalink":"/docs/auto-docs/view_model_access_request_view_model/AccessScreenViewModel-class"}}');var o=n(74848),i=n(28453);const r={},c="sendMembershipRequest method",a={},d=[{value:"Implementation",id:"implementation",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"sendmembershiprequest-method",children:"sendMembershipRequest method"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> sendMembershipRequest\n()"]}),"\n",(0,o.jsx)(s.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-dart",children:"Future<void> sendMembershipRequest() async \\{\n  //TODO: Implement Message arg for below function\n  final result = await databaseFunctions.gqlAuthMutation(\n    queries.sendMembershipRequest(selectedOrganization.id!),\n  );\n  if (result != null) \\{\n    final OrgInfo membershipRequest = OrgInfo.fromJson(\n      (((result as QueryResult).data!)['sendMembershipRequest']\n          as Map<String, dynamic>)['organization'] as Map<String, dynamic>,\n    );\n    userConfig.updateUserMemberRequestOrg([membershipRequest]);\n    if (userConfig.currentUser.joinedOrganizations!.isEmpty) \\{\n      navigationService.removeAllAndPush(\n        Routes.waitingScreen,\n        Routes.splashScreen,\n      );\n    \\} else \\{\n      navigationService.pop();\n      navigationService.showTalawaErrorSnackBar(\n        'Join in request sent to $\\{selectedOrganization.name\\} successfully',\n        MessageType.info,\n      );\n    \\}\n  \\}\n\\}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var t=n(96540);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);