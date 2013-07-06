// <div id="achievementsContainer">
// 	<a href="achievement" class="achievement" >
// 		<div class="background"></div>
// 		<img src="img/default.png" class="default" alt="" height="58" width="58" />
// 		<img src="img/xbox.png" class="xbox" alt="" height="58" width="58" />
// 		<img src="img/trophy.png" class="trophy" alt="" height="58" width="58" />
// 		<span class="title">Achievement unlocked</span>
// 		<span class="message">40G - working achievement</span>
// 	</a>
// </div>


function achievement (message, points) {
	var body = $('body');
	body.append('<div id="achievementsContainer"></div>');
	var achCont = $('#achievementsContainer');

	achCont.append('<a href="achievement" class="achievement" >	<div class="background"></div>	<img src="img/default.png" class="default" alt="" height="58" width="58" />	<img src="img/xbox.png" class="xbox" alt="" height="58" width="58" />	<img src="img/trophy.png" class="trophy" alt="" height="58" width="58" />	<span class="title">Achievement unlocked</span>	<span class="message">' + points + 'G - ' + message + '</span></a>');
}(jQuery);

function makeANewAchievement () {
	achievement($('[name="message"]').val(), $('[name="points"]').val());
}