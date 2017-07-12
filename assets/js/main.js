
/*aca va js*/

$(document).ready(function() {


	$.getJSON('https://api.dribbble.com/v1/users/RypeArts/shots?access_token=a94cc9a5cdd89d403fe031a7173778db76ebd7ed8d919fbc2efc33371723ecea', function(data) {
			data.forEach(function(e){
				$(".addp").append("<div class='box col-md-3'><img class='img-responsive imges' src='"+e.images.normal+
					"'><div class='overlay'><div class='text'>"+e.description+
					"</div></div><br><div class='contadores'><div class='cont'><i class='fa fa-eye icont' aria-hidden='true'></i>"+
					e.views_count+"</div><div class='cont'><i class='fa fa-comment icont' aria-hidden='true'></i>"+e.comments_count+
					"</div><div class='cont'><i class='fa fa-heart icont' aria-hidden='true'></i>"+e.likes_count+"</div></div></div>")
			});
			userName();
	});


	var userName = function (data){
		
		var nameUser = "RypeArts";
		console.log(nameUser);
		$(".titulousuario-name").append("<a href='#'><h4>" + nameUser + "</h4></a>");
	}
	
});



var addLikes = function(array){

	array.forEach(function(e){
		var titulo = e.title;
		$(".addp").append('<div class="name">'+titulo+'</div>')
	})

};


