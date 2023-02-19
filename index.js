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
let num = 1023;
let pwr = 2;
while (pwr < num){ 
    pwr *= 2;
    if(pwr >= (num/2)){
        break;
    }
}

let double = pwr*2;
if ((double - num) < (num -pwr)){
    console.log(double)
}
else if((double - num) === (num - pwr)){
    console.log(pwr)
}
else{console.log(pwr)} 