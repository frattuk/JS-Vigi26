const handleAddProduct = (event) => {
  event.preventDefault();

  const image = document.querySelector('input[name="image"]');
  const title = document.querySelector('input[name="title"]');
  const price = document.querySelector('input[name="price"]');
  const product = {
    image: image.value,
    title: title.value,
    price: price.value,
  };

  const params = {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  fetch("https://golden-whispering-show.glitch.me", params)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
      image.value = "";
      title.value = "";
      price.value = "";
    })
    .catch((error) => {
      console.error(error);
    });
};

const productForm = document.getElementById("product-form");
productForm.addEventListener("submit", handleAddProduct);

// const handleSubmitCar = (event) => {
//   event.preventDefault();

//   const brand = document.querySelector('input[name="brand"]');
//   const model = document.querySelector('input[name="model"]');

//   const car = { brand: brand.value, model: model.value };
//   const params = {
//     method: "POST",
//     body: JSON.stringify(car),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   };

//   fetch("https://olive-bead-glazer.glitch.me", params)
//     .then((resp) => resp.json())
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// const carForm = document.getElementById("car-form");
// carForm.addEventListener("submit", handleSubmitCar);
