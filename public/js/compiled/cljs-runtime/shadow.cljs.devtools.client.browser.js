goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38005 = arguments.length;
var i__4790__auto___38006 = (0);
while(true){
if((i__4790__auto___38006 < len__4789__auto___38005)){
args__4795__auto__.push((arguments[i__4790__auto___38006]));

var G__38007 = (i__4790__auto___38006 + (1));
i__4790__auto___38006 = G__38007;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37718){
var G__37719 = cljs.core.first(seq37718);
var seq37718__$1 = cljs.core.next(seq37718);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37719,seq37718__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37736){
var map__37737 = p__37736;
var map__37737__$1 = (((((!((map__37737 == null))))?(((((map__37737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37737):map__37737);
var src = map__37737__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37737__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37737__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37746 = cljs.core.seq(sources);
var chunk__37747 = null;
var count__37748 = (0);
var i__37749 = (0);
while(true){
if((i__37749 < count__37748)){
var map__37757 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__37747,i__37749);
var map__37757__$1 = (((((!((map__37757 == null))))?(((((map__37757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37757):map__37757);
var src = map__37757__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37757__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37757__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37757__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37757__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e37759){var e_38010 = e37759;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38010);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38010.message)].join('')));
}

var G__38011 = seq__37746;
var G__38012 = chunk__37747;
var G__38013 = count__37748;
var G__38014 = (i__37749 + (1));
seq__37746 = G__38011;
chunk__37747 = G__38012;
count__37748 = G__38013;
i__37749 = G__38014;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37746);
if(temp__5735__auto__){
var seq__37746__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37746__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37746__$1);
var G__38015 = cljs.core.chunk_rest(seq__37746__$1);
var G__38016 = c__4609__auto__;
var G__38017 = cljs.core.count(c__4609__auto__);
var G__38018 = (0);
seq__37746 = G__38015;
chunk__37747 = G__38016;
count__37748 = G__38017;
i__37749 = G__38018;
continue;
} else {
var map__37762 = cljs.core.first(seq__37746__$1);
var map__37762__$1 = (((((!((map__37762 == null))))?(((((map__37762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37762):map__37762);
var src = map__37762__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37762__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37762__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37762__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37762__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e37765){var e_38021 = e37765;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38021);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38021.message)].join('')));
}

var G__38022 = cljs.core.next(seq__37746__$1);
var G__38023 = null;
var G__38024 = (0);
var G__38025 = (0);
seq__37746 = G__38022;
chunk__37747 = G__38023;
count__37748 = G__38024;
i__37749 = G__38025;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37767 = cljs.core.seq(js_requires);
var chunk__37768 = null;
var count__37769 = (0);
var i__37770 = (0);
while(true){
if((i__37770 < count__37769)){
var js_ns = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__37768,i__37770);
var require_str_38026 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38026);


var G__38027 = seq__37767;
var G__38028 = chunk__37768;
var G__38029 = count__37769;
var G__38030 = (i__37770 + (1));
seq__37767 = G__38027;
chunk__37768 = G__38028;
count__37769 = G__38029;
i__37770 = G__38030;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37767);
if(temp__5735__auto__){
var seq__37767__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37767__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37767__$1);
var G__38031 = cljs.core.chunk_rest(seq__37767__$1);
var G__38032 = c__4609__auto__;
var G__38033 = cljs.core.count(c__4609__auto__);
var G__38034 = (0);
seq__37767 = G__38031;
chunk__37768 = G__38032;
count__37769 = G__38033;
i__37770 = G__38034;
continue;
} else {
var js_ns = cljs.core.first(seq__37767__$1);
var require_str_38035 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38035);


var G__38036 = cljs.core.next(seq__37767__$1);
var G__38037 = null;
var G__38038 = (0);
var G__38039 = (0);
seq__37767 = G__38036;
chunk__37768 = G__38037;
count__37769 = G__38038;
i__37770 = G__38039;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__37779 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37779) : callback.call(null,G__37779));
} else {
var G__37780 = shadow.cljs.devtools.client.env.files_url();
var G__37781 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__37782 = "POST";
var G__37783 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37784 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37780,G__37781,G__37782,G__37783,G__37784);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37786){
var map__37787 = p__37786;
var map__37787__$1 = (((((!((map__37787 == null))))?(((((map__37787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37787):map__37787);
var msg = map__37787__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37787__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37787__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37789 = info;
var map__37789__$1 = (((((!((map__37789 == null))))?(((((map__37789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37789):map__37789);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37789__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37789__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37791(s__37792){
return (new cljs.core.LazySeq(null,(function (){
var s__37792__$1 = s__37792;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37792__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37800 = cljs.core.first(xs__6292__auto__);
var map__37800__$1 = (((((!((map__37800 == null))))?(((((map__37800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37800):map__37800);
var src = map__37800__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37800__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37800__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__37792__$1,map__37800,map__37800__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37789,map__37789__$1,sources,compiled,map__37787,map__37787__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37791_$_iter__37793(s__37794){
return (new cljs.core.LazySeq(null,((function (s__37792__$1,map__37800,map__37800__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37789,map__37789__$1,sources,compiled,map__37787,map__37787__$1,msg,info,reload_info){
return (function (){
var s__37794__$1 = s__37794;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37794__$1);
if(temp__5735__auto____$1){
var s__37794__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37794__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37794__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37796 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37795 = (0);
while(true){
if((i__37795 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__37795);
cljs.core.chunk_append(b__37796,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38044 = (i__37795 + (1));
i__37795 = G__38044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37796),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37791_$_iter__37793(cljs.core.chunk_rest(s__37794__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37796),null);
}
} else {
var warning = cljs.core.first(s__37794__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37791_$_iter__37793(cljs.core.rest(s__37794__$2)));
}
} else {
return null;
}
break;
}
});})(s__37792__$1,map__37800,map__37800__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37789,map__37789__$1,sources,compiled,map__37787,map__37787__$1,msg,info,reload_info))
,null,null));
});})(s__37792__$1,map__37800,map__37800__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37789,map__37789__$1,sources,compiled,map__37787,map__37787__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37791(cljs.core.rest(s__37792__$1)));
} else {
var G__38045 = cljs.core.rest(s__37792__$1);
s__37792__$1 = G__38045;
continue;
}
} else {
var G__38046 = cljs.core.rest(s__37792__$1);
s__37792__$1 = G__38046;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__37812_38048 = cljs.core.seq(warnings);
var chunk__37813_38049 = null;
var count__37814_38050 = (0);
var i__37815_38052 = (0);
while(true){
if((i__37815_38052 < count__37814_38050)){
var map__37824_38054 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__37813_38049,i__37815_38052);
var map__37824_38055__$1 = (((((!((map__37824_38054 == null))))?(((((map__37824_38054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37824_38054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37824_38054):map__37824_38054);
var w_38056 = map__37824_38055__$1;
var msg_38057__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37824_38055__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37824_38055__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37824_38055__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37824_38055__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38060)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38058),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38059),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38057__$1)].join(''));


var G__38061 = seq__37812_38048;
var G__38062 = chunk__37813_38049;
var G__38063 = count__37814_38050;
var G__38064 = (i__37815_38052 + (1));
seq__37812_38048 = G__38061;
chunk__37813_38049 = G__38062;
count__37814_38050 = G__38063;
i__37815_38052 = G__38064;
continue;
} else {
var temp__5735__auto___38065 = cljs.core.seq(seq__37812_38048);
if(temp__5735__auto___38065){
var seq__37812_38067__$1 = temp__5735__auto___38065;
if(cljs.core.chunked_seq_QMARK_(seq__37812_38067__$1)){
var c__4609__auto___38068 = cljs.core.chunk_first(seq__37812_38067__$1);
var G__38070 = cljs.core.chunk_rest(seq__37812_38067__$1);
var G__38071 = c__4609__auto___38068;
var G__38072 = cljs.core.count(c__4609__auto___38068);
var G__38073 = (0);
seq__37812_38048 = G__38070;
chunk__37813_38049 = G__38071;
count__37814_38050 = G__38072;
i__37815_38052 = G__38073;
continue;
} else {
var map__37826_38074 = cljs.core.first(seq__37812_38067__$1);
var map__37826_38075__$1 = (((((!((map__37826_38074 == null))))?(((((map__37826_38074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37826_38074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37826_38074):map__37826_38074);
var w_38076 = map__37826_38075__$1;
var msg_38077__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37826_38075__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37826_38075__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37826_38075__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37826_38075__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38080)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38078),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38079),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38077__$1)].join(''));


var G__38083 = cljs.core.next(seq__37812_38067__$1);
var G__38084 = null;
var G__38085 = (0);
var G__38086 = (0);
seq__37812_38048 = G__38083;
chunk__37813_38049 = G__38084;
count__37814_38050 = G__38085;
i__37815_38052 = G__38086;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__37832){
var map__37833 = p__37832;
var map__37833__$1 = (((((!((map__37833 == null))))?(((((map__37833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37833):map__37833);
var src = map__37833__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37833__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37833__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37836){
var map__37837 = p__37836;
var map__37837__$1 = (((((!((map__37837 == null))))?(((((map__37837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37837):map__37837);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37837__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__37839){
var map__37840 = p__37839;
var map__37840__$1 = (((((!((map__37840 == null))))?(((((map__37840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37840):map__37840);
var rc = map__37840__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37840__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__37785_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37785_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37870){
var map__37872 = p__37870;
var map__37872__$1 = (((((!((map__37872 == null))))?(((((map__37872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37872):map__37872);
var msg = map__37872__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37872__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37879 = cljs.core.seq(updates);
var chunk__37881 = null;
var count__37882 = (0);
var i__37883 = (0);
while(true){
if((i__37883 < count__37882)){
var path = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__37881,i__37883);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37936_38101 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37939_38102 = null;
var count__37940_38103 = (0);
var i__37941_38104 = (0);
while(true){
if((i__37941_38104 < count__37940_38103)){
var node_38105 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__37939_38102,i__37941_38104);
var path_match_38106 = shadow.cljs.devtools.client.browser.match_paths(node_38105.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38106)){
var new_link_38107 = (function (){var G__37946 = node_38105.cloneNode(true);
G__37946.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38106),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37946;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38106], 0));

goog.dom.insertSiblingAfter(new_link_38107,node_38105);

goog.dom.removeNode(node_38105);


var G__38108 = seq__37936_38101;
var G__38109 = chunk__37939_38102;
var G__38110 = count__37940_38103;
var G__38111 = (i__37941_38104 + (1));
seq__37936_38101 = G__38108;
chunk__37939_38102 = G__38109;
count__37940_38103 = G__38110;
i__37941_38104 = G__38111;
continue;
} else {
var G__38112 = seq__37936_38101;
var G__38113 = chunk__37939_38102;
var G__38114 = count__37940_38103;
var G__38115 = (i__37941_38104 + (1));
seq__37936_38101 = G__38112;
chunk__37939_38102 = G__38113;
count__37940_38103 = G__38114;
i__37941_38104 = G__38115;
continue;
}
} else {
var temp__5735__auto___38116 = cljs.core.seq(seq__37936_38101);
if(temp__5735__auto___38116){
var seq__37936_38117__$1 = temp__5735__auto___38116;
if(cljs.core.chunked_seq_QMARK_(seq__37936_38117__$1)){
var c__4609__auto___38118 = cljs.core.chunk_first(seq__37936_38117__$1);
var G__38119 = cljs.core.chunk_rest(seq__37936_38117__$1);
var G__38120 = c__4609__auto___38118;
var G__38121 = cljs.core.count(c__4609__auto___38118);
var G__38122 = (0);
seq__37936_38101 = G__38119;
chunk__37939_38102 = G__38120;
count__37940_38103 = G__38121;
i__37941_38104 = G__38122;
continue;
} else {
var node_38124 = cljs.core.first(seq__37936_38117__$1);
var path_match_38126 = shadow.cljs.devtools.client.browser.match_paths(node_38124.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38126)){
var new_link_38127 = (function (){var G__37949 = node_38124.cloneNode(true);
G__37949.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38126),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37949;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38126], 0));

goog.dom.insertSiblingAfter(new_link_38127,node_38124);

goog.dom.removeNode(node_38124);


var G__38129 = cljs.core.next(seq__37936_38117__$1);
var G__38130 = null;
var G__38131 = (0);
var G__38132 = (0);
seq__37936_38101 = G__38129;
chunk__37939_38102 = G__38130;
count__37940_38103 = G__38131;
i__37941_38104 = G__38132;
continue;
} else {
var G__38133 = cljs.core.next(seq__37936_38117__$1);
var G__38134 = null;
var G__38135 = (0);
var G__38136 = (0);
seq__37936_38101 = G__38133;
chunk__37939_38102 = G__38134;
count__37940_38103 = G__38135;
i__37941_38104 = G__38136;
continue;
}
}
} else {
}
}
break;
}


var G__38137 = seq__37879;
var G__38138 = chunk__37881;
var G__38139 = count__37882;
var G__38140 = (i__37883 + (1));
seq__37879 = G__38137;
chunk__37881 = G__38138;
count__37882 = G__38139;
i__37883 = G__38140;
continue;
} else {
var G__38141 = seq__37879;
var G__38142 = chunk__37881;
var G__38143 = count__37882;
var G__38144 = (i__37883 + (1));
seq__37879 = G__38141;
chunk__37881 = G__38142;
count__37882 = G__38143;
i__37883 = G__38144;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37879);
if(temp__5735__auto__){
var seq__37879__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37879__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37879__$1);
var G__38146 = cljs.core.chunk_rest(seq__37879__$1);
var G__38147 = c__4609__auto__;
var G__38148 = cljs.core.count(c__4609__auto__);
var G__38149 = (0);
seq__37879 = G__38146;
chunk__37881 = G__38147;
count__37882 = G__38148;
i__37883 = G__38149;
continue;
} else {
var path = cljs.core.first(seq__37879__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37950_38150 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37953_38151 = null;
var count__37954_38152 = (0);
var i__37955_38153 = (0);
while(true){
if((i__37955_38153 < count__37954_38152)){
var node_38154 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__37953_38151,i__37955_38153);
var path_match_38155 = shadow.cljs.devtools.client.browser.match_paths(node_38154.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38155)){
var new_link_38156 = (function (){var G__37960 = node_38154.cloneNode(true);
G__37960.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38155),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37960;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38155], 0));

goog.dom.insertSiblingAfter(new_link_38156,node_38154);

goog.dom.removeNode(node_38154);


var G__38159 = seq__37950_38150;
var G__38160 = chunk__37953_38151;
var G__38161 = count__37954_38152;
var G__38162 = (i__37955_38153 + (1));
seq__37950_38150 = G__38159;
chunk__37953_38151 = G__38160;
count__37954_38152 = G__38161;
i__37955_38153 = G__38162;
continue;
} else {
var G__38166 = seq__37950_38150;
var G__38167 = chunk__37953_38151;
var G__38168 = count__37954_38152;
var G__38169 = (i__37955_38153 + (1));
seq__37950_38150 = G__38166;
chunk__37953_38151 = G__38167;
count__37954_38152 = G__38168;
i__37955_38153 = G__38169;
continue;
}
} else {
var temp__5735__auto___38170__$1 = cljs.core.seq(seq__37950_38150);
if(temp__5735__auto___38170__$1){
var seq__37950_38171__$1 = temp__5735__auto___38170__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37950_38171__$1)){
var c__4609__auto___38172 = cljs.core.chunk_first(seq__37950_38171__$1);
var G__38173 = cljs.core.chunk_rest(seq__37950_38171__$1);
var G__38174 = c__4609__auto___38172;
var G__38175 = cljs.core.count(c__4609__auto___38172);
var G__38176 = (0);
seq__37950_38150 = G__38173;
chunk__37953_38151 = G__38174;
count__37954_38152 = G__38175;
i__37955_38153 = G__38176;
continue;
} else {
var node_38177 = cljs.core.first(seq__37950_38171__$1);
var path_match_38178 = shadow.cljs.devtools.client.browser.match_paths(node_38177.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38178)){
var new_link_38179 = (function (){var G__37961 = node_38177.cloneNode(true);
G__37961.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38178),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37961;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38178], 0));

goog.dom.insertSiblingAfter(new_link_38179,node_38177);

goog.dom.removeNode(node_38177);


var G__38180 = cljs.core.next(seq__37950_38171__$1);
var G__38181 = null;
var G__38182 = (0);
var G__38183 = (0);
seq__37950_38150 = G__38180;
chunk__37953_38151 = G__38181;
count__37954_38152 = G__38182;
i__37955_38153 = G__38183;
continue;
} else {
var G__38184 = cljs.core.next(seq__37950_38171__$1);
var G__38185 = null;
var G__38186 = (0);
var G__38187 = (0);
seq__37950_38150 = G__38184;
chunk__37953_38151 = G__38185;
count__37954_38152 = G__38186;
i__37955_38153 = G__38187;
continue;
}
}
} else {
}
}
break;
}


var G__38188 = cljs.core.next(seq__37879__$1);
var G__38189 = null;
var G__38190 = (0);
var G__38191 = (0);
seq__37879 = G__38188;
chunk__37881 = G__38189;
count__37882 = G__38190;
i__37883 = G__38191;
continue;
} else {
var G__38192 = cljs.core.next(seq__37879__$1);
var G__38193 = null;
var G__38194 = (0);
var G__38195 = (0);
seq__37879 = G__38192;
chunk__37881 = G__38193;
count__37882 = G__38194;
i__37883 = G__38195;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37962){
var map__37963 = p__37962;
var map__37963__$1 = (((((!((map__37963 == null))))?(((((map__37963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37963):map__37963);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37967,done){
var map__37968 = p__37967;
var map__37968__$1 = (((((!((map__37968 == null))))?(((((map__37968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37968):map__37968);
var msg = map__37968__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37968__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37968__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37968__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37968__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37970){
var map__37971 = p__37970;
var map__37971__$1 = (((((!((map__37971 == null))))?(((((map__37971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37971):map__37971);
var src = map__37971__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37971__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e37973){var e = e37973;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37974,done){
var map__37975 = p__37974;
var map__37975__$1 = (((((!((map__37975 == null))))?(((((map__37975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37975):map__37975);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37981){
var map__37982 = p__37981;
var map__37982__$1 = (((((!((map__37982 == null))))?(((((map__37982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37982):map__37982);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37984,done){
var map__37985 = p__37984;
var map__37985__$1 = (((((!((map__37985 == null))))?(((((map__37985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37985):map__37985);
var msg = map__37985__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37985__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37989_38200 = type;
var G__37989_38201__$1 = (((G__37989_38200 instanceof cljs.core.Keyword))?G__37989_38200.fqn:null);
switch (G__37989_38201__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__37990 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37991 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__37992 = "POST";
var G__37993 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37994 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37990,G__37991,G__37992,G__37993,G__37994);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e37997){var e = e37997;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___38203 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___38203)){
var s_38204 = temp__5735__auto___38203;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_38204.onclose = (function (e){
return null;
}));

s_38204.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
