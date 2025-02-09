"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81967],{82744:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>n});const s=JSON.parse('{"id":"auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel-class","title":"CreateEventViewModel class","description":"CreateEventViewModel class have methods to interact with model in.","source":"@site/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel-class.md","sourceDirName":"auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model","slug":"/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel-class","permalink":"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel-class","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel-class.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"validate property","permalink":"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/validate"},"next":{"title":"create_event_view_model library","permalink":"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/view_model_after_auth_view_models_event_view_models_create_event_view_model-library"}}');var i=r(74848),l=r(28453);const d={},o="CreateEventViewModel class",a={},n=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"descriptionFocus \u2194 FocusNode",id:"descriptionfocus--focusnode",level:5},{value:"eventDescriptionTextController \u2194 TextEditingController",id:"eventdescriptiontextcontroller--texteditingcontroller",level:5},{value:"eventEndDate \u2194 DateTime",id:"eventenddate--datetime",level:5},{value:"eventEndTime \u2194 TimeOfDay",id:"eventendtime--timeofday",level:5},{value:"eventLocationTextController \u2194 TextEditingController",id:"eventlocationtextcontroller--texteditingcontroller",level:5},{value:"eventStartDate \u2194 DateTime",id:"eventstartdate--datetime",level:5},{value:"eventStartTime \u2194 TimeOfDay",id:"eventstarttime--timeofday",level:5},{value:"eventTitleTextController \u2194 TextEditingController",id:"eventtitletextcontroller--texteditingcontroller",level:5},{value:"formKey \u2192 GlobalKey&lt;FormState&gt;",id:"formkey--globalkeyformstate",level:5},{value:"hashCode \u2192 int",id:"hashcode--int",level:5},{value:"hasListeners \u2192 bool",id:"haslisteners--bool",level:5},{value:"imageFile \u2192 File?",id:"imagefile--file",level:5},{value:"isBusy \u2192 bool",id:"isbusy--bool",level:5},{value:"isPublicSwitch \u2194 bool",id:"ispublicswitch--bool",level:5},{value:"isRegisterableSwitch \u2194 bool",id:"isregisterableswitch--bool",level:5},{value:"latitude \u2194 double?",id:"latitude--double",level:5},{value:"locationFocus \u2194 FocusNode",id:"locationfocus--focusnode",level:5},{value:"longitude \u2194 double?",id:"longitude--double",level:5},{value:"memberCheckedMap \u2192 Map&lt;String, bool&gt;",id:"membercheckedmap--mapstring-bool",level:5},{value:"orgMembersList \u2194 List&lt;User&gt;",id:"orgmemberslist--listuser",level:5},{value:"runtimeType \u2192 Type",id:"runtimetype--type",level:5},{value:"selectedMembers \u2192 List&lt;User&gt;",id:"selectedmembers--listuser",level:5},{value:"state \u2192 ViewState",id:"state--viewstate",level:5},{value:"titleFocus \u2194 FocusNode",id:"titlefocus--focusnode",level:5},{value:"validate \u2194 AutovalidateMode",id:"validate--autovalidatemode",level:5},{value:"Methods",id:"methods",level:2},{value:"addListener(VoidCallback listener) void",id:"addlistenervoidcallback-listener-void",level:5},{value:"buildUserList() void",id:"builduserlist-void",level:5},{value:"createEvent() Future&lt;void&gt;",id:"createevent-futurevoid",level:5},{value:"dispose() void",id:"dispose-void",level:5},{value:"getCurrentOrgUsersList() Future&lt;List&lt;User&gt;&gt;",id:"getcurrentorguserslist-futurelistuser",level:5},{value:"getImageFromGallery({bool camera = false}) Future&lt;void&gt;",id:"getimagefromgallerybool-camera--false-futurevoid",level:5},{value:"initialize() void",id:"initialize-void",level:5},{value:"noSuchMethod(Invocation invocation) dynamic",id:"nosuchmethodinvocation-invocation-dynamic",level:5},{value:"notifyListeners() void",id:"notifylisteners-void",level:5},{value:"removeImage() void",id:"removeimage-void",level:5},{value:"removeListener(VoidCallback listener) void",id:"removelistenervoidcallback-listener-void",level:5},{value:"removeUserFromList({required String userId}) void",id:"removeuserfromlistrequired-string-userid-void",level:5},{value:"setState(ViewState viewState) void",id:"setstateviewstate-viewstate-void",level:5},{value:"toString() String",id:"tostring-string",level:5},{value:"Operators",id:"operators",level:2},{value:"operator ==(Object other) bool",id:"operator-object-other-bool",level:5}];function c(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h5:"h5",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"createeventviewmodel-class",children:"CreateEventViewModel class"})}),"\n",(0,i.jsx)("p",{children:"CreateEventViewModel class have methods to interact with model in."}),"\n",(0,i.jsx)("p",{children:"the context of creating the event in the organization."}),"\n",(0,i.jsx)("p",{children:"Methods include:"}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(t.code,{children:"dartcreateEvent"})," : to create an event."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(t.code,{children:"dartgetImageFromGallery"})," : to select image for a post."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(t.code,{children:"dartremoveImage"})," : to remove the image."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(t.code,{children:"dartgetCurrentOrgUsersList"})," : to get all user list of current organization."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(t.code,{children:"dartremoveUserFromList"})," : to remove a user from list."]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Inheritance"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier-class.html",children:"ChangeNotifier"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_base_view_model/BaseModel-class",children:"BaseModel"})}),"\n",(0,i.jsx)(t.li,{children:"CreateEventViewModel"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/",children:"CreateEventViewModel"})," ()"]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.h5,{id:"descriptionfocus--focusnode",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/descriptionFocus",children:"descriptionFocus"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/FocusNode-class.html",children:"FocusNode"})]}),"\n",(0,i.jsxs)(t.p,{children:["DescriptionFocus FocusNode.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"eventdescriptiontextcontroller--texteditingcontroller",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/eventDescriptionTextController",children:"eventDescriptionTextController"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/TextEditingController-class.html",children:"TextEditingController"})]}),"\n",(0,i.jsxs)(t.p,{children:["Event Description Text Controller.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"eventenddate--datetime",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/eventEndDate",children:"eventEndDate"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/DateTime-class.html",children:"DateTime"})]}),"\n",(0,i.jsxs)(t.p,{children:["Event End Date.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"eventendtime--timeofday",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/eventEndTime",children:"eventEndTime"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/material/TimeOfDay-class.html",children:"TimeOfDay"})]}),"\n",(0,i.jsxs)(t.p,{children:["Event End Time.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"eventlocationtextcontroller--texteditingcontroller",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/eventLocationTextController",children:"eventLocationTextController"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/TextEditingController-class.html",children:"TextEditingController"})]}),"\n",(0,i.jsxs)(t.p,{children:["Event Location Text Controller.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"eventstartdate--datetime",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/eventStartDate",children:"eventStartDate"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/DateTime-class.html",children:"DateTime"})]}),"\n",(0,i.jsxs)(t.p,{children:["Event Start Date.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"eventstarttime--timeofday",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/eventStartTime",children:"eventStartTime"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/material/TimeOfDay-class.html",children:"TimeOfDay"})]}),"\n",(0,i.jsxs)(t.p,{children:["Event Start Time.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"eventtitletextcontroller--texteditingcontroller",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/eventTitleTextController",children:"eventTitleTextController"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/TextEditingController-class.html",children:"TextEditingController"})]}),"\n",(0,i.jsxs)(t.p,{children:["Event Title Text Controller.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"formkey--globalkeyformstate",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/formKey",children:"formKey"})," \u2192 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/GlobalKey-class.html",children:"GlobalKey"}),"<",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/FormState-class.html",children:"FormState"}),">"]}),"\n",(0,i.jsxs)(t.p,{children:["Global FormKey.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"final"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"hashcode--int",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/hashCode.html",children:"hashCode"})," \u2192 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/int-class.html",children:"int"})]}),"\n",(0,i.jsxs)(t.p,{children:["The hash code for this object.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsxs)(t.em,{children:[(0,i.jsx)("span",{class:"feature",children:"read-only"}),(0,i.jsx)("span",{class:"feature",children:"inherited"})]})]}),"\n",(0,i.jsxs)(t.h5,{id:"haslisteners--bool",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/hasListeners.html",children:"hasListeners"})," \u2192 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,i.jsxs)(t.p,{children:["Whether any listeners are currently registered.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsxs)(t.em,{children:[(0,i.jsx)("span",{class:"feature",children:"read-only"}),(0,i.jsx)("span",{class:"feature",children:"inherited"})]})]}),"\n",(0,i.jsxs)(t.h5,{id:"imagefile--file",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/imageFile",children:"imageFile"})," \u2192 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-io/File-class.html",children:"File"}),"?"]}),"\n",(0,i.jsxs)(t.p,{children:["Getter to return imageFile.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read-only"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"isbusy--bool",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_base_view_model/BaseModel/isBusy",children:"isBusy"})," \u2192 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:[(0,i.jsx)("span",{class:"feature",children:"read-only"}),(0,i.jsx)("span",{class:"feature",children:"inherited"})]})}),"\n",(0,i.jsxs)(t.h5,{id:"ispublicswitch--bool",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/isPublicSwitch",children:"isPublicSwitch"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,i.jsxs)(t.p,{children:["Public Event or Not.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"isregisterableswitch--bool",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/isRegisterableSwitch",children:"isRegisterableSwitch"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,i.jsxs)(t.p,{children:["If event is registerable after creation.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"latitude--double",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/latitude",children:"latitude"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/double-class.html",children:"double"}),"?"]}),"\n",(0,i.jsxs)(t.p,{children:["Latitude store.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"locationfocus--focusnode",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/locationFocus",children:"locationFocus"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/FocusNode-class.html",children:"FocusNode"})]}),"\n",(0,i.jsxs)(t.p,{children:["LocationFocus FocusNode.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"longitude--double",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/longitude",children:"longitude"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/double-class.html",children:"double"}),"?"]}),"\n",(0,i.jsxs)(t.p,{children:["Longitude store.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"membercheckedmap--mapstring-bool",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/memberCheckedMap",children:"memberCheckedMap"})," \u2192 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Map-class.html",children:"Map"}),"<",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"}),", ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"}),">"]}),"\n",(0,i.jsxs)(t.p,{children:["Getter to return members map.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read-only"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"orgmemberslist--listuser",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/orgMembersList",children:"orgMembersList"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,i.jsx)(t.a,{href:"/docs/auto-docs/models_user_user_info/User-class",children:"User"}),">"]}),"\n",(0,i.jsxs)(t.p,{children:["Organisation Members List.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"runtimetype--type",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/runtimeType.html",children:"runtimeType"})," \u2192 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Type-class.html",children:"Type"})]}),"\n",(0,i.jsxs)(t.p,{children:["A representation of the runtime type of the object.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsxs)(t.em,{children:[(0,i.jsx)("span",{class:"feature",children:"read-only"}),(0,i.jsx)("span",{class:"feature",children:"inherited"})]})]}),"\n",(0,i.jsxs)(t.h5,{id:"selectedmembers--listuser",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/selectedMembers",children:"selectedMembers"})," \u2192 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,i.jsx)(t.a,{href:"/docs/auto-docs/models_user_user_info/User-class",children:"User"}),">"]}),"\n",(0,i.jsxs)(t.p,{children:["Getter to return selected members.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read-only"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"state--viewstate",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_base_view_model/BaseModel/state",children:"state"})," \u2192 ",(0,i.jsx)(t.a,{href:"/docs/auto-docs/enums_enums/ViewState",children:"ViewState"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.em,{children:[(0,i.jsx)("span",{class:"feature",children:"read-only"}),(0,i.jsx)("span",{class:"feature",children:"inherited"})]})}),"\n",(0,i.jsxs)(t.h5,{id:"titlefocus--focusnode",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/titleFocus",children:"titleFocus"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/FocusNode-class.html",children:"FocusNode"})]}),"\n",(0,i.jsxs)(t.p,{children:["TitleFocus FocusNode.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"validate--autovalidatemode",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/validate",children:"validate"})," \u2194 ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/widgets/AutovalidateMode.html",children:"AutovalidateMode"})]}),"\n",(0,i.jsxs)(t.p,{children:["AutoValidateMode default to disabled.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"read / write"})})]}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(t.h5,{id:"addlistenervoidcallback-listener-void",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/addListener.html",children:"addListener"}),"(",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-ui/VoidCallback.html",children:"VoidCallback"})," listener) void"]}),"\n",(0,i.jsxs)(t.p,{children:["Register a closure to be called when the object changes.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"inherited"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"builduserlist-void",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/buildUserList",children:"buildUserList"}),"() void"]}),"\n",(0,i.jsx)(t.p,{children:"This function build the user list."}),"\n",(0,i.jsxs)(t.h5,{id:"createevent-futurevoid",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/createEvent",children:"createEvent"}),"() ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,i.jsx)(t.p,{children:"This function is used to create the event for the organization."}),"\n",(0,i.jsxs)(t.h5,{id:"dispose-void",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/dispose.html",children:"dispose"}),"() void"]}),"\n",(0,i.jsxs)(t.p,{children:["Discards any resources used by the object. After this is called, the\nobject is not in a usable state and should be discarded (calls to\n",(0,i.jsx)("a",{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/addListener.html",children:"addListener"})," will throw after the object is disposed).",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"inherited"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"getcurrentorguserslist-futurelistuser",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/getCurrentOrgUsersList",children:"getCurrentOrgUsersList"}),"() ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/List-class.html",children:"List"}),"<",(0,i.jsx)(t.a,{href:"/docs/auto-docs/models_user_user_info/User-class",children:"User"}),">>"]}),"\n",(0,i.jsxs)(t.p,{children:["This function fetch all the users in the current organization and return ",(0,i.jsx)(t.code,{children:"dartList"}),"."]}),"\n",(0,i.jsxs)(t.h5,{id:"getimagefromgallerybool-camera--false-futurevoid",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/getImageFromGallery",children:"getImageFromGallery"}),"({",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})," camera = false}) ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-async/Future-class.html",children:"Future"}),"<void>"]}),"\n",(0,i.jsx)(t.p,{children:"This function is used to get the image from gallery."}),"\n",(0,i.jsxs)(t.h5,{id:"initialize-void",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/initialize",children:"initialize"}),"() void"]}),"\n",(0,i.jsx)(t.p,{children:"Function To Initialize."}),"\n",(0,i.jsxs)(t.h5,{id:"nosuchmethodinvocation-invocation-dynamic",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/noSuchMethod.html",children:"noSuchMethod"}),"(",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Invocation-class.html",children:"Invocation"})," invocation) dynamic"]}),"\n",(0,i.jsxs)(t.p,{children:["Invoked when a non-existent method or property is accessed.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"inherited"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"notifylisteners-void",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/notifyListeners.html",children:"notifyListeners"}),"() void"]}),"\n",(0,i.jsxs)(t.p,{children:["Call all the registered listeners.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"inherited"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"removeimage-void",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/removeImage",children:"removeImage"}),"() void"]}),"\n",(0,i.jsx)(t.p,{children:"This function remove the selected image."}),"\n",(0,i.jsxs)(t.h5,{id:"removelistenervoidcallback-listener-void",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/foundation/ChangeNotifier/removeListener.html",children:"removeListener"}),"(",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-ui/VoidCallback.html",children:"VoidCallback"})," listener) void"]}),"\n",(0,i.jsxs)(t.p,{children:["Remove a previously registered closure from the list of closures that are\nnotified when the object changes.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"inherited"})})]}),"\n",(0,i.jsxs)(t.h5,{id:"removeuserfromlistrequired-string-userid-void",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_after_auth_view_models_event_view_models_create_event_view_model/CreateEventViewModel/removeUserFromList",children:"removeUserFromList"}),"({required ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," userId}) void"]}),"\n",(0,i.jsx)(t.p,{children:"This function is used to remove a user from user's list."}),"\n",(0,i.jsxs)(t.h5,{id:"setstateviewstate-viewstate-void",children:[(0,i.jsx)(t.a,{href:"/docs/auto-docs/view_model_base_view_model/BaseModel/setState",children:"setState"}),"(",(0,i.jsx)(t.a,{href:"/docs/auto-docs/enums_enums/ViewState",children:"ViewState"})," viewState) void"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"inherited"})})}),"\n",(0,i.jsxs)(t.h5,{id:"tostring-string",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/toString.html",children:"toString"}),"() ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})]}),"\n",(0,i.jsxs)(t.p,{children:["A string representation of this object.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"inherited"})})]}),"\n",(0,i.jsx)(t.h2,{id:"operators",children:"Operators"}),"\n",(0,i.jsxs)(t.h5,{id:"operator-object-other-bool",children:[(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object/operator_equals.html",children:"operator =="}),"(",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/Object-class.html",children:"Object"})," other) ",(0,i.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/bool-class.html",children:"bool"})]}),"\n",(0,i.jsxs)(t.p,{children:["The equality operator.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.em,{children:(0,i.jsx)("span",{class:"feature",children:"inherited"})})]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>o});var s=r(96540);const i={},l=s.createContext(i);function d(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);