var $win = $(window);
var $aboutWork = $('.about-work');
var $workDesc = $('.work-desc');

$win.on('scroll', function(){
    var scrollPos = $win.scrollTop();
    if(scrollPos < 350) {
        $aboutWork.css('margin-top',scrollPos/2)
    }
});

$win.on('resize', function(){
    var height=$aboutWork.outerHeight();
    $workDesc.css('min-height',height);
});