
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


document.querySelector('.menu__down_btn').addEventListener('click',
    function () {


        var drop_down_button = document.querySelector('.dropdown__menu');

        if (drop_down_button.style.display == "block") {
            this.classList.remove('fa-caret-up');
            this.classList.add('fa-caret-down');
            drop_down_button.style.display = "none";
        }
        else {

            this.classList.remove('fa-caret-down');
            this.classList.add('fa-caret-up');
            drop_down_button.style.display = "block";
        }

    });

