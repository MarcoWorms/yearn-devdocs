(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{112:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(r),p=n,h=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return r?a.a.createElement(h,l(l({ref:t},c),{},{components:r})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(112)),i={title:"Developers guide"},l={unversionedId:"developers/introduction",id:"developers/introduction",isDocsHomePage:!1,title:"Developers guide",description:"This document gives a generalized and high level overview of how the protocol and its actors, smart contracts, and other services interact with each other. The aim is to build intuition about how Yearn products work.",source:"@site/docs/developers/introduction.md",sourceDirName:"developers",slug:"/developers/introduction",permalink:"/yearn-devdocs/docs/developers/introduction",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/docs/developers/introduction.md",version:"current",frontMatter:{title:"Developers guide"},sidebar:"developers",next:{title:"BaseStrategy",permalink:"/yearn-devdocs/docs/developers/contracts/BaseStrategy"}},s=[{value:"Protocol Contracts",id:"protocol-contracts",children:[{value:"Vaults",id:"vaults",children:[]},{value:"Controller",id:"controller",children:[]},{value:"Registry",id:"registry",children:[]},{value:"Strategies",id:"strategies",children:[]},{value:"Treasury",id:"treasury",children:[]},{value:"Governance",id:"governance",children:[]}]},{value:"Protocol Actors",id:"protocol-actors",children:[{value:"User",id:"user",children:[]},{value:"Keeper",id:"keeper",children:[]},{value:"Strategist",id:"strategist",children:[]}]}],c={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document gives a ",Object(o.b)("em",{parentName:"p"},"generalized and high level overview")," of how the protocol and its actors, smart contracts, and other services interact with each other. The aim is to build intuition about how Yearn products work."),Object(o.b)("p",null,'{% hint style="info" %}\nAll vaults are different. This is not a formal specification. Contracts and components are subject to change without notice.\n{% endhint %}'),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/lehnberg/yearn-diagrams/master/yearn-protocol/yearn-protocol-v0.06.svg",alt:"yearn-protocol"})),Object(o.b)("p",null,"All contracts are open source and available from the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/yearn/yearn-protocol"},"/yearn-protocol")," GitHub repo."),Object(o.b)("h2",{id:"protocol-contracts"},"Protocol Contracts"),Object(o.b)("h3",{id:"vaults"},"Vaults"),Object(o.b)("p",null,"Example: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/yearn/yearn-protocol/blob/develop/contracts/vaults/yWETH.sol"},"yWETH.sol")),Object(o.b)("p",null,"Vaults act as the representation of the user in the system, and is the internal customer for investments. There is one vault per deposit token, and they are agnostic to the strategies they interact with."),Object(o.b)("p",null,"Their primary tasks are to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"process user deposits and withdrawals"),", minting or burning LP tokens as receipts for these;"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"manage disposable funds"),", ensuring there is enough to satisfy the minimum amount available to handle withdrawals, and issuing withdrawal requests from strategies when more funds need to be added; and"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"deposit funds into strategies"),", when there is a surplus of funds in the vault above what's required to be kept at disposal.")),Object(o.b)("h3",{id:"controller"},"Controller"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/yearn/yearn-protocol/blob/develop/contracts/controllers/Controller.sol"},"Controller.sol")),Object(o.b)("p",null,"The Controller act as the gatekeeping interface between vaults and strategies and oversees communication and fund flows. Deposits and withdrawals in and out of strategies flow through the ",Object(o.b)("inlineCode",{parentName:"p"},"Controller"),". It keeps track of the addresses for the active vaults, strategies, tokens, and strategy rewards destination, acting as a pseudo-registry that verifies the origin and destination of a transaction. The ",Object(o.b)("inlineCode",{parentName:"p"},"Controller")," also handles strategy migration, moving funds from an old strategy to a new one."),Object(o.b)("h3",{id:"registry"},"Registry"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/yearn/yearn-protocol/blob/develop/contracts/registries/YRegistry.sol"},"YRegistry.sol")),Object(o.b)("p",null,"The registry is a wrapper of the controller that contains additional meta-data about active addresses. Its functionality is currently being expanded."),Object(o.b)("h3",{id:"strategies"},"Strategies"),Object(o.b)("p",null,"Example: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/yearn/yearn-protocol/blob/develop/contracts/strategies/CurveYCRVVoter.sol"},"CurveYCRVVoter.sol")),Object(o.b)("p",null,"Strategies are investment instruction sets, written by a ",Object(o.b)("inlineCode",{parentName:"p"},"Strategist"),". They are agnostic to the vaults that use them."),Object(o.b)("p",null,"Strategies execute step-by-step functions with the objective to generate yield. They do so by interacting with:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"other Yearn services"),", such as vaults, lending, and insurance; and"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"external 3rd party services"),", such as Aave, Curve, Chainlink and Maker.")),Object(o.b)("p",null,"Rewards are claimed and re-invested into the strategies, with deductions for Management fees and for compensating the ",Object(o.b)("inlineCode",{parentName:"p"},"Strategist"),"."),Object(o.b)("h3",{id:"treasury"},"Treasury"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Treasury")," contract accumulates all the Management fees sent from the strategies. It's an intermediate contract that can convert between different tokens, currently normalizing all rewards into yCRV. It calls two functions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"toVoters()"),", sending part of the fees to the governance voters, as a reward for their participation; and"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"toGovernance()"),", sending part of the fees to the multi-sig to cover gas costs and other expenses.")),Object(o.b)("h3",{id:"governance"},"Governance"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/yearn/yearn-protocol/blob/develop/contracts/strategies/StrategyYFIGovernance.sol"},"StrategyYFIGovernance.sol")),Object(o.b)("p",null,"Yearn Governance is a combination of the YFI staking contract to participate in Governance voting, and the 6-of-9 multi-sig that executes the decisions by the YFI holders."),Object(o.b)("p",null,"Governance manages the ",Object(o.b)("inlineCode",{parentName:"p"},"Vaults"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Controller"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"Strategies")," by calling functions on these contracts."),Object(o.b)("h4",{id:"vault-management"},"Vault management"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Set governing address"),", through ",Object(o.b)("inlineCode",{parentName:"li"},"setGovernance()"),", in order to upgrade governance contracts."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Set controller for the vault"),", through ",Object(o.b)("inlineCode",{parentName:"li"},"setController()"),", in order to upgrade controllers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Set amount of disposable funds at hand in vault"),", through ",Object(o.b)("inlineCode",{parentName:"li"},"setMin()"),", in order to manage how large withdrawal amounts require a Vault to issue a withdrawal request to a Strategy, via the Controller.")),Object(o.b)("h4",{id:"controller-management"},"Controller management"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Set governing address"),", through ",Object(o.b)("inlineCode",{parentName:"li"},"setGovernance()"),", in order to upgrade governance contracts."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Add vaults")," for the Controller to manage, through ",Object(o.b)("inlineCode",{parentName:"li"},"setVault()"),", in order to introduce new vaults."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Set address to receive management fees"),", through ",Object(o.b)("inlineCode",{parentName:"li"},"setRewards()")," in order to upgrade the Treasury.")),Object(o.b)("h4",{id:"strategy-management"},"Strategy management"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Set Strategist address"),", through ",Object(o.b)("inlineCode",{parentName:"li"},"setStrategist()"),", in order for Strategists to receive their rewards and to interact with the system."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Add an approved Strategy"),", through ",Object(o.b)("inlineCode",{parentName:"li"},"approveStrategy()")," on the Controller, in order for Strategists to be able to activate the Strategy in question."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Remove an approved Strategy"),", through ",Object(o.b)("inlineCode",{parentName:"li"},"revokeStrategy()")," on the Controller, in order to prevent Strategists from being able to activate the Strategy in question.")),Object(o.b)("h2",{id:"protocol-actors"},"Protocol Actors"),Object(o.b)("h3",{id:"user"},"User"),Object(o.b)("p",null,"A Yearn end-user."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Deposits funds into vaults, to receive LP tokens, through calling ",Object(o.b)("inlineCode",{parentName:"li"},"deposit()"),";"),Object(o.b)("li",{parentName:"ul"},"Withdraws funds from vaults, by depositing (effectively burning) LP tokens into vaults and receiving the corresponding deposit token amount back in return, through calling ",Object(o.b)("inlineCode",{parentName:"li"},"withdraw()"),". If the vault does not have enough funds to handle the withdrawal, this triggers a cascading ",Object(o.b)("inlineCode",{parentName:"li"},"withdraw()")," call via the ",Object(o.b)("inlineCode",{parentName:"li"},"Controller")," to the Strategy to liquidate enough funds to process the withdrawal.")),Object(o.b)("h3",{id:"keeper"},"Keeper"),Object(o.b)("p",null,"Automated bot that calls contract functions. It queries the Registry to get the appropriate Vault and Strategy addresses and then calls:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"earn()")," on the Vault, which checks for funds available to be deposited into a Strategy and then deposits those."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"harvest()")," on the Strategy, which triggers the Strategy claim any rewards, pay management and Strategist fees, and re-invest the remainder into itself again.")),Object(o.b)("h3",{id:"strategist"},"Strategist"),Object(o.b)("p",null,"Creates and manages Strategies."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Interacts with the Controller to set the active strategy, through ",Object(o.b)("inlineCode",{parentName:"li"},"setStrategy()"),". ",Object(o.b)("strong",{parentName:"li"},"Only Strategies approved by Governance can be set.")),Object(o.b)("li",{parentName:"ul"},"Is paid the Strategist management fee directly from the Strategy.")))}b.isMDXComponent=!0}}]);