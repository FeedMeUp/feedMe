var form = require('./hyperscript/form')
var homepage = require('./hyperscript/homepage')

var main = document.querySelector('main')

main.appendChild(form(pageContent))
//
function pageContent() {
  document.getElementById('submit').addEventListener("click", main.replaceChild(homepage))
}
