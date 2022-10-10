const togle = document.querySelector(".togle-btn");
const menu_list = document.querySelector(".menu-list")
console.log(togle);
console.log(menu_list);
togle.addEventListener("click",()=>{
    menu_list.classList.add("is-show");
    console.log("clicked")
})

window.addEventListener('click', function(e){   
    if (!menu_list.contains(e.target) && !e.target.matches(".togle-btn")){
        menu_list.classList.remove("is-show");
    }
  });