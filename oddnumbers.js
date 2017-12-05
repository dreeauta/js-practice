function oddNumbers(l, r) {
    var newarr = []

    for (var i = l; i <= r; i++){
        if ((i % 2) != 0){
            newarr.push(i);
        }
    }

    console.log(newarr)
    return newarr
}

oddNumbers(1,10);
