// JavaScript Quiz Validator - COMP 1950
var questionsAnswered = new Array();
var textQuestions = new Array();

//Takes an input object from the page and marks question answered array
function markQuestionAsAnswered(object){
	$('#' + object.attr("name")).removeClass('warning');
	var i = object.attr("name").substr(1); //gets question number
	questionsAnswered[i-1] = true; //mark question as being answered
}

$(document).on('input', '.empty', function(){
	$('#' + $(this).attr('name')).removeClass('warning');
	$(this).removeClass('empty');
})

$(document).ready(function() { 
	
	//Iterates over all questions to initialize arrays
	var currentName = null;
	$("[name^='Q']").each(function() {
		
		//count number of questions and add unentered for each one
   		if(name != $(this).attr("name"))
		{
			name = $(this).attr("name");
			questionsAnswered.push(false); //add question as unanswered to question array
			
			//if text type input, log in the textQuestions array
			if($(this).is('textarea') || $(this).is('input:text'))
			{
				textQuestions.push($(this));
			}
		}
	});

	//If an answer is selected on radio/checkbox questions
	$("[type='checkbox'][name^='Q'], [type='radio'][name^='Q']").click(function() {
			markQuestionAsAnswered($(this));
	});

	//When user hits submit
	$('#submit').click(function(){
		var complete = true;
		
		for(var j = 0; j < textQuestions.length; j++)
		{
			if(textQuestions[j].val()	!= '')
			{
				markQuestionAsAnswered(textQuestions[j]);
			}
			else
			{
				textQuestions[j].addClass('empty');	
			}
		}
		
   		for(var i = 0; i < questionsAnswered.length; i++)
		{
			if(questionsAnswered[i] == false) //check if question has been answered
			{
				$('#Q' +  (i+1)).addClass('warning');	 //if not add warning
				complete = false;
			}
		}
		
		if (complete == false) //if unanswered questions
		{
			var answer=confirm("Some questions are still unanswered. Do you want to continue?");
			if (answer==true)
 			 {
    			$(location).attr('href', "submit.html"); //simulate submission
 			 }
		}
		else //everything has been filled out!
		{
			$(location).attr('href', "submit.html"); //simulate submission
		}
	});
});