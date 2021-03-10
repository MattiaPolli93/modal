// Functions
// Function to remove CSS classes
const showModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// Function to add CSS classes
const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}