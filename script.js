// Script for index file
// When the user scrolls down 20px from the top of the document, show the button
function topScrollFunction() {
    let mybutton = document.querySelector(".topper");
    //For safari and other browsers
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// //function to change the navbar color from transparent to black while scrolled
// navColorChange = () => {
//     let navigation = document.querySelector(".navigation");
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         navigation.style.backgroundColor = "rgba(0,0,0,1)"
//     } else {
//         navigation.style.backgroundColor = "transparent"
//     }
// }


