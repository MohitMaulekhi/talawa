"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53443],{3636:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"auto-docs/main/main","title":"main function","description":"Future&lt;void> main","source":"@site/docs/auto-docs/main/main.md","sourceDirName":"auto-docs/main","slug":"/auto-docs/main/","permalink":"/docs/auto-docs/main/","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/main/main.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"userConfig top-level property","permalink":"/docs/auto-docs/locator/userConfig"},"next":{"title":"DemoPageView constructor","permalink":"/docs/auto-docs/main/DemoPageView/"}}');var a=t(74848),o=t(28453);const r={},s="main function",c={},l=[{value:"Implementation",id:"implementation",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"main-function",children:"main function"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void> main\n()"]}),"\n",(0,a.jsx)("p",{children:"First function to initialize the application, invoked automatically."}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"params"}),":\nNone"]}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,a.jsx)("ul",{children:(0,a.jsxs)("li",{children:[(0,a.jsx)(e.code,{children:"dartFuture&lt;void&gt;"}),": resolves if the application was successfully initialized."]})}),"\n",(0,a.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-dart",children:"Future<void> main() async \\{\n  // Returns an instance of the binding that implements WidgetsBinding.\n  WidgetsFlutterBinding.ensureInitialized();\n\n  if (!kIsWeb) \\{\n    channel = const AndroidNotificationChannel(\n      'high_importance_channel', // id\n      'High Importance Notifications', // title\n      description:\n          'This channel is used for important notifications.', // description\n      importance: Importance.high,\n    );\n\n    flutterLocalNotificationsPlugin = FlutterLocalNotificationsPlugin();\n\n    // Create an Android Notification Channel.\n    // We use this channel in the `AndroidManifest.xml` file to override the\n    // default FCM channel to enable heads up notifications.\n    await flutterLocalNotificationsPlugin\n        .resolvePlatformSpecificImplementation<\n            AndroidFlutterLocalNotificationsPlugin>()\n        ?.createNotificationChannel(channel);\n  \\}\n\n  final Directory dir = await path.getApplicationDocumentsDirectory();\n  Hive\n    ..init(dir.path)\n    ..registerAdapter(UserAdapter())\n    ..registerAdapter(OrgInfoAdapter());\n\n  await Hive.openBox<User>('currentUser');\n  await Hive.openBox<OrgInfo>('currentOrg');\n\n  await Hive.openBox('pluginBox');\n  await Hive.openBox('url');\n\n  final urlBox = await Hive.openBox('url');\n\n  try \\{\n    if (urlBox.get('url') != null) \\{\n      await setUpFirebaseKeys();\n\n      await setUpFirebase();\n      await setUpFirebaseMessaging();\n    \\}\n  \\} catch (e) \\{\n    print(\"Firebase not working\");\n  \\}\n\n  setupLocator();\n  // The runApp() function takes the given Widget and makes it the root of the widget tree.\n  runApp(MyApp());\n\\}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>s});var i=t(96540);const a={},o=i.createContext(a);function r(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);