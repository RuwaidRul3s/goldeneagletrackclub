



// control select program drop down  button 

document.querySelector('.icon').addEventListener('click', function () {

    if (this.classList.contains("fa-caret-down")) {
        document.querySelector('.dropdown-list').style.opacity = 1;
        document.querySelector('.dropdown-list').style.visibility = "visible";
        this.classList.remove('fa-caret-down');
        this.classList.add('fa-caret-up');
        document.querySelector('.dropdown').style.marginBottom = "15rem";
    }
    else {
        document.querySelector('.dropdown').style.marginBottom = "0px";
        this.classList.add('fa-caret-down');
        this.classList.remove('fa-caret-up');
        document.querySelector('.dropdown-list').style.opacity = 0;
        document.querySelector('.dropdown-list').style.visibility = "hidden";
    }
});


//control card light

// var cards = document.querySelectorAll('.custom_card');

// cards.forEach(element => {
//     element.addEventListener('mouseenter', function () {
//         this.classList.add('card-img-no-black');
//         this.classList.remove('card-img-1');


//     });

//     element.addEventListener('mouseleave', function () {
//         this.classList.add('card-img-1');
//         this.classList.remove('card-img-no-black');


//     });

// });



