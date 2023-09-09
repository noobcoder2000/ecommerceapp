
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];
function displayOrderSuccessMessage() {
  // Create a div element for the message
  const messageDiv = document.createElement("div");
  messageDiv.textContent = "Order Successful!";
  messageDiv.style.backgroundColor = "green";
  messageDiv.style.color = "white";
  messageDiv.style.textAlign = "center";
  messageDiv.style.padding = "10px";
  messageDiv.style.position = "fixed";
  messageDiv.style.top = "0";
  messageDiv.style.left = "0";
  messageDiv.style.width = "100%";
  messageDiv.style.zIndex = "9999";

  // Append the message div to the document body
  document.body.appendChild(messageDiv);

  // Set a timer to remove the message after a few seconds (optional)
  setTimeout(function () {
      document.body.removeChild(messageDiv);
  }, 5000); // Remove the message after 5 seconds (adjust as needed)
}

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
document.addEventListener("DOMContentLoaded", function () {
const payButton = document.querySelector(".payButton");

payButton.addEventListener("click", () => {
  // Simulate a successful order for demonstration purposes
  // In a real scenario, you would perform the actual checkout process here
  event.preventDefault();

  // Get the values from the form fields
  const Name = document.querySelector("#Name").value;
  const cardNumber = document.querySelector("#cardNumber").value;
  const expirationDate = document.querySelector("#expirationDate").value;
  const cvv = document.querySelector("#cvv").value;

  // Check if any of the required fields are empty
  if (
    !Name ||
    !cardNumber ||
    !expirationDate ||
    !cvv
  ) {
    // Display an error message to the user
    alert("Please fill out all required fields.");
  } else {
    // If all fields are filled, simulate a successful order
    displayOrderSuccessMessage();
  // Display the order success message
  // Hide the payment section (optional)
  payment.style.display = "none";
  }
  // Reset your cart or perform other actions here (optional)
  });
});
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});