document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you! Your message has been sent successfully!!");
  event.target.reset();
});