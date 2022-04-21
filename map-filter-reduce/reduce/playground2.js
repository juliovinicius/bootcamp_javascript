function reduceConta(saldoDisponivel, lista){
    return lista.reduce(function(anterior, atual, index){
        console.log('#',index);
        console.log(anterior);
        console.log(atual);
        console.log('-----');
        return anterior - atual.preco;
    }, saldoDisponivel);
}

arr = [
    {
        nome: 'arroz',
        preco: 10
    },
    {
        nome: 'carne',
        preco: 20
    },
    {
        nome: 'feijao',
        preco: 5
    }
];

console.log(reduceConta(80, arr))