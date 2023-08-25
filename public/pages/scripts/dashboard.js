//get dom element
const pageContainer = document.querySelector(".page-container");
const dashOpt = document.getElementById("dash-opt");
const allDonorContainer = document.querySelector(".all-donors-container");
const searchBloodDonor = document.querySelector(".search-blood-donor");
const navItems = document.querySelectorAll(".nav-item");
const addNewDonor = document.querySelector(".add-new-donor-section");
//add active class to navigation
navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        // Remove active class from all items
        navItems.forEach(function (navItem) {
            navItem.classList.remove("active");
        });

        // Add active class to the clicked item
        item.classList.add("active");
    });
});

//show dashboard option

function showDashboardOption() {
    dashOpt.classList.remove("hidden");
    allDonorContainer.classList.add("hidden");
    searchBloodDonor.classList.add("hidden");
    addNewDonor.classList.add("hidden");
}

function showAllDonor() {
    allDonorContainer.classList.remove("hidden");
    searchBloodDonor.classList.add("hidden");
    dashOpt.classList.add("hidden");
    addNewDonor.classList.add("hidden");
}
function showFindDonor() {
    searchBloodDonor.classList.remove("hidden");
    allDonorContainer.classList.add("hidden");
    dashOpt.classList.add("hidden");
    addNewDonor.classList.add("hidden");
}
function showAddDonor() {
    addNewDonor.classList.remove("hidden");
    searchBloodDonor.classList.add("hidden");
    allDonorContainer.classList.add("hidden");
    dashOpt.classList.add("hidden");
}
