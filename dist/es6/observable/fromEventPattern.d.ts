import Observable from '../Observable';
/**
 * Creates an observable sequence from an event emitter via an addHandler/removeHandler pair.
 * @param {Function} addHandler The function to add a handler to the emitter.
 * @param {Function} [removeHandler] The optional function to remove a handler from an emitter.
 * @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.
 * @returns {Observable} An observable sequence which wraps an event from an event emitter
 */
export default function fromEventPattern(addHandler: Function, removeHandler?: Function, selector?: Function): Observable;
