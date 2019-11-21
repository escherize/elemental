goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33820 = arguments.length;
switch (G__33820) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33821 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33821 = (function (f,blockable,meta33822){
this.f = f;
this.blockable = blockable;
this.meta33822 = meta33822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33823,meta33822__$1){
var self__ = this;
var _33823__$1 = this;
return (new cljs.core.async.t_cljs$core$async33821(self__.f,self__.blockable,meta33822__$1));
}));

(cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33823){
var self__ = this;
var _33823__$1 = this;
return self__.meta33822;
}));

(cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33821.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33822","meta33822",334043475,null)], null);
}));

(cljs.core.async.t_cljs$core$async33821.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33821");

(cljs.core.async.t_cljs$core$async33821.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33821");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33821.
 */
cljs.core.async.__GT_t_cljs$core$async33821 = (function cljs$core$async$__GT_t_cljs$core$async33821(f__$1,blockable__$1,meta33822){
return (new cljs.core.async.t_cljs$core$async33821(f__$1,blockable__$1,meta33822));
});

}

return (new cljs.core.async.t_cljs$core$async33821(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33826 = arguments.length;
switch (G__33826) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33828 = arguments.length;
switch (G__33828) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33830 = arguments.length;
switch (G__33830) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35266 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35266) : fn1.call(null,val_35266));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35266) : fn1.call(null,val_35266));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33832 = arguments.length;
switch (G__33832) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___35281 = n;
var x_35282 = (0);
while(true){
if((x_35282 < n__4666__auto___35281)){
(a[x_35282] = x_35282);

var G__35284 = (x_35282 + (1));
x_35282 = G__35284;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33833 = (function (flag,meta33834){
this.flag = flag;
this.meta33834 = meta33834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33835,meta33834__$1){
var self__ = this;
var _33835__$1 = this;
return (new cljs.core.async.t_cljs$core$async33833(self__.flag,meta33834__$1));
}));

(cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33835){
var self__ = this;
var _33835__$1 = this;
return self__.meta33834;
}));

(cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33834","meta33834",-1800136879,null)], null);
}));

(cljs.core.async.t_cljs$core$async33833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33833");

(cljs.core.async.t_cljs$core$async33833.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33833.
 */
cljs.core.async.__GT_t_cljs$core$async33833 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33833(flag__$1,meta33834){
return (new cljs.core.async.t_cljs$core$async33833(flag__$1,meta33834));
});

}

return (new cljs.core.async.t_cljs$core$async33833(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33836 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33836 = (function (flag,cb,meta33837){
this.flag = flag;
this.cb = cb;
this.meta33837 = meta33837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33838,meta33837__$1){
var self__ = this;
var _33838__$1 = this;
return (new cljs.core.async.t_cljs$core$async33836(self__.flag,self__.cb,meta33837__$1));
}));

(cljs.core.async.t_cljs$core$async33836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33838){
var self__ = this;
var _33838__$1 = this;
return self__.meta33837;
}));

(cljs.core.async.t_cljs$core$async33836.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33836.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33837","meta33837",814692588,null)], null);
}));

(cljs.core.async.t_cljs$core$async33836.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33836");

(cljs.core.async.t_cljs$core$async33836.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async33836");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33836.
 */
cljs.core.async.__GT_t_cljs$core$async33836 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33836(flag__$1,cb__$1,meta33837){
return (new cljs.core.async.t_cljs$core$async33836(flag__$1,cb__$1,meta33837));
});

}

return (new cljs.core.async.t_cljs$core$async33836(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33839_SHARP_){
var G__33841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33839_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33841) : fret.call(null,G__33841));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33840_SHARP_){
var G__33842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33840_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33842) : fret.call(null,G__33842));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35307 = (i + (1));
i = G__35307;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35310 = arguments.length;
var i__4790__auto___35312 = (0);
while(true){
if((i__4790__auto___35312 < len__4789__auto___35310)){
args__4795__auto__.push((arguments[i__4790__auto___35312]));

var G__35313 = (i__4790__auto___35312 + (1));
i__4790__auto___35312 = G__35313;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33845){
var map__33846 = p__33845;
var map__33846__$1 = (((((!((map__33846 == null))))?(((((map__33846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33846):map__33846);
var opts = map__33846__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33843){
var G__33844 = cljs.core.first(seq33843);
var seq33843__$1 = cljs.core.next(seq33843);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33844,seq33843__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33849 = arguments.length;
switch (G__33849) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33757__auto___35325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_33873){
var state_val_33874 = (state_33873[(1)]);
if((state_val_33874 === (7))){
var inst_33869 = (state_33873[(2)]);
var state_33873__$1 = state_33873;
var statearr_33875_35326 = state_33873__$1;
(statearr_33875_35326[(2)] = inst_33869);

(statearr_33875_35326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33874 === (1))){
var state_33873__$1 = state_33873;
var statearr_33876_35327 = state_33873__$1;
(statearr_33876_35327[(2)] = null);

(statearr_33876_35327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33874 === (4))){
var inst_33852 = (state_33873[(7)]);
var inst_33852__$1 = (state_33873[(2)]);
var inst_33853 = (inst_33852__$1 == null);
var state_33873__$1 = (function (){var statearr_33877 = state_33873;
(statearr_33877[(7)] = inst_33852__$1);

return statearr_33877;
})();
if(cljs.core.truth_(inst_33853)){
var statearr_33878_35331 = state_33873__$1;
(statearr_33878_35331[(1)] = (5));

} else {
var statearr_33879_35333 = state_33873__$1;
(statearr_33879_35333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33874 === (13))){
var state_33873__$1 = state_33873;
var statearr_33880_35335 = state_33873__$1;
(statearr_33880_35335[(2)] = null);

(statearr_33880_35335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33874 === (6))){
var inst_33852 = (state_33873[(7)]);
var state_33873__$1 = state_33873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33873__$1,(11),to,inst_33852);
} else {
if((state_val_33874 === (3))){
var inst_33871 = (state_33873[(2)]);
var state_33873__$1 = state_33873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33873__$1,inst_33871);
} else {
if((state_val_33874 === (12))){
var state_33873__$1 = state_33873;
var statearr_33881_35339 = state_33873__$1;
(statearr_33881_35339[(2)] = null);

(statearr_33881_35339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33874 === (2))){
var state_33873__$1 = state_33873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33873__$1,(4),from);
} else {
if((state_val_33874 === (11))){
var inst_33862 = (state_33873[(2)]);
var state_33873__$1 = state_33873;
if(cljs.core.truth_(inst_33862)){
var statearr_33882_35340 = state_33873__$1;
(statearr_33882_35340[(1)] = (12));

} else {
var statearr_33883_35341 = state_33873__$1;
(statearr_33883_35341[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33874 === (9))){
var state_33873__$1 = state_33873;
var statearr_33884_35342 = state_33873__$1;
(statearr_33884_35342[(2)] = null);

(statearr_33884_35342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33874 === (5))){
var state_33873__$1 = state_33873;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33885_35344 = state_33873__$1;
(statearr_33885_35344[(1)] = (8));

} else {
var statearr_33886_35345 = state_33873__$1;
(statearr_33886_35345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33874 === (14))){
var inst_33867 = (state_33873[(2)]);
var state_33873__$1 = state_33873;
var statearr_33887_35348 = state_33873__$1;
(statearr_33887_35348[(2)] = inst_33867);

(statearr_33887_35348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33874 === (10))){
var inst_33859 = (state_33873[(2)]);
var state_33873__$1 = state_33873;
var statearr_33888_35350 = state_33873__$1;
(statearr_33888_35350[(2)] = inst_33859);

(statearr_33888_35350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33874 === (8))){
var inst_33856 = cljs.core.async.close_BANG_(to);
var state_33873__$1 = state_33873;
var statearr_33889_35351 = state_33873__$1;
(statearr_33889_35351[(2)] = inst_33856);

(statearr_33889_35351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33587__auto__ = null;
var cljs$core$async$state_machine__33587__auto____0 = (function (){
var statearr_33890 = [null,null,null,null,null,null,null,null];
(statearr_33890[(0)] = cljs$core$async$state_machine__33587__auto__);

(statearr_33890[(1)] = (1));

return statearr_33890;
});
var cljs$core$async$state_machine__33587__auto____1 = (function (state_33873){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_33873);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e33891){if((e33891 instanceof Object)){
var ex__33590__auto__ = e33891;
var statearr_33892_35363 = state_33873;
(statearr_33892_35363[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33891;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35367 = state_33873;
state_33873 = G__35367;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$state_machine__33587__auto__ = function(state_33873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33587__auto____1.call(this,state_33873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33587__auto____0;
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33587__auto____1;
return cljs$core$async$state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_33893 = f__33758__auto__();
(statearr_33893[(6)] = c__33757__auto___35325);

return statearr_33893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33894){
var vec__33895 = p__33894;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33895,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33895,(1),null);
var job = vec__33895;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33757__auto___35372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_33902){
var state_val_33903 = (state_33902[(1)]);
if((state_val_33903 === (1))){
var state_33902__$1 = state_33902;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33902__$1,(2),res,v);
} else {
if((state_val_33903 === (2))){
var inst_33899 = (state_33902[(2)]);
var inst_33900 = cljs.core.async.close_BANG_(res);
var state_33902__$1 = (function (){var statearr_33904 = state_33902;
(statearr_33904[(7)] = inst_33899);

return statearr_33904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33902__$1,inst_33900);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____0 = (function (){
var statearr_33905 = [null,null,null,null,null,null,null,null];
(statearr_33905[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__);

(statearr_33905[(1)] = (1));

return statearr_33905;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____1 = (function (state_33902){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_33902);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e33906){if((e33906 instanceof Object)){
var ex__33590__auto__ = e33906;
var statearr_33907_35373 = state_33902;
(statearr_33907_35373[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33906;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35374 = state_33902;
state_33902 = G__35374;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__ = function(state_33902){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____1.call(this,state_33902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_33908 = f__33758__auto__();
(statearr_33908[(6)] = c__33757__auto___35372);

return statearr_33908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33909){
var vec__33910 = p__33909;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33910,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33910,(1),null);
var job = vec__33910;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___35375 = n;
var __35376 = (0);
while(true){
if((__35376 < n__4666__auto___35375)){
var G__33913_35377 = type;
var G__33913_35378__$1 = (((G__33913_35377 instanceof cljs.core.Keyword))?G__33913_35377.fqn:null);
switch (G__33913_35378__$1) {
case "compute":
var c__33757__auto___35380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35376,c__33757__auto___35380,G__33913_35377,G__33913_35378__$1,n__4666__auto___35375,jobs,results,process,async){
return (function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = ((function (__35376,c__33757__auto___35380,G__33913_35377,G__33913_35378__$1,n__4666__auto___35375,jobs,results,process,async){
return (function (state_33926){
var state_val_33927 = (state_33926[(1)]);
if((state_val_33927 === (1))){
var state_33926__$1 = state_33926;
var statearr_33928_35383 = state_33926__$1;
(statearr_33928_35383[(2)] = null);

(statearr_33928_35383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (2))){
var state_33926__$1 = state_33926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33926__$1,(4),jobs);
} else {
if((state_val_33927 === (3))){
var inst_33924 = (state_33926[(2)]);
var state_33926__$1 = state_33926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33926__$1,inst_33924);
} else {
if((state_val_33927 === (4))){
var inst_33916 = (state_33926[(2)]);
var inst_33917 = process(inst_33916);
var state_33926__$1 = state_33926;
if(cljs.core.truth_(inst_33917)){
var statearr_33929_35384 = state_33926__$1;
(statearr_33929_35384[(1)] = (5));

} else {
var statearr_33930_35385 = state_33926__$1;
(statearr_33930_35385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (5))){
var state_33926__$1 = state_33926;
var statearr_33931_35386 = state_33926__$1;
(statearr_33931_35386[(2)] = null);

(statearr_33931_35386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (6))){
var state_33926__$1 = state_33926;
var statearr_33932_35387 = state_33926__$1;
(statearr_33932_35387[(2)] = null);

(statearr_33932_35387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33927 === (7))){
var inst_33922 = (state_33926[(2)]);
var state_33926__$1 = state_33926;
var statearr_33933_35389 = state_33926__$1;
(statearr_33933_35389[(2)] = inst_33922);

(statearr_33933_35389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35376,c__33757__auto___35380,G__33913_35377,G__33913_35378__$1,n__4666__auto___35375,jobs,results,process,async))
;
return ((function (__35376,switch__33586__auto__,c__33757__auto___35380,G__33913_35377,G__33913_35378__$1,n__4666__auto___35375,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____0 = (function (){
var statearr_33934 = [null,null,null,null,null,null,null];
(statearr_33934[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__);

(statearr_33934[(1)] = (1));

return statearr_33934;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____1 = (function (state_33926){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_33926);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e33935){if((e33935 instanceof Object)){
var ex__33590__auto__ = e33935;
var statearr_33936_35393 = state_33926;
(statearr_33936_35393[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33935;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35395 = state_33926;
state_33926 = G__35395;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__ = function(state_33926){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____1.call(this,state_33926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__;
})()
;})(__35376,switch__33586__auto__,c__33757__auto___35380,G__33913_35377,G__33913_35378__$1,n__4666__auto___35375,jobs,results,process,async))
})();
var state__33759__auto__ = (function (){var statearr_33937 = f__33758__auto__();
(statearr_33937[(6)] = c__33757__auto___35380);

return statearr_33937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
});})(__35376,c__33757__auto___35380,G__33913_35377,G__33913_35378__$1,n__4666__auto___35375,jobs,results,process,async))
);


break;
case "async":
var c__33757__auto___35397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35376,c__33757__auto___35397,G__33913_35377,G__33913_35378__$1,n__4666__auto___35375,jobs,results,process,async){
return (function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = ((function (__35376,c__33757__auto___35397,G__33913_35377,G__33913_35378__$1,n__4666__auto___35375,jobs,results,process,async){
return (function (state_33950){
var state_val_33951 = (state_33950[(1)]);
if((state_val_33951 === (1))){
var state_33950__$1 = state_33950;
var statearr_33952_35399 = state_33950__$1;
(statearr_33952_35399[(2)] = null);

(statearr_33952_35399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (2))){
var state_33950__$1 = state_33950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33950__$1,(4),jobs);
} else {
if((state_val_33951 === (3))){
var inst_33948 = (state_33950[(2)]);
var state_33950__$1 = state_33950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33950__$1,inst_33948);
} else {
if((state_val_33951 === (4))){
var inst_33940 = (state_33950[(2)]);
var inst_33941 = async(inst_33940);
var state_33950__$1 = state_33950;
if(cljs.core.truth_(inst_33941)){
var statearr_33953_35401 = state_33950__$1;
(statearr_33953_35401[(1)] = (5));

} else {
var statearr_33954_35402 = state_33950__$1;
(statearr_33954_35402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (5))){
var state_33950__$1 = state_33950;
var statearr_33955_35403 = state_33950__$1;
(statearr_33955_35403[(2)] = null);

(statearr_33955_35403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (6))){
var state_33950__$1 = state_33950;
var statearr_33956_35404 = state_33950__$1;
(statearr_33956_35404[(2)] = null);

(statearr_33956_35404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33951 === (7))){
var inst_33946 = (state_33950[(2)]);
var state_33950__$1 = state_33950;
var statearr_33957_35409 = state_33950__$1;
(statearr_33957_35409[(2)] = inst_33946);

(statearr_33957_35409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35376,c__33757__auto___35397,G__33913_35377,G__33913_35378__$1,n__4666__auto___35375,jobs,results,process,async))
;
return ((function (__35376,switch__33586__auto__,c__33757__auto___35397,G__33913_35377,G__33913_35378__$1,n__4666__auto___35375,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____0 = (function (){
var statearr_33958 = [null,null,null,null,null,null,null];
(statearr_33958[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__);

(statearr_33958[(1)] = (1));

return statearr_33958;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____1 = (function (state_33950){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_33950);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e33959){if((e33959 instanceof Object)){
var ex__33590__auto__ = e33959;
var statearr_33960_35412 = state_33950;
(statearr_33960_35412[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35416 = state_33950;
state_33950 = G__35416;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__ = function(state_33950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____1.call(this,state_33950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__;
})()
;})(__35376,switch__33586__auto__,c__33757__auto___35397,G__33913_35377,G__33913_35378__$1,n__4666__auto___35375,jobs,results,process,async))
})();
var state__33759__auto__ = (function (){var statearr_33961 = f__33758__auto__();
(statearr_33961[(6)] = c__33757__auto___35397);

return statearr_33961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
});})(__35376,c__33757__auto___35397,G__33913_35377,G__33913_35378__$1,n__4666__auto___35375,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33913_35378__$1)].join('')));

}

var G__35417 = (__35376 + (1));
__35376 = G__35417;
continue;
} else {
}
break;
}

var c__33757__auto___35419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_33983){
var state_val_33984 = (state_33983[(1)]);
if((state_val_33984 === (7))){
var inst_33979 = (state_33983[(2)]);
var state_33983__$1 = state_33983;
var statearr_33985_35421 = state_33983__$1;
(statearr_33985_35421[(2)] = inst_33979);

(statearr_33985_35421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (1))){
var state_33983__$1 = state_33983;
var statearr_33986_35422 = state_33983__$1;
(statearr_33986_35422[(2)] = null);

(statearr_33986_35422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (4))){
var inst_33964 = (state_33983[(7)]);
var inst_33964__$1 = (state_33983[(2)]);
var inst_33965 = (inst_33964__$1 == null);
var state_33983__$1 = (function (){var statearr_33987 = state_33983;
(statearr_33987[(7)] = inst_33964__$1);

return statearr_33987;
})();
if(cljs.core.truth_(inst_33965)){
var statearr_33988_35423 = state_33983__$1;
(statearr_33988_35423[(1)] = (5));

} else {
var statearr_33989_35424 = state_33983__$1;
(statearr_33989_35424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (6))){
var inst_33964 = (state_33983[(7)]);
var inst_33969 = (state_33983[(8)]);
var inst_33969__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33970 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33971 = [inst_33964,inst_33969__$1];
var inst_33972 = (new cljs.core.PersistentVector(null,2,(5),inst_33970,inst_33971,null));
var state_33983__$1 = (function (){var statearr_33990 = state_33983;
(statearr_33990[(8)] = inst_33969__$1);

return statearr_33990;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33983__$1,(8),jobs,inst_33972);
} else {
if((state_val_33984 === (3))){
var inst_33981 = (state_33983[(2)]);
var state_33983__$1 = state_33983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33983__$1,inst_33981);
} else {
if((state_val_33984 === (2))){
var state_33983__$1 = state_33983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33983__$1,(4),from);
} else {
if((state_val_33984 === (9))){
var inst_33976 = (state_33983[(2)]);
var state_33983__$1 = (function (){var statearr_33991 = state_33983;
(statearr_33991[(9)] = inst_33976);

return statearr_33991;
})();
var statearr_33992_35425 = state_33983__$1;
(statearr_33992_35425[(2)] = null);

(statearr_33992_35425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (5))){
var inst_33967 = cljs.core.async.close_BANG_(jobs);
var state_33983__$1 = state_33983;
var statearr_33993_35427 = state_33983__$1;
(statearr_33993_35427[(2)] = inst_33967);

(statearr_33993_35427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33984 === (8))){
var inst_33969 = (state_33983[(8)]);
var inst_33974 = (state_33983[(2)]);
var state_33983__$1 = (function (){var statearr_33994 = state_33983;
(statearr_33994[(10)] = inst_33974);

return statearr_33994;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33983__$1,(9),results,inst_33969);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____0 = (function (){
var statearr_33995 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__);

(statearr_33995[(1)] = (1));

return statearr_33995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____1 = (function (state_33983){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_33983);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e33996){if((e33996 instanceof Object)){
var ex__33590__auto__ = e33996;
var statearr_33997_35429 = state_33983;
(statearr_33997_35429[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33996;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35430 = state_33983;
state_33983 = G__35430;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__ = function(state_33983){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____1.call(this,state_33983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_33998 = f__33758__auto__();
(statearr_33998[(6)] = c__33757__auto___35419);

return statearr_33998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));


var c__33757__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_34036){
var state_val_34037 = (state_34036[(1)]);
if((state_val_34037 === (7))){
var inst_34032 = (state_34036[(2)]);
var state_34036__$1 = state_34036;
var statearr_34038_35431 = state_34036__$1;
(statearr_34038_35431[(2)] = inst_34032);

(statearr_34038_35431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34037 === (20))){
var state_34036__$1 = state_34036;
var statearr_34039_35432 = state_34036__$1;
(statearr_34039_35432[(2)] = null);

(statearr_34039_35432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34037 === (1))){
var state_34036__$1 = state_34036;
var statearr_34040_35433 = state_34036__$1;
(statearr_34040_35433[(2)] = null);

(statearr_34040_35433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34037 === (4))){
var inst_34001 = (state_34036[(7)]);
var inst_34001__$1 = (state_34036[(2)]);
var inst_34002 = (inst_34001__$1 == null);
var state_34036__$1 = (function (){var statearr_34041 = state_34036;
(statearr_34041[(7)] = inst_34001__$1);

return statearr_34041;
})();
if(cljs.core.truth_(inst_34002)){
var statearr_34042_35435 = state_34036__$1;
(statearr_34042_35435[(1)] = (5));

} else {
var statearr_34043_35437 = state_34036__$1;
(statearr_34043_35437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34037 === (15))){
var inst_34014 = (state_34036[(8)]);
var state_34036__$1 = state_34036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34036__$1,(18),to,inst_34014);
} else {
if((state_val_34037 === (21))){
var inst_34027 = (state_34036[(2)]);
var state_34036__$1 = state_34036;
var statearr_34044_35438 = state_34036__$1;
(statearr_34044_35438[(2)] = inst_34027);

(statearr_34044_35438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34037 === (13))){
var inst_34029 = (state_34036[(2)]);
var state_34036__$1 = (function (){var statearr_34045 = state_34036;
(statearr_34045[(9)] = inst_34029);

return statearr_34045;
})();
var statearr_34046_35439 = state_34036__$1;
(statearr_34046_35439[(2)] = null);

(statearr_34046_35439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34037 === (6))){
var inst_34001 = (state_34036[(7)]);
var state_34036__$1 = state_34036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34036__$1,(11),inst_34001);
} else {
if((state_val_34037 === (17))){
var inst_34022 = (state_34036[(2)]);
var state_34036__$1 = state_34036;
if(cljs.core.truth_(inst_34022)){
var statearr_34047_35440 = state_34036__$1;
(statearr_34047_35440[(1)] = (19));

} else {
var statearr_34048_35441 = state_34036__$1;
(statearr_34048_35441[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34037 === (3))){
var inst_34034 = (state_34036[(2)]);
var state_34036__$1 = state_34036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34036__$1,inst_34034);
} else {
if((state_val_34037 === (12))){
var inst_34011 = (state_34036[(10)]);
var state_34036__$1 = state_34036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34036__$1,(14),inst_34011);
} else {
if((state_val_34037 === (2))){
var state_34036__$1 = state_34036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34036__$1,(4),results);
} else {
if((state_val_34037 === (19))){
var state_34036__$1 = state_34036;
var statearr_34049_35442 = state_34036__$1;
(statearr_34049_35442[(2)] = null);

(statearr_34049_35442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34037 === (11))){
var inst_34011 = (state_34036[(2)]);
var state_34036__$1 = (function (){var statearr_34050 = state_34036;
(statearr_34050[(10)] = inst_34011);

return statearr_34050;
})();
var statearr_34051_35443 = state_34036__$1;
(statearr_34051_35443[(2)] = null);

(statearr_34051_35443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34037 === (9))){
var state_34036__$1 = state_34036;
var statearr_34052_35444 = state_34036__$1;
(statearr_34052_35444[(2)] = null);

(statearr_34052_35444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34037 === (5))){
var state_34036__$1 = state_34036;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34053_35446 = state_34036__$1;
(statearr_34053_35446[(1)] = (8));

} else {
var statearr_34054_35447 = state_34036__$1;
(statearr_34054_35447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34037 === (14))){
var inst_34014 = (state_34036[(8)]);
var inst_34014__$1 = (state_34036[(2)]);
var inst_34015 = (inst_34014__$1 == null);
var inst_34016 = cljs.core.not(inst_34015);
var state_34036__$1 = (function (){var statearr_34055 = state_34036;
(statearr_34055[(8)] = inst_34014__$1);

return statearr_34055;
})();
if(inst_34016){
var statearr_34056_35449 = state_34036__$1;
(statearr_34056_35449[(1)] = (15));

} else {
var statearr_34057_35450 = state_34036__$1;
(statearr_34057_35450[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34037 === (16))){
var state_34036__$1 = state_34036;
var statearr_34058_35451 = state_34036__$1;
(statearr_34058_35451[(2)] = false);

(statearr_34058_35451[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34037 === (10))){
var inst_34008 = (state_34036[(2)]);
var state_34036__$1 = state_34036;
var statearr_34059_35452 = state_34036__$1;
(statearr_34059_35452[(2)] = inst_34008);

(statearr_34059_35452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34037 === (18))){
var inst_34019 = (state_34036[(2)]);
var state_34036__$1 = state_34036;
var statearr_34060_35453 = state_34036__$1;
(statearr_34060_35453[(2)] = inst_34019);

(statearr_34060_35453[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34037 === (8))){
var inst_34005 = cljs.core.async.close_BANG_(to);
var state_34036__$1 = state_34036;
var statearr_34061_35456 = state_34036__$1;
(statearr_34061_35456[(2)] = inst_34005);

(statearr_34061_35456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____0 = (function (){
var statearr_34062 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__);

(statearr_34062[(1)] = (1));

return statearr_34062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____1 = (function (state_34036){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_34036);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e34063){if((e34063 instanceof Object)){
var ex__33590__auto__ = e34063;
var statearr_34064_35461 = state_34036;
(statearr_34064_35461[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34063;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35462 = state_34036;
state_34036 = G__35462;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__ = function(state_34036){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____1.call(this,state_34036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_34065 = f__33758__auto__();
(statearr_34065[(6)] = c__33757__auto__);

return statearr_34065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));

return c__33757__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34067 = arguments.length;
switch (G__34067) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34069 = arguments.length;
switch (G__34069) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34071 = arguments.length;
switch (G__34071) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33757__auto___35473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_34097){
var state_val_34098 = (state_34097[(1)]);
if((state_val_34098 === (7))){
var inst_34093 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34099_35474 = state_34097__$1;
(statearr_34099_35474[(2)] = inst_34093);

(statearr_34099_35474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (1))){
var state_34097__$1 = state_34097;
var statearr_34100_35475 = state_34097__$1;
(statearr_34100_35475[(2)] = null);

(statearr_34100_35475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (4))){
var inst_34074 = (state_34097[(7)]);
var inst_34074__$1 = (state_34097[(2)]);
var inst_34075 = (inst_34074__$1 == null);
var state_34097__$1 = (function (){var statearr_34101 = state_34097;
(statearr_34101[(7)] = inst_34074__$1);

return statearr_34101;
})();
if(cljs.core.truth_(inst_34075)){
var statearr_34102_35476 = state_34097__$1;
(statearr_34102_35476[(1)] = (5));

} else {
var statearr_34103_35481 = state_34097__$1;
(statearr_34103_35481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (13))){
var state_34097__$1 = state_34097;
var statearr_34104_35482 = state_34097__$1;
(statearr_34104_35482[(2)] = null);

(statearr_34104_35482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (6))){
var inst_34074 = (state_34097[(7)]);
var inst_34080 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34074) : p.call(null,inst_34074));
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34080)){
var statearr_34105_35486 = state_34097__$1;
(statearr_34105_35486[(1)] = (9));

} else {
var statearr_34106_35487 = state_34097__$1;
(statearr_34106_35487[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (3))){
var inst_34095 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34097__$1,inst_34095);
} else {
if((state_val_34098 === (12))){
var state_34097__$1 = state_34097;
var statearr_34107_35488 = state_34097__$1;
(statearr_34107_35488[(2)] = null);

(statearr_34107_35488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (2))){
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34097__$1,(4),ch);
} else {
if((state_val_34098 === (11))){
var inst_34074 = (state_34097[(7)]);
var inst_34084 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34097__$1,(8),inst_34084,inst_34074);
} else {
if((state_val_34098 === (9))){
var state_34097__$1 = state_34097;
var statearr_34108_35492 = state_34097__$1;
(statearr_34108_35492[(2)] = tc);

(statearr_34108_35492[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (5))){
var inst_34077 = cljs.core.async.close_BANG_(tc);
var inst_34078 = cljs.core.async.close_BANG_(fc);
var state_34097__$1 = (function (){var statearr_34109 = state_34097;
(statearr_34109[(8)] = inst_34077);

return statearr_34109;
})();
var statearr_34110_35496 = state_34097__$1;
(statearr_34110_35496[(2)] = inst_34078);

(statearr_34110_35496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (14))){
var inst_34091 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
var statearr_34111_35500 = state_34097__$1;
(statearr_34111_35500[(2)] = inst_34091);

(statearr_34111_35500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (10))){
var state_34097__$1 = state_34097;
var statearr_34112_35501 = state_34097__$1;
(statearr_34112_35501[(2)] = fc);

(statearr_34112_35501[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34098 === (8))){
var inst_34086 = (state_34097[(2)]);
var state_34097__$1 = state_34097;
if(cljs.core.truth_(inst_34086)){
var statearr_34113_35503 = state_34097__$1;
(statearr_34113_35503[(1)] = (12));

} else {
var statearr_34114_35505 = state_34097__$1;
(statearr_34114_35505[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33587__auto__ = null;
var cljs$core$async$state_machine__33587__auto____0 = (function (){
var statearr_34115 = [null,null,null,null,null,null,null,null,null];
(statearr_34115[(0)] = cljs$core$async$state_machine__33587__auto__);

(statearr_34115[(1)] = (1));

return statearr_34115;
});
var cljs$core$async$state_machine__33587__auto____1 = (function (state_34097){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_34097);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e34116){if((e34116 instanceof Object)){
var ex__33590__auto__ = e34116;
var statearr_34117_35506 = state_34097;
(statearr_34117_35506[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35507 = state_34097;
state_34097 = G__35507;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$state_machine__33587__auto__ = function(state_34097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33587__auto____1.call(this,state_34097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33587__auto____0;
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33587__auto____1;
return cljs$core$async$state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_34118 = f__33758__auto__();
(statearr_34118[(6)] = c__33757__auto___35473);

return statearr_34118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33757__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_34139){
var state_val_34140 = (state_34139[(1)]);
if((state_val_34140 === (7))){
var inst_34135 = (state_34139[(2)]);
var state_34139__$1 = state_34139;
var statearr_34141_35511 = state_34139__$1;
(statearr_34141_35511[(2)] = inst_34135);

(statearr_34141_35511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34140 === (1))){
var inst_34119 = init;
var state_34139__$1 = (function (){var statearr_34142 = state_34139;
(statearr_34142[(7)] = inst_34119);

return statearr_34142;
})();
var statearr_34143_35515 = state_34139__$1;
(statearr_34143_35515[(2)] = null);

(statearr_34143_35515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34140 === (4))){
var inst_34122 = (state_34139[(8)]);
var inst_34122__$1 = (state_34139[(2)]);
var inst_34123 = (inst_34122__$1 == null);
var state_34139__$1 = (function (){var statearr_34144 = state_34139;
(statearr_34144[(8)] = inst_34122__$1);

return statearr_34144;
})();
if(cljs.core.truth_(inst_34123)){
var statearr_34145_35516 = state_34139__$1;
(statearr_34145_35516[(1)] = (5));

} else {
var statearr_34146_35521 = state_34139__$1;
(statearr_34146_35521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34140 === (6))){
var inst_34122 = (state_34139[(8)]);
var inst_34126 = (state_34139[(9)]);
var inst_34119 = (state_34139[(7)]);
var inst_34126__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34119,inst_34122) : f.call(null,inst_34119,inst_34122));
var inst_34127 = cljs.core.reduced_QMARK_(inst_34126__$1);
var state_34139__$1 = (function (){var statearr_34147 = state_34139;
(statearr_34147[(9)] = inst_34126__$1);

return statearr_34147;
})();
if(inst_34127){
var statearr_34148_35525 = state_34139__$1;
(statearr_34148_35525[(1)] = (8));

} else {
var statearr_34149_35526 = state_34139__$1;
(statearr_34149_35526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34140 === (3))){
var inst_34137 = (state_34139[(2)]);
var state_34139__$1 = state_34139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34139__$1,inst_34137);
} else {
if((state_val_34140 === (2))){
var state_34139__$1 = state_34139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34139__$1,(4),ch);
} else {
if((state_val_34140 === (9))){
var inst_34126 = (state_34139[(9)]);
var inst_34119 = inst_34126;
var state_34139__$1 = (function (){var statearr_34150 = state_34139;
(statearr_34150[(7)] = inst_34119);

return statearr_34150;
})();
var statearr_34151_35527 = state_34139__$1;
(statearr_34151_35527[(2)] = null);

(statearr_34151_35527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34140 === (5))){
var inst_34119 = (state_34139[(7)]);
var state_34139__$1 = state_34139;
var statearr_34152_35531 = state_34139__$1;
(statearr_34152_35531[(2)] = inst_34119);

(statearr_34152_35531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34140 === (10))){
var inst_34133 = (state_34139[(2)]);
var state_34139__$1 = state_34139;
var statearr_34153_35532 = state_34139__$1;
(statearr_34153_35532[(2)] = inst_34133);

(statearr_34153_35532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34140 === (8))){
var inst_34126 = (state_34139[(9)]);
var inst_34129 = cljs.core.deref(inst_34126);
var state_34139__$1 = state_34139;
var statearr_34154_35536 = state_34139__$1;
(statearr_34154_35536[(2)] = inst_34129);

(statearr_34154_35536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33587__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33587__auto____0 = (function (){
var statearr_34155 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34155[(0)] = cljs$core$async$reduce_$_state_machine__33587__auto__);

(statearr_34155[(1)] = (1));

return statearr_34155;
});
var cljs$core$async$reduce_$_state_machine__33587__auto____1 = (function (state_34139){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_34139);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e34156){if((e34156 instanceof Object)){
var ex__33590__auto__ = e34156;
var statearr_34157_35542 = state_34139;
(statearr_34157_35542[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35543 = state_34139;
state_34139 = G__35543;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33587__auto__ = function(state_34139){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33587__auto____1.call(this,state_34139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33587__auto____0;
cljs$core$async$reduce_$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33587__auto____1;
return cljs$core$async$reduce_$_state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_34158 = f__33758__auto__();
(statearr_34158[(6)] = c__33757__auto__);

return statearr_34158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));

return c__33757__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33757__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_34164){
var state_val_34165 = (state_34164[(1)]);
if((state_val_34165 === (1))){
var inst_34159 = cljs.core.async.reduce(f__$1,init,ch);
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34164__$1,(2),inst_34159);
} else {
if((state_val_34165 === (2))){
var inst_34161 = (state_34164[(2)]);
var inst_34162 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34161) : f__$1.call(null,inst_34161));
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34164__$1,inst_34162);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33587__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33587__auto____0 = (function (){
var statearr_34166 = [null,null,null,null,null,null,null];
(statearr_34166[(0)] = cljs$core$async$transduce_$_state_machine__33587__auto__);

(statearr_34166[(1)] = (1));

return statearr_34166;
});
var cljs$core$async$transduce_$_state_machine__33587__auto____1 = (function (state_34164){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_34164);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e34167){if((e34167 instanceof Object)){
var ex__33590__auto__ = e34167;
var statearr_34168_35574 = state_34164;
(statearr_34168_35574[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34167;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35575 = state_34164;
state_34164 = G__35575;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33587__auto__ = function(state_34164){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33587__auto____1.call(this,state_34164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33587__auto____0;
cljs$core$async$transduce_$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33587__auto____1;
return cljs$core$async$transduce_$_state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_34169 = f__33758__auto__();
(statearr_34169[(6)] = c__33757__auto__);

return statearr_34169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));

return c__33757__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34171 = arguments.length;
switch (G__34171) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33757__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_34196){
var state_val_34197 = (state_34196[(1)]);
if((state_val_34197 === (7))){
var inst_34178 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
var statearr_34198_35588 = state_34196__$1;
(statearr_34198_35588[(2)] = inst_34178);

(statearr_34198_35588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (1))){
var inst_34172 = cljs.core.seq(coll);
var inst_34173 = inst_34172;
var state_34196__$1 = (function (){var statearr_34199 = state_34196;
(statearr_34199[(7)] = inst_34173);

return statearr_34199;
})();
var statearr_34200_35589 = state_34196__$1;
(statearr_34200_35589[(2)] = null);

(statearr_34200_35589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (4))){
var inst_34173 = (state_34196[(7)]);
var inst_34176 = cljs.core.first(inst_34173);
var state_34196__$1 = state_34196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34196__$1,(7),ch,inst_34176);
} else {
if((state_val_34197 === (13))){
var inst_34190 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
var statearr_34201_35592 = state_34196__$1;
(statearr_34201_35592[(2)] = inst_34190);

(statearr_34201_35592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (6))){
var inst_34181 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
if(cljs.core.truth_(inst_34181)){
var statearr_34202_35593 = state_34196__$1;
(statearr_34202_35593[(1)] = (8));

} else {
var statearr_34203_35596 = state_34196__$1;
(statearr_34203_35596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (3))){
var inst_34194 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34196__$1,inst_34194);
} else {
if((state_val_34197 === (12))){
var state_34196__$1 = state_34196;
var statearr_34204_35599 = state_34196__$1;
(statearr_34204_35599[(2)] = null);

(statearr_34204_35599[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (2))){
var inst_34173 = (state_34196[(7)]);
var state_34196__$1 = state_34196;
if(cljs.core.truth_(inst_34173)){
var statearr_34205_35600 = state_34196__$1;
(statearr_34205_35600[(1)] = (4));

} else {
var statearr_34206_35601 = state_34196__$1;
(statearr_34206_35601[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (11))){
var inst_34187 = cljs.core.async.close_BANG_(ch);
var state_34196__$1 = state_34196;
var statearr_34207_35602 = state_34196__$1;
(statearr_34207_35602[(2)] = inst_34187);

(statearr_34207_35602[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (9))){
var state_34196__$1 = state_34196;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34208_35603 = state_34196__$1;
(statearr_34208_35603[(1)] = (11));

} else {
var statearr_34209_35604 = state_34196__$1;
(statearr_34209_35604[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (5))){
var inst_34173 = (state_34196[(7)]);
var state_34196__$1 = state_34196;
var statearr_34210_35605 = state_34196__$1;
(statearr_34210_35605[(2)] = inst_34173);

(statearr_34210_35605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (10))){
var inst_34192 = (state_34196[(2)]);
var state_34196__$1 = state_34196;
var statearr_34211_35608 = state_34196__$1;
(statearr_34211_35608[(2)] = inst_34192);

(statearr_34211_35608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34197 === (8))){
var inst_34173 = (state_34196[(7)]);
var inst_34183 = cljs.core.next(inst_34173);
var inst_34173__$1 = inst_34183;
var state_34196__$1 = (function (){var statearr_34212 = state_34196;
(statearr_34212[(7)] = inst_34173__$1);

return statearr_34212;
})();
var statearr_34213_35610 = state_34196__$1;
(statearr_34213_35610[(2)] = null);

(statearr_34213_35610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33587__auto__ = null;
var cljs$core$async$state_machine__33587__auto____0 = (function (){
var statearr_34214 = [null,null,null,null,null,null,null,null];
(statearr_34214[(0)] = cljs$core$async$state_machine__33587__auto__);

(statearr_34214[(1)] = (1));

return statearr_34214;
});
var cljs$core$async$state_machine__33587__auto____1 = (function (state_34196){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_34196);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e34215){if((e34215 instanceof Object)){
var ex__33590__auto__ = e34215;
var statearr_34216_35615 = state_34196;
(statearr_34216_35615[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35616 = state_34196;
state_34196 = G__35616;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$state_machine__33587__auto__ = function(state_34196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33587__auto____1.call(this,state_34196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33587__auto____0;
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33587__auto____1;
return cljs$core$async$state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_34217 = f__33758__auto__();
(statearr_34217[(6)] = c__33757__auto__);

return statearr_34217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));

return c__33757__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34218 = (function (ch,cs,meta34219){
this.ch = ch;
this.cs = cs;
this.meta34219 = meta34219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34220,meta34219__$1){
var self__ = this;
var _34220__$1 = this;
return (new cljs.core.async.t_cljs$core$async34218(self__.ch,self__.cs,meta34219__$1));
}));

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34220){
var self__ = this;
var _34220__$1 = this;
return self__.meta34219;
}));

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34218.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34219","meta34219",-1606973855,null)], null);
}));

(cljs.core.async.t_cljs$core$async34218.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34218");

(cljs.core.async.t_cljs$core$async34218.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34218");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34218.
 */
cljs.core.async.__GT_t_cljs$core$async34218 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34218(ch__$1,cs__$1,meta34219){
return (new cljs.core.async.t_cljs$core$async34218(ch__$1,cs__$1,meta34219));
});

}

return (new cljs.core.async.t_cljs$core$async34218(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33757__auto___35653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_34355){
var state_val_34356 = (state_34355[(1)]);
if((state_val_34356 === (7))){
var inst_34351 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
var statearr_34357_35656 = state_34355__$1;
(statearr_34357_35656[(2)] = inst_34351);

(statearr_34357_35656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (20))){
var inst_34254 = (state_34355[(7)]);
var inst_34266 = cljs.core.first(inst_34254);
var inst_34267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34266,(0),null);
var inst_34268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34266,(1),null);
var state_34355__$1 = (function (){var statearr_34358 = state_34355;
(statearr_34358[(8)] = inst_34267);

return statearr_34358;
})();
if(cljs.core.truth_(inst_34268)){
var statearr_34359_35673 = state_34355__$1;
(statearr_34359_35673[(1)] = (22));

} else {
var statearr_34360_35674 = state_34355__$1;
(statearr_34360_35674[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (27))){
var inst_34223 = (state_34355[(9)]);
var inst_34298 = (state_34355[(10)]);
var inst_34296 = (state_34355[(11)]);
var inst_34303 = (state_34355[(12)]);
var inst_34303__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34296,inst_34298);
var inst_34304 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34303__$1,inst_34223,done);
var state_34355__$1 = (function (){var statearr_34361 = state_34355;
(statearr_34361[(12)] = inst_34303__$1);

return statearr_34361;
})();
if(cljs.core.truth_(inst_34304)){
var statearr_34362_35679 = state_34355__$1;
(statearr_34362_35679[(1)] = (30));

} else {
var statearr_34363_35680 = state_34355__$1;
(statearr_34363_35680[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (1))){
var state_34355__$1 = state_34355;
var statearr_34364_35682 = state_34355__$1;
(statearr_34364_35682[(2)] = null);

(statearr_34364_35682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (24))){
var inst_34254 = (state_34355[(7)]);
var inst_34273 = (state_34355[(2)]);
var inst_34274 = cljs.core.next(inst_34254);
var inst_34232 = inst_34274;
var inst_34233 = null;
var inst_34234 = (0);
var inst_34235 = (0);
var state_34355__$1 = (function (){var statearr_34365 = state_34355;
(statearr_34365[(13)] = inst_34234);

(statearr_34365[(14)] = inst_34232);

(statearr_34365[(15)] = inst_34235);

(statearr_34365[(16)] = inst_34273);

(statearr_34365[(17)] = inst_34233);

return statearr_34365;
})();
var statearr_34366_35685 = state_34355__$1;
(statearr_34366_35685[(2)] = null);

(statearr_34366_35685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (39))){
var state_34355__$1 = state_34355;
var statearr_34370_35688 = state_34355__$1;
(statearr_34370_35688[(2)] = null);

(statearr_34370_35688[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (4))){
var inst_34223 = (state_34355[(9)]);
var inst_34223__$1 = (state_34355[(2)]);
var inst_34224 = (inst_34223__$1 == null);
var state_34355__$1 = (function (){var statearr_34371 = state_34355;
(statearr_34371[(9)] = inst_34223__$1);

return statearr_34371;
})();
if(cljs.core.truth_(inst_34224)){
var statearr_34372_35696 = state_34355__$1;
(statearr_34372_35696[(1)] = (5));

} else {
var statearr_34373_35697 = state_34355__$1;
(statearr_34373_35697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (15))){
var inst_34234 = (state_34355[(13)]);
var inst_34232 = (state_34355[(14)]);
var inst_34235 = (state_34355[(15)]);
var inst_34233 = (state_34355[(17)]);
var inst_34250 = (state_34355[(2)]);
var inst_34251 = (inst_34235 + (1));
var tmp34367 = inst_34234;
var tmp34368 = inst_34232;
var tmp34369 = inst_34233;
var inst_34232__$1 = tmp34368;
var inst_34233__$1 = tmp34369;
var inst_34234__$1 = tmp34367;
var inst_34235__$1 = inst_34251;
var state_34355__$1 = (function (){var statearr_34374 = state_34355;
(statearr_34374[(13)] = inst_34234__$1);

(statearr_34374[(18)] = inst_34250);

(statearr_34374[(14)] = inst_34232__$1);

(statearr_34374[(15)] = inst_34235__$1);

(statearr_34374[(17)] = inst_34233__$1);

return statearr_34374;
})();
var statearr_34375_35702 = state_34355__$1;
(statearr_34375_35702[(2)] = null);

(statearr_34375_35702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (21))){
var inst_34277 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
var statearr_34379_35703 = state_34355__$1;
(statearr_34379_35703[(2)] = inst_34277);

(statearr_34379_35703[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (31))){
var inst_34303 = (state_34355[(12)]);
var inst_34307 = done(null);
var inst_34308 = cljs.core.async.untap_STAR_(m,inst_34303);
var state_34355__$1 = (function (){var statearr_34380 = state_34355;
(statearr_34380[(19)] = inst_34307);

return statearr_34380;
})();
var statearr_34381_35705 = state_34355__$1;
(statearr_34381_35705[(2)] = inst_34308);

(statearr_34381_35705[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (32))){
var inst_34297 = (state_34355[(20)]);
var inst_34298 = (state_34355[(10)]);
var inst_34296 = (state_34355[(11)]);
var inst_34295 = (state_34355[(21)]);
var inst_34310 = (state_34355[(2)]);
var inst_34311 = (inst_34298 + (1));
var tmp34376 = inst_34297;
var tmp34377 = inst_34296;
var tmp34378 = inst_34295;
var inst_34295__$1 = tmp34378;
var inst_34296__$1 = tmp34377;
var inst_34297__$1 = tmp34376;
var inst_34298__$1 = inst_34311;
var state_34355__$1 = (function (){var statearr_34382 = state_34355;
(statearr_34382[(22)] = inst_34310);

(statearr_34382[(20)] = inst_34297__$1);

(statearr_34382[(10)] = inst_34298__$1);

(statearr_34382[(11)] = inst_34296__$1);

(statearr_34382[(21)] = inst_34295__$1);

return statearr_34382;
})();
var statearr_34383_35710 = state_34355__$1;
(statearr_34383_35710[(2)] = null);

(statearr_34383_35710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (40))){
var inst_34323 = (state_34355[(23)]);
var inst_34327 = done(null);
var inst_34328 = cljs.core.async.untap_STAR_(m,inst_34323);
var state_34355__$1 = (function (){var statearr_34384 = state_34355;
(statearr_34384[(24)] = inst_34327);

return statearr_34384;
})();
var statearr_34385_35712 = state_34355__$1;
(statearr_34385_35712[(2)] = inst_34328);

(statearr_34385_35712[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (33))){
var inst_34314 = (state_34355[(25)]);
var inst_34316 = cljs.core.chunked_seq_QMARK_(inst_34314);
var state_34355__$1 = state_34355;
if(inst_34316){
var statearr_34386_35719 = state_34355__$1;
(statearr_34386_35719[(1)] = (36));

} else {
var statearr_34387_35722 = state_34355__$1;
(statearr_34387_35722[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (13))){
var inst_34244 = (state_34355[(26)]);
var inst_34247 = cljs.core.async.close_BANG_(inst_34244);
var state_34355__$1 = state_34355;
var statearr_34388_35725 = state_34355__$1;
(statearr_34388_35725[(2)] = inst_34247);

(statearr_34388_35725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (22))){
var inst_34267 = (state_34355[(8)]);
var inst_34270 = cljs.core.async.close_BANG_(inst_34267);
var state_34355__$1 = state_34355;
var statearr_34389_35726 = state_34355__$1;
(statearr_34389_35726[(2)] = inst_34270);

(statearr_34389_35726[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (36))){
var inst_34314 = (state_34355[(25)]);
var inst_34318 = cljs.core.chunk_first(inst_34314);
var inst_34319 = cljs.core.chunk_rest(inst_34314);
var inst_34320 = cljs.core.count(inst_34318);
var inst_34295 = inst_34319;
var inst_34296 = inst_34318;
var inst_34297 = inst_34320;
var inst_34298 = (0);
var state_34355__$1 = (function (){var statearr_34390 = state_34355;
(statearr_34390[(20)] = inst_34297);

(statearr_34390[(10)] = inst_34298);

(statearr_34390[(11)] = inst_34296);

(statearr_34390[(21)] = inst_34295);

return statearr_34390;
})();
var statearr_34391_35732 = state_34355__$1;
(statearr_34391_35732[(2)] = null);

(statearr_34391_35732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (41))){
var inst_34314 = (state_34355[(25)]);
var inst_34330 = (state_34355[(2)]);
var inst_34331 = cljs.core.next(inst_34314);
var inst_34295 = inst_34331;
var inst_34296 = null;
var inst_34297 = (0);
var inst_34298 = (0);
var state_34355__$1 = (function (){var statearr_34392 = state_34355;
(statearr_34392[(20)] = inst_34297);

(statearr_34392[(10)] = inst_34298);

(statearr_34392[(11)] = inst_34296);

(statearr_34392[(27)] = inst_34330);

(statearr_34392[(21)] = inst_34295);

return statearr_34392;
})();
var statearr_34393_35736 = state_34355__$1;
(statearr_34393_35736[(2)] = null);

(statearr_34393_35736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (43))){
var state_34355__$1 = state_34355;
var statearr_34394_35739 = state_34355__$1;
(statearr_34394_35739[(2)] = null);

(statearr_34394_35739[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (29))){
var inst_34339 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
var statearr_34395_35746 = state_34355__$1;
(statearr_34395_35746[(2)] = inst_34339);

(statearr_34395_35746[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (44))){
var inst_34348 = (state_34355[(2)]);
var state_34355__$1 = (function (){var statearr_34396 = state_34355;
(statearr_34396[(28)] = inst_34348);

return statearr_34396;
})();
var statearr_34397_35747 = state_34355__$1;
(statearr_34397_35747[(2)] = null);

(statearr_34397_35747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (6))){
var inst_34287 = (state_34355[(29)]);
var inst_34286 = cljs.core.deref(cs);
var inst_34287__$1 = cljs.core.keys(inst_34286);
var inst_34288 = cljs.core.count(inst_34287__$1);
var inst_34289 = cljs.core.reset_BANG_(dctr,inst_34288);
var inst_34294 = cljs.core.seq(inst_34287__$1);
var inst_34295 = inst_34294;
var inst_34296 = null;
var inst_34297 = (0);
var inst_34298 = (0);
var state_34355__$1 = (function (){var statearr_34398 = state_34355;
(statearr_34398[(20)] = inst_34297);

(statearr_34398[(10)] = inst_34298);

(statearr_34398[(29)] = inst_34287__$1);

(statearr_34398[(11)] = inst_34296);

(statearr_34398[(21)] = inst_34295);

(statearr_34398[(30)] = inst_34289);

return statearr_34398;
})();
var statearr_34399_35748 = state_34355__$1;
(statearr_34399_35748[(2)] = null);

(statearr_34399_35748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (28))){
var inst_34314 = (state_34355[(25)]);
var inst_34295 = (state_34355[(21)]);
var inst_34314__$1 = cljs.core.seq(inst_34295);
var state_34355__$1 = (function (){var statearr_34400 = state_34355;
(statearr_34400[(25)] = inst_34314__$1);

return statearr_34400;
})();
if(inst_34314__$1){
var statearr_34401_35749 = state_34355__$1;
(statearr_34401_35749[(1)] = (33));

} else {
var statearr_34402_35750 = state_34355__$1;
(statearr_34402_35750[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (25))){
var inst_34297 = (state_34355[(20)]);
var inst_34298 = (state_34355[(10)]);
var inst_34300 = (inst_34298 < inst_34297);
var inst_34301 = inst_34300;
var state_34355__$1 = state_34355;
if(cljs.core.truth_(inst_34301)){
var statearr_34403_35751 = state_34355__$1;
(statearr_34403_35751[(1)] = (27));

} else {
var statearr_34404_35752 = state_34355__$1;
(statearr_34404_35752[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (34))){
var state_34355__$1 = state_34355;
var statearr_34405_35753 = state_34355__$1;
(statearr_34405_35753[(2)] = null);

(statearr_34405_35753[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (17))){
var state_34355__$1 = state_34355;
var statearr_34406_35754 = state_34355__$1;
(statearr_34406_35754[(2)] = null);

(statearr_34406_35754[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (3))){
var inst_34353 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34355__$1,inst_34353);
} else {
if((state_val_34356 === (12))){
var inst_34282 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
var statearr_34407_35755 = state_34355__$1;
(statearr_34407_35755[(2)] = inst_34282);

(statearr_34407_35755[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (2))){
var state_34355__$1 = state_34355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34355__$1,(4),ch);
} else {
if((state_val_34356 === (23))){
var state_34355__$1 = state_34355;
var statearr_34408_35757 = state_34355__$1;
(statearr_34408_35757[(2)] = null);

(statearr_34408_35757[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (35))){
var inst_34337 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
var statearr_34409_35760 = state_34355__$1;
(statearr_34409_35760[(2)] = inst_34337);

(statearr_34409_35760[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (19))){
var inst_34254 = (state_34355[(7)]);
var inst_34258 = cljs.core.chunk_first(inst_34254);
var inst_34259 = cljs.core.chunk_rest(inst_34254);
var inst_34260 = cljs.core.count(inst_34258);
var inst_34232 = inst_34259;
var inst_34233 = inst_34258;
var inst_34234 = inst_34260;
var inst_34235 = (0);
var state_34355__$1 = (function (){var statearr_34410 = state_34355;
(statearr_34410[(13)] = inst_34234);

(statearr_34410[(14)] = inst_34232);

(statearr_34410[(15)] = inst_34235);

(statearr_34410[(17)] = inst_34233);

return statearr_34410;
})();
var statearr_34411_35764 = state_34355__$1;
(statearr_34411_35764[(2)] = null);

(statearr_34411_35764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (11))){
var inst_34254 = (state_34355[(7)]);
var inst_34232 = (state_34355[(14)]);
var inst_34254__$1 = cljs.core.seq(inst_34232);
var state_34355__$1 = (function (){var statearr_34412 = state_34355;
(statearr_34412[(7)] = inst_34254__$1);

return statearr_34412;
})();
if(inst_34254__$1){
var statearr_34413_35766 = state_34355__$1;
(statearr_34413_35766[(1)] = (16));

} else {
var statearr_34414_35767 = state_34355__$1;
(statearr_34414_35767[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (9))){
var inst_34284 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
var statearr_34415_35768 = state_34355__$1;
(statearr_34415_35768[(2)] = inst_34284);

(statearr_34415_35768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (5))){
var inst_34230 = cljs.core.deref(cs);
var inst_34231 = cljs.core.seq(inst_34230);
var inst_34232 = inst_34231;
var inst_34233 = null;
var inst_34234 = (0);
var inst_34235 = (0);
var state_34355__$1 = (function (){var statearr_34416 = state_34355;
(statearr_34416[(13)] = inst_34234);

(statearr_34416[(14)] = inst_34232);

(statearr_34416[(15)] = inst_34235);

(statearr_34416[(17)] = inst_34233);

return statearr_34416;
})();
var statearr_34417_35770 = state_34355__$1;
(statearr_34417_35770[(2)] = null);

(statearr_34417_35770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (14))){
var state_34355__$1 = state_34355;
var statearr_34418_35775 = state_34355__$1;
(statearr_34418_35775[(2)] = null);

(statearr_34418_35775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (45))){
var inst_34345 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
var statearr_34419_35776 = state_34355__$1;
(statearr_34419_35776[(2)] = inst_34345);

(statearr_34419_35776[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (26))){
var inst_34287 = (state_34355[(29)]);
var inst_34341 = (state_34355[(2)]);
var inst_34342 = cljs.core.seq(inst_34287);
var state_34355__$1 = (function (){var statearr_34420 = state_34355;
(statearr_34420[(31)] = inst_34341);

return statearr_34420;
})();
if(inst_34342){
var statearr_34421_35777 = state_34355__$1;
(statearr_34421_35777[(1)] = (42));

} else {
var statearr_34422_35778 = state_34355__$1;
(statearr_34422_35778[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (16))){
var inst_34254 = (state_34355[(7)]);
var inst_34256 = cljs.core.chunked_seq_QMARK_(inst_34254);
var state_34355__$1 = state_34355;
if(inst_34256){
var statearr_34423_35779 = state_34355__$1;
(statearr_34423_35779[(1)] = (19));

} else {
var statearr_34424_35780 = state_34355__$1;
(statearr_34424_35780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (38))){
var inst_34334 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
var statearr_34425_35781 = state_34355__$1;
(statearr_34425_35781[(2)] = inst_34334);

(statearr_34425_35781[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (30))){
var state_34355__$1 = state_34355;
var statearr_34426_35782 = state_34355__$1;
(statearr_34426_35782[(2)] = null);

(statearr_34426_35782[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (10))){
var inst_34235 = (state_34355[(15)]);
var inst_34233 = (state_34355[(17)]);
var inst_34243 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34233,inst_34235);
var inst_34244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34243,(0),null);
var inst_34245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34243,(1),null);
var state_34355__$1 = (function (){var statearr_34427 = state_34355;
(statearr_34427[(26)] = inst_34244);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34245)){
var statearr_34428_35785 = state_34355__$1;
(statearr_34428_35785[(1)] = (13));

} else {
var statearr_34429_35786 = state_34355__$1;
(statearr_34429_35786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (18))){
var inst_34280 = (state_34355[(2)]);
var state_34355__$1 = state_34355;
var statearr_34430_35788 = state_34355__$1;
(statearr_34430_35788[(2)] = inst_34280);

(statearr_34430_35788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (42))){
var state_34355__$1 = state_34355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34355__$1,(45),dchan);
} else {
if((state_val_34356 === (37))){
var inst_34223 = (state_34355[(9)]);
var inst_34314 = (state_34355[(25)]);
var inst_34323 = (state_34355[(23)]);
var inst_34323__$1 = cljs.core.first(inst_34314);
var inst_34324 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34323__$1,inst_34223,done);
var state_34355__$1 = (function (){var statearr_34431 = state_34355;
(statearr_34431[(23)] = inst_34323__$1);

return statearr_34431;
})();
if(cljs.core.truth_(inst_34324)){
var statearr_34432_35790 = state_34355__$1;
(statearr_34432_35790[(1)] = (39));

} else {
var statearr_34433_35791 = state_34355__$1;
(statearr_34433_35791[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34356 === (8))){
var inst_34234 = (state_34355[(13)]);
var inst_34235 = (state_34355[(15)]);
var inst_34237 = (inst_34235 < inst_34234);
var inst_34238 = inst_34237;
var state_34355__$1 = state_34355;
if(cljs.core.truth_(inst_34238)){
var statearr_34434_35792 = state_34355__$1;
(statearr_34434_35792[(1)] = (10));

} else {
var statearr_34435_35793 = state_34355__$1;
(statearr_34435_35793[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33587__auto__ = null;
var cljs$core$async$mult_$_state_machine__33587__auto____0 = (function (){
var statearr_34436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34436[(0)] = cljs$core$async$mult_$_state_machine__33587__auto__);

(statearr_34436[(1)] = (1));

return statearr_34436;
});
var cljs$core$async$mult_$_state_machine__33587__auto____1 = (function (state_34355){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_34355);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e34437){if((e34437 instanceof Object)){
var ex__33590__auto__ = e34437;
var statearr_34438_35796 = state_34355;
(statearr_34438_35796[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34437;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35797 = state_34355;
state_34355 = G__35797;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33587__auto__ = function(state_34355){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33587__auto____1.call(this,state_34355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33587__auto____0;
cljs$core$async$mult_$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33587__auto____1;
return cljs$core$async$mult_$_state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_34439 = f__33758__auto__();
(statearr_34439[(6)] = c__33757__auto___35653);

return statearr_34439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34441 = arguments.length;
switch (G__34441) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___35801 = arguments.length;
var i__4790__auto___35802 = (0);
while(true){
if((i__4790__auto___35802 < len__4789__auto___35801)){
args__4795__auto__.push((arguments[i__4790__auto___35802]));

var G__35804 = (i__4790__auto___35802 + (1));
i__4790__auto___35802 = G__35804;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34446){
var map__34447 = p__34446;
var map__34447__$1 = (((((!((map__34447 == null))))?(((((map__34447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34447):map__34447);
var opts = map__34447__$1;
var statearr_34449_35807 = state;
(statearr_34449_35807[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34450_35809 = state;
(statearr_34450_35809[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34451_35812 = state;
(statearr_34451_35812[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34442){
var G__34443 = cljs.core.first(seq34442);
var seq34442__$1 = cljs.core.next(seq34442);
var G__34444 = cljs.core.first(seq34442__$1);
var seq34442__$2 = cljs.core.next(seq34442__$1);
var G__34445 = cljs.core.first(seq34442__$2);
var seq34442__$3 = cljs.core.next(seq34442__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34443,G__34444,G__34445,seq34442__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34452 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34453){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34453 = meta34453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34454,meta34453__$1){
var self__ = this;
var _34454__$1 = this;
return (new cljs.core.async.t_cljs$core$async34452(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34453__$1));
}));

(cljs.core.async.t_cljs$core$async34452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34454){
var self__ = this;
var _34454__$1 = this;
return self__.meta34453;
}));

(cljs.core.async.t_cljs$core$async34452.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34452.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34452.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34452.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34452.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34452.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34452.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34452.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34453","meta34453",310650864,null)], null);
}));

(cljs.core.async.t_cljs$core$async34452.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34452");

(cljs.core.async.t_cljs$core$async34452.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34452");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34452.
 */
cljs.core.async.__GT_t_cljs$core$async34452 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34452(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34453){
return (new cljs.core.async.t_cljs$core$async34452(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34453));
});

}

return (new cljs.core.async.t_cljs$core$async34452(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33757__auto___35843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_34556){
var state_val_34557 = (state_34556[(1)]);
if((state_val_34557 === (7))){
var inst_34471 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34558_35852 = state_34556__$1;
(statearr_34558_35852[(2)] = inst_34471);

(statearr_34558_35852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (20))){
var inst_34483 = (state_34556[(7)]);
var state_34556__$1 = state_34556;
var statearr_34559_35853 = state_34556__$1;
(statearr_34559_35853[(2)] = inst_34483);

(statearr_34559_35853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (27))){
var state_34556__$1 = state_34556;
var statearr_34560_35854 = state_34556__$1;
(statearr_34560_35854[(2)] = null);

(statearr_34560_35854[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (1))){
var inst_34458 = (state_34556[(8)]);
var inst_34458__$1 = calc_state();
var inst_34460 = (inst_34458__$1 == null);
var inst_34461 = cljs.core.not(inst_34460);
var state_34556__$1 = (function (){var statearr_34561 = state_34556;
(statearr_34561[(8)] = inst_34458__$1);

return statearr_34561;
})();
if(inst_34461){
var statearr_34562_35857 = state_34556__$1;
(statearr_34562_35857[(1)] = (2));

} else {
var statearr_34563_35860 = state_34556__$1;
(statearr_34563_35860[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (24))){
var inst_34507 = (state_34556[(9)]);
var inst_34516 = (state_34556[(10)]);
var inst_34530 = (state_34556[(11)]);
var inst_34530__$1 = (inst_34507.cljs$core$IFn$_invoke$arity$1 ? inst_34507.cljs$core$IFn$_invoke$arity$1(inst_34516) : inst_34507.call(null,inst_34516));
var state_34556__$1 = (function (){var statearr_34564 = state_34556;
(statearr_34564[(11)] = inst_34530__$1);

return statearr_34564;
})();
if(cljs.core.truth_(inst_34530__$1)){
var statearr_34565_35861 = state_34556__$1;
(statearr_34565_35861[(1)] = (29));

} else {
var statearr_34566_35862 = state_34556__$1;
(statearr_34566_35862[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (4))){
var inst_34474 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
if(cljs.core.truth_(inst_34474)){
var statearr_34567_35868 = state_34556__$1;
(statearr_34567_35868[(1)] = (8));

} else {
var statearr_34568_35869 = state_34556__$1;
(statearr_34568_35869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (15))){
var inst_34501 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
if(cljs.core.truth_(inst_34501)){
var statearr_34569_35871 = state_34556__$1;
(statearr_34569_35871[(1)] = (19));

} else {
var statearr_34570_35872 = state_34556__$1;
(statearr_34570_35872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (21))){
var inst_34506 = (state_34556[(12)]);
var inst_34506__$1 = (state_34556[(2)]);
var inst_34507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34506__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34506__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34506__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34556__$1 = (function (){var statearr_34571 = state_34556;
(statearr_34571[(9)] = inst_34507);

(statearr_34571[(12)] = inst_34506__$1);

(statearr_34571[(13)] = inst_34508);

return statearr_34571;
})();
return cljs.core.async.ioc_alts_BANG_(state_34556__$1,(22),inst_34509);
} else {
if((state_val_34557 === (31))){
var inst_34538 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
if(cljs.core.truth_(inst_34538)){
var statearr_34572_35879 = state_34556__$1;
(statearr_34572_35879[(1)] = (32));

} else {
var statearr_34573_35880 = state_34556__$1;
(statearr_34573_35880[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (32))){
var inst_34515 = (state_34556[(14)]);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34556__$1,(35),out,inst_34515);
} else {
if((state_val_34557 === (33))){
var inst_34506 = (state_34556[(12)]);
var inst_34483 = inst_34506;
var state_34556__$1 = (function (){var statearr_34574 = state_34556;
(statearr_34574[(7)] = inst_34483);

return statearr_34574;
})();
var statearr_34575_35883 = state_34556__$1;
(statearr_34575_35883[(2)] = null);

(statearr_34575_35883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (13))){
var inst_34483 = (state_34556[(7)]);
var inst_34490 = inst_34483.cljs$lang$protocol_mask$partition0$;
var inst_34491 = (inst_34490 & (64));
var inst_34492 = inst_34483.cljs$core$ISeq$;
var inst_34493 = (cljs.core.PROTOCOL_SENTINEL === inst_34492);
var inst_34494 = ((inst_34491) || (inst_34493));
var state_34556__$1 = state_34556;
if(cljs.core.truth_(inst_34494)){
var statearr_34576_35887 = state_34556__$1;
(statearr_34576_35887[(1)] = (16));

} else {
var statearr_34577_35888 = state_34556__$1;
(statearr_34577_35888[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (22))){
var inst_34515 = (state_34556[(14)]);
var inst_34516 = (state_34556[(10)]);
var inst_34514 = (state_34556[(2)]);
var inst_34515__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34514,(0),null);
var inst_34516__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34514,(1),null);
var inst_34517 = (inst_34515__$1 == null);
var inst_34518 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34516__$1,change);
var inst_34519 = ((inst_34517) || (inst_34518));
var state_34556__$1 = (function (){var statearr_34578 = state_34556;
(statearr_34578[(14)] = inst_34515__$1);

(statearr_34578[(10)] = inst_34516__$1);

return statearr_34578;
})();
if(cljs.core.truth_(inst_34519)){
var statearr_34579_35890 = state_34556__$1;
(statearr_34579_35890[(1)] = (23));

} else {
var statearr_34580_35891 = state_34556__$1;
(statearr_34580_35891[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (36))){
var inst_34506 = (state_34556[(12)]);
var inst_34483 = inst_34506;
var state_34556__$1 = (function (){var statearr_34581 = state_34556;
(statearr_34581[(7)] = inst_34483);

return statearr_34581;
})();
var statearr_34582_35892 = state_34556__$1;
(statearr_34582_35892[(2)] = null);

(statearr_34582_35892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (29))){
var inst_34530 = (state_34556[(11)]);
var state_34556__$1 = state_34556;
var statearr_34583_35895 = state_34556__$1;
(statearr_34583_35895[(2)] = inst_34530);

(statearr_34583_35895[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (6))){
var state_34556__$1 = state_34556;
var statearr_34584_35896 = state_34556__$1;
(statearr_34584_35896[(2)] = false);

(statearr_34584_35896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (28))){
var inst_34526 = (state_34556[(2)]);
var inst_34527 = calc_state();
var inst_34483 = inst_34527;
var state_34556__$1 = (function (){var statearr_34585 = state_34556;
(statearr_34585[(15)] = inst_34526);

(statearr_34585[(7)] = inst_34483);

return statearr_34585;
})();
var statearr_34586_35897 = state_34556__$1;
(statearr_34586_35897[(2)] = null);

(statearr_34586_35897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (25))){
var inst_34552 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34587_35898 = state_34556__$1;
(statearr_34587_35898[(2)] = inst_34552);

(statearr_34587_35898[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (34))){
var inst_34550 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34588_35899 = state_34556__$1;
(statearr_34588_35899[(2)] = inst_34550);

(statearr_34588_35899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (17))){
var state_34556__$1 = state_34556;
var statearr_34589_35900 = state_34556__$1;
(statearr_34589_35900[(2)] = false);

(statearr_34589_35900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (3))){
var state_34556__$1 = state_34556;
var statearr_34590_35901 = state_34556__$1;
(statearr_34590_35901[(2)] = false);

(statearr_34590_35901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (12))){
var inst_34554 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34556__$1,inst_34554);
} else {
if((state_val_34557 === (2))){
var inst_34458 = (state_34556[(8)]);
var inst_34463 = inst_34458.cljs$lang$protocol_mask$partition0$;
var inst_34464 = (inst_34463 & (64));
var inst_34465 = inst_34458.cljs$core$ISeq$;
var inst_34466 = (cljs.core.PROTOCOL_SENTINEL === inst_34465);
var inst_34467 = ((inst_34464) || (inst_34466));
var state_34556__$1 = state_34556;
if(cljs.core.truth_(inst_34467)){
var statearr_34591_35906 = state_34556__$1;
(statearr_34591_35906[(1)] = (5));

} else {
var statearr_34592_35907 = state_34556__$1;
(statearr_34592_35907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (23))){
var inst_34515 = (state_34556[(14)]);
var inst_34521 = (inst_34515 == null);
var state_34556__$1 = state_34556;
if(cljs.core.truth_(inst_34521)){
var statearr_34593_35908 = state_34556__$1;
(statearr_34593_35908[(1)] = (26));

} else {
var statearr_34594_35909 = state_34556__$1;
(statearr_34594_35909[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (35))){
var inst_34541 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
if(cljs.core.truth_(inst_34541)){
var statearr_34595_35910 = state_34556__$1;
(statearr_34595_35910[(1)] = (36));

} else {
var statearr_34596_35911 = state_34556__$1;
(statearr_34596_35911[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (19))){
var inst_34483 = (state_34556[(7)]);
var inst_34503 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34483);
var state_34556__$1 = state_34556;
var statearr_34597_35912 = state_34556__$1;
(statearr_34597_35912[(2)] = inst_34503);

(statearr_34597_35912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (11))){
var inst_34483 = (state_34556[(7)]);
var inst_34487 = (inst_34483 == null);
var inst_34488 = cljs.core.not(inst_34487);
var state_34556__$1 = state_34556;
if(inst_34488){
var statearr_34598_35913 = state_34556__$1;
(statearr_34598_35913[(1)] = (13));

} else {
var statearr_34599_35914 = state_34556__$1;
(statearr_34599_35914[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (9))){
var inst_34458 = (state_34556[(8)]);
var state_34556__$1 = state_34556;
var statearr_34600_35919 = state_34556__$1;
(statearr_34600_35919[(2)] = inst_34458);

(statearr_34600_35919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (5))){
var state_34556__$1 = state_34556;
var statearr_34601_35921 = state_34556__$1;
(statearr_34601_35921[(2)] = true);

(statearr_34601_35921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (14))){
var state_34556__$1 = state_34556;
var statearr_34602_35922 = state_34556__$1;
(statearr_34602_35922[(2)] = false);

(statearr_34602_35922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (26))){
var inst_34516 = (state_34556[(10)]);
var inst_34523 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34516);
var state_34556__$1 = state_34556;
var statearr_34603_35923 = state_34556__$1;
(statearr_34603_35923[(2)] = inst_34523);

(statearr_34603_35923[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (16))){
var state_34556__$1 = state_34556;
var statearr_34604_35924 = state_34556__$1;
(statearr_34604_35924[(2)] = true);

(statearr_34604_35924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (38))){
var inst_34546 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34605_35925 = state_34556__$1;
(statearr_34605_35925[(2)] = inst_34546);

(statearr_34605_35925[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (30))){
var inst_34507 = (state_34556[(9)]);
var inst_34516 = (state_34556[(10)]);
var inst_34508 = (state_34556[(13)]);
var inst_34533 = cljs.core.empty_QMARK_(inst_34507);
var inst_34534 = (inst_34508.cljs$core$IFn$_invoke$arity$1 ? inst_34508.cljs$core$IFn$_invoke$arity$1(inst_34516) : inst_34508.call(null,inst_34516));
var inst_34535 = cljs.core.not(inst_34534);
var inst_34536 = ((inst_34533) && (inst_34535));
var state_34556__$1 = state_34556;
var statearr_34606_35927 = state_34556__$1;
(statearr_34606_35927[(2)] = inst_34536);

(statearr_34606_35927[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (10))){
var inst_34458 = (state_34556[(8)]);
var inst_34479 = (state_34556[(2)]);
var inst_34480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34479,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34479,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34479,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34483 = inst_34458;
var state_34556__$1 = (function (){var statearr_34607 = state_34556;
(statearr_34607[(16)] = inst_34481);

(statearr_34607[(7)] = inst_34483);

(statearr_34607[(17)] = inst_34482);

(statearr_34607[(18)] = inst_34480);

return statearr_34607;
})();
var statearr_34608_35932 = state_34556__$1;
(statearr_34608_35932[(2)] = null);

(statearr_34608_35932[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (18))){
var inst_34498 = (state_34556[(2)]);
var state_34556__$1 = state_34556;
var statearr_34609_35933 = state_34556__$1;
(statearr_34609_35933[(2)] = inst_34498);

(statearr_34609_35933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (37))){
var state_34556__$1 = state_34556;
var statearr_34610_35934 = state_34556__$1;
(statearr_34610_35934[(2)] = null);

(statearr_34610_35934[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34557 === (8))){
var inst_34458 = (state_34556[(8)]);
var inst_34476 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34458);
var state_34556__$1 = state_34556;
var statearr_34611_35935 = state_34556__$1;
(statearr_34611_35935[(2)] = inst_34476);

(statearr_34611_35935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33587__auto__ = null;
var cljs$core$async$mix_$_state_machine__33587__auto____0 = (function (){
var statearr_34612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34612[(0)] = cljs$core$async$mix_$_state_machine__33587__auto__);

(statearr_34612[(1)] = (1));

return statearr_34612;
});
var cljs$core$async$mix_$_state_machine__33587__auto____1 = (function (state_34556){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_34556);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e34613){if((e34613 instanceof Object)){
var ex__33590__auto__ = e34613;
var statearr_34614_35936 = state_34556;
(statearr_34614_35936[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34613;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35937 = state_34556;
state_34556 = G__35937;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33587__auto__ = function(state_34556){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33587__auto____1.call(this,state_34556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33587__auto____0;
cljs$core$async$mix_$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33587__auto____1;
return cljs$core$async$mix_$_state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_34615 = f__33758__auto__();
(statearr_34615[(6)] = c__33757__auto___35843);

return statearr_34615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34617 = arguments.length;
switch (G__34617) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34620 = arguments.length;
switch (G__34620) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34618_SHARP_){
if(cljs.core.truth_((p1__34618_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34618_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34618_SHARP_.call(null,topic)))){
return p1__34618_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34618_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34621 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34621 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34622){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34622 = meta34622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34623,meta34622__$1){
var self__ = this;
var _34623__$1 = this;
return (new cljs.core.async.t_cljs$core$async34621(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34622__$1));
}));

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34623){
var self__ = this;
var _34623__$1 = this;
return self__.meta34622;
}));

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34622","meta34622",697153054,null)], null);
}));

(cljs.core.async.t_cljs$core$async34621.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34621");

(cljs.core.async.t_cljs$core$async34621.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34621");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34621.
 */
cljs.core.async.__GT_t_cljs$core$async34621 = (function cljs$core$async$__GT_t_cljs$core$async34621(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34622){
return (new cljs.core.async.t_cljs$core$async34621(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34622));
});

}

return (new cljs.core.async.t_cljs$core$async34621(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33757__auto___35968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_34695){
var state_val_34696 = (state_34695[(1)]);
if((state_val_34696 === (7))){
var inst_34691 = (state_34695[(2)]);
var state_34695__$1 = state_34695;
var statearr_34697_35970 = state_34695__$1;
(statearr_34697_35970[(2)] = inst_34691);

(statearr_34697_35970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (20))){
var state_34695__$1 = state_34695;
var statearr_34698_35974 = state_34695__$1;
(statearr_34698_35974[(2)] = null);

(statearr_34698_35974[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (1))){
var state_34695__$1 = state_34695;
var statearr_34699_35975 = state_34695__$1;
(statearr_34699_35975[(2)] = null);

(statearr_34699_35975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (24))){
var inst_34674 = (state_34695[(7)]);
var inst_34683 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34674);
var state_34695__$1 = state_34695;
var statearr_34700_35976 = state_34695__$1;
(statearr_34700_35976[(2)] = inst_34683);

(statearr_34700_35976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (4))){
var inst_34626 = (state_34695[(8)]);
var inst_34626__$1 = (state_34695[(2)]);
var inst_34627 = (inst_34626__$1 == null);
var state_34695__$1 = (function (){var statearr_34701 = state_34695;
(statearr_34701[(8)] = inst_34626__$1);

return statearr_34701;
})();
if(cljs.core.truth_(inst_34627)){
var statearr_34702_35977 = state_34695__$1;
(statearr_34702_35977[(1)] = (5));

} else {
var statearr_34703_35978 = state_34695__$1;
(statearr_34703_35978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (15))){
var inst_34668 = (state_34695[(2)]);
var state_34695__$1 = state_34695;
var statearr_34704_35979 = state_34695__$1;
(statearr_34704_35979[(2)] = inst_34668);

(statearr_34704_35979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (21))){
var inst_34688 = (state_34695[(2)]);
var state_34695__$1 = (function (){var statearr_34705 = state_34695;
(statearr_34705[(9)] = inst_34688);

return statearr_34705;
})();
var statearr_34706_35980 = state_34695__$1;
(statearr_34706_35980[(2)] = null);

(statearr_34706_35980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (13))){
var inst_34650 = (state_34695[(10)]);
var inst_34652 = cljs.core.chunked_seq_QMARK_(inst_34650);
var state_34695__$1 = state_34695;
if(inst_34652){
var statearr_34707_35981 = state_34695__$1;
(statearr_34707_35981[(1)] = (16));

} else {
var statearr_34708_35982 = state_34695__$1;
(statearr_34708_35982[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (22))){
var inst_34680 = (state_34695[(2)]);
var state_34695__$1 = state_34695;
if(cljs.core.truth_(inst_34680)){
var statearr_34709_35983 = state_34695__$1;
(statearr_34709_35983[(1)] = (23));

} else {
var statearr_34710_35984 = state_34695__$1;
(statearr_34710_35984[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (6))){
var inst_34674 = (state_34695[(7)]);
var inst_34676 = (state_34695[(11)]);
var inst_34626 = (state_34695[(8)]);
var inst_34674__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34626) : topic_fn.call(null,inst_34626));
var inst_34675 = cljs.core.deref(mults);
var inst_34676__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34675,inst_34674__$1);
var state_34695__$1 = (function (){var statearr_34711 = state_34695;
(statearr_34711[(7)] = inst_34674__$1);

(statearr_34711[(11)] = inst_34676__$1);

return statearr_34711;
})();
if(cljs.core.truth_(inst_34676__$1)){
var statearr_34712_35986 = state_34695__$1;
(statearr_34712_35986[(1)] = (19));

} else {
var statearr_34713_35987 = state_34695__$1;
(statearr_34713_35987[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (25))){
var inst_34685 = (state_34695[(2)]);
var state_34695__$1 = state_34695;
var statearr_34714_35988 = state_34695__$1;
(statearr_34714_35988[(2)] = inst_34685);

(statearr_34714_35988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (17))){
var inst_34650 = (state_34695[(10)]);
var inst_34659 = cljs.core.first(inst_34650);
var inst_34660 = cljs.core.async.muxch_STAR_(inst_34659);
var inst_34661 = cljs.core.async.close_BANG_(inst_34660);
var inst_34662 = cljs.core.next(inst_34650);
var inst_34636 = inst_34662;
var inst_34637 = null;
var inst_34638 = (0);
var inst_34639 = (0);
var state_34695__$1 = (function (){var statearr_34715 = state_34695;
(statearr_34715[(12)] = inst_34636);

(statearr_34715[(13)] = inst_34639);

(statearr_34715[(14)] = inst_34638);

(statearr_34715[(15)] = inst_34637);

(statearr_34715[(16)] = inst_34661);

return statearr_34715;
})();
var statearr_34716_35989 = state_34695__$1;
(statearr_34716_35989[(2)] = null);

(statearr_34716_35989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (3))){
var inst_34693 = (state_34695[(2)]);
var state_34695__$1 = state_34695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34695__$1,inst_34693);
} else {
if((state_val_34696 === (12))){
var inst_34670 = (state_34695[(2)]);
var state_34695__$1 = state_34695;
var statearr_34717_35990 = state_34695__$1;
(statearr_34717_35990[(2)] = inst_34670);

(statearr_34717_35990[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (2))){
var state_34695__$1 = state_34695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34695__$1,(4),ch);
} else {
if((state_val_34696 === (23))){
var state_34695__$1 = state_34695;
var statearr_34718_35991 = state_34695__$1;
(statearr_34718_35991[(2)] = null);

(statearr_34718_35991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (19))){
var inst_34676 = (state_34695[(11)]);
var inst_34626 = (state_34695[(8)]);
var inst_34678 = cljs.core.async.muxch_STAR_(inst_34676);
var state_34695__$1 = state_34695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34695__$1,(22),inst_34678,inst_34626);
} else {
if((state_val_34696 === (11))){
var inst_34636 = (state_34695[(12)]);
var inst_34650 = (state_34695[(10)]);
var inst_34650__$1 = cljs.core.seq(inst_34636);
var state_34695__$1 = (function (){var statearr_34719 = state_34695;
(statearr_34719[(10)] = inst_34650__$1);

return statearr_34719;
})();
if(inst_34650__$1){
var statearr_34720_35992 = state_34695__$1;
(statearr_34720_35992[(1)] = (13));

} else {
var statearr_34721_35993 = state_34695__$1;
(statearr_34721_35993[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (9))){
var inst_34672 = (state_34695[(2)]);
var state_34695__$1 = state_34695;
var statearr_34722_35999 = state_34695__$1;
(statearr_34722_35999[(2)] = inst_34672);

(statearr_34722_35999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (5))){
var inst_34633 = cljs.core.deref(mults);
var inst_34634 = cljs.core.vals(inst_34633);
var inst_34635 = cljs.core.seq(inst_34634);
var inst_34636 = inst_34635;
var inst_34637 = null;
var inst_34638 = (0);
var inst_34639 = (0);
var state_34695__$1 = (function (){var statearr_34723 = state_34695;
(statearr_34723[(12)] = inst_34636);

(statearr_34723[(13)] = inst_34639);

(statearr_34723[(14)] = inst_34638);

(statearr_34723[(15)] = inst_34637);

return statearr_34723;
})();
var statearr_34724_36002 = state_34695__$1;
(statearr_34724_36002[(2)] = null);

(statearr_34724_36002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (14))){
var state_34695__$1 = state_34695;
var statearr_34728_36003 = state_34695__$1;
(statearr_34728_36003[(2)] = null);

(statearr_34728_36003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (16))){
var inst_34650 = (state_34695[(10)]);
var inst_34654 = cljs.core.chunk_first(inst_34650);
var inst_34655 = cljs.core.chunk_rest(inst_34650);
var inst_34656 = cljs.core.count(inst_34654);
var inst_34636 = inst_34655;
var inst_34637 = inst_34654;
var inst_34638 = inst_34656;
var inst_34639 = (0);
var state_34695__$1 = (function (){var statearr_34729 = state_34695;
(statearr_34729[(12)] = inst_34636);

(statearr_34729[(13)] = inst_34639);

(statearr_34729[(14)] = inst_34638);

(statearr_34729[(15)] = inst_34637);

return statearr_34729;
})();
var statearr_34730_36004 = state_34695__$1;
(statearr_34730_36004[(2)] = null);

(statearr_34730_36004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (10))){
var inst_34636 = (state_34695[(12)]);
var inst_34639 = (state_34695[(13)]);
var inst_34638 = (state_34695[(14)]);
var inst_34637 = (state_34695[(15)]);
var inst_34644 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34637,inst_34639);
var inst_34645 = cljs.core.async.muxch_STAR_(inst_34644);
var inst_34646 = cljs.core.async.close_BANG_(inst_34645);
var inst_34647 = (inst_34639 + (1));
var tmp34725 = inst_34636;
var tmp34726 = inst_34638;
var tmp34727 = inst_34637;
var inst_34636__$1 = tmp34725;
var inst_34637__$1 = tmp34727;
var inst_34638__$1 = tmp34726;
var inst_34639__$1 = inst_34647;
var state_34695__$1 = (function (){var statearr_34731 = state_34695;
(statearr_34731[(12)] = inst_34636__$1);

(statearr_34731[(13)] = inst_34639__$1);

(statearr_34731[(17)] = inst_34646);

(statearr_34731[(14)] = inst_34638__$1);

(statearr_34731[(15)] = inst_34637__$1);

return statearr_34731;
})();
var statearr_34732_36005 = state_34695__$1;
(statearr_34732_36005[(2)] = null);

(statearr_34732_36005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (18))){
var inst_34665 = (state_34695[(2)]);
var state_34695__$1 = state_34695;
var statearr_34733_36006 = state_34695__$1;
(statearr_34733_36006[(2)] = inst_34665);

(statearr_34733_36006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34696 === (8))){
var inst_34639 = (state_34695[(13)]);
var inst_34638 = (state_34695[(14)]);
var inst_34641 = (inst_34639 < inst_34638);
var inst_34642 = inst_34641;
var state_34695__$1 = state_34695;
if(cljs.core.truth_(inst_34642)){
var statearr_34734_36008 = state_34695__$1;
(statearr_34734_36008[(1)] = (10));

} else {
var statearr_34735_36009 = state_34695__$1;
(statearr_34735_36009[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33587__auto__ = null;
var cljs$core$async$state_machine__33587__auto____0 = (function (){
var statearr_34736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34736[(0)] = cljs$core$async$state_machine__33587__auto__);

(statearr_34736[(1)] = (1));

return statearr_34736;
});
var cljs$core$async$state_machine__33587__auto____1 = (function (state_34695){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_34695);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e34737){if((e34737 instanceof Object)){
var ex__33590__auto__ = e34737;
var statearr_34738_36011 = state_34695;
(statearr_34738_36011[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34737;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36012 = state_34695;
state_34695 = G__36012;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$state_machine__33587__auto__ = function(state_34695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33587__auto____1.call(this,state_34695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33587__auto____0;
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33587__auto____1;
return cljs$core$async$state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_34739 = f__33758__auto__();
(statearr_34739[(6)] = c__33757__auto___35968);

return statearr_34739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34741 = arguments.length;
switch (G__34741) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34743 = arguments.length;
switch (G__34743) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34745 = arguments.length;
switch (G__34745) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33757__auto___36024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_34784){
var state_val_34785 = (state_34784[(1)]);
if((state_val_34785 === (7))){
var state_34784__$1 = state_34784;
var statearr_34786_36025 = state_34784__$1;
(statearr_34786_36025[(2)] = null);

(statearr_34786_36025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (1))){
var state_34784__$1 = state_34784;
var statearr_34787_36026 = state_34784__$1;
(statearr_34787_36026[(2)] = null);

(statearr_34787_36026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (4))){
var inst_34748 = (state_34784[(7)]);
var inst_34750 = (inst_34748 < cnt);
var state_34784__$1 = state_34784;
if(cljs.core.truth_(inst_34750)){
var statearr_34788_36028 = state_34784__$1;
(statearr_34788_36028[(1)] = (6));

} else {
var statearr_34789_36030 = state_34784__$1;
(statearr_34789_36030[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (15))){
var inst_34780 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
var statearr_34790_36031 = state_34784__$1;
(statearr_34790_36031[(2)] = inst_34780);

(statearr_34790_36031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (13))){
var inst_34773 = cljs.core.async.close_BANG_(out);
var state_34784__$1 = state_34784;
var statearr_34791_36032 = state_34784__$1;
(statearr_34791_36032[(2)] = inst_34773);

(statearr_34791_36032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (6))){
var state_34784__$1 = state_34784;
var statearr_34792_36033 = state_34784__$1;
(statearr_34792_36033[(2)] = null);

(statearr_34792_36033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (3))){
var inst_34782 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34784__$1,inst_34782);
} else {
if((state_val_34785 === (12))){
var inst_34770 = (state_34784[(8)]);
var inst_34770__$1 = (state_34784[(2)]);
var inst_34771 = cljs.core.some(cljs.core.nil_QMARK_,inst_34770__$1);
var state_34784__$1 = (function (){var statearr_34793 = state_34784;
(statearr_34793[(8)] = inst_34770__$1);

return statearr_34793;
})();
if(cljs.core.truth_(inst_34771)){
var statearr_34794_36034 = state_34784__$1;
(statearr_34794_36034[(1)] = (13));

} else {
var statearr_34795_36035 = state_34784__$1;
(statearr_34795_36035[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (2))){
var inst_34747 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34748 = (0);
var state_34784__$1 = (function (){var statearr_34796 = state_34784;
(statearr_34796[(7)] = inst_34748);

(statearr_34796[(9)] = inst_34747);

return statearr_34796;
})();
var statearr_34797_36036 = state_34784__$1;
(statearr_34797_36036[(2)] = null);

(statearr_34797_36036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (11))){
var inst_34748 = (state_34784[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34784,(10),Object,null,(9));
var inst_34757 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34748) : chs__$1.call(null,inst_34748));
var inst_34758 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34748) : done.call(null,inst_34748));
var inst_34759 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34757,inst_34758);
var state_34784__$1 = state_34784;
var statearr_34798_36037 = state_34784__$1;
(statearr_34798_36037[(2)] = inst_34759);


cljs.core.async.impl.ioc_helpers.process_exception(state_34784__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (9))){
var inst_34748 = (state_34784[(7)]);
var inst_34761 = (state_34784[(2)]);
var inst_34762 = (inst_34748 + (1));
var inst_34748__$1 = inst_34762;
var state_34784__$1 = (function (){var statearr_34799 = state_34784;
(statearr_34799[(7)] = inst_34748__$1);

(statearr_34799[(10)] = inst_34761);

return statearr_34799;
})();
var statearr_34800_36038 = state_34784__$1;
(statearr_34800_36038[(2)] = null);

(statearr_34800_36038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (5))){
var inst_34768 = (state_34784[(2)]);
var state_34784__$1 = (function (){var statearr_34801 = state_34784;
(statearr_34801[(11)] = inst_34768);

return statearr_34801;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34784__$1,(12),dchan);
} else {
if((state_val_34785 === (14))){
var inst_34770 = (state_34784[(8)]);
var inst_34775 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34770);
var state_34784__$1 = state_34784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34784__$1,(16),out,inst_34775);
} else {
if((state_val_34785 === (16))){
var inst_34777 = (state_34784[(2)]);
var state_34784__$1 = (function (){var statearr_34802 = state_34784;
(statearr_34802[(12)] = inst_34777);

return statearr_34802;
})();
var statearr_34803_36041 = state_34784__$1;
(statearr_34803_36041[(2)] = null);

(statearr_34803_36041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (10))){
var inst_34752 = (state_34784[(2)]);
var inst_34753 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34784__$1 = (function (){var statearr_34804 = state_34784;
(statearr_34804[(13)] = inst_34752);

return statearr_34804;
})();
var statearr_34805_36042 = state_34784__$1;
(statearr_34805_36042[(2)] = inst_34753);


cljs.core.async.impl.ioc_helpers.process_exception(state_34784__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34785 === (8))){
var inst_34766 = (state_34784[(2)]);
var state_34784__$1 = state_34784;
var statearr_34806_36045 = state_34784__$1;
(statearr_34806_36045[(2)] = inst_34766);

(statearr_34806_36045[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33587__auto__ = null;
var cljs$core$async$state_machine__33587__auto____0 = (function (){
var statearr_34807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34807[(0)] = cljs$core$async$state_machine__33587__auto__);

(statearr_34807[(1)] = (1));

return statearr_34807;
});
var cljs$core$async$state_machine__33587__auto____1 = (function (state_34784){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_34784);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e34808){if((e34808 instanceof Object)){
var ex__33590__auto__ = e34808;
var statearr_34809_36046 = state_34784;
(statearr_34809_36046[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34808;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36047 = state_34784;
state_34784 = G__36047;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$state_machine__33587__auto__ = function(state_34784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33587__auto____1.call(this,state_34784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33587__auto____0;
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33587__auto____1;
return cljs$core$async$state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_34810 = f__33758__auto__();
(statearr_34810[(6)] = c__33757__auto___36024);

return statearr_34810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34813 = arguments.length;
switch (G__34813) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33757__auto___36050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_34845){
var state_val_34846 = (state_34845[(1)]);
if((state_val_34846 === (7))){
var inst_34824 = (state_34845[(7)]);
var inst_34825 = (state_34845[(8)]);
var inst_34824__$1 = (state_34845[(2)]);
var inst_34825__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34824__$1,(0),null);
var inst_34826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34824__$1,(1),null);
var inst_34827 = (inst_34825__$1 == null);
var state_34845__$1 = (function (){var statearr_34847 = state_34845;
(statearr_34847[(9)] = inst_34826);

(statearr_34847[(7)] = inst_34824__$1);

(statearr_34847[(8)] = inst_34825__$1);

return statearr_34847;
})();
if(cljs.core.truth_(inst_34827)){
var statearr_34848_36051 = state_34845__$1;
(statearr_34848_36051[(1)] = (8));

} else {
var statearr_34849_36052 = state_34845__$1;
(statearr_34849_36052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34846 === (1))){
var inst_34814 = cljs.core.vec(chs);
var inst_34815 = inst_34814;
var state_34845__$1 = (function (){var statearr_34850 = state_34845;
(statearr_34850[(10)] = inst_34815);

return statearr_34850;
})();
var statearr_34851_36053 = state_34845__$1;
(statearr_34851_36053[(2)] = null);

(statearr_34851_36053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34846 === (4))){
var inst_34815 = (state_34845[(10)]);
var state_34845__$1 = state_34845;
return cljs.core.async.ioc_alts_BANG_(state_34845__$1,(7),inst_34815);
} else {
if((state_val_34846 === (6))){
var inst_34841 = (state_34845[(2)]);
var state_34845__$1 = state_34845;
var statearr_34852_36055 = state_34845__$1;
(statearr_34852_36055[(2)] = inst_34841);

(statearr_34852_36055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34846 === (3))){
var inst_34843 = (state_34845[(2)]);
var state_34845__$1 = state_34845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34845__$1,inst_34843);
} else {
if((state_val_34846 === (2))){
var inst_34815 = (state_34845[(10)]);
var inst_34817 = cljs.core.count(inst_34815);
var inst_34818 = (inst_34817 > (0));
var state_34845__$1 = state_34845;
if(cljs.core.truth_(inst_34818)){
var statearr_34854_36057 = state_34845__$1;
(statearr_34854_36057[(1)] = (4));

} else {
var statearr_34855_36058 = state_34845__$1;
(statearr_34855_36058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34846 === (11))){
var inst_34815 = (state_34845[(10)]);
var inst_34834 = (state_34845[(2)]);
var tmp34853 = inst_34815;
var inst_34815__$1 = tmp34853;
var state_34845__$1 = (function (){var statearr_34856 = state_34845;
(statearr_34856[(11)] = inst_34834);

(statearr_34856[(10)] = inst_34815__$1);

return statearr_34856;
})();
var statearr_34857_36066 = state_34845__$1;
(statearr_34857_36066[(2)] = null);

(statearr_34857_36066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34846 === (9))){
var inst_34825 = (state_34845[(8)]);
var state_34845__$1 = state_34845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34845__$1,(11),out,inst_34825);
} else {
if((state_val_34846 === (5))){
var inst_34839 = cljs.core.async.close_BANG_(out);
var state_34845__$1 = state_34845;
var statearr_34858_36072 = state_34845__$1;
(statearr_34858_36072[(2)] = inst_34839);

(statearr_34858_36072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34846 === (10))){
var inst_34837 = (state_34845[(2)]);
var state_34845__$1 = state_34845;
var statearr_34859_36073 = state_34845__$1;
(statearr_34859_36073[(2)] = inst_34837);

(statearr_34859_36073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34846 === (8))){
var inst_34826 = (state_34845[(9)]);
var inst_34824 = (state_34845[(7)]);
var inst_34825 = (state_34845[(8)]);
var inst_34815 = (state_34845[(10)]);
var inst_34829 = (function (){var cs = inst_34815;
var vec__34820 = inst_34824;
var v = inst_34825;
var c = inst_34826;
return (function (p1__34811_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34811_SHARP_);
});
})();
var inst_34830 = cljs.core.filterv(inst_34829,inst_34815);
var inst_34815__$1 = inst_34830;
var state_34845__$1 = (function (){var statearr_34860 = state_34845;
(statearr_34860[(10)] = inst_34815__$1);

return statearr_34860;
})();
var statearr_34861_36077 = state_34845__$1;
(statearr_34861_36077[(2)] = null);

(statearr_34861_36077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33587__auto__ = null;
var cljs$core$async$state_machine__33587__auto____0 = (function (){
var statearr_34862 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34862[(0)] = cljs$core$async$state_machine__33587__auto__);

(statearr_34862[(1)] = (1));

return statearr_34862;
});
var cljs$core$async$state_machine__33587__auto____1 = (function (state_34845){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_34845);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e34863){if((e34863 instanceof Object)){
var ex__33590__auto__ = e34863;
var statearr_34864_36081 = state_34845;
(statearr_34864_36081[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34863;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36082 = state_34845;
state_34845 = G__36082;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$state_machine__33587__auto__ = function(state_34845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33587__auto____1.call(this,state_34845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33587__auto____0;
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33587__auto____1;
return cljs$core$async$state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_34865 = f__33758__auto__();
(statearr_34865[(6)] = c__33757__auto___36050);

return statearr_34865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34867 = arguments.length;
switch (G__34867) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33757__auto___36087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_34891){
var state_val_34892 = (state_34891[(1)]);
if((state_val_34892 === (7))){
var inst_34873 = (state_34891[(7)]);
var inst_34873__$1 = (state_34891[(2)]);
var inst_34874 = (inst_34873__$1 == null);
var inst_34875 = cljs.core.not(inst_34874);
var state_34891__$1 = (function (){var statearr_34893 = state_34891;
(statearr_34893[(7)] = inst_34873__$1);

return statearr_34893;
})();
if(inst_34875){
var statearr_34894_36090 = state_34891__$1;
(statearr_34894_36090[(1)] = (8));

} else {
var statearr_34895_36091 = state_34891__$1;
(statearr_34895_36091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (1))){
var inst_34868 = (0);
var state_34891__$1 = (function (){var statearr_34896 = state_34891;
(statearr_34896[(8)] = inst_34868);

return statearr_34896;
})();
var statearr_34897_36092 = state_34891__$1;
(statearr_34897_36092[(2)] = null);

(statearr_34897_36092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (4))){
var state_34891__$1 = state_34891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34891__$1,(7),ch);
} else {
if((state_val_34892 === (6))){
var inst_34886 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
var statearr_34898_36093 = state_34891__$1;
(statearr_34898_36093[(2)] = inst_34886);

(statearr_34898_36093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (3))){
var inst_34888 = (state_34891[(2)]);
var inst_34889 = cljs.core.async.close_BANG_(out);
var state_34891__$1 = (function (){var statearr_34899 = state_34891;
(statearr_34899[(9)] = inst_34888);

return statearr_34899;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34891__$1,inst_34889);
} else {
if((state_val_34892 === (2))){
var inst_34868 = (state_34891[(8)]);
var inst_34870 = (inst_34868 < n);
var state_34891__$1 = state_34891;
if(cljs.core.truth_(inst_34870)){
var statearr_34900_36103 = state_34891__$1;
(statearr_34900_36103[(1)] = (4));

} else {
var statearr_34901_36104 = state_34891__$1;
(statearr_34901_36104[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (11))){
var inst_34868 = (state_34891[(8)]);
var inst_34878 = (state_34891[(2)]);
var inst_34879 = (inst_34868 + (1));
var inst_34868__$1 = inst_34879;
var state_34891__$1 = (function (){var statearr_34902 = state_34891;
(statearr_34902[(8)] = inst_34868__$1);

(statearr_34902[(10)] = inst_34878);

return statearr_34902;
})();
var statearr_34903_36105 = state_34891__$1;
(statearr_34903_36105[(2)] = null);

(statearr_34903_36105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (9))){
var state_34891__$1 = state_34891;
var statearr_34904_36112 = state_34891__$1;
(statearr_34904_36112[(2)] = null);

(statearr_34904_36112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (5))){
var state_34891__$1 = state_34891;
var statearr_34905_36113 = state_34891__$1;
(statearr_34905_36113[(2)] = null);

(statearr_34905_36113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (10))){
var inst_34883 = (state_34891[(2)]);
var state_34891__$1 = state_34891;
var statearr_34906_36114 = state_34891__$1;
(statearr_34906_36114[(2)] = inst_34883);

(statearr_34906_36114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34892 === (8))){
var inst_34873 = (state_34891[(7)]);
var state_34891__$1 = state_34891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34891__$1,(11),out,inst_34873);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33587__auto__ = null;
var cljs$core$async$state_machine__33587__auto____0 = (function (){
var statearr_34907 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34907[(0)] = cljs$core$async$state_machine__33587__auto__);

(statearr_34907[(1)] = (1));

return statearr_34907;
});
var cljs$core$async$state_machine__33587__auto____1 = (function (state_34891){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_34891);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e34908){if((e34908 instanceof Object)){
var ex__33590__auto__ = e34908;
var statearr_34909_36115 = state_34891;
(statearr_34909_36115[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34908;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36116 = state_34891;
state_34891 = G__36116;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$state_machine__33587__auto__ = function(state_34891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33587__auto____1.call(this,state_34891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33587__auto____0;
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33587__auto____1;
return cljs$core$async$state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_34910 = f__33758__auto__();
(statearr_34910[(6)] = c__33757__auto___36087);

return statearr_34910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34912 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34912 = (function (f,ch,meta34913){
this.f = f;
this.ch = ch;
this.meta34913 = meta34913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34914,meta34913__$1){
var self__ = this;
var _34914__$1 = this;
return (new cljs.core.async.t_cljs$core$async34912(self__.f,self__.ch,meta34913__$1));
}));

(cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34914){
var self__ = this;
var _34914__$1 = this;
return self__.meta34913;
}));

(cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34915 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34915 = (function (f,ch,meta34913,_,fn1,meta34916){
this.f = f;
this.ch = ch;
this.meta34913 = meta34913;
this._ = _;
this.fn1 = fn1;
this.meta34916 = meta34916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34917,meta34916__$1){
var self__ = this;
var _34917__$1 = this;
return (new cljs.core.async.t_cljs$core$async34915(self__.f,self__.ch,self__.meta34913,self__._,self__.fn1,meta34916__$1));
}));

(cljs.core.async.t_cljs$core$async34915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34917){
var self__ = this;
var _34917__$1 = this;
return self__.meta34916;
}));

(cljs.core.async.t_cljs$core$async34915.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34915.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34915.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34915.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34911_SHARP_){
var G__34918 = (((p1__34911_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34911_SHARP_) : self__.f.call(null,p1__34911_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34918) : f1.call(null,G__34918));
});
}));

(cljs.core.async.t_cljs$core$async34915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34913","meta34913",1978123968,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34912","cljs.core.async/t_cljs$core$async34912",-1361213140,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34916","meta34916",-1571817451,null)], null);
}));

(cljs.core.async.t_cljs$core$async34915.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34915");

(cljs.core.async.t_cljs$core$async34915.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34915");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34915.
 */
cljs.core.async.__GT_t_cljs$core$async34915 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34915(f__$1,ch__$1,meta34913__$1,___$2,fn1__$1,meta34916){
return (new cljs.core.async.t_cljs$core$async34915(f__$1,ch__$1,meta34913__$1,___$2,fn1__$1,meta34916));
});

}

return (new cljs.core.async.t_cljs$core$async34915(self__.f,self__.ch,self__.meta34913,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34919 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34919) : self__.f.call(null,G__34919));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34912.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34913","meta34913",1978123968,null)], null);
}));

(cljs.core.async.t_cljs$core$async34912.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34912");

(cljs.core.async.t_cljs$core$async34912.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34912");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34912.
 */
cljs.core.async.__GT_t_cljs$core$async34912 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34912(f__$1,ch__$1,meta34913){
return (new cljs.core.async.t_cljs$core$async34912(f__$1,ch__$1,meta34913));
});

}

return (new cljs.core.async.t_cljs$core$async34912(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34920 = (function (f,ch,meta34921){
this.f = f;
this.ch = ch;
this.meta34921 = meta34921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34922,meta34921__$1){
var self__ = this;
var _34922__$1 = this;
return (new cljs.core.async.t_cljs$core$async34920(self__.f,self__.ch,meta34921__$1));
}));

(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34922){
var self__ = this;
var _34922__$1 = this;
return self__.meta34921;
}));

(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34921","meta34921",815239243,null)], null);
}));

(cljs.core.async.t_cljs$core$async34920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34920");

(cljs.core.async.t_cljs$core$async34920.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34920.
 */
cljs.core.async.__GT_t_cljs$core$async34920 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34920(f__$1,ch__$1,meta34921){
return (new cljs.core.async.t_cljs$core$async34920(f__$1,ch__$1,meta34921));
});

}

return (new cljs.core.async.t_cljs$core$async34920(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34923 = (function (p,ch,meta34924){
this.p = p;
this.ch = ch;
this.meta34924 = meta34924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34925,meta34924__$1){
var self__ = this;
var _34925__$1 = this;
return (new cljs.core.async.t_cljs$core$async34923(self__.p,self__.ch,meta34924__$1));
}));

(cljs.core.async.t_cljs$core$async34923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34925){
var self__ = this;
var _34925__$1 = this;
return self__.meta34924;
}));

(cljs.core.async.t_cljs$core$async34923.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34923.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34923.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34923.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34923.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34923.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34923.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34924","meta34924",213516260,null)], null);
}));

(cljs.core.async.t_cljs$core$async34923.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34923");

(cljs.core.async.t_cljs$core$async34923.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34923");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34923.
 */
cljs.core.async.__GT_t_cljs$core$async34923 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34923(p__$1,ch__$1,meta34924){
return (new cljs.core.async.t_cljs$core$async34923(p__$1,ch__$1,meta34924));
});

}

return (new cljs.core.async.t_cljs$core$async34923(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34927 = arguments.length;
switch (G__34927) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33757__auto___36136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_34948){
var state_val_34949 = (state_34948[(1)]);
if((state_val_34949 === (7))){
var inst_34944 = (state_34948[(2)]);
var state_34948__$1 = state_34948;
var statearr_34950_36140 = state_34948__$1;
(statearr_34950_36140[(2)] = inst_34944);

(statearr_34950_36140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (1))){
var state_34948__$1 = state_34948;
var statearr_34951_36141 = state_34948__$1;
(statearr_34951_36141[(2)] = null);

(statearr_34951_36141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (4))){
var inst_34930 = (state_34948[(7)]);
var inst_34930__$1 = (state_34948[(2)]);
var inst_34931 = (inst_34930__$1 == null);
var state_34948__$1 = (function (){var statearr_34952 = state_34948;
(statearr_34952[(7)] = inst_34930__$1);

return statearr_34952;
})();
if(cljs.core.truth_(inst_34931)){
var statearr_34953_36142 = state_34948__$1;
(statearr_34953_36142[(1)] = (5));

} else {
var statearr_34954_36143 = state_34948__$1;
(statearr_34954_36143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (6))){
var inst_34930 = (state_34948[(7)]);
var inst_34935 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34930) : p.call(null,inst_34930));
var state_34948__$1 = state_34948;
if(cljs.core.truth_(inst_34935)){
var statearr_34955_36144 = state_34948__$1;
(statearr_34955_36144[(1)] = (8));

} else {
var statearr_34956_36148 = state_34948__$1;
(statearr_34956_36148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (3))){
var inst_34946 = (state_34948[(2)]);
var state_34948__$1 = state_34948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34948__$1,inst_34946);
} else {
if((state_val_34949 === (2))){
var state_34948__$1 = state_34948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34948__$1,(4),ch);
} else {
if((state_val_34949 === (11))){
var inst_34938 = (state_34948[(2)]);
var state_34948__$1 = state_34948;
var statearr_34957_36149 = state_34948__$1;
(statearr_34957_36149[(2)] = inst_34938);

(statearr_34957_36149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (9))){
var state_34948__$1 = state_34948;
var statearr_34958_36152 = state_34948__$1;
(statearr_34958_36152[(2)] = null);

(statearr_34958_36152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (5))){
var inst_34933 = cljs.core.async.close_BANG_(out);
var state_34948__$1 = state_34948;
var statearr_34959_36153 = state_34948__$1;
(statearr_34959_36153[(2)] = inst_34933);

(statearr_34959_36153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (10))){
var inst_34941 = (state_34948[(2)]);
var state_34948__$1 = (function (){var statearr_34960 = state_34948;
(statearr_34960[(8)] = inst_34941);

return statearr_34960;
})();
var statearr_34961_36154 = state_34948__$1;
(statearr_34961_36154[(2)] = null);

(statearr_34961_36154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34949 === (8))){
var inst_34930 = (state_34948[(7)]);
var state_34948__$1 = state_34948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34948__$1,(11),out,inst_34930);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33587__auto__ = null;
var cljs$core$async$state_machine__33587__auto____0 = (function (){
var statearr_34962 = [null,null,null,null,null,null,null,null,null];
(statearr_34962[(0)] = cljs$core$async$state_machine__33587__auto__);

(statearr_34962[(1)] = (1));

return statearr_34962;
});
var cljs$core$async$state_machine__33587__auto____1 = (function (state_34948){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_34948);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e34963){if((e34963 instanceof Object)){
var ex__33590__auto__ = e34963;
var statearr_34964_36155 = state_34948;
(statearr_34964_36155[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34963;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36156 = state_34948;
state_34948 = G__36156;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$state_machine__33587__auto__ = function(state_34948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33587__auto____1.call(this,state_34948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33587__auto____0;
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33587__auto____1;
return cljs$core$async$state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_34965 = f__33758__auto__();
(statearr_34965[(6)] = c__33757__auto___36136);

return statearr_34965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34967 = arguments.length;
switch (G__34967) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33757__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_35029){
var state_val_35030 = (state_35029[(1)]);
if((state_val_35030 === (7))){
var inst_35025 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
var statearr_35031_36160 = state_35029__$1;
(statearr_35031_36160[(2)] = inst_35025);

(statearr_35031_36160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (20))){
var inst_34995 = (state_35029[(7)]);
var inst_35006 = (state_35029[(2)]);
var inst_35007 = cljs.core.next(inst_34995);
var inst_34981 = inst_35007;
var inst_34982 = null;
var inst_34983 = (0);
var inst_34984 = (0);
var state_35029__$1 = (function (){var statearr_35032 = state_35029;
(statearr_35032[(8)] = inst_34983);

(statearr_35032[(9)] = inst_35006);

(statearr_35032[(10)] = inst_34981);

(statearr_35032[(11)] = inst_34982);

(statearr_35032[(12)] = inst_34984);

return statearr_35032;
})();
var statearr_35033_36164 = state_35029__$1;
(statearr_35033_36164[(2)] = null);

(statearr_35033_36164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (1))){
var state_35029__$1 = state_35029;
var statearr_35034_36165 = state_35029__$1;
(statearr_35034_36165[(2)] = null);

(statearr_35034_36165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (4))){
var inst_34970 = (state_35029[(13)]);
var inst_34970__$1 = (state_35029[(2)]);
var inst_34971 = (inst_34970__$1 == null);
var state_35029__$1 = (function (){var statearr_35035 = state_35029;
(statearr_35035[(13)] = inst_34970__$1);

return statearr_35035;
})();
if(cljs.core.truth_(inst_34971)){
var statearr_35036_36172 = state_35029__$1;
(statearr_35036_36172[(1)] = (5));

} else {
var statearr_35037_36173 = state_35029__$1;
(statearr_35037_36173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (15))){
var state_35029__$1 = state_35029;
var statearr_35041_36174 = state_35029__$1;
(statearr_35041_36174[(2)] = null);

(statearr_35041_36174[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (21))){
var state_35029__$1 = state_35029;
var statearr_35042_36175 = state_35029__$1;
(statearr_35042_36175[(2)] = null);

(statearr_35042_36175[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (13))){
var inst_34983 = (state_35029[(8)]);
var inst_34981 = (state_35029[(10)]);
var inst_34982 = (state_35029[(11)]);
var inst_34984 = (state_35029[(12)]);
var inst_34991 = (state_35029[(2)]);
var inst_34992 = (inst_34984 + (1));
var tmp35038 = inst_34983;
var tmp35039 = inst_34981;
var tmp35040 = inst_34982;
var inst_34981__$1 = tmp35039;
var inst_34982__$1 = tmp35040;
var inst_34983__$1 = tmp35038;
var inst_34984__$1 = inst_34992;
var state_35029__$1 = (function (){var statearr_35043 = state_35029;
(statearr_35043[(8)] = inst_34983__$1);

(statearr_35043[(14)] = inst_34991);

(statearr_35043[(10)] = inst_34981__$1);

(statearr_35043[(11)] = inst_34982__$1);

(statearr_35043[(12)] = inst_34984__$1);

return statearr_35043;
})();
var statearr_35044_36180 = state_35029__$1;
(statearr_35044_36180[(2)] = null);

(statearr_35044_36180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (22))){
var state_35029__$1 = state_35029;
var statearr_35045_36181 = state_35029__$1;
(statearr_35045_36181[(2)] = null);

(statearr_35045_36181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (6))){
var inst_34970 = (state_35029[(13)]);
var inst_34979 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34970) : f.call(null,inst_34970));
var inst_34980 = cljs.core.seq(inst_34979);
var inst_34981 = inst_34980;
var inst_34982 = null;
var inst_34983 = (0);
var inst_34984 = (0);
var state_35029__$1 = (function (){var statearr_35046 = state_35029;
(statearr_35046[(8)] = inst_34983);

(statearr_35046[(10)] = inst_34981);

(statearr_35046[(11)] = inst_34982);

(statearr_35046[(12)] = inst_34984);

return statearr_35046;
})();
var statearr_35047_36183 = state_35029__$1;
(statearr_35047_36183[(2)] = null);

(statearr_35047_36183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (17))){
var inst_34995 = (state_35029[(7)]);
var inst_34999 = cljs.core.chunk_first(inst_34995);
var inst_35000 = cljs.core.chunk_rest(inst_34995);
var inst_35001 = cljs.core.count(inst_34999);
var inst_34981 = inst_35000;
var inst_34982 = inst_34999;
var inst_34983 = inst_35001;
var inst_34984 = (0);
var state_35029__$1 = (function (){var statearr_35048 = state_35029;
(statearr_35048[(8)] = inst_34983);

(statearr_35048[(10)] = inst_34981);

(statearr_35048[(11)] = inst_34982);

(statearr_35048[(12)] = inst_34984);

return statearr_35048;
})();
var statearr_35049_36184 = state_35029__$1;
(statearr_35049_36184[(2)] = null);

(statearr_35049_36184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (3))){
var inst_35027 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35029__$1,inst_35027);
} else {
if((state_val_35030 === (12))){
var inst_35015 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
var statearr_35050_36185 = state_35029__$1;
(statearr_35050_36185[(2)] = inst_35015);

(statearr_35050_36185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (2))){
var state_35029__$1 = state_35029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35029__$1,(4),in$);
} else {
if((state_val_35030 === (23))){
var inst_35023 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
var statearr_35051_36186 = state_35029__$1;
(statearr_35051_36186[(2)] = inst_35023);

(statearr_35051_36186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (19))){
var inst_35010 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
var statearr_35052_36187 = state_35029__$1;
(statearr_35052_36187[(2)] = inst_35010);

(statearr_35052_36187[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (11))){
var inst_34995 = (state_35029[(7)]);
var inst_34981 = (state_35029[(10)]);
var inst_34995__$1 = cljs.core.seq(inst_34981);
var state_35029__$1 = (function (){var statearr_35053 = state_35029;
(statearr_35053[(7)] = inst_34995__$1);

return statearr_35053;
})();
if(inst_34995__$1){
var statearr_35054_36188 = state_35029__$1;
(statearr_35054_36188[(1)] = (14));

} else {
var statearr_35055_36189 = state_35029__$1;
(statearr_35055_36189[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (9))){
var inst_35017 = (state_35029[(2)]);
var inst_35018 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35029__$1 = (function (){var statearr_35056 = state_35029;
(statearr_35056[(15)] = inst_35017);

return statearr_35056;
})();
if(cljs.core.truth_(inst_35018)){
var statearr_35057_36190 = state_35029__$1;
(statearr_35057_36190[(1)] = (21));

} else {
var statearr_35058_36191 = state_35029__$1;
(statearr_35058_36191[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (5))){
var inst_34973 = cljs.core.async.close_BANG_(out);
var state_35029__$1 = state_35029;
var statearr_35059_36192 = state_35029__$1;
(statearr_35059_36192[(2)] = inst_34973);

(statearr_35059_36192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (14))){
var inst_34995 = (state_35029[(7)]);
var inst_34997 = cljs.core.chunked_seq_QMARK_(inst_34995);
var state_35029__$1 = state_35029;
if(inst_34997){
var statearr_35060_36193 = state_35029__$1;
(statearr_35060_36193[(1)] = (17));

} else {
var statearr_35061_36194 = state_35029__$1;
(statearr_35061_36194[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (16))){
var inst_35013 = (state_35029[(2)]);
var state_35029__$1 = state_35029;
var statearr_35062_36196 = state_35029__$1;
(statearr_35062_36196[(2)] = inst_35013);

(statearr_35062_36196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35030 === (10))){
var inst_34982 = (state_35029[(11)]);
var inst_34984 = (state_35029[(12)]);
var inst_34989 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34982,inst_34984);
var state_35029__$1 = state_35029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35029__$1,(13),out,inst_34989);
} else {
if((state_val_35030 === (18))){
var inst_34995 = (state_35029[(7)]);
var inst_35004 = cljs.core.first(inst_34995);
var state_35029__$1 = state_35029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35029__$1,(20),out,inst_35004);
} else {
if((state_val_35030 === (8))){
var inst_34983 = (state_35029[(8)]);
var inst_34984 = (state_35029[(12)]);
var inst_34986 = (inst_34984 < inst_34983);
var inst_34987 = inst_34986;
var state_35029__$1 = state_35029;
if(cljs.core.truth_(inst_34987)){
var statearr_35063_36198 = state_35029__$1;
(statearr_35063_36198[(1)] = (10));

} else {
var statearr_35064_36199 = state_35029__$1;
(statearr_35064_36199[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33587__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33587__auto____0 = (function (){
var statearr_35065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35065[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33587__auto__);

(statearr_35065[(1)] = (1));

return statearr_35065;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33587__auto____1 = (function (state_35029){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_35029);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e35066){if((e35066 instanceof Object)){
var ex__33590__auto__ = e35066;
var statearr_35067_36201 = state_35029;
(statearr_35067_36201[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35066;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36203 = state_35029;
state_35029 = G__36203;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33587__auto__ = function(state_35029){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33587__auto____1.call(this,state_35029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33587__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33587__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_35068 = f__33758__auto__();
(statearr_35068[(6)] = c__33757__auto__);

return statearr_35068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));

return c__33757__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35070 = arguments.length;
switch (G__35070) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35072 = arguments.length;
switch (G__35072) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35074 = arguments.length;
switch (G__35074) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33757__auto___36209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_35098){
var state_val_35099 = (state_35098[(1)]);
if((state_val_35099 === (7))){
var inst_35093 = (state_35098[(2)]);
var state_35098__$1 = state_35098;
var statearr_35100_36210 = state_35098__$1;
(statearr_35100_36210[(2)] = inst_35093);

(statearr_35100_36210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35099 === (1))){
var inst_35075 = null;
var state_35098__$1 = (function (){var statearr_35101 = state_35098;
(statearr_35101[(7)] = inst_35075);

return statearr_35101;
})();
var statearr_35102_36211 = state_35098__$1;
(statearr_35102_36211[(2)] = null);

(statearr_35102_36211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35099 === (4))){
var inst_35078 = (state_35098[(8)]);
var inst_35078__$1 = (state_35098[(2)]);
var inst_35079 = (inst_35078__$1 == null);
var inst_35080 = cljs.core.not(inst_35079);
var state_35098__$1 = (function (){var statearr_35103 = state_35098;
(statearr_35103[(8)] = inst_35078__$1);

return statearr_35103;
})();
if(inst_35080){
var statearr_35104_36212 = state_35098__$1;
(statearr_35104_36212[(1)] = (5));

} else {
var statearr_35105_36213 = state_35098__$1;
(statearr_35105_36213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35099 === (6))){
var state_35098__$1 = state_35098;
var statearr_35106_36215 = state_35098__$1;
(statearr_35106_36215[(2)] = null);

(statearr_35106_36215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35099 === (3))){
var inst_35095 = (state_35098[(2)]);
var inst_35096 = cljs.core.async.close_BANG_(out);
var state_35098__$1 = (function (){var statearr_35107 = state_35098;
(statearr_35107[(9)] = inst_35095);

return statearr_35107;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35098__$1,inst_35096);
} else {
if((state_val_35099 === (2))){
var state_35098__$1 = state_35098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35098__$1,(4),ch);
} else {
if((state_val_35099 === (11))){
var inst_35078 = (state_35098[(8)]);
var inst_35087 = (state_35098[(2)]);
var inst_35075 = inst_35078;
var state_35098__$1 = (function (){var statearr_35108 = state_35098;
(statearr_35108[(7)] = inst_35075);

(statearr_35108[(10)] = inst_35087);

return statearr_35108;
})();
var statearr_35109_36233 = state_35098__$1;
(statearr_35109_36233[(2)] = null);

(statearr_35109_36233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35099 === (9))){
var inst_35078 = (state_35098[(8)]);
var state_35098__$1 = state_35098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35098__$1,(11),out,inst_35078);
} else {
if((state_val_35099 === (5))){
var inst_35075 = (state_35098[(7)]);
var inst_35078 = (state_35098[(8)]);
var inst_35082 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35078,inst_35075);
var state_35098__$1 = state_35098;
if(inst_35082){
var statearr_35111_36239 = state_35098__$1;
(statearr_35111_36239[(1)] = (8));

} else {
var statearr_35112_36240 = state_35098__$1;
(statearr_35112_36240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35099 === (10))){
var inst_35090 = (state_35098[(2)]);
var state_35098__$1 = state_35098;
var statearr_35113_36241 = state_35098__$1;
(statearr_35113_36241[(2)] = inst_35090);

(statearr_35113_36241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35099 === (8))){
var inst_35075 = (state_35098[(7)]);
var tmp35110 = inst_35075;
var inst_35075__$1 = tmp35110;
var state_35098__$1 = (function (){var statearr_35114 = state_35098;
(statearr_35114[(7)] = inst_35075__$1);

return statearr_35114;
})();
var statearr_35115_36242 = state_35098__$1;
(statearr_35115_36242[(2)] = null);

(statearr_35115_36242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33587__auto__ = null;
var cljs$core$async$state_machine__33587__auto____0 = (function (){
var statearr_35116 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35116[(0)] = cljs$core$async$state_machine__33587__auto__);

(statearr_35116[(1)] = (1));

return statearr_35116;
});
var cljs$core$async$state_machine__33587__auto____1 = (function (state_35098){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_35098);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e35117){if((e35117 instanceof Object)){
var ex__33590__auto__ = e35117;
var statearr_35118_36243 = state_35098;
(statearr_35118_36243[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35117;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36244 = state_35098;
state_35098 = G__36244;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$state_machine__33587__auto__ = function(state_35098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33587__auto____1.call(this,state_35098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33587__auto____0;
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33587__auto____1;
return cljs$core$async$state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_35119 = f__33758__auto__();
(statearr_35119[(6)] = c__33757__auto___36209);

return statearr_35119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35121 = arguments.length;
switch (G__35121) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33757__auto___36260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_35159){
var state_val_35160 = (state_35159[(1)]);
if((state_val_35160 === (7))){
var inst_35155 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
var statearr_35161_36261 = state_35159__$1;
(statearr_35161_36261[(2)] = inst_35155);

(statearr_35161_36261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (1))){
var inst_35122 = (new Array(n));
var inst_35123 = inst_35122;
var inst_35124 = (0);
var state_35159__$1 = (function (){var statearr_35162 = state_35159;
(statearr_35162[(7)] = inst_35123);

(statearr_35162[(8)] = inst_35124);

return statearr_35162;
})();
var statearr_35163_36271 = state_35159__$1;
(statearr_35163_36271[(2)] = null);

(statearr_35163_36271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (4))){
var inst_35127 = (state_35159[(9)]);
var inst_35127__$1 = (state_35159[(2)]);
var inst_35128 = (inst_35127__$1 == null);
var inst_35129 = cljs.core.not(inst_35128);
var state_35159__$1 = (function (){var statearr_35164 = state_35159;
(statearr_35164[(9)] = inst_35127__$1);

return statearr_35164;
})();
if(inst_35129){
var statearr_35165_36276 = state_35159__$1;
(statearr_35165_36276[(1)] = (5));

} else {
var statearr_35166_36277 = state_35159__$1;
(statearr_35166_36277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (15))){
var inst_35149 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
var statearr_35167_36281 = state_35159__$1;
(statearr_35167_36281[(2)] = inst_35149);

(statearr_35167_36281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (13))){
var state_35159__$1 = state_35159;
var statearr_35168_36286 = state_35159__$1;
(statearr_35168_36286[(2)] = null);

(statearr_35168_36286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (6))){
var inst_35124 = (state_35159[(8)]);
var inst_35145 = (inst_35124 > (0));
var state_35159__$1 = state_35159;
if(cljs.core.truth_(inst_35145)){
var statearr_35169_36289 = state_35159__$1;
(statearr_35169_36289[(1)] = (12));

} else {
var statearr_35170_36291 = state_35159__$1;
(statearr_35170_36291[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (3))){
var inst_35157 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35159__$1,inst_35157);
} else {
if((state_val_35160 === (12))){
var inst_35123 = (state_35159[(7)]);
var inst_35147 = cljs.core.vec(inst_35123);
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35159__$1,(15),out,inst_35147);
} else {
if((state_val_35160 === (2))){
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35159__$1,(4),ch);
} else {
if((state_val_35160 === (11))){
var inst_35139 = (state_35159[(2)]);
var inst_35140 = (new Array(n));
var inst_35123 = inst_35140;
var inst_35124 = (0);
var state_35159__$1 = (function (){var statearr_35171 = state_35159;
(statearr_35171[(10)] = inst_35139);

(statearr_35171[(7)] = inst_35123);

(statearr_35171[(8)] = inst_35124);

return statearr_35171;
})();
var statearr_35172_36295 = state_35159__$1;
(statearr_35172_36295[(2)] = null);

(statearr_35172_36295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (9))){
var inst_35123 = (state_35159[(7)]);
var inst_35137 = cljs.core.vec(inst_35123);
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35159__$1,(11),out,inst_35137);
} else {
if((state_val_35160 === (5))){
var inst_35123 = (state_35159[(7)]);
var inst_35127 = (state_35159[(9)]);
var inst_35124 = (state_35159[(8)]);
var inst_35132 = (state_35159[(11)]);
var inst_35131 = (inst_35123[inst_35124] = inst_35127);
var inst_35132__$1 = (inst_35124 + (1));
var inst_35133 = (inst_35132__$1 < n);
var state_35159__$1 = (function (){var statearr_35173 = state_35159;
(statearr_35173[(12)] = inst_35131);

(statearr_35173[(11)] = inst_35132__$1);

return statearr_35173;
})();
if(cljs.core.truth_(inst_35133)){
var statearr_35174_36298 = state_35159__$1;
(statearr_35174_36298[(1)] = (8));

} else {
var statearr_35175_36299 = state_35159__$1;
(statearr_35175_36299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (14))){
var inst_35152 = (state_35159[(2)]);
var inst_35153 = cljs.core.async.close_BANG_(out);
var state_35159__$1 = (function (){var statearr_35177 = state_35159;
(statearr_35177[(13)] = inst_35152);

return statearr_35177;
})();
var statearr_35178_36300 = state_35159__$1;
(statearr_35178_36300[(2)] = inst_35153);

(statearr_35178_36300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (10))){
var inst_35143 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
var statearr_35179_36301 = state_35159__$1;
(statearr_35179_36301[(2)] = inst_35143);

(statearr_35179_36301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (8))){
var inst_35123 = (state_35159[(7)]);
var inst_35132 = (state_35159[(11)]);
var tmp35176 = inst_35123;
var inst_35123__$1 = tmp35176;
var inst_35124 = inst_35132;
var state_35159__$1 = (function (){var statearr_35180 = state_35159;
(statearr_35180[(7)] = inst_35123__$1);

(statearr_35180[(8)] = inst_35124);

return statearr_35180;
})();
var statearr_35181_36302 = state_35159__$1;
(statearr_35181_36302[(2)] = null);

(statearr_35181_36302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33587__auto__ = null;
var cljs$core$async$state_machine__33587__auto____0 = (function (){
var statearr_35182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35182[(0)] = cljs$core$async$state_machine__33587__auto__);

(statearr_35182[(1)] = (1));

return statearr_35182;
});
var cljs$core$async$state_machine__33587__auto____1 = (function (state_35159){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_35159);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e35183){if((e35183 instanceof Object)){
var ex__33590__auto__ = e35183;
var statearr_35184_36306 = state_35159;
(statearr_35184_36306[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35183;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36307 = state_35159;
state_35159 = G__36307;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$state_machine__33587__auto__ = function(state_35159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33587__auto____1.call(this,state_35159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33587__auto____0;
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33587__auto____1;
return cljs$core$async$state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_35185 = f__33758__auto__();
(statearr_35185[(6)] = c__33757__auto___36260);

return statearr_35185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35187 = arguments.length;
switch (G__35187) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33757__auto___36313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33758__auto__ = (function (){var switch__33586__auto__ = (function (state_35229){
var state_val_35230 = (state_35229[(1)]);
if((state_val_35230 === (7))){
var inst_35225 = (state_35229[(2)]);
var state_35229__$1 = state_35229;
var statearr_35231_36314 = state_35229__$1;
(statearr_35231_36314[(2)] = inst_35225);

(statearr_35231_36314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (1))){
var inst_35188 = [];
var inst_35189 = inst_35188;
var inst_35190 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35229__$1 = (function (){var statearr_35232 = state_35229;
(statearr_35232[(7)] = inst_35189);

(statearr_35232[(8)] = inst_35190);

return statearr_35232;
})();
var statearr_35233_36315 = state_35229__$1;
(statearr_35233_36315[(2)] = null);

(statearr_35233_36315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (4))){
var inst_35193 = (state_35229[(9)]);
var inst_35193__$1 = (state_35229[(2)]);
var inst_35194 = (inst_35193__$1 == null);
var inst_35195 = cljs.core.not(inst_35194);
var state_35229__$1 = (function (){var statearr_35234 = state_35229;
(statearr_35234[(9)] = inst_35193__$1);

return statearr_35234;
})();
if(inst_35195){
var statearr_35235_36316 = state_35229__$1;
(statearr_35235_36316[(1)] = (5));

} else {
var statearr_35236_36317 = state_35229__$1;
(statearr_35236_36317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (15))){
var inst_35219 = (state_35229[(2)]);
var state_35229__$1 = state_35229;
var statearr_35237_36318 = state_35229__$1;
(statearr_35237_36318[(2)] = inst_35219);

(statearr_35237_36318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (13))){
var state_35229__$1 = state_35229;
var statearr_35238_36319 = state_35229__$1;
(statearr_35238_36319[(2)] = null);

(statearr_35238_36319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (6))){
var inst_35189 = (state_35229[(7)]);
var inst_35214 = inst_35189.length;
var inst_35215 = (inst_35214 > (0));
var state_35229__$1 = state_35229;
if(cljs.core.truth_(inst_35215)){
var statearr_35239_36320 = state_35229__$1;
(statearr_35239_36320[(1)] = (12));

} else {
var statearr_35240_36321 = state_35229__$1;
(statearr_35240_36321[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (3))){
var inst_35227 = (state_35229[(2)]);
var state_35229__$1 = state_35229;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35229__$1,inst_35227);
} else {
if((state_val_35230 === (12))){
var inst_35189 = (state_35229[(7)]);
var inst_35217 = cljs.core.vec(inst_35189);
var state_35229__$1 = state_35229;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35229__$1,(15),out,inst_35217);
} else {
if((state_val_35230 === (2))){
var state_35229__$1 = state_35229;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35229__$1,(4),ch);
} else {
if((state_val_35230 === (11))){
var inst_35193 = (state_35229[(9)]);
var inst_35197 = (state_35229[(10)]);
var inst_35207 = (state_35229[(2)]);
var inst_35208 = [];
var inst_35209 = inst_35208.push(inst_35193);
var inst_35189 = inst_35208;
var inst_35190 = inst_35197;
var state_35229__$1 = (function (){var statearr_35241 = state_35229;
(statearr_35241[(11)] = inst_35207);

(statearr_35241[(7)] = inst_35189);

(statearr_35241[(8)] = inst_35190);

(statearr_35241[(12)] = inst_35209);

return statearr_35241;
})();
var statearr_35242_36336 = state_35229__$1;
(statearr_35242_36336[(2)] = null);

(statearr_35242_36336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (9))){
var inst_35189 = (state_35229[(7)]);
var inst_35205 = cljs.core.vec(inst_35189);
var state_35229__$1 = state_35229;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35229__$1,(11),out,inst_35205);
} else {
if((state_val_35230 === (5))){
var inst_35193 = (state_35229[(9)]);
var inst_35190 = (state_35229[(8)]);
var inst_35197 = (state_35229[(10)]);
var inst_35197__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35193) : f.call(null,inst_35193));
var inst_35198 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35197__$1,inst_35190);
var inst_35199 = cljs.core.keyword_identical_QMARK_(inst_35190,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35200 = ((inst_35198) || (inst_35199));
var state_35229__$1 = (function (){var statearr_35243 = state_35229;
(statearr_35243[(10)] = inst_35197__$1);

return statearr_35243;
})();
if(cljs.core.truth_(inst_35200)){
var statearr_35244_36357 = state_35229__$1;
(statearr_35244_36357[(1)] = (8));

} else {
var statearr_35245_36362 = state_35229__$1;
(statearr_35245_36362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (14))){
var inst_35222 = (state_35229[(2)]);
var inst_35223 = cljs.core.async.close_BANG_(out);
var state_35229__$1 = (function (){var statearr_35247 = state_35229;
(statearr_35247[(13)] = inst_35222);

return statearr_35247;
})();
var statearr_35248_36371 = state_35229__$1;
(statearr_35248_36371[(2)] = inst_35223);

(statearr_35248_36371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (10))){
var inst_35212 = (state_35229[(2)]);
var state_35229__$1 = state_35229;
var statearr_35249_36374 = state_35229__$1;
(statearr_35249_36374[(2)] = inst_35212);

(statearr_35249_36374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35230 === (8))){
var inst_35189 = (state_35229[(7)]);
var inst_35193 = (state_35229[(9)]);
var inst_35197 = (state_35229[(10)]);
var inst_35202 = inst_35189.push(inst_35193);
var tmp35246 = inst_35189;
var inst_35189__$1 = tmp35246;
var inst_35190 = inst_35197;
var state_35229__$1 = (function (){var statearr_35250 = state_35229;
(statearr_35250[(14)] = inst_35202);

(statearr_35250[(7)] = inst_35189__$1);

(statearr_35250[(8)] = inst_35190);

return statearr_35250;
})();
var statearr_35251_36386 = state_35229__$1;
(statearr_35251_36386[(2)] = null);

(statearr_35251_36386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33587__auto__ = null;
var cljs$core$async$state_machine__33587__auto____0 = (function (){
var statearr_35252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35252[(0)] = cljs$core$async$state_machine__33587__auto__);

(statearr_35252[(1)] = (1));

return statearr_35252;
});
var cljs$core$async$state_machine__33587__auto____1 = (function (state_35229){
while(true){
var ret_value__33588__auto__ = (function (){try{while(true){
var result__33589__auto__ = switch__33586__auto__(state_35229);
if(cljs.core.keyword_identical_QMARK_(result__33589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33589__auto__;
}
break;
}
}catch (e35253){if((e35253 instanceof Object)){
var ex__33590__auto__ = e35253;
var statearr_35254_36408 = state_35229;
(statearr_35254_36408[(5)] = ex__33590__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35253;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36417 = state_35229;
state_35229 = G__36417;
continue;
} else {
return ret_value__33588__auto__;
}
break;
}
});
cljs$core$async$state_machine__33587__auto__ = function(state_35229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33587__auto____1.call(this,state_35229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33587__auto____0;
cljs$core$async$state_machine__33587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33587__auto____1;
return cljs$core$async$state_machine__33587__auto__;
})()
})();
var state__33759__auto__ = (function (){var statearr_35255 = f__33758__auto__();
(statearr_35255[(6)] = c__33757__auto___36313);

return statearr_35255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33759__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
