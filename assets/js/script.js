// Thumbnail Change Based on Color Selection
const colorImages = {
  black: "./assets/images/band_color_black.png",
  blue: "./assets/images/band_color_blue.png",
  violet: "./assets/images/band_color_ violet.png",
  cyan: "./assets/images/band_color_cyan.png",
};

// Get the product thumbnail
const productThumbnail = document.getElementById("productThumbnail");

document.querySelectorAll('input[name="bandColor"]').forEach((radio) => {
  radio.addEventListener("change", (event) => {
    const selectedColor = event.target.id.replace("color", "").toLowerCase();
    productThumbnail.src = colorImages[selectedColor];
  });
});

// Calculate Total Price Based on Wrist Size nad QTY
const sizeOptions = document.querySelectorAll('input[name="bandSize"]');
const quantityInput = document.getElementById("quantity");
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const totalPriceDisplay = document.getElementById("totalPrice");
let selectedPrice = 69;

// Update total price
function updateTotalPrice() {
  const quantity = parseInt(quantityInput.value, 10);
  const totalPrice = selectedPrice * quantity;
  totalPriceDisplay.textContent = `$${totalPrice}`;
}

// Handle size selection
sizeOptions.forEach((option) => {
  option.addEventListener("change", () => {
    selectedPrice = parseInt(option.value, 10);
    updateTotalPrice();
  });
});

// Handle quantity decrement
decrementButton.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value, 10);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
    updateTotalPrice();
  }
});

// Handle quantity increment
incrementButton.addEventListener("click", () => {
  let currentValue = parseInt(quantityInput.value, 10);
  quantityInput.value = currentValue + 1;
  updateTotalPrice();
});

// Add to Cart

let cart = [];
const total_item = document.getElementById("total_item");

function addToCart() {
  const name = document.querySelector(".product-title").textContent;

  const selectedColorInput = document.querySelector(
    'input[name="bandColor"]:checked'
  );
  const color = selectedColorInput?.id.replace("color", "");
  const selectedSizeInput = document.querySelector(
    'input[name="bandSize"]:checked'
  );
  const size = selectedSizeInput?.labels[0].textContent.trim()[0];
  if (!selectedColorInput || !selectedSizeInput) {
    alert("Please select both a color and a size.");
    return;
  }

  const product_img = colorImages[color.toLowerCase()];
  const price = parseFloat(selectedSizeInput?.value || "69");
  const quantity = parseInt(document.querySelector("#quantity").value);
  const existingItem = cart.find(
    (item) => item.name === name && item.color === color && item.size === size
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ product_img, name, color, size, price, quantity });
  }
  total_item.textContent = cart.length;
  console.log(cart);
  alert("Item added to cart!");
}

document.querySelector(".add-to-cart-btn").addEventListener("click", addToCart);
