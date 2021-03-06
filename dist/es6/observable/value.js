import Observable from '../Observable';
class ValueObservable extends Observable {
    constructor(value) {
        super(null);
        this.value = value;
    }
    subscriber(observer) {
        observer.next(this.value);
        observer.return();
    }
}
export default function value(value) {
    return new ValueObservable(value);
}
;
