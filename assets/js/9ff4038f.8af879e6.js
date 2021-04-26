(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,h=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?a.a.createElement(h,s(s({ref:t},l),{},{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(112)),i={sidebar_position:1},s={unversionedId:"getting-started/introduction",id:"getting-started/introduction",isDocsHomePage:!1,title:"Introduction to Yearn",description:"Yearn Finance is a suite of products in Decentralized Finance (DeFi) that provides lending aggregation, yield generation, and insurance on the Ethereum blockchain. The protocol is maintained by various independent developers and is governed by YFI holders.",source:"@site/docs/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/yearn-devdocs/docs/getting-started/introduction",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/docs/getting-started/introduction.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"getting_started",next:{title:"FAQ",permalink:"/yearn-devdocs/docs/getting-started/faq"}},c=[{value:"Core Products",id:"core-products",children:[{value:"Vaults",id:"vaults",children:[]},{value:"Earn",id:"earn",children:[]},{value:"Zap",id:"zap",children:[]},{value:"Cover",id:"cover",children:[]}]},{value:"Governance",id:"governance",children:[]},{value:"Communication Channels",id:"communication-channels",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Yearn Finance is a suite of products in Decentralized Finance (DeFi) that provides lending aggregation, yield generation, and insurance on the Ethereum blockchain. The protocol is maintained by various independent developers and is governed by YFI holders."),Object(o.b)("p",null,"You can find brief descriptions of Yearn's core products, the governance process, and links to active communication channels below."),Object(o.b)("h2",{id:"core-products"},"Core Products"),Object(o.b)("h3",{id:"vaults"},"Vaults"),Object(o.b)("p",null,"Capital pools that automatically generate yield based on opportunities present in the market. Vaults benefit users by socializing gas costs, automating the yield generation and rebalancing process, and automatically shifting capital as opportunities arise. End users also do not need to have a proficient knowledge of the underlying protocols involved or DeFi, thus the Vaults represent a passive-investing strategy."),Object(o.b)("h3",{id:"earn"},"Earn"),Object(o.b)("p",null,"The first Yearn product was a lending aggregator. Funds are shifted between dYdX, AAVE, and Compound automatically as interest rates change between these protocols. Users can deposit to these lending aggregator smart contracts via the Earn page. This product completely optimizes the interest accrual process for end-users to ensure they are obtaining the highest interest rates at all times among the platforms specified above."),Object(o.b)("h3",{id:"zap"},"Zap"),Object(o.b)("p",null,'A tool that enables users to swap into and out of (known as "Zapping") several liquidity pools available on Curve.Finance. These pools benefit from the lending aggregators discussed above, as well as earning users trading fees by partcipating as Liquidity Providers (LPs) on Curve.Fi. Currently users can use five stablecoins (BUSD, DAI, USDC, USDT, TUSD) and "Zap" into one of two pools (y.curve.fi or busd.curve.f) on Curve. Alternatively, users can "Zap" out of these two Curve pools and into one of the five base stablecoins.'),Object(o.b)("h3",{id:"cover"},"Cover"),Object(o.b)("p",null,"Insurance that enables users to obtain coverage against financial loss for various smart contracts and/or protcols on the Ethereum blockchain. Cover is underwritten by Nexus Mutual."),Object(o.b)("h2",{id:"governance"},"Governance"),Object(o.b)("p",null,"The Yearn ecosystem is controlled by YFI token holders who submit and vote on off-chain proposals that govern the ecosystem. Proposals that generate a majority support ","(",">","50% of the vote",")"," are implemented by a 9 member multi-signature wallet. Changes must be signed by 6 out of the 9 wallet signers in order to be implemented. The members of the multi-signature wallet were voted in by YFI holders and are subject to change from future governance votes. Please refer to our FAQ for ",Object(o.b)("a",{parentName:"p",href:"https://docs.yearn.finance/faq#who-are-the-9-multisig-signers"},"the list of the multisig signers")," and more information about the ",Object(o.b)("a",{parentName:"p",href:"https://docs.yearn.finance/faq#governance"},"governance process"),"."),Object(o.b)("h2",{id:"communication-channels"},"Communication Channels"),Object(o.b)("p",null,"Governance Forum ",Object(o.b)("a",{parentName:"p",href:"https://gov.yearn.finance/"},"https://gov.yearn.finance/")),Object(o.b)("p",null,"Discord ",Object(o.b)("a",{parentName:"p",href:"http://discord.yearn.finance"},"http://discord.yearn.finance")),Object(o.b)("p",null,"Telegram ",Object(o.b)("a",{parentName:"p",href:"https://t.me/yearnfinance"},"https://t.me/yearnfinance")),Object(o.b)("p",null,"Reddit ",Object(o.b)("a",{parentName:"p",href:"https://www.reddit.com/r/yearn_finance/"},"https://www.reddit.com/r/yearn_finance/")))}d.isMDXComponent=!0}}]);