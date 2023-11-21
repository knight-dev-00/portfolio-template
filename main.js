/*Search & Close button*/
const searchLink = document.getElementsByClassName("search-icon")[0].querySelector("a");
const searchImg = searchLink.getElementsByTagName("img")[0];
const closeImg = searchLink.getElementsByTagName("img")[1];
const searchBox = document.getElementsByClassName("search-box")[0];
console.log(searchBox);

searchLink.addEventListener("click", () => {
  searchImg.classList.toggle("active")
  closeImg.classList.toggle("active")
  searchBox.classList.toggle("active")
})
