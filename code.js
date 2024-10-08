function sum(a) {
    var sum = 0; // change a[0] to 0 so there's no double counting and the elements are added starting from 0
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
