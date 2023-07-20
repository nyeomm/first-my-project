const startPage = document.querySelector(".startSpan");
const realStart = document.querySelector("#realStart");
const fakeStart = document.querySelector("#fakeStart");

const allStage = document.querySelector("#stage");
const failDiv = document.querySelector("#fail");
const stage1 = document.querySelector("#stage1");

let submitNumber = 0;



//stage1 버튼 생성
function onClickRealStart() {
    startPage.classList.add("hidden");
    stage1.classList.add("stage1");


    const stageOne1 = document.createElement("button");
    stageOne1.innerText = "어";
    stage1.appendChild(stageOne1);

    const stageOne2 = document.createElement("button");
    stageOne2.innerText = "디";
    stage1.appendChild(stageOne2);
    
    const stageOne3 = document.createElement("button");
    stageOne3.innerText = "일";
    stage1.appendChild(stageOne3);

    const stageOne4 = document.createElement("button");
    stageOne4.innerText = "까";
    stage1.appendChild(stageOne4);

    stageOne1.addEventListener("click", onClickStageOne1);
    stageOne2.addEventListener("click", onClickFake);
    stageOne3.addEventListener("click", onClickFake);
    stageOne4.addEventListener("click", onClickFake);

}

function onClickFake() {
    allStage.classList.add("hidden");

    document.body.classList.add("fail");
    const fail = document.querySelector("#fail");
    const failMessage = document.createElement("string");
    failDiv.appendChild(failMessage);
    failMessage.innerText = "OMG...";
    failMessage.classList.add("failMessage");

    submitNumber = submitNumber + 1;
}


realStart.addEventListener("click", onClickRealStart);
fakeStart.addEventListener("click", onClickFake);







//----stage2--------------------------------------------------------------//

const stage2 = document.querySelector("#stage2");


function onClickStageOne1() {
    stage1.classList.add("hidden");
    stage2.classList.remove("hidden");
    stage2.classList.add("stage1");

    const stageTwo1 = document.createElement("button");
    stageTwo1.innerText = "한";
    stage2.appendChild(stageTwo1);

    const stageTwo2 = document.createElement("button");
    stageTwo2.innerText = "번";
    stage2.appendChild(stageTwo2);
    
    const stageTwo3 = document.createElement("button");
    stageTwo3.innerText = "더";
    stage2.appendChild(stageTwo3);

    const stageTwo4 = document.createElement("button");
    stageTwo4.innerText = "가";
    stage2.appendChild(stageTwo4);

    const stageTwo5 = document.createElement("button");
    stageTwo5.innerText = "자";
    stage2.appendChild(stageTwo5);

    const stageTwo6 = document.createElement("button");
    stageTwo6.innerText = "!";
    stage2.appendChild(stageTwo6);

    stageTwo2.addEventListener("click", onClickStageTwo2);
    stageTwo1.addEventListener("click", onClickFake);
    stageTwo3.addEventListener("click", onClickFake);
    stageTwo4.addEventListener("click", onClickFake);
    stageTwo5.addEventListener("click", onClickFake);
    stageTwo6.addEventListener("click", onClickFake);

}


//-------success--------------------------------------------------------
const success = document.querySelector("#success");


function onClickRetry() {
    submitNumber = 0;
    location.reload();
}

function onClickStageTwo2() {
    stage2.classList.add("hidden");
    success.classList.remove("hidden");
    document.body.classList.add("successBody");
    
    const successMessage = document.createElement("string");
    successMessage.innerText = "올ㅋ 성공";
    successMessage.classList.add("successMessage");
    success.appendChild(successMessage);
    
    const tryNumber = document.createElement("h3");
    tryNumber.innerText = `총 ${submitNumber}번 새로고침함`;
    success.appendChild(tryNumber);
    
    const retry = document.createElement("h3");
    retry.innerText = "다시하기(왜...?)";
    success.appendChild(retry);
    retry.addEventListener("click", onClickRetry);

    console.log(submitNumber);
}

