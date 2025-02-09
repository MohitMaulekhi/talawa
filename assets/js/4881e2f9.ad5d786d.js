"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3572],{22323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"auto-docs/views_pre_auth_screens_waiting_to_join_private_org/WaitingPage/build","title":"build method","description":"- @override","source":"@site/docs/auto-docs/views_pre_auth_screens_waiting_to_join_private_org/WaitingPage/build.md","sourceDirName":"auto-docs/views_pre_auth_screens_waiting_to_join_private_org/WaitingPage","slug":"/auto-docs/views_pre_auth_screens_waiting_to_join_private_org/WaitingPage/build","permalink":"/docs/auto-docs/views_pre_auth_screens_waiting_to_join_private_org/WaitingPage/build","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/views_pre_auth_screens_waiting_to_join_private_org/WaitingPage/build.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"WaitingPage constructor","permalink":"/docs/auto-docs/views_pre_auth_screens_waiting_to_join_private_org/WaitingPage/"},"next":{"title":"WaitingPage class","permalink":"/docs/auto-docs/views_pre_auth_screens_waiting_to_join_private_org/WaitingPage-class"}}');var o=n(74848),r=n(28453);const s={},d="build method",a={},l=[{value:"Implementation",id:"implementation",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"build-method",children:"build method"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["@",(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/override-constant.html",children:"override"})]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/Widget-class.html",children:"Widget"})," build\n(",(0,o.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," context)"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:(0,o.jsx)("span",{class:"feature",children:"override"})})}),"\n",(0,o.jsx)("p",{children:"Describes the part of the user interface represented by this widget."}),"\n",(0,o.jsxs)("p",{children:["The framework calls this method when this widget is inserted into the tree\nin a given ",(0,o.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," and when the dependencies of this widget change\n(e.g., an ",(0,o.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html",children:"InheritedWidget"})," referenced by this widget changes). This\nmethod can potentially be called in every frame and should not have any side\neffects beyond building a widget."]}),"\n",(0,o.jsxs)("p",{children:["The framework replaces the subtree below this widget with the widget\nreturned by this method, either by updating the existing subtree or by\nremoving the subtree and inflating a new subtree, depending on whether the\nwidget returned by this method can update the root of the existing\nsubtree, as determined by calling ",(0,o.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html",children:"Widget.canUpdate"}),"."]}),"\n",(0,o.jsxs)("p",{children:["Typically implementations return a newly created constellation of widgets\nthat are configured with information from this widget's constructor and\nfrom the given ",(0,o.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"}),"."]}),"\n",(0,o.jsxs)("p",{children:["The given ",(0,o.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"})," contains information about the location in the\ntree at which this widget is being built. For example, the context\nprovides the set of inherited widgets for this location in the tree. A\ngiven widget might be built with multiple different ",(0,o.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext-class.html",children:"BuildContext"}),"\narguments over time if the widget is moved around the tree or if the\nwidget is inserted into the tree in multiple places at once."]}),"\n",(0,o.jsx)("p",{children:"The implementation of this method must only depend on:"}),"\n",(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"the fields of the widget, which themselves must not change over time,\nand"}),(0,o.jsxs)("li",{children:["any ambient state obtained from the ",(0,o.jsx)(t.code,{children:"dartcontext"})," using\n",(0,o.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html",children:"BuildContext.dependOnInheritedWidgetOfExactType"}),"."]})]}),"\n",(0,o.jsxs)("p",{children:["If a widget's ",(0,o.jsx)("a",{href:"../../views_pre_auth_screens_waiting_to_join_private_org/WaitingPage/build.md",children:"build"})," method is to depend on anything else, use a\n",(0,o.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html",children:"StatefulWidget"})," instead."]}),"\n",(0,o.jsx)("p",{children:"See also:"}),"\n",(0,o.jsx)("ul",{children:(0,o.jsxs)("li",{children:[(0,o.jsx)("a",{href:"https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html",children:"StatelessWidget"}),", which contains the discussion on performance considerations."]})}),"\n",(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-dart",children:"@override\nWidget build(BuildContext context) \\{\n  return BaseView<WaitingViewModel>(\n    onModelReady: (model) => model.initialise(context),\n    builder: (context, model, child) \\{\n      return Scaffold(\n        key: const Key('WaitingPageScaffold'),\n        extendBodyBehindAppBar: true,\n        appBar: AppBar(\n          elevation: 0.0,\n          backgroundColor: Colors.transparent,\n          automaticallyImplyLeading: false,\n        ),\n        body: Container(\n          padding: EdgeInsets.only(top: SizeConfig.safeBlockVertical! * 6),\n          child: Column(\n            mainAxisAlignment: MainAxisAlignment.start,\n            crossAxisAlignment: CrossAxisAlignment.center,\n            children: [\n              SignupProgressIndicator(\n                key: const Key('Waiting'),\n                currentPageIndex: 2,\n              ),\n              Container(\n                margin: EdgeInsets.fromLTRB(\n                  SizeConfig.screenWidth! * 0.06,\n                  SizeConfig.screenHeight! * 0.01,\n                  SizeConfig.screenWidth! * 0.06,\n                  SizeConfig.screenHeight! * 0.01,\n                ),\n                width: SizeConfig.screenWidth,\n                child: Column(\n                  crossAxisAlignment: CrossAxisAlignment.start,\n                  children: [\n                    //Greeting text\n                    CustomRichText(\n                      key: const Key('WaitingPageText'),\n                      words: model.greeting,\n                    ),\n                    SizedBox(\n                      height: SizeConfig.screenHeight! * 0.03,\n                    ),\n                    Text(\n                      AppLocalizations.of(context)!\n                          .strictTranslate('Request Sent to'),\n                      style: Theme.of(context).textTheme.titleLarge,\n                    ),\n                  ],\n                ),\n              ),\n              //Information of the organization to which the request is sent.\n              Expanded(\n                child: ListView.builder(\n                  key: const Key('PendingRequestList'),\n                  shrinkWrap: true,\n                  padding: EdgeInsets.zero,\n                  itemCount: model.pendingRequestOrg.length,\n                  itemBuilder: (BuildContext context, int index) \\{\n                    return CustomListTile(\n                      key: const Key('WaitingJoin'),\n                      index: index,\n                      type: TileType.org,\n                      orgInfo: model.pendingRequestOrg[index],\n                      onTapOrgInfo: (item) \\{\\},\n                    );\n                  \\},\n                ),\n              ),\n              SizedBox(\n                height: SizeConfig.screenHeight! * 0.0215,\n              ),\n              //Join organization button\n              RaisedRoundedButton(\n                key: const Key('JoinOrg'),\n                buttonLabel: AppLocalizations.of(context)!\n                    .strictTranslate('Join Organisation'),\n                onTap: model.joinOrg,\n                showArrow: true,\n                textColor: Theme.of(context).colorScheme.secondaryContainer,\n                backgroundColor: Theme.of(context)\n                    .inputDecorationTheme\n                    .focusedBorder!\n                    .borderSide\n                    .color,\n              ),\n              SizedBox(\n                height: SizeConfig.screenHeight! * 0.0215,\n              ),\n              //Logout button\n              RaisedRoundedButton(\n                key: const Key('Logout'),\n                buttonLabel:\n                    AppLocalizations.of(context)!.strictTranslate('Log out'),\n                onTap: model.logout,\n                textColor: Theme.of(context)\n                    .inputDecorationTheme\n                    .focusedBorder!\n                    .borderSide\n                    .color,\n                backgroundColor:\n                    Theme.of(context).colorScheme.secondaryContainer,\n              ),\n              SizedBox(\n                height: SizeConfig.screenHeight! * 0.0215,\n              ),\n            ],\n          ),\n        ),\n      );\n    \\},\n  );\n\\}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);