goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33599 = (function (val,meta33600){
this.val = val;
this.meta33600 = meta33600;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33601,meta33600__$1){
var self__ = this;
var _33601__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33599(self__.val,meta33600__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33601){
var self__ = this;
var _33601__$1 = this;
return self__.meta33600;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33599.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta33600","meta33600",1911690725,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33599.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33599.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels33599");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33599.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels33599");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels33599.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels33599 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels33599(val__$1,meta33600){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33599(val__$1,meta33600));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels33599(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_33663 = self__.puts.pop();
if((putter_33663 == null)){
} else {
var put_handler_33664 = putter_33663.handler;
var val_33665 = putter_33663.val;
if(cljs.core.async.impl.protocols.active_QMARK_(put_handler_33664)){
var put_cb_33666 = cljs.core.async.impl.protocols.commit(put_handler_33664);
cljs.core.async.impl.dispatch.run(((function (put_cb_33666,put_handler_33664,val_33665,putter_33663,this$__$1){
return (function (){
return (put_cb_33666.cljs$core$IFn$_invoke$arity$1 ? put_cb_33666.cljs$core$IFn$_invoke$arity$1(true) : put_cb_33666.call(null,true));
});})(put_cb_33666,put_handler_33664,val_33665,putter_33663,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return cljs.core.async.impl.protocols.close_BANG_(this$__$1);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || ((!(cljs.core.async.impl.protocols.active_QMARK_(handler)))))){
return cljs.core.async.impl.channels.box((!(closed__$1)));
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = self__.buf;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.async.impl.protocols.full_QMARK_(self__.buf));
} else {
return and__4174__auto__;
}
})())){
cljs.core.async.impl.protocols.commit(handler);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0))))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_(taker)){
var ret = cljs.core.async.impl.protocols.commit(taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_(self__.buf);
var G__33669 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__33669;
continue;
} else {
var G__33670 = takers;
takers = G__33670;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__33615_33671 = cljs.core.seq(take_cbs);
var chunk__33616_33672 = null;
var count__33617_33673 = (0);
var i__33618_33674 = (0);
while(true){
if((i__33618_33674 < count__33617_33673)){
var f_33675 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__33616_33672,i__33618_33674);
cljs.core.async.impl.dispatch.run(f_33675);


var G__33676 = seq__33615_33671;
var G__33677 = chunk__33616_33672;
var G__33678 = count__33617_33673;
var G__33679 = (i__33618_33674 + (1));
seq__33615_33671 = G__33676;
chunk__33616_33672 = G__33677;
count__33617_33673 = G__33678;
i__33618_33674 = G__33679;
continue;
} else {
var temp__5735__auto___33680 = cljs.core.seq(seq__33615_33671);
if(temp__5735__auto___33680){
var seq__33615_33681__$1 = temp__5735__auto___33680;
if(cljs.core.chunked_seq_QMARK_(seq__33615_33681__$1)){
var c__4609__auto___33682 = cljs.core.chunk_first(seq__33615_33681__$1);
var G__33683 = cljs.core.chunk_rest(seq__33615_33681__$1);
var G__33684 = c__4609__auto___33682;
var G__33685 = cljs.core.count(c__4609__auto___33682);
var G__33686 = (0);
seq__33615_33671 = G__33683;
chunk__33616_33672 = G__33684;
count__33617_33673 = G__33685;
i__33618_33674 = G__33686;
continue;
} else {
var f_33687 = cljs.core.first(seq__33615_33681__$1);
cljs.core.async.impl.dispatch.run(f_33687);


var G__33688 = cljs.core.next(seq__33615_33681__$1);
var G__33689 = null;
var G__33690 = (0);
var G__33691 = (0);
seq__33615_33671 = G__33688;
chunk__33616_33672 = G__33689;
count__33617_33673 = G__33690;
i__33618_33674 = G__33691;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_(taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
cljs.core.async.impl.protocols.commit(handler);

cljs.core.async.impl.dispatch.run((function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
}));

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_(handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.async.impl.protocols.active_QMARK_(handler)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count(self__.buf) > (0))))){
var temp__5733__auto__ = cljs.core.async.impl.protocols.commit(handler);
if(cljs.core.truth_(temp__5733__auto__)){
var take_cb = temp__5733__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_(self__.buf);
var vec__33625 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = ((cljs.core.async.impl.protocols.active_QMARK_(put_handler))?cljs.core.async.impl.protocols.commit(put_handler):false);
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if(((cljs.core.not(done_QMARK_)) && (cljs.core.not(cljs.core.async.impl.protocols.full_QMARK_(self__.buf))) && ((self__.puts.length > (0))))){
var G__33694 = cbs__$1;
cbs = G__33694;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33625,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33625,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}

var seq__33629_33695 = cljs.core.seq(cbs);
var chunk__33630_33696 = null;
var count__33631_33697 = (0);
var i__33632_33698 = (0);
while(true){
if((i__33632_33698 < count__33631_33697)){
var cb_33699 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(chunk__33630_33696,i__33632_33698);
cljs.core.async.impl.dispatch.run(((function (seq__33629_33695,chunk__33630_33696,count__33631_33697,i__33632_33698,cb_33699,val,vec__33625,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return (cb_33699.cljs$core$IFn$_invoke$arity$1 ? cb_33699.cljs$core$IFn$_invoke$arity$1(true) : cb_33699.call(null,true));
});})(seq__33629_33695,chunk__33630_33696,count__33631_33697,i__33632_33698,cb_33699,val,vec__33625,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__33700 = seq__33629_33695;
var G__33701 = chunk__33630_33696;
var G__33702 = count__33631_33697;
var G__33703 = (i__33632_33698 + (1));
seq__33629_33695 = G__33700;
chunk__33630_33696 = G__33701;
count__33631_33697 = G__33702;
i__33632_33698 = G__33703;
continue;
} else {
var temp__5735__auto___33704 = cljs.core.seq(seq__33629_33695);
if(temp__5735__auto___33704){
var seq__33629_33705__$1 = temp__5735__auto___33704;
if(cljs.core.chunked_seq_QMARK_(seq__33629_33705__$1)){
var c__4609__auto___33706 = cljs.core.chunk_first(seq__33629_33705__$1);
var G__33707 = cljs.core.chunk_rest(seq__33629_33705__$1);
var G__33708 = c__4609__auto___33706;
var G__33709 = cljs.core.count(c__4609__auto___33706);
var G__33710 = (0);
seq__33629_33695 = G__33707;
chunk__33630_33696 = G__33708;
count__33631_33697 = G__33709;
i__33632_33698 = G__33710;
continue;
} else {
var cb_33712 = cljs.core.first(seq__33629_33705__$1);
cljs.core.async.impl.dispatch.run(((function (seq__33629_33695,chunk__33630_33696,count__33631_33697,i__33632_33698,cb_33712,seq__33629_33705__$1,temp__5735__auto___33704,val,vec__33625,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return (cb_33712.cljs$core$IFn$_invoke$arity$1 ? cb_33712.cljs$core$IFn$_invoke$arity$1(true) : cb_33712.call(null,true));
});})(seq__33629_33695,chunk__33630_33696,count__33631_33697,i__33632_33698,cb_33712,seq__33629_33705__$1,temp__5735__auto___33704,val,vec__33625,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__33714 = cljs.core.next(seq__33629_33705__$1);
var G__33715 = null;
var G__33716 = (0);
var G__33717 = (0);
seq__33629_33695 = G__33714;
chunk__33630_33696 = G__33715;
count__33631_33697 = G__33716;
i__33632_33698 = G__33717;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
cljs.core.async.impl.protocols.commit(handler);

cljs.core.async.impl.dispatch.run((function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
}));

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_(handler);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit(handler);
} else {
return and__4174__auto__;
}
})())){
var has_val = (function (){var and__4174__auto__ = self__.buf;
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4174__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_(self__.buf):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_(handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__4174__auto__ = self__.buf;
if(cljs.core.truth_(and__4174__auto__)){
return (self__.puts.length === (0));
} else {
return and__4174__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_33718 = self__.takes.pop();
if((taker_33718 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_(taker_33718)){
var take_cb_33719 = cljs.core.async.impl.protocols.commit(taker_33718);
var val_33720 = (cljs.core.truth_((function (){var and__4174__auto__ = self__.buf;
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4174__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_(self__.buf):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_33719,val_33720,taker_33718,this$__$1){
return (function (){
return (take_cb_33719.cljs$core$IFn$_invoke$arity$1 ? take_cb_33719.cljs$core$IFn$_invoke$arity$1(val_33720) : take_cb_33719.call(null,val_33720));
});})(take_cb_33719,val_33720,taker_33718,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_(self__.buf);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__33650 = (function (){var or__4185__auto__ = exh;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__33650.cljs$core$IFn$_invoke$arity$1 ? fexpr__33650.cljs$core$IFn$_invoke$arity$1(t) : fexpr__33650.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__33655 = arguments.length;
switch (G__33655) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__33724 = null;
var G__33724__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e33656){var t = e33656;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__33724__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e33657){var t = e33657;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__33724 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__33724__1.call(this,buf__$1);
case 2:
return G__33724__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33724.cljs$core$IFn$_invoke$arity$1 = G__33724__1;
G__33724.cljs$core$IFn$_invoke$arity$2 = G__33724__2;
return G__33724;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.impl.channels.js.map
