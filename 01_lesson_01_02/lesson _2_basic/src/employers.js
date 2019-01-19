const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter(employers => employers.length > 0 && employers != '').map((item) => item.toLowerCase().trim());


export {employersNames};
