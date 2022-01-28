// get values
function getValues(){
    let fizzNum = document.getElementById("fizzNum").value;
    let buzzNum = document.getElementById("buzzNum").value;

    // convert to integer
    fizzNum = parseInt(fizzNum);
    buzzNum = parseInt(buzzNum);

    if(Number.isInteger(fizzNum) && Number.isInteger(buzzNum)){
        // call fizzBuzz
        let fbArray = fizzBuzzC(fizzNum,buzzNum);

        // call displayNumbers()
        displayNumbers(fbArray);
    } else {
        alert('Either the Fizz Number or the Buzz Number is not an integer. Please enter integers instead.');
    }
}

// Solve with for loop
// logic function
function fizzBuzz(fizzVal, buzzVal){
    let returnArray = [];

    for(let i = 1; i<=100; i++){
        if(i % fizzVal == 0 && i % buzzVal == 0){
            returnArray.push("FizzBuzz");
        } else if (i % fizzVal == 0){
            returnArray.push("Fizz");
        } else if (i % buzzVal == 0){
            returnArray.push("Buzz");
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
}

//switch case statement
function fizzBuzzB(fizzVal, buzzVal){
    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for(let i = 1; i<=100; i++){
        Fizz = i % fizzVal == 0;
        Buzz = i % buzzVal == 0;
        
        switch(true)
        {
            case Fizz && Buzz:{
                returnArray.push('FizzBuzz');
                break;
            } 
            case Fizz: {
                returnArray.push('Fizz');
                break;
            }
            case Buzz:{
                returnArray.push('Buzz');
                break;
            }
            default:{
                returnArray.push(i);
                break;
            }
        }
    }
    return returnArray;
}

// ternary operator
// an empty string is a "false-like" value in javascript. 
function fizzBuzzC(fizzVal, buzzVal){
    let returnArray = [];

    for(let i = 1; i <= 100; i++){
        let value = ((i % fizzVal == 0 ? 'Fizz' : '') + (i % buzzVal == 0 ? 'Buzz' : '')  ||  i);
        returnArray.push(value);
    }
    return returnArray;
}

// display data, expects an array
// display function
function displayNumbers(fbData){
    let tableBody = document.getElementById("results");
    let templateRow = document.getElementById("fbTemplate");

    // 1st: clear table, may want to run > 1x
    tableBody.innerHTML = "";

    // 2nd: loop over the length of the array
    for(let i = 0; i<fbData.length; i+=5){
        // importNode() imports as a document fragment to use elsewhere in a document
        // only grabs the content of the element with the id templateRow
        // 2nd parameter of 'true' means that all children of the selected 
        // element are copied into the fragment
        let tableRow = document.importNode(templateRow.content, true); 

        //grab only <td>s
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];
        
        rowCols[1].classList.add(fbData[i+1]);
        rowCols[1].textContent = fbData[i+1];
        
        rowCols[2].classList.add(fbData[i+2]);
        rowCols[2].textContent = fbData[i+2];
        
        rowCols[3].classList.add(fbData[i+3]);
        rowCols[3].textContent = fbData[i+3];
        
        rowCols[4].classList.add(fbData[i+4]);
        rowCols[4].textContent = fbData[i+4];

        tableBody.appendChild(tableRow);
    }
}