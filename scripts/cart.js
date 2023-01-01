displayItems(JSON.parse(localStorage.getItem("cart")) || []);
// Add event listeners to the form and buttons in the iframe
cartIframe.addEventListener("load", function() {
  // Get the form and button elements
  const checkoutForm = cartIframe.contentWindow.document.getElementById("checkout-form");
  const submitButton = cartIframe.contentWindow.document.querySelector("#checkout-form button[type='submit']");
  
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
  const nameInput = cartIframe.contentWindow.document.querySelector("#checkout-form input[type='text']");
  const emailInput = cartIframe.contentWindow.document.querySelector("#checkout-form input[type='email']");
  const phoneInput = cartIframe.contentWindow.document.querySelector("#checkout-form input[type='tel']");
  
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

// Get the iframe and button elements
const cartIframe = document.getElementById("cart-iframe");
const closeCartButton = cartIframe.contentWindow.document.getElementById("close-cart-button");

// Add an event listener to the button
closeCartButton.addEventListener("click", function() {
  // Hide the iframe
  cartIframe.style.display = "none";
});

function closeIFrame() {
   // Get the iframe element
  var iframe = window.parent.document.getElementById("cart-iframe");
  
  // Hide the iframe by setting the display attribute to none
  iframe.style.display = "none";
  }

function displayItems(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item');

    const itemName = document.createElement('p');
    itemName.textContent = item.name;
    itemContainer.appendChild(itemName);

    const itemPrice = document.createElement('p');
    itemPrice.textContent = item.price;
    itemContainer.appendChild(itemPrice);

    const itemImage = document.createElement('img');
    itemImage.src = item.path;
    itemContainer.appendChild(itemImage);
    const cart_content = document.getElementById("cart-content");
    cart_content.appendChild(itemContainer);
  }
}