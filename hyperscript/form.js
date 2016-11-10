var h = require("hyperscript")

module.exports =
function (pageContent) {
  return h('div#form', [
    h('form', [
      h('input', {type: "text", placeholder: "Business Name"}),
      h('input', {type: "text", placeholder: "Item"}),
      h('input', {type: "text", placeholder: "Quantity"}),
      h('input', {type: "text", placeholder: "Date"}),
      h('input', {type: "text", placeholder: "Pick Up Address"}),
      h('button#submit', {
        value: "submit",
        onclick: ev => {
          ev.preventDefault()
          console.log("I was clicked!!!")
          // pageContent()
        },
      }, "Submit")
    ])
  ])
}
