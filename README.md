# Product Cart Modal Project

## Description

This project implements a fully dynamic product cart modal using HTML, CSS, and Vanilla JavaScript. Users can add products to the cart, customize them by selecting options such as color, size, and quantity, and view the updated cart data in a modal window. The cart dynamically updates, validates user inputs, and provides a seamless shopping experience.

## Features

- **Dynamic Product Cart**: Add products with selected options (color, size, quantity) to the cart.
- **Cart Modal**: View and manage cart items in a modal.
- **Validation**: Prevent adding products to the cart without selecting mandatory options (e.g., color and size).
- **Live Updates**: Automatically updates the cart data, including total items and price.
- **Quantity Management**: Increment or decrement product quantities before adding them to the cart.
- **Responsive Design**: Works well on different screen sizes.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmmedrasel-dev/product-details-page-layout-html
   ```
2. Open the project folder:
   ```bash
   cd product-details-page-layout-html
   ```
3. Open `index.html` in any modern browser.

## Project Structure

```
project-cart-modal/
|-- index.html     # Main HTML file
|-- assets/        # Images and other assets
    |-- css        # Styling for the project
    |-- JS
        |-- script.js      # JavaScript functionality
    |-- Images
```

## Usage

1. Open the product page in your browser.
2. Select a **color** and **size** for the product.
3. Adjust the **quantity** using the increment (+) and decrement (-) buttons.
4. Click the **Add to Cart** button:
   - If mandatory options are not selected, a validation message will appear.
   - If valid, the item is added to the cart, and the cart icon displays the total number of items.
5. Click the **Checkout** button to open the cart modal and view your selected items.
6. Review your cart in the modal, including:
   - Product name, color, size, quantity, and price.
   - Total quantity and price at the bottom.
7. Use the "Continue Shopping" button to close the modal and return to the product page.

## Code Overview

### HTML

- Contains the product details section with options for color, size, and quantity.
- The cart modal includes a table to display selected cart items dynamically.

### CSS

- Styles for the product page, modal, and responsive design.

### JavaScript

- **addToCart Function**: Validates product options, adds items to the cart, and updates the cart data.
- **updateCartModal Function**: Dynamically updates the cart modal with the current cart data.
- Event listeners for handling button actions like incrementing quantity, adding to the cart, and opening the modal.

## Key Functions

### `addToCart()`

- Validates that the user has selected both color and size before adding an item to the cart.
- Updates the cart array and alerts the user.

### `updateCartModal()`

- Populates the modal with current cart items.
- Shows a placeholder message when the cart is empty.
- Calculates and displays the total quantity and price.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## Future Enhancements

- Add the ability to remove items directly from the cart modal.
- Persist cart data using localStorage or a backend service.
- Integrate with a payment gateway for checkout functionality.
- Include advanced filtering for product options.

## License

This project is licensed under the MIT License.

## Author

Created by [Your Name](https://github.com/ahmmedrasel-dev).
