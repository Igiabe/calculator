console.log('hello');
const displayEle = document.getElementById ('data');
const resultEle = document.getElementById('result');
console.log (displayEle);
let data = '';

const inputnumber = (number) =>{
data = `${data}${number}`;
displayEle.innerText = data;
if (data=== '.' && data.includes('.')) return;
};

const inputOperator = (operator) =>{
    data = `${data}${operator}`;
    displayEle.innerText = data;
    };

const calculate = () => {
    result = eval(data);
resultEle.innerText = result;
};

const inputSquare = () =>{
    result = eval(data*data);
    resultEle.innerText = result;
};

const remove = () =>{
    result =  data.substr (0, data.length -1);
    resultEle.innerText = result;
};

const inputPer = () =>{
    result = eval(data/100);
    resultEle.innerText = result;
}
const allClear = () =>{
    if(data.value ===allClear)
    return;
    data.value = '';
    resultEle.innerText = result;
};
const y = x;