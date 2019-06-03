# HTML5 기본

기본적으로는 Static한 Web Page이지만, 일반적으로 css, JavaScript와 같이 쓰임

```html
<!DOCTYPE HTML>
<html>
<head>
	<meta charset = "utf-8">
    <style>@import *.css</style>
	<title>Web의 제목</title>
</head>
	<body>
		쓰고 싶은 내용들
	</body>
</html>
```

기본적인 html 형식

혹은 

```html
<style>@import *.css</style> // 대신 다음과 같은 code도 괜찮다. 
<link rel = "stylesheet" href = "*.css"> // stylesheet로 연결
```

list tag: ol, ul, li tag

여러 리스트 항목들을 한 라인에 한 항목씩 나열해서 나타내는 tag

ol(ordered list): 순서 표시가 있게 나열

ul(unordered list): 순서 표시가 없게 나열

li(list): 한 데이터의 항목

```html
<ul>
	<li>Unordered</li>
    <li>List</li>
    <li>Data</li>
</ul>

<ol>
	<li>Ordered</li>
	<li>List</li>
	<li>Data</li>
</ol>
```

해당 결과물

![ol, ul list](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\ol, ul list.png)

img tag

```html
<img src = "*.png" width = "n" height = "m">
```

table tag

table tag는 표 형식을 나타내는 tag

table: 표를 표시해주며 attribute중 대표적으로 border가 있음(테두리 표시)

tr(table row): 표의 한 행 표시

th(table head): 표의 한 열 표시, head가 중요해서 기본적으로 bold 처리됨

td(table data): 표의 내용을 표시

```html
<!DOCTYPE html>
<html>
<body>

<h2>Basic HTML Table</h2>

<table border = "1" width = "100%">
  <tr>
    <th>HTML</th>
    <th>CSS</th> 
    <th>JavaScript</th>
  </tr>
  <tr>
    <td>Basic</td>
    <td>Img</td>
    <td>Table</td>
  </tr>
  <tr>
    <td>Selector</td>
    <td>Box Model</td>
    <td>Layout Composition</td>
  </tr>
  <tr>
    <td>Syntax</td>
    <td>Function</td>
    <td>Object</td>
  </tr>
</table>

</body>
</html>
```

해당 결과물

![table result](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\table result.png)

p tag(= br tag 2번)

div tag

Web Page를 꾸미는데 잘 사용되며 Layout을 나누는데 주로 쓰이며, 주로 CSS와 연동하여 쓰임(나는 div tag를 잘 쓰면 CSS를 다루는데 능숙하다고 생각함)

해당 tag에서 class와 id를 부여하는 경우가 많음(해당 Layout을 편리하게 나누기 위함)

style tag에서 class부분은 "."으로 표시하며 id부분은 "#"으로 표시한다. 

또한 tag안에 여러 class or id가 있는 경우 "class명 id명"으로 특정 tag만을 지정하여 해당 css를 적용시킬 수 있다. (CSS를 할 경우 중요한 부분이라 생각함 관리를 편하게 하자는 마인드!!!!!!!!)

```html
<style>
	.a {
    	background-color: black; 
        color: white ;
    }
    
    .b {
    	background-color: #ABCDEF;
    }
</style>

<body>

<div class = "a">
	Hello Web Programming
</div>
<div class = "b">
	Bye Web Programming
</div>
```

해당 결과물

![div tag](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\div tag.png)



HTML과 JavaScript의 조합

기본적으로는 시간을 보여주는 것이 대표적이다. 왜냐하면 HTML은 정적인 Page이지만, JavaScript를 통하여 동적으로 보여주는 효과가 있기 때문이다. 

해당 Code는 button tag로 감싼 뒤, id가 demo인 것을 Date()함수로 출력하는 것이다. 대표적인 예제

```html
<h1>My First JavaScript</h1>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>

<p id="demo"></p>
```

해당 결과물

![HTML & JavaScript collaboration](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\HTML & JavaScript collaboration.png)



Semantic tag

Semantic  tag는 컴퓨터가 정보를 이해하고, 논리적인 추론을 쉽게 할 수 있는 구조를 만들기 위해 추가된 태그이다. 이것으로 Google 같은 경우 searching 속도가 급속도로 빨라졌으며, 요즘 시대에는 이렇게 Coding을 하는 것을 권장한다. 

![semantic 구조](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\semantic tag.png)

header tag: 문서의 header를 나타낼 때 사용하며, 대표적으로 meta charset이 존재한다. 

nav tag: 문서의 navigation을 나타낼 때 사용하며, 메뉴 영역으로 사용한다. Browser가 navigation 영역을 알게 되면 검색 엔진에 도움을 준다. 

section tag: 문서의 section을 의미하며, 같은 성격의 내용일 경우 section으로 묶는다. Semantic tag의 주요한 부분을 담당한다. 

article tag: section tag의 하위 개념이며, 기사나 글과 같은 독립적인 내용이 들어간다. 

aside tag: 본문과 직접적 연관성이 없는 내용을 담을 때 사용하며, 주로 광고 위젯 등이 있다. 

footer tag: 문서의 끝자락에 넣으며, 작성자의 주소, 연락처 or 저작권 등을 넣는다. 