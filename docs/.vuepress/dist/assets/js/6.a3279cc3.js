(window.webpackJsonp=window.webpackJsonp||[]).push([[6,10],{313:function(t,e,a){},314:function(t,e,a){"use strict";a(313)},316:function(t,e,a){"use strict";a.r(e);var i={name:"loading",props:{color:{type:String,default:"#333"},text:{type:String,default:""}},data:function(){return{}}},n=(a(314),a(27)),r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loading"},[t.text?a("span",{staticClass:"text"},[t._v(t._s(t.text))]):t._e(),t._v(" "),a("span",[a("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"24px",height:"30px",viewBox:"0 0 24 30","xml:space":"preserve"}},[a("rect",{attrs:{x:"0",y:"10",width:"4",height:"10",fill:t.color,opacity:"0.2"}},[a("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),t._v(" "),a("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),t._v(" "),a("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),t._v(" "),a("rect",{attrs:{x:"8",y:"10",width:"4",height:"10",fill:t.color,opacity:"0.2"}},[a("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),t._v(" "),a("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),t._v(" "),a("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),t._v(" "),a("rect",{attrs:{x:"16",y:"10",width:"4",height:"10",fill:t.color,opacity:"0.2"}},[a("animate",{attrs:{attributeName:"opacity",attributeType:"XML",values:"0.2; 1; .2",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),t._v(" "),a("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"10; 20; 10",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),t._v(" "),a("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"10; 5; 10",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])])])}),[],!1,null,"2700754c",null);e.default=r.exports},341:function(t,e,a){},379:function(t,e,a){"use strict";a(341)},394:function(t,e,a){"use strict";a.r(e);a(97);for(var i=a(7),n=a(316),r=a(317),s=a.n(r),o=[],u=0;u<50;u++)o.push({id:u,value:s.a.Random.cparagraph(1,5)});var l={name:"variable-loadmore",data:function(){return{items:o,isLoad:!1,loadindex:0}},components:{loading:n.default},methods:{loadMore:function(){var t=this;this.isLoad||(this.isLoad=!0,setTimeout((function(){var e=[];t.loadindex++;for(var a=50*t.loadindex;a<50*t.loadindex+50;a++)e.push({id:a,value:s.a.Random.cparagraph(1,5)});t.items=[].concat(Object(i.a)(t.items),e),t.isLoad=!1}),400))}}},d=(a(379),a(27)),c=Object(d.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"variable-loadmore"},[a("lite-virtual-list",{attrs:{type:"variable",screen:[3,3],data:t.items,virtualHieght:"500px",size:100,remain:8,distance:100},on:{loadMore:t.loadMore},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item;return a("div",{staticClass:"item"},[a("span",{staticClass:"index"},[t._v(" #"+t._s(i.index+1)+" ")]),t._v(" "),a("span",[t._v(" "+t._s(i.value))])])}}])},[t._v(" "),t.isLoad?a("loading",{staticStyle:{height:"70px"},attrs:{slot:"bottom",color:"red"},slot:"bottom"}):t._e()],1)],1)}),[],!1,null,"78d44038",null);e.default=c.exports}}]);