
function deptSearch(){
	checkMenu("deptSearch");

	$('#myFrame').attr('src', "PeopleManagement/dept/deptList.html");
}

function addPeoplePage(){
	checkMenu("addPeople");
	$('#myFrame').attr('src', "PeopleManagement/people/addPeople.html");
}

function showPeople(){
	checkMenu("showPeople");
	$('#myFrame').attr('src', "PeopleManagement/people/peopleList.html");
}

function regCheck(){
	checkMenu("regCheck");
	$('#myFrame').attr('src', "PeopleManagement/people/regCheck.html");
}

function meetingSearch(){
	checkMenu("meetingSearch");

	$('#myFrame').attr('src', "MeetingRoom/findRoom.html");
}

function reserveMeetingPage(loginUserId){
	checkMenu("reserveMeetingPage");

	$('#myFrame').attr('src', "MeetingRoom/reserve.html?loginUserId="+loginUserId);
}

function addMeeting(){
	checkMenu("addmeeting");

	$('#myFrame').attr('src', "MeetingRoom/meet/checkmeet.html");
}

function showMeetingRoom(){
	checkMenu("showmeetingroom");

	$('#myFrame').attr('src', "MeetingRoom/meet/meeting.html");
}

function meetSearch(){
	checkMenu("meetSearch");

	$('#myFrame').attr('src', "person/meetList.html");
}

function meetRer(loginUserId){
	checkMenu("meetRer");

	$('#myFrame').attr('src', "person/meetRer.html?loginUserId="+loginUserId);
}

function meetNotice(){
	checkMenu("meetNotice");

	$('#myFrame').attr('src', "person/meetNotice.html");
}

function showStatistics(){
	checkMenu("showStatistics")

	$('#myFrame').attr('src', "Statistics/navStatistics.html");
}

function adjust(){
	checkMenu("adjustment");
	$('#myFrame').attr('src', "Settings/adjust.html");
}

function aboutus(){
	checkMenu("aboutus");
	$('#myFrame').attr('src', "Settings/aboutus.html");
}

function gohome(){
	checkMenu("");
	$('#myFrame').attr('src', "../index.html");
}
function logout(){
	loginUser = null;
	window.location.href="login.html";
}

function changePwd(){

	$('#myFrame').attr('src', "changePwd.html")

}

function Index(){
	$('#myFrame').attr('src', "index.html");
}

function test1(){
	checkAMenu("test1");
}


function checkMenu(menuA){

	var subactive = $(".sub-menu>li>a.subactive");

	if(subactive.text()!=$("#"+menuA).text()){
		$(subactive).parent().css("background","#FFFFFF");
		$(subactive).css("color","#586575");
		$(subactive).removeClass("subactive");
		$("#"+menuA).attr("class","subactive");
		$("#"+menuA).css("color","#1B6DE8");
		$(menuA).parent().css("background","#FFFFFF");
		$(menuA).parent().css("textcolor","#2885e2");
	}
}

function checkAMenu(menuA){
	var active = $(".menu>li>a.subactive");

	if(active.text()!=$("#"+menuA).text()){
		$(active).parent().css("background","#FFFFFF");
		$(active).css("color","#586575");
		$(active).removeClass("subactive");
		$("#"+menuA).attr("class","subactive");
		$("#"+menuA).css("color","#1B6DE8");
		$(menuA).parent().css("background","#FFFFFF");

	}
}


