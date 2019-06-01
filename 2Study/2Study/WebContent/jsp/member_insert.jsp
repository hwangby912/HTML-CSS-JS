<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    <jsp:include page="header.jsp"></jsp:include>
    
    <jsp:include page="side.jsp"></jsp:include>
    
    <td>
    	<form action = "/2Study/main" method = "get">
    	<input type = "hidden" name = "sign" value = "member_insert">
    	<fieldset>
    	<legend class = "identification">인적사항</legend>
    	ID<input type = "text" name = "id"> <br>
    	PW<input type = "password" name = "pw"> <br>
    	Name<input type = "text" name = "name"> <br>
		Email<input type = "email" placeholder = "xxx@xxx.xx.xx" name = "email"> <br>
		URL<input type = "url" placeholder = "http://xxx.xxx.xxx.xxx" name = "url"> <br>
    	Gender<input type = "radio" name = "gender" value = "male">남성
    		  <input type = "radio" name = "gender" value = "female">여성 <br>
    	Phone Number<input type ="tel" pattern = "[0-9]{2-3}-[0-9]{3-4}[0-9]{4}" placeholder="0**-999*-9999" name = "phone"> <br>
    	Birth Date<input type = "date" name = "birth"> <br> 
    	Time<input type = "time" name = "time"> <br>
    	Age<input type = "number" min = "1" max = "150" step = "1" value = "20" name = "age"> <br>
    	Color<input type = "color" value = "#ABCDEF" name = "favorite" > <br>
    	<a href = ""><input type="image" src="/2Study/image/html5.PNG" alt="포인트"></a>
    	<input type = "image" src="/2Study/image/pic1.png" alt="전구" onclick="alert('클릭')">
    	<a href = ""><button type = "button"><img src="/2Study/image/pic2.png"></button></a>
    	</fieldset>
    	<fieldset>
    	<legend class = "etc">기타사항</legend>
    	Hobby
    	<input type = "checkbox" name = "hobby" value = "movie">영화
    	<input type = "checkbox" name = "hobby" value = "game">게임
    	<input type = "checkbox" name = "hobby" value = "reading">독서
    	<input type = "checkbox" name = "hobby" value = "study">공부
    	<input type = "checkbox" name = "hobby" value = "music">음악
    	<br>
    	
    	Country
    	<select name = "country" size = "1">
    		<option value = "Korea" selected>대한민국</option>
    		<option value = "France">프랑스</option>
    		<option value = "Japan">일본</option>
    		<option value = "China">중국</option>
    		<option value = "USA">미국</option>
    	</select> 
    	<br>
    	
    	PHOTO
    	<input type = "file" name = "filename">
    	<br>
    	</fieldset>
    	<fieldset>
    	<legend class = "resume">자기소개서</legend>
    	<textarea rows ="3" cols = "50" name = "description">
    	자기소개서 작성
    	</textarea>
    	<br>
    	</fieldset>
    	<input type = "submit" value = "회원가입">
    	<input type = "reset" value = "초기화">
    	</form>
    </td></tr>
    
    <jsp:include page="copyright.jsp"></jsp:include>