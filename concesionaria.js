let autos = require("./autos"); 

let concesionaria = {
   autos: autos,
 
   buscarAuto: function(patentes){
      for(let i = 0 ; i <autos.length; i++){
      if(patentes === autos[i].patente){
         return autos[i];
   } 
   }return null;
   },
   venderAuto: function(patente){
      let auto = this.buscarAuto(patente);
      auto.vendido = true;
   },
   autosParaLaVenta:function(){
      autosParaVender = autos.filter(function (vendidos) {
         return vendidos.vendido == false
      })
      return autosParaVender
   }
   }
console.log(concesionaria.venderAuto("JJK116"));
console.log(concesionaria.autos);
console.log(concesionaria.autosParaLaVenta());
