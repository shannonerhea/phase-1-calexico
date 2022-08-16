fetch('  http://localhost:3000/menu')
.then(response => response())
.then(menu => {


    menu.forEach(menuItem => {
        addItenToMenu(menuItem)
    })
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

## Challenge #4
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
