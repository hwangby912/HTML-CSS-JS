# JavaScript Basic

1. JavaScript Code 작성 방법

   1. 내부 JS

      가장 기본적인 방법으로는 script Tag를 이용해서 나타낸다. 

      ```javascript
      <script>
      	<!-- HTML 문서 내에서 JavaScript를 작성하는 방법 -->
      	document.write("Hello World!");
      </script>
      ```

      해당 작성 방법의 예시

      ```javascript
      <!DOCTYPE html>
      <html>
      <body>
      	<h3>Hello World</h3>
          Inline JavaScript 작성 방법<br>
          <button onclick = "alert('Hello JavaScript')">Hello JS</button>
      </body>
      </html>
      ```

      해당 Code의 결과

      ![Hello JS](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\Hello JS.PNG)

   2. 외부 JS

      이 방법은 CSS의 외부 스타일시트 지정 방법과 유사하게 JavaScript Code를 별도의 파일로 작성해 두고, script Tag 속성의 src를 이용하여 연결한다. 일반적으로 Web Programming을 할 때, 이러한 방식으로 이용한다. 

      ```javascript
      <script src = "JavaScript file 경로 or URL">
      </script>
      ```

      해당 작성 방법의 예시

      ```html
      <!-- external_link.html -->
      <!DOCTYPE html>
      <html>
          <head>
              <title></title>
          </head>
          <body>
              <h3>
                  외부 Script 작성 방법 예시
              </h3>
              <script src = "/JS_example_code/js/external_link.js"></script>
          </body>
      </html>
      ```

      

      ```javascript
      <!-- external_link.js -->
      var sub1 = "Hello JS ";
      var sub2 = "Programming";
      
      function print(target) {
          document.write(target);
      }
      
      print(sub1);
      print(sub2);
      ```

      해당 Code의 결과

      ![Hello JS external](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\Hello JS external.PNG)

2. JS의 자료형

   |  자료형   |      변수의 자료형      |            구분            |
   | :-------: | :---------------------: | :------------------------: |
   |  string   |         문자열          | Primitive Type 또는 Object |
   |  number   |        수치값들         | Primitive Type 또는 Object |
   |  boolean  |    참, 거짓의 논리값    | Primitive Type 또는 Object |
   | undefined | 자료형이 정의 되지 않음 | Primitive Type 또는 Object |
   |  object   | 호출 불가능한 함수 객체 |           Object           |
   | function  |  호출 가능한 일반 객체  |           Object           |

   1. String 형

      문자열은 'html5', "JS" 등과 같이 작은 인용부호 또는 이중인용부호를 이용하여 나타낸다. 만약 문자열이 작은 인용부호를 포함할 때는 "안녕하세요 'HBY' 입니다. "와 같이 반드시 이중인용부호를 사용해서 나타내야 한다. 문자열은 내부적으로 시작 index가 0인 문자 배열에 저장된다. 

   2. number 형

      정수 or 실수 등을 나타내는 수치값들을 표현한다. 특별한 수치형 값을 나타내는 예약어로 NaN(Not a Number)과 Infinity, -Infinity가 있다. NaN은 자료값이 수치형이 아니다 라는 것을 나타낸다. 

   3. boolean 형

      참 또는 거짓의 논리값을 나타내는 것이며, JS에서는 number형이나 string형 등 다른 자료형들도 형변환 내장 함수인 Boolean()을 이용해서 boolean형으로 변환해서 나타낼 수 있다. JS에서는 정수 0과 -0 그리고 공백문자열(""), undefined 형 변수, null 객체는 boolean 형으로 변환하면 모두 false가 되며, 나머지는 모두 true이다. 

      해당 예시를 보며 알아보자

      ```html
              <script>
                  var state;
                  var num1 = 100;
                  var str1 = "";
                  var str2 = "JS";
                  var obj1 = null;
                  var obj2 = new Object();
                  document.write(Boolean(state) + '<br>');
                  document.write(Boolean(num1) + '<br>');
                  document.write(Boolean(str1) + '<br>');
                  document.write(Boolean(str2) + '<br>');
                  document.write(Boolean(obj1) + '<br>');
                  document.write(Boolean(obj2) + '<br>');
              </script>
      ```

      해당 결과

      ![boolean data type](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\boolean data type.PNG)

   4. undefined 형

      해당 형태는 변수가 자료형을 결정할 수 없음을 나타내는 type이다. 즉, 변수는 선언하였지만, 아무런 값이 없거나 변수값으로 예약어 undefined를 저장한 변수들의 자료형은 undefined가 된다. 

      해당 예시를 보며 알아보자

      ```html
              <script>
                  var obj = new Object();
                  var num;
      
                  document.write(obj + '<br>');
                  document.write(num + '<br>');
                  obj = null; 
                  document.write(obj + '<br>');
                  obj = undefined;
                  document.write(obj + '<br>');
                  document.write((undefined == null) + '<br>');
                  document.write((undefined === null) + '<br>');
              </script>
      ```

      해당 결과

      ![undefined type](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\undefined type.PNG)

   5. 이벤트 속성

      JS는 정적인 HTML Page에서 동적인 반응을 이끌기 위해 이벤트 처리를 지원한다. 이벤트는 사용자의 요청에 의해서 일어나는 상태변화를 나타낸다. 

      대표적인 예시를 보도록 하자. 

      ```html
      <!DOCTYPE html>
      <html>
          <head>
              <style>
                  div {
                      width: 50px;
                      height: 50px;
                      border-radius: 50%;
                      display: inline-block;
                  }
                  
                  img {
                      width: 50px;
                      height: 80px;
                      float: left;
                  }
      
                  #b1 {
                      background: red;
                  }
      
                  #b2 {
                      background: green;
                  }
      
                  #b3 {
                      background: blue;
                  }
      
                  #b4 {
                      background: orange;
                  }
      
                  #b5 {
                      background: skyblue;
                  }
              </style>
          </head>
      
          <body>
              <script>
                          var txt2 = "어두워 졌습니다. 전구를 켤까요? "
                      function question(msg) {
                          var answer = confirm(msg);
                              if(answer == true) {
                              document.write("전구가 켜졌습니다. ");
                              document.write("<img src = '/JS_example_code/img/on.png'>");
                          } else {
                              document.write("전구가 꺼졌습니다. ");
                              document.write("<img src = '/JS_example_code/img/off.png'>");
                          }
                      }
              </script>
              <h4>1. MouseOver / MouseLeave Event Handling</h4>
              <img src = "/JS_example_code/img/off.png" onmouseover = "this.src = '/JS_example_code/img/on.png';"
              onmouseleave = "this.src = '/JS_example_code/img/off.png';" /> <br><br>
              <button onclick = question(txt2)>전구 on / off 시도</button>
      
              마우스가 전구 위에 있으면 켜지고, 벗어나면 꺼집니다. <hr>
              
          </body>
      </html>
      ```

      onclick: 마우스로 클릭이 되었을 경우, 이벤트를 수행한다. 

      onmouseover: 마우스가 해당하는 곳에 올려져 있는 경우, 이벤트를 수행한다. 

      onmouseleave: 마우스가 해당하는 곳에 올려져 있지 않은 경우, 이벤트를 수행한다. 

   6. 입력 함수

      1. alert() 함수

         안내메세지, 경고메세지 등을 표시할 때 나타내는 대화상자에 해당한다.

      2. confirm() 함수

         대화상자를 통해 사용자에게 Yes or No의 응답을 요구하며 해당 사용자의 반응에 따라서 다른 작업을 수행해야 할 때 사용된다. 위의 이벤트 예제를 하면서 쓰인 함수이다. 

      3. prompt() 함수

         대화상자를 통해 사용자에게 문자열의 입력을 요구하고 사용자가 입력한 문자열을 반환한다. 일반적으로 입력 받은 문자열을 parseInt(), parseFloat(), Number()로 변환한 뒤 계산을 하도록 한다. 

   7. 배열

      JS에서 배열은 미리 정의하지 않고 사용할 수 있으며, 배열 크기도 동적으로 변경할 수 있다. 배열을 동적으로 할당할 수는 있지만, 이 경우 index는 이어질수 있어도, 메모리상에서는 이어지지 않을 수도 있기에 가급적이면 배열을 할당할 때 처음부터 적당한 크기의 배열로 잡는 것이 좋다. 동적으로 할당이 되는 경우 배열의 원소들은 undefined 형이다. 

      JS 배열의 중요한 특성은 문자열 인덱스(named index 또는 key)를 이용하여 배열원소들을 접근할 수 있다는 점이다. 문자열 인덱스를 이용해서 해당 배열원소로 접근도 가능하고, 문자열 인덱스가 저장된 string 변수를 인덱스로 사용하는 것도 가능하다. 

      또한, 문자열 인덱스를 이용하여 배열원소를 참조할 수 있다.  문자열 인덱스로 접근을 할 때에는 무조건 인용부호를 맞춰서 index로 접근을 해야한다는 것이다. 

      예를 보면서 알아보자

      ```html
          <body>
              <form name = "form1">
                  이  름: <input type = "text" name = "stuName"/><br>
                  국어 성적: <input type = "text" name = "kor"> <br>
                  수학 성적: <input type = "text" name = "math"> <br>
                  <button onclick = "compute();">성적 처리 결과</button>
              </form>
              <script>
                  function compute() {
                      var total;
                      var avg;
                      total = parseInt(form1["kor"].value) + parseInt(form1["math"].value); 
                      // form tag에 대해서 배열 값을 접근하기 위해서는 해당 이름으로 접근한다. ""이 있다면 모두 써야 접근 가능
                      avg = total / 2;
                      alert(form1["stuName"].value + " 학생의 평균 성적은 " + avg + " 입니다. ");
                  }
              </script>
          </body>
      ```

      해당 결과

      ![array element reference using named index](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\array element reference using named index.PNG)

