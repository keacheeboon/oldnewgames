function Make_NavBarMe_Active() {
	var body_myid = $("body").attr("myid");
	if (body_myid !== null) {
		$("#top-navto-" + body_myid).addClass("active");
	}
}

$(document).ready(function () {
    $.get("./inc/top-bar.html", function (html) {
    	$("#root").prepend(html);
			Make_NavBarMe_Active();
			$("#site-search-button").click(function() {
				alert("Sorry, this function is not available yet.");
			});
    });
    $.get("./inc/bottom-bar.html", function (html) {
    	$("#root").append(html);
		});
});
