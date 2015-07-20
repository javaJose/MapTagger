

    function getImages(item, element) {
        $.ajax({
            url: "https://s3.amazonaws.com/intern-coding-challenge/counts.json" + ".json",
            type: "GET",
            crossDomain: true,
            dataType: "jsonp",
            async: true,
            success: function(dataBack) {
                console.log(dataBack);
                $(element).append("<h3>I have taken " + dataBack.images.length +  <div class=\"thumbnail\"></div>");
                var image = dataBack.image;
                image.forEach(function(image, i) {
                    if (i < 7) {
                        element.find(".image").append("<li class=\"Images\"> <img src=' " + image.image + " '/></li>");
                    }
                });
            },
            error: function(dataBack) {
                console.log("Four Oh Four");

            }
        });
    }

