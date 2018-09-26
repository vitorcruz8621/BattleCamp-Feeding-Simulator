const date = new Date();
const today = date.toLocaleString();

if( today.indexOf('2018-9-13') !== -1) {
    console.log('\nFeliz dia do Programador !!!\n');
} else {
    console.log('\nContinue Programando !\n');
}

console.log(today);
console.log(date);