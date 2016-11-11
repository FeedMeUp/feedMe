var form = require('./hyperscript/form')
var food = require('./hyperscript/food')
var homepage = require('./hyperscript/homepage')
var morphdom = require('morphdom')
var h = require('hyperscript')
var request = require('superagent')

var main = document.querySelector('main')
var home = homepage(goToForm, goToFood)

function updatePage(newPage) {
    morphdom(main, h('main', {}, newPage))
}

updatePage(home)

function goToForm(){
  updatePage(form(goToHomepage))
}
// function seeYourFood(formBody){
//   request
//     .post('https://feedmeapi.herokuapp.com/api/v1/food')
//     .send(formBody)
//     .end(function(err, res){
//       goToFood()
//     })
// }
function goToFood(){
  request
    .get('https://feedmeapi.herokuapp.com/api/v1/food')
    .end(function(err, res){
      updatePage(food(goToHomepage, res.body))
    })
}
function goToHomepage(){
  updatePage(home)
}
