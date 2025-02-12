document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.querySelector(".stars");
    for (let i = 0; i < 50; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        let size = Math.random() * 3 + "px";
        let posX = Math.random() * 100 + "vw";
        let posY = Math.random() * 100 + "vh";
        let duration = Math.random() * 5 + 5 + "s";
        star.style.width = size;
        star.style.height = size;
        star.style.left = posX;
        star.style.top = posY;
        star.style.animationDuration = duration;
        starsContainer.appendChild(star);
    }
});

// document.addEventListener("DOMContentLoaded", () => {
//     const registerForm = document.getElementById("registerForm");

//     registerForm.addEventListener("submit", async (event) => {
//         event.preventDefault(); // Prevent default form submission

//         const formData = new FormData(registerForm); // Collect form data

//         try {
//             const response = await fetch("http://localhost:3000/api", {
//                 method: "POST",
//                 body: formData
//             });

//             if (response.ok) {
//                 alert("Registration successful! Redirecting to login page...");
//                 window.location.href = "../login/index.html"; // Redirect to login page
//             } else {
//                 const errorData = await response.json();
//                 alert(`Registration failed: ${errorData.message}`);
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             alert("Something went wrong! Please try again.");
//         }
//     });
// });

