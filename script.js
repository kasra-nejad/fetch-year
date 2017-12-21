window.onload = function() {
  const input = document.querySelector('.input');
  const fact = document.querySelector('.fact');
  const factText = document.querySelector('.facttext');
  input.addEventListener('input', fetchYear);

  function fetchYear() {
    let year = input.value;
    let url = `http://numbersapi.com/${year}/year`;
if (year != '') {
    fetch(url)
      .then(res => res.text())
      .then(data => {
        fact.style.display = "block";
        factText.innerText = data;
      })
      .catch(err => console.log(err));
    }  
  }

}
