const category = new URLSearchParams(window.location.search).get("category");
const container = document.querySelector(".produktlist-grid");
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
document.querySelector("h2").textContent = category;

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(products) {
  let markup = "";
  products.forEach((product) => {
    console.log(product);
    markup += `<a href="produkt.html">
          <article class="produkt-pic">
            <div class="soldout">
              <img
                src="https://kea-alt-del.dk/t7/images/webp/640/1532.webp"
                alt=""
                class="product-image"
              />
              <div class="sold-out-badge">Sold out</div>
            </div>
            <h3 class="produkt-title">Grey Puma T-shirt</h3>
            <p class="subtitle">Tshirt/Puma</p>
            <p class="price">DDK 895,-</p>
            <p class="sale">Nu DDK 716,-</p>
            <div class="bgsale">-20%</div>
          </article>
        </a>`;
  });
  container.innerHTML = markup;
}
getData();
