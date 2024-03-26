"use strict";(self.webpackChunktemporal_documentation=self.webpackChunktemporal_documentation||[]).push([[401],{1243:(e,t,a)=>{a.d(t,{A:()=>v});a(6540);var s=a(4164),n=a(7559),i=a(1754),l=a(9169),o=a(8774),r=a(1312),d=a(6025),c=a(4848);function u(e){return(0,c.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,c.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,d.A)("/");return(0,c.jsx)("li",{className:"breadcrumbs__item",children:(0,c.jsx)(o.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,c.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){let{children:t,href:a,isLast:s}=e;const n="breadcrumbs__link";return s?(0,c.jsx)("span",{className:n,itemProp:"name",children:t}):a?(0,c.jsx)(o.A,{className:n,href:a,itemProp:"item",children:(0,c.jsx)("span",{itemProp:"name",children:t})}):(0,c.jsx)("span",{className:n,children:t})}function x(e){let{children:t,active:a,index:n,addMicrodata:i}=e;return(0,c.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":a}),children:[t,(0,c.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function v(){const e=(0,i.OF)(),t=(0,l.Dt)();return e?(0,c.jsx)("nav",{className:(0,s.A)(n.G.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,c.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,c.jsx)(h,{}),e.map(((t,a)=>{const s=a===e.length-1,n="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,c.jsx)(x,{active:s,index:a,addMicrodata:!!n,children:(0,c.jsx)(b,{href:n,isLast:s,children:t.label})},a)}))]})}):null}},3761:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var s=a(6540),n=a(1003),i=a(9532),l=a(4848);const o=s.createContext(null);function r(e){let{children:t,content:a}=e;const n=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return(0,l.jsx)(o.Provider,{value:n,children:t})}function d(){const e=(0,s.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:a}=d();return(0,l.jsx)(n.be,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var u=a(4164),m=a(4581),h=a(6929);function p(){const{metadata:e}=d();return(0,l.jsx)(h.A,{previous:e.previous,next:e.next})}var b=a(1878),x=a(4267),v=a(7559),j=a(1312);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return(0,l.jsx)(j.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:a})})},children:" on {date}"})}function f(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(j.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:v.G.common.lastUpdated,children:[(0,l.jsx)(j.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?(0,l.jsx)(g,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:s?(0,l.jsx)(f,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var _=a(8774);const N={iconEdit:"iconEdit_Z9Sw"};function L(e){let{className:t,...a}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(N.iconEdit,t),"aria-hidden":"true",...a,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function C(e){let{editUrl:t}=e;return(0,l.jsxs)(_.A,{to:t,className:v.G.common.editThisPage,children:[(0,l.jsx)(L,{}),(0,l.jsx)(j.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const T={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function U(e){let{permalink:t,label:a,count:s}=e;return(0,l.jsxs)(_.A,{href:t,className:(0,u.A)(T.tag,s?T.tagWithCount:T.tagRegular),children:[a,s&&(0,l.jsx)("span",{children:s})]})}const k={tags:"tags_jXut",tag:"tag_QGVx"};function w(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(j.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.A)(k.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:a}=e;return(0,l.jsx)("li",{className:k.tag,children:(0,l.jsx)(U,{label:t,permalink:a})},a)}))})]})}const y={lastUpdated:"lastUpdated_vwxv"};function M(e){return(0,l.jsx)("div",{className:(0,u.A)(v.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(w,{...e})})})}function B(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:n}=e;return(0,l.jsxs)("div",{className:(0,u.A)(v.G.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(C,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.A)("col",y.lastUpdated),children:(a||s)&&(0,l.jsx)(A,{lastUpdatedAt:a,formattedLastUpdatedAt:n,lastUpdatedBy:s})})]})}function I(){const{metadata:e}=d(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:n,tags:i}=e,o=i.length>0,r=!!(t||a||n);return o||r?(0,l.jsxs)("footer",{className:(0,u.A)(v.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(M,{tags:i}),r&&(0,l.jsx)(B,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:n,formattedLastUpdatedAt:s})]}):null}var V=a(1422),E=a(5195);const H={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function G(e){let{collapsed:t,...a}=e;return(0,l.jsx)("button",{type:"button",...a,className:(0,u.A)("clean-btn",H.tocCollapsibleButton,!t&&H.tocCollapsibleButtonExpanded,a.className),children:(0,l.jsx)(j.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const P={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function D(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:n}=e;const{collapsed:i,toggleCollapsed:o}=(0,V.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(P.tocCollapsible,!i&&P.tocCollapsibleExpanded,a),children:[(0,l.jsx)(G,{collapsed:i,onClick:o}),(0,l.jsx)(V.N,{lazy:!0,className:P.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(E.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:n})})]})}const S={tocMobile:"tocMobile_ITEo"};function F(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)(D,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(v.G.docs.docTocMobile,S.tocMobile)})}var R=a(7763);function O(){const{toc:e,frontMatter:t}=d();return(0,l.jsx)(R.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.G.docs.docTocDesktop})}var z=a(1107),W=a(2125);function q(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=d();return t.hide_title||void 0!==a?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(v.G.docs.docMarkdown,"markdown"),children:[a&&(0,l.jsx)("header",{children:(0,l.jsx)(z.A,{as:"h1",children:a})}),(0,l.jsx)(W.A,{children:t})]})}var Z=a(1243),Q=a(996);const X={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Y(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=d(),a=(0,m.l)(),s=e.hide_table_of_contents,n=!s&&t.length>0;return{hidden:s,mobile:n?(0,l.jsx)(F,{}):void 0,desktop:!n||"desktop"!==a&&"ssr"!==a?void 0:(0,l.jsx)(O,{})}}(),{metadata:{unlisted:s}}=d();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!a.hidden&&X.docItemCol),children:[s&&(0,l.jsx)(Q.A,{}),(0,l.jsx)(b.A,{}),(0,l.jsxs)("div",{className:X.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(Z.A,{}),(0,l.jsx)(x.A,{}),a.mobile,(0,l.jsx)(q,{children:t}),(0,l.jsx)(I,{})]}),(0,l.jsx)(p,{})]})]}),a.desktop&&(0,l.jsx)("div",{className:"col col--3",children:a.desktop})]})}function $(e){const t=`docs-doc-id-${e.content.metadata.id}`,a=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(n.e3,{className:t,children:[(0,l.jsx)(c,{}),(0,l.jsx)(Y,{children:(0,l.jsx)(a,{})})]})})}},6929:(e,t,a)=>{a.d(t,{A:()=>r});a(6540);var s=a(1312),n=a(4164),i=a(8774),l=a(4848);function o(e){const{permalink:t,title:a,subLabel:s,isNext:o}=e;return(0,l.jsxs)(i.A,{className:(0,n.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:a})]})}function r(e){const{previous:t,next:a}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(o,{...t,subLabel:(0,l.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),a&&(0,l.jsx)(o,{...a,subLabel:(0,l.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,a)=>{a.d(t,{A:()=>r});a(6540);var s=a(4164),n=a(1312),i=a(7559),l=a(2252),o=a(4848);function r(e){let{className:t}=e;const a=(0,l.r)();return a.badge?(0,o.jsx)("span",{className:(0,s.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(n.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label},children:"Version: {versionLabel}"})}):null}},1878:(e,t,a)=>{a.d(t,{A:()=>x});a(6540);var s=a(4164),n=a(4586),i=a(8774),l=a(1312),o=a(4070),r=a(7559),d=a(5597),c=a(2252),u=a(4848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:a.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:a.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function p(e){let{versionLabel:t,to:a,onClick:s}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.A,{to:a,onClick:s,children:(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:i}}=(0,n.A)(),{pluginId:l}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:c}=(0,d.g1)(l),{latestDocSuggestion:m,latestVersionSuggestion:b}=(0,o.HW)(l),x=m??(v=b).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,s.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:a})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(p,{versionLabel:b.label,to:x.path,onClick:()=>c(b.name)})})]})}function x(e){let{className:t}=e;const a=(0,c.r)();return a.banner?(0,u.jsx)(b,{className:t,versionMetadata:a}):null}}}]);