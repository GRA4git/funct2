// 1. Напиши функцию, которая принимает 1 параметр - число, и возвращает строку четное оно или нечетное.
function evenOrOdd(number){
    if (number % 2 === 0) {
      return "четное";
    } else {
      return "нечетное";
    }
  }

// 2. Напиши функцию, которая принимает один параметр - число и возвразаеь строку положительное оно или отрицательное.
function evenOrOdd(number){
    if (number > 0) {
      return "положительное";
    } else {
      return "отрицательное";
    }
  }
// 3. Напиши функцию, которая прининимает два параметра - числа и возвращает их произведение.
function summ(a,b){
    return a * b
}
// 4. Напиши функцию, которая прининимает два параметра - числа и возвращает наибольшее из них.
function choiceNumber(a, b){
    if (a > b) {
      return a;
    } 
        else {
            return b
        }
  }

// 5. Напиши функцию, которая принимает один параметр - строку и возвращает количество символов в строке.
function strNumb(str){
    return str.length;
}
// 6. Напиши функцию, которая принимает два параметра - строки и возвращает ту, что длинее.
function strNumb(str, str2){
    if (str > str2){
        return str;
    }
    else{
        return str2;
    }

}  
// 7. Напиши функцию, которая принимает два параметра строку и число - и возращает столько символов строки, сколько указано во втором параметре,
//  Например: f("lorem", 3); // вернет lor
function strN(str, num){
    return str.substr(0, num);
  }
  console.log(strN('lorem', 4))
// 8. Доработай предыдущую функцию так, чтобы, если кол-во символо меньше второго параметра, функция возвращала "текст слишком коротки".
function strN(str, num){
    if(str.length<=num){
      return str.substr(0, num);
    }
    else{
       return 'текст слишком короткий';
    }
    }
    console.log(strN('lorem', 4))