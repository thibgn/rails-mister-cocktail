// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

const addCocktail = document.querySelector('#add_cocktail');
  
addCocktail.addEventListener('click', (e) => {
  console.log('test');
  document.querySelector('#new_cocktail_form').classList.toggle('hide');
});