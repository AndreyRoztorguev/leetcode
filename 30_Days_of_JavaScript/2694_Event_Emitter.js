class EventEmitter {
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribes = {};

  subscribe(eventName, callback) {
    if (!this.subscribes[eventName]) {
      this.subscribes[eventName] = [];
    }
    this.subscribes[eventName].push(callback);
    return {
      unsubscribe: () => {
        this.subscribes[eventName] = this.subscribes[eventName].filter((cb) => cb !== callback);
        return undefined;
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.subscribes[eventName]) return [];
    return this.subscribes[eventName].map((el) => el(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
