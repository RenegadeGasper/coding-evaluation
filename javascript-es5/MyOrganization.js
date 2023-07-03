const Name = require('./Name.js');
const Organization = require('./Organization.js');
const Position = require('./Position.js');

const ceo = Position('CEO');
const pres = Position('President');
ceo.addDirectReport(pres);
const vpm = Position('VP Marketing');
pres.addDirectReport(vpm);
const vps = Position('VP Sales');
pres.addDirectReport(vps);
const vpf = Position('VP Finance');
pres.addDirectReport(vpf);
const coo = Position('COO');
pres.addDirectReport(coo);
const cio = Position('CIO');
ceo.addDirectReport(cio);
const vpt = Position('VP Technology');
cio.addDirectReport(vpt);
const vpi = Position('VP Infrastructure');
cio.addDirectReport(vpi);
const dea = Position('Director Enterprise Architecture');
vpt.addDirectReport(dea);
const dct = Position('Director Customer Technology');
vpt.addDirectReport(dct);
const s = Position('Salesperson');
vps.addDirectReport(s);

const myOrg = Organization(ceo);

myOrg.hire(Name('Bob', 'Smith'), 'CEO');
myOrg.hire(Name('Zaphod', 'Beeblebrox'), 'President');
myOrg.hire(Name('Gandalf', 'Gray'), 'Director Enterprise Architecture');
myOrg.hire(Name('Bill', 'Lumbergh'), 'Director Customer Technology');
myOrg.hire(Name('Ford', 'Prefect'), 'VP Marketing');
myOrg.hire(Name('Jane', 'Seller'), 'VP Sales');
myOrg.hire(Name('Bean', 'Counter'), 'VP Finance');
myOrg.hire(Name('Victoria', 'Sinclair'), 'CIO');
myOrg.hire(Name('Head', 'Geek'), 'VP Technology');
myOrg.hire(Name('Steve', 'Dent'), 'VP Infrastructure');
myOrg.hire(Name('Slick', 'Willie'), 'Salesperson');

console.log(myOrg.toString());
