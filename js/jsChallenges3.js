// Both boxes must have radio buttons selected to move on
// If one or both radio buttons isn’t selected create an alert
// Fix the broken HTML

document.querySelector('#ch3form').addEventListener('submit', function(event){
    console.log("tried to submit form");
    i = 0;
    numberOfChecked = 0;
    radioButton = document.querySelector("input");

    for (i in radioButton.length){
        if (radioButton[i].type = "radio"){
            if (radioButton[i].checked){
                numberOfChecked+=1;
            }
        }
    }
    if numberOfChecked <=1
    

    if (q1 == null || q2 == null){
        alert("Please select both your standing and graduation date");
        event.preventDefault();
    }

//     let q1 = document.querySelectorAll('input[name="standing"]');
//     let q2 = document.querySelectorAll('input[name="gradDate"]');

//     if (q1 == null || q2 == null){
//         alert("Please select both your standing and graduation date");
//         event.preventDefault();
//         // prevents form 
//     }

// });


// ANSWER KEY ANSWER WHICH IS WRONG
// document.querySelector("#ch3form").addEventListener("submit", function(e) {
//     let date = document.querySelectorAll('input[name="gradDate"]');
//     let standing = document.querySelectorAll('input[name="standing"]');

//     document.getElementById('23').name="gradeDate";

//     console.log("Good job clicking the button");
//     console.log("Grad date is", date);
//     console.log("Standing is", standing);

//     if (date.length === 0 || standing.length === 0){
//         alert("You must select a choice from each set of radio buttons");
//         e.preventDefault();
//     }
// });