(this["webpackJsonpcalendar-reminders"]=this["webpackJsonpcalendar-reminders"]||[]).push([[0],{29:function(e,t,n){e.exports={"button-date_num":"Calendar_button-date_num__2eGeM"}},39:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(2),c=n.n(r),i=n(10),o=n.n(i),d=(n(38),n(39),n(30)),l=n(14),s=n(16),u=n(32),j=n(27),b=n(28),O=n(15),h=n(19),v=n(47)().format("YYYY-MM-DDTHH:MM"),m=Object(h.b)({name:"calendar",initialState:{eventsById:{1:{id:"1",title:"reminder 1",start:v,display:"block",backgroundColor:"#d9534f"},2:{id:"2",title:"reminder 2",start:v,display:"block",backgroundColor:"#d9534f"},3:{id:"3",title:"reminder 3",start:v,display:"block",backgroundColor:"#0275d8"},4:{id:"4",title:"reminder 4",start:v,display:"block",backgroundColor:"#0275d8"}},guid:4},reducers:{createEvent:function(e,t){e.guid++,t.payload.id=String(e.guid),e.eventsById[e.guid]=t.payload},updateEvent:function(e,t){e.eventsById[t.payload.id]=t.payload},deleteEvent:function(e,t){delete e.eventsById[t.payload]}}}),g=m.actions,p=g.createEvent,x=g.updateEvent,C=g.deleteEvent,f=function(e){return e.calendar.eventsById},y=m.reducer,k=n(29),E=n.n(k);function T(e){var t=e.setCurrEvent,n=Object(l.c)(f),r=Object(O.a)((function(e){return e}),(function(e){return Object.values(e)}))(n),c=Object(l.b)();return Object(a.jsx)(u.a,{plugins:[j.a,b.a],editable:"true",initialView:"dayGridMonth",events:r,dateClick:function(e){t({title:"",start:"".concat(e.dateStr,"T12:00"),display:"block",backgroundColor:"#0275d8"})},eventClick:function(e){t(n[e.event.id])},eventChange:function(e){return c(x(e.event.toPlainObject()))},dayCellContent:function(e){return Object(a.jsx)(s.a,{className:E.a["button-date_num"],children:e.dayNumberText})}})}var w=n(17),B=n(12),I=n(31),G=n(18),M=n(9),S={Red:"#d9534f",Orange:"#f0ad4e",Green:"#5cb85c",Teal:"#5bc0de",Blue:"#0275d8"},L={};for(var _ in S)L[S[_]]=_;function D(e){var t=e.currEvent,n=e.setCurrEvent,r=Object(l.b)(),c=function(e){switch(e.target.name){case"start-date":return n(Object(B.a)(Object(B.a)({},t),{},{start:"".concat(e.target.value,"T").concat(t.start.split("T")[1])}));case"start-time":return n(Object(B.a)(Object(B.a)({},t),{},{start:"".concat(t.start.split("T")[0],"T").concat(e.target.value)}));case"backgroundColor":return n(Object(B.a)(Object(B.a)({},t),{},Object(w.a)({},e.target.name,S[e.target.value])));default:return n(Object(B.a)(Object(B.a)({},t),{},Object(w.a)({},e.target.name,e.target.value)))}},i=function(){return n(null)};return Object(a.jsxs)(G.a,{show:!0,onHide:i,children:[Object(a.jsx)(G.a.Header,{closeButton:!0,children:Object(a.jsx)(G.a.Title,{children:t.id?"Edit Reminder":"Create Reminder"})}),Object(a.jsx)(G.a.Body,{children:Object(a.jsxs)(M.a,{className:"reminder-form",onSubmit:function(e){e.preventDefault(),t.id?r(x(t)):r(p(t)),i()},children:[Object(a.jsxs)(M.a.Group,{controlId:"title",children:[Object(a.jsx)(M.a.Label,{children:"Title (max 30 characters)"}),Object(a.jsx)(M.a.Control,{required:!0,type:"text",name:"title",value:t.title,placeholder:"Enter title",onChange:c,maxLength:"30"})]}),Object(a.jsxs)(M.a.Group,{controlId:"start-date",children:[Object(a.jsx)(M.a.Label,{children:"Date"}),Object(a.jsx)(M.a.Control,{required:!0,type:"date",name:"start-date",value:t.start.split("T")[0],onChange:c})]}),Object(a.jsxs)(M.a.Group,{controlId:"start-time",children:[Object(a.jsx)(M.a.Label,{children:"Time"}),Object(a.jsx)(M.a.Control,{required:!0,type:"time",name:"start-time",value:Object(I.a)(t.start,{hour:"2-digit",minute:"2-digit",hour12:!1}),onChange:c})]}),Object(a.jsxs)(M.a.Group,{controlId:"backgroundColor",children:[Object(a.jsx)(M.a.Label,{children:"Color"}),Object(a.jsxs)(M.a.Control,{as:"select",name:"backgroundColor",value:L[t.backgroundColor],placeholder:"Enter title",onChange:c,maxLength:"30",children:[Object(a.jsx)("option",{children:"Red"}),Object(a.jsx)("option",{children:"Orange"}),Object(a.jsx)("option",{children:"Green"}),Object(a.jsx)("option",{children:"Teal"}),Object(a.jsx)("option",{children:"Blue"})]})]}),Object(a.jsx)(s.a,{variant:"primary",type:"submit",children:"Save"}),t.id?Object(a.jsx)(s.a,{variant:"danger",onClick:function(){r(C(t.id)),i()},children:"Delete"}):null,Object(a.jsx)(s.a,{variant:"secondary",onClick:i,children:"Close"})]})})]})}n(50);function H(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(T,{setCurrEvent:c}),n?Object(a.jsx)(D,{currEvent:n,setCurrEvent:c}):null]})}var R=Object(h.a)({reducer:{calendar:y}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(l.a,{store:R,children:Object(a.jsx)(H,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.f354f51b.chunk.js.map