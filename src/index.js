module.exports = function toReadable (c) {
    let a = "";
    let g = "";
    let one = function(c){
        switch (Number(c)) {
            case 0:
              a = "zero"
              break;
            case 1:
              a = "one"
              break;
            case 2:
              a = "two"
              break;
              case 3:
                a = "three"
              break;
            case 4:
              a = "four"
              break;
            case 5:
              a = "five"
              break;
              case 6:
                a = "six"
              break;
            case 7:
              a = "seven"
              break;
            case 8:
              a = "eight"
              break;
              case 9:
                a = "nine"
              break;
          }
    }
  let two = function(c){
    switch (Number(c)) {
        case 0:
            a= ""
            break;
        case 1:
            a = "ten"
          break;
        case 2:
            a = "twenty"
          break;
        case 3:
            a = "thirty"
          break;
          case 4:
              a = "forty"
          break;
        case 5:
            a = "fifty"
          break;
        case 6:
            a = "sixty"
          break;
          case 7:
              a = "seventy"
          break;
        case 8:
            a = "eighty"
          break;
        case 9:
            a = "ninety"
          break;
      }
  }
  let three = function(c){
    switch (Number(c)) {
        case 1:
            a = "one hundred"
            break;
          case 2:
            a = "two hundred"
            break;
            case 3:
              a = "three hundred"
            break;
          case 4:
            a = "four hundred"
            break;
          case 5:
            a = "five hundred"
            break;
            case 6:
              a = "six hundred"
            break;
          case 7:
            a = "seven hundred"
            break;
          case 8:
            a = "eight hundred"
            break;
            case 9:
              a = "nine hundred"
            break;
      }
  }
  let unity = function(c){
    switch (Number(c)) {
        case 1:
            a = "eleven"
            break;
          case 2:
            a = "twelve"
            break;
            case 3:
              a = "thirteen"
            break;
          case 4:
            a = "fourteen"
            break;
          case 5:
            a = "fifteen"
            break;
            case 6:
              a = "sixteen"
            break;
          case 7:
            a = "seventeen"
            break;
          case 8:
            a = "eighteen"
            break;
            case 9:
              a = "nineteen"
            break;
      }
  }
  let b = String(c)
  if(b.length === 1 ){
      one(Number(String(c)[0]))
      g = a
  }
  if(b.length === 2 ){
      if(c >= 11 && c <20 ){
         unity(Number(String(c)[1]))
         return a
      }
    two(Number(String(c)[0]))
    g = g + a;
    one(Number(String(c)[1]));
    if(Number(String(c)[1])===0){
        return g
    }else{
        g = g + " " + a;
    }
    
  }
  if(b.length === 3 ){
    three(Number(String(c)[0]));
g = g + a ;
if(Number(String(c)[1]) === 1 ){
    if(Number(String(c)[2])===0){
           return g + " " + 'ten'
    }
    unity(Number(String(c)[2]))
    g = g +" " + a
}else{
    two(Number(String(c)[1]));
    if(Number(String(c)[1])===0){
        g = g + "" + a; 
    }else{ 
    g = g + " " + a; 
    }
     
    one(Number(String(c)[2]));
    if(Number(String(c)[2])===0){
        return g
    }else{
        g = g + " " + a;
    }
    //ewe
}
  }
  return g
}
 
