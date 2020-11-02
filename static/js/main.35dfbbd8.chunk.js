(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(13),c=a.n(n),s=a(1),i=a.n(s),d=a(3),l=a(15),o=(a(21),i.a.createContext({})),m=function(){var e=Object(s.useContext)(o);function t(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(r.jsx)("tbody",{children:void 0!==e.employeeState.filteredEmps[0]&&void 0!==e.employeeState.filteredEmps[0].name?e.employeeState.filteredEmps.map((function(e){var a=e.id,n=e.name,c=e.picture,s=e.phone,i=e.email,d=e.dob;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(r.jsx)("img",{src:c.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(r.jsxs)("td",{"data-th":"Name",className:"name-field align-middle",children:[n.first," ",n.last]}),Object(r.jsx)("td",{"data-th":"Phone",className:"align-middle",children:s}),Object(r.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(r.jsx)("a",{href:"mailto:"+i,target:"__blank",children:i})}),Object(r.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(d.date)})]},a.uuid)})):Object(r.jsx)(r.Fragment,{})})},j=(a(22),function(){var e=Object(s.useContext)(o);return Object(r.jsx)("div",{className:"datatable mt-5",children:Object(r.jsxs)("table",{id:"table",className:"table table-striped table-hover",children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:e.employeeState.headers.map((function(t){var a=t.name,n=t.width;return Object(r.jsxs)("th",{className:"col",style:{width:n},onClick:function(){e.handleSort(a.toLowerCase())},children:[a,Object(r.jsx)("span",{className:"pointer"})]},a)}))})}),Object(r.jsx)(m,{})]})})}),h=(a(23),function(){var e=Object(s.useContext)(o);return Object(r.jsx)("div",{className:"searchbox",children:Object(r.jsxs)("form",{className:"form-inline",children:[Object(r.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"name",onChange:function(t){return e.handleSearchChange(t)}}),Object(r.jsx)("button",{className:"searchBtn",type:"submit",children:"Search"})]})})}),u=(a(24),function(){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(r.jsx)("div",{className:"search-area col-4",children:Object(r.jsx)(h,{})})})}),b=a(14),f=a.n(b),p=function(){return f.a.get("https://randomuser.me/api/?results=200&nat=us")},O=(a(42),function(){var e=Object(s.useState)({emps:[],order:"descend",filteredEmps:[],headers:[{name:"Image",width:"10%",order:"descend"},{name:"name",width:"10%",order:"descend"},{name:"phone",width:"20%",order:"descend"},{name:"email",width:"20%",order:"descend"},{name:"dob",width:"10%",order:"descend"}]}),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){p().then((function(e){console.log(e.data.results),n(Object(d.a)(Object(d.a)({},a),{},{emps:e.data.results,filteredEmps:e.data.results}))}))}),[]),Object(r.jsxs)(o.Provider,{value:{employeeState:a,handleSearchChange:function(e){var t=e.target.value,r=a.emps.filter((function(e){var a=e.name.first.toLowerCase()+" "+e.name.last.toLowerCase();if(console.log(t,a),-1!==a.indexOf(t.toLowerCase()))return e}));n(Object(d.a)(Object(d.a)({},a),{},{filteredEmps:r}))},handleSort:function(e){var t=a.headers.filter((function(t){return t.name===e})).map((function(e){return e.order})).toString();t="descend"===t?"ascend":"descend";var r=a.filteredEmps.sort((function(a,r){return"ascend"===t?void 0===a[e]?1:void 0===r[e]?-1:"name"===e?a[e].first.localeCompare(r[e].first):"dob"===e?a[e].age-r[e].age:a[e].localeCompare(r[e]):void 0===a[e]?1:void 0===r[e]?-1:"name"===e?r[e].first.localeCompare(a[e].first):"dob"===e?r[e].age-a[e].age:r[e].localeCompare(a[e])})),c=a.headers.map((function(a){return a.order=a.name===e?t:a.order,a}));n(Object(d.a)(Object(d.a)({},a),{},{filteredEmps:r,headers:c}))}},children:[Object(r.jsx)(u,{}),Object(r.jsx)("div",{className:"data-area",children:a.filteredEmps.length>0?Object(r.jsx)(j,{}):Object(r.jsx)("div",{})})]})});var x=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(O,{})})},v=function(e){var t=e.children;return Object(r.jsx)("div",{className:"wrapper",children:t})};a(43);var g=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsx)("p",{children:"Click on each heading to filter or use the search box to narrow the results."})]})};a(44);var N=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(v,{children:[Object(r.jsx)(g,{}),Object(r.jsx)(x,{})]})})};c.a.render(Object(r.jsx)(N,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.35dfbbd8.chunk.js.map