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
