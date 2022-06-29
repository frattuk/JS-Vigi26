const renderCard = (product) => {
  const { id, image, price, title } = product;
  const card = document.createElement("div");
  const imageEl = document.createElement("img");
  const priceEl = document.createElement("h5");
  const titleEl = document.createElement("p");

  const deleteButton = document.createElement("button");
  card.className = "card";

  imageEl.src = image;
  imageEl.alt = title;
  titleEl.textContent = title;
  priceEl.textContent = price;
  deleteButton.textContent = "Istrinti";
  priceEl.style.color = "red";
  deleteButton.addEventListener("click", () => {
    const params = {
      method: "DELETE",
    };
    console.log(id);
    fetch(`https://golden-whispering-show.glitch.me/${id}`, params)
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  });
  card.append(imageEl, titleEl, priceEl, deleteButton);
  document.body.append(card);
};

fetch("https://golden-whispering-show.glitch.me")
  .then((resp) => resp.json())
  .then((response) => {
    response.forEach((product) => renderCard(product));
  })
  .catch((error) => {
    console.error(error, ": failed to load");
  });
