# JS의 DOM, BOM, jQuery 및 AJAX

1. DOM과 BOM의 정리

   DOM과 BOM의 대략적인 그림은 다음과 같다. 

   ![DOM & BOM](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\DOM & BOM.PNG)

   DOM(Document Object Model): Web Browser에 로딩된 HTML 문서 정보를 나타내는 객체이다. DOM은 Web Page의 객체 지향 표현이며, JS 같은 Script 언어를 이용하여 DOM을 수정할 수 있다. 

   보여지는 페이지 문서를 조작하는 객체를 DOM이라고 한다.

   BOM(Browser Object Model): navigator, location 등과 같이 Web Browser 관련 정보들을 나타내는 객체이다. 공식 표준이 아니기에 어떤 Browser에서는 수행이 안되는 경우도 있는 객체들이 존재한다. 

   

2. jQuery

   jQuery: JS의 Library중 하나이며, JS Programming 기능들을 간편하게 이용할 수 있는 많은 Library 함수들을 제공해서 개발자의 편의성을 제공하는 Library

   jQuery의  주요 작업: 

   	1. HTML 요소들의 내용이나 속성 변경
    	2. HTML 요소들의 CSS3 Style 속성 변경
    	3. HTML DOM 트리의 변경(즉, 요소 노드 추가, 삭제 처리)
    	4. HTML 요소들에 대한 다양한 효과 지정
    	5. Server와의 비동기 통신 지원(AJAX Programming)

   jQuery 이용 방법:

   ```html
   <head>
   	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script> <!-- 3.4.0 ver 가져오기-->
   </head>
   ```

   jQuery의 명령어 형식

   ```javascript
   $(selector).function();
   jQuery(selector).function(); // 2개 모두 앞에 window를 써도 무관
   ```

   자주 쓰게 되는 함수 목록

   |  처리 작업  |                       jQuery 작업함수                        |
   | :---------: | :----------------------------------------------------------: |
   |  요소 내용  |                    html(), text(), val()                     |
   |    속성     | attr(), removeAttr(), addClass(), removeClass(), toggleClass() |
   | 스타일 속성 |                            css()                             |
   |  DOM 트리   | first(), last(), remove(), empty(), appendTo(), prependTo(), append(), after(), before(), insertAfter(), insertBefore() |

3. AJAX(Asynchronous Javascript And XML)

   비동기 JS와 XML을 의미하며, AJAX를 통해 서버에 요청을 한 후 멈추어 있는 것이 아니라 그 프로그램은 계속 돌아가는 것을 의미한다. AJAX를 사용하는 이유는 사용성 및 접근성, 응답성의 향상이다. 새로운 것을 보여주기 위해 Web Page 전체가 항상 reload되는 것은 한계로 이어질수 있기 떄문이다. AJAX는 BOM 객체에 해당하기에 쓸 수 없는 Browser에 대한 문제가 있다. 

   대표적으로 XMLHttpRequest 객체가 존재한다. 

   ```javascript
   function loadDoc() {
       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function () {
           if (this.readyState == 4 && this.status == 200) {
               document.getElementById("love_search_rs").innerHTML = this.responseText;
           }
       };
       var name = document.getElementById("ajax_test_name").value;
       xhttp.open("GET", "http://70.12.50.51:3000/hello?name=" + name, true);
       xhttp.send();
   }
   ```

   해당 function은 XMLHttpRequest 객체를 생성한 뒤 onreadystatechange 메소드에 조건을 충족하면, "love_search_rs"라는 id에 해당하는 곳에 this.response로 채워 넣는다. "ajax_test_name"이라는 id의 값을 받아와서 get 방식으로 해당 url에 name value를 전송한 것을 open한다. 

