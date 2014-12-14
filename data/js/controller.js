window.onload=function(){
	
	var expression1 = document.getElementById("f1"),
		expression2 = document.getElementById("f2"),
		expression3 = document.getElementById("f3"),
		expression4 = document.getElementById("f4");
	
	expression1.addEventListener("click", function() { 
		document.getElementById("f1answer").value = document.getElementById("f1a").value / 100 * document.getElementById("f1b").value;
	});
	
	expression2.addEventListener("click", function() { 
		document.getElementById("f2answer").value = document.getElementById("f2a").value / document.getElementById("f2b").value * 100;
	});
	
	expression3.addEventListener("click", function() { 
		document.getElementById("f3answer").value = (document.getElementById("f3b").value - document.getElementById("f3a").value) / document.getElementById("f3a").value  * 100;
	});
	
	expression4.addEventListener("click", function() { 
		
		if (document.getElementById('selection').selectedIndex == 0){
			
			var value = parseInt(((document.getElementById('f4b').value / 100) * document.getElementById('f4a').value));
			document.getElementById("f4answer").value = value + parseInt(document.getElementById('f4a').value);
			
		}else if (document.getElementById('selection').selectedIndex == 1){
			
			var value = parseInt(((document.getElementById('f4b').value / 100) * document.getElementById('f4a').value));
			document.getElementById("f4answer").value = parseInt(document.getElementById('f4a').value) - value;			
			
		}else if (document.getElementById('selection').selectedIndex == 2){
			
			document.getElementById("f4answer").value = parseInt(((document.getElementById('f4b').value / 100) * document.getElementById('f4a').value));			
			
		}else if (document.getElementById('selection').selectedIndex == 3){
			
			document.getElementById("f4answer").value = parseInt(document.getElementById('f4a').value / (document.getElementById('f4b').value / 100));
		}
	});
};