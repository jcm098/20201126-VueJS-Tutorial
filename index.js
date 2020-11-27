Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">{{ count }} 👏 claps</button>'
})


let app = new Vue ({
  el: '#app',
  data: {
    myData: 'Super cool VueJS application 🖖'
  }
})
