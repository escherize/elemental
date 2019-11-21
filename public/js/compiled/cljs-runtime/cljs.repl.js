goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31848){
var map__31852 = p__31848;
var map__31852__$1 = (((((!((map__31852 == null))))?(((((map__31852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31852):map__31852);
var m = map__31852__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31852__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31852__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31863_32130 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31864_32131 = null;
var count__31865_32132 = (0);
var i__31866_32133 = (0);
while(true){
if((i__31866_32133 < count__31865_32132)){
var f_32134 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__31864_32131,i__31866_32133);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32134], 0));


var G__32135 = seq__31863_32130;
var G__32136 = chunk__31864_32131;
var G__32137 = count__31865_32132;
var G__32138 = (i__31866_32133 + (1));
seq__31863_32130 = G__32135;
chunk__31864_32131 = G__32136;
count__31865_32132 = G__32137;
i__31866_32133 = G__32138;
continue;
} else {
var temp__5735__auto___32139 = cljs.core.seq(seq__31863_32130);
if(temp__5735__auto___32139){
var seq__31863_32140__$1 = temp__5735__auto___32139;
if(cljs.core.chunked_seq_QMARK_(seq__31863_32140__$1)){
var c__4609__auto___32141 = cljs.core.chunk_first(seq__31863_32140__$1);
var G__32146 = cljs.core.chunk_rest(seq__31863_32140__$1);
var G__32147 = c__4609__auto___32141;
var G__32148 = cljs.core.count(c__4609__auto___32141);
var G__32149 = (0);
seq__31863_32130 = G__32146;
chunk__31864_32131 = G__32147;
count__31865_32132 = G__32148;
i__31866_32133 = G__32149;
continue;
} else {
var f_32150 = cljs.core.first(seq__31863_32140__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32150], 0));


var G__32151 = cljs.core.next(seq__31863_32140__$1);
var G__32152 = null;
var G__32153 = (0);
var G__32154 = (0);
seq__31863_32130 = G__32151;
chunk__31864_32131 = G__32152;
count__31865_32132 = G__32153;
i__31866_32133 = G__32154;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32155 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_32155], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_32155)))?cljs.core.second(arglists_32155):arglists_32155)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31870_32156 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31871_32157 = null;
var count__31872_32158 = (0);
var i__31873_32159 = (0);
while(true){
if((i__31873_32159 < count__31872_32158)){
var vec__31889_32161 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__31871_32157,i__31873_32159);
var name_32162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31889_32161,(0),null);
var map__31892_32163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31889_32161,(1),null);
var map__31892_32164__$1 = (((((!((map__31892_32163 == null))))?(((((map__31892_32163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31892_32163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31892_32163):map__31892_32163);
var doc_32165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31892_32164__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31892_32164__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32162], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32166], 0));

if(cljs.core.truth_(doc_32165)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32165], 0));
} else {
}


var G__32167 = seq__31870_32156;
var G__32168 = chunk__31871_32157;
var G__32169 = count__31872_32158;
var G__32170 = (i__31873_32159 + (1));
seq__31870_32156 = G__32167;
chunk__31871_32157 = G__32168;
count__31872_32158 = G__32169;
i__31873_32159 = G__32170;
continue;
} else {
var temp__5735__auto___32171 = cljs.core.seq(seq__31870_32156);
if(temp__5735__auto___32171){
var seq__31870_32173__$1 = temp__5735__auto___32171;
if(cljs.core.chunked_seq_QMARK_(seq__31870_32173__$1)){
var c__4609__auto___32174 = cljs.core.chunk_first(seq__31870_32173__$1);
var G__32179 = cljs.core.chunk_rest(seq__31870_32173__$1);
var G__32180 = c__4609__auto___32174;
var G__32181 = cljs.core.count(c__4609__auto___32174);
var G__32182 = (0);
seq__31870_32156 = G__32179;
chunk__31871_32157 = G__32180;
count__31872_32158 = G__32181;
i__31873_32159 = G__32182;
continue;
} else {
var vec__31895_32183 = cljs.core.first(seq__31870_32173__$1);
var name_32184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31895_32183,(0),null);
var map__31898_32185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31895_32183,(1),null);
var map__31898_32186__$1 = (((((!((map__31898_32185 == null))))?(((((map__31898_32185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31898_32185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31898_32185):map__31898_32185);
var doc_32187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31898_32186__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31898_32186__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32184], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32188], 0));

if(cljs.core.truth_(doc_32187)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32187], 0));
} else {
}


var G__32190 = cljs.core.next(seq__31870_32173__$1);
var G__32191 = null;
var G__32192 = (0);
var G__32193 = (0);
seq__31870_32156 = G__32190;
chunk__31871_32157 = G__32191;
count__31872_32158 = G__32192;
i__31873_32159 = G__32193;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31900 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31901 = null;
var count__31902 = (0);
var i__31903 = (0);
while(true){
if((i__31903 < count__31902)){
var role = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__31901,i__31903);
var temp__5735__auto___32194__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32194__$1)){
var spec_32195 = temp__5735__auto___32194__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32195)], 0));
} else {
}


var G__32196 = seq__31900;
var G__32197 = chunk__31901;
var G__32198 = count__31902;
var G__32199 = (i__31903 + (1));
seq__31900 = G__32196;
chunk__31901 = G__32197;
count__31902 = G__32198;
i__31903 = G__32199;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__31900);
if(temp__5735__auto____$1){
var seq__31900__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31900__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__31900__$1);
var G__32200 = cljs.core.chunk_rest(seq__31900__$1);
var G__32201 = c__4609__auto__;
var G__32202 = cljs.core.count(c__4609__auto__);
var G__32203 = (0);
seq__31900 = G__32200;
chunk__31901 = G__32201;
count__31902 = G__32202;
i__31903 = G__32203;
continue;
} else {
var role = cljs.core.first(seq__31900__$1);
var temp__5735__auto___32204__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32204__$2)){
var spec_32205 = temp__5735__auto___32204__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32205)], 0));
} else {
}


var G__32206 = cljs.core.next(seq__31900__$1);
var G__32207 = null;
var G__32208 = (0);
var G__32209 = (0);
seq__31900 = G__32206;
chunk__31901 = G__32207;
count__31902 = G__32208;
i__31903 = G__32209;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__32211 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__32212 = cljs.core.ex_cause(t);
via = G__32211;
t = G__32212;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31929 = datafied_throwable;
var map__31929__$1 = (((((!((map__31929 == null))))?(((((map__31929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31929):map__31929);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31929__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31929__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31929__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31930 = cljs.core.last(via);
var map__31930__$1 = (((((!((map__31930 == null))))?(((((map__31930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31930):map__31930);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31930__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31930__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31930__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31931 = data;
var map__31931__$1 = (((((!((map__31931 == null))))?(((((map__31931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31931):map__31931);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31931__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31931__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31931__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31932 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31932__$1 = (((((!((map__31932 == null))))?(((((map__31932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31932):map__31932);
var top_data = map__31932__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31932__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31937 = phase;
var G__31937__$1 = (((G__31937 instanceof cljs.core.Keyword))?G__31937.fqn:null);
switch (G__31937__$1) {
case "read-source":
var map__31938 = data;
var map__31938__$1 = (((((!((map__31938 == null))))?(((((map__31938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31938):map__31938);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31938__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31938__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31940 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31940__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31940,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31940);
var G__31940__$2 = (cljs.core.truth_((function (){var fexpr__31941 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31941.cljs$core$IFn$_invoke$arity$1 ? fexpr__31941.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31941.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31940__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31940__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31940__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31940__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31942 = top_data;
var G__31942__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31942,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31942);
var G__31942__$2 = (cljs.core.truth_((function (){var fexpr__31943 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31943.cljs$core$IFn$_invoke$arity$1 ? fexpr__31943.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31943.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31942__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31942__$1);
var G__31942__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31942__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31942__$2);
var G__31942__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31942__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31942__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31942__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31942__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31954 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31954,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31954,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31954,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31954,(3),null);
var G__31967 = top_data;
var G__31967__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31967,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31967);
var G__31967__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31967__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31967__$1);
var G__31967__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31967__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31967__$2);
var G__31967__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31967__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31967__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31967__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31967__$4;
}

break;
case "execution":
var vec__31991 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31991,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31991,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31991,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31991,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31911_SHARP_){
var or__4185__auto__ = (p1__31911_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__32010 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32010.cljs$core$IFn$_invoke$arity$1 ? fexpr__32010.cljs$core$IFn$_invoke$arity$1(p1__31911_SHARP_) : fexpr__32010.call(null,p1__31911_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__32023 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32023__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32023,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32023);
var G__32023__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32023__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32023__$1);
var G__32023__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32023__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32023__$2);
var G__32023__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32023__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32023__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32023__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32023__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31937__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32054){
var map__32055 = p__32054;
var map__32055__$1 = (((((!((map__32055 == null))))?(((((map__32055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32055):map__32055);
var triage_data = map__32055__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32055__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32055__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32055__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32055__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32055__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32055__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32055__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32055__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__32065 = phase;
var G__32065__$1 = (((G__32065 instanceof cljs.core.Keyword))?G__32065.fqn:null);
switch (G__32065__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__32070 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__32071 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32072 = loc;
var G__32073 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32081_32234 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32082_32235 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32083_32236 = true;
var _STAR_print_fn_STAR__temp_val__32084_32237 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32083_32236);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32084_32237);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32052_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32052_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32082_32235);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32081_32234);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__32070,G__32071,G__32072,G__32073) : format.call(null,G__32070,G__32071,G__32072,G__32073));

break;
case "macroexpansion":
var G__32092 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__32093 = cause_type;
var G__32094 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32095 = loc;
var G__32096 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32092,G__32093,G__32094,G__32095,G__32096) : format.call(null,G__32092,G__32093,G__32094,G__32095,G__32096));

break;
case "compile-syntax-check":
var G__32101 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__32102 = cause_type;
var G__32103 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32104 = loc;
var G__32105 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32101,G__32102,G__32103,G__32104,G__32105) : format.call(null,G__32101,G__32102,G__32103,G__32104,G__32105));

break;
case "compilation":
var G__32106 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__32107 = cause_type;
var G__32108 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32109 = loc;
var G__32110 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32106,G__32107,G__32108,G__32109,G__32110) : format.call(null,G__32106,G__32107,G__32108,G__32109,G__32110));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__32111 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__32112 = symbol;
var G__32113 = loc;
var G__32114 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32119_32244 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32120_32245 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32121_32246 = true;
var _STAR_print_fn_STAR__temp_val__32122_32247 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32121_32246);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32122_32247);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32053_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32053_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32120_32245);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32119_32244);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__32111,G__32112,G__32113,G__32114) : format.call(null,G__32111,G__32112,G__32113,G__32114));
} else {
var G__32123 = "Execution error%s at %s(%s).\n%s\n";
var G__32124 = cause_type;
var G__32125 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32126 = loc;
var G__32127 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32123,G__32124,G__32125,G__32126,G__32127) : format.call(null,G__32123,G__32124,G__32125,G__32126,G__32127));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32065__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
