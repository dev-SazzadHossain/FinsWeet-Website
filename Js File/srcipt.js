const manuBar = document.getElementById("menu-bar");
manuBar.addEventListener("click", function () {
  const showItem = document.querySelector(".nav-list");

  if (showItem.style.display === "none") {
    showItem.style.display = "block";
  } else {
    showItem.style.display = "none";
  }
});
