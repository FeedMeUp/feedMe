var h = require('hyperscript')

module.exports =
function (back) {
  return h('div#form', [
    h('button', {type: 'submit', onclick: back}, 'back'),
    h('form', [
      h('input', {type: 'text', name: 'companyName', placeholder: 'Company Name'}),
      h('input', {type: 'text', name: 'logo', placeholder: 'Logo link'}),
      h('input', {type: 'text', name: 'item', placeholder: 'Item'}),
      h('input', {type: 'text', name: 'quantity', placeholder: 'Quantity'}),
      h('input', {type: 'text', name: 'pickUpBy', placeholder: 'Pick Up By'}),
      h('input', {type: 'text', name: 'address', placeholder: 'Pick Up Address'}),
      h('button#submit', {type: 'submit'}, 'Submit')
    ])
  ])
}
