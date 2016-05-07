var inStock = [
  'apples',
  'eggs',
  'milk',
  'cookies',
  'cheese',
  'bread',
  'lettuce',
  'carrot',
  'broccoli',
  'pizza',
  'potato',
  'crackers',
  'onion',
  'tofu',
  'frozen dinner',
  'cucumber'
];
var search;

function pluralizer(test, singular, plural) {
  if(test.endsWith('s')) {
    return plural;
  } else {
    return singular;
  }
}

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while (true) {
  search = prompt("Search for a product in our store. Type 'list' to show all of the produce and 'quit' to exit");
  if ((search === 'quit') || (search === 'q')) {
    break;
  } else if (search === 'list'){
    print(inStock.join(', '));
  } else if (inStock.indexOf(search) === -1){
    print(search + ' ' + pluralizer(search, 'is', 'are') + ' not in stock');
  } else {
    print(search + ' ' + pluralizer(search, 'is', 'are') + ' in stock');
  }
}
