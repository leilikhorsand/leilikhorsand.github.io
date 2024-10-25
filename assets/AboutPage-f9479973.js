import{g as n,h as r,i as s,r as u,j as i,C as c}from"./index-76318ce6.js";import{P as l}from"./Page-3731e598.js";function d(){const t=new Date(n),e=new Date;let o=e.getFullYear()-t.getFullYear();const a=e.getMonth()-t.getMonth();return(a<0||a===0&&e.getDate()<t.getDate())&&o--,o}const g={title:"hi hi hiiii",details:[{id:1,text:` i am , ${d()} years old. `,icon:"🧔🏻"},{id:2,text:" and this is this. ",icon:"🧑🏼‍🎓"},{id:3,text:`
              good good.
           `,icon:"🎯"},{id:4,text:" hi ",icon:"💻"},{id:5,text:`
              yes
           `,icon:"🔎"},{id:6,text:`
              yoo
           `,icon:"💭"}]};`${g.details.map(t=>`
      ${t.icon} = {${t.text}}`)}`;function m(){return r(),s("(max-width: 1000px)"),u.useState(!0),i.jsx(c,{px:"xl",size:"lg",children:"در حال به روز رسانی"})}function h(){return i.jsx(l,{title:"About me",isFirst:!0,withBackground:!1,children:i.jsx(m,{})})}export{h as default};
