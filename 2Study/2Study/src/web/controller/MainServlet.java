package web.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.RequestDispatcher;

import web.model.MemberDAO;

public class MainServlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("get 요청 처리");
		process(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("post 요청 처리");
		process(request, response);
	}
	
	protected void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		System.out.println("process....");
		String sign = request.getParameter("sign");
		if(sign != null) {
			if(sign.equals("login")) {
				
				String id = request.getParameter("id");
				String pw = request.getParameter("pw");
				// DB
				
				
				MemberDAO dao = new MemberDAO();
				
				try {
					String username = dao.login(id, pw);
					if(username != null) { // login OK
						HttpSession session = request.getSession();
						System.out.println(session.getId() + ": 열쇠를 배정");
						session.setAttribute("username", username);
						
						RequestDispatcher disp = request.getRequestDispatcher("index.jsp");
						disp.forward(request, response);
						
					} else { // login Fail
						RequestDispatcher disp = request.getRequestDispatcher("jsp/login_error.jsp");
						disp.forward(request, response);
					}
				} catch (Exception e) {
					// 개발 후에 지워야함!!!!!!!!!! (Debugging시 매우 유용)
					e.printStackTrace();
					RequestDispatcher disp = request.getRequestDispatcher("jsp/login_error.jsp");
					disp.forward(request, response);
				}
			} else if(sign.equals("logout")) {
				HttpSession session = request.getSession();
				session.invalidate();
				RequestDispatcher disp = request.getRequestDispatcher("index.jsp");
				disp.forward(request, response);
			} else if(sign.equals("member_insert")) {
				String id = request.getParameter("id");
				String pw = request.getParameter("pw");
				String name = request.getParameter("name");
				String email = request.getParameter("email");
				String url = request.getParameter("url");
				String gender = request.getParameter("gender" );
				String phone = request.getParameter("phone");
				String birth = request.getParameter("birth");
				String time = request.getParameter("time");
				String age = request.getParameter("age");
				String favorite = request.getParameter("favorite");
				String []hobby = request.getParameterValues("hobby");
				String country = request.getParameter("country");
				String filename = request.getParameter("filename");
				String description = request.getParameter("description");
				
				System.out.println("id = " + id);
				System.out.println("pw = " + pw);
				System.out.println("name = " + name);
				System.out.println("email = " + email);
				System.out.println("url = " + url);
				System.out.println("gender = " + gender);
				System.out.println("phone = " + phone);
				System.out.println("birth = " + birth);
				System.out.println("time = " + time);
				System.out.println("age = " + age);
				System.out.println("favorite = " + favorite);
				System.out.println("hobby = " + hobby);
				System.out.println("country = " + country);
				System.out.println("filename = " + filename);
				System.out.println("description = " + description);
				
				MemberDAO dao = new MemberDAO();
				try {
					dao.inertMember(id, pw, name);
					RequestDispatcher disp = request.getRequestDispatcher("jsp/member_insert_ok.jsp");
					disp.forward(request, response);
				} catch(Exception e) {
					e.printStackTrace();
					RequestDispatcher disp = request.getRequestDispatcher("jsp/error.jsp");
					disp.forward(request, response);}
				
				
			}
		} else {
			// 침해 대응
		}
	}
	
}
