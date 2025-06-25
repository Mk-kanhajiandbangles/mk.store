let cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
  alert(item + " added to cart!");
}

function updateCart() {
  const list = document.getElementById("cart-list");
  const totalDisplay = document.getElementById("total");
  list.innerHTML = "";
  let total = 0;

  cart.forEach(product => {
    total += product.price;
    const li = document.createElement("li");
    li.textContent = `${product.item} - ₹${product.price}`;
    list.appendChild(li);
  });

  totalDisplay.textContent = `Total: ₹${total}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Checkout with UPI coming soon.");
}
