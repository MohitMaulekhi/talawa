"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92505],{63421:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>u,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"auto-docs/services_user_config/UserConfig/userLoggedIn","title":"userLoggedIn method","description":"Future&lt;bool> userLoggedIn","source":"@site/docs/auto-docs/services_user_config/UserConfig/userLoggedIn.md","sourceDirName":"auto-docs/services_user_config/UserConfig","slug":"/auto-docs/services_user_config/UserConfig/userLoggedIn","permalink":"/docs/auto-docs/services_user_config/UserConfig/userLoggedIn","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/services_user_config/UserConfig/userLoggedIn.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"updateUserMemberRequestOrg method","permalink":"/docs/auto-docs/services_user_config/UserConfig/updateUserMemberRequestOrg"},"next":{"title":"UserConfig class","permalink":"/docs/auto-docs/services_user_config/UserConfig-class"}}');var t=r(74848),o=r(28453);const u={},i="userLoggedIn method",a={},c=[{value:"Implementation",id:"implementation",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"userloggedin-method",children:"userLoggedIn method"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<",(0,t.jsx)(n.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),"> userLoggedIn\n()"]}),"\n",(0,t.jsx)("p",{children:"This function is used to log in the user."}),"\n",(0,t.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dart",children:"Future<bool> userLoggedIn() async \\{\n  initialiseStream();\n  final boxUser = Hive.box<User>('currentUser');\n  final boxOrg = Hive.box<OrgInfo>('currentOrg');\n  _currentOrg =\n      boxOrg.get('org') ?? OrgInfo(name: 'Organization Name', id: 'null');\n  _currentOrgInfoController.add(_currentOrg!);\n\n  _currentUser = boxUser.get('user');\n  // if there is not currentUser then returns false.\n  if (_currentUser == null) \\{\n    _currentUser = User(id: 'null', authToken: 'null');\n    return false;\n  \\}\n  // generate access token\n  graphqlConfig.getToken().then((value) async \\{\n    databaseFunctions.init();\n    try \\{\n      final QueryResult result = await databaseFunctions.gqlAuthQuery(\n        queries.fetchUserInfo,\n        variables: \\{'id': currentUser.id\\},\n      ) as QueryResult;\n      final User userInfo = User.fromJson(\n        result.data!['users'][0] as Map<String, dynamic>,\n        fromOrg: true,\n      );\n      userInfo.authToken = userConfig.currentUser.authToken;\n      userInfo.refreshToken = userConfig.currentUser.refreshToken;\n      userConfig.updateUser(userInfo);\n      _currentOrg ??= _currentUser!.joinedOrganizations![0];\n      _currentOrgInfoController.add(_currentOrg!);\n\n      saveUserInHive();\n      return true;\n    \\} on Exception catch (e) \\{\n      print(e);\n      navigationService.showTalawaErrorSnackBar(\n        \"Couldn't update User details\",\n        MessageType.error,\n      );\n    \\}\n  \\});\n  return true;\n\\}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>u,x:()=>i});var s=r(96540);const t={},o=s.createContext(t);function u(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:u(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);