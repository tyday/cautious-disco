menu = document.getElementById('menu-small')
menu.addEventListener("click", function(){
    const panel = menu.nextElementSibling;
    if (panel.classList.contains('display-none-toggle')) {
        panel.classList.remove('display-none-toggle');
      } else {
        panel.classList.add('display-none-toggle');
      }
})