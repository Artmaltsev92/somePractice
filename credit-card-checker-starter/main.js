// Верные номера
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// Точно неверные 
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Непонятные номера
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// Пробный массив
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];



//Алгоритм Луна для проверки валидности номера карты
const validateCred=(array)=> {
  if (typeof array==='string') {
   array=stringToArray(array) 
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let cardNum = parseInt(array[i]);
    if ((array.length - i) % 2 === 0) {
      cardNum = cardNum * 2;
      if (cardNum > 9) {
        cardNum = cardNum - 9;
          }
        }
    sum += cardNum;
      }
  return sum % 10 === 0;
    }
//Алгоритм, который показывает какие номера карт не корректны. Возвращает номера.
const findInvalidCards = (array) => {
  const invalid_list=[]
  for (let i=0;i<array.length;i++) {
    if (validateCred(array[i])===false) {
      invalid_list.push(array[i])
    }
  }
  return invalid_list
}
// Карты из выборки с некорректными номерами
const invNumbers = findInvalidCards(batch)

//Проверка провайдера по номеру карты
const idInvalidCardCompanies = (arrayOfInvalidCard) => {
  cardOwner=[]
  for (let i=0;i<arrayOfInvalidCard.length;i++) {
        switch (arrayOfInvalidCard[i][0]) {
          case 3:
            cardOwner.push ('Amex(American Express)')
            break;
          case 4:
            cardOwner.push ('Visa')
            break;
          case 5:
            cardOwner.push ('MasterCard')
            break;
          case 6:
            cardOwner.push ('Discover')
            break;
          default: 
            cardOwner.push ('Company not found')
            break;
          }
  }
  return cardOwner
}

//Перевод строки в массив
const stringToArray = (string) =>{
  const array=[]
  for(let i =0; i<string.length;i++) {
    if (string[i] === ' ' || string[i]==="," || string[i]==="." || string[i]==="-") {
      continue;
    } else {
    array.push(string[i])
    }
  
  }
  return array
}
console.log(idInvalidCardCompanies(invNumbers))


console.log(validateCred('453940496786 9666'))







