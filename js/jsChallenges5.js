// Hover over the images and display both the image and the alt text on top of the image
// Update the html so that you can tab to all of the image
// Add your own 3 images

const images = document.querySelectorAll(".thumbnail");
images.forEach(function(img){
    img.addEventListener("mouseover", function(){
        console.log("hovered")
        document.querySelector("#display").style.backgroundImage= `url("${img.src}")`;
        document.querySelector("#display").textContent= img.alt;
        img.style.visibility = "hidden";
    });  
});

// thumbnails = document.querySelectorAll(".thumbnail")

// for (var index = 0; index < thumbnails.length; index++) { 

//     console.log("Adding image listener index")

//     console.log(thumbnails[index])

//     thumbnails[index].addEventListener('mouseover', function() {

//         document.querySelector("#display").style.backgroundImage = "url('" + this.src + "')"

//         document.querySelector("#display").innerHTML = this.alt

//     });

// }