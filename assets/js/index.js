// ^ Write your JavaScript code here

var settingsSidebar = document.getElementById("settings-sidebar")
var closeSettings = document.getElementById("close-settings")
var btnColorPage = document.getElementById("btn-color-page")
var filterButtons = document.querySelectorAll('.portfolio-filter');
var portfolioItems = document.querySelectorAll('.portfolio-item');
var fontSecButtn = document.querySelectorAll('.font-sec-btn');
var changeTheme = document.querySelectorAll('.change-theme');
var resetSettings = document.getElementById("reset-settings");



/* this font wabsit page */ 
 
for (let i = 0; i < fontSecButtn.length; i++) {
    fontSecButtn[i].addEventListener('click', function () {
        
        fontSecButtn.forEach(function (btn) {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
            btn.querySelector('i').classList.remove("d-block")
            btn.querySelector('i').classList.add("d-none")
        });

        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');
        fontSecButtn[i].querySelector('i').classList.replace("d-none","d-block")
        if(fontSecButtn[i] == fontSecButtn[0]) {
            document.querySelector('body').classList.add("font-family-main-Alexandria")
            document.querySelector('body').classList.remove("font-family-main-Tajawal")
            document.querySelector('body').classList.remove("font-family-main-Cairo")
        } else if(fontSecButtn[i] == fontSecButtn[1]) {
            document.querySelector('body').classList.add("font-family-main-Tajawal")
            document.querySelector('body').classList.remove("font-family-main-Alexandria")
            document.querySelector('body').classList.remove("font-family-main-Cairo")
        } else {
            document.querySelector('body').classList.add("font-family-main-Cairo")
            document.querySelector('body').classList.remove("font-family-main-Alexandria")
            document.querySelector('body').classList.remove("font-family-main-Tajawal")
        }


        // fontSecButtn[0].querySelector('body').classList.replace("font-family-main-Tajawal","font-family-main-Alexandria")
        // fontSecButtn[0].querySelector('body').classList.replace("font-family-main-Cairo","font-family-main-Alexandria")
    })
}


/* color page element */
 
for (let i = 0; i < changeTheme.length; i++) {
    changeTheme[i].addEventListener('click', _ => {

        for (let j = 0; j < changeTheme.length; j++) {
            changeTheme[j].classList.remove('outline-color');
        }

        changeTheme[i].classList.add('outline-color');

        if(changeTheme[i] == changeTheme[0]) {
            document.documentElement.style.setProperty('--color-blue-1','#358CF1')
            document.documentElement.style.setProperty('--color-blue-2','#16AED9')
        } else if(changeTheme[i] == changeTheme[1]) {
            document.documentElement.style.setProperty('--color-blue-1','#6A64F2')
            document.documentElement.style.setProperty('--color-blue-2','#835EF5')
        } else if(changeTheme[i] == changeTheme[2]) {
            document.documentElement.style.setProperty('--color-blue-1','#EF527E')
            document.documentElement.style.setProperty('--color-blue-2','#F6683A')
        } else if(changeTheme[i] == changeTheme[3]) {
            document.documentElement.style.setProperty('--color-blue-1','#0DB17B')
            document.documentElement.style.setProperty('--color-blue-2','#079D6E')
        } else if(changeTheme[i] == changeTheme[4]) {
            document.documentElement.style.setProperty('--color-blue-1','#F0434A')
            document.documentElement.style.setProperty('--color-blue-2','#F34058')
        } else if(changeTheme[i] == changeTheme[5]) {
            document.documentElement.style.setProperty('--color-blue-1','#F3900B')
            document.documentElement.style.setProperty('--color-blue-2','#EC670C')
        }
    })
    
}



/* this nav & tabs */
 
filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // 1. اقرا "ليبل" الزرار اللي انا داست عليه
        var selectedFilter = button.dataset.filter; // مثلاً "app"

        filterButtons.forEach(function (btn) {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });

        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');

        // 2. امشي على كل كارت واحد واحد
        portfolioItems.forEach(function (item) {
            var wrapper = item.closest('[class*="col-"]');
            // 3. قارن ليبل الكارت بليبل الزرار
            if (selectedFilter === 'all' || item.dataset.category === selectedFilter) {
                wrapper.style.display = 'block'; // طابقوا؟ اظهر الكارت
            } else {
                wrapper.style.display = 'none';  // متطابقوش؟ اخفي الكارت
            }
        });
    });
});


/* Settings Sidebar btn open\close */
 
settingsSidebar.addEventListener("click",function () {
    settingsSidebar.classList.replace("start-100","end-0");
})
closeSettings.addEventListener("click",function (e) {
    e.stopPropagation();
    settingsSidebar.classList.replace("end-0","start-100");
})


/* btn color page Dark\light */
 
btnColorPage.addEventListener("click" , removeBtnAndUpdate)
var curantindex = true ;
function removeBtnAndUpdate() {
    curantindex = !curantindex
    
    if(curantindex == true) {
        btnColorPage.innerHTML = `
            <div class="bg-main rounded-circle text-center" style="width: 25px;height: 25px;">
                <i class="fas fa-moon bg-brand navbar-brand-text small"></i>
            </div>
        `
        btnColorPage.classList.replace("justify-content-end","justify-content-start")
        bgUpdate()
    }else {
        btnColorPage.innerHTML = `
            <div class="bg-body rounded-circle text-center" style="width: 25px;height: 25px;">
                <i class="fas fa-sun text-warning small"></i>
            </div>
        `
        btnColorPage.classList.replace("justify-content-start","justify-content-end")
        porbgUpdate()
    }
}

function porbgUpdate() {
    document.documentElement.style.setProperty('--bg-main-color','#fff')
    document.documentElement.style.setProperty('--bg-main2-color','#F1F5F9')
    document.documentElement.style.setProperty('--bg--nav-color','#F1F5F9')
    document.documentElement.style.setProperty('--bg-section-color','#E2E8F0')
    document.documentElement.style.setProperty('--bg-alfaCard','#FFF')
    document.documentElement.style.setProperty('--text-white--color','#000')
    document.documentElement.style.setProperty('--text-black--color','#f1f5f9')
    document.documentElement.style.setProperty('--text-whiteAlfa--color','#0000001e')
    document.documentElement.style.setProperty('--bg-blue-light-color','#efefef')
    document.documentElement.style.setProperty('--color-blue-3','#F8FAFC')
    document.getElementById("btn-black-color").classList.replace("btn-outline-light","btn-outline-info")
}
function bgUpdate() {
    document.documentElement.style.removeProperty('--bg-main-color')
    document.documentElement.style.removeProperty('--bg-main2-color')
    document.documentElement.style.removeProperty('--bg--nav-color')
    document.documentElement.style.removeProperty('--bg-section-color')
    document.documentElement.style.removeProperty('--bg-alfaCard')
    document.documentElement.style.removeProperty('--text-white--color')
    document.documentElement.style.removeProperty('--text-black--color')
    document.documentElement.style.removeProperty('--text-whiteAlfa--color')
    document.documentElement.style.removeProperty('--bg-blue-light-color')
    document.documentElement.style.removeProperty('--bg-blue-light')
    document.documentElement.style.removeProperty('--color-blue-3')
    document.getElementById("btn-black-color").classList.replace("btn-outline-info","btn-outline-light")
}



/* color theme Dfu */

resetSettings.addEventListener('click', function () {

    document.querySelector('body').classList.remove("font-family-main-Alexandria");
    document.querySelector('body').classList.remove("font-family-main-Cairo");
    document.querySelector('body').classList.add("font-family-main-Tajawal");

    fontSecButtn.forEach(function (btn) {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
        btn.querySelector('i').classList.remove("d-block");
        btn.querySelector('i').classList.add("d-none");
    });
    fontSecButtn[1].classList.add('active');
    fontSecButtn[1].setAttribute('aria-pressed', 'true');
    fontSecButtn[1].querySelector('i').classList.replace("d-none", "d-block");

    changeTheme.forEach(function (circle) {
        circle.classList.remove('outline-color');
    });

    changeTheme[0].classList.add('outline-color');
    document.documentElement.style.setProperty('--color-blue-1', '#358CF1');
    document.documentElement.style.setProperty('--color-blue-2', '#16AED9');
});