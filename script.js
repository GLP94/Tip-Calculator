const tipPercentage = document.getElementById("TipPercentage");
const tipSlider = document.getElementById("TipSlider");
const tipAmount = document.getElementById("TipTotal");
const billInput = document.getElementById("BillInput");
const billAmount = document.getElementById("BillTotal");

// Initial Value with percentage
tipPercentage.innerHTML = tipSlider.value + "%";

// Assigning slider's value to tip label with percentage
tipSlider.oninput = function() {
    tipPercentage.innerHTML = this.value + "%";
    tipCalc();
}

// Update totals on bill change
billInput.oninput = tipCalc;

// Tip Calculation that updates both Tip total and Bill total
function tipCalc() {
    const bill = Number(billInput.value);
    const tip = bill * (Number(tipSlider.value) / 100);

    tipAmount.innerHTML = tip.toFixed(2);
    billAmount.innerHTML = (bill + tip).toFixed(2);
}

// Initialize function on startup
tipCalc()