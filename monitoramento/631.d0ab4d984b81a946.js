"use strict";(self.webpackChunkMonitoramento=self.webpackChunkMonitoramento||[]).push([[631],{2631:(P,T,i)=>{i.r(T),i.d(T,{TaskerGroupModule:()=>k});var p=i(6895),c=i(6811),m=i(9808),b=i(1060),t=i(4650),M=i(7549),x=i(7185),C=i(9243),Z=i(3972),F=i(4597),O=i(9535),Y=i(2505),a=i(433);function J(e,n){1&e&&(t.TgZ(0,"p",17),t._uU(1,"This field is required."),t.qZA())}function G(e,n){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,J,2,0,"p",16),t.qZA()),2&e){t.oxw();const o=t.MAs(10);t.xp6(1),t.Q6J("ngIf",o.errors.required)}}function w(e,n){if(1&e&&(t.TgZ(0,"p",8),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o)}}function N(e,n){1&e&&(t.TgZ(0,"p",8),t._uU(1,"Fill all required fields correctly to save"),t.qZA())}function Q(e,n){if(1&e&&(t.TgZ(0,"div",18),t.YNc(1,w,2,1,"p",19),t.YNc(2,N,2,0,"p",20),t.qZA()),2&e){t.oxw();const o=t.MAs(1),s=t.oxw();t.xp6(1),t.Q6J("ngForOf",s.erro),t.xp6(1),t.Q6J("ngIf",o.invalid&&0==s.erro.length)}}function U(e,n){1&e&&t._UZ(0,"span",21)}function D(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(o);const r=t.MAs(1),l=t.oxw();return t.KtG(l.send(r))}),t.TgZ(2,"div",4)(3,"div",5)(4,"div",6)(5,"label",7),t._uU(6,"Name: "),t.TgZ(7,"span",8),t._uU(8,"*"),t.qZA()(),t.TgZ(9,"input",9,10),t.NdJ("ngModelChange",function(r){t.CHM(o);const l=t.oxw();return t.KtG(l.object.name=r)}),t.qZA(),t.YNc(11,G,2,1,"div",11),t.qZA()()(),t.TgZ(12,"div",12),t.YNc(13,Q,3,2,"div",13),t.TgZ(14,"button",14),t.YNc(15,U,1,0,"span",15),t.TgZ(16,"span"),t._uU(17,"Save"),t.qZA()()()()}if(2&e){const o=t.MAs(1),s=t.MAs(10),r=t.oxw();t.xp6(9),t.Q6J("ngModel",r.object.name),t.xp6(2),t.Q6J("ngIf",s.touched&&s.errors),t.xp6(2),t.Q6J("ngIf",r.erro||o.invalid),t.xp6(1),t.Q6J("disabled",o.invalid||r.loading),t.xp6(1),t.Q6J("ngIf",r.loading)}}let A=(()=>{class e{constructor(o,s,r,l,h,g,f,_,v){this.modal=o,this.toastr=s,this.activatedRoute=r,this.router=l,this.crypto=h,this.loadingUtils=g,this.location=f,this.taskerGroupService=_,this.dropdown=v,this.object=new b.B,this.title="Create Group",this.erro=[],this.loading=!1,this.isEditPage=!1,this.status={success:!1},this.success={true:"Opera\xe7\xe3o conclu\xedda com sucesso!",false:"Algum erro foi encontrado. Processo interrompido"},this.subscribers=[];var u=this.loadingUtils.loading.subscribe(d=>this.loading=d);this.subscribers.push(u),this.activatedRoute.params.subscribe(d=>{d.id?(this.idEncrypted=d.id,this.isEditPage=!0,this.title="Edit group",this.object.id=this.crypto.decrypt(this.idEncrypted),this.loading=!0,(0,m.n)(this.taskerGroupService.get(this.object.id)).then(y=>{this.object=y,this.modalOpen=!0}).catch(y=>{this.modalOpen=!1,this.voltar(),this.toastr.error("This page could not be loaded")})):(this.modalOpen=!0,this.isEditPage=!1,this.title="Create group")})}ngOnDestroy(){this.subscribers.forEach(o=>o.unsubscribe())}voltar(){this.modalOpen=!1,setTimeout(()=>{this.router.navigate(this.isEditPage?["../.."]:[".."],{relativeTo:this.activatedRoute})},300)}send(o){if(this.erro=[],o.invalid)return this.toastr.error("There are one or more invalid fields."),void(this.erro=["There are one or more invalid fields."]);(0,m.n)(this.taskerGroupService.send(this.object)).then(s=>{s.success?(this.toastr.success(this.success.true),this.modal.voltar(),(0,m.n)(this.dropdown.getTaskerGroups())):(this.toastr.error(this.success.false),this.erro.push(s.message))}).catch(s=>{this.toastr.error(s.message),this.erro.push(s.message)})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(M.Q),t.Y36(x._W),t.Y36(c.gz),t.Y36(c.F0),t.Y36(C.w),t.Y36(Z.b),t.Y36(p.Ye),t.Y36(F.o),t.Y36(O.V))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-form"]],decls:3,vars:4,consts:[[3,"modalOpen","title","template","maxWidth","onClose"],["template",""],[3,"ngSubmit"],["form","ngForm"],[1,"px-2"],[1,"row"],[1,"form-group","col-12"],["for","name"],[1,"text-danger"],["type","text","name","name","id","name","required","",1,"form-control",3,"ngModel","ngModelChange"],["name","ngModel"],[4,"ngIf"],[1,"d-flex","align-items-center","p-0","mt-1"],["class","m-0",4,"ngIf"],[1,"btn","btn-primary","mr-0","ms-auto",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["class","text-danger error",4,"ngIf"],[1,"text-danger","error"],[1,"m-0"],["class","text-danger",4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(o,s){if(1&o&&(t.TgZ(0,"app-sub-modal",0),t.NdJ("onClose",function(){return s.voltar()}),t.qZA(),t.YNc(1,D,18,5,"ng-template",null,1,t.W1O)),2&o){const r=t.MAs(2);t.Q6J("modalOpen",s.modalOpen)("title",s.title)("template",r)("maxWidth","400px")}},dependencies:[p.sg,p.O5,Y.B,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.On,a.F]}),e})();function j(e,n){if(1&e&&(t.TgZ(0,"p",10),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o)}}function S(e,n){if(1&e&&(t.TgZ(0,"p",13),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o)}}function I(e,n){if(1&e&&(t.TgZ(0,"div",11),t.YNc(1,S,2,1,"p",12),t.qZA()),2&e){const o=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",o.erro)}}function E(e,n){1&e&&t._UZ(0,"span",14)}function q(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(o);const r=t.MAs(1),l=t.oxw();return t.KtG(l.send(r))}),t.TgZ(2,"div")(3,"p",4),t._uU(4,"This operation is not reversible."),t.qZA(),t.TgZ(5,"p",4),t._uU(6,"Are you sure you want to proceed with the deletion?"),t.qZA(),t.YNc(7,j,2,1,"p",5),t.qZA(),t.TgZ(8,"div",6),t.YNc(9,I,2,1,"div",7),t.TgZ(10,"button",8),t.YNc(11,E,1,0,"span",9),t.TgZ(12,"span"),t._uU(13,"Delete"),t.qZA()()()()}if(2&e){const o=t.MAs(1),s=t.oxw();t.xp6(7),t.Q6J("ngForOf",s.erro),t.xp6(2),t.Q6J("ngIf",s.erro||o.invalid),t.xp6(1),t.Q6J("disabled",o.invalid||s.loading),t.xp6(1),t.Q6J("ngIf",s.loading)}}const R=[{path:"",component:A},{path:":id",component:A},{path:"delete/:id",component:(()=>{class e{constructor(o,s,r,l,h,g,f,_){this.toastr=o,this.activatedRoute=s,this.router=r,this.crypto=l,this.loadingUtils=h,this.location=g,this.taskerGroupService=f,this.dropdown=_,this.object=new b.B,this.erro=[],this.loading=!1,this.status={success:!1},this.success={true:"Opera\xe7\xe3o conclu\xedda com sucesso!",false:"Algum erro foi encontrado. Processo interrompido"},this.subscribers=[];var v=this.loadingUtils.loading.subscribe(u=>this.loading=u);this.subscribers.push(v),this.activatedRoute.params.subscribe(u=>{u.id?(this.idEncrypted=u.id,this.object.id=this.crypto.decrypt(this.idEncrypted),this.loading=!0,(0,m.n)(this.taskerGroupService.get(this.object.id)).then(d=>{this.object=d,this.modalOpen=!0}).catch(d=>{this.modalOpen=!1,this.voltar(),this.toastr.error("This page could not be loaded")})):this.modalOpen=!0})}ngOnDestroy(){this.subscribers.forEach(o=>o.unsubscribe())}voltar(){this.modalOpen=!1,setTimeout(()=>{this.router.navigate(["../.."],{relativeTo:this.activatedRoute})},300)}send(o){if(this.erro=[],o.invalid)return this.toastr.error("There are one or more invalid fields."),void(this.erro=["There are one or more invalid fields."]);(0,m.n)(this.taskerGroupService.delete(this.object.id)).then(s=>{s.success?this.toastr.success(this.success.true):this.toastr.error(this.success.false),(0,m.n)(this.dropdown.getTaskerGroups()),this.modalOpen=!1}).catch(s=>{this.toastr.error(s.message),this.erro.push(s.message)})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(x._W),t.Y36(c.gz),t.Y36(c.F0),t.Y36(C.w),t.Y36(Z.b),t.Y36(p.Ye),t.Y36(F.o),t.Y36(O.V))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-delete"]],decls:3,vars:4,consts:[[3,"modalOpen","title","template","maxWidth","onClose"],["template",""],[3,"ngSubmit"],["form","ngForm"],[1,"texxt-info","mt-2"],["class","text-danger mt-2","style","word-wrap: break-word;",4,"ngFor","ngForOf"],[1,"d-flex","align-items-center","p-0","mt-1"],["class","m-0",4,"ngIf"],[1,"btn","btn-primary","mr-0","ms-auto",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"text-danger","mt-2",2,"word-wrap","break-word"],[1,"m-0"],["class","text-danger",4,"ngFor","ngForOf"],[1,"text-danger"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(o,s){if(1&o&&(t.TgZ(0,"app-sub-modal",0),t.NdJ("onClose",function(){return s.voltar()}),t.qZA(),t.YNc(1,q,14,4,"ng-template",null,1,t.W1O)),2&o){const r=t.MAs(2);t.Q6J("modalOpen",s.modalOpen)("title","Delete group")("template",r)("maxWidth","400px")}},dependencies:[p.sg,p.O5,Y.B,a._Y,a.JL,a.F]}),e})()}];let B=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(R),c.Bz]}),e})();var W=i(4466);let k=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,B,W.m,a.u5]}),e})()}}]);