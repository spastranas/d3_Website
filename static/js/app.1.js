// from data.js
var occurrences = data;
var tbody = d3.select("tbody"); 
// YOUR CODE HERE!



 

  var vButton= d3.select("#filter-btn");

  vButton.on("click", function() {
    
            // Prevent the page from refreshing
            d3.event.preventDefault();


            // Select the input element and get the raw HTML node
            var inputElement = d3.select("#datetime");

            // Get the value property of the input element
            var inputValue = inputElement.property("value");


            var filteredData = occurrences.filter(occurance => occurance.datetime === inputValue);

            console.log(filteredData);

            // append to table filtered rows

            var tbody = d3.select("tbody"); 
            filteredData.forEach(function(occurance) {
                console.log(occurance);
                var row = tbody.append("tr");
                Object.entries(occurance).forEach(function([key, value]) {
                  console.log(key, value);
                 
                  var cell = row.append("td");
                  cell.text(value);
                });
              });

            });

