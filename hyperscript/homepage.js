var h = require('hyperscript')

module.exports = function(business, user){
return h('div#homepage', [
          h('h1', 'Who are you?'),
          h('button', {type: 'submit', onclick: business}, 'I have food!'),
          h('button', {type: 'submit', onclick: user}, 'I am Hungry!')
  ]
)
}
