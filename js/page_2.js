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