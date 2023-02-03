const allFaqElements = document.querySelectorAll(".faq-question-container");

const allPElements = document.querySelectorAll(".p");

for (let x = 0; x < allFaqElements.length; x++) {
    allFaqElements[x].addEventListener("click", function () {
        console.log(allFaqElements[x]);
        console.log(allPElements[x].textContent);

        allPElements[x].classList.toggle("display-none");
    });
}
