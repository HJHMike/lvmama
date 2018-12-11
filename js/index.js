window.addEventListener('load', function() {
    new Swiper('.swiper-container', {
        // 方向 水平
        direction: 'horizontal',
        loop: true,
        // 小圆点
        pagination: {
            el: '.swiper-pagination',
        },
        // autoplay: true, //等同于以下设置
        autoplay: {
            delay: 1000,
            stopOnLastSlide: true,
            disableOnInteraction: false,
        }
    });
})