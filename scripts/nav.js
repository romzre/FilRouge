let btn_menu = document.getElementById("check_menu");
let menu = document.querySelector('nav');

btn_menu.addEventListener('change', function() {
    if (this.checked){
        menu.classList.remove('desactive');
        menu.classList.add('active');
    } else{
        menu.classList.remove('active');
        menu.classList.add('desactive');

    }
})