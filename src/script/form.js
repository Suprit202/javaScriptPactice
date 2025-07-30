function SubmitClick() {
  document.getElementById('detailsContainer').style.display = 'block'
  document.getElementById('lblName').textContent = document.getElementById('txtName').value;
  document.getElementById('lblPrice').textContent = document.getElementById('txtPrice').value;
  document.getElementById('lblRating').innerHTML = document.getElementById('txtRating').value + "<span class='bi bi-star-fill text-success mx-2'></span>";
  stock = document.getElementById('txtStock');
  disStock = document.getElementById('lblStock');
  if(stock.checked){
    disStock.textContent = 'Available';
  }
  else{
    disStock.textContent = 'Out Of Stock';
  }
}