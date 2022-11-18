let oneStar = document.getElementById("rate-1")
let twoStar = document.getElementById("rate-2")
let threeStar = document.getElementById("rate-3")
let fourStar = document.getElementById("rate-4")
let fiveStar = document.getElementById("rate-5")
let header1 = document.getElementById("header1")
let header2 = document.getElementById("header2")
let header3 = document.getElementById("header3")
let header4 = document.getElementById("header4")
let header5 = document.getElementById("header5")
headers = [header1, header2, header3, header4, header5]
oneStar.addEventListener("click", () => {
    for (header in headers) {
        if (header == 0) {
            headers[header].style.display = "block"
        }
        else {
            headers[header].style.display = "none"
        }
    }
})
twoStar.addEventListener("click", () => {
    for (header in headers) {
        if (header == 1) {
            headers[header].style.display = "block"
        }
        else {
            headers[header].style.display = "none"
        }
    }
})
threeStar.addEventListener("click", () => {
    for (header in headers) {
        if (header == 2) {
            headers[header].style.display = "block"
        }
        else {
            headers[header].style.display = "none"
        }
    }
})
fourStar.addEventListener("click", () => {
    for (header in headers) {
        if (header == 3) {
            headers[header].style.display = "block"
        }
        else {
            headers[header].style.display = "none"
        }
    }
})
fiveStar.addEventListener("click", () => {
    for (header in headers) {
        if (header == 4) {
            headers[header].style.display = "block"
        }
        else {
            headers[header].style.display = "none"
        }
    }
})
// function ratingSubmit() {
//     let btn = document.querySelector(".post-btn");
//     let post = document.querySelector(".post");
//     let widget = document.querySelector(".star-widget");
//     let editBtn = document.querySelector(".edit");
//     btn.onclick = () => {
//         widget.style.display = "none";
//         post.style.display = "block";
//         editBtn.onclick = () => {
//             widget.style.display = "block";
//             post.style.display = "none";
//         }
//         return false;
//     }
// }