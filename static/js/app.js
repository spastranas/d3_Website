// from data.js
var occurrences = data;
var tbody = d3.select("tbody"); 
//                                            1. create lists to hold distinct values
  
  Date=[]
  City=[]
  State=[]
  Country=[]
  Shape=[]
  Duration=[]

  // Loop through array of objects then add the individual values into variables

occurrences.forEach((FullRow) => {
    // console.log(FullRow);
    vdate=(FullRow["Date"]);
    vcity=(FullRow["City"]);
    vstate= (FullRow["State"]);
    vcountry= (FullRow["Country"]);
    vshape= (FullRow["Shape"]);
    vdurationMinutes= (FullRow["durationMinutes"]);

// check if the individual value already exists into the list, add it if not.


    if (!(Date.includes(vdate) )){
        // Add one to the list if not exist
        Date.push(vdate);
      };

    if (!(City.includes(vcity) )){
        // Add one to the list if not exist
        City.push(vcity);
    }

    if (!(State.includes(vstate) )){
      // Add one to the list if not exist
      State.push(vstate);
  }

  if (!(Country.includes(vcountry) )){
    // Add one to the list if not exist
    Country.push(vcountry);
}
if (!(Shape.includes(vshape) )){
  // Add one to the list if not exist
  Shape.push(vshape);
}

if (!(Duration.includes(vdurationMinutes) )){
  // Add one to the list if not exist
  Duration.push(vdurationMinutes);
}


// sort each list



       });
       Date.sort((first, second) => first - second);
       Shape.sort();
       State.sort();
       City.sort();
       Country.sort();
  
  //                          2.  Giveen the options: data city coutry shape...., store the selected value into a variable. 
  //                                      use the list created for the selected value to fill the second drop down.

// select the drop down menu and create an event when the value is selected
var vselector= d3.select("#filterBy");  
      




      vselector.on("change", function(){
        
        // store the selected value into a variable 
          var filterSelected=vselector.property("value");
          
          // Make sure you start form a clean slate, if there have been values added, remove them.
          var FilterOptions = d3.select("#FilterOptions"); 
          FilterOptions.selectAll("option").remove();
          
          // console.log(filterSelected);
          
          // The filter selected is now text into a variable, but we need to execute it as the list name. We meed to make the selector be the name of the list, to dynamicaly populate the table
       
          var obj = [];
          obj = eval(filterSelected);

          // for each item in the list selected, add options to the drop dowm menu with id=FilterOptions. Add <option>date or city or ..</option>
          obj.forEach(function(entry) {
            // console.log(entry);
           
            FilterOptions.append("option").text(entry);
            // console.log(FilterOptions);
          });



        })
;



//                                            3. at this point we have the two filters populated.
//                                   now we need to filted he occurances object data according to the filter selection.


//  the filtering should occure when the user clicks the filter button.
var vButton= d3.select("#filter-btn");

  vButton.on("click", function() {
    // clear any data that has already been loged to start form a clean slate.
            var tbody = d3.select("tbody"); 
            tbody.selectAll("tr").remove();
            tbody.selectAll("td").remove();
            // Prevent the page from refreshing
            d3.event.preventDefault();
            // record the value of the filters selected into variables, first the category (date, country etc..) and then the value we are looking for.
            var filterSelected=vselector.property("value")

            var FilterOptions = d3.select("#FilterOptions");
            var FinalSelection=FilterOptions.property("value");
            console.log(FinalSelection);

            // filter selected : date country etc, is now a string inside a variable. we need to evaluate it to work as a list.
            // make the filter statement into a variable  to then evaluat it and used dynamicaly
            var occuranceobj= "occurrences.filter(occurance => occurance." +filterSelected + " === FinalSelection)";
            console.log(occuranceobj);
            
            var obj = [];
             obj = eval(occuranceobj);
            // var filteredData = occurrences.filter(occurance => occurance.Date === FinalSelection);
            var filteredData = obj
            console.log(filteredData);
            

            // filterData has the code to filter by our selections. we need to loop though each row FilteredData returns 
            // and append to the HTML table <tr><td>bla....</td><td>bla....</td></tr>

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

