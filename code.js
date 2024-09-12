function sum(a) {
    var sum = a[0];
    for(var i = 1; i < a.length; i++) { //Changed i = 0 to i = 1 so that the first element is added only once instead of twice
        sum += a[i];
    }
    return sum;
}
