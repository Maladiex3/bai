
//zad 7
var komputer = {  template : `<ol><li v-for="item,idx in items" key="idx">{{item}}</li></ol>`,
  props: {
    items: Array
   }
}
 
 
 var app = new Vue({
   el: '#app',
   data: {
   arr: ['Memory', 'Controm Unit', 'Aritmetic Logic Unit', 'Processing Unit', 'Mass Storage', 'Input and output mechanisms']
  } ,
  components: {
    'Komputer': komputer
  },
});
 