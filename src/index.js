module.exports = function toReadable (number) {
    
    const zeroNineteen  = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const twentyNinety = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    const hundred = 'hundred'

    if(number<20){
        return (zeroNineteen[number])
    } else if(number>19 && number < 100 && number%10){
        return (twentyNinety[String(number).charAt(0)-2] + ' ' + zeroNineteen[String(number).charAt(1)])
    }else if(number>19 && number < 100 && !(number%10)){
        return (twentyNinety[String(number).charAt(0)-2])
    }else if(!(number%100) ){
        return (zeroNineteen[String(number).charAt(0)] + ' ' + hundred )
    } else if(number>100 && String(number).charAt(1) == 0 ) {
        return (zeroNineteen[String(number).charAt(0)] + ' ' + hundred + ' ' + zeroNineteen[String(number).charAt(2)])
    } else if(String(number).slice(1)<20 && number>100 ) {
       return (zeroNineteen[String(number).charAt(0)] + ' ' + hundred + ' ' + zeroNineteen[String(number).slice(1)] )
    }else if(number>100 ) {
        return (zeroNineteen[String(number).charAt(0)] + ' ' + hundred + ' ' + 
        (String(number).charAt(2) == 0  ? twentyNinety[String(number).charAt(1)-2]  : twentyNinety[String(number).charAt(1)-2] + ' ' + zeroNineteen[String(number).charAt(2)]) )
    }
  
}
