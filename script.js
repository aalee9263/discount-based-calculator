document.getElementById("checkButton").addEventListener("click", function () {
    const age = parseInt(document.getElementById("age").value);
    const isMember = document.getElementById("member").checked;

    const resultElement = document.getElementById("result");

    if (isNaN(age)) {
        resultElement.textContent = "Invalid input. Please enter a valid age.";
    } else if (age >= 65 || isMember) {
        resultElement.textContent = "You are eligible for a senior citizen or member discount!";
    } else {
        resultElement.textContent = "You are not eligible for any discounts.";
    }
});
