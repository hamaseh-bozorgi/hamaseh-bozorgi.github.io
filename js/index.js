$(document).ready(function () {
    $(".list-gp").click(function () {
        $(".modal-container-sm").removeClass("hidden");
    })
    $(".close-modal-sm").click(function () {
        $(".modal-container-sm").addClass("hidden");
    })
    $(".mobile-click").click(function () {
        $(".mobile-sub-menu-sm").toggleClass("custom-height");
        $(".laptop-sub-menu-sm").addClass("custom-height");
    })
    $(".laptop-click").click(function () {
        $(".laptop-sub-menu-sm").toggleClass("custom-height");
        $(".mobile-sub-menu-sm").addClass("custom-height");
    })

    $($(".mobile-titles")[0]).mouseenter(function () {
        $(".w-h").addClass("hidden");
        $(".Accessories").addClass("hidden");
        $(".phones").removeClass("hidden");
    })
    $($(".mobile-titles")[1]).mouseenter(function () {
        $(".phones").addClass("hidden");
        $(".Accessories").addClass("hidden");
        $(".w-h").removeClass("hidden");
    })
    $($(".mobile-titles")[2]).mouseenter(function () {
        $(".phones").addClass("hidden");
        $(".w-h").addClass("hidden");
        $(".Accessories").removeClass("hidden");
    })


    let activeImage = 0;
    let img = document.querySelector(".slider-image");
    let sliderRight = function () {
        activeImage++;
        if (activeImage == 6) {
            activeImage = 0;
        }
        let imgWidth = img.clientWidth;
        img.style.marginLeft = `-${activeImage * imgWidth}px`;
    }
    setInterval(sliderRight, 3000);
    let sliderLeft = function () {
        activeImage--;
        if (activeImage == -1) {
            activeImage = 5;
        }
        let imgWidth = img.clientWidth;
        img.style.marginLeft = `-${activeImage * imgWidth}px`;
    }
    $(".right-btn").click(sliderRight);
    $(".left-btn").click(sliderLeft);


    $($(".footer-titles")[0]).click(function () {
        $(".footer-sub-1").toggleClass("custom-height");
    })
    $($(".footer-titles")[1]).click(function () {
        $(".footer-sub-2").toggleClass("custom-height");
    })
    $($(".footer-titles")[2]).click(function () {
        $(".footer-sub-3").toggleClass("custom-height");
    })

    activeSlider = 0;
    let sliderContainer = document.querySelector(".slider-2-container");
    let slider2Right = function () {
        let sliderWidth = sliderContainer.clientWidth;
        sliderContainer.style.marginLeft = `-${sliderWidth +25}px`;
        $(".right").addClass("invisible");
    }
    let slider2Left = function () {
        let sliderWidth = sliderContainer.clientWidth;
        sliderContainer.style.marginLeft = `-${sliderWidth +20}px`;
        $(".left").removeClass("invisible");
    }

    $(".right").click(slider2Right);
    $(".left").click(slider2Left);




});