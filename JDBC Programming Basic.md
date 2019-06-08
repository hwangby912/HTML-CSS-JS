# JDBC를 사용한 JSP와  DB 연동

JDBC(Java Database Connectivity)란, Java 언어로 다양한 조율의 관계형 DB에 	접속하고 SQL문을 수행하여 처리하고자 할 때, 사용되는 표준 SQL Interface API이다. JDBC는 Java의 표준 에디션에서 지원하는 기술로, 접속하려는 DBMS 서버에 따라서 JDBC Driver가 필요하다. java.sql package에 존재함.

JDBC 프로그램의 작성 단계는 다음과 같다. 

![1559993579864](C:\Users\HBY\Desktop\GitHub\HTML, CSS, JS\photo\JDBC Programming Step.PNG)

출처: <https://hyeonstorage.tistory.com/110>

JDBC Driver는 DB가 설치된 폴더 or 사용하는 DB를 제공하는 벤더사의 홈페이지		에서 내려받을 수 있다. JDBC Driver를 자동으로 인식되는 곳은 2 군데이다. 첫째는 		WAS가 설치된 HOME/lib 폴더이고, 둘째는 각 웹 애플리케이션/WEB-INF/lib 폴더		에 저장해야 한다. 필자는 Eclipse를 사용하였으므로 후자에 해당한다. 	

JDBC 프로그램의 작성 단계에 대한 단계적 설명

1. JDBC Driver Load
   가장 먼저해야 하는 작업이며, DB 작업을 위해 준비된 JDBC Driver file을 사용할 수 있도록 메모리에 로딩해야 한다. 

```java
Class.forName("com.mysql.jdbc.Driver"); // Mysql version
```

```java
Class.forName("oracle.jdbc.driver.OracleDriver"); // Oracle version
```

JDBC Driver를 메모리에 동적으로 Load하기 위해서 Class.forName()을 이용하며, 		인자값으로 JDBC Driver file 안에서 Driver Interface를 상속하고 있는 Class이름 		패키지 이름과 함께 정확하게 적어주어야 한다. (대소문자 구분함)

2. Connection 객체 생성

   JDBC Driver 사용준비가 완료되면, 첫 번쨰 DB작업으로 DB서버와의 연결작업을 한다. 해당 작업은 java.sql package에 DriverManager 클래스의 getConnection() 메소드를 이용한다. 

   ```java
   Connection conn = DriverManager.getConnection(url, user, pw);
   ```

   String url: 접속할 서버의 URL이며, 프로토콜, 서버 IP, 서버 PORT, DB 이름으로 구성된다 .

   String user: DB Server에 로그인 할 계정

   String pw: DB Server에 로그인할 비밀번호

3. Statement 객체 생성

   여기서 다룰 것은 Statement 객체와 PreparedStatement 객체이다. 이 두 객체에 대해서는 Statement vs PreparedStatement.md에서 알아보자.

   Connection 객체인 conn을 Java Program과 DB 사이에 연결이 되었다면, 해당 연결을 통해 Java Program은 DB 쪽으로 SQL 문을 전송하고, DB는 처리된 결과를 다시 Java Program 쪽으로 전달을 해야하는데, 그 역할을 하는 객체가 Statement or PreparedStatement이다. 

   Statement 객체를 생성하려면 Connection 객체가 제공하는 createStatement() 메소드를 사용해야 한다. 

   ```java
   Statement stmt = conn.createStatement();
   ```

   PreparedStatement 객체는 Connection 객체가 제공하는 preparedStatement(sql) 메소드를 사용해야한다. 

   ```java
   PreparedStatement pstmt = conn.preparedStatement(sql);
   pstmt.setString(1, id);
   pstmt.setString(2, pw);
   ```

4. Query문 수행

   이 단계는 Statemnet 객체(or PreparedStatement 객체)를 이용하여 DB 서버로 SQL문을 전송하고 처리 결과를 받아오는 단계이다. 

   밑의 Code는 DB에서 Select 문을 수행한 결과값을 다룬다. 

   ```java
   String sql = "select * from board_member";
   ResultSet rs = stmt.executeQuery(sql);
   ```

   밑의 Code는 Update, Delete, Insert을 수행한 결과값을 다룬다. 

   ```
   String sql = "insert into board_member(userid, userpw, username) values(?, ?, ?)";
   ResultSet rs = stmt.executeUpdate(sql);
   ```

5. Result 객체로부터 데이터 추출

   executeQuery() 메소드는 결과로 ResultSet을 반환한다. 이 ResultSet으로부터 원하는 데이터를 추출하는 과정을 하는 단계이다. 

   데이터를 추출하는 방법은 ResultSet에서 한 행(row)씩 이동하면서 getXxx()를 이용해서 원하는 필드 값을 추출한다. 

   ```java
   if(rs.next()) { // 결과가 1개인 경우
   	username = rs.getString(1);    
   }
   
   while(rs.next()) { // 결과가 2개 이상인 경우
   	username = rs.getString(1);
       age = rs.getInt(2);
   }
   ```

6. 자원해제 

   이전가지 DB 관련처리 작업들을 하면서 Connection, Statement or PreparedStatement, ResultSet 객체들을 사용하였다. 

   해당 객체들을 이용하여 DB 관련 처리가 완료된 다음에는 사용했던 객체들을 메모리에서 Release 시켜주어야 한다. Release 순서는 객체를 생성했던 역순으로 진행된다. 

   ```java
   rs.close(); 
   stmt.close(); // 이것과 밑의 줄 pstmt.close() 중 하나만 하면 된다
   pstmt.close();
   conn.close();
   ```

   