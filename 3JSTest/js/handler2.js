let p1;

function Person(name, email, comments) {
    this.name = name;
    this.email = email;
    this.comments = comments;
}

Person.prototype.returnValue = function () {
    return this.name + " " + this.email + " " + this.comments;

}

$(document).ready(function () {
    $("#btn_send").on("click", function () {
        let name = $("#name").val();
        let email = $("#email").val();
        let comments = $("comments").val();
        p1 = new Person(name, email, comments);
        
        $("#subscribeEmail").val(email);

        $("#contact_div").html("<h1>" + name + "님 환영합니다!</h1>");
    });

    $("#subscribe_btn").click(function () {
        let subEmail = $("#subscribeEmail").val();
        if (subEmail == p1.email) {
            const subscribeIcon = $("#subscribeIcon");
            const subscribe_btn = $("#subscribe_btn");
            subscribeIcon.html(p1.name + " 환영합니다. ");
            subscribeIcon.css("color", "red");
            subscribeIcon.css("fontsize", "20px");
            subscribe_btn.html("Log Out");
            subscribe_btn.attr("onclick", "location.reload()");
        }
    });
    
    $("#search_btn").click(function() {
        let btnGrpVal = $("#select_menu").val();
        let carNumVal = $("#carNum").val();
        let imgSrc = $("#img_div");
        if (btnGrpVal == 1) { // 조회타입
            alert("Select others");
        } else if (btnGrpVal == 2 || btnGrpVal == 3) { // 차량번호 || 차대번호
            alert(carNumVal);
            imgSrc.html("<table border = 1 width = '1000px'>\
            <tr><th>제조사</th><th>자동차명</th><th>배기량</th><th>사용연료</th>\
            <th>연식</th><th>차체형상</th><th>용도 및 차종</th><th>최초 보험 가입일자</th></tr>\
            <tr><td>아우디</td><td>A5</td><td>2,972cc</td><td>가솔린</td>\
            <td>2019</td><td>4도어 세단</td><td>자가용</td><td>2019.01.01</td></tr>\
            </table>");
        }
    });

    $("#powerIcon").click(function() { // window.$ = jQuery = window.jQuery
        window.open("./car_info.html", "_blank", "width=1000, height=500");
    });
    
    $("#loveIcon").click(function() {
        window.open("./loveButton.html", "_blank", "width = 1000, height = 500");
    });
});