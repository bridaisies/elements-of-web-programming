function gradeQuiz() {
    var quiz = document.getElementById("quiz");
    var cnt = 0;
    var a;

    var q1 = document.getElementsByName("q1");
    if(!q1[0].checked && !q1[1].checked) {
        window.alert("Please answer all questions.");
        return;
    }
    if(q1[1].checked) {
        cnt++;
    }

    var q2 = document.getElementsByName("q2");
    if(!q2[0].checked && !q2[1].checked) {
        window.alert("Please answer all questions.");
        return;
    }
    if(q2[0].checked) {
        cnt++;
    }

    var q3 = document.getElementsByName("q3");
    var q3ans = [];
    for(a of q3) {
        if(a.checked) q3ans.push(a.value);
    }
    if(q3ans.length == 0) {
        window.alert("Please answer all questions.");
        return;
    }
    if(q3ans == "b") {
        cnt++;
    }

    var q4 = document.getElementsByName("q4");
    var q4ans = [];
    for(a of q4) {
        if(a.checked) q4ans.push(a.value);
    }
    if(q4ans.length == 0) {
        window.alert("Please answer all questions.");
        return;
    }
    if(q4ans == "c") {
        cnt++;
    }

    var q5 = document.getElementsByName("q5");
    if(q5[0].value.length == 0) {
        window.alert("Please answer all questions.");
        return;
    }

    var q6 = document.getElementsByName("q6");
    if(q6[0].value.toLowerCase().trim() == "favicon") {
        cnt++;
    }

    window.alert("Your grade is "+ cnt + "/6");
    return;
}

