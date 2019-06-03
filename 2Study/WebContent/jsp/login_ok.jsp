<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<jsp:include page="header.jsp"></jsp:include>

		<tr><td width="20%">
			${username}님 환영합니다
			<ul>
				<li><a href="/2Study/jsp/audio_video.jsp">오디오/비디오</a></li>
				<li><a href="/2Study/jsp/iframe.jsp">외부요소 연결</a></li>
			</ul> 
			</td>

<jsp:include page="content.jsp"></jsp:include>

<jsp:include page="copyright.jsp"></jsp:include>