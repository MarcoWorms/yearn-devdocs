(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),s=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(a),b=o,h=p["".concat(i,".").concat(b)]||p[b]||d[b]||r;return a?n.a.createElement(h,l(l({ref:t},c),{},{components:a})):n.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return s}));var o=a(3),n=a(7),r=(a(0),a(112)),i={},l={unversionedId:"getting-started/how-to-guides/how-to-participate-in-a-yvault",id:"getting-started/how-to-guides/how-to-participate-in-a-yvault",isDocsHomePage:!1,title:"How To Participate in a yVault",description:"This visual guide will walk you through every step in depositing funds in a yVault.",source:"@site/docs/getting-started/how-to-guides/how-to-participate-in-a-yvault.md",sourceDirName:"getting-started/how-to-guides",slug:"/getting-started/how-to-guides/how-to-participate-in-a-yvault",permalink:"/yearn-devdocs/docs/getting-started/how-to-guides/how-to-participate-in-a-yvault",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/docs/getting-started/how-to-guides/how-to-participate-in-a-yvault.md",version:"current",frontMatter:{},sidebar:"getting_started",previous:{title:"How to Mint yUSD",permalink:"/yearn-devdocs/docs/getting-started/how-to-guides/how-to-mint-yusd"},next:{title:"How to understand CRV vote locking",permalink:"/yearn-devdocs/docs/getting-started/how-to-guides/how-to-understand-crv-vote-locking"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Walkthrough",id:"walkthrough",children:[{value:"1. Go to Vaults page and click on \u201cConnect your wallet\u201d",id:"1-go-to-vaults-page-and-click-on-connect-your-wallet",children:[]},{value:"2. Choose your favorite wallet",id:"2-choose-your-favorite-wallet",children:[]},{value:"3. Enter your password and click \u201cUnlock\u201d",id:"3-enter-your-password-and-click-unlock",children:[]},{value:"4. Choose which Vault you want to deposit into, for example, the DAI Vault",id:"4-choose-which-vault-you-want-to-deposit-into-for-example-the-dai-vault",children:[]},{value:"5. Enter the amount of DAI that you want to deposit",id:"5-enter-the-amount-of-dai-that-you-want-to-deposit",children:[]},{value:"6. Approve and Deposit",id:"6-approve-and-deposit",children:[]},{value:"7. Receive your yToken (in this case it would be yDAI)",id:"7-receive-your-ytoken-in-this-case-it-would-be-ydai",children:[]},{value:"8. Track your earnings",id:"8-track-your-earnings",children:[]}]}],c={toc:u};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This visual guide will walk you through every step in depositing funds in a ",Object(r.b)("a",{parentName:"p",href:"https://docs.yearn.finance/products/yvaults"},"yVault"),"."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You must have the yVault's underlying token. For DAI yVault, you must have DAI."),Object(r.b)("li",{parentName:"ul"},"You must use a supported wallet, either Metamask, Trustwallet, Trezor, or Torus.")),Object(r.b)("h2",{id:"walkthrough"},"Walkthrough"),Object(r.b)("h3",{id:"1-go-to-vaults-page-and-click-on-connect-your-wallet"},"1. Go to ",Object(r.b)("a",{parentName:"h3",href:"https://yearn.finance/vaults"},"Vaults page")," and click on \u201cConnect your wallet\u201d"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/ShWcOX6.jpg",alt:"connect metamask"})),Object(r.b)("h3",{id:"2-choose-your-favorite-wallet"},"2. Choose your favorite wallet"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/TuabuVf.jpg",alt:"choose wallet"})),Object(r.b)("h3",{id:"3-enter-your-password-and-click-unlock"},"3. Enter your password and click \u201cUnlock\u201d"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/nep4a4D.jpg",alt:"metamask password"})),Object(r.b)("h3",{id:"4-choose-which-vault-you-want-to-deposit-into-for-example-the-dai-vault"},"4. Choose which Vault you want to deposit into, for example, the DAI Vault"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/IcmANu3.jpg",alt:"deposit DAI vault"})),Object(r.b)("h3",{id:"5-enter-the-amount-of-dai-that-you-want-to-deposit"},"5. Enter the amount of DAI that you want to deposit"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/VaAGaOc.jpg",alt:"amount DAI vault"})),Object(r.b)("h3",{id:"6-approve-and-deposit"},"6. Approve and Deposit"),Object(r.b)("p",null,"Depositing for the first time requires making two transactions, one approval, and one deposit. Approval is one-time, subsequent deposits can be made in a single transaction. Please ensure there is ",Object(r.b)("strong",{parentName:"p"},"ETH in your wallet")," to cover the gas cost on Ethereum."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Approval (first time only)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'Enter from 0 to 100% of your wallet DAI balance then click "Deposit"'),Object(r.b)("li",{parentName:"ul"},"Confirm the transaction in your wallet"))),Object(r.b)("li",{parentName:"ul"},"Deposit",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'Enter from 0 to 100% of your wallet DAI balance then click "Deposit"'),Object(r.b)("li",{parentName:"ul"},"Confirm the transaction in your wallet")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Please note:")," Depending on the vault you deposit into, fees may be applied. For more info see the ",Object(r.b)("a",{parentName:"p",href:"/yearn-devdocs/docs/getting-started/faq#what-are-the-fees"},"relevant section in the FAQ"),"."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/RneAtGx.jpg",alt:"deposit vault"})),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/pPGoSiP.jpg",alt:"approve DAI vault"})),Object(r.b)("h3",{id:"7-receive-your-ytoken-in-this-case-it-would-be-ydai"},"7. Receive your yToken (in this case it would be yDAI)"),Object(r.b)("p",null,"The yDAI you receive is your ",Object(r.b)("strong",{parentName:"p"},"share of the DAI Vault"),". The amount of yDAI in your wallet will ",Object(r.b)("strong",{parentName:"p"},"remain constant")," over time but the value of it will increase as the DAI Vault earns returns."),Object(r.b)("p",null,"The amount of yDAI you receive will be less than 1 per DAI you deposited because yDAI is worth more than 1 DAI."),Object(r.b)("p",null,"For example, at block number 10611372 yDAI was equal to 1.044 DAI. Therefore had you deposited 100 DAI, you would have received 95.78 yDAI (100 / 1.044)."),Object(r.b)("h3",{id:"8-track-your-earnings"},"8. Track your earnings"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://yearn.party/"},"Yearn Party")," shows an approximate running total for how much you have earned in the Vault."))}s.isMDXComponent=!0}}]);