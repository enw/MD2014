$(function ($) {
    // timeout ms
    var TIMEOUT_MS = 10 * 1000; // 10 sec

    // images to show
    var imageArr = [
        "url('/img/MD2014_0.png')",
        "url('/img/MD2014_1.png')"
    ];

    // function generator to show a specific image
    function getShowImageFxn(num) {
        return function () {
            $("body").css("background-image", imageArr[num])
        };
    }

    // reset
    function reset() {
        getShowImageFxn(0)();
        setTimeout(getShowImageFxn(1), TIMEOUT_MS);
    }

    // show second image eventually
    reset();

    // click goes back to first image
    $('body').on('click',reset);
  })
