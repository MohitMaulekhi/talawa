"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2760],{4441:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"auto-docs/utils_post_queries/PostQueries/removeLike","title":"removeLike method","description":"String removeLike","source":"@site/docs/auto-docs/utils_post_queries/PostQueries/removeLike.md","sourceDirName":"auto-docs/utils_post_queries/PostQueries","slug":"/auto-docs/utils_post_queries/PostQueries/removeLike","permalink":"/docs/auto-docs/utils_post_queries/PostQueries/removeLike","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa/edit/develop/docs/docs/auto-docs/utils_post_queries/PostQueries/removeLike.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"getPostsById method","permalink":"/docs/auto-docs/utils_post_queries/PostQueries/getPostsById"},"next":{"title":"uploadPost method","permalink":"/docs/auto-docs/utils_post_queries/PostQueries/uploadPost"}}');var n=s(74848),r=s(28453);const i={},d="removeLike method",u={},c=[{value:"Implementation",id:"implementation",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"removelike-method",children:"removeLike method"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://api.flutter.dev/flutter/dart-core/String-class.html",children:"String"})," removeLike\n()"]}),"\n",(0,n.jsx)("p",{children:"Remove Like from a post."}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"params"}),":\nNone"]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"returns"}),":"]}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"dartString"}),": The query related to removingLike"]})}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dart",children:'String removeLike() \\{\n  return """\n   mutation unlikePost(\\$postID: ID!) \\{\n    unlikePost( id: \\$postID,)\n    \\{\n      _id\n      likedBy\\{\n      _id\n      \\}\n    \\}\n  \\}\n""";\n\\}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>d});var o=s(96540);const n={},r=o.createContext(n);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);