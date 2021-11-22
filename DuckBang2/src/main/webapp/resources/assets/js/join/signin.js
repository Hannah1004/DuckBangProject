 
 const btn = document.getElementById('btn');

	function check(){

	    const id = document.getElementById('u_id').value;
	    const pw1 = document.getElementById('password1').value;
	    const pw2 = document.getElementById('password2').value;
	
	    
	    if ((isEmail(id) && isJobPassword(pw1) && isJobPassword(pw2)) && pw1 === pw2) {
	        //btn.style.backgroundColor = 'skyblue';
	        btn.disabled = false;
	        btn.style.backgroundColor = '#E6a055';
	    }
	
	    if ((!isEmail(id) || !isJobPassword(pw1) || !isJobPassword(pw2)) || !(pw1 === pw2)) {
	    	btn.style.backgroundColor = 'lightgray';
	        btn.disabled = true;
	        
	    }
     
    }

	function isEmail(asValue) {
	
	    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	
	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴	
	
	}
	
	function isJobPassword(asValue) {
	
	    var regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;
	
	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
	
	}