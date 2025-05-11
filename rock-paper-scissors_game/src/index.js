function buttonClick() {
  const randomList = ["가위", "바위", "보"];
  let random = randomList[Math.floor(Math.random() * 3)];

  const input = prompt("", "가위, 바위, 보");

  if (input == random) {
    alert('상대방은 "' + random + '" 를 냈습니다. \n무승부');
  } else if (input == "가위") {
    if (random == "바위") {
      alert('상대방은 "' + random + '" 를 냈습니다. \n패배ㅋ');
    } else if (random == "보") {
      alert('상대방은 "' + random + '" 를 냈습니다. \n승리');
    }
  } else if (input == "바위") {
    if (random == "가위") {
      alert('상대방은 "' + random + '" 를 냈습니다. \n승리');
    } else if (random == "보") {
      alert('상대방은 "' + random + '" 를 냈습니다. \n패배ㅋ');
    }
  } else if (input == "보") {
    if (random == "가위") {
      alert('상대방은 "' + random + '" 를 냈습니다. \n패배ㅋ');
    } else if (random == "바위") {
      alert('상대방은 "' + random + '" 를 냈습니다. \n승리');
    }
  } else {
    alert("error");
  }
}
