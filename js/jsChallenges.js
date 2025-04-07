document.getElementById("subscribe").addEventListener("click", function() {
    console.log("got the checkbox");
    if(this.checked){
        console.log("this change worked?");
        document.querySelector("#emailDiv").style.display='block';
        console.log("query selector worked");
    }
    else{
        document.querySelector("#emailDiv").style.display='none';
    }
})