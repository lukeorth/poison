const tabs = document.querySelectorAll(".tab")
  
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const tablist = tab.parentElement.children
        for (let i = 0; i < tablist.length; i++) {
            if (tablist[i].id == e.target.id) {
                tablist[i].className += " active";
            }
            else {
                tablist[i].className = tabs[i].className.replace(" active", "");
            }
        }
        const container = tab.parentElement.parentElement.children
        for (let i = 1; i < container.length; i++) {
            if (container[i].classList.contains(e.target.id)) {
                container[i].style.display = "block";
            }
            else {
                container[i].style.display = "none";
            }
        }
    })
})
