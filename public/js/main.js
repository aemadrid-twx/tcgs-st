// Burger menus
const manageBurgerMenus = function () {
    // open
    const burger = document.querySelectorAll(".navbar-burger")
    const menu = document.querySelectorAll(".navbar-menu")

    if (burger.length && menu.length) {
        for (var i0 = 0; i0 < burger.length; i0++) {
            burger[i0].addEventListener("click", function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle("hidden")
                }
            })
        }
    }

    // close                                                                   s
    const close = document.querySelectorAll(".navbar-close")
    const backdrop = document.querySelectorAll(".navbar-backdrop")

    if (close.length) {
        for (var i1 = 0; i1 < close.length; i1++) {
            close[i1].addEventListener("click", function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle("hidden")
                }
            })
        }
    }
    if (backdrop.length) {
        for (var i2 = 0; i2 < backdrop.length; i2++) {
            backdrop[i2].addEventListener("click", function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle("hidden")
                }
            })
        }
    }
}

// DOW Hours
const updateHoursClasses = function () {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
    let dowi = new Date().getDay()
    let dows = days[dowi]
    // change left col
    const title = document.querySelectorAll("div.h-" + dows + "-l")
    if (title.length) {
        title[0].classList.remove("bg-gray-500/25")
        title[0].classList.add("bg-chestnut-500/25")
    }
    // change right col
    const description = document.querySelectorAll("div.h-" + dows + "-r")
    if (description.length) {
        description[0].classList.add("bg-chestnut-200/25", "rounded-lg")
    }
}

document.addEventListener("DOMContentLoaded", function () {
    manageBurgerMenus()
    updateHoursClasses()
})
