
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

function reserveMeetingPage(){
	checkMenu("reserveMeetingPage");

	$('#myFrame').attr('src', "MeetingRoom/reserve.html");
}

function addMeeting(){
	checkMenu("addmeeting");

	$('#myFrame').attr('src', "MeetingRoom/meet/addMeet.html");
}

function showMeetingRoom(){
	checkMenu("showmeetingroom");

	$('#myFrame').attr('src', "MeetingRoom/meet/meeting.html");
}


function deptSearch(){
	checkMenu("deptSearch");

	$('#myFrame').attr('src', "deptList.html");
}

function meetSearch(){
	checkMenu("meetSearch");

	$('#myFrame').attr('src', "person/meetList.html");
}

function meetRer(){
	checkMenu("meetRer");

	$('#myFrame').attr('src', "person/meetRer.html");
}

function meetNotice(){
	checkMenu("meetNotice");

	$('#myFrame').attr('src', "person/meetNotice.html");
}



function checkMenu(menuA){

	var subactive = $(".sub-menu>li>a.subactive");

	if(subactive.text()!=$("#"+menuA).text()){
		$(subactive).parent().css("background","#FFFFFF");
		$(subactive).removeClass("subactive");
		$("#"+menuA).attr("class","subactive");
		$(menuA).parent().css("background","#FFFFFF");
	}
}
