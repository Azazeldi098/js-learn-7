"use strict";

// 1. Изменение заголовка
function changeTitle(text) {
  const title = document.querySelector("#main-title");
  title.textContent = text;
  return title.textContent;
}

// 2. Показать или скрыть блок
function toggleInfo() {
  const block = document.querySelector("#info-block");
  block.classList.toggle("hidden");
  return !block.classList.contains("hidden");
}

// 3. Изменение ссылки
function updateLink(url, label) {
  const link = document.querySelector("#main-link");
  link.textContent = label;
  link.setAttribute("href", url);
  return link;
}

// 4. Добавление пункта списка
function addListItem(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.textContent = text;
  button.textContent = "Удалить";

  button.addEventListener("click", function () {
    li.remove();
  });

  li.append(span, button);
  document.querySelector("#task-list").append(li);
  return li;
}

// 5. Карточка товара
function createProductCard(product) {
  const card = document.createElement("article");
  const title = document.createElement("h3");
  const price = document.createElement("p");

  card.className = "product-card";
  title.textContent = product.name;
  price.textContent = "Цена: " + product.price + " ₸";

  card.append(title, price);
  return card;
}

// 6. Вывод товаров
function renderProducts(products) {
  const container = document.querySelector("#products");
  container.innerHTML = "";

  for (const product of products) {
    container.append(createProductCard(product));
  }

  return products.length;
}

window.domLab = {
  changeTitle,
  toggleInfo,
  updateLink,
  addListItem,
  createProductCard,
  renderProducts,
};