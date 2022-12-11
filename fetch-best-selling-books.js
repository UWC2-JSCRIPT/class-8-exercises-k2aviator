// create api-key.js file with const API_KEY="your_api_key" in this same directory to use

var newDate = new Date()
var currentYear = newDate.getFullYear()
var currentMonth = newDate.getMonth()+1
var currentDay = newDate.getDate()
var dateInput = document.getElementById('date-input')
var todaysDate =`${currentYear}-${currentMonth}-${currentDay}`
/*console.log("todays date", todaysDate)*/


//add date listener
dateInput.addEventListener("change", (e) => {
  var selectedDate = dateInput.value
  const bookListDiv = document.getElementById('book-list');
  bookListDiv.innerHTML = "";
  pullBooks(selectedDate)
})

const pullBooks = function(selectedDate){
  //correct date formatting
  
  var dateRegex = /^\d{4}-\d{2}-\d{2}$/
  var dateTest = dateRegex.test(selectedDate)
  if (!dateTest){
    console.log("date format error")
    matchLastDigits = /\d{1}$/
    lastDigits = selectedDate.match(matchLastDigits)[0]
    fixedDigits = `0${lastDigits}`
    /*console.log("matched last digits",lastDigits)
    console.log("fixed last digits",fixedDigits)*/
    selectedDate = selectedDate.replace(matchLastDigits,fixedDigits)
  }
  /*console.log("fixed selected date", selectedDate)*/
  

  const BASE_URL_OLD = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json';
  const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists.json'
  const API_KEY = 'LSow4VM3h49KdsTTInjS6UG77SfOj3U5'
  const url = `${BASE_URL}?api-key=${API_KEY}&list=hardcover-fiction&published_date=${selectedDate}`;
  const dateLocation = document.getElementById('date-entered')
  const bookListDiv = document.getElementById('book-list');
  /*console.log(bookListDiv)*/

  fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(responseJson) {
      console.log("response JSON", responseJson);
      
      let publishedDate = responseJson.results.published_date

      let bookList = responseJson.results
      console.log("return booklist", bookList);
      
      //loop through top ten books
      for (let i=0; i<=4;i++){
        console.log(`book ${i}`)
        var bookLocation = responseJson.results[i]
        console.log("first book",bookLocation)
        
        //collect book attributes
        var testLocation = bookLocation.book_details[0].book_image
        console.log("find right attribute", testLocation)
        var titleText = bookLocation.book_details[0].title //title
        var authorText = bookLocation.book_details[0].author //author
        var descriptionText = bookLocation.book_details[0].description //description
        /*var imageImg = bookLocation.book_details[0].book_image*/
        //create HTML elements
        var div = document.createElement('div');
        div.setAttribute('id',`book-${i+1}`)
        div.setAttribute('class',`bookListDiv`)
        /*console.log(imageImg)*/
        //Add book title text
        var titleDisplay = document.createElement('h4')
        titleDisplay.setAttribute('id','book-title')
        titleDisplay.innerText = titleText
        div.appendChild(titleDisplay)
        //Add image information
        /*if (imageImg.length > 0) {
          console.log("image present")
          var imgUrl = `${imageImg}`;
          var imgDisplay = document.createElement('img')
          imgDisplay.setAttribute('src', imgUrl)
          imgDisplay.setAttribute('width', '150px')
          console.log(imgDisplay)
          div.appendChild(imgDisplay)
        };
        */
        //Add author
        var authorTitleDisplay = document.createElement('p')
        authorTitleDisplay.innerHTML = `<i>by ${authorText}</i><br>${descriptionText}`
        div.appendChild(authorTitleDisplay)
        //Add description
        /*var descriptionTextDisplay = document.createElement('p')
        descriptionTextDisplay.innerText = descriptionText
        div.appendChild(descriptionTextDisplay)*/
        //DONE: Add book to book list
        bookListDiv.appendChild(div)
        /*console.log(div)*/
        
    }  

    var bestSellersDate = bookLocation.bestsellers_date
    /*console.log(bestSellersDate)*/
    /*console.log("published date",publishedDate)*/
    dateLocation.innerHTML = `Closest list date to selection: ${bestSellersDate}`
    return bestSellersDate
  });
}

pullBooks(todaysDate)