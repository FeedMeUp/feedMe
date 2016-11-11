var h = require('hyperscript')

module.exports =
function (back, getFood) {
  return h('div#form', [
    h('button', {type: 'submit', onclick: back}, 'back'),
    h('form', [
      h('input', {type: 'text', placeholder: 'FOOD'}),
      h('input', {type: 'text', placeholder: 'Item'}),
      h('input', {type: 'text', placeholder: 'Quantity'}),
      h('input', {type: 'text', placeholder: 'Date'}),
      h('input', {type: 'text', placeholder: 'Pick Up Address'}),
      h('button#submit', {type: 'submit', onclick: getFood()}, 'Submit')
    ])
  ])
}
