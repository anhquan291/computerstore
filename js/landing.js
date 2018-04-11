
$(document).ready(function(){

		
	$('img[src="img/help.png"]').mouseover(function(){

		$('#' + getDivID(this)).fadeIn(500);
		$(this).css('cursor','pointer'); // chuột thành bàn tay

	}).mouseout(function(){

		$('#'+ getDivID(this)).fadeOut(500);
	});
});

function getDivID(helpIcon){ //truyền vào của một phần tử helpIcon
		return $(helpIcon).attr('id').replace('img','div'); //trả về ID của helpIcon.
	} 