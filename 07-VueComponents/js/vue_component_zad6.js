// zad 6
Vue.component('univeristyname',{
    template : '<h1>Cracow University of Economics</h1>'
  
 });

 Vue.component('univeristyaddress',{
   template : '<p>31-510 Kraków, Rakowicka 27, POLAND</p>'
 
});
 var vm = new Vue({
    el: '#univeristy_name'
 });

 var vm = new Vue({
   el: '#univeristy_address'
});
