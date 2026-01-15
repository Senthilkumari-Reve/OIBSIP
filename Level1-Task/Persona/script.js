const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (top < screenHeight - 100) {
      section.classList.add("active");
    }
  });
}

function scrollToAbout() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });

}

  function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ 
      behavior: "smooth" 
    });
  }


window.addEventListener("scroll", revealOnScroll);
