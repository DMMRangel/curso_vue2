new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        // resultado: '',
    },
    computed: {
        resultado() {
           return this.valor == 37 ? 'Valor igual' : 'Valor diferente';
        }
    },
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0;
            }, 5000);
        }
    }

    // watch: {
    //     valor() {
    //         setTimeout(() => {
    //             this.valor = 0;
    //         }, 5000);
    //         console.log('entrei');
    //     }
    // },
    // computed: {
    //     exibirEmResultado() {
    //         return this.valor == 37 ? this.resultado = 'valor igual' : this.resultado = 'Valor diferente'
    //     },
    // },
});
