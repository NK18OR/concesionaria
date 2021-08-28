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
      auto = this.buscarAuto(patente);
      auto.vendido = true;
   },
   autosParaLaVenta:function(){
      autosParaVender = this.autos.filter(function (vendidos) {
         return vendidos.vendido == false;
      })
      return autosParaVender;
   },
   autosNuevos: function(){
      autoNuevo = this.autosParaLaVenta().filter(function(elemento){
         return elemento.km < 100
      })
      return autoNuevo
   },
   listaDeVentas: 
   
   }
//console.log(concesionaria.venderAuto("JJK116"));
//console.log(concesionaria.autos);
//console.log(concesionaria.autosParaLaVenta());
//=console.log(concesionaria.autosNuevos());