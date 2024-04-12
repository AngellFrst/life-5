const tabsBtn = document.querySelectorAll(".chat-1");
const tabsItems = document.querySelectorAll(".right");

tabsBtn.forEach(function(item) {
item.addEventListener("click", function() {
    let curentBtn = item;
    let tabId = curentBtn.getAttribute("data-tab");
    let carrentTab = document.querySelector(tabId);


    tabsBtn.forEach(function(item){
        item.classList.remove('active');
    });

    tabsItems.forEach(function(item){
        item.classList.remove('active');
    });

    curentBtn.classList.add('active');
    carrentTab.classList.add('active');
});

});