// script.js - Updated to handle form submission and send data to an API

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("booking-form"); // Select the form by ID

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page reload

        // Collect form data
        const formData = {
            arrivalDate: document.querySelector("input[name='Date']").value,
            departureDate: document.querySelector("input[name='Date of Departure']").value,
            travelType: document.querySelector("select[name='travelType']").value
        };

        console.log("Submitting form data:", formData); // Debugging

        try {
            // Send data to the API
            const response = await fetch("https://your-api-endpoint.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log("Server Response:", result);

            if (response.ok) {
                alert("Form submitted successfully!");
                form.reset(); // Clear the form
            } else {
                alert("Error submitting form. Try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to connect to the server.");
        }
    });
});