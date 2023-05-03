const checkForm = document.getElementById('checkForm');
if(checkForm){
    const textInput = document.getElementById('text_input');
    const errorDiv = document.getElementById('error');
    const myUl = document.getElementById('attempts');
    const frmLabel = document.getElementById('formLabel');

    checkForm.addEventListener('submit', (event) => {
        event.preventDefault();
        try{
            const inputValue = textInput.value;
            errorDiv.hidden = true;
            if(!inputValue){
                throw 'Please enter a integer!'
            }
            let isPrime = true;
            if(inputValue == 0 || inputValue == 1){
                isPrime = false;
            }
            else if(inputValue < 0){
                isPrime = false;
            }
            else if(inputValue > 1){
                for(let i = 2; i < inputValue; i++){
                    if(inputValue % i == 0){
                        isPrime = false;
                        break;
                    }
                }
            }
            const li = document.createElement('li');
            if(isPrime){
                li.className = "is-prime";
                let result = `${inputValue} is a prime number`;
                li.innerHTML = result;
            }
            else{
                li.className = "not-prime"
                let result = `${inputValue} is NOT a prime number`;
                li.innerHTML = result;
            }
            myUl.appendChild(li);
            checkForm.reset();
            textInput.focus();
        }
        catch (e) {
            errorDiv.hidden = false;
            errorDiv.innerHTML = e;
        }
    })
}