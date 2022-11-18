
//Script for cart page
function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    let cartTotal = localStorage.getItem("totalCost")
    // console.log(cartTotal);
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products")
    // console.log(cartItems);
    //IF ITEMS EXISTS IN THE CART AND AND PRODUCTCONTAINER EXISTS I.E, WE ARE IN THE CART PAGE
    //Cart total will be equal to zero when items are added and removed
    if (cartItems && productContainer && cartTotal > 0) {
        //Initializing the innerHTML of the container with ""
        productContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            //mapping through every item into the array
            //Adding new html elements in every row => product title with close button and image, product price, quantity with counters, total value
            productContainer.innerHTML +=
                //we are displaying the image with the tag that we have in the menuitems object with .jpg extension
                //we are referercing every object with  its key value while mapping and inserting the value in the respective columns. We have also used bootstrap here for arrangement of columns.
                `<div class="product-title col-5">
                <svg class="delete-button" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z"></path></g></svg>
            <img class="cart-item-image" src="./menu-items/${item.tag}.jpg">
            <span>${item.name}</span>
            </div>
            <div class="product-cost col-2">&#8377;${item.cost}.00</div>
            <div class="product-quantity col-3">
            <svg class="minus-button" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"></path></svg>
            ${item.inCart}</span>
            <svg class="plus-button" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z" clip-rule="evenodd"></path></svg>
            <span>
            </div>
            <div class="total col-2">&#8377;${item.inCart * item.cost}.00
            </div>
            `;
        });
        productContainer.innerHTML +=
            `<div class="container-md row basketTotalContainer">
            <h4 class="col-3 colbasketTotalTitle">Basket Total</h4>
            <h4 class="col-2 basketTotal">
            &#8377;${cartTotal}.00</h4>
        </div>`
        //deleteButtons() is called when cart items are present
        deleteButtons()
        //calling manageQuantity() (i.e), increase or decrease when the cart items are present
        manageQuantity()
    }
    //If no items are added in the cart, the cart page shows this content
    else {
        document.querySelector(".product-container").innerHTML = `
        <div class="container-md mt-5 display-6 text-center">Your Cart is Empty</div>
        `
        document.querySelector("#cart-check-out").style.display = "none";
    }
}
//displayCart() is called here as the page loads
displayCart();
function deleteButtons() {
    //1.getting node array of the delete buttons
    let deleteButtons = document.querySelectorAll(".delete-button")
    let productName;
    //6.we have got the cartNumbers value here from the local storage and assigned it into a varible
    let productNumbers = localStorage.getItem('cartNumbers');
    //8. Grabbing the products in cart and converting to JS object
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    // console.log(cartItems);
    //10. Getting the total cost from the local storage
    let cartCost = localStorage.getItem('totalCost');
    //2.looping through every delete buttons
    for (let i = 0; i < deleteButtons.length; i++) {
        //3.event listener for delete button
        deleteButtons[i].addEventListener("click", () => {
            //4.Getting the buttons parent element (i.e,) the dish name, we are converting to lowercase trimming and concatenating without spaces.
            //We are using regex to find spaces /g globally and replace with nothing.
            productName = deleteButtons[i].parentElement.textContent.trim().toLowerCase().replace(/ /g, "");
            // console.log(productName);
            //9. We could reference the looping tagname into the cartItems array and extract the object
            // console.log(cartItems[productName].name + cartItems[productName].inCart);
            //5.When clicked we are subtracting the cart number in localstorage with number of items
            // 7. We are getting the initial value outside the loop and using it here
            localStorage.setItem("cartNumbers", productNumbers - cartItems[productName].inCart)
            //11. Updating the totalCost by subtracting the number of items this item is added into cart which we are removing now
            localStorage.setItem('totalCost', cartCost - (cartItems[productName].cost * cartItems[productName].inCart));
            //12.delete the cartItems from the local storage
            delete cartItems[productName];
            //13.Assigning the new value to the productsInCart (i.e) Removing the object of the button which we have clicked
            localStorage.setItem("productsInCart", JSON.stringify(cartItems))
            //14. Calling the functions again to reset the cart value with the particular item deleted and reload the cartNumber button to the new value
            displayCart();
            onLoadCartNumbers();
        });
    }
}
function manageQuantity() {
    //Getting the minus buttons and plus buttons into JS variable as an array
    let decreaseButtons = document.querySelectorAll(".minus-button");
    let increaseButtons = document.querySelectorAll(".plus-button");
    //Getting the cartitems from the local storage and parsing the JSON data into JS object
    let cartItems = localStorage.getItem("productsInCart");
    let currentQuantity = 0;
    let currentProduct = "";
    cartItems = JSON.parse(cartItems);
    //Looping through minus-button array and adding click event listener
    // console.log(cartItems);
    for (let i = 0; i < decreaseButtons.length; i++) {
        decreaseButtons[i].addEventListener("click", () => {
            //Grabbing the current quantity when clicked
            currentQuantity = decreaseButtons[i].parentElement.textContent.trim()
            console.log(currentQuantity);
            //Grabbing the name of the dish when the button is clicked by referencing parent element and its 2*previous element siblings
            //Like the same we did in remove button
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector("span").textContent.trim().toLowerCase().replace(/ /g, "");
            // console.log(currentProduct);
            //works only when the item is mimimum of 2
            if (cartItems[currentProduct].inCart > 1) {
                //subtracting the cartNumber with 1
                cartItems[currentProduct].inCart -= 1;
                //REFER menu.js for cartNumbers and totalCost functions
                //calling the cartNumbers and totalCost function with product name and decrease as arguments
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                //setting the same to local storage
                localStorage.setItem('productsInCart', JSON.stringify(cartItems))
                //Calling the displayCart() in order to change the current counter value
                displayCart();
            }
        });
    }
    //Looping through plus-button array and adding click event listener
    for (let i = 0; i < increaseButtons.length; i++) {
        increaseButtons[i].addEventListener("click", () => {
            //Grabbing the current quantity when clicked
            currentQuantity = increaseButtons[i].parentElement.textContent.trim()
            console.log(currentQuantity);
            //Grabbing the name of the dish when the button is clicked by referencing parent element and its 2*previous element siblings
            //Like the same we did in remove button
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector("span").textContent.trim().toLowerCase().replace(/ /g, "");
            // console.log(currentProduct);
            //No if statement for minimum value needed here as we did for decrease button
            //Add the cartNumber with 1
            cartItems[currentProduct].inCart += 1;
            //calling the cartNumbers function without decrease argument.....it automatically works as increase if already value presents and decrease is not passed as argument
            cartNumbers(cartItems[currentProduct]);
            //calling the totalcost function without decrease argument.....same as said above
            totalCost(cartItems[currentProduct]);
            //setting the same to local storage
            localStorage.setItem('productsInCart', JSON.stringify(cartItems))
            //Calling the displayCart() in order to change the current counter value
            displayCart();
        })
    }
}
let checkOut = document.getElementById("cart-check-out");
checkOut.addEventListener('click', () => {
    swal({
        title: "Are you sure to Check Out?",
        text: "Clicking OK will let you make an imaginary Food Check Out",
        icon: "info",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                localStorage.clear();
                displayCart();
                onLoadCartNumbers();
                document.getElementById("cart-items-count").innerText = "0";
                swal("Yaay!...Your Food is on the way", {
                    icon: "success",
                });
            } else {
                swal("Your Food is not Checked out...!", {
                    icon: "warning"
                });
            }
        })
})