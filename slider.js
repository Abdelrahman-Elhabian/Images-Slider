// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

var slidesCount = sliderImages.length;
var currentSlide = 1;
var slideNumberElement = document.getElementById("slide-number");
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

var paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

for (var i = 1; i <= slidesCount; i++) {
  var paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(paginationElement);
var paginationCreatedUl = document.getElementById("pagination-ul");
var paginationsBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (var i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    paginationsBullets.forEach((element) => {
      element.classList.remove("active");
    });
    checker();
  };
}

// Trigger The Checker Function
checker();

function nextSlide() {
  prevButton.classList.remove("disabled");
  if (currentSlide == slidesCount) {
    return false;
  } else {
    currentSlide++;
    paginationsBullets.forEach((element) => {
      element.classList.remove("active");
    });
    paginationsBullets.forEach((element) => {
      if (element.dataset.index == currentSlide) {
        element.classList.add("active");
      }
    });
  }
  checker();
}

function prevSlide() {
  nextButton.classList.remove("disabled");
  if (currentSlide == 1) {
    return false;
  } else {
    currentSlide--;
    paginationsBullets.forEach((element) => {
      element.classList.remove("active");
    });
    paginationsBullets.forEach((element) => {
      if (element.dataset.index == currentSlide) {
        element.classList.add("active");
      }
    });
  }
  checker();
}

function checker() {
  removeActive();
  slideNumberElement.innerHTML = `Slide #${currentSlide} from ${slidesCount}`;
  for (let i = 0; i < slidesCount; i++) {
    if (i + 1 == currentSlide) {
      sliderImages[i].classList.add("active");
    }
  }
  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else if (currentSlide != 1) {
    prevButton.classList.remove("disabled");
  }
  if (currentSlide == slidesCount) {
    nextButton.classList.add("disabled");
  } else if (currentSlide != slidesCount) {
    nextButton.classList.remove("disabled");
  }
  paginationsBullets[currentSlide - 1].classList.add("active");
  sliderImages[currentSlide - 1].classList.add("active");
}

function removeActive() {
  sliderImages.forEach((e) => {
    e.classList.remove("active");
  });
}
