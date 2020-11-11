player_1 = document.getElementById("Player_1");
player_2 = document.getElementById("Player_2");

player1_score = 0;
player2_score = 0;

add = document.getElementById("btn1");
sub = document.getElementById("btn2");
mult = document.getElementById("btn3");
divi = document.getElementById("btn4");

var operation = "";

function Send(){
    number1 = document.getElementById("no1").value;
    number2 = document.getElementById("no2").value;
    if(add.clicked == true) {
        actual_ans = parseInt(number1) + parseInt(number2);
        question_number1 = "<h4>" + number1 + "x" + number2 + "</h4>";
        input_box = "<br> Answer : <input type='number' id='input_check_box'>";
        check_button = "<br><br> <button class='btn btn-primary' onclick='Check()'> Check </button>";
        row = question_number1 + input_box + check_button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("no1").innerHTML = "";
        document.getElementById("no2").innerHTML = "";
    } 
}

function Add(){
operation = "Addition";
console.log("Addition");
Send();
}