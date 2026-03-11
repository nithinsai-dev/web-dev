
$(".animate-1-btn").click(function () {
    var div = $(".animate-1-div");
    div.animate({ height: '300px', opacity: '0.4' }, "slow");
    div.animate({ width: '300px', opacity: '0.8' }, "slow");
    div.animate({ height: '100px', opacity: '0.4' }, "slow");
    div.animate({ width: '100px', opacity: '0.8' }, "slow");
});

$(".animate-2-btn").on("click", function () {
    $("h1").animate({ opacity: 0.5 }, 700).slideUp().slideDown().animate({ opacity: 1 }, 700)
})

