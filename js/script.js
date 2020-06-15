
function font_menu(){
	var col = new Array("White","Yellow");
	document.fgColor = col[parseInt(Math.random()*1)];
	setTimeout("font_menu()",0);
}

/* 새창  화면 중앙에 띄우는 메소드 */

function openWin(w, h){
	screen_w = (screen.width - w) / 2;
	screen_h = (screen.height - h) / 2;
	popft = 'height=' + h + ',width=' + w + ',top=' + screen_h + ',left=' + screen_w;
	window.open("joining.html",'', popft);
}


/* 메뉴 움직임을 표현한 메소드 */

function img(img, num){
	switch(num){
		case 1: img.src="images/user-info_i.JPG"; break;
		case 2: img.src="images/user-info.jpg"; break;
		case 3: img.src="images/roadmap_i.JPG"; break;
		case 4: img.src="images/roadmap.JPG"; break;
		case 5: img.src="images/hobby_i.JPG"; break;
		case 6: img.src="images/hobby.JPG"; break;
	}
}

/* 회원가입 페이지관련 메소드 */

function joining_check(frm, num, len, text){
	switch(num){
										
									
	case 0: // 민번확인, 성별 민번확인때 체크같이되게  man, women, f_num, b_num
		if(text.value.length != len){
			alert("다시 입력하세요");
			text.value="";
		}
		else{
			if(frm.b_num.value.length != 0){
				var num=frm.b_num.value;
				if(num.charAt(0)==1 || num.charAt(0)==3){
					frm.man.checked=true; frm.women.checked=false;
				}
				else if(num.charAt(0)==2 || num.charAt(0)==4){
					frm.women.checked=true; frm.man.checked=false;
				}
				else{
					alert("유효한 번호가 아닙니다");
					frm.b_num.value="";
				}
			}
		}
		break;
		
	case 1: // 아이디 중복확인_id, re_name 4 ~ 8
		if(frm._id.value.length < len){
			alert("좀더 길게 입력하세요");
			frm._id.value="";
		}
		else{
			alert("사용 가능한 아이디입니다");
		}
		break;
		
	case 2: // 비밀번호, 비밀번호 중복확인 passwd re_passwd 4 ~ 9
		if(frm.passwd.value.length < len){
			alert("좀더 길게 입력하세요");
			frm.passwd.value="";
		}
		else{
			if(frm.re_passwd.value.length != 0 && frm.passwd.value != frm.re_passwd.value){
				alert("비밀번호가 맞지않습니다");
				frm.re_passwd.value="";
			}
		}
		break;
		
	case 3: // 핸드폰 '-' 없게 확인
		if(frm.p_number.value.indexOf("-") != -1){
			alert("다시 입력하세요");
			frm.p_number.value="";
		}
		break;
		
	case 4:	// 메일 '@' 확인 
		if(frm.mail.value.indexOf("@") == -1){
			alert("정확하게 써주세요");
			frm.mail.value="";
		}
		break;
		
	case 5: // 최종가입 메세지 
		if(confirm("가입하시겠습니까?")) {
			alert("가입되었습니다");
			window.close();
			break;
		}
	}
}