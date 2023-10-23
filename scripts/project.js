$(document).ready(function() {
    var item, title, author, publisher, bookLink, bookImg
    var outputList = document.getElementById('list-output');
    var bookUrl = "https://www.googleapis.com/books/v1/volumes?q="; //API from Google
    var apiKey = "key=AIzaSyDtXC7kb6a7xKJdm_Le6_BYoY5biz6s8Lw";
    var placeHolder = "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg?w=740&t=st=1697670186~exp=1697670786~hmac=621ddb71d1d1c452753f0912c0afdc047b038bd7c32d697dfe3558d543bde80b" // I love freepik Vectors!
    var searchData;
    

    // Now I will do the search button
    $('#search').click(function() {
      outputList.innerHTML = "" //Clear the output
      document.body.style.backgroundImage = "url('')";
      searchData = $('#search-box').val();
      // If an error occurs we get a displayError
      if(searchData === "" || searchData === null) {
        displayError();
      }
      // If we have success
      else {
        $.ajax({
          url: bookUrl + searchData,
          dataType: 'json', 
          success: function(response) {
            console.log(response)
            // if we don't have results
            if(response.totalItems === 0) {
              alert('no results! Try again')
            }
            // if we have results our Results will become visible!
            else {
              $('#title').animate({'margin-top': '5px'}, 1000);
              $('.book-list').css('visibility', 'visible');
              displayResults(response);
            }
          },
          error: function() {
            alert("Oh no! Something is not right..."+"Try again!");
          }
        });
      }
      // we need to clear the value
      $('#search-box').val('');
    });

    // Function to display results on the page
    function displayResults(response) {
      for (var i = 0; i < response.items.length; i+=2) {
        item = response.items[i];
        title1 = item.volumeInfo.title;
        author1 = item.volumeInfo.authors;
        publisher1 = item.volumeInfo.publisher;
        bookLink1 = item.volumeInfo.previewLink;
        bookIsbn = item.volumeInfo.industryIdentifiers[1].identifier
        bookImg1 = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : placeHolder;

        item2 = response.items[i+1];
        title2 = item2.volumeInfo.title;
        author2 = item2.volumeInfo.authors;
        publisher2 = item2.volumeInfo.publisher;
        bookLink2 = item2.volumeInfo.previewLink;
        bookIsbn2 = item2.volumeInfo.industryIdentifiers[1].identifier
        bookImg2 = (item2.volumeInfo.imageLinks) ? item2.volumeInfo.imageLinks.thumbnail : placeHolder;

        outputList.innerHTML += '<div class="row mt-4">' +
          formatOutput(bookImg1, title1, author1, publisher1, bookLink1, bookIsbn) +
          formatOutput(bookImg2, title2, author2, publisher2, bookLink2, bookIsbn2) +
        '</div>';

      console.log(outputList);
        
    }
    }

    // Function to format and create individual book cards
    function formatOutput(bookImg, title, author, publisher, bookLink, bookIsbn) {
      var viewUrl = 'project2.html?isbn='+bookIsbn;
      var htmlCard = `<div class="col-lg-6">
        <div class="card" style="">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${bookImg}" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Author: ${author}</p>
                <p class="card-text">Publisher: ${publisher}</p>
                <a target="_blank" href="${viewUrl}" class="btn btn-secondary">Read Book</a>
              </div>
            </div>
          </div>
        </div>
      </div>`
      return htmlCard;
    }

    // Function to handle search term being empty
    function displayError () {
      alert('search term can not be empty!')
    }

});