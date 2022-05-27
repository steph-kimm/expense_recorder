(this.webpackJsonpexpense_recorder=this.webpackJsonpexpense_recorder||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(31),c=n.n(r),o=(n(77),n(54)),i=n(9),l=n(10),d=n(13),u=n(12),h=n(11),j=n(110),m=n(2),b=n(3),p=n(1),g=["user","component","render"],x=function(e){var t=e.user,n=e.component,a=e.render,s=Object(b.a)(e,g);return t&&a?Object(p.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:a})):Object(p.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:function(e){return t?Object(p.jsx)(n,Object(m.a)({},e)):Object(p.jsx)(h.a,{to:"/"})}}))},O=n(60),f=(n(86),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,a=e.message,s=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){s(r)}),300),Object(p.jsx)(O.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(O.a.Heading,{children:n}),Object(p.jsx)("p",{className:"alert-body",children:a})]})})}}]),n}(s.a.Component)),v=n(72),w=n(44),C=n(15),y=Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(C.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(p.jsx)(C.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(p.jsx)(C.c,{to:"/create-expense",className:"nav-link",children:" Add New Expense "}),Object(p.jsx)(C.c,{to:"/myexpenses",className:"nav-link",children:" My Expenses "})]}),S=Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(C.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(p.jsx)(C.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),A=Object(p.jsx)(a.Fragment,{children:Object(p.jsx)(C.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),k=function(e){var t=e.user;return Object(p.jsxs)(w.a,{bg:"primary",variant:"dark",expand:"md",children:[Object(p.jsx)(w.a.Brand,{children:Object(p.jsx)(C.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"Expense Recorder"})}),Object(p.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(v.a,{className:"ml-auto",children:[t&&Object(p.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),A,t?y:S]})})]})},P=n(7),E="https://aqueous-atoll-85096.herokuapp.com",I="http://localhost:4741",N="localhost"===window.location.hostname?I:E,U=n(29),D=n.n(U),L=function(e){return D()({url:N+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},q=n(5),F=n(23),G=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,n=a.props,s=n.msgAlert,r=n.history,c=n.setUser;(t=a.state,D()({method:"POST",url:N+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return L(a.state)})).then((function(e){return c(e.data.user)})).then((function(){return s({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),s({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={email:"",password:"",passwordConfirmation:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.passwordConfirmation;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Sign Up"}),Object(p.jsxs)(q.a,{onSubmit:this.onSignUp,children:[Object(p.jsxs)(q.a.Group,{controlId:"email",children:[Object(p.jsx)(q.a.Label,{children:"Email address"}),Object(p.jsx)(q.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(q.a.Group,{controlId:"password",children:[Object(p.jsx)(q.a.Label,{children:"Password"}),Object(p.jsx)(q.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsxs)(q.a.Group,{controlId:"passwordConfirmation",children:[Object(p.jsx)(q.a.Label,{children:"Password Confirmation"}),Object(p.jsx)(q.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(p.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),T=Object(h.f)(G),_=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.setUser;L(a.state).then((function(e){return r(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Sign In"}),Object(p.jsxs)(q.a,{onSubmit:this.onSignIn,children:[Object(p.jsxs)(q.a.Group,{controlId:"email",children:[Object(p.jsx)(q.a.Label,{children:"Email address"}),Object(p.jsx)(q.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(q.a.Group,{controlId:"password",children:[Object(p.jsx)(q.a.Label,{children:"Password"}),Object(p.jsx)(q.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),B=Object(h.f)(_),M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,a=e.clearUser;(function(e){return D()({url:N+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),n}(a.Component),z=Object(h.f)(M),$=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.user;(function(e,t){return D()({url:N+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,r).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Change Password"}),Object(p.jsxs)(q.a,{onSubmit:this.onChangePassword,children:[Object(p.jsxs)(q.a.Group,{controlId:"oldPassword",children:[Object(p.jsx)(q.a.Label,{children:"Old password"}),Object(p.jsx)(q.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(p.jsxs)(q.a.Group,{controlId:"newPassword",children:[Object(p.jsx)(q.a.Label,{children:"New Password"}),Object(p.jsx)(q.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(p.jsx)(F.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),H=Object(h.f)($),W=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.user,s=t.msgAlert;(function(e,t){return D()({method:"POST",url:N+"/expenses/",data:{expense:e},headers:{Authorization:"Bearer ".concat(t.token)}})})(a.state,n).then((function(){s({heading:"New expense created",message:"New expense created successfully!",variant:"success"})})).catch((function(e){s({heading:"Failed to create new expense",message:"expense error: "+e.message,variant:"danger"})}))},a.state={title:"",amount:"",text:"",date:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(q.a,{onSubmit:this.handleSubmit,children:[Object(p.jsxs)(q.a.Group,{controlId:"title",children:[Object(p.jsx)(q.a.Label,{children:"Expense:"}),Object(p.jsx)(q.a.Control,{required:!0,name:"title",value:this.state.title,placeholder:"Expense Title",onChange:this.handleChange})]}),Object(p.jsxs)(q.a.Group,{controlId:"amount",children:[Object(p.jsx)(q.a.Label,{children:"amount spent: (without the dollar sign)"}),Object(p.jsx)(q.a.Control,{required:!0,name:"amount",value:this.state.amount,placeholder:"$000",onChange:this.handleChange})]}),Object(p.jsxs)(q.a.Group,{controlId:"text",children:[Object(p.jsx)(q.a.Label,{children:"description"}),Object(p.jsx)(q.a.Control,{required:!0,name:"text",value:this.state.text,placeholder:"desciption...",onChange:this.handleChange})]}),Object(p.jsxs)(q.a.Group,{controlId:"date",children:[Object(p.jsx)(q.a.Label,{children:"Date"}),Object(p.jsx)(q.a.Control,{required:!0,name:"date",value:this.state.date,placeholder:"yyyy-mm-dd",onChange:this.handleChange})]}),Object(p.jsx)(F.a,{type:"submit",children:"Submit"})]})}}]),n}(a.Component),J=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(P.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.user,s=t.msgAlert,r=t.history,c=t.match;(function(e,t,n){return D()({url:N+"/expenses/"+t,method:"patch",data:{expense:e},headers:{Authorization:"Bearer ".concat(n.token)}})})(a.state,c.params.id,n).then((function(){return r.push("/expenses/"+c.params.id)})).then((function(){s({heading:"Updated Expense",message:"woot updated",variant:"success"})})).catch((function(e){s({heading:"Update failed",message:"Update error: "+e.message,variant:"danger"})}))},a.state={title:"",amount:"",text:"",date:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(p.jsxs)(q.a,{onSubmit:this.handleSubmit,children:[Object(p.jsxs)(q.a.Group,{controlId:"title",children:[Object(p.jsx)(q.a.Label,{children:"Expense Title"}),Object(p.jsx)(q.a.Control,{required:!0,name:"title",value:this.state.title,placeholder:"Expense title",onChange:this.handleChange})]}),Object(p.jsxs)(q.a.Group,{controlId:"amount",children:[Object(p.jsx)(q.a.Label,{children:"amount spent: (without the dollar sign)"}),Object(p.jsx)(q.a.Control,{required:!0,name:"amount",value:this.state.amount,placeholder:"$000",onChange:this.handleChange})]}),Object(p.jsxs)(q.a.Group,{controlId:"text",children:[Object(p.jsx)(q.a.Label,{children:"Expense text"}),Object(p.jsx)(q.a.Control,{required:!0,name:"text",value:this.state.text,placeholder:"Expense text",onChange:this.handleChange})]}),Object(p.jsxs)(q.a.Group,{controlId:"date",children:[Object(p.jsx)(q.a.Label,{children:"Expense date"}),Object(p.jsx)(q.a.Control,{required:!0,name:"date",value:this.state.date,placeholder:"Expense date",onChange:this.handleChange})]}),Object(p.jsx)(F.a,{type:"submit",children:"Submit"})]})}}]),n}(a.Component),R=Object(h.f)(J),Y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleDelete=function(e){var t=a.props,n=t.match,s=t.user,r=t.msgAlert,c=t.history;console.log(n),function(e,t){return D()({method:"DELETE",url:N+"/expenses/"+e,headers:{Authorization:"Bearer ".concat(t.token)}})}(e,s).then((function(){return c.push("/expenses")})).then((function(){r({heading:"Deleted expense successfully",message:"Expense deleted",variant:"success"})})).catch((function(e){r({heading:"Failed to delete expense!",message:"Delete error: "+e.message,variant:"danger"})}))},a.state={expenses:null},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,a=t.msgAlert;(function(e){return D()({method:"GET",url:N+"/expenses/",headers:{Authorization:"Bearer ".concat(e.token)}})})(n).then((function(e){return console.log("expenses:"),console.log(e.data.expenses),console.log("user:"),console.log(n._id),e.data.expenses.filter((function(e){return e.owner===n._id}))})).then((function(t){return e.setState({expenses:t})})).then((function(){a({heading:"Index My Expenses Success",message:"Expenses successfully shown!",variant:"success"})})).catch((function(e){a({heading:"Indexing My Expenses Failed",message:"Index error: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this,n=this.state.expenses;if(null===n)return"Loading...";if(0===n.length)e="No expenses, create some";else{console.log("expenses: "+n[0]._id);var a=this.props.history;e=n.map((function(e){return Object(p.jsxs)("li",{children:[Object(p.jsx)("h2",{children:e.title}),Object(p.jsxs)("h6",{children:["$",e.amount]}),Object(p.jsx)("p",{children:e.text}),Object(p.jsx)(F.a,{onClick:function(){t.handleDelete(e._id)},children:"Delete"}),Object(p.jsx)(F.a,{onClick:function(){return a.push("/expenses/".concat(e._id,"/edit"))},children:"Update"})]},e._id)}))}var s=0;console.log("length"+n.length);for(var r=0;r<n.length;r++)console.log("amount:"+n[r].amount),s+=n[r].amount;return Object(p.jsxs)(p.Fragment,{children:[console.log(s),Object(p.jsxs)("h3",{children:["My Expenses: $",s]}),Object(p.jsx)("ul",{children:e})]})}}]),n}(a.Component),K=Object(h.f)(Y),Q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,n=e.message,s=e.variant,r=Object(j.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(o.a)(e.msgAlerts),[{heading:t,message:n,variant:s,id:r}])}}))},a.state={user:null,msgAlerts:[]},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,s=t.user;return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(k,{user:s}),n.map((function(t){return Object(p.jsx)(f,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(p.jsxs)("main",{className:"container",children:[Object(p.jsx)(h.b,{path:"/sign-up",render:function(){return Object(p.jsx)(T,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(h.b,{path:"/sign-in",render:function(){return Object(p.jsx)(B,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(x,{user:s,path:"/sign-out",render:function(){return Object(p.jsx)(z,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:s})}}),Object(p.jsx)(x,{user:s,path:"/change-password",render:function(){return Object(p.jsx)(H,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(x,{user:s,path:"/create-expense",render:function(){return Object(p.jsx)(W,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(x,{user:s,exact:!0,path:"/myexpenses",render:function(){return Object(p.jsx)(K,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(x,{user:s,path:"/expenses/:id/edit",render:function(){return Object(p.jsx)(R,{msgAlert:e.msgAlert,user:s})}})]})]})}}]),n}(a.Component),V=Object(p.jsx)(C.a,{basename:"/expense_recorder",children:Object(p.jsx)(Q,{})});c.a.render(V,document.getElementById("root"))},77:function(e,t,n){},86:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.cbbcc7dc.chunk.js.map