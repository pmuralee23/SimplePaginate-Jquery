(function ($) {

    $.fn.Pagination = function (options) {

        var defaults = {
            numOfReviewsPerPage: 5,
            curObj: this,
            currentPage: 1,
            controlsContainer: '#page_controls',
            gotoPage:1
        };
        var options = $.extend(defaults, options);

        options.reviews = $(this).children();
        options.numOfPages = (function(){
            var numPages = 0;
            if (options.reviews != null && options.numOfReviewsPerPage != null) {
                numPages = Math.ceil(options.reviews.length / options.numOfReviewsPerPage);
            }
           
          return numPages;
        }());

        options.renderControls = function(){
            var pagingControls = 'Page: <ul>';
            for (var i = 1; i <= options.numOfPages; i++) {
                pagingControls += '<li><a href="#" id="page' + i + '">' + i + '</a></li>';
            }
   
            pagingControls += '</ul>';
            $(options.controlsContainer).empty().append(pagingControls);
        };

        options.showPage = function(page) {
            options.currentPage = page;
            var html = '',
                $page = $('#page'+page);
            options.reviews.slice((page-1) * options.numOfReviewsPerPage,
                  ((page-1)*options.numOfReviewsPerPage) + options.numOfReviewsPerPage).each(function(index,val) {
                  html += '<li class="one_review">' + $(this).html() + '</li>';
            });
            $page.addClass('selected');
            $page.parent().siblings().find('a').removeClass('selected');
            $(options.curObj).empty().append(html);
        }

        options.sortReviews = function(sortOrder){
            options.reviews.sort(function (r1, r2) {
                var review1, review2;
                review1 = $('.review_score',r1).html();
                review2 = $('.review_score',r2).html();

                if (sortOrder=='low-to-high') {
                    return review1 - review2;
                } else {
                    return review2 - review1;
                }
            });
        options.showPage(1);
        };
        options.init = function() {
            options.renderControls();
            options.showPage(options.gotoPage);
        };
        options.init();

        options.showPage(options.gotoPage);
        //After the pagination setup is completed, attach event handlers to 
        $("#page_controls li").each(function (index,val) {
            $("#page"+(index+1)).click(function (e) {
                e.preventDefault();
                var gotoPage = $(this).attr('id');
                var pageNum = gotoPage.split('page')[1];
                options.showPage(pageNum);
            });
        });

        $('.sort a').click(function(e){
            e.preventDefault();
            var sortOrder = $(this).attr('id');
            options.sortReviews(sortOrder);
            $(this).addClass('selected');
            $(this).parent().siblings().find('a').removeClass('selected');
        });

        
    }
})(jQuery);