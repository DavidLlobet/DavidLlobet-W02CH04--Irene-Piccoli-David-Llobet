class SkylabArray {
  constructor(...elementos) {
    // eslint-disable-next-line guard-for-in
    for (const i in elementos) {
      this[i] = elementos[i];
      this.length = parseInt(i, 10) + 1;
    }
  }

  push(x) {
    const lion = this.length;
    this[lion] = x;
    this.length = lion + 1;
    return this.length;
  }

  some(fun) {
    for (let i = 0; i < this.length - 1; i++) {
      if (fun(i)) {
        return true;
      }
    }
    return false;
  }

  map(fun) {
    for (let i = 0; i < this.length - 1; i++) {
      console.log(fun(this[i]));
      this[i] = fun(this[i]);
    }
  }
}

module.exports = SkylabArray;
