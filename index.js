console.log('hello from Node.js')
function maFonction(monObjet) {
    monObjet.fabricant = "Toyota";
  }
  
  var mavoiture = {fabricant: "Honda", modèle: "Accord", année: 1998};
  var x, y;
  
  x = mavoiture.fabricant;     // x aura la valeur "Honda"
  
  maFonction(mavoiture);
  y = mavoiture.fabricant;
  console.log(x,y);