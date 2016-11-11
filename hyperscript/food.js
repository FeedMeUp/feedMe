var h = require('hyperscript')

module.exports =
function (back, getFood) {
  return h('div#form', [
    h('button', {onclick: back}, 'back'),
    h('div', [
      h('input', {type: 'text', placeholder: 'FOOD'}),
      h('input', {type: 'text', placeholder: 'Item'}),
      h('input', {type: 'text', placeholder: 'Quantity'}),
      h('input', {type: 'text', placeholder: 'Date'}),
      h('input', {type: 'text', placeholder: 'Pick Up Address'}),
      h('button', {onclick: getFood}, 'Submit')
    ])
  ])
}
