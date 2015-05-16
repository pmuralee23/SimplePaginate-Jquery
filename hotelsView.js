(function ($) {

	//static temporary data with very basic attributes
	var theData = {
    "hotels": [
        {
            "discount": 10,
            "imagePath": "img/3_thumb.jpg",
            "hotelName": "B&B My place",
            "altText": "Great Hotel to stay",
            "description": {
                "title": "<b>Reservation possible without a credit card.</b>",
                "info": " Latest booking: 23 hours ago"
            },
            "review": {
                "comment": "Superb",
                "rating": 9.2,
                "totalReviews":14
            },
            "landmarks": [
                "Museum for Modern Art (290m)", "Cathedral of St Bartholomew Dom St Bartholomaus (300m)", "Zeil (300m)"
            ]
        },
        {
            "discount": null,
            "imagePath": "img/4_thumb.jpg",
            "hotelName": "Jumeirah Frankfurt",
            "altText": "Great Hotel to stay",
            "description": {
                "title": "",
                "info": "There are 5 people looking at this hotel."
            },
            "review": {
                "comment": "Superb",
                "rating": 9.1,
                "totalReviews": 1069
            },
            "landmarks": [
                "Hauptwache (220m)", "Zeil (240m)", "Alte Nikolaikirche (330m)"
            ]
        },
        {
            "discount": null,
            "imagePath": "img/5_thumb.jpg",
            "hotelName": "Holiday Inn Frankfurt - Alte Oper",
            "altText": "Great Hotel to stay",
            "description": {
                "title": "<b>Popular now!</b>",
                "info": "There are 9 people looking at this hotel."
            },
            "review": {
                "comment": "Fabulous",
                "rating": 8.9,
                "totalReviews": 90
            },
            "landmarks": [
                "Main Tower (470m)", "Old Opera (630m)", "Commerzbank Tower (630m)"
            ]
        },
        {
            "discount": 23,
            "imagePath": "img/6_thumb.jpg",
            "hotelName": "Rocco Forte Villa Kennedy",
            "altText": "Great Hotel to stay",
            "description": {
                "title": "",
                "info": "There are 3 people looking at this hotel. "
            },
            "review": {
                "comment": "Superb",
                "rating": 9.0,
                "totalReviews": 223
            },
            "landmarks": [
                "Commerzbank Tower (1.5km)", "Römerberg (1.6km)", "Goethe Home & Museum (1.7km)"
            ]
        },
        {
            "discount": 15,
            "imagePath": "img/7_thumb.jpg",
            "hotelName": "Hotel Villa Florentina",
            "altText": "Great Hotel to stay",
            "description": {
                "title": "<b>Popular now!</b>",
                "info": "There are 9 people looking at this hotel."
            },
            "review": {
                "comment": "Fabulous",
                "rating": 8.8,
                "totalReviews": 377
            },
            "landmarks": [
                "Messeturm (670m)", "Main Tower (670m)", "Fair Frankfurt (750m)"
            ]
        }
    ]
};

	var theTemplateScript = $("#hotelListTemplate").html();
	var theTemplate = Handlebars.compile (theTemplateScript);
	$('#hotels').append (theTemplate (theData));
})(jQuery);