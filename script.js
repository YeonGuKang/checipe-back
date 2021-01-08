
var slideIndex = 0;

showSlides();

function showSlides()
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
    
    
    
}


$('.visual').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

const firebase = require("firebase"); // firebase 모듈을 불러옴
// Required for side-effects
require("firebase/firestore");

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
            apiKey: "AIzaSyAHkHIYaLLB2EaxgbPwaDG3cjS-qNzXKW4",
            authDomain: "checipe-7d4fd.firebaseapp.com",
            projectId: "checipe-7d4fd",
            storageBucket: "checipe-7d4fd.appspot.com",
            messagingSenderId: "379392033966",
            appId: "1:379392033966:web:baa8ae098171cfb9f6593f",
            measurementId: "G-8P27P5XJC7"
          };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

var firestore = firebase.firestore(); // firestore라는 변수에 firebase의 firestore를 불러옴








const docRef = firestore.doc("samples/sandwichData");
const outputHeader = document.querySelector("#hotDogOutput");
const inputTextField = document.querySelector("#latesHotDogStatus");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", function(){
  const textToSave = inputTextField.nodeValue;
  console.log("I am going to save " + textToSave + " to Firestore");
  docRef.set({
    hotDogStatus: textToSave
  }).then(function(){
    console.log("Status saved!");
  }).catch(function(error){
    console.log("Got an error: ", error);
  });

})
