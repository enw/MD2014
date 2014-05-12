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

    // show second image eventually
    setTimeout(getShowImageFxn(1), TIMEOUT_MS);
  })
