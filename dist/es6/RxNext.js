import Observable from './Observable';
import Observer from './Observer';
import nextTick from './scheduler/nextTick';
import immediate from './scheduler/immediate';
import Subscription from './Subscription';
import CompositeSubscription from './CompositeSubscription';
import SerialSubscription from './SerialSubscription';
import Subject from './Subject';
import BehaviorSubject from './BehaviorSubject';
import ConnectableObservable from './ConnectableObservable';
import value from './observable/value';
import _return from './observable/return';
import fromEventPattern from './observable/fromEventPattern';
import fromEvent from './observable/fromEvent';
import _throw from './observable/throw';
import empty from './observable/empty';
import range from './observable/range';
import fromArray from './observable/fromArray';
import zip from './observable/zip';
import fromPromise from './observable/fromPromise';
import _of from './observable/of';
import timer from './observable/timer';
import interval from './observable/interval';
import filter from './operator/filter';
import map from './operator/map';
import mapTo from './operator/mapTo';
import mergeAll from './operator/mergeAll';
import flatMap from './operator/flatMap';
import concatAll from './operator/concatAll';
import skip from './operator/skip';
import take from './operator/take';
import subscribeOn from './operator/subscribeOn';
import observeOn from './operator/observeOn';
import zipAll from './operator/zipAll';
import zipProto from './operator/zip';
import mergeProto from './operator/merge';
import toArray from './operator/toArray';
import multicast from './operator/multicast';
import publish from './operator/publish';
import reduce from './operator/reduce';
Observable.value = value;
Observable.return = _return;
Observable.fromEventPattern = fromEventPattern;
Observable.fromEvent = fromEvent;
Observable.throw = _throw;
Observable.empty = empty;
Observable.range = range;
Observable.fromArray = fromArray;
Observable.zip = zip;
Observable.fromPromise = fromPromise;
Observable.of = _of;
Observable.timer = timer;
Observable.interval = interval;
Observable.prototype.filter = filter;
Observable.prototype.map = map;
Observable.prototype.mapTo = mapTo;
Observable.prototype.mergeAll = mergeAll;
Observable.prototype.flatMap = flatMap;
Observable.prototype.concatAll = concatAll;
Observable.prototype.skip = skip;
Observable.prototype.take = take;
Observable.prototype.subscribeOn = subscribeOn;
Observable.prototype.observeOn = observeOn;
Observable.prototype.zipAll = zipAll;
Observable.prototype.zip = zipProto;
Observable.prototype.merge = mergeProto;
Observable.prototype.toArray = toArray;
Observable.prototype.multicast = multicast;
Observable.prototype.publish = publish;
Observable.prototype.reduce = reduce;
var RxNext = {
    Scheduler: {
        nextTick,
        immediate
    },
    Observer,
    Observable,
    Subscription,
    CompositeSubscription,
    SerialSubscription,
    Subject,
    BehaviorSubject,
    ConnectableObservable
};
export default RxNext;
