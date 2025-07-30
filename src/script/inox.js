function BookClick() {
  document.getElementById('btnContainer').style.display = "none";
  document.getElementById('summaryContainer').style.display = "block";

  document.getElementById('lblMovie').textContent = document.getElementById('lstMovie').value;
  document.getElementById('lblDate').textContent = document.getElementById('lstDate').value;
  document.getElementById('lblTime').textContent = document.getElementById('lstTiming').value;
  document.getElementById('lblTheater').textContent = document.getElementById('lstCinema').value;

  movie = document.getElementById('lstMovie').value;
  poster = document.getElementById('imgPoster');

  if (movie == 'Kingdom') {
    poster.src = "../../public/image/kingdom.png"
  } else {
    poster.src = "../../public/image/f4.png"
  }

}

function ModifyClick() {
  document.getElementById('#btnBook').textContent = 'Save';
  document.getElementById('#btnBook').className = 'btn btn-success'
}