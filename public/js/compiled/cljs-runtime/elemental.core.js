goog.provide('elemental.core');
goog.require('cljs.core');
goog.require('reagent.core');
var fps_26475 = (60);
elemental.core.update_interval = ((1000) / fps_26475);
elemental.core.width = (800);
elemental.core.height = (600);
elemental.core.debug_QMARK_ = false;
elemental.core.initial_db = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),(0),new cljs.core.Keyword(null,"delta","delta",108939957),(0)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)], null);
if((typeof elemental !== 'undefined') && (typeof elemental.core !== 'undefined') && (typeof elemental.core.db !== 'undefined')){
} else {
elemental.core.db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(elemental.core.initial_db);
}
elemental.core.view = (function elemental$core$view(){
var map__26462 = cljs.core.deref(elemental.core.db);
var map__26462__$1 = (((((!((map__26462 == null))))?(((((map__26462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26462):map__26462);
var db = map__26462__$1;
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26462__$1,new cljs.core.Keyword(null,"player","player",-97687400));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),elemental.core.width,new cljs.core.Keyword(null,"height","height",1025178622),elemental.core.height,new cljs.core.Keyword(null,"background-color","background-color",570434026),"#0d1b2a"], null),new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(elemental.core.width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(elemental.core.height)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),"#415a77",new cljs.core.Keyword(null,"r","r",-471384190),(10),new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(player)], null)], null)], null)], null);
});
/**
 * Returns new version of app-db
 *   d represents how long it has been since the previous update.
 */
elemental.core.update_state = (function elemental$core$update_state(p__26466,d){
var map__26467 = p__26466;
var map__26467__$1 = (((((!((map__26467 == null))))?(((((map__26467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26467):map__26467);
var db = map__26467__$1;
var pressed_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26467__$1,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null),(function (p1__26464_SHARP_){
if(cljs.core.truth_((function (){var G__26469 = new cljs.core.Keyword(null,"right","right",-452581833);
return (pressed_keys.cljs$core$IFn$_invoke$arity$1 ? pressed_keys.cljs$core$IFn$_invoke$arity$1(G__26469) : pressed_keys.call(null,G__26469));
})())){
return (p1__26464_SHARP_ + d);
} else {
if(cljs.core.truth_((function (){var G__26470 = new cljs.core.Keyword(null,"left","left",-399115937);
return (pressed_keys.cljs$core$IFn$_invoke$arity$1 ? pressed_keys.cljs$core$IFn$_invoke$arity$1(G__26470) : pressed_keys.call(null,G__26470));
})())){
return (p1__26464_SHARP_ - d);
} else {
return p1__26464_SHARP_;

}
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(function (p1__26465_SHARP_){
if(cljs.core.truth_((function (){var G__26471 = new cljs.core.Keyword(null,"up","up",-269712113);
return (pressed_keys.cljs$core$IFn$_invoke$arity$1 ? pressed_keys.cljs$core$IFn$_invoke$arity$1(G__26471) : pressed_keys.call(null,G__26471));
})())){
return (p1__26465_SHARP_ - d);
} else {
if(cljs.core.truth_((function (){var G__26472 = new cljs.core.Keyword(null,"down","down",1565245570);
return (pressed_keys.cljs$core$IFn$_invoke$arity$1 ? pressed_keys.cljs$core$IFn$_invoke$arity$1(G__26472) : pressed_keys.call(null,G__26472));
})())){
return (p1__26465_SHARP_ + d);
} else {
return p1__26465_SHARP_;

}
}
}));
});
elemental.core.game_loop = (function elemental$core$game_loop(){
window.requestAnimationFrame(elemental.core.game_loop);

var current_time = (new Date()).getTime();
var delta = (current_time - cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(elemental.core.db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"time","time",1385887882)], null)));
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(elemental.core.db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"delta","delta",108939957)], null),delta);
if((delta > elemental.core.update_interval)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(elemental.core.db,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loop","loop",-395552849),new cljs.core.Keyword(null,"time","time",1385887882)], null),current_time);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(elemental.core.db,elemental.core.update_state,(delta / elemental.core.update_interval));
} else {
return null;
}
});
var code__GT_key_26476 = cljs.core.PersistentHashMap.fromArrays([(65),(39),(32),(40),(68),(83),(38),(87),(37)],[new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"left","left",-399115937)]);
elemental.core.handle_key = (function elemental$core$handle_key(edit_fn,event){
var kc = event.keyCode;
var temp__5735__auto__ = (code__GT_key_26476.cljs$core$IFn$_invoke$arity$1 ? code__GT_key_26476.cljs$core$IFn$_invoke$arity$1(kc) : code__GT_key_26476.call(null,kc));
if(cljs.core.truth_(temp__5735__auto__)){
var k = temp__5735__auto__;
event.preventDefault();

console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(elemental.core.db,cljs.core.update,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),edit_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0));
} else {
return null;
}
});
elemental.core.kd_hook = (function elemental$core$kd_hook(e){
return elemental.core.handle_key(cljs.core.conj,e);
});
elemental.core.ku_hook = (function elemental$core$ku_hook(e){
return elemental.core.handle_key(cljs.core.disj,e);
});
elemental.core.hook_pressed_keys_BANG_ = (function elemental$core$hook_pressed_keys_BANG_(){
window.addEventListener("keydown",elemental.core.kd_hook,false);

return window.addEventListener("keyup",elemental.core.ku_hook,false);
});
elemental.core.unhook_pressed_keys_BANG_ = (function elemental$core$unhook_pressed_keys_BANG_(){
window.removeEventListener("keydown",elemental.core.kd_hook,false);

return window.removeEventListener("keyup",elemental.core.ku_hook,false);
});
elemental.core.init = (function elemental$core$init(){
elemental.core.hook_pressed_keys_BANG_();

var G__26473_26477 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elemental.core.view], null);
var G__26474_26478 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__26473_26477,G__26474_26478) : reagent.core.render_component.call(null,G__26473_26477,G__26474_26478));

return elemental.core.game_loop();
});
goog.exportSymbol('elemental.core.init', elemental.core.init);
elemental.core.stop = (function elemental$core$stop(){
return null;
});

//# sourceMappingURL=elemental.core.js.map
