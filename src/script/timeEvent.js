function LoadProduct(id){
  fetch(`https://fakestoreapi.com/products/${id}`)
  .then(res => {
    return res.json();
  })
  .then(product => {
    document.getElementById('lblTitle').innerHTML = product.title;
    document.getElementById('imgProduct').src = product.image;
  })
}

let productId = 1;

function LoadProductAuto() {
  productId++;
  LoadProduct(productId);
  document.getElementById('seekBar').value = productId;
}

function PrevClick() {
  productId--;
  LoadProduct(productId)
  document.getElementById('seekBar').value = productId;
}

function NextClick() {
  productId++;
  LoadProduct(productId)
  document.getElementById('seekBar').value = productId;
}

function SeekBarChange() {
  productId = document.getElementById('seekBar').value;
  LoadProduct(productId);
}

var thread;

function StartClick() {
  thread = setInterval(LoadProductAuto,3000);
  document.getElementById('lblStatus').innerHTML = `(Slide Show - Running)`;
}

function PauseClick() {
  clearInterval(thread);
  document.getElementById('lblStatus').innerHTML = `(Slide Show - Pushed)`;
}