var h = require("hyperscript")

module.exports =
h('div#homepage',
  h('h1', {}, "Who are you?")
    [h('button', {type: "submit", value: "I'm a Business!"}),
    h('button', {type: "submit", value: "I'm Hungry!"})]
  )
