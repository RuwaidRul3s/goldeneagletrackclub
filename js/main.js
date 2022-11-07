
var accordion_Buttons = document.querySelectorAll('.open_button');

accordion_Buttons.forEach(element => {
    element.addEventListener('click', function () {

        if (element.classList.contains("fa-chevron-down")) {
            element.classList.remove("fa-chevron-down");
            element.classList.add("fa-chevron-up");
            element.parentElement.classList.add("open");
        }
        else {
            element.classList.remove("fa-chevron-up");
            element.classList.add("fa-chevron-down");
            element.parentElement.classList.remove("open");

        }
    });
});
