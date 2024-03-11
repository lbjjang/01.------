// checkBox selec All
function checkBoxAll(selAll)  {
  var checkName = selAll.getAttribute('name');
  const checkBoxes = document.getElementsByName(checkName);  
  checkBoxes.forEach((checkbox) => {
    checkbox.checked = selAll.checked;
  })
}


const checkCheckBox = document.querySelectorAll("input[type='checkbox']");
checkCheckBox.forEach((ele) => {
  if(ele.checked){
    ele.parentElement.classList.add('checked');
  }  
  ele.addEventListener('click', (e) => {
    if(ele.checked){
      ele.parentElement.classList.add('checked');
    } else{
      ele.parentElement.classList.remove('checked');
    }
  });
});


const checkRadioBox = document.querySelectorAll("input[type='radio']");
checkRadioBox.forEach((ele) => {
  if(ele.checked){
    ele.parentElement.classList.add('checked');
  }  
  ele.addEventListener('click', (e) => {
    if(ele.checked){
      ele.parentElement.classList.add('checked');
    } else{
      ele.parentElement.classList.remove('checked');
    }
  });
});




//체크박스 박스 라인
function checkBoxLine(selCheckLine){
  if(selCheckLine.checked){
    selCheckLine.parentElement.classList.add('checked');
  } else{
    selCheckLine.parentElement.classList.remove('checked');
  }
}


// 애니메이션 클래스 추가
const options = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: .5,  // 50%가 viewport에 들어와 있어야 callback 실행
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("moAni");
    } else {
      entry.target.classList.remove("moAni");
    }
  });
}, options);
const titleList = document.querySelectorAll('.motion');
// 반복문을 돌려 모든 DOM에 적용
titleList.forEach(el => observer.observe(el));

//팝업
function popUp(name){
  document.querySelector('.dimmed.off').classList.remove('off');
  document.querySelector('.dimmed').classList.add('on');
  var popTarget = document.querySelectorAll('.popup');
  for(var i = 0; i < popTarget.length; i++ ){
    if(popTarget[i].getAttribute('poptarget') === name){
      popTarget[i].classList.remove('off');
      popTarget[i].classList.add('on');
    }
  }
}

function popUpClose(){
  document.querySelector('.popup.on').classList.add('off');
  document.querySelector('.dimmed.on').classList.add('off');
  setTimeout(function(){ 
    document.querySelector('.dimmed.on').classList.remove('on');
    document.querySelector('.popup.on').classList.remove('on');
  },600);
}

window.onload = function(){
  //fixed 버튼 있는 화면일때는 container padding-bottom:값을 추가한다
  if(document.querySelector(".fixedBox") != null){
    document.querySelector('.container').classList.add('fxb');
    document.querySelector('.container').style.paddingBottom = document.querySelector('.fixedBox').offsetHeight + 'px';
  }
  //header 가 있는 화면일때는 container padding-top:값을 추가한다

  if(document.querySelector("header") != null){
    document.querySelector('html').style.height = '100%';
    document.querySelector('body').style.height = '100%';
    document.querySelector('.container').classList.add('hd');
    if(document.querySelector(".conBoxTop") != null){
      var conBoxH = document.querySelector('.conBoxTop').offsetHeight;
      document.querySelector('.container').classList.add('cbt' + conBoxH);
    }
    if(document.querySelector(".fixedBoxTop") != null){
      console.log(document.querySelector('header').offsetHeight);
      console.log(document.querySelector('.fixedBoxTop').offsetHeight);
      document.querySelector('.container').style.paddingTop = document.querySelector('header').offsetHeight + document.querySelector('.fixedBoxTop').offsetHeight + 'px';
    }
    //  else if(document.querySelector(".conBoxTop") != null){
    //   console.log(111);
    //   console.log(document.querySelector('header').offsetHeight);
    //   console.log(document.querySelector('.conBoxTop').offsetHeight);
    //   document.querySelector('.container').style.paddingTop = document.querySelector('header').offsetHeight + document.querySelector('.conBoxTop').offsetHeight + 'px';
    // }
     else{
      document.querySelector('.container').style.paddingTop = document.querySelector('header').offsetHeight + 'px';  
    }
  }
}



//로그인 - 서비스소개 페이지 롤링
// 롤링 배너 복제본 생성
if(document.querySelector(".rollList") != null){
  let roller01 = document.querySelector('.slide01 .rollList');
  roller01.id = 'roller1'; // 아이디 부여

  let clone01 = roller01.cloneNode(true)
  // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
  clone01.id = 'roller2';
  document.querySelector('.rollWrap.slide01').appendChild(clone01); // wrap 하위 자식으로 부착

  document.querySelector('.slide01 #roller1').style.left = '0px';
  document.querySelector('.slide01 #roller2').style.left = document.querySelector('.slide01 .rollList ul').offsetWidth + 'px';
  // offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

  roller01.classList.add('original');
  clone01.classList.add('clone');


  let roller02 = document.querySelector('.slide02 .rollList');
  roller02.id = 'roller1'; // 아이디 부여

  let clone02 = roller02.cloneNode(true)
  // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
  clone02.id = 'roller2';
  document.querySelector('.rollWrap.slide02').appendChild(clone02); // wrap 하위 자식으로 부착

  document.querySelector('.slide02 #roller1').style.left = '0px';
  document.querySelector('.slide02 #roller2').style.left = document.querySelector('.slide02 .rollList ul').offsetWidth + 'px';
  // offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

  roller02.classList.add('original');
  clone02.classList.add('clone');
}


// 아코디언 메뉴
if(document.querySelector(".accordionCon") != null){
  if(document.querySelector(".empty") == null){
    const accordionContent = document.querySelectorAll(".accordionCon li"); 
    accordionContent.forEach((item,index)=>{ 
        let accTop = item.querySelector(".accTop"); 
        accTop.addEventListener("click", ()=>{ 
          console.log(111);
            item.classList.toggle("open"); 
      
            let accBottom = item.querySelector(".accBottom"); 
            if(item.classList.contains("open")){ 
              accBottom.style.height=`${accBottom.scrollHeight}px`;  
                // item.querySelector("i").classList.replace("fa-plus","fa-minus"); 
            }else{ 
              accBottom.style.height = "0px"; 
                // item.querySelector("i").classList.replace("fa-minus","fa-plus"); 
            } 
            removeOpenedContent(index);  
        }) 
    }) 
    function removeOpenedContent(index){ 
      accordionContent.forEach((item2,index2)=>{ 
        if(index != index2){ 
          item2.classList.remove("open"); 
          let accBottom02 = item2.querySelector(".accBottom"); 
          accBottom02.style.height="0px"; 
          // item2.querySelector("i").classList.replace("fa-minus","fa-plus"); 
        } 
      }) 
    }
  
  }  
}
  

//탭 스크립트 (웹접근성)
if(document.querySelector(".tabs") != null){
  //tab 스크립트 (웹접근성)
  var tablist = document.querySelectorAll('[role="tablist"]')[0];
  var tabs;
  var panels;
  var delay = determineDelay();

  generateArrays();

  function generateArrays () {
    tabs = document.querySelectorAll('[role="tab"]');
    panels = document.querySelectorAll('[role="tabpanel"]');
  };

  // 키보드 키
  var keys = {
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    delete: 46
  };

  // 방향키에 따라 덧셈 뺄셈
  var direction = {
    37: -1,
    38: -1,
    39: 1,
    40: 1
  };

  // 탭 바인딩
  for (i = 0; i < tabs.length; ++i) {
    addListeners(i);
  };

  function addListeners (index) {
    tabs[index].addEventListener('click', clickEventListener);
    tabs[index].addEventListener('keydown', keydownEventListener);
    tabs[index].addEventListener('keyup', keyupEventListener);

    // 탭 할때 클릭, 키 리스너 등록
    tabs[index].index = index;
  };

  // 탭 클릭시 활성화
  function clickEventListener (event) {
    var tab = event.target;
    activateTab(tab, false);
  };

  // 탭 - 키보드 동작
  function keydownEventListener (event) {
    var key = event.keyCode;

    switch (key) {
      case keys.end:
        event.preventDefault();
        // 마지막 탭 활성화 (end 버튼)
        activateTab(tabs[tabs.length - 1]);
        break;
      case keys.home:
        event.preventDefault();
        // 첫번째 탭 활성화 (home 버튼)
        activateTab(tabs[0]);
        break;

      //키보드 방향키 위, 아래 입력시 스크롤 이동 방지
      case keys.up:
      case keys.down:
        determineOrientation(event);
        break;
    };
  };

  function keyupEventListener (event) {
    var key = event.keyCode;

    switch (key) {
      case keys.left:
      case keys.right:
        determineOrientation(event);
        break;
      case keys.delete:
        determineDeletable(event);
        break;
    };
  };


  function determineOrientation (event) {
    var key = event.keyCode;
    var vertical = tablist.getAttribute('aria-orientation') == 'vertical';
    var proceed = false;

    if (vertical) {
      if (key === keys.up || key === keys.down) {
        event.preventDefault();
        proceed = true;
      };
    }
    else {
      if (key === keys.left || key === keys.right) {
        proceed = true;
      };
    };
    if (proceed) {
      switchTabOnArrowPress(event);
    };
  };

  // 키코드에 따른 포거스 맞추기
  function switchTabOnArrowPress (event) {
    var pressed = event.keyCode;

    for (x = 0; x < tabs.length; x++) {
      tabs[x].addEventListener('focus', focusEventHandler);
    };

    if (direction[pressed]) {
      var target = event.target;
      if (target.index !== undefined) {
        if (tabs[target.index + direction[pressed]]) {
          tabs[target.index + direction[pressed]].focus();
        }
        else if (pressed === keys.left || pressed === keys.up) {
          focusLastTab();
        }
        else if (pressed === keys.right || pressed == keys.down) {
          focusFirstTab();
        };
      };
    };
  };

  // 탭에 따른 패널 활성화
  function activateTab (tab, setFocus) {
    setFocus = setFocus || true;
    // 탭 비활성화
    deactivateTabs();

    // tabindex 삭제
    tab.removeAttribute('tabindex');

    // 선택된 탭 attr 설정
    tab.setAttribute('aria-selected', 'true');
    tab.classList.add('on');

    // aria-controls값 가져오기
    var controls = tab.getAttribute('aria-controls');

    // 탭패널에 속성 제거
    document.getElementById(controls).removeAttribute('hidden');

    // Set focus when required
    if (setFocus) {
      tab.focus();
    };
  };

  // 탭 비활성화
  function deactivateTabs () {
    for (t = 0; t < tabs.length; t++) {
      tabs[t].classList.remove('on');
      tabs[t].setAttribute('tabindex', '-1');
      tabs[t].setAttribute('aria-selected', 'false');
      tabs[t].removeEventListener('focus', focusEventHandler);
    };

    for (p = 0; p < panels.length; p++) {
      panels[p].setAttribute('hidden', 'hidden');
    };
  };

  // 첫번째 탭에 포커스
  function focusFirstTab () {
    tabs[0].focus();
  };

  // 마지막 탭에 포커스
  function focusLastTab () {
    tabs[tabs.length - 1].focus();
  };

  function determineDeletable (event) {
    target = event.target;
    if (target.getAttribute('data-deletable') !== null) {
      deleteTab(event, target);
      generateArrays();
      if (target.index - 1 < 0) {
        activateTab(tabs[0]);
      }
      else {
        activateTab(tabs[target.index - 1]);
      };
    };
  };

  // 탭, 패널 삭제
  function deleteTab (event) {
    var target = event.target;
    var panel = document.getElementById(target.getAttribute('aria-controls'));

    target.parentElement.removeChild(target);
    panel.parentElement.removeChild(panel);
  };

  // 방향키 사용시 딜레이 확인
  function determineDelay () {
    var hasDelay = tablist.hasAttribute('data-delay');
    var delay = 0;

    if (hasDelay) {
      var delayValue = tablist.getAttribute('data-delay');
      if (delayValue) {
        delay = delayValue;
      }
      else {
        delay = 300;
      };
    };
    return delay;
  };

  //
  function focusEventHandler (event) {
    var target = event.target;
    setTimeout(checkTabFocus, delay, target);
  };

  // 딜레이 후에도 포커스가 있을 경우 포커스 탭 활성화
  function checkTabFocus (target) {
    focused = document.activeElement;

    if (target === focused) {
      activateTab(target, false);
    };
  };
};


// selectBox 커스텀
const label = document.querySelectorAll('.selectList .label');
label.forEach(function(lb){
    lb.addEventListener('click', e => {
        let optionList = lb.nextElementSibling;
        let optionItems = optionList.querySelectorAll('.optionList .option');
        clickLabel(lb, optionItems);
    })
});
const clickLabel = (lb, optionItems) => {
    if(lb.parentNode.classList.contains('active')) {
        lb.parentNode.classList.remove('active');
        optionItems.forEach((opt) => {            
          opt.removeEventListener('click', () => {
                handleSelect(lb, opt)
            })
        })
    } else {
        lb.parentNode.classList.add('active');
        optionItems.forEach((opt) => {
            opt.addEventListener('click', () => {
              if(opt.classList.contains('disabled')){
                console.log(11);
              } else{
                for (let i = 0; i < optionItems.length; i++) {    
                  optionItems[i].classList.remove('on')
                }                
                opt.classList.add('on')
                  handleSelect(lb, opt)
              }
            })
        })
    }
}
const handleSelect = (label, item) => {
    label.innerHTML = item.textContent;
    label.parentNode.classList.remove('active');
}













