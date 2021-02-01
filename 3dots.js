const ages = [12,14,16,13,17];
const ages2 = [15,16,12];
const age3 = [22,23,55];
const allAges = ages.concat(ages2).concat([5]).concat(age3);
const allAges2 = [...ages,...ages2 , 5 ,...age3];
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650,450,250];
const maximam = Math.max(...takaPoisa);
console.log(maximam);