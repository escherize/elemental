goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35381 = coll;
var G__35382 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35381,G__35382) : shadow.dom.lazy_native_coll_seq.call(null,G__35381,G__35382));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return shadow.dom._to_dom(el);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35410 = arguments.length;
switch (G__35410) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35420 = arguments.length;
switch (G__35420) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35428 = arguments.length;
switch (G__35428) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35436 = arguments.length;
switch (G__35436) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35448 = arguments.length;
switch (G__35448) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__35454 = document;
var G__35455 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35454,G__35455);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35457 = shadow.dom.dom_node(parent);
var G__35458 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35457,G__35458);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35459 = shadow.dom.dom_node(el);
var G__35460 = cls;
return goog.dom.classlist.add(G__35459,G__35460);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35463 = shadow.dom.dom_node(el);
var G__35464 = cls;
return goog.dom.classlist.remove(G__35463,G__35464);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35467 = arguments.length;
switch (G__35467) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__35469 = shadow.dom.dom_node(el);
var G__35470 = cls;
return goog.dom.classlist.toggle(G__35469,G__35470);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35472){if((e35472 instanceof Object)){
var e = e35472;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35472;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35477 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35478 = null;
var count__35479 = (0);
var i__35480 = (0);
while(true){
if((i__35480 < count__35479)){
var el = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__35478,i__35480);
var handler_36214__$1 = ((function (seq__35477,chunk__35478,count__35479,i__35480,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35477,chunk__35478,count__35479,i__35480,el))
;
var G__35493_36216 = el;
var G__35494_36217 = cljs.core.name(ev);
var G__35495_36218 = handler_36214__$1;
shadow.dom.dom_listen(G__35493_36216,G__35494_36217,G__35495_36218);


var G__36219 = seq__35477;
var G__36220 = chunk__35478;
var G__36221 = count__35479;
var G__36222 = (i__35480 + (1));
seq__35477 = G__36219;
chunk__35478 = G__36220;
count__35479 = G__36221;
i__35480 = G__36222;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35477);
if(temp__5735__auto__){
var seq__35477__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35477__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35477__$1);
var G__36224 = cljs.core.chunk_rest(seq__35477__$1);
var G__36225 = c__4609__auto__;
var G__36226 = cljs.core.count(c__4609__auto__);
var G__36227 = (0);
seq__35477 = G__36224;
chunk__35478 = G__36225;
count__35479 = G__36226;
i__35480 = G__36227;
continue;
} else {
var el = cljs.core.first(seq__35477__$1);
var handler_36228__$1 = ((function (seq__35477,chunk__35478,count__35479,i__35480,el,seq__35477__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35477,chunk__35478,count__35479,i__35480,el,seq__35477__$1,temp__5735__auto__))
;
var G__35497_36230 = el;
var G__35498_36231 = cljs.core.name(ev);
var G__35499_36232 = handler_36228__$1;
shadow.dom.dom_listen(G__35497_36230,G__35498_36231,G__35499_36232);


var G__36234 = cljs.core.next(seq__35477__$1);
var G__36235 = null;
var G__36236 = (0);
var G__36237 = (0);
seq__35477 = G__36234;
chunk__35478 = G__36235;
count__35479 = G__36236;
i__35480 = G__36237;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35504 = arguments.length;
switch (G__35504) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__35508 = shadow.dom.dom_node(el);
var G__35509 = cljs.core.name(ev);
var G__35510 = handler__$1;
return shadow.dom.dom_listen(G__35508,G__35509,G__35510);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35512 = shadow.dom.dom_node(el);
var G__35513 = cljs.core.name(ev);
var G__35514 = handler;
return shadow.dom.dom_listen_remove(G__35512,G__35513,G__35514);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35517 = cljs.core.seq(events);
var chunk__35518 = null;
var count__35519 = (0);
var i__35520 = (0);
while(true){
if((i__35520 < count__35519)){
var vec__35533 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__35518,i__35520);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35533,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35533,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36245 = seq__35517;
var G__36246 = chunk__35518;
var G__36247 = count__35519;
var G__36248 = (i__35520 + (1));
seq__35517 = G__36245;
chunk__35518 = G__36246;
count__35519 = G__36247;
i__35520 = G__36248;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35517);
if(temp__5735__auto__){
var seq__35517__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35517__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35517__$1);
var G__36249 = cljs.core.chunk_rest(seq__35517__$1);
var G__36250 = c__4609__auto__;
var G__36251 = cljs.core.count(c__4609__auto__);
var G__36252 = (0);
seq__35517 = G__36249;
chunk__35518 = G__36250;
count__35519 = G__36251;
i__35520 = G__36252;
continue;
} else {
var vec__35537 = cljs.core.first(seq__35517__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35537,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35537,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36256 = cljs.core.next(seq__35517__$1);
var G__36257 = null;
var G__36258 = (0);
var G__36259 = (0);
seq__35517 = G__36256;
chunk__35518 = G__36257;
count__35519 = G__36258;
i__35520 = G__36259;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35545 = cljs.core.seq(styles);
var chunk__35546 = null;
var count__35547 = (0);
var i__35548 = (0);
while(true){
if((i__35548 < count__35547)){
var vec__35567 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__35546,i__35548);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35567,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35567,(1),null);
var G__35571_36263 = dom;
var G__35572_36264 = cljs.core.name(k);
var G__35573_36265 = (((v == null))?"":v);
goog.style.setStyle(G__35571_36263,G__35572_36264,G__35573_36265);


var G__36267 = seq__35545;
var G__36268 = chunk__35546;
var G__36269 = count__35547;
var G__36270 = (i__35548 + (1));
seq__35545 = G__36267;
chunk__35546 = G__36268;
count__35547 = G__36269;
i__35548 = G__36270;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35545);
if(temp__5735__auto__){
var seq__35545__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35545__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35545__$1);
var G__36272 = cljs.core.chunk_rest(seq__35545__$1);
var G__36273 = c__4609__auto__;
var G__36274 = cljs.core.count(c__4609__auto__);
var G__36275 = (0);
seq__35545 = G__36272;
chunk__35546 = G__36273;
count__35547 = G__36274;
i__35548 = G__36275;
continue;
} else {
var vec__35577 = cljs.core.first(seq__35545__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35577,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35577,(1),null);
var G__35580_36278 = dom;
var G__35581_36279 = cljs.core.name(k);
var G__35582_36280 = (((v == null))?"":v);
goog.style.setStyle(G__35580_36278,G__35581_36279,G__35582_36280);


var G__36282 = cljs.core.next(seq__35545__$1);
var G__36283 = null;
var G__36284 = (0);
var G__36285 = (0);
seq__35545 = G__36282;
chunk__35546 = G__36283;
count__35547 = G__36284;
i__35548 = G__36285;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35591_36287 = key;
var G__35591_36288__$1 = (((G__35591_36287 instanceof cljs.core.Keyword))?G__35591_36287.fqn:null);
switch (G__35591_36288__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36296 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_36296,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_36296,"aria-");
}
})())){
el.setAttribute(ks_36296,value);
} else {
(el[ks_36296] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__35606 = shadow.dom.dom_node(el);
var G__35607 = cls;
return goog.dom.classlist.contains(G__35606,G__35607);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35618){
var map__35621 = p__35618;
var map__35621__$1 = (((((!((map__35621 == null))))?(((((map__35621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35621):map__35621);
var props = map__35621__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35621__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35625 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35625,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35625,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35625,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35628 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35628,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35628;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35635 = arguments.length;
switch (G__35635) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35642){
var vec__35643 = p__35642;
var seq__35644 = cljs.core.seq(vec__35643);
var first__35645 = cljs.core.first(seq__35644);
var seq__35644__$1 = cljs.core.next(seq__35644);
var nn = first__35645;
var first__35645__$1 = cljs.core.first(seq__35644__$1);
var seq__35644__$2 = cljs.core.next(seq__35644__$1);
var np = first__35645__$1;
var nc = seq__35644__$2;
var node = vec__35643;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35647 = nn;
var G__35648 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35647,G__35648) : create_fn.call(null,G__35647,G__35648));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35649 = nn;
var G__35650 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35649,G__35650) : create_fn.call(null,G__35649,G__35650));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35657 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35657,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35657,(1),null);
var seq__35660_36322 = cljs.core.seq(node_children);
var chunk__35661_36323 = null;
var count__35663_36324 = (0);
var i__35664_36325 = (0);
while(true){
if((i__35664_36325 < count__35663_36324)){
var child_struct_36326 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__35661_36323,i__35664_36325);
var children_36330 = shadow.dom.dom_node(child_struct_36326);
if(cljs.core.seq_QMARK_(children_36330)){
var seq__35713_36331 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36330));
var chunk__35715_36332 = null;
var count__35716_36333 = (0);
var i__35717_36334 = (0);
while(true){
if((i__35717_36334 < count__35716_36333)){
var child_36335 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__35715_36332,i__35717_36334);
if(cljs.core.truth_(child_36335)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36335);


var G__36337 = seq__35713_36331;
var G__36338 = chunk__35715_36332;
var G__36339 = count__35716_36333;
var G__36340 = (i__35717_36334 + (1));
seq__35713_36331 = G__36337;
chunk__35715_36332 = G__36338;
count__35716_36333 = G__36339;
i__35717_36334 = G__36340;
continue;
} else {
var G__36341 = seq__35713_36331;
var G__36342 = chunk__35715_36332;
var G__36343 = count__35716_36333;
var G__36344 = (i__35717_36334 + (1));
seq__35713_36331 = G__36341;
chunk__35715_36332 = G__36342;
count__35716_36333 = G__36343;
i__35717_36334 = G__36344;
continue;
}
} else {
var temp__5735__auto___36345 = cljs.core.seq(seq__35713_36331);
if(temp__5735__auto___36345){
var seq__35713_36346__$1 = temp__5735__auto___36345;
if(cljs.core.chunked_seq_QMARK_(seq__35713_36346__$1)){
var c__4609__auto___36347 = cljs.core.chunk_first(seq__35713_36346__$1);
var G__36348 = cljs.core.chunk_rest(seq__35713_36346__$1);
var G__36349 = c__4609__auto___36347;
var G__36350 = cljs.core.count(c__4609__auto___36347);
var G__36351 = (0);
seq__35713_36331 = G__36348;
chunk__35715_36332 = G__36349;
count__35716_36333 = G__36350;
i__35717_36334 = G__36351;
continue;
} else {
var child_36356 = cljs.core.first(seq__35713_36346__$1);
if(cljs.core.truth_(child_36356)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36356);


var G__36358 = cljs.core.next(seq__35713_36346__$1);
var G__36359 = null;
var G__36360 = (0);
var G__36361 = (0);
seq__35713_36331 = G__36358;
chunk__35715_36332 = G__36359;
count__35716_36333 = G__36360;
i__35717_36334 = G__36361;
continue;
} else {
var G__36363 = cljs.core.next(seq__35713_36346__$1);
var G__36364 = null;
var G__36365 = (0);
var G__36366 = (0);
seq__35713_36331 = G__36363;
chunk__35715_36332 = G__36364;
count__35716_36333 = G__36365;
i__35717_36334 = G__36366;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36330);
}


var G__36367 = seq__35660_36322;
var G__36368 = chunk__35661_36323;
var G__36369 = count__35663_36324;
var G__36370 = (i__35664_36325 + (1));
seq__35660_36322 = G__36367;
chunk__35661_36323 = G__36368;
count__35663_36324 = G__36369;
i__35664_36325 = G__36370;
continue;
} else {
var temp__5735__auto___36372 = cljs.core.seq(seq__35660_36322);
if(temp__5735__auto___36372){
var seq__35660_36373__$1 = temp__5735__auto___36372;
if(cljs.core.chunked_seq_QMARK_(seq__35660_36373__$1)){
var c__4609__auto___36375 = cljs.core.chunk_first(seq__35660_36373__$1);
var G__36376 = cljs.core.chunk_rest(seq__35660_36373__$1);
var G__36377 = c__4609__auto___36375;
var G__36378 = cljs.core.count(c__4609__auto___36375);
var G__36379 = (0);
seq__35660_36322 = G__36376;
chunk__35661_36323 = G__36377;
count__35663_36324 = G__36378;
i__35664_36325 = G__36379;
continue;
} else {
var child_struct_36380 = cljs.core.first(seq__35660_36373__$1);
var children_36381 = shadow.dom.dom_node(child_struct_36380);
if(cljs.core.seq_QMARK_(children_36381)){
var seq__35740_36382 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36381));
var chunk__35742_36383 = null;
var count__35743_36384 = (0);
var i__35744_36385 = (0);
while(true){
if((i__35744_36385 < count__35743_36384)){
var child_36387 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__35742_36383,i__35744_36385);
if(cljs.core.truth_(child_36387)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36387);


var G__36388 = seq__35740_36382;
var G__36389 = chunk__35742_36383;
var G__36390 = count__35743_36384;
var G__36391 = (i__35744_36385 + (1));
seq__35740_36382 = G__36388;
chunk__35742_36383 = G__36389;
count__35743_36384 = G__36390;
i__35744_36385 = G__36391;
continue;
} else {
var G__36392 = seq__35740_36382;
var G__36393 = chunk__35742_36383;
var G__36394 = count__35743_36384;
var G__36395 = (i__35744_36385 + (1));
seq__35740_36382 = G__36392;
chunk__35742_36383 = G__36393;
count__35743_36384 = G__36394;
i__35744_36385 = G__36395;
continue;
}
} else {
var temp__5735__auto___36396__$1 = cljs.core.seq(seq__35740_36382);
if(temp__5735__auto___36396__$1){
var seq__35740_36397__$1 = temp__5735__auto___36396__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35740_36397__$1)){
var c__4609__auto___36398 = cljs.core.chunk_first(seq__35740_36397__$1);
var G__36399 = cljs.core.chunk_rest(seq__35740_36397__$1);
var G__36400 = c__4609__auto___36398;
var G__36401 = cljs.core.count(c__4609__auto___36398);
var G__36402 = (0);
seq__35740_36382 = G__36399;
chunk__35742_36383 = G__36400;
count__35743_36384 = G__36401;
i__35744_36385 = G__36402;
continue;
} else {
var child_36403 = cljs.core.first(seq__35740_36397__$1);
if(cljs.core.truth_(child_36403)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36403);


var G__36404 = cljs.core.next(seq__35740_36397__$1);
var G__36405 = null;
var G__36406 = (0);
var G__36407 = (0);
seq__35740_36382 = G__36404;
chunk__35742_36383 = G__36405;
count__35743_36384 = G__36406;
i__35744_36385 = G__36407;
continue;
} else {
var G__36409 = cljs.core.next(seq__35740_36397__$1);
var G__36410 = null;
var G__36411 = (0);
var G__36412 = (0);
seq__35740_36382 = G__36409;
chunk__35742_36383 = G__36410;
count__35743_36384 = G__36411;
i__35744_36385 = G__36412;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36381);
}


var G__36413 = cljs.core.next(seq__35660_36373__$1);
var G__36414 = null;
var G__36415 = (0);
var G__36416 = (0);
seq__35660_36322 = G__36413;
chunk__35661_36323 = G__36414;
count__35663_36324 = G__36415;
i__35664_36325 = G__36416;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__35765 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35765);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35771 = cljs.core.seq(node);
var chunk__35772 = null;
var count__35773 = (0);
var i__35774 = (0);
while(true){
if((i__35774 < count__35773)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__35772,i__35774);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36424 = seq__35771;
var G__36425 = chunk__35772;
var G__36426 = count__35773;
var G__36427 = (i__35774 + (1));
seq__35771 = G__36424;
chunk__35772 = G__36425;
count__35773 = G__36426;
i__35774 = G__36427;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35771);
if(temp__5735__auto__){
var seq__35771__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35771__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35771__$1);
var G__36428 = cljs.core.chunk_rest(seq__35771__$1);
var G__36429 = c__4609__auto__;
var G__36430 = cljs.core.count(c__4609__auto__);
var G__36431 = (0);
seq__35771 = G__36428;
chunk__35772 = G__36429;
count__35773 = G__36430;
i__35774 = G__36431;
continue;
} else {
var n = cljs.core.first(seq__35771__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36432 = cljs.core.next(seq__35771__$1);
var G__36433 = null;
var G__36434 = (0);
var G__36435 = (0);
seq__35771 = G__36432;
chunk__35772 = G__36433;
count__35773 = G__36434;
i__35774 = G__36435;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__35783 = shadow.dom.dom_node(new$);
var G__35784 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35783,G__35784);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35789 = arguments.length;
switch (G__35789) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35795 = arguments.length;
switch (G__35795) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35800 = arguments.length;
switch (G__35800) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36445 = arguments.length;
var i__4790__auto___36446 = (0);
while(true){
if((i__4790__auto___36446 < len__4789__auto___36445)){
args__4795__auto__.push((arguments[i__4790__auto___36446]));

var G__36447 = (i__4790__auto___36446 + (1));
i__4790__auto___36446 = G__36447;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35814_36448 = cljs.core.seq(nodes);
var chunk__35815_36449 = null;
var count__35816_36450 = (0);
var i__35817_36451 = (0);
while(true){
if((i__35817_36451 < count__35816_36450)){
var node_36455 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__35815_36449,i__35817_36451);
fragment.appendChild(shadow.dom._to_dom(node_36455));


var G__36456 = seq__35814_36448;
var G__36457 = chunk__35815_36449;
var G__36458 = count__35816_36450;
var G__36459 = (i__35817_36451 + (1));
seq__35814_36448 = G__36456;
chunk__35815_36449 = G__36457;
count__35816_36450 = G__36458;
i__35817_36451 = G__36459;
continue;
} else {
var temp__5735__auto___36460 = cljs.core.seq(seq__35814_36448);
if(temp__5735__auto___36460){
var seq__35814_36461__$1 = temp__5735__auto___36460;
if(cljs.core.chunked_seq_QMARK_(seq__35814_36461__$1)){
var c__4609__auto___36462 = cljs.core.chunk_first(seq__35814_36461__$1);
var G__36463 = cljs.core.chunk_rest(seq__35814_36461__$1);
var G__36464 = c__4609__auto___36462;
var G__36465 = cljs.core.count(c__4609__auto___36462);
var G__36466 = (0);
seq__35814_36448 = G__36463;
chunk__35815_36449 = G__36464;
count__35816_36450 = G__36465;
i__35817_36451 = G__36466;
continue;
} else {
var node_36467 = cljs.core.first(seq__35814_36461__$1);
fragment.appendChild(shadow.dom._to_dom(node_36467));


var G__36468 = cljs.core.next(seq__35814_36461__$1);
var G__36469 = null;
var G__36470 = (0);
var G__36471 = (0);
seq__35814_36448 = G__36468;
chunk__35815_36449 = G__36469;
count__35816_36450 = G__36470;
i__35817_36451 = G__36471;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35811){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35811));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35823_36472 = cljs.core.seq(scripts);
var chunk__35824_36473 = null;
var count__35825_36474 = (0);
var i__35826_36475 = (0);
while(true){
if((i__35826_36475 < count__35825_36474)){
var vec__35837_36476 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__35824_36473,i__35826_36475);
var script_tag_36477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35837_36476,(0),null);
var script_body_36478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35837_36476,(1),null);
eval(script_body_36478);


var G__36480 = seq__35823_36472;
var G__36481 = chunk__35824_36473;
var G__36482 = count__35825_36474;
var G__36483 = (i__35826_36475 + (1));
seq__35823_36472 = G__36480;
chunk__35824_36473 = G__36481;
count__35825_36474 = G__36482;
i__35826_36475 = G__36483;
continue;
} else {
var temp__5735__auto___36485 = cljs.core.seq(seq__35823_36472);
if(temp__5735__auto___36485){
var seq__35823_36486__$1 = temp__5735__auto___36485;
if(cljs.core.chunked_seq_QMARK_(seq__35823_36486__$1)){
var c__4609__auto___36487 = cljs.core.chunk_first(seq__35823_36486__$1);
var G__36488 = cljs.core.chunk_rest(seq__35823_36486__$1);
var G__36489 = c__4609__auto___36487;
var G__36490 = cljs.core.count(c__4609__auto___36487);
var G__36491 = (0);
seq__35823_36472 = G__36488;
chunk__35824_36473 = G__36489;
count__35825_36474 = G__36490;
i__35826_36475 = G__36491;
continue;
} else {
var vec__35840_36492 = cljs.core.first(seq__35823_36486__$1);
var script_tag_36493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35840_36492,(0),null);
var script_body_36494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35840_36492,(1),null);
eval(script_body_36494);


var G__36495 = cljs.core.next(seq__35823_36486__$1);
var G__36496 = null;
var G__36497 = (0);
var G__36498 = (0);
seq__35823_36472 = G__36495;
chunk__35824_36473 = G__36496;
count__35825_36474 = G__36497;
i__35826_36475 = G__36498;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35847){
var vec__35848 = p__35847;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35848,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35848,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__35866 = shadow.dom.dom_node(el);
var G__35867 = cls;
return goog.dom.getAncestorByClass(G__35866,G__35867);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35876 = arguments.length;
switch (G__35876) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__35881 = shadow.dom.dom_node(el);
var G__35882 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35881,G__35882);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35884 = shadow.dom.dom_node(el);
var G__35885 = cljs.core.name(tag);
var G__35886 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35884,G__35885,G__35886);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35889 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35889);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35893 = shadow.dom.dom_node(dom);
var G__35894 = value;
return goog.dom.forms.setValue(G__35893,G__35894);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35902 = cljs.core.seq(style_keys);
var chunk__35903 = null;
var count__35904 = (0);
var i__35905 = (0);
while(true){
if((i__35905 < count__35904)){
var it = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__35903,i__35905);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36508 = seq__35902;
var G__36509 = chunk__35903;
var G__36510 = count__35904;
var G__36511 = (i__35905 + (1));
seq__35902 = G__36508;
chunk__35903 = G__36509;
count__35904 = G__36510;
i__35905 = G__36511;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35902);
if(temp__5735__auto__){
var seq__35902__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35902__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35902__$1);
var G__36512 = cljs.core.chunk_rest(seq__35902__$1);
var G__36513 = c__4609__auto__;
var G__36514 = cljs.core.count(c__4609__auto__);
var G__36515 = (0);
seq__35902 = G__36512;
chunk__35903 = G__36513;
count__35904 = G__36514;
i__35905 = G__36515;
continue;
} else {
var it = cljs.core.first(seq__35902__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36516 = cljs.core.next(seq__35902__$1);
var G__36517 = null;
var G__36518 = (0);
var G__36519 = (0);
seq__35902 = G__36516;
chunk__35903 = G__36517;
count__35904 = G__36518;
i__35905 = G__36519;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4439__auto____$1,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k35916,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__35926 = k35916;
var G__35926__$1 = (((G__35926 instanceof cljs.core.Keyword))?G__35926.fqn:null);
switch (G__35926__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35916,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__35928){
var vec__35929 = p__35928;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35929,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35929,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35915){
var self__ = this;
var G__35915__$1 = this;
return (new cljs.core.RecordIter((0),G__35915__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__35938 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__35938(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35917,other35918){
var self__ = this;
var this35917__$1 = this;
return (((!((other35918 == null)))) && ((this35917__$1.constructor === other35918.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35917__$1.x,other35918.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35917__$1.y,other35918.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35917__$1.__extmap,other35918.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__35915){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__35942 = cljs.core.keyword_identical_QMARK_;
var expr__35943 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__35945 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35946 = expr__35943;
return (pred__35942.cljs$core$IFn$_invoke$arity$2 ? pred__35942.cljs$core$IFn$_invoke$arity$2(G__35945,G__35946) : pred__35942.call(null,G__35945,G__35946));
})())){
return (new shadow.dom.Coordinate(G__35915,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35947 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35948 = expr__35943;
return (pred__35942.cljs$core$IFn$_invoke$arity$2 ? pred__35942.cljs$core$IFn$_invoke$arity$2(G__35947,G__35948) : pred__35942.call(null,G__35947,G__35948));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35915,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__35915),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__35915){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35915,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return cljs.core._assoc(this__4444__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35920){
var extmap__4478__auto__ = (function (){var G__35956 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35920,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35920)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35956);
} else {
return G__35956;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35920),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35920),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35958 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35958);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35959 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35959);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35960 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35960);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4439__auto____$1,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k35962,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__35967 = k35962;
var G__35967__$1 = (((G__35967 instanceof cljs.core.Keyword))?G__35967.fqn:null);
switch (G__35967__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35962,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__35969){
var vec__35971 = p__35969;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35971,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35971,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35961){
var self__ = this;
var G__35961__$1 = this;
return (new cljs.core.RecordIter((0),G__35961__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__35985 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__35985(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35963,other35964){
var self__ = this;
var this35963__$1 = this;
return (((!((other35964 == null)))) && ((this35963__$1.constructor === other35964.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35963__$1.w,other35964.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35963__$1.h,other35964.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35963__$1.__extmap,other35964.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__35961){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__35994 = cljs.core.keyword_identical_QMARK_;
var expr__35995 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__35997 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35998 = expr__35995;
return (pred__35994.cljs$core$IFn$_invoke$arity$2 ? pred__35994.cljs$core$IFn$_invoke$arity$2(G__35997,G__35998) : pred__35994.call(null,G__35997,G__35998));
})())){
return (new shadow.dom.Size(G__35961,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36000 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__36001 = expr__35995;
return (pred__35994.cljs$core$IFn$_invoke$arity$2 ? pred__35994.cljs$core$IFn$_invoke$arity$2(G__36000,G__36001) : pred__35994.call(null,G__36000,G__36001));
})())){
return (new shadow.dom.Size(self__.w,G__35961,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__35961),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__35961){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35961,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return cljs.core._assoc(this__4444__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35966){
var extmap__4478__auto__ = (function (){var G__36007 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35966,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35966)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36007);
} else {
return G__36007;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35966),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35966),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__36010 = shadow.dom.dom_node(el);
return goog.style.getSize(G__36010);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__36552 = (i + (1));
var G__36553 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36552;
ret = G__36553;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36020){
var vec__36021 = p__36020;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36021,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36021,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36029 = arguments.length;
switch (G__36029) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__36039_36562 = new_node;
var G__36040_36563 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__36039_36562,G__36040_36563);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__36043_36566 = new_node;
var G__36044_36567 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__36043_36566,G__36044_36567);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36575 = ps;
var G__36576 = (i + (1));
el__$1 = G__36575;
i = G__36576;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__36049 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__36049);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__36054 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__36054);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__36056 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__36056);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36059 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36059,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36059,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36059,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36062_36590 = cljs.core.seq(props);
var chunk__36063_36591 = null;
var count__36064_36592 = (0);
var i__36065_36593 = (0);
while(true){
if((i__36065_36593 < count__36064_36592)){
var vec__36078_36595 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__36063_36591,i__36065_36593);
var k_36596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36078_36595,(0),null);
var v_36597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36078_36595,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36596);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36596),v_36597);


var G__36603 = seq__36062_36590;
var G__36604 = chunk__36063_36591;
var G__36605 = count__36064_36592;
var G__36606 = (i__36065_36593 + (1));
seq__36062_36590 = G__36603;
chunk__36063_36591 = G__36604;
count__36064_36592 = G__36605;
i__36065_36593 = G__36606;
continue;
} else {
var temp__5735__auto___36607 = cljs.core.seq(seq__36062_36590);
if(temp__5735__auto___36607){
var seq__36062_36608__$1 = temp__5735__auto___36607;
if(cljs.core.chunked_seq_QMARK_(seq__36062_36608__$1)){
var c__4609__auto___36609 = cljs.core.chunk_first(seq__36062_36608__$1);
var G__36610 = cljs.core.chunk_rest(seq__36062_36608__$1);
var G__36611 = c__4609__auto___36609;
var G__36612 = cljs.core.count(c__4609__auto___36609);
var G__36613 = (0);
seq__36062_36590 = G__36610;
chunk__36063_36591 = G__36611;
count__36064_36592 = G__36612;
i__36065_36593 = G__36613;
continue;
} else {
var vec__36083_36614 = cljs.core.first(seq__36062_36608__$1);
var k_36615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36083_36614,(0),null);
var v_36616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36083_36614,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36615);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36615),v_36616);


var G__36619 = cljs.core.next(seq__36062_36608__$1);
var G__36620 = null;
var G__36621 = (0);
var G__36622 = (0);
seq__36062_36590 = G__36619;
chunk__36063_36591 = G__36620;
count__36064_36592 = G__36621;
i__36065_36593 = G__36622;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return shadow.dom._to_svg(el);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36094 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36094,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36094,(1),null);
var seq__36097_36623 = cljs.core.seq(node_children);
var chunk__36099_36624 = null;
var count__36100_36625 = (0);
var i__36101_36626 = (0);
while(true){
if((i__36101_36626 < count__36100_36625)){
var child_struct_36627 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__36099_36624,i__36101_36626);
if((!((child_struct_36627 == null)))){
if(typeof child_struct_36627 === 'string'){
var text_36629 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36629),child_struct_36627].join(''));
} else {
var children_36631 = shadow.dom.svg_node(child_struct_36627);
if(cljs.core.seq_QMARK_(children_36631)){
var seq__36123_36633 = cljs.core.seq(children_36631);
var chunk__36125_36634 = null;
var count__36126_36635 = (0);
var i__36127_36636 = (0);
while(true){
if((i__36127_36636 < count__36126_36635)){
var child_36639 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__36125_36634,i__36127_36636);
if(cljs.core.truth_(child_36639)){
node.appendChild(child_36639);


var G__36640 = seq__36123_36633;
var G__36641 = chunk__36125_36634;
var G__36642 = count__36126_36635;
var G__36643 = (i__36127_36636 + (1));
seq__36123_36633 = G__36640;
chunk__36125_36634 = G__36641;
count__36126_36635 = G__36642;
i__36127_36636 = G__36643;
continue;
} else {
var G__36644 = seq__36123_36633;
var G__36645 = chunk__36125_36634;
var G__36646 = count__36126_36635;
var G__36647 = (i__36127_36636 + (1));
seq__36123_36633 = G__36644;
chunk__36125_36634 = G__36645;
count__36126_36635 = G__36646;
i__36127_36636 = G__36647;
continue;
}
} else {
var temp__5735__auto___36648 = cljs.core.seq(seq__36123_36633);
if(temp__5735__auto___36648){
var seq__36123_36649__$1 = temp__5735__auto___36648;
if(cljs.core.chunked_seq_QMARK_(seq__36123_36649__$1)){
var c__4609__auto___36650 = cljs.core.chunk_first(seq__36123_36649__$1);
var G__36651 = cljs.core.chunk_rest(seq__36123_36649__$1);
var G__36652 = c__4609__auto___36650;
var G__36653 = cljs.core.count(c__4609__auto___36650);
var G__36654 = (0);
seq__36123_36633 = G__36651;
chunk__36125_36634 = G__36652;
count__36126_36635 = G__36653;
i__36127_36636 = G__36654;
continue;
} else {
var child_36655 = cljs.core.first(seq__36123_36649__$1);
if(cljs.core.truth_(child_36655)){
node.appendChild(child_36655);


var G__36656 = cljs.core.next(seq__36123_36649__$1);
var G__36657 = null;
var G__36658 = (0);
var G__36659 = (0);
seq__36123_36633 = G__36656;
chunk__36125_36634 = G__36657;
count__36126_36635 = G__36658;
i__36127_36636 = G__36659;
continue;
} else {
var G__36660 = cljs.core.next(seq__36123_36649__$1);
var G__36661 = null;
var G__36662 = (0);
var G__36663 = (0);
seq__36123_36633 = G__36660;
chunk__36125_36634 = G__36661;
count__36126_36635 = G__36662;
i__36127_36636 = G__36663;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36631);
}
}


var G__36667 = seq__36097_36623;
var G__36668 = chunk__36099_36624;
var G__36669 = count__36100_36625;
var G__36670 = (i__36101_36626 + (1));
seq__36097_36623 = G__36667;
chunk__36099_36624 = G__36668;
count__36100_36625 = G__36669;
i__36101_36626 = G__36670;
continue;
} else {
var G__36673 = seq__36097_36623;
var G__36674 = chunk__36099_36624;
var G__36675 = count__36100_36625;
var G__36676 = (i__36101_36626 + (1));
seq__36097_36623 = G__36673;
chunk__36099_36624 = G__36674;
count__36100_36625 = G__36675;
i__36101_36626 = G__36676;
continue;
}
} else {
var temp__5735__auto___36679 = cljs.core.seq(seq__36097_36623);
if(temp__5735__auto___36679){
var seq__36097_36680__$1 = temp__5735__auto___36679;
if(cljs.core.chunked_seq_QMARK_(seq__36097_36680__$1)){
var c__4609__auto___36681 = cljs.core.chunk_first(seq__36097_36680__$1);
var G__36682 = cljs.core.chunk_rest(seq__36097_36680__$1);
var G__36683 = c__4609__auto___36681;
var G__36684 = cljs.core.count(c__4609__auto___36681);
var G__36685 = (0);
seq__36097_36623 = G__36682;
chunk__36099_36624 = G__36683;
count__36100_36625 = G__36684;
i__36101_36626 = G__36685;
continue;
} else {
var child_struct_36686 = cljs.core.first(seq__36097_36680__$1);
if((!((child_struct_36686 == null)))){
if(typeof child_struct_36686 === 'string'){
var text_36687 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36687),child_struct_36686].join(''));
} else {
var children_36688 = shadow.dom.svg_node(child_struct_36686);
if(cljs.core.seq_QMARK_(children_36688)){
var seq__36129_36689 = cljs.core.seq(children_36688);
var chunk__36131_36690 = null;
var count__36132_36691 = (0);
var i__36133_36692 = (0);
while(true){
if((i__36133_36692 < count__36132_36691)){
var child_36693 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__36131_36690,i__36133_36692);
if(cljs.core.truth_(child_36693)){
node.appendChild(child_36693);


var G__36694 = seq__36129_36689;
var G__36695 = chunk__36131_36690;
var G__36696 = count__36132_36691;
var G__36697 = (i__36133_36692 + (1));
seq__36129_36689 = G__36694;
chunk__36131_36690 = G__36695;
count__36132_36691 = G__36696;
i__36133_36692 = G__36697;
continue;
} else {
var G__36698 = seq__36129_36689;
var G__36699 = chunk__36131_36690;
var G__36700 = count__36132_36691;
var G__36701 = (i__36133_36692 + (1));
seq__36129_36689 = G__36698;
chunk__36131_36690 = G__36699;
count__36132_36691 = G__36700;
i__36133_36692 = G__36701;
continue;
}
} else {
var temp__5735__auto___36702__$1 = cljs.core.seq(seq__36129_36689);
if(temp__5735__auto___36702__$1){
var seq__36129_36703__$1 = temp__5735__auto___36702__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36129_36703__$1)){
var c__4609__auto___36704 = cljs.core.chunk_first(seq__36129_36703__$1);
var G__36705 = cljs.core.chunk_rest(seq__36129_36703__$1);
var G__36706 = c__4609__auto___36704;
var G__36707 = cljs.core.count(c__4609__auto___36704);
var G__36708 = (0);
seq__36129_36689 = G__36705;
chunk__36131_36690 = G__36706;
count__36132_36691 = G__36707;
i__36133_36692 = G__36708;
continue;
} else {
var child_36709 = cljs.core.first(seq__36129_36703__$1);
if(cljs.core.truth_(child_36709)){
node.appendChild(child_36709);


var G__36710 = cljs.core.next(seq__36129_36703__$1);
var G__36711 = null;
var G__36712 = (0);
var G__36713 = (0);
seq__36129_36689 = G__36710;
chunk__36131_36690 = G__36711;
count__36132_36691 = G__36712;
i__36133_36692 = G__36713;
continue;
} else {
var G__36714 = cljs.core.next(seq__36129_36703__$1);
var G__36715 = null;
var G__36716 = (0);
var G__36717 = (0);
seq__36129_36689 = G__36714;
chunk__36131_36690 = G__36715;
count__36132_36691 = G__36716;
i__36133_36692 = G__36717;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36688);
}
}


var G__36720 = cljs.core.next(seq__36097_36680__$1);
var G__36721 = null;
var G__36722 = (0);
var G__36723 = (0);
seq__36097_36623 = G__36720;
chunk__36099_36624 = G__36721;
count__36100_36625 = G__36722;
i__36101_36626 = G__36723;
continue;
} else {
var G__36724 = cljs.core.next(seq__36097_36680__$1);
var G__36725 = null;
var G__36726 = (0);
var G__36727 = (0);
seq__36097_36623 = G__36724;
chunk__36099_36624 = G__36725;
count__36100_36625 = G__36726;
i__36101_36626 = G__36727;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__36137_36728 = shadow.dom._to_svg;
var G__36138_36729 = "string";
var G__36139_36730 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__36137_36728,G__36138_36729,G__36139_36730);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__36145_36732 = shadow.dom._to_svg;
var G__36146_36733 = "null";
var G__36147_36734 = (function (_){
return null;
});
goog.object.set(G__36145_36732,G__36146_36733,G__36147_36734);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36736 = arguments.length;
var i__4790__auto___36737 = (0);
while(true){
if((i__4790__auto___36737 < len__4789__auto___36736)){
args__4795__auto__.push((arguments[i__4790__auto___36737]));

var G__36738 = (i__4790__auto___36737 + (1));
i__4790__auto___36737 = G__36738;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36150){
var G__36151 = cljs.core.first(seq36150);
var seq36150__$1 = cljs.core.next(seq36150);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36151,seq36150__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36158 = arguments.length;
switch (G__36158) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__36161_36740 = shadow.dom.dom_node(el);
var G__36162_36741 = cljs.core.name(event);
var G__36163_36742 = event_fn;
shadow.dom.dom_listen(G__36161_36740,G__36162_36741,G__36163_36742);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__33757__auto___36743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_36170){
var state_val_36171 = (state_36170[(1)]);
if((state_val_36171 === (1))){
var state_36170__$1 = state_36170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36170__$1,(2),once_or_cleanup);
} else {
if((state_val_36171 === (2))){
var inst_36167 = (state_36170[(2)]);
var inst_36168 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36170__$1 = (function (){var statearr_36176 = state_36170;
(statearr_36176[(7)] = inst_36167);

return statearr_36176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36170__$1,inst_36168);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33587__auto__ = null;
var shadow$dom$state_machine__33587__auto____0 = (function (){
var statearr_36177 = [null,null,null,null,null,null,null,null];
(statearr_36177[(0)] = shadow$dom$state_machine__33587__auto__);

(statearr_36177[(1)] = (1));

return statearr_36177;
});
var shadow$dom$state_machine__33587__auto____1 = (function (state_36170){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_36170);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e36178){if((e36178 instanceof Object)){
var ex__33590__auto__ = e36178;
var statearr_36179_36747 = state_36170;
(statearr_36179_36747[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36749 = state_36170;
state_36170 = G__36749;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
shadow$dom$state_machine__33587__auto__ = function(state_36170){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33587__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33587__auto____1.call(this,state_36170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33587__auto____0;
shadow$dom$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33587__auto____1;
return shadow$dom$state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_36182 = f__33758__auto__();
(statearr_36182[(6)] = c__33757__auto___36743);

return statearr_36182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
