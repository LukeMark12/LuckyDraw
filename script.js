document.getElementById("luckyDrawForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value || null;  // Optional email
    const phone = document.getElementById("phone").value;

    if (name && phone) {
        document.getElementById("luckyDrawForm").classList.add("hidden");
        document.getElementById("successMessage").classList.remove("hidden");

        // Send form data to the server if backend is implemented
        // fetch('/api/enter-lucky-draw', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ name, email, phone })
        // }).then(response => response.json()).then(data => console.log(data));

        console.log("Form Submitted:", { name, email, phone });
    }
});
