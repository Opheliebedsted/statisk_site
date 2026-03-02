console.log("hej fra produkt");
const id = new URLSearchParams(window.location.search).get("id");
const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;
const container = document.querySelector(".produkt-grid");

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(product) {
  console.log(product);
  container.innerHTML = `
   <div>
          <a class="back-button" href="produktliste.html?category=${product.category}">Click here to go back</a>
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
            alt="Cricket Jersey"
          />
        </div>
        <article class="product-info">
          <h2>${product.productdisplayname}</h2>
          <h3>Price</h3>
          <p>DDK ${product.price},- </p>
          ${product.discount ? `<p class="sale">Nu DDK ${Math.round(product.price - (product.price * product.discount) / 100)},-</p>` : ""}
        ${product.discount ? `<p class="bgsale">${product.discount}%</p>` : ""}
          <h3>Color</h3>
          <p>${product.basecolour}</p>
          <h3>Article type</h3>
          <p>${product.articletype}</p>
          <h2>${product.brandname}</h2>
          ${product.brandbio ? `<p>${product.brandbio}</p>` : ""}
        </article>
        <article class="bg-product-info">
          <div class="form-container">
<label for="stoerrelse">Size</label>
<select id="stoerrelse" name="stoerrelse" required>
<option value="" disabled selected>Choose size...</option>
<option value="x-small">XS</option>
<option value="small">S</option>
<option value="medium">M</option>
<option value="large">L</option>
<option value="x-large">XL</option>
</select>
</div>
          <button>Add to basket</button>
        </article>
  `;
}
getData();
