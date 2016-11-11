var h = require('hyperscript')

module.exports =
function (back) {
  return h('div#form', [
    h('form', {method: 'POST', action:'https://feedmeapi.herokuapp.com/api/v1/food'}, [
      h('input', {type: 'text', name: 'companyName', placeholder: 'Company Name'}),
      h('input', {type: 'text', name: 'logo', placeholder: 'Logo link'}),
      h('input', {type: 'text', name: 'item', placeholder: 'Item'}),
      h('input', {type: 'text', name: 'quantity', placeholder: 'Quantity'}),
      h('input', {type: 'text', name: 'pickUpBy', placeholder: 'Pick Up By'}),
      h('input', {type: 'text', name: 'address', placeholder: 'Pick Up Address'}),
      h('button.formButton', {type: 'submit'}, 'Submit'),
      h('button.formButton', {type: 'submit', onclick: back}, 'Back'),
    ])
  ])
}
