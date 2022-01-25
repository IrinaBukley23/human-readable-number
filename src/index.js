module.exports = function toReadable (number) {
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const ties = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10) return nums[number] ;
    
    if (number >= 10 && number < 20) return teens[number - 10];
    
    if (number >= 20 && number < 100) {
        return (number % 10 == 0) ? ties[number / 10 - 1] : (ties[Math.floor(number / 10) - 1] + ' ' + nums[number % 10]);
    } 
    
    if (number >= 100 && number < 1000){
         if (number % 100 == 0) return (nums[number / 100] + ' hundred');
         if (number % 100 != 0) return nums[Math.floor(number / 100)] + ' hundred ' + toReadable(number - (Math.floor(number / 100))*100)// + ' ' + toReadable(number - (Math.floor(number / 100)))
    }
}
