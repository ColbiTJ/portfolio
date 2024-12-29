document.getElementById("contactForm").addEventListener("submit", async function (e) {

    e.preventDefault(); // Prevent the default form submission



    // Collect form data

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());



    try {

        // Send the data to the API Gateway

        const response = await fetch("https://otlqc8wh02.execute-api.us-east-1.amazonaws.com/prod/submit", {

            method: "POST",

            headers: {

                "Content-Type": "application/json",

            },

            body: JSON.stringify(data),

        });



        if (response.ok) {

            alert("Message sent successfully!");

        } else {

            const errorData = await response.json();

            alert("Error: " + (errorData.message || "Something went wrong."));

        }

    } catch (err) {

        alert("Failed to send message. Please try again.");

    }

});

