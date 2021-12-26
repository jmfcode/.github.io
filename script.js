function homeCtaOnClick() {
  document.getElementById("home-cta").classList.add("hidden");
  document.getElementById("home-form").classList.remove("hidden");
}

document.getElementById("home-cta").onclick = homeCtaOnClick;
