$(document).ready(function(){ 
	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 100) { //thực hiện lệnh điều kiện Khi lăn chuột xuống dưới hơn 100px
			$('#back-to-top').fadeIn(); //Xuất hiện nút
		} else { 
			$('#back-to-top').fadeOut(); //Ngược lại thì ẩn nút
		} 
	}); 
	$('#back-to-top').click(function(){ 
		$("html, body").animate({ scrollTop: 0 }, 600); //Animation giúp hoạt ảnh scroll ngược lên đầu trang sẽ mượt hơn
		return false; 
	}); 
});

 function ktr(){
			
			var email = document.forms["dangki"].email.value; 
		

			var reg_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			
			if(!reg_email.test(email)){
				alert("Email khong hop le");
				document.forms["dangki"].email.focus();
				return false;
			}
			else
			alert("Đăng ký thành công")
		} 