'use strict';

//Element Select start here
// button selector
const submtBtnElm = document.querySelector('.submitBtnElm');
const player1BtnElm = document.querySelector('.p1BtnElm');
const player2BtnElm = document.querySelector('.p2BtnElm');
const resetBtnElm = document.querySelector('.resetBtnElm');
const btnBlockElm = document.querySelector('.btn-block');
const showingSuccessMess = document.querySelector('.successMessJs');
//input element start here
const inputBoxElm = document.querySelector('.inputElm');
const resiveInputForMainScore = document.querySelector('.mainSscoreElm');
// error message showing
const errorMessagesElm = document.querySelector('.errorMessages');
// score button start here
const player1ScoreElm = document.querySelector('#player1ScoreElm');
const player2ScoreElm = document.querySelector('#player2ScoreElm');

// disabled button start here
function p1_p2_btn_disabled()
{
    player1BtnElm.setAttribute('disabled','disabled');
    player2BtnElm.setAttribute('disabled','disabled');
}

// inable button start here
function p1_p2_btn_inabled()
{
    player1BtnElm.removeAttribute('disabled');
    player2BtnElm.removeAttribute('disabled');
}

// data layer store start here
let mainScore = 0;
let p1Score = 0;
let p2Score = 0;
let trun = 'player1';

// success message variable 
function dataLayer()
{
    resiveInputForMainScore.textContent = mainScore;
    player1ScoreElm.textContent = p1Score;
    player2ScoreElm.textContent = p2Score;
}
dataLayer();
// data layer end here 
submtBtnElm.addEventListener('click',(evt) => 
{
    evt.preventDefault();
   const getUserScoreFormInputBox =  resiveInputValueForMainScore();
    resetInputField();
    // form validation start here
    formValidation(getUserScoreFormInputBox);
    // when second time our user give input any value for playing then the game start will be again
    resetSubmitBtn(getUserScoreFormInputBox);
    // showingSuccessMess.style.display = 'none';
});
// just testing 
function resetSubmitBtn(userInputValue) 
{
    // data layer changing
    p1Score = 0;
    p2Score = 0;

    // view layer start here
    player1ScoreElm.textContent = p1Score;
    player2ScoreElm.textContent = p2Score;
    // just condition checking
    if(userInputValue >= 1)
    {
        p1_p2_btn_inabled();
    }
 
}
// reset button start here 
resetBtnElm.addEventListener('click',(evt) => 
{
    evt.preventDefault();
    // data layer 
    mainScore = 0;
    p1Score = 0;
    p2Score = 0;
    // view layer 
    resiveInputForMainScore.textContent = mainScore;
    player1ScoreElm.textContent = p1Score;
    player2ScoreElm.textContent = p2Score;
    // button inabled 
    p1_p2_btn_inabled();
    submtBtnElm.removeAttribute('disabled');
    // success message will remove now
    // ---------------- My problem is here now ---------------------//
    // --------------------------------------------------------
                  showingSuccessMess.remove();
    // --------------------------------------------------------
    // i need to solve this problem  
    // ---------------- My problem is here now ---------------------//
})
// button one start here 
player1BtnElm.addEventListener('click',(evt) => 
{   
    evt.preventDefault();
    button1Condition();   
});
// button one condition start here
function  button1Condition()
{
    if(trun === 'player1')
    {
        p1Score++;
        player1ScoreElm.textContent = p1Score;
        player1BtnElm.setAttribute('disabled','disabled');
        player2BtnElm.removeAttribute('disabled');
        trun = 'player2';
    }
    // success message start here
    player1SuccessMess();
}
// success message start here
function player1SuccessMess()
{
    // we alrady defined isP1Success and isp2Ssuccess variable onder the select value
    let isP1Success = p1Score === mainScore;
    let isP2Success = p2Score === mainScore;

   if(isP2Success)
   {
       const messages = `<div class="successMessage"> <h2>${'Player two is success'}</h2></div>`;
       showingSuccessMess.insertAdjacentHTML('beforeend', messages);
       p1_p2_btn_disabled();
       submtBtnElm.setAttribute('disabled','disabled');
   }else if(isP1Success)
   {
    const messages = `<div class="successMessage"> <h2>${'Player one is success'}</h2></div>`;
    showingSuccessMess.insertAdjacentHTML('beforeend', messages);
    p1_p2_btn_disabled();
    submtBtnElm.setAttribute('disabled','disabled');
   }
} 

// button two start here 
player2BtnElm.addEventListener('click',(evt) => 
{
    evt.preventDefault();
    button2Condition();
});

// button 2 condition start here
function button2Condition()
{
    if(trun === 'player2')
    {
        p2Score++;
        player2ScoreElm.textContent = p2Score;
        player2BtnElm.setAttribute('disabled','disabled');
        player1BtnElm.removeAttribute('disabled');
        trun = 'player1';
    }
}
// --------------------------------
//       part 1 start here 
// --------------------------------
// form validation start here 
function formValidation(userValue)
{
    if(userValue > 0)
    {
        cssStyleInErrorMess();
        errorMessagesElm.remove();
    }
    if(userValue <= 1 || !userValue )
    {
        errorMessagesElm.textContent = 'please fill up the input filed';
        // using css style in javaScript file
        cssStyleInErrorMess();
        p1_p2_btn_disabled();
    }
}
// using css style in javaScript file
function cssStyleInErrorMess()
{
    errorMessagesElm.style.marginLeft = '80px';
    errorMessagesElm.style.marginTop = '-10px';
    errorMessagesElm.style.color = 'red';
}
// reset input field 
function resetInputField() 
{
    inputBoxElm.value = '';
}
// resiving input value for main score 
function resiveInputValueForMainScore()
{
    mainScore = Number(inputBoxElm.value);
   return resiveInputForMainScore.textContent = mainScore;
}
// --------------------------------
//       part 1 End here 
// --------------------------------


// Life is so easy do you believe it???
// Git updated virsion number 0.3
