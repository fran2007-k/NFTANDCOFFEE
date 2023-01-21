displayItems(JSON.parse(localStorage.getItem("cart")) || []);
// Add event listeners to the form and buttons in the iframe
var cartIframe = document.getElementById("cart");
cartIframe.addEventListener("load", function() {
  // Get the form and button elements
  const checkoutForm = cartIframe.document.getElementById("checkout-form");
  const submitButton = cartIframe.document.querySelector("#checkout-form button[type='submit']");
  
  // Add an event listener to the submit button
  submitButton.addEventListener("click", function(event) {
    // Prevent the form from being submitted
    event.preventDefault();
    
    // Validate the customer's information
    if (validateForm()) {
      // If the information is valid, submit the order
      submitOrder();
    }
  });
});

// Function to validate the form
function validateForm() {
  // Get the input elements
  const nameInput = cartIframe.document.querySelector("#checkout-form input[type='text']");
  const emailInput = cartIframe.document.querySelector("#checkout-form input[type='email']");
  const phoneInput = cartIframe.document.querySelector("#checkout-form input[type='tel']");
  
  // Validate the input values
  if (nameInput.value === "") {
    alert("Please enter your name");
    return false;
  }
  if (emailInput.value === "") {
    alert("Please enter your email");
    return false;
  }
  if (phoneInput.value === "") {
    alert("Please enter your phone number");
    return false;
  }
  
  // If the input values are all valid, return true
  return true;
}

// Function to submit the order
function submitOrder() {
  // Send the order to the server using an Ajax request
  // (omitted for brevity)
  
  // If the request is successful, display a success message
  alert("Your order has been placed!");
  
  // Hide the iframe
  cartIframe.style.display = "none";
}


function displayItems(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item');

    const itemName = document.createElement('p');
    itemName.textContent = item.name;
    itemName.className = "item-name";
    itemContainer.appendChild(itemName);

    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price;
    itemPrice.className = "item-price";
    itemContainer.appendChild(itemPrice);

    const itemImage = document.createElement('img');
    itemImage.src = item.path;
    itemImage.className = "item-img";
    itemContainer.appendChild(itemImage);
    const cart_content = document.getElementById("cart-content");
    cart_content.appendChild(itemContainer);
  }
}