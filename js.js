// you can enter your JS here!

(function ($) {

	/*
		//Starting point of sorting functionality  
	*/
	//setting initial room quantity values to 0 and total price amount to 0.00
	$('.room_quantity select').val(0);
	$('.total_price .amount').html('0.00');

	
	var $additional_details = $('#additional_details');

	//Hide the additional details initially
	$additional_details.hide();
	
	$('tr.one_room').on('change','select', function(e){
		// Getting the elements before fetching the data
		var roomQuantity_obj = $(this).parent(),
			total_price_obj = roomQuantity_obj.siblings('.total_price'),
			room_price_obj = roomQuantity_obj.siblings('.room_price');

		//Getting the required details like number of rooms selected and the room price
		var room_price = room_price_obj.html().split('€')[1],
			total_rooms_selected =  parseInt($(this).val());
		room_price = parseFloat(room_price);

		//limiting the decimal points to 2
		total_price = parseFloat(room_price*total_rooms_selected).toFixed(2);

		//updating the total price cell
		total_price_obj.find('span.amount').html(total_price);

		if(total_rooms_selected > 0){
			total_price_obj.find('span.amount').addClass('roomSelected');
			$(this).addClass('roomSelected');
		}else{
			total_price_obj.find('span.amount').removeClass('roomSelected');
			$(this).removeClass('roomSelected');
			
		}
		//call update Rooms function
		var total_rooms_booked = updateRooms();
		$('#rooms_booked').html(total_rooms_booked);

		//call update total price function
		var total_rooms_price = updateTotalPrice();
		$('#price_summary').html(total_rooms_price);
	});
	
	function updateRooms(){
		var totalRooms = 0;
		$(".room_quantity .roomSelected").each(function(){
			totalRooms += parseInt($(this).val());
		});
		
		if( totalRooms > 0){
			$additional_details.fadeIn();
		} else{
			$additional_details.fadeOut();
		}
		return totalRooms;
	}

	function updateTotalPrice(){
		var totalPrice = 0;
		$(".total_price .roomSelected").each(function(){
			totalPrice = Number(totalPrice) + Number(parseFloat($(this).html()).toFixed(2));
		});
		totalPrice = Number(totalPrice).toFixed(2);
		return totalPrice;
	}
	// Adding sorting feature to Room Occupancy column
	$('.room_occupancy').on('click','a', function(e){
		e.preventDefault();
		$(this).toggleClass('asc');
		var order = $(this).hasClass('asc')?'des':'asc';

		SortData($('.rooms_table'),'.room_occupancy',order);
	});

	// Adding sorting feature to Room Price column
	$('.room_price').on('click','a', function(e){
		e.preventDefault();
		$(this).toggleClass('asc');
		var order = $(this).hasClass('asc')?'des':'asc';

		SortData($('.rooms_table'),'.room_price',order);
	});
	
	//Sorting table function
	function SortData($roomsTable, className, order){
	    var $rows = $('tbody > tr', $roomsTable).not('.unsortable');
	    $rows.sort(function (a, b) {
	    	var row1, row2;
	    	if(className == '.room_price'){
	    		// I am using Number function instead of parseFloat because the return type of this function is string so sorting will result unexpected results
	    		row1 = Number($('td'+className, a).text().split('€')[1]);
	        	row2 = Number($('td'+className, b).text().split('€')[1]);
	    	}else{
	    		row1 = Number($('td'+className, a).text());
	        	row2 = Number($('td'+className, b).text());
	    	}
	        
	        if (order=='asc') {
	            return row1 - row2;
	        } else {
	            return row2 - row1;
	        }
	    });

	    $.each($rows, function (index, row) {
	    	$roomsTable.append(row);
	    });
	}

	/*
		//End point of sorting functionality  
	*/

	//call the pagination functionality
	$(".reviews_list").Pagination();
})(jQuery);