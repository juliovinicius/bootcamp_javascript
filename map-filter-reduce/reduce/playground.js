function reduceSoma(arr) {
    return arr.reduce(function(soma, item) {
        return soma = soma + item;
    })
}

nums = [1, 2, 3, 4];

console.log(reduceSoma(nums))