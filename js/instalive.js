/**
 *  insta-gallery.js - jQuery instagram gallery v1.0.0
 *  Copyright 2016 http://shuvojitdas.com
 *  Contributing Author: Shuvojit Das
 *
 */
;
(function($) {

    $.fn.instaGallery = function(options) {

        // Defaults
        var settings = $.extend({
            userId: '',
            accessToken: '',
            limit: 12,
            sortBy: 'random',
            resolution: 'medium', // low, medium, high
        }, options);



        return this.each(function() {
            var el = $(this),
                instaContainer = el.attr('id'),
                url = 'https://api.instagram.com/v1/users/' + settings.userId + '/media/recent?access_token=' + settings.accessToken + '&count=' + settings.limit + '';


            $.ajax({
                type: 'GET',
                url: url,
                async: false,
                contentType: "application/json",
                dataType: 'jsonp',
                success: function(json) {
                    var data = json.data || [];

                    var skeleton = "";
                    skeleton += '<ul>';
                    for (var i = 0; i < data.length; ++i) {
                        thisdata = data[i];


                        // image url
                        var imageURL = thisdata.images.thumbnail.url; //low/default
                        var imageSize = 150;
                        if (settings.resolution == 'medium') {
                            imageURL = imageURL.replace('s150x150', 's320x320');
                            imageSize = 320;
                        } else if (settings.resolution == 'high') {
                            imageURL = imageURL.replace('s150x150', 's640x640');
                            imageSize = 640;
                        };

                        var imgTag = '<img src="' + imageURL + '" width="' + imageSize + '" height="' + imageSize + '"/>';

                        var link = thisdata.link;
                        var likes = thisdata.likes.count;
                        var comments = thisdata.comments.count;

                        var instaOverlay = '<div class="instaOverlay"><div class="instaOverlay-inner"><span>' + likes + ' <i class="fa fa-heart"></i><br>' + comments + ' <i class="fa fa-comment"></i></span></div></div>';
                        var item = '<a href="' + link + '" target="_blank">' + imgTag + instaOverlay + '</a>';
                        skeleton += '<li>' + item + '</li>';
                    }

                    skeleton += '</ul>';

                    el.append(skeleton);

                }, // success function end


                error: function(xhr, status, error) {
                    el.append('<div class="error"><p>No Result! Or Error Loading Instagram Feed</p></div');

                },


                complete: function() {

                }

            });
        });
    };

})(jQuery);