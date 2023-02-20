let classGroup = 'Arts';

if (classGroup === 'Science') {
    console.log('Physics, Chemistry, Biology, Technical Drawing');
}
else if (classGroup === 'Social Science') {
    console.log('Accounting, Commerce, Marketing, Geography');
}
else if (classGroup ==='Arts') {
    console.log('Government, Economics, Literature, History');
}
else{
    console.log('English, Mathematics');
}


let num = 3;
let power = 0.5;
while(power < num){
    power *= 2;
    if(power >= num/2) {
        break;
    }
}
let double = power * 2;
let pwr = (num - power <= double - num) ? power : double;
console.log('The number ' + pwr + ' is the power of 2 nearest to ' + num + '.')