let dataValue = 0;

// Function to update UI
const updateUI = (value) => {
    document.getElementById("counting").innerText = value;
};

// Event listeners for buttons
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("increment-btn").addEventListener("click", () => {
        dataValue += 5;
        updateUI(dataValue);
    });

    document.getElementById("decrement-btn").addEventListener("click", () => {
        if (dataValue >= 5) { // Prevent negative values
            dataValue -= 5;
            updateUI(dataValue);
        }
    });

    document.getElementById("addTen-btn").addEventListener("click", () => {
        dataValue += 10;
        updateUI(dataValue);
    });

    document.getElementById("reset-btn").addEventListener("click", () => {
        dataValue = 0;
        updateUI(dataValue);
    });
});
