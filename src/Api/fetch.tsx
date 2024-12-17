// const FetchReqest = () => {

// }


// async function getProducts() {
//     try {
//       const response = await fetch(`${storeApi}/products${searchingRequest}`);
//       if (!response.ok) throw new Error("Network response was not ok");
//       const products = await response.json();
//       displayProducts(products);
//     } catch (error) {
//       showMessage("Error fetching products: " + error.message, "error");
//     }
//   }
  
//   function displayProducts(products) {
//     const productList = document.getElementById("productList");
//     productList.innerHTML = "";
//     products.forEach((product) => {
//       const productElement = document.createElement("div");
//       productElement.className = "product";
//       productElement.innerHTML = `
//                     <img src="/img/garbage.svg" class ="delete-product" onclick="deleteProduct(${product.id})" alt="garbage" /></button>
//                     <img class ="product-img" src="${product.image}" alt="${product.title}">
//                     <h3>${product.title}</h3>
//                     <p class ="product-price">$${product.price}</p>
//                     `;
//       productList.appendChild(productElement);
//     });
//   }