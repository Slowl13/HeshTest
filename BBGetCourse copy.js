function showAnswer(){
    let b64str = document.getElementById("hesh").value;
    let decodedString = JSON.parse(atob(b64str));

    let right_question = '';
    
    for(let elem of decodedString.question.variants){
        let tempStr = elem.is_right == 1 ? elem.value : '';
        if (tempStr !== '') right_question+=tempStr+"; ";
    }


    document.getElementById("result").innerHTML = right_question;
    console.log(decodedString);
    console.log(right_question);   
}

document.getElementById("make").addEventListener("click", showAnswer);
