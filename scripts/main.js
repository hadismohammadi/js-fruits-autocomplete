const input = document.getElementById("search");
const searchResults = document.getElementById("search-results");

function handleChangeInput() {
  if (!input.value) {
    searchResults.classList.remove("visible");
    return (searchResults.innerHTML = null);
  }

  return fetch("./scripts/fruits.json")
    .then((response) => response.json())
    .then((fruits) => {
      const filteredData = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(input.value.toLowerCase())
      );

      if (filteredData.length > 0) {
        searchResults.classList.add("visible");
        searchResults.innerHTML = filteredData
          .map((i) => `<div>${i}</div>`)
          .join("");
      } else {
        searchResults.innerHTML =
          '<div class="not-found-content">No Result!</div>';
      }
    });
}
