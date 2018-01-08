// alert("jQuery is working!");

$("ul").on("click", "li", function () {
	// $(this).css("color", "lightgrey");
	// $(this).css("text-decoration", "line-through");

	$(this).toggleClass("completed");
	$(this).css("font-style", "italic")


});

$("ul").on("click", "span", function() {
	$(this).parent().fadeOut(500, function() {
		$(this).remove;




	});



});

$("input[type='text']").keypress(function(event) {
	/*ascili code*/

	// console.log(event.which);

	if (event.which === 13) {
			var todoText = $(this).val();
			$(this).val("")
			$("ul").append("<li><span>✓</span>" + todoText + "</li>");


	} 


});


