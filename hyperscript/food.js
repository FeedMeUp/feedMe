var h = require('hyperscript')

module.exports =
function (back, foodData) {
  return h('div#form', [
    h('button', {type: 'submit', onclick: back}, 'back'),
    h('table',
      foodData.unclaimedFood.map(function(food){
        console.log(food);
        return h('tr', [
          h('td', food.companyName),
          h('td', h('img', {src: food.logo})),
          h('td', food.item),
          h('td', food.quantity),
          h('td', food.pickUpBy),
          h('td', food.address)
        ])
      })),
  ])
}
