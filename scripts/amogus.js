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
const element = data["items"][data["items"].length-1];

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

const header = document.getElementById('announcement');

let colorIndex = 0;
const colors = [
  '#FF0000', // red
  '#FF0D00',
  '#FF1A00',
  '#FF2600',
  '#FF3300',
  '#FF4000',
  '#FF4D00',
  '#FF5900',
  '#FF6600',
  '#FF7300',
  '#FF8000',
  '#FF8D00',
  '#FF9900',
  '#FFA600',
  '#FFB300',
  '#FFBF00',
  '#FFCC00',
  '#FFD900',
  '#FFE600',
  '#FFF200',
  '#FFFF00', // yellow
  '#F2FF00',
  '#E5FF00',
  '#D8FF00',
  '#CBFF00',
  '#BEFF00',
  '#B1FF00',
  '#A4FF00',
  '#97FF00',
  '#8AFF00',
  '#7DFF00',
  '#70FF00',
  '#63FF00',
  '#57FF00',
  '#4AFF00',
  '#3DFF00',
  '#30FF00',
  '#23FF00',
  '#16FF00',
  '#09FF00',
  '#00FF00', // green
  '#00FF0D',
  '#00FF1A',
  '#00FF26',
  '#00FF33',
  '#00FF40',
  '#00FF4D',
  '#00FF59',
  '#00FF66',
  '#00FF73',
  '#00FF80',
  '#00FF8D',
  '#00FF99',
  '#00FFA6',
  '#00FFB3',
  '#00FFBF',
  '#00FFCC',
  '#00FFD9',
  '#00FFE6',
  '#00FFF2',
  '#00FFFF', // cyan
  '#00F2FF',
  '#00E5FF',
  '#00D8FF',
  '#00CBFF',
  '#00BEFF',
  '#00B1FF',
  '#00A4FF',
  '#0097FF',
  '#008AFF',
  '#007DFF',
  '#0070FF',
  '#0063FF',
  '#0057FF',
  '#004AFF',
  '#003DFF',
  '#0030FF',
  '#0023FF',
  '#0016FF',
  '#0009FF',
  '#0000FF', // blue
  '#0D00FF',
  '#1A00FF',
  '#2600FF',
  '#3300FF',
  '#4000FF',
  '#D500FF',
  '#C200FF',
  '#AF00FF',
  '#9C00FF',
  '#8900FF',
  '#7600FF',
  '#6300FF',
  '#5000FF',
  '#3D00FF',
  '#2A00FF',
  '#1700FF',
  '#0400FF',
  '#0000FF', // blue
  '#0000E6',
  '#0000CC',
  '#0000B3',
  '#000099',
  '#000080',
  '#000066',
  '#00004D',
  '#000033',
  '#00001A',
  '#000000'  // black
]

setInterval(() => {
  header.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 100);

