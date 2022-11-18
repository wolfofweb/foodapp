//Script for menu page
//function for displaying vegetarian contents only
function vegOnly() {
    //getting the veg button node
    vegButton = document.getElementById("veg-button");
    //getting the span nodelist for non-veg symbol span
    nonVeg = document.querySelectorAll(".non-veg");
    //if veg button is clicked
    if (vegButton.checked == true) {
        document.querySelector("#grills-heading").style.display = "none";
        //on click veg only button text changes to show all
        document.querySelector("#veg-button-text").innerText = "Show All"
        //non-veg span's parent element i.e, card's display will go to none
        for (items in nonVeg) {
            nonVeg[items].parentElement.parentElement.parentElement.parentElement.style.display = "none"
        }
    }
    //if click is false i.e, not clicked, it goes back to normal state displaying all the menu items
    else {
        document.querySelector("#veg-button-text").innerText = "Veg only"
        for (items in nonVeg) {
            nonVeg[items].parentElement.parentElement.parentElement.parentElement.style.display = "block"
        }
    }
}

// constructor template class for every products to create object for every individual product
class productsObject {
    constructor(name, tag, cost, inCart) {
        this.name = name,
            this.tag = tag,
            this.cost = cost,
            this.inCart = inCart;
    }
}
//creating seperate object for every menu items
//and storing it in an array, The menu items can be called by referencing the index number
products = [
    new productsObject("Chicken Kebab", "chickenkebab", 140, 0),
    new productsObject("Chicken 65", "chicken65", 120, 0),
    new productsObject("Paneer Tikka", "paneertikka", 120, 0),
    new productsObject("Chicken Momo", "chickenmomo", 130, 0),
    new productsObject("Crispy Corn", "crispycorn", 100, 0),

    new productsObject("Malai Kofta", "malaikofta", 140, 0),
    new productsObject("Dragon Chicken", "dragonchicken", 160, 0),
    new productsObject("Fish Fingers", "fishfingers", 150, 0),
    new productsObject("Golden fried Prawn", "goldenfriedprawn", 160, 0),
    new productsObject("Cheese Balls", "cheeseballs", 120, 0),

    new productsObject("Chicken Lollipop", "chickenlollipop", 160, 0),
    new productsObject("Butter Chicken", "butterchicken", 150, 0),
    new productsObject("Meals", "meals", 130, 0),
    new productsObject("Chicken Biriyani", "chickenbiriyani", 180, 0),
    new productsObject("Mutton Biriyani", "muttonbiriyani", 250, 0),

    new productsObject("Chicken Fried rice", "chickenfriedrice", 150, 0),
    new productsObject("Veg Fried Rice", "vegfriedrice", 140, 0),
    new productsObject("Chicken Noodles", "chickennoodles", 150, 0),
    new productsObject("Veg Noodles", "vegnoodles", 140, 0),
    new productsObject("American Chop Suey", "americanchopsuey", 180, 0),

    new productsObject("Seafood Fried Rice", "seafoodfriedrice", 180, 0),
    new productsObject("Grill Chicken", "grillchicken", 250, 0),
    new productsObject("Al Faham", "alfaham", 410, 0),
    new productsObject("Abode Grilled Chicken", "abodegrilledchicken", 300, 0),
    new productsObject("Grilled lamb ribs", "grilledlambribs", 450, 0),

    new productsObject("Barbeque", "barbeque", 400, 0),
    new productsObject("Tandoori Chicken", "tandoorichicken", 400, 0),
    new productsObject("Shawarma Roll", "shawarmaroll", 90, 0),
    new productsObject("Shawarma Plate", "shawarmaplate", 120, 0),
    new productsObject("Plain Parotta", "plainparotta", 25, 0),

    new productsObject("Butter Naan", "butternaan", 40, 0),
    new productsObject("Kuboos", "kuboos", 30, 0),
    new productsObject("Garlic Bread", "garlicbread", 50, 0),
    new productsObject("Chicken Manchow Soup", "chickenmanchowsoup", 100, 0),
    new productsObject("Cream of Chicken Soup", "creamofchickensoup", 110, 0),

    new productsObject("Sweet corn Veg Soup", "sweetcornvegsoup", 90, 0),
    new productsObject("Hot and Sour Chicken Soup", "hotandsourchickensoup", 110, 0),
    new productsObject("Cream of tomato soup", "creamoftomatosoup", 90, 0),
    new productsObject("Veg Hot and Sour Soup", "veghotandsoursoup", 90, 0),
    new productsObject("Scoop of Ice Cream", "scoopoficecream", 80, 0),

    new productsObject("Caramel Cheese Cake", "caramelcheesecake", 100, 0),
    new productsObject("Rasamalai Gulab Jamun", "rasamalaigulabjamun", 70, 0),
    new productsObject("Sweet Lassi", "sweetlassi", 80, 0),
    new productsObject("Fresh Juice", "freshjuice", 90, 0),
    new productsObject("Milk Shake", "milkshake", 100, 0),
]
//Getting Every Add to cart button
let carts = document.querySelectorAll(".add-button");
//Looping through every button("The buttons will come as an array")
for (let i = 0; i < carts.length; i++) {
    //onclick event listener for buttons
    carts[i].addEventListener('click', () => {
        //cartNumbers() is called on click of add to cart button and passing our products array as argument
        cartNumbers(products[i]);
        //function to calculate the total cost is called here while looping
        totalCost(products[i]);
    })
}
function cartNumbers(product, action) {
    // console.log("The product clicked is", product);
    //product Numbers is the value clicked
    let productNumbers = localStorage.getItem("cartNumbers");
    //converting string to Integer here
    productNumbers = parseInt(productNumbers);
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    //If decrease button is clicked, decrease argument is passed into this function as the action
    if (action == "decrease") {
        localStorage.setItem('cartNumbers', productNumbers - 1);
        document.querySelector("#cart-items-count").innerText = productNumbers - 1;
    }
    //if productNumber already exists
    //9=(i.e)increase is pressed here or any other item is added to cart, here product is passed without decrease argument
    else if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector("#cart-items-count").innerText = productNumbers + 1;
    }
    //if product does not exist previously, (i.e), Clicking add to cart for the first time
    else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector("#cart-items-count").innerText = 1;
    }
    //calling the setItem function after we set the cart value
    //This function will take the actual menu item object as the argument
    setItems(product);
}
//function for displaying the cart number on refresh
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    //If productNumber exists the cart value updates on page refresh
    if (productNumbers) {
        document.querySelector("#cart-items-count").innerText = productNumbers;
    }
}
//function call for loading the product number
onLoadCartNumbers();
function setItems(product) {
    //4.getting the menu item here and parsing it as JS Object
    cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    //5.If cart item is already present, we are increasing the incart here
    if (cartItems != null) {
        //7.When different item is clicked this statement is true and its returing undefined, so we are writing an if statement for undefined
        if (cartItems[product.tag] == undefined) {
            //8.updating the cartItems the value with the old item and adding the new item next to it
            cartItems = {
                ...cartItems, [product.tag]: product
            }
        }
        //6.calling the exact product clicked here and incrementing for !=null
        cartItems[product.tag].inCart += 1;
    }
    else {
        //1.product inCart value is set to 1 when no items are found in cartItems
        product.inCart = 1
        //2.creating an object here with product name as key and the product as the value
        cartItems = {
            [product.tag]: product
        }
    }
    //3.setting the localStorage with the object we have created i,e. the clicked menu item is pushed to local storage here as JSON string
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}
function totalCost(product, action) {
    //1.we got the menu item clicked and the action(decrease) as argument here 
    // console.log("price is", product.cost);
    //3.Getting the value of the total cost here
    let cartCost = localStorage.getItem("totalCost");
    //4.If there is a value is passed when decrease button is pressed
    if (action == "decrease") {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost - product.cost);
    }
    else if (cartCost != null) {
        //5.the localstorage returns the value as string, so we are converting to integer here
        cartCost = parseInt(cartCost);
        //6.setting the new total value here as old cost + new cost of the item clicked
        localStorage.setItem("totalCost", cartCost + product.cost)
    }
    //2.If the cartcost i.e. the localstore is empty, i.e. the first value is clicked the cost is stored into local storage as totalCost
    else {
        localStorage.setItem("totalCost", product.cost)
    }
}
