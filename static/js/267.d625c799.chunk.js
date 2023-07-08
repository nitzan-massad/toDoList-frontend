"use strict";(self.webpackChunkto_do_lists=self.webpackChunkto_do_lists||[]).push([[267],{9267:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(4165),i=n(5861),s=n(885),a=n(1413),c=n(2791),o=n(4880),l=n(3400),d=n(7247),u=n(6815),h=n(8306),p=n(9508),v=n(6426),x=n(4496),m=n(9151),f=n(493),Z=n(5021),j=n(6278),C=n(158),k=n(653),w=n(9174),I=n(3044),T=n(4687),y=n(7391),E=n(9877),_=n(2419),b=n(184);function g(e){return(0,b.jsx)("div",{className:"main-div-Add-item-box__div",children:(0,b.jsxs)("form",{children:[(0,b.jsx)(T.Z,{sx:{width:400,maxWidth:"100%"},children:(0,b.jsx)(y.Z,{fullWidth:!0,label:"Insert New Item",id:"insertNewItem",inputRef:e.textRef})}),(0,b.jsx)(T.Z,{sx:{"& > :not(style)":{m:1}},children:(0,b.jsx)(E.Z,{color:"primary","aria-label":"add",children:(0,b.jsx)(_.Z,{onClick:e.HandleAddItem})})})]})})}var D=function(e){var t;return(0,b.jsx)(f.Z,{dense:!0,sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:null===(t=e.itemList)||void 0===t?void 0:t.map((function(t){return(0,b.jsx)(Z.ZP,{secondaryAction:(0,b.jsx)(w.Z,{edge:"end",onChange:function(){e.handleCheckUncheck(t)},checked:t.isDone}),disablePadding:!0,children:(0,b.jsxs)(j.Z,{children:[(0,b.jsx)(k.Z,{children:(0,b.jsx)(I.Z,{alt:"Avatar n\xb0".concat(t+1),src:"/static/images/avatar/".concat(t+1,".jpg")})}),(0,b.jsx)(C.Z,{primary:"".concat(t.itemTitle)})]})},t.id)}))})},A=function(e,t){switch(t.type){case"ADD_ITEM":return console.log("hadas is the queen:"+JSON.stringify(t.newItem)),(0,a.Z)((0,a.Z)({},e),{},{items:[t.newItem].concat(e.items)});case"CHECK-UNCHECK-ITEM":var n=e.items,r=n.findIndex((function(e){return e.id==t.itemId}));return n[r].isDone=t.valueToUpdate,(0,a.Z)((0,a.Z)({},e),{},{items:n});default:throw new Error}},N=function(){var e,t=(0,o.TH)().state.data,n=(0,c.useState)(t.listColor),a=(0,s.Z)(n,2),f=a[0],Z=a[1],j=(0,c.useState)(!1),C=(0,s.Z)(j,2),k=C[0],w=C[1],I=(0,p.o)(),T=I.isLoading,y=I.error,E=I.sendRequest,_=I.clearError,N=(0,o.k6)(),H=(0,c.useRef)(""),R=(0,c.useReducer)(A,{items:null===(e=t.items)||void 0===e?void 0:e.sort((function(e,t){return new Date(t.creationDate)-new Date(e.creationDate)}))}),U=(0,s.Z)(R,2),L=U[0],P=U[1];f!==t.listColor&&Z(t.listColor);var K=function(){w(!1)},M=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(n),e.prev=1,e.next=4,E("/update-list-color/".concat(null===t||void 0===t?void 0:t.listId),"PATCH",{color:n},{"Content-Type":"application/json"});case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!1),e.prev=1,e.next=4,E("/delete-list/".concat(null===t||void 0===t?void 0:t.listId),"DELETE");case 4:N.push("/"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E("/add-item-to-list","POST",{itemTitle:H.current.value,listId:t.listId},{"Content-Type":"application/json"});case 3:n=e.sent,P({type:"ADD_ITEM",newItem:n.newItemResponse}),H.current.value="",e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=!t.isDone,P({type:"CHECK-UNCHECK-ITEM",itemId:t.id,valueToUpdate:n}),e.next=5,E("/item-check-uncheck","PATCH",{itemId:t.id,checkUncheckBool:n},{"Content-Type":"application/json"},!1);case 5:e.sent,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,b.jsxs)(c.Fragment,{children:[(0,b.jsx)(m.Z,{show:k,onCancel:K,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:(0,b.jsxs)(c.Fragment,{children:[(0,b.jsx)(h.Z,{inverse:!0,onClick:K,children:"CANCEL"}),(0,b.jsx)(h.Z,{danger:!0,onClick:S,children:"DELETE"})]})}),(0,b.jsx)(x.Z,{error:y,onClear:_}),(0,b.jsxs)("div",{children:[T&&(0,b.jsx)(v.Z,{asOverlay:!0}),(0,b.jsx)("h1",{className:"list-view-list-name__h1",children:null===t||void 0===t?void 0:t.listTitle}),(0,b.jsxs)("div",{className:"list-view-top-bar__div",children:[(0,b.jsxs)("div",{className:"delete-btn__list-view",children:[(0,b.jsx)(u.Z,{pickedAction:M,initialColorChoice:f}),(0,b.jsx)(l.Z,{"aria-label":"delete",onClick:function(){w(!0)},children:(0,b.jsx)(d.Z,{})})]}),(0,b.jsx)("div",{children:(0,b.jsx)(g,{HandleAddItem:O,textRef:H})})]}),(0,b.jsx)(D,{itemList:L.items,handleCheckUncheck:W})]})]})}}}]);
//# sourceMappingURL=267.d625c799.chunk.js.map