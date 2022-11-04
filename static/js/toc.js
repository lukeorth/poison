(function() {
    var $toc = $('#TableOfContents');
    if ($toc.length > 0) {
        var $window = $(window);

        function onScroll(){
            var currentScroll = $window.scrollTop();
            var h = $('.article-entry h1, .article-entry h2, .article-entry h3, .article-entry h4, .article-entry h5, .article-entry h6');
            var id = "";
            h.each(function (i, e) {
                e = $(e);
                if (e.offset().top - 10 <= currentScroll) {
                    id = e.attr('id');
                }
            });
            var active = $toc.find('a.active');
            if (active.length == 1 && active.eq(0).attr('href') == '#' + id) return true;
    
            active.each(function (i, e) {
                $(e).removeClass('active').siblings('ul').hide();
            });
            $toc.find('a[href="#' + id + '"]').parentsUntil('#TableOfContents').each(function (i, e) {
                $(e).children('a').addClass('active').siblings('ul').show();
            });
        }

        $window.on('scroll', onScroll);
        $(document).ready(function() {
            $toc.find('a').parent('li').find('ul').hide();
            onScroll();
            document.getElementsByClassName('article-toc')[0].style.display = '';
        });
    }
})();
