new Vue({
  el: '#desafio',
  data: {
    nome: 'Daniel',
    idade: 35,
    linkImg: 'https://www.viajantecomum.com/wp-content/uploads/2017/04/praia-de-bacutia-1.jpg',
  },
  methods: {
    multIdade: function () {
      return this.idade * 3;
    },
    randomNumber: function () {
      return Math.random();
    }
  }
})