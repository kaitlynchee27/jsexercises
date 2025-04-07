//  Ensures the 'name' and 'address' fields are not empty upon form submission
// Shows or hides error messages for each field if they are left blank
// Prevents the form from being submitted if either the 'name' or 'address' 
// fields are empty, ensuring all required information is provided before submission

document.querySelector("#challenge4_form").addEventListener("submit", function(e){
    console.log("submitted")
    
    let name = document.getElementById('name');
    let address = document.getElementById('addr');
    let nameAlert = document.getElementById('nameError');
    let addrAlert = document.getElementById('addrError');

    if (name.value == ''){
        console.log("no name")
        alert(nameAlert.textContent);
        e.preventDefault();
    }

    if (address.value == ''){
        console.log("no address")
        alert(addrAlert.textContent);
        e.preventDefault();
    }
});
