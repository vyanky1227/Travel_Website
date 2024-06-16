function sendMail() {
    var params = {
      name: document.getElementById("exampleInputName").value,
      email: document.getElementById("exampleInputEmail2").value,
      message: document.getElementById("exampleInputMessage").value,
    };
  
    const serviceID = "service_hi7jvka";
    const templateID = "template_2mu6atu";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("exampleInputName").value = "";
          document.getElementById("exampleInputEmail2").value = "";
          document.getElementById("exampleInputMessage").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }

// Modal JS

const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-btn");
const subscribeBtn = document.querySelector("#news-subscribe");
const form = document.querySelector("#modal-form");

function openModal() {
  modalContainer.style.display = "flex";
}

function closeModal() {
  modalContainer.style.display = "none";
}

// Function to handle form submission (you can customize this)
function subscribe(e) {
  e.preventDefault();
  const emailInput = document.querySelector("#modal-email").value;
  // You can add your logic to handle the form submission here
  // alert("Email subscribed: " + emailInput);
  closeModal();
}

// Close the modal when clicking outside the modal content (new code)
window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    closeModal();
  }
});

// Close the modal when clicking the exit button (new code)
closeBtn.addEventListener("click", closeModal);

form.addEventListener("submit", subscribe);
closeBtn.addEventListener("click", closeModal);

// Open the modal as soon as the page loads
window.onload = openModal;


// carousel JS

const slideDots = document.querySelectorAll(".imageDots span");
const slides = document.querySelectorAll(".mySlides");
let activeSlide = 0;
let slideInterval;

const destinationTitles = [
  "Eiffel Tower",
  "Giant Wheel",
  "Goa Beach",
  "Male Beach",
];

const destinationSubtitles = ["Paris", "London", "Goa", "Maldives"];

slideDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    changeSlide(null, index);
  });
});

document.querySelector(".destination__nav span:nth-child(1)").addEventListener("click", () => {
  changeSlide(-1, null);
  resetSlideInterval();
});

document.querySelector(".destination__nav span:nth-child(2)").addEventListener("click", () => {
  changeSlide(1, null);
  resetSlideInterval();
});

function changeSlide(relativeNum, absoluteNum) {
  if (typeof relativeNum === "number") {
    activeSlide = (activeSlide + relativeNum) % slides.length;
    if (activeSlide < 0) activeSlide = slides.length + activeSlide;
  } else if (typeof absoluteNum === "number") {
    activeSlide = absoluteNum;
  }

  const title = destinationTitles[activeSlide];
  const subtitle = destinationSubtitles[activeSlide];

  const activeSlideElement = slides[activeSlide];
  if (!activeSlideElement.querySelector(".destination__details")) {
  const detailsContainer = document.createElement("div");
  detailsContainer.className = "destination__details";
  activeSlideElement.appendChild(detailsContainer);
  
  const titleElement = document.createElement("p");
  titleElement.className = "destination__title";
  detailsContainer.appendChild(titleElement);
  
  const subtitleElement = document.createElement("p");
  subtitleElement.className = "destination__subtitle";
  detailsContainer.appendChild(subtitleElement);
  }
  
  const titleElement = activeSlideElement.querySelector(".destination__title");
  const subtitleElement = activeSlideElement.querySelector(".destination__subtitle");
  titleElement.textContent = destinationTitles[activeSlide];
  subtitleElement.textContent = destinationSubtitles[activeSlide];

  slides[0].style.marginLeft = `${-activeSlide * 100}%`;

  slideDots.forEach((dot) => {
    dot.classList.remove("active");
  });
  slideDots[activeSlide].classList.add("active");
}

function startSlideInterval() {
  slideInterval = setInterval(() => {
    changeSlide(1, null);
  }, 4000); // Change slide every 4 seconds
}

function resetSlideInterval() {
  clearInterval(slideInterval); // For clearing auto- slide
  startSlideInterval(); // initializing the auto - slide
}

// Initial details rendering
changeSlide(0);
startSlideInterval();

document.getElementById('emailInput').addEventListener('focus', function() {
  document.getElementById('send').classList.add('focused');
});

document.getElementById('emailInput').addEventListener('blur', function() {
  document.getElementById('send').classList.remove('focused');
});
