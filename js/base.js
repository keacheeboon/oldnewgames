var onGetHtmlForTopBar = function(html) {
	$("#root").prepend(html);
	var body_myid = $("body").attr("myid");
	if (body_myid !== null) {
		$("#top-navto-" + body_myid).addClass("active");
	}
};

var onGetHtmlForBottomBar = function(html) {
	$("#root").append(html);
};

$(document).ready(function () {
    $.get("../inc/top-bar.html", onGetHtmlForTopBar);
    $.get("../inc/bottom-bar.html", onGetHtmlForBottomBar);
});
