const headerRegisterBtn = document.querySelector(".header__register-button");
const registerBtns = document.querySelectorAll('.register-button');

headerRegisterBtn.addEventListener('click', () => {
    document.getElementById('black-screen').style.display = 'flex';
    document.getElementById('register__close-btn').addEventListener('click', () => {
        document.getElementById('black-screen').style.display = 'none';
    });
});

registerBtns.forEach(registerBtn => {
    registerBtn.addEventListener('click', () => {
        document.getElementById('black-screen').style.display = 'flex';
        document.getElementById('register__close-btn').addEventListener('click', () => {
            document.getElementById('black-screen').style.display = 'none';
        });
    });
});

let checkedNum = 0;

const plans = document.querySelectorAll('.plan');
plans.forEach(plan => {
    const header = plan.querySelector('.plan__header');
    let notCheckedIcon = plan.querySelector('.ri-checkbox-blank-circle-line');
    let checkedIcon = plan.querySelector('.ri-checkbox-circle-fill');
    let counter = 0;
    plan.addEventListener('click', () =>{
        counter++;
        if(counter % 2 != 0){
            checkedNum++;
            notCheckedIcon.style.display = 'none';
            checkedIcon.style.display = 'block';
        }
        else{
            checkedNum--;
            notCheckedIcon.style.display = 'block';
            checkedIcon.style.display = 'none';
        }
    });
});

const submitBtn = document.getElementById('register__submit');
submitBtn.addEventListener('click', () =>{
    if(checkedNum > 1){alert('Você deve escolher apenas um plano!');}
    else if(checkedNum == 0){alert('Você deve escolher pelo menos 1 plano!');}
    else{alert('Você foi cadastrado! Confira seu e-mail.')}
});