var h = require("hyperscript")

module.exports =
h('div#form',
  h('form',
    [h('input', {type: "text", placeholder: "Business Name"}),
    h('input', {type: "text", placeholder: "Item"}),
    h('input', {type: "text", placeholder: "Quantity"}),
    h('input', {type: "text", placeholder: "Date"}),
    h('input', {type: "text", placeholder: "Pick Up Address"}),
    h('input', {type: "submit", value: "Submit"})]
  ))
