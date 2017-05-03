

// Biography JSON
 var bio = {
 		name:"Assad Aboultaif",
 		role:"Web Developer",
 		contacts:{
 			mobile:"111-111-111",
 			email:"assadaboultaif@gmail.com",
 			github:"assadab",
 			twitter:"assadab",
 			location:"Caracas, Venezuela"
 		},
 		welcomeMessage:"Hi, welcome to my resume!",

 		skills:[
 		"HTML",
 		"CSS",
 		"JavaScript",
 		"Ajax",
 		"SASS",
 		"Ruby",
 		"Python"
 		],

 		biopic:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
 };


//Bio function

 bio.display = function(){

	 var formattedName = HTMLheaderName.replace("%data%",bio.name);
	 
	 var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

	 var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);

	 var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);

	 var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

	 var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);

	 var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);

	 var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

	 var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
		
	 					$("#header").prepend(formattedRole);
	 					$("#header").prepend(formattedName);
	 					$("#header").append(formattedBioPic);
	 					$("#header").append(formattedWelcomeMsg);
	 					$("#topContacts , #footerContacts ").append(formattedMobile , formattedEmail , formattedTwitter ,formattedGithub ,formattedLocation);
	 							

	 if(bio.skills.length >0){

	 	$("#header").append(HTMLskillsStart);

	 	for(var i = 0; i< bio.skills.length ; i++){
	 		
	 		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	 		$("#skills").append(formattedSkill);
	 	}
	 }

 };

// Work Experience JSON

 var work = {
 	jobs:
 	[
 	{
 		title:"Junior Product Manager",
 		employer:"Nolte",
 		dates:"2016",
 		location:"New York, NY",
 		description:"Successfully collaborated in the implementation of a new product development process by implementing Agile methodologies to reduce project delays and cost overruns"
 	},
 	{
 		title:"Facility Staff Supervisor",
 		employer:"USF Campus Recreation",
 		dates:"2014-2016",
 		location:"Tampa, FL",
 		description:"Managed and supervised a team of 6 staff members while also setting daily targets and objectives"
 	}
 	]
 };


// Work Experience function

work.display = function(){

	if(work.jobs.length>0){
		$("#workExperience").append(HTMLworkStart);

		for(var i=0;i<work.jobs.length ; i++){

			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
			var employerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(employerTitle);
			

			var formattedYears = HTMLworkDates.replace("%data%",work.jobs[i].dates);
			$(".work-entry:last").append(formattedYears);

			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
			$(".work-entry:last").append(formattedDescription);

		}
	}

};

 //Education History object

 var education={
 	schools:
 	[
	 	{
	 	name:"University of South Florida",
	 	degree:"B.S.",
	 	majors: [
	 	"Management Information Systems" 
	 	],
	 	dates:"August 2012 - May 2016",
	 	location:"Tampa,FL",
	 	url:"usf.edu"
	 	}
 	],
 	onlineCourses:
 	[
 		{
 		title:"Front End Development",
 		school:"Udacity",
 		dates:"April, 2016 - May, 2016",
 		url:"udacity.com"
 		}
 	]
};


// Education function
education.display = function(){


		if(education.schools.length>0){

		$("#education").append(HTMLschoolStart);

		for(var i=0;i<education.schools.length; i++){
			
			var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);

			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);

			var degreeName = formattedSchoolName + formattedSchoolDegree;

				$(".education-entry:last").append(degreeName);

			var formattedDate = HTMLschoolDates.replace("%data%",education.schools[i].dates);

				$(".education-entry:last").append(formattedDate);

			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);

				$(".education-entry:last").append(formattedLocation);

			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);

				$(".education-entry:last").append(formattedMajor);


			}
		
		}

			$(".education-entry:last").append(HTMLonlineClasses);

			for(var j=0 ; j<education.onlineCourses.length;j++){

				var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[j].title);

				var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[j].school);

				var courseName = formattedTitle + formattedSchool;

				$(".education-entry:last").append(courseName);

				var formattedOnlineDate = HTMLonlineDates.replace("%data%",education.onlineCourses[j].dates);

				$(".education-entry:last").append(formattedOnlineDate);

				var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[j].url);

				$(".education-entry:last").append(formattedUrl);

		}
	

};

// Projects object

var projects = {
	projects:[
		{
			title:"Portfolio Website",
			dates: "April 2016",
			description:"Lorem Impsum",
			images:[
				"http://metrobc.com.au/wp-content/uploads/2015/10/PROJECT-PLACEHOLDER-METROBC.jpg",
				"http://metrobc.com.au/wp-content/uploads/2015/10/PROJECT-PLACEHOLDER-METROBC.jpg"
			]

		},
		{
			title:"Interactive Resume",
			dates:"April 2016",
			description:"Lorem Impsum",
			images:[
				"http://metrobc.com.au/wp-content/uploads/2015/10/PROJECT-PLACEHOLDER-METROBC.jpg",
				"http://metrobc.com.au/wp-content/uploads/2015/10/PROJECT-PLACEHOLDER-METROBC.jpg"
			]

		}
	]

};


// Projects function
projects.display = function(){
	if(projects.projects.length>0){

			$("#projects").append(HTMLprojectStart);

			for(var i=0;i<projects.projects.length ; i++){
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
				$(".project-entry:last").append(formattedProjectTitle);

				var formattedProjectDate = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
				$(".project-entry:last").append(formattedProjectDate);

				var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
				$(".project-entry:last").append(formattedProjectDescription);

				for(var j=0; j<projects.projects[i].images.length ;j++){
					var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
					$(".project-entry:last").append(formattedImage);

				}

			}
	}

};


$("#mapDiv").append(googleMap);

//Display functions

bio.display();
work.display();
projects.display();
education.display();







