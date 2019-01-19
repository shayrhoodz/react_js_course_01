const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

// let employersNames = employers.filter(employers => employers.length > 0 && employers != '');

// employersNames = employersNames.map((item) => item.toLowerCase().trim());

let employersNames = employers.filter(employers => employers.length > 0 && employers != '').map((item) => item.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

function calcCash(own = 0, everyCash) {

    let total = everyCash.reduce((total, currentValue) => total + currentValue) + own;

    return total;
}

let money = calcCash(null, cash);

function makeBusiness(owner, cash, emp, director = 'Victor') {

    // let sumSponsors = eu.concat(rus, 'unexpected sponsor');
    let sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];

    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');

    console.log(...sumSponsors);

    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}

makeBusiness(...['Sam', money, employersNames]);