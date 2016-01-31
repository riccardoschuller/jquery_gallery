

$(document).ready(function () {

	var nome = $("#submit_nome").val();
	var password = " ";			
	

	$('#submit_btn').on('click', function () {
		console.log('submit clicked');
				nome = $("#submit_nome").val();
				password = $("#submit_password").val();
				console.log(password.length)
		if (isNaN(nome) && isNaN(password) && password.length <= 4) {

		
		console.log(password);
		$("#pagina1").fadeOut();
		$("h1").text("Ciao " + nome + ", benvenuto nel mondo di JQuery!");
		$("#pagina2").fadeIn();


	
	}});




	$("#hacker-btn").on('click', function (){
		
		console.log(password);
		crack(password);



});

	var charset = "abcdefghijklmnopqrstuvwxyz";
function crack(value){
    function toRadix(N,radix) {
        var HexN = "", 
            Q = Math.floor(Math.abs(N)), 
            R,
            strv = charset,
            radix = strv.length;
        while (true) {
            R = Q % radix;
            HexN = strv.charAt(R) + HexN;
            Q = (Q - R) / radix; 
            if (Q == 0) 
                break;
        };
        return ((N < 0) ? "-" + HexN : HexN);
    };
    var start = (new Date()) * 1,
        cracked = false,
        index = 0;
    while(!cracked){
        if(toRadix(index) == value)
            cracked = true;
        else
            index++;
        console.log(toRadix(index));
    };
    alert("La tua password è: " + toRadix(index));

}

$(function(){

	var note = $('#note'),
		ts = new Date(2012, 0, 1),
		newYear = true;

	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}

	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){

			var message = "";

			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";

			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}

			note.html(message);
		}
	});

});


    $(function() {
        $(".dial").knob();
    });

$(function() {
      $("#changethewords").changeWords({
        time: 1500,
        animate: "tada",
        selector: "span"
      });
    });


});