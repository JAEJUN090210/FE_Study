function buttonClick_scissors() {
  let input = "가위";
  main(input);
} // 사용자가 '가위' 버튼을 눌렀을 때 실행

function buttonClick_rock() {
  let input = "바위";
  main(input);
} // 사용자가 '바위' 버튼을 눌렀을 때 실행

function buttonClick_paper() {
  let input = "보";
  main(input);
} // 사용자가 '보' 버튼을 눌렀을 때 실행

function main(input) {
  const randomList = ["가위", "바위", "보"];
  let random = randomList[Math.floor(Math.random() * 3)];

  if (input == random) {
    alert('상대방은 "' + random + '" 를 냈습니다. \n무승부');
  } else if (input == "가위") {
    if (random == "바위") {
      lose(random);
    } else if (random == "보") {
      win(random);
    }
  } else if (input == "바위") {
    if (random == "가위") {
      win(random);
    } else if (random == "보") {
      lose(random);
    }
  } else if (input == "보") {
    if (random == "가위") {
      lose(random);
    } else if (random == "바위") {
      win(random);
    }
  } else {
    alert("error");
  }
} // 입력 받은 문자열과 랜덤으로 생성한 문자열 비교

function win(random) {
  alert('상대방은 "' + random + '" 를 냈습니다. \n승리');
}

function lose(random) {
  alert('상대방은 "' + random + '" 를 냈습니다. \n패배ㅋ');
}
