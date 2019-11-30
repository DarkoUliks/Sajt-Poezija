jQuery(document).ready(function ($) {

	$(`.meni`).on("click", function () {
		$(`.pod`).toggleClass(`boo`);
	})

})


jQuery(document).ready(function ($) {
	var slider = $("#slider");
	var current = 1;
	var loop = setInterval(next, 8000);

	function next() {
		current++;
		if (current === 5) {
			current = 1;
		};
		slider.append(`<img src="imagess/` + current + `.jpg"></img>`);
		slider.animate({
			marginLeft: "-=972"
		}, 1000)
	}
})


jQuery(document).ready(function ($) {
	var sliderr = $("#sliderr");
	var current = 1;
	var loop = setInterval(next, 8000);

	function next() {
		current++;
		if (current === 5) {
			current = 1;
		};
		sliderr.append(`<img src="imagess/` + current + `.jpg"></img>`);
		sliderr.animate({
			marginLeft: "-=987"
		}, 1000)
	}
})










