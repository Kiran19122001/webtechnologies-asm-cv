const form = document.getElementById("survey-form");
        const popup = document.getElementById("popup");
        const closePopup = document.getElementById("close-popup");

        const submitButton = document.getElementById("submit-button");
        const resetButton = document.getElementById("reset-button");

        submitButton.addEventListener("click", function () {
            if (form.checkValidity()) {
                document.getElementById("popup-first-name").textContent = document.getElementById("first-name").value;
                document.getElementById("popup-last-name").textContent = document.getElementById("last-name").value;
                document.getElementById("popup-date-of-birth").textContent = document.getElementById("date-of-birth").value;
                document.getElementById("popup-country").textContent = document.getElementById("country").value;
                const selectedGenders = [...document.querySelectorAll('input[name="gender"]:checked')].map(input => input.value);
                document.getElementById("popup-gender").textContent = selectedGenders.join(", ");
                document.getElementById("popup-profession").textContent = document.getElementById("profession").value;
                document.getElementById("popup-email").textContent = document.getElementById("email").value;
                document.getElementById("popup-mobile").textContent = document.getElementById("mobile").value;
                popup.style.display = "block";
            }
        });

        resetButton.addEventListener("click", function () {
            form.reset();
        });

        closePopup.addEventListener("click", function () {
            popup.style.display = "none";
            form.reset();
        });