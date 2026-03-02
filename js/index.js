const container = document.querySelector(".kategorier-grid");
// console.log(container);
const endpoint = `https://kea-alt-del.dk/t7/api/categories`;
// console.log(endpoint);

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then(showData);
}
function showData(data) {
  console.log(data);
  let markup = "";
  data.forEach(
    (element) =>
      (markup += `<a class="kat" href="produktliste.html?category=${element.category}">${element.category}</a>`),
  );
  container.innerHTML = markup;
}
getData();
