const tabsBtn = document.querySelectorAll(".btn__team");
const tabsItems = document.querySelectorAll(".s2");

tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
       let carrentBtn = item;
       let tabId = carrentBtn.getAttribute("data-tab");
       let carrentTab = document.querySelector(tabId);
       
       tabsBtn.forEach(function(item) {
        item.classList.remove('active');
       })

       tabsItems.forEach(function(item) {
        item.classList.remove('active');
       })


       carrentBtn.classList.add('active');
       carrentTab.classList.add('active');
    });
});








function readMore() {
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let btn = document.getElementById("btn__dalee");
    
    
    if(dots.style.display === "none") {
        dots.style.display="inline";
        btn.innerHTML="Подробнее";
        more.style.display="none";
    } else {
        dots.style.display="none";
        btn.innerHTML="Скрыть";
        more.style.display="inline";
    }
}

function readMoreTwo() {
    let dotsTwo = document.getElementById("dots_2");
    let moreTwo = document.getElementById("more_2");
    let btnTwo = document.getElementById("btn__dalee_2");
   
    
    if(dotsTwo.style.display === "none") {
        dotsTwo.style.display="inline";
        btnTwo.innerHTML="Подробнее";
        moreTwo.style.display="none";
    } else {
        dotsTwo.style.display="none";
        btnTwo.innerHTML="Скрыть";
        moreTwo.style.display="inline";
    }
}

function readMoreThree() {
    let dotsThree = document.getElementById("dots_3");
    let moreThree = document.getElementById("more_3");
    let btnThree = document.getElementById("btn__dalee_3");
    
    if(dotsThree.style.display === "none") {
        dotsThree.style.display="inline";
        btnThree.innerHTML="Подробнее";
        moreThree.style.display="none";
    } else {
        dotsThree.style.display="none";
        btnThree.innerHTML="Скрыть";
        moreThree.style.display="inline";
    }
}

// первый таб

// второй таб

function readMore_2_1() {
    let dotsTab21 = document.getElementById("dots_2_1");
    let more21 = document.getElementById("more_2_1");
    let btn21 = document.getElementById("btn__dalee_2_1");
    
    if(dotsTab21.style.display === "none") {
        dotsTab21.style.display="inline";
        btn21.innerHTML="Подробнее";
        more21.style.display="none";
    } else {
        dotsTab21.style.display="none";
        btn21.innerHTML="Скрыть";
        more21.style.display="inline";
    }
}


function readMore_2_2() {
    let dotsTab22 = document.getElementById("dots_2_2");
    let more22 = document.getElementById("more_2_2");
    let btn22 = document.getElementById("btn__dalee_2_2");
    
    if(dotsTab22.style.display === "none") {
        dotsTab22.style.display="inline";
        btn22.innerHTML="Подробнее";
        more22.style.display="none";
    } else {
        dotsTab22.style.display="none";
        btn22.innerHTML="Скрыть";
        more22.style.display="inline";
    }
}


function readMore_2_3() {
    let dotsTab23 = document.getElementById("dots_2_3");
    let more23 = document.getElementById("more_2_3");
    let btn23 = document.getElementById("btn__dalee_2_3");
    
    if(dotsTab23.style.display === "none") {
        dotsTab23.style.display="inline";
        btn23.innerHTML="Подробнее";
        more23.style.display="none";
    } else {
        dotsTab23.style.display="none";
        btn23.innerHTML="Скрыть";
        more23.style.display="inline";
    }
}


// третий таб

function readMore_3_1() {
    let dotsTab31 = document.getElementById("dots_3_1");
    let more32 = document.getElementById("more_3_1");
    let btn33 = document.getElementById("btn__dalee_3_1");
    
    if(dotsTab31.style.display === "none") {
        dotsTab31.style.display="inline";
        btn33.innerHTML="Подробнее";
        more32.style.display="none";
    } else {
        dotsTab31.style.display="none";
        btn33.innerHTML="Скрыть";
        more32.style.display="inline";
    }
}


function readMoreTreti() {
    let dotsTabTreti = document.getElementById("dotsTreti");
    let moreTreti = document.getElementById("moreTreti");
    let btnTreti = document.getElementById("btn__daleeTreti");
    
    if(dotsTabTreti.style.display === "none") {
        dotsTabTreti.style.display="inline";
        btnTreti.innerHTML="Подробнее";
        moreTreti.style.display="none";
    } else {
        dotsTabTreti.style.display="none";
        btnTreti.innerHTML="Скрыть";
        moreTreti.style.display="inline";
    }
}



function readMorePosled() {
    let dotsTabPosled = document.getElementById("dotsPosled");
    let morePosled = document.getElementById("morePosled");
    let btnPosled = document.getElementById("btn__daleePosled");
    
    if(dotsTabPosled.style.display === "none") {
        dotsTabPosled.style.display="inline";
        btnPosled.innerHTML="Подробнее";
        morePosled.style.display="none";
    } else {
        dotsTabPosled.style.display="none";
        btnPosled.innerHTML="Скрыть";
        morePosled.style.display="inline";
    }
}




function like() {
    let likee = document.getElementById("like");
    if (likee.src.endsWith("img/like-2.png")) {
        likee.src = "img/like.png"; 
    } else {
        likee.src = "img/like-2.png"; 
    }
}



function like2() {
    let like2 = document.getElementById("like2");
    if (like2.src.endsWith("img/like-2.png")) {
        like2.src = "img/like.png"; 
    } else {
        like2.src = "img/like-2.png"; 
    }
}


function like3() {
    let like3 = document.getElementById("like3");
    if (like3.src.endsWith("img/like-2.png")) {
        like3.src = "img/like.png"; 
    } else {
        like3.src = "img/like-2.png"; 
    }
}

function like4() {
    let like4 = document.getElementById("like4");
    if (like4.src.endsWith("img/like-2.png")) {
        like4.src = "img/like.png"; 
    } else {
        like4.src = "img/like-2.png"; 
    }
}


function like5() {
    let like5 = document.getElementById("like5");
    if (like5.src.endsWith("img/like-2.png")) {
        like5.src = "img/like.png"; 
    } else {
        like5.src = "img/like-2.png"; 
    }
}

function like6() {
    let like6 = document.getElementById("like6");
    if (like6.src.endsWith("img/like-2.png")) {
        like6.src = "img/like.png"; 
    } else {
        like6.src = "img/like-2.png"; 
    }
}

function like7() {
    let like7 = document.getElementById("like7");
    if (like7.src.endsWith("img/like-2.png")) {
        like7.src = "img/like.png"; 
    } else {
        like7.src = "img/like-2.png"; 
    }
}

function like8() {
    let like8 = document.getElementById("like8");
    if (like8.src.endsWith("img/like-2.png")) {
        like8.src = "img/like.png"; 
    } else {
        like8.src = "img/like-2.png"; 
    }
}

function like9() {
    let like9 = document.getElementById("like9");
    if (like9.src.endsWith("img/like-2.png")) {
        like9.src = "img/like.png"; 
    } else {
        like9.src = "img/like-2.png"; 
    }
}

