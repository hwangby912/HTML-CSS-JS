# HTML Form tag

Form Tag의 동작 매커니즘

1. Form이 있는 Web Page를 방문한다. 
2. Form 안의 내용을 입력한다. 
3. Form 안에 있는 모든 데이터를 Web Server로 보낸다. 
4. Web Server는 받은 Form Data를 처리하기 위해 Web Program을 넘긴다. 
5. Web Program은 Form Data를 처리한다. 
6. 처리결과에 따른 새로운 HTML Page를 Web Server에 보낸다. 
7. Web Server는 받은 HTML Page를 Browser에 보낸다. 
8. Browser는 받은 HTML Page를 보여준다. 

![Form Tag Mechanism](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\Form Tag Mechanism.PNG)

Form Tag의 속성

​	Form Tag의 속성에는 name, action, method, target 등이 존재한다. 

​	해당 속성들을 이용하여 전송을 할 때 어느 파일로 보낼 것인지, 그리고 어떠한 			방법으로 보낼 것인지를 결정한다. Form Tag의 속성들은 다음과 같다. 

1. action: Form을 전송할 Server쪽 script file을 지정한다. 
2. name: Form을 식별하기 위한 이름을 지정한다. 
3. accept-charset: Form 전송에 사용할 문자 encoding을 지정한다. 
4. target: action에서 지정한 script file을 현재 창이 아닌 다른 위치에 열도록 지정한다. 
5. method: Form을 Server에 전송할 http method를 정한다. (get, post로 나뉨)

```html
<!DOCTYPE html>
<html>  
    <head>
    </head>

    <body>
        <form action = "/2Study/jsp/side.jsp" name = "side" method = "get">
        </form>
    </body>
<html>  
```

method 방식에서 get, post 방식으로 나뉘는 것을 볼 수 있다. 

이 두 방식은 Browser에서 Form Data를 가져와 Server로 보내는 것 기능을 하는 것은 똑같지만, 방식이 다르다. 

1. GET 방식: Form Data를 URL 끝에 붙여서 눈에 보이게 보내는 방식이며, 데이터가 외부에 노출되어 보안에 취약하다. 
2. POST 방식: Form Data를 URL에 붙이지 않으며 내부로 보내는 방식이며 데이터가 개인정보 or 보안을 해야 하는 경우 POST 방식을 채택한다. 

이 2개의 방식에 대한 그림은 다음과 같다. 

![get post system](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\get post system.PNG)

Form Tag의 Element Group인 field와 legend

	1. fieldset: Form Tag 안에서 관련 있는 Form Element들을 Group화 할 때 사용한다. 
 	2. legend: fieldset Tag 하위에서 사용되며, Group화한 Form Element들을 목적에 맞게 이름을 지정함. 

```html
<html>  
    <head>
    </head>

    <body>
        <form action = "/2Study/jsp/content.jsp" accept-charset="utf-8" name = "info" method = "get">
            <fieldset>
                <legend>정보 입력</legend>
                    이름 : <input type = "text" name = "name"/><br><br>
                    나이 : <input type = "text" name = "age"/><br><br>
            </fieldset>
            <br>
            <fieldset>
                <legend>취미 활동</legend>
                    취미 : <input type = "text" name = "hobby"/><br><br>
                    특기 : <input type = "text" name = "specialty"/><br><br>
            </fieldset> 
        </form>
    </body>
<html>  
```

해당 Code의 결과물 

![fieldset, legend example](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\fieldset, legend example.PNG)

다양한 모양을 가진 input Tag

input Tag에서는 사용자가 다양하게 Form Tag를 입력할 수 있는 공간을 만들어 준다. 간단하게 생각해보면 회원가입 Page를 예로 들 수 있다. 

1. type: Tag의 모양을 여러 모양으로 변경할 수 있다. type에는 텍스트 입력인 text, passwd, 선택 항목 입력인 radio, checkbox, 파일명을 입력할 수 있는 file, 버튼을 입력할 수 있는 reset, submit으로 크게 나뉜다. 
2. name: 해당 Tag에 대해서 이름을 지정한다. 
3. maxlength: 해당 Tag 최대 글자 수를 지정한다.
4. required: 해당 Tag가 필수 Tag로 지정된다. 필수 태그를 입력하지 않고, submit 버튼을 누르는 경우 에러메세지를 Web Browser에 출력한다. 
5. placeholder: Tag에 입력할 값에 대한 힌트를 준다. 

```html
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
```

해당 Code에 대한 결과

![Form Tag example](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\Form Tag example.PNG)