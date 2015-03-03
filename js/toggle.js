// Toggle Nav JS

var whoDis = document.querySelector('#whodis');
	
	document.querySelector('.whodis-btn').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (whoDis.getAttribute('data-state') == 'expanded'){
			
			whoDis.setAttribute('data-state', 'collapsed');
		
		}else{
		
			whoDis.setAttribute('data-state', 'expanded');
		
		}
	});