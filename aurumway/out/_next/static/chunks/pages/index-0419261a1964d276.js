(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(3519)}])},3519:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return F}});var r=o(5893),i=o(990),n=o(7294),a=o(9521),s=o(8495),l=o.n(s),c={colorPrimary:"#000814",colorSecondary:"#001D3D",colorTertiary:"#003566",colorQuarternary:"#FFC300",colorPentiary:"#FFFFFF"},d=function(e){e.width,e.height;var t=l().INFO,o=function(t){var o=t.currentTarget;if("INFO"==e.type){var r=a.gsap.timeline({});r.fromTo(o,{color:c.colorPentiary,backgroundColor:c.colorPrimary,scaleX:1,scaleY:1,duration:.15,ease:"power2.in"},{backgroundColor:c.colorQuarternary,color:c.colorPrimary,scaleX:.8,scaleY:.8,duration:.15,borderColor:c.colorPrimary,ease:"power2.out"},">"),r.fromTo(o,{backgroundColor:c.colorQuarternary,color:c.colorPrimary,duration:.15,scaleX:.8,scaleY:.8,ease:"powe2.in"},{backgroundColor:c.colorPrimary,color:"#FFFFFF",duration:.15,scaleX:1,scaleY:1,borderColor:c.colorQuarternary,ease:"power2.out"},">"),r.play()}};switch(e.type){case"SUCCESS":t="btn btn-success";break;case"FAILURE":t="btn btn-danger";break;case"INFO":t=l().INFO}return void 0==e.width||e.width,void 0==e.height||e.height,(0,r.jsx)("button",{type:"button",id:e.id,className:t+" "+e.className,onClick:function(t){o(t),e.onClick(t)},children:e.text})},u=o(9984),m=o.n(u);function h(e){var t=function(){var t=i.p8.timeline();!0==a?(s(!1),h.current.src="/cog_golden.png",t.fromTo(l.current,{width:e.width,height:e.height,duration:g,ease:"power2.in"},{width:e.hiddenWidth,height:e.hiddenHeight,duration:g,ease:"power2.in"},0),t.fromTo(v.current,{width:"100%",ease:"power2.in",duration:g},{width:e.hiddenWidth,ease:"power2.in",duration:g},0),t.fromTo(d.current,{width:"100%",duration:g,backgroundColor:c.colorQuarternary,ease:"power2.in"},{width:e.hiddenWidth,duration:g,backgroundColor:c.colorPrimary,ease:"power2.in"},0),e.hasFooter&&null!=u&&t.fromTo(u.current,{width:"100%",duration:g,ease:"power2.in"},{width:e.hiddenWidth,duration:g,ease:"power2.in"},0),t.fromTo(h.current,{rotate:0,duration:N,ease:"linear"},{rotate:C,duration:N,ease:"linear"},0),t.fromTo(p.current,{color:c.colorPrimary,ease:"power2.out"},{color:c.colorPentiary,ease:"power2.out"},0),t.fromTo(x.current,{opacity:0,zIndex:-1,ease:"power2.in"},{opacity:1,zIndex:3,ease:"power2.in"},0),t.fromTo(f.current,{opacity:1,duration:.1,ease:"power2.in"},{opacity:0,duration:.1,ease:"power2.in"},0)):(s(!0),h.current.src="/cog.png",t.fromTo(l.current,{width:e.hiddenWidth,height:e.hiddenHeight,duration:g,ease:"power2.out"},{width:e.width,height:e.height,duration:g,ease:"power2.out"},0),t.fromTo(v.current,{width:e.hiddenWidth,duration:g,ease:"power2.out"},{width:"100%",duration:g,ease:"power2.out"},0),t.fromTo(d.current,{width:e.hiddenWidth,duration:g,backgroundColor:c.colorPrimary,ease:"power2.out"},{width:"100%",duration:g,backgroundColor:c.colorQuarternary,ease:"power2.out"},0),e.hasFooter&&null!=u&&t.fromTo(u.current,{width:e.hiddenWidth,duration:g,ease:"power2.out"},{width:"100%",duration:g,ease:"power2.out"},0),t.fromTo(h.current,{rotate:0,duration:N,ease:"linear"},{rotate:-C,duration:N,ease:"linear"},0),t.fromTo(p.current,{color:c.colorPentiary,ease:"power2.in"},{color:c.colorPrimary,ease:"power2.in"},0),t.fromTo(x.current,{opacity:1,zIndex:3,ease:"power2.in"},{opacity:0,zIndex:-1,ease:"power2.in"},0),t.fromTo(f.current,{opacity:0,ease:"power2.in"},{opacity:1,ease:"power2.in"},y))},o=(0,n.useState)(!1),a=o[0],s=o[1],l=(0,n.useRef)(null),d=(0,n.useRef)(null),u=(0,n.useRef)(null),h=(0,n.useRef)(null),p=(0,n.useRef)(null),x=(0,n.useRef)(null),f=(0,n.useRef)(null),v=(0,n.useRef)(null),_="/cog_golden.png",g=.7,N=.7,y=.4,C="LEFT"==e.direction?-360:360,b="LEFT"==e.direction?m().titleLeft:m().titleRight,w={width:e.hiddenWidth,height:e.hiddenHeight,direction:"LEFT"==e.direction?"ltr":"rtl",float:"LEFT"==e.direction?"left":"right"},j={float:"LEFT"==e.direction?"right":"left"},F={height:(e.hasFooter,"25%"),maxHeight:"3rem",backgroundColor:c.colorPrimary,cursor:"pointer"},T={height:e.hasFooter?"70%":"75%",backgroundColor:c.colorTertiary,overflow:"hidden"};return((0,n.useLayoutEffect)(function(){e.initialOpen&&t()},[]),e.hasFooter)?(0,r.jsxs)("div",{ref:l,className:e.Class+" "+m().container,style:w,children:[(0,r.jsxs)("div",{ref:d,className:m().header,style:F,onClick:t,children:[(0,r.jsx)("img",{className:m().headerIcon,style:j,ref:h,src:_}),(0,r.jsx)("div",{className:m().titleContainer,children:(0,r.jsx)("span",{ref:p,className:b,children:"This is the title"})})]}),(0,r.jsxs)("div",{ref:v,className:m().body,style:T,children:[(0,r.jsx)("div",{ref:x,className:m().overlay,children:(0,r.jsx)("span",{className:m().title,children:" Click to Expand "})}),(0,r.jsx)("div",{className:m().textContainer,children:(0,r.jsx)("p",{className:m().text,ref:f,children:e.bodytext})})]}),(0,r.jsx)("div",{ref:u,className:m().footer,style:{height:"15%",maxHeight:"2rem",backgroundColor:c.colorQuarternary}})]}):(0,r.jsxs)("div",{className:m().container,style:w,children:[(0,r.jsxs)("div",{ref:d,className:m().header,style:F,onClick:t,children:[(0,r.jsx)("img",{className:m().headerIcon,style:j,ref:h,src:_}),(0,r.jsx)("div",{className:m().titleContainer,children:(0,r.jsx)("span",{ref:p,className:b,children:"This is the title"})})]}),(0,r.jsxs)("div",{ref:l,className:m().body,style:T,children:[(0,r.jsx)("div",{ref:x,className:m().overlay,children:(0,r.jsx)("span",{className:m().title,children:" Click to Expand "})}),(0,r.jsx)("div",{className:m().textContainer,children:(0,r.jsx)("p",{className:m().text,ref:f,children:e.bodytext})})]})]})}var p=o(1346),x=o.n(p),f=o(5247),v=o(2920);o(993);var _=function(e){var t=function(){var e,t,r,n;l.current.style.display="flex",(e=i.current.value,t=a.current.value,r=o.current.value,n=s.current.value,new Promise(function(o,i){fetch("https://us-central1-aurumway-c85f5.cloudfunctions.net/AurumwayAPI/getAPIKey").then(function(a){a.text().then(function(a){(0,f.lW)("contact_service","contact_form",{from_name:e+" "+t,from_email:r,message:n},a).then(function(e){o(e)}).catch(function(e){i(e)})}).catch(function(e){i(e)})}).catch(function(e){i(e)})})).then(function(e){l.current.style.display="none",v.Am.success("Email Sent! Thank you for your business!",{autoClose:2e3,position:v.Am.POSITION.TOP_CENTER,theme:"colored"})}).catch(function(e){l.current.style.display="none",v.Am.error("Unable to Send Email. Try again in a little bit.",{autoClose:2e3,position:v.Am.POSITION.TOP_CENTER,theme:"colored"})})},o=(0,n.useRef)(null),i=(0,n.useRef)(null),a=(0,n.useRef)(null),s=(0,n.useRef)(null),l=(0,n.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v.Ix,{}),(0,r.jsx)("div",{ref:l,className:x().overlay,children:(0,r.jsx)("div",{className:x().symbolContainer,children:(0,r.jsx)("img",{src:"loading-76.webp",alt:"loading.gif...",className:x().spinner})})}),(0,r.jsxs)("div",{className:e.Class+" container "+x().formaContainer,children:[(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:x().titleContainer,children:(0,r.jsx)("h1",{className:x().header,children:"Let's Stay in Touch!"})})}),(0,r.jsx)("div",{className:"row "+x().rowCont,children:(0,r.jsxs)("div",{className:x().rowContent,children:[(0,r.jsxs)("div",{className:x().inputGroup+" "+x().divider,children:[(0,r.jsx)("label",{className:x().descriptor,children:"First Name: "}),(0,r.jsx)("input",{type:"text",ref:i,placeholder:"First Name...",className:"form-text text-muted "+x().inputField})]}),(0,r.jsxs)("div",{className:x().inputGroup,children:[(0,r.jsx)("label",{className:x().descriptor,children:"Last Name: "}),(0,r.jsx)("input",{type:"text",ref:a,placeholder:"Last Name...",className:"form-text text-muted "+x().inputField})]})]})}),(0,r.jsx)("div",{className:"row "+x().rowCont,children:(0,r.jsx)("div",{className:x().rowContent,children:(0,r.jsxs)("div",{className:x().inputGroup,children:[(0,r.jsx)("label",{className:x().descriptor,children:"Email: "}),(0,r.jsx)("input",{type:"text",ref:o,placeholder:"Your Email...",className:"form-text text-muted "+x().inputField})]})})}),(0,r.jsx)("div",{className:"row "+x().rowCont,children:(0,r.jsx)("div",{className:x().rowContent,children:(0,r.jsxs)("div",{className:x().inputGroup,children:[(0,r.jsx)("label",{className:x().descriptor,children:"Message: "}),(0,r.jsx)("textarea",{ref:s,placeholder:"Your Message...",className:"form-text text-muted "+x().messageBox})]})})}),(0,r.jsx)("div",{className:"row "+x().rowCont+"  flex-grow-1 "+x().buttonRow,children:(0,r.jsxs)("div",{className:"d-flex align-items-center "+x().submitContainer,children:[(0,r.jsx)(d,{type:"INFO",text:"Submit",className:x().submitButton,id:"submitButton",onClick:t}),(0,r.jsx)(d,{type:"INFO",text:"Cancel",className:x().submitButton,id:"submitButton",onClick:function(t){e.onCancel(t)}})]})})]})]})},g=o(9754),N=o.n(g),y=function(e){var t={backgroundColor:c.colorTertiary,overflow:"hidden"};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:e.className+" "+N().body,style:t,children:(0,r.jsx)("div",{className:N().textContainer,children:(0,r.jsx)("p",{className:N().text,children:e.bodytext})})})})},C={width:"100%",height:"100%",background:"linear-gradient(to top, var(--primary-color ) 70%, grey 140%)",scrollSnapAlign:"start"},b={width:"100%",height:"100%",background:"linear-gradient(to top, var(--primary-color ) 70%, grey 140%)",scrollSnapAlign:"center",display:"flex"},w={width:"100%",height:"100%",background:"linear-gradient(to top, var(--primary-color ) 70%, grey 140%)",scrollSnapAlign:"start"},j={width:"100vw",height:"100vh",backgroundColor:c.colorPrimary,position:"relative"},F=function(){var e=function(e){var t,r,i,n,s;switch(e){case 0:null===(t=o.current)||void 0===t||t.scrollTo({behavior:"smooth",top:0});break;case 1:null===(r=o.current)||void 0===r||r.scrollTo({behavior:"smooth",top:null===(i=a.current)||void 0===i?void 0:i.clientHeight});break;case 2:null===(n=o.current)||void 0===n||n.scroll({behavior:"smooth",top:(null===(s=a.current)||void 0===s?void 0:s.clientHeight)*2})}},t=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",o=(0,n.useRef)(null),a=(0,n.useRef)(null),s=(0,n.useRef)(null),l=(0,n.useRef)(null);return(0,n.useLayoutEffect)(function(){i.p8.timeline({delay:.5,repeat:0}).play()},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h1",{className:"phoneMessage",children:["Please Open the Website on a Desktop, Laptop, or Tablet"," "]}),(0,r.jsxs)("div",{className:"phoneHider",children:[(0,r.jsxs)("div",{className:"navMain",children:[(0,r.jsx)("img",{src:"potential_map_gold_logo.jpg",alt:"",className:"companyLogo"}),(0,r.jsx)(d,{type:"INFO",id:"",className:"navButton",text:"Home",onClick:function(){e(0)}}),(0,r.jsx)(d,{type:"INFO",id:"",className:"navButton",text:"About",onClick:function(){e(1)}}),(0,r.jsx)(d,{type:"INFO",id:"",className:"navButton",text:"Contact",onClick:function(){e(2)}})]}),(0,r.jsxs)("div",{ref:o,style:j,className:"cont",children:[(0,r.jsxs)("div",{ref:a,style:C,className:"scroll-area",children:[(0,r.jsx)("img",{src:"balldrop.png",alt:"",className:"balldrop"}),(0,r.jsx)("div",{className:"imgContainer",children:(0,r.jsx)("div",{className:"pittsburghimg"})}),(0,r.jsx)("div",{className:"headerContainer",children:(0,r.jsx)("h1",{className:"indexHeader",children:"Welcome to Aurumway"})}),(0,r.jsx)("div",{className:"infoTextContainer",children:(0,r.jsx)("h2",{className:"infoText",children:"Urna porttitor rhoncus dolor purus. In massa tempor nec feugiat nisl pretium fusce id velit. Vitae nunc sed velit dignissim sodales ut eu sem. Platea dictumst vestibulum rhoncus est. Curabitur vitae nunc sed velit dignissim. Etiam sit amet nisl purus in. Scelerisque purus semper eget duis at."})}),(0,r.jsxs)("div",{className:"detailsContainer",children:[(0,r.jsx)("div",{className:"dbcont",children:(0,r.jsx)(y,{className:"detailsBox",bodytext:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})}),(0,r.jsx)("div",{className:"dbcont",children:(0,r.jsx)(y,{className:"detailsBox",bodytext:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu dui vivamus arcu. In hac habitasse platea dictumst vestibulum rhoncus. Scelerisque eu ultrices vitae auctor eu augue. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Sapien eget mi proin sed libero. "})}),(0,r.jsx)("div",{className:"dbcont",children:(0,r.jsx)(y,{className:"detailsBox",bodytext:"Varius morbi enim nunc faucibus. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Enim lobortis scelerisque fermentum dui faucibus in ornare."})})]}),(0,r.jsx)("div",{className:"scrollBelowContainer"})]}),(0,r.jsxs)("div",{ref:s,style:b,className:"scroll-area",children:[(0,r.jsxs)("div",{className:"profileDiv",children:[(0,r.jsx)("div",{className:"profile"}),(0,r.jsx)("p",{className:"ceoDescription",children:(0,r.jsx)("i",{children:"Urna porttitor rhoncus dolor purus. In massa tempor nec feugiat nisl pretium fusce id velit. Vitae nunc sed velit dignissim sodales ut eu sem. Platea dictumst vestibulum rhoncus est."})})]}),(0,r.jsxs)("div",{className:"middleDiv",children:[(0,r.jsx)("div",{className:"infoContainer",children:(0,r.jsx)(h,{Class:"infoBox",width:"90%",height:"70%",hiddenHeight:"150px",hiddenWidth:"300px",hasFooter:!0,direction:"RIGHT",bodytext:t,initialOpen:!1})}),(0,r.jsx)("div",{className:"infoContainer",children:(0,r.jsx)(h,{Class:"infoBox",width:"90%",height:"70%",hiddenHeight:"150px",hiddenWidth:"300px",hasFooter:!0,direction:"RIGHT",bodytext:t,initialOpen:!1})})]})]}),(0,r.jsx)("div",{ref:l,style:w,className:"scroll-area d-flex",children:(0,r.jsx)("div",{className:"formContainer",children:(0,r.jsx)(_,{onCancel:function(){return e(0)},Class:"contactForm"})})})]})]})]})}},8495:function(e){e.exports={INFO:"Button_INFO__gTTZO"}},1346:function(e){e.exports={rowContent:"ContactForm_rowContent__2clOf",formaContainer:"ContactForm_formaContainer__9OA_W",rowCont:"ContactForm_rowCont__5BoYX",header:"ContactForm_header__CJEWx",buttonRow:"ContactForm_buttonRow__Z2UZG",titleContainer:"ContactForm_titleContainer__Tqpe5",inputGroup:"ContactForm_inputGroup__pO4uz",divider:"ContactForm_divider__nxnQ3",messageBox:"ContactForm_messageBox___xxlj",descriptor:"ContactForm_descriptor__XEueE",inputField:"ContactForm_inputField__6MPxF",submitContainer:"ContactForm_submitContainer__b2kBJ",submitButton:"ContactForm_submitButton__Wz5r_",overlay:"ContactForm_overlay__Bh2ct",symbolContainer:"ContactForm_symbolContainer__4za3G",spinner:"ContactForm_spinner__y_Cfs"}},9754:function(e){e.exports={textContainer:"DetailsBox_textContainer__IpWcW",text:"DetailsBox_text__A4phw",body:"DetailsBox_body__nA8kf"}},9984:function(e){e.exports={container:"InfoBox_container__IxGzq",body:"InfoBox_body__Fu4nr",footer:"InfoBox_footer__mprmr",headerIcon:"InfoBox_headerIcon__7umhl",title:"InfoBox_title__ONQpX",titleContainer:"InfoBox_titleContainer__DXaar",titleLeft:"InfoBox_titleLeft__cIrA_",titleRight:"InfoBox_titleRight__Or6GB",overlay:"InfoBox_overlay__BJoVm",textContainer:"InfoBox_textContainer__jL7hZ",text:"InfoBox_text__KwvFA"}}},function(e){e.O(0,[802,433,962,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);