const category = new URLSearchParams(window.location.search).get("category");
const container = document.querySelector(".produktlist-grid");
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
document.querySelector("h2").textContent = category;

console.log("hej");

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(products) {
  let markup = "";
  products.forEach((product) => {
    console.log(product);
    markup += `<a href="produkt.html?id=${product.id}"> 
          <article class="produkt-pic ${product.soldout && "soldout"} ${product.discount && "sale"}">
            <div class="soldout">
              <img
               class="product-image"
                src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
                alt=""
               
              />
              ${product.soldout ? `<div class="sold-out-badge">Sold out</div>` : ""}
            </div>
            <h3>${product.productdisplayname}</h3>
            <p class="subtitle">${product.articletype} | ${product.brandname}</p>
            <p class="price">DDK ${product.price},-</p>
            ${product.discount ? `<p class="sale">Nu DDK ${Math.round(product.price - (product.price * product.discount) / 100)},-</p>` : ""}
            ${product.discount ? `<p class="bgsale">${product.discount}%</p>` : ""}
          </article>
        </a>`;
  });
  container.innerHTML = markup;
}
getData();
