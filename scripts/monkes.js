data = {
    "items": [
      {"type":"monke", "price":"$14.99", "name":"Flying Hat Monke", "path":"../images/monkes/frame_0_delay-0.15s.gif"},
      {"type":"monke", "price":"$19.99", "name":"Blinded Monke", "path":"../images/monkes/frame_1_delay-0.15s.gif"},
      {"type":"monke", "price":"$14.99", "name":"Rainbow Teeth Monke", "path":"../images/monkes/frame_2_delay-0.15s.gif"},
      {"type":"monke", "price":"$9.99", "name":"Boring Monke", "path":"../images/monkes/frame_3_delay-0.15s.gif"},
      {"type":"monke", "price":"$14.99", "name":"Military Monke", "path":"../images/monkes/frame_4_delay-0.15s.gif"},
      {"type":"monke", "price":"$49.99", "name":"King Monke", "path":"../images/monkes/frame_5_delay-0.15s.gif"},
      {"type":"monke", "price":"$19.99", "name":"Atreus Monke", "path":"../images/monkes/frame_6_delay-0.15s.gif"},
      {"type":"monke", "price":"$19.99", "name":"Soldier Monke", "path":"../images/monkes/frame_7_delay-0.15s.gif"},
      {"type":"monke", "price":"$14.99", "name":"Loving Monke", "path":"../images/monkes/frame_8_delay-0.15s.gif"},
      {"type":"Coffee", "price":"$14.99", "name":"Coffee Duck", "path":"../images/coffees/coffee_0.gif"},
      {"type":"Coffee", "price":"$9.99", "name":"Coffee Bear", "path":"../images/coffees/coffee_2.gif"},
      {"type":"Coffee", "price":"$49.99", "name":"Coffee GOD", "path":"../images/coffees/coffee_1.gif"},
      {"type":"Amogus", "price":"UNDEFINED", "name":"Amogus Sus", "path":"../images/amogus.jpeg"}

    ]
  }
  

var shop_content = document.getElementById("shop-content");

for (let i = 0; i < data["items"].length; i++) {
    const element = data["items"][i];
    if (element["type"] === "monke"){
        //Create product-box div
        var box = document.createElement("div");
        box.className = "product-box";
        shop_content.appendChild(box);
        //add image
        var img = document.createElement("img");
        img.className = "product-img";
        img.src = element["path"];
        box.appendChild(img);
        //add product-title h2
        var h2 = document.createElement("h2")
        h2.className = "product-title";
        h2.innerHTML = element["name"]
        box.appendChild(h2);
        //add price span
        var span = document.createElement("span");
        span.className = "price";
        span.innerHTML = element["price"]
        box.appendChild(span);
        //add cart img
        var cart_img = document.createElement("img");
        cart_img.className = "cart-img";
        cart_img.src = "../images/icons/bx-shopping-bag.svg";
        box.appendChild(cart_img)
    }
}

// Get the button and iframe elements
const openCartButton = document.getElementById("open-cart-button");
const cartIframe = document.getElementById("cart-iframe");

// Add an event listener to the button
openCartButton.addEventListener("click", function () {
  // Display the iframe
  cartIframe.style.display = "block";
});
