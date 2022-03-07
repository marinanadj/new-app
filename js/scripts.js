
  let pokemonList = [{

  name: 'Bulbasaur',
  height: 0.7,
  weight: 6.9,
  type: ['grass', 'poison']
},

{
  name: 'Charmilion',
  height: 1.1,
  weight: 19,
  type: ['fire']
},

{
  name: 'Dratini',
  height: 1.8,
  weight: 3.3,
  type: ['dragon']
},

{
  name: 'Rayquaza',
  height: 7,
  weight: 206.5,
  type: ['dragon']
}];

for (let i=0; i < pokemonList.length; i++){
  if(pokemonList[i].height > 3){
    document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + ")" + "Wow it`s a big pokemon!!! <br>")
  }else {
  document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + ")<br>")
}
}
