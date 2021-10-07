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
  }

  some(fun) {
    const auxObject = Object.assign(this);
    delete auxObject.length;
    for (const i of auxObject) {
      if (fun(i)) {
        return true;
      }
    }
    return false;
  }

  map(fun) {
    const auxObject = Object.assign(this);
    delete auxObject.length;
    for (const i in auxObject) {
      this[i] = fun(arr[i]);
    }
    return arr;
  }
}

const lo = new SkylabArray(1, 2, 3);
console.log(lo);
