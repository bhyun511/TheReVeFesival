// 마우스오버 될 시의 이벤트를 발생 시켜줍니다.
// 만약 이벤트 타켓으로 선택한 태그네임이 li가 맞다면 
// 같은 모두 가져와 li를 배열로 바꿔준 뒤
// 내가 선택한 li의 인덱스 값을 얻습니다.
// 콘솔창에서 내가 선택한 번호를 확인함
// 마우스 오버했을때의 max 폰트 사이즈 값을 지정해 줍니다.
var audio = document.getElementById('audio_play'); 

addEventListener("mouseover", function(event){
	if(event.target.tagName === "LI"){
	  li = Array.from(event.target.parentElement.children);
    index = li.indexOf(event.target)
  	// console.log("index : ", index);
    Max_Font = 65;
    
    // for문을 사용하여 i가 0이고 16과 같거나 작고 (li.length 를 사용해도 된다) i는 증가한다.
    // 지정해둔 max의 값에 -4 곱하기 i를 해준다.
    // 내가 선택한 번호보다 앞의 숫자는 각각의 인덱스 값에 + i를 해주고
    // 내가 선택한 번호보다 뒤의 숫자는 각각의 인덱스 값에 - i를 해줍니다.
    // 만약 front 나 back 일시에 폰트 사이즈에 + "px"을 하여 적용 시켜줍니다.
    // 마지막으로 다시 리턴시켜줍니다.
    for(let i = 0; i <= 16; i++){
    	fontSize = Max_Font - 4 * i;
      front = li[index + i];
      back = li[index - i];
      if(front){
        front.style.fontSize = fontSize + "px";
      }
      if(back){
        back.style.fontSize = fontSize + "px";
      }
    	if(!(front || back)) return;
    }
  }
});


/* 음악 재생을 위한 코드 */
// 우선 각각의 오디오를 가져와 변수를 지정해줍니다
var audio1 = document.getElementById('play1'),
    audio2 = document.getElementById('play2'),
    audio3 = document.getElementById('play3'),
    audio4 = document.getElementById('play4'),
    audio5 = document.getElementById('play5'),
    audio6 = document.getElementById('play6'),
    audio7 = document.getElementById('play7'),
    audio8 = document.getElementById('play8'),
    audio9 = document.getElementById('play9'),
    audio10 = document.getElementById('play10'),
    audio11 = document.getElementById('play11'),
    audio12 = document.getElementById('play12'),
    audio13 = document.getElementById('play13'),
    audio14 = document.getElementById('play14'),
    audio15 = document.getElementById('play15'),
    audio16 = document.getElementById('play16');

// 만약 오디오가 꺼져있다면 플레이하고
// 그렇지 않다면 끄도록 했습니다.
// 꺼지며 노래는 다시 처음으로 돌아가도록 했습니다.
function play1() { 
    if (audio1.paused) { 
        audio1.play(); 
    }else{ 
        audio1.pause(); 
        audio1.currentTime = 0 
    } 
}
function play2() { 
  if (audio2.paused) { 
      audio2.play(); 
  }else{ 
      audio2.pause(); 
      audio2.currentTime = 0 
  } 
}
function play3() { 
  if (audio3.paused) { 
      audio3.play(); 
  }else{ 
      audio3.pause(); 
      audio3.currentTime = 0 
  } 
}
function play4() { 
  if (audio4.paused) { 
      audio4.play(); 
  }else{ 
      audio4.pause(); 
      audio4.currentTime = 0 
  } 
}
function play5() { 
  if (audio5.paused) { 
      audio5.play(); 
  }else{ 
      audio5.pause(); 
      audio5.currentTime = 0 
  } 
}
function play6() { 
  if (audio6.paused) { 
      audio6.play(); 
  }else{ 
      audio6.pause(); 
      audio6.currentTime = 0 
  } 
}
function play7() { 
  if (audio7.paused) { 
      audio7.play(); 
  }else{ 
      audio7.pause(); 
      audio7.currentTime = 0 
  } 
}
function play8() { 
  if (audio8.paused) { 
      audio8.play(); 
  }else{ 
      audio8.pause(); 
      audio8.currentTime = 0 
  } 
}
function play9() { 
  if (audio9.paused) { 
      audio9.play(); 
  }else{ 
      audio9.pause(); 
      audio9.currentTime = 0 
  } 
}
function play10() { 
  if (audio10.paused) { 
      audio10.play(); 
  }else{ 
      audio10.pause(); 
      audio10.currentTime = 0 
  } 
}
function play11() { 
  if (audio11.paused) { 
      audio11.play(); 
  }else{ 
      audio11.pause(); 
      audio11.currentTime = 0 
  } 
}
function play12() { 
  if (audio12.paused) { 
      audio12.play(); 
  }else{ 
      audio12.pause(); 
      audio12.currentTime = 0 
  } 
}
function play13() { 
  if (audio13.paused) { 
      audio13.play(); 
  }else{ 
      audio13.pause(); 
      audio13.currentTime = 0 
  } 
}
v
function play14() { 
  if (audio14.paused) { 
      audio14.play(); 
  }else{ 
      audio14.pause(); 
      audio14.currentTime = 0 
  } 
}
function play15() { 
  if (audio15.paused) { 
      audio15.play(); 
  }else{ 
      audio15.pause(); 
      audio15.currentTime = 0 
  } 
}
function play16() { 
  if (audio16.paused) { 
      audio16.play(); 
  }else{ 
      audio16.pause(); 
      audio16.currentTime = 0 
  } 
}