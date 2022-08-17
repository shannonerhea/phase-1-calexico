

//Fetch all the menu items from `http://localhost:3000/menu`. For each menu item create a `span` element that contains the name of the menu item, and add it to the `#menu-items` div.
let currentDish;

fetch("http://localhost:3000/menu")             //fetch all the items
.then(response => response.json())
.then(data => {
    //console.log(data)  //make sure data is there
    createMenu(data)  // function line 13
    selectDish(data[0])  // this collects first item ( When the page loads, display the first menu item.)
});

function createMenu(data) {
  // grab the menu from the dom
   const menu = document.querySelector(`#menu-items`);

  // loop over data to create new menu items
    data.forEach(item => {  // were looping over the .data for each (item and taking the .name out
        // create span
         const menuListItem = document.createElement('span');
         //apply the name
          menuListItem.textContent = item.name
        

        menuListItem.addEventListener('click', () => {
            selectDish(item)  // wrote this before the actual function(L33) click event on menu item
        });
        // add to the dom
        menu.append(menuListItem);
    });
};

function selectDish(dish) {
    currentDish = dish

    const dishImage = document.querySelector('#dish-image');
    const dishName = document.querySelector('#dish-name');
    const dishDescription = document.querySelector('#dish-description');
    const dishPrice = document.querySelector('#dish-price');
    const numberInCart = document.querySelector('#number-in-cart'); 

    dishImage.src = dish.image;
    dishName.textContent = dish.name;
    dishDescription.textContent = dish.description;
    dishPrice.textContent = dish.price;
    numberInCart.textContent = dish.number_in_bag
};

const cartForm = document.querySelector('#cart-form')
   cartForm.addEventListener('submit', (event) => { 
    event.preventDefault()

    const userInput = event.target['cart-amount'].value // this is add user its already in id so i dont need #id
       //console.log(userInput)
       currentDish.number_in_bag += parseInt(userInput);

      document.querySelector('#number-in-cart').textContent = currentDish.number_in_bag

       event.target.reset();
})



/**## Challenge #1
1.) Fetch all the menu items from `http://localhost:3000/menu`.

2.) For each menu item create a `span` element that contains the name of the menu item, 
3.) and add it to the `#menu-items` div.
*****<span>menu item name or just name idk yet</span> is an inline element prob gonna do something to the text inline

## Challenge #2
4.) When the page loads, display the first menu item. 
5.) You should set the image, name, description, and price. 
*****All the correct elements to set are located in the `#dish` `section` element.

## Challenge #3
6.) When the userclicks  addEventListener('clicks', () => {}) on the menu items on the left, 
they should see all the details for that specific menu item.

## Challenge #4 this is the form cart-form from html file
7.) The user should be able to add the menu items to their cart. 
8.) When the user presses the 'Add to Cart' button, 
9.) that number should be added to however many are currently in the cart.

For example, if there are currently 2 burritos in the cart, and the user adds 2 more, the total should be 4.

> *It is okay if the value resets in-between clicking on the menu items! It does not need to save state!*
---
# Bonus Challenges!

## Bonus Challenge #1
10.) The value of the cart for each item should persist when clicking through the various menu items.

## Bonus Challenge #2 Ive writen this algo its in aa file. 
11.) Calculate the *total cost* of what is currently in the cart and display it somewhere on the page.

## Bonus Challenge #3
12.) use patch request to maintian the value of the cart in-between refreshes
+ */
