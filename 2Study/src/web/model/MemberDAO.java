package web.model;

import java.sql.*;

public class MemberDAO {
	public String login(String id, String pw) throws Exception { // 예외처리 
		Connection con = null;
		PreparedStatement stmt = null;
		ResultSet rs = null;
		String username = null;
		try {
			// 1. setup: Driver 찾기
			Class.forName("com.mysql.jdbc.Driver");
			// 2. connection
			String url = "jdbc:mysql://192.168.111.129:3306/openeg1"; // ubuntu ip:port/sql table(-v로 묶여있음)
			String db_user = "root";
			String db_pw = "apmsetup";
			con = DriverManager.getConnection(url, db_user, db_pw);
			// 3. protocol check 쿼리를 날리는 편지지 역할
			String sql = "select username from board_member"+" where userid=? and userpw=?";
			stmt = con.prepareStatement(sql);
			// 4. query
			stmt.setString(1, id);
			stmt.setString(2, pw);
			rs = stmt.executeQuery();
			// int i = stmt.executeQuery();
			// System.out.println(i + "행이 insert 되었습니다. ");
			// 5. result check
			if(rs.next()) { // username이 있는 경우
				username = rs.getString(1);
				return username;
			} else {
				return null;
			}
		} finally {
			// 6. resource release
			rs.close();
			stmt.close();
			con.close();
		}
	}

	public void inertMember(String id, String pw, String name) throws Exception { // 회원가입 처리
		Connection con = null;
		PreparedStatement stmt = null;
//		try {
			// 1. setup: Driver 찾기
			Class.forName("com.mysql.jdbc.Driver");
			// 2. connection
			String url = "jdbc:mysql://192.168.111.129:3306/openeg1"; // ubuntu ip:port/sql table(-v로 묶여있음)
			String db_user = "root";
			String db_pw = "apmsetup";
			con = DriverManager.getConnection(url, db_user, db_pw);
			// 3. protocol check 쿼리를 날리는 편지지 역할
			String sql = "insert into board_member(userid, userpw, username) values(?, ?, ?)";
			stmt = con.prepareStatement(sql);
			// 4. query
			stmt.setString(1, id);
			stmt.setString(2, pw);
			stmt.setString(3, name);

			int i = stmt.executeUpdate();
			System.out.println(i + "행이 insert 되었습니다. ");
			
		} /* finally {
			// 6. resource release
			stmt.close();
			con.close();
		} 
	} */
}
