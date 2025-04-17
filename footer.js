// Function to update copyright year
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('.copyright-year');
    copyrightElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', updateCopyrightYear); 