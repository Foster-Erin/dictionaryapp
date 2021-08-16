let apiKey =
  "https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=your-api-key"
let input = document.querySelector("#input")
let searchBtn = document.querySelector("#search")
let notFound = document.querySelector(".not__found")
let defBox = document.querySelector(".def")
let loading = document.querySelector(".loading")

searchBtn.addEventListener("click", function (e) {})

searchBtn.addEventListener("click", function (e) {
  e.preventDefault()
  let word = input.value
})

searchBtn.addEventListener("click", function (e) {
  e.preventDefault()
  // Get input data
  let word = input.value
  if (word === "") {
    alert("Word is required")
    return
  }

  getData(word)
})
