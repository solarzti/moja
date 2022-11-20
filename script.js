  function menu(typ){
	var main=document.getElementsByClassName("tresc")
	for (let m of main){
	m.style.display = "none";	
	}
	var biezacy = document.getElementById(typ)
	biezacy.style.display = "block";
	window.scrollTo(0, 0);
	if (window.innerWidth < 600.01) {
	document.getElementById("menunav").style.display = "none"; 
	}
	 
	
}
function pokaz(){
   if (window.innerWidth >599.99) {
	document.getElementById("menunav").style.display = "block"; 
   if(window.scrollY==0){
	  document.getElementById("menunav").style.backgroundColor = "";  
   }
   else {
	 document.getElementById("menunav").style.backgroundColor = "white";  
   }
   }
	else{
		document.getElementById("menunav").style.display = "none"; 
document.getElementById("menunav").style.backgroundColor = "white"; 		
	}
}

	window.addEventListener('scroll', function() {
	var scroll = window.scrollY;
  var bar = document.querySelector('#menunav');
   var topbar = document.querySelector('#menumob');
  
  if (scroll==0){
	  if (window.innerWidth > 600) {
	  bar.style.background="none";}
	  else 
	  {bar.style.background="white";}
		  
  bar.style.opacity = 1;
  topbar.style.background="none";
  topbar.style.opacity = 1;
  }
  else{
  bar.style.background="white";
  bar.style.opacity = 1;
   topbar.style.background="white";
  topbar.style.opacity = 1;
  }
});


function OdkrZamk()
{
  if (document.getElementById("menunav").style.display == "block")
  {
    document.getElementById("menunav").style.display = "none";   
  }
  else
  {
    document.getElementById("menunav").style.display = "block"; 	
  }
}
