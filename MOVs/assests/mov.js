$(document).ready(
    function() {
        $("#infoButton").click(
            function() {
                $("#infomationPopup").fadeToggle(500);
            }
        )
        $("#descriptionButton").click(
            function() {
                $("#descriptionPopup").fadeToggle(500);
            }
        )
        $("#directorButton").click(
            function() {
                $("#directorPopup").fadeToggle(500);
            }
        )
        $("#downloadButton").click(
            function() {
                $("#downloadPopup").fadeToggle(500);
            }
        )
        $("#playButton").click(
            function() {
                $("#movShowing").fadeIn(800);
            }
        )
        $("#closeButton").click(
            function() {
                $("#movShowing").fadeOut(400);
            }
        )
});