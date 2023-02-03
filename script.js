const allFaqElements = document.querySelectorAll(".faq-question-container");

console.log(allFaqElements);

allFaqElements.addEventListener("click", function (e) {
    const clickedFaq = e.target.closest(".allFaqElements");

    if (!clickedFaq) {
        return;
    }

    console.log(clickedFaq);
});

// allFaqElements.addEventListener;
