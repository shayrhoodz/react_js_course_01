import {employersNames} from './employers';
import {sponsors, money} from './sponsors';

class makeBusiness{
  constructor(owner, cash, emp, director = 'Victor') {
    this.owner = owner;
    this.cash = cash;
    this.emp = emp;
    this.director = director;
  }
  business(owner, cash, emp, director = 'Victor') {

    let sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
  
    console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
    console.log('And we have a sponsors: ');
  
    console.log(...sumSponsors);
  
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
  }

}

// makeBusiness(...['Sam', money, employersNames]);

const mBusi = new makeBusiness(...['Sam', money, employersNames]);

export {mBusi};

// mBusi.business();





// function makeBusiness(owner, cash, emp, director = 'Victor') {

//   let sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];

//   console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
//   console.log('And we have a sponsors: ');

//   console.log(...sumSponsors);

//   console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
// }
