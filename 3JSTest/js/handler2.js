let p1;

function Person(name, email, comments) {
    this.name = name;
    this.email = email;
    this.comments = comments;
}

Person.prototype.returnValue = function () {
    return this.name + " " + this.email + " " + this.comments;

}

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

$(document).ready(function () {

    /* 기존에 btn_send를 누르면 이루어지는 행위
    $("#btn_send").on("click", function () {
        let name = $("#name").val();
        let email = $("#email").val();
        let comments = $("comments").val();
        p1 = new Person(name, email, comments);
        
        $("#subscribeEmail").val(email);

        $("#contact_div").html("<h1>" + name + "님 환영합니다!</h1>");
    });
    */

    $("#btn_send").click(function () {
        const name_ = $("#name").val();
        const email_ = $("#email").val();
        const comments_ = $("#comments").val();
        let sendData = { // 객체
            name: name_, // 변수 : 값
            email: email_,
            comments: comments_
        };
        $.post("http://70.12.50.51:3000/member_insert",
            sendData,
            function (data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            }
        );
        // $안에 있는 post 함수 사용하며
        // URL로 접근해서 myJSON을 post 방식을 넘겨주며 
        // post의 2번째 인자에는 JS의 객체를 넣어준다. jQuery의 함수들 그렇게 만들어놨으니까
        // callback 함수로 alert 수행
    });


    /* 기존에 subscribe_btn 누르면 이루어지는 행위
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
    */

    $("#subscribe_btn").click(function () {
        let login_id = $("#subscribeEmail").val();
        alert(login_id);
        $.post("http://70.12.50.51:3000/login",
            {
                email: login_id
            }, function (data, status) {
                alert("Data: " + data + "\nStatus: " + status);
                let dataJSON = JSON.parse(data);
                $("#subscribeIcon").html(dataJSON.msg);
            });
    });

    $("#search_btn").click(function () {
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

    $("#powerIcon").click(function () { // window.$ = jQuery = window.jQuery
        window.open("./car_info.html", "_blank", "width=1000, height=500");
    });

    $("#loveIcon").click(function () {
        window.open("./loveButton.html", "_blank", "width = 1000, height = 500");
    });

    /*
     2019.06.14 second 부분과 관련
    $("#love_search_btn").click(function() {
        loadDoc();
    });
    */

    $("#love_search_btn").click(function () {
        // JSON.parse(data)는 String -> JSON
        // JSON.stringify(data)는 JSON -> String
        const name = $("#ajax_test_name").val();
        $.get("http://70.12.50.51:3000/hello?name=" + name, function (data, status) {
            let myObj = JSON.parse(data);
            $("#love_rs").html("<h1 style = 'color: red'>Data: " + myObj.msg + "\nStatus: " + status + "</h1>");
            // $("#love_rs").html("Data: " + data + "\nStatus: " + status);
        });
    });
});
