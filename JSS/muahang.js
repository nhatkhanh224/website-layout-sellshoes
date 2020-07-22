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
			var ten = document.forms["dangki"].ten.value;
			var number = document.forms["dangki"].number.value;
			
			var text = document.forms["dangki"].text.value;

			
			if(ten==""){
				alert("Chua nhap du lieu cho ten");
				document.forms["dangki"].ten.focus();
				return false;
			}
			if(number==""){
				alert("Chua nhap du lieu cho so dien thoai");
				document.forms["dangki"].ten.focus();
				return false;
			}
			if(text==""){
				alert("Chua nhap du lieu cho text");
				document.forms["dangki"].ten.focus();
				return false;
			}
			
		}