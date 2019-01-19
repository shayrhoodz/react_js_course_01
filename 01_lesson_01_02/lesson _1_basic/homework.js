const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
    
// employers = employers.map((item) => item.toLowerCase());

// console.log(employers);

let employersNames = employers.filter(employers => employers.length > 0 != '');

employersNames = employersNames.map((item) => item.toLowerCase().trim());

// console.log(employersNames);

// let employersNames = [];

// for (var i = 0; i < employers.length; i++) {
// 	if (employers[i].length > 0 && employers[i].length != '') {
// 		employersNames.push(employers[i]);
// 	}
// }
// for (var i = 0; i < employersNames.length; i++) {
//     // employersNames[i] = employersNames[i].toLowerCase().trim();
//     employersNames = employersNames.map((item) => item.toLowerCase().trim());
// }

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors

// function calcCash(own) {
function calcCash(own = 0, everyCash) {
    // own = own || 0;
    // var everyCash = Array.prototype.slice.call(arguments);
    // let everyCash = [].slice.call(arguments);
    let total = everyCash.reduce((total, currentValue) => total + currentValue) + own;
    // let total = 1;
    // for (var i = 0; i < everyCash[1].length; i++) {
    //     total += +everyCash[1][i];
    // }
    return total;
}

let money = calcCash(null, cash);

function makeBusiness(owner, cash, emp, director = 'Victor') {
    // director = director || 'Victor';
    let sumSponsors = eu.concat(rus, 'unexpected sponsor');
    // var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    // console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
    // emp);
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    // console.log.apply(null, sumSponsors);
    console.log(...sumSponsors);
    // console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
// makeBusiness.apply(null, ['Sam', null, money, employersNames]);
makeBusiness(...['Sam', money, employersNames]);