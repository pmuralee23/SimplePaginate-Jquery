(function ($) {

	// var photosArr = [];
	// $('.one_photo img').each(function(index, val){
	// 	photosArr.push($(this).attr('src'));	
	// });

	var photoContainer = $('#photo_container img'),
		captionContainer = $('#imgCaption'),
		$one_photo = $('.one_photo'),
		$controls = $('.controls');
	$one_photo.first().addClass('selectedImg');
	var $selectedImg;
	//attach click event handler to each thumbnail image
	$one_photo.on('click', 'a', function(e){
		e.preventDefault();
		$(this).parent().siblings().removeClass('selectedImg');
		$(this).parent().addClass('selectedImg');
		
		UpdateImage();
	});

	//Attach click events to arrow controls
	$controls.on('click', function(e){
		e.preventDefault();
		var id = $(this).attr('id');
		$selectedImg = $('.selectedImg');

		if( id == 'prev'){
			showPrevImage($selectedImg);
		}else if( id == 'next'){
			showNextImage($selectedImg);
		}
		
	});
	function showPrevImage($selectedImg){
		$selectedImg.removeClass('selectedImg');
		if($selectedImg.prev().length == 0){
			$('.one_photo').last().addClass('selectedImg');
		} else{
			$selectedImg.prev().addClass('selectedImg');
		}
		UpdateImage();
	}

	function showNextImage($selectedImg){
		$selectedImg.removeClass('selectedImg');
		if($selectedImg.next().length == 0){
				$('.one_photo').first().addClass('selectedImg');
			} else{
				$selectedImg.next().addClass('selectedImg');
			}
			// console.log($selectedImg);
			UpdateImage();
	}
	function UpdateImage(){
		var $img = $('.selectedImg').find('img');
		var imgPath = $img.attr('src'),
			altText = $img.attr('alt');
		imgPath = imgPath.replace('thumb', 'large');
		$(photoContainer).attr('src',imgPath);
		photoContainer.attr('alt',altText);
		captionContainer.empty().append(altText);

		stopSlider();
		interval = setTimer();
	}
	$('#photo_wrapper').hover(
		function(){
			$controls.fadeIn();
		},
		function(){
			$controls.fadeOut();
		}
	);

	function setTimer(){
	    i = setInterval(function(){
				$selectedImg = $('.selectedImg');
				showNextImage($selectedImg);
			},2500);
	    return i;
	}
	function stopSlider() {
	    clearInterval(interval);
	}
	var interval = setTimer();

})(jQuery);