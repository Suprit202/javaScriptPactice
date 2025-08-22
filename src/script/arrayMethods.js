var movies = ["War 2", "Coolie"];

function LoadMovies() {
  document.getElementById("lstMovies").innerHTML = "";
  movies.map(function (movie) {
    var option = document.createElement("option");
    option.text = movie.toUpperCase();
    option.value = movie;
    document.getElementById("lstMovies").appendChild(option);
  })
  document.getElementById("lblCount").innerHTML = `Total Number of Movies: ${movies.length}`;
}

function AddClick() {
  var movieName = document.getElementById("txtMovie").value;
  if (movies.indexOf(movieName) === -1) {

    movies.push(movieName);
    alert(`${movieName} Added to list`);
    LoadMovies();
    document.getElementById("txtMovie").value = "";

  } else {
    alert(`${movieName} Exists`);
  }

}

function SortAsc() {
  movies.sort();
  LoadMovies();
}

function SortDesc() {
  movies.sort();
  movies.reverse();
  LoadMovies();
}

function RemoveClick() {
  var selectedMovieName = document.getElementById("lstMovies").value;
  var selectedMovieIndex = movies.indexOf(selectedMovieName);
  var flag = confirm(`Are you sure?\nWant to delete ${selectedMovieName}`);
  if (flag === true) {
    movies.splice(selectedMovieIndex, 1);
    LoadMovies();
  }
}

function ClearClick() {
  movies.length = 0;
  LoadMovies();
}

function EditClick() {
  var selectedMovieName = document.getElementById("lstMovies").value;
  document.getElementById("txtEditMovie").value = selectedMovieName;
}
function SaveClick() {
  var selectedMovieName = document.getElementById("lstMovies").value;
  var selectedMovieIndex = movies.indexOf(selectedMovieName);
  var newMovieName = document.getElementById("txtEditMovie").value;
  movies[selectedMovieIndex] = newMovieName;
  LoadMovies();
}