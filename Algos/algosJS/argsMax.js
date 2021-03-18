function max() {
    let m = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > m) m = arguments[i];
    }
    return m;
}

max(10, 43, 65, 34);