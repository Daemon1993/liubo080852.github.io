(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[14],{531:function(t,e,n){t.exports={main:"src-features-task_manage-push_article-PushArticle__main--2vKVi",top_main:"src-features-task_manage-push_article-PushArticle__top_main--1nJoW",input_title:"src-features-task_manage-push_article-PushArticle__input_title--3SJco",content:"src-features-task_manage-push_article-PushArticle__content--375SI",left_input:"src-features-task_manage-push_article-PushArticle__left_input--2fT4-",right_show:"src-features-task_manage-push_article-PushArticle__right_show--2HKGP"}},532:function(t,e,n){},640:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return z}));var a=n(530),i=n(10),s=n(11),r=(n(58),n(20)),l=n(19),u=n(0),c=n.n(u),o=n(531),h=n.n(o),p=(n(532),n(46)),d=n.n(p),f=n(225),g=n.n(f),m=(n(226),n(533)),b=n.n(m),v=n(620),_=n(213),j=(n(76),n(621)),I=n(32),x=n(637),O=n(230),C=n.n(O),S=n(622),k=n(634),y=n(642),V=n(643),T=n(644),w=n(1),A=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={tags:["React","\u524d\u7aef"],inputVisible:!1,inputValue:"",editInputIndex:-1,editInputValue:""},t.getResultTag=function(){return t.state.tags},t.handleClose=function(e){var n=t.state.tags.filter((function(t){return t!==e}));t.setState({tags:n})},t.showInput=function(){t.setState({inputVisible:!0},(function(){return t.input.focus()}))},t.handleInputChange=function(e){t.setState({inputValue:e.target.value})},t.handleInputConfirm=function(){var e=t.state.inputValue,n=t.state.tags;e&&-1===n.indexOf(e)&&(n=[].concat(Object(S.a)(n),[e])),t.setState({tags:n,inputVisible:!1,inputValue:""})},t.handleEditInputChange=function(e){t.setState({editInputValue:e.target.value})},t.handleEditInputConfirm=function(){t.setState((function(t){var e=t.tags,n=t.editInputIndex,a=t.editInputValue,i=Object(S.a)(e);return i[n]=a,{tags:i,editInputIndex:-1,editInputValue:""}}))},t.saveInputRef=function(e){t.input=e},t.saveEditInputRef=function(e){t.editInput=e},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.tags,a=e.inputVisible,i=e.inputValue,s=e.editInputIndex,r=e.editInputValue;return Object(w.jsxs)(w.Fragment,{children:[n.map((function(e,n){if(s===n)return Object(w.jsx)(k.a,{ref:t.saveEditInputRef,size:"small",className:"tag-input",value:r,onChange:t.handleEditInputChange,onBlur:t.handleEditInputConfirm,onPressEnter:t.handleEditInputConfirm},e);var a=e.length>20,i=Object(w.jsx)(y.a,{className:"edit-tag",closable:!0,onClose:function(){return t.handleClose(e)},children:Object(w.jsx)("span",{onDoubleClick:function(a){0!==n&&(t.setState({editInputIndex:n,editInputValue:e},(function(){t.editInput.focus()})),a.preventDefault())},children:a?"".concat(e.slice(0,20),"..."):e})},e);return a?Object(w.jsx)(V.a,{title:e,children:i},e):i})),a&&Object(w.jsx)(k.a,{ref:this.saveInputRef,type:"text",size:"small",className:"tag-input",value:i,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!a&&Object(w.jsxs)(y.a,{className:"site-tag-plus",onClick:this.showInput,children:[Object(w.jsx)(T.a,{})," New Tag"]})]})}}]),n}(c.a.Component),D=I.a.getState().login_reducer.dir_types;function E(t){var e,n=c.a.useState(D[0].objectId),a=Object(j.a)(n,2),i=a[0],s=a[1];return Object(w.jsxs)(C.a,{title:"\u8bf7\u786e\u8ba4\u76f8\u5173\u4fe1\u606f",visible:t.visible,onOk:function(){var n={type_id:i,tags:e.getResultTag()};t.onOk(n)},onCancel:t.onCancel,children:[Object(w.jsx)(x.a.Group,{onChange:function(t){s(t.target.value)},value:i,children:D.map((function(t){return Object(w.jsx)(x.a,{value:t.objectId,children:t.name},t.objectId)}))}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)(A,{ref:function(t){e=t},callback_results:function(t){}})]})}var N,R=n(53),P={"Content-Type":"multipart/form-data;charset=UTF-8"},H=I.a.getState().login_reducer.login_user.ttt,F=n(228);F.setOptions({renderer:new F.Renderer,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,highlight:function(t,e){if(e&&g.a.getLanguage(e))try{return g.a.highlight(e,t).value}catch(n){}try{return g.a.highlightAuto(t).value}catch(n){}return""}});var z=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).updateInputValue=function(t){s.setState({textareaValue:t}),N&&clearTimeout(N),N=setTimeout((function(){s.setState({_html_str:F(s.state.textareaValue)}),clearTimeout(N)}),500)},s.handleTextareaChange=function(t){s.updateInputValue(t.target.value)},s.handleOk=function(t){s.setState({push_dialog_visible:!1});var e={title:s.state.title,tags:t.tags.join(","),type_id:t.type_id,content:s.state.textareaValue};R.a.pushArticle(e).then((function(t){t.objectId&&v.b.success("\u53d1\u5e03\u6210\u529f...",1).then((function(){s.props.callback_tab_select(1)}))})).catch((function(t){v.b.error("\u4e0a\u4f20\u5931\u8d25 \u7a0d\u540e\u518d\u8bd5")}))},s.handleCancel=function(){s.setState({push_dialog_visible:!1})},s.pushArticle=function(){s.setState({push_dialog_visible:!0})},s.onChangeTitle=function(t){s.setState({title:t.target.value})},s.drop=function(t){t.preventDefault();var e,n=Object(a.a)(t.dataTransfer.files);try{for(n.s();!(e=n.n()).done;){var i=e.value;if(i&&i.type.match("image.*")){s.postImage2Server(i);break}}}catch(r){n.e(r)}finally{n.f()}},s.pasteFileAction=function(t){var e=t.clipboardData,n=window.navigator.userAgent;if(t.clipboardData&&t.clipboardData.items&&!(e.items&&2===e.items.length&&"string"===e.items[0].kind&&"file"===e.items[1].kind&&e.types&&2===e.types.length&&"text/plain"===e.types[0]&&"Files"===e.types[1]&&n.match(/Macintosh/i)&&Number(n.match(/Chrome\/(\d{2})/i)[1])<49))for(var a=0;a<e.items.length;a++){var i=e.items[a];if("file"===i.kind){var r=i.getAsFile();if(0===r.size)return;-1!==r.name.indexOf("image")&&s.postImage2Server(r);break}}},s.postImage2Server=function(t){var e=Date.parse(new Date)/1e3,n="8192-"+H+"-"+e;n=d.a.MD5(n).toString();var a=new FormData;a.append("file",t),a.append("id",8192),a.append("ts",e),a.append("categories","jump-react"),a.append("sign",n),b()({method:"post",url:"https://api.superbed.cn/upload",headers:P,data:a}).then((function(t){var e="![image]("+t.data.url+")\n";s.insert2TextEditer(s.left_input,e),s.updateInputValue(s.left_input.value)})).catch((function(t){}))},s.insert2TextEditer=function(t,e){if(document.selection)document.selection.createRange().text=e;else if("number"===typeof t.selectionStart&&"number"===typeof t.selectionEnd){var n=t.selectionStart,a=t.selectionEnd,i=n,s=t.value;t.value=s.substring(0,n)+e+s.substring(a,s.length),i+=e.length,t.selectionStart=t.selectionEnd=i}else t.value+=e},s.leftTRScorll=function(t){if(t.target.scrollHeight-t.target.clientHeight!==t.target.scrollTop){var e=s.right_show.scrollHeight/s.left_input.scrollHeight;e>1&&(e*=.9),s.right_show.scrollTop=t.target.scrollTop*e}else s.right_show.scrollTop=s.right_show.scrollHeight-s.right_show.clientHeight},s.state={textareaValue:"",push_dialog_visible:!1,title:"",_html_str:""},s}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this,e=F("# "+this.state.title);return Object(w.jsxs)("div",{className:h.a.main,children:[Object(w.jsxs)("div",{className:h.a.top_main,children:[Object(w.jsx)("input",{value:this.state.title,onChange:this.onChangeTitle,placeholder:"\u8bf7\u8f93\u5165\u6807\u9898",className:h.a.input_title}),Object(w.jsx)(_.a,{onClick:this.pushArticle,children:"\u53d1\u5e03"})]}),Object(w.jsxs)("div",{className:h.a.content,children:[Object(w.jsx)("textarea",{ref:function(e){t.left_input=e},onScroll:this.leftTRScorll,onDrop:this.drop,onDragOver:function(t){return t.preventDefault()},onPasteCapture:this.pasteFileAction,className:h.a.left_input,value:this.state.textareaValue,onChange:this.handleTextareaChange}),Object(w.jsx)("div",{ref:function(e){t.right_show=e},className:h.a.right_show,dangerouslySetInnerHTML:{__html:e+this.state._html_str}})]}),Object(w.jsx)(E,{visible:this.state.push_dialog_visible,onOk:this.handleOk,onCancel:this.handleCancel})]})}}]),n}(c.a.Component)}}]);
//# sourceMappingURL=14.ef2447de.chunk.js.map