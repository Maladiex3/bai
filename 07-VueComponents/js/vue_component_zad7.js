
//zad 7
Vue.component('film1',{
   template : "<p>Hrabia Monte Christo, Kevin Reynolds, 2002</p>"
 
});

Vue.component('film2',{
   template : "<p>Titanic, James Cameron, 1997</p>"
 
});

Vue.component('film3',{
   template : "<p>Kalifat, Wilhelm Behrman, 2020</p>"
 
});

var films = new Vue({
   el: '#film1'
});

var films = new Vue({
   el: '#film2'
});

var films = new Vue({
   el: '#film3'
});