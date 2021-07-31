new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Por quê você apertou este botão?')
        },
        escutarEventoEArmazenarValue(event) {
            this.valor = event.target.value;
            console.log('oi');
        },
    },
})