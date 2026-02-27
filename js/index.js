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

// fetch(`https://kea-alt-del.dk/t7/api/categories`)
//   .then((response) => response.json())
//   .then((categories) => {
//     console.log(categories);
//     let markup = "";
//     categories.forEach(
//       (elm) =>
//         (markup += `<a href="productlist.html?category=${elm.category}">${elm.category}</a>`),
//     );
//     document.querySelector(".kat").innerHTML = markup;
//   });

//PRODUCTLIST
// function showData(data){
//     let markup => "";
//     data.forEach ((element))
// }
