const fs = require('fs');

const arrCrew = fs.readFileSync('./src/crew.txt', 'utf-8').split('\n');
const arrEquipment = fs.readFileSync('./src/equipment.txt', 'utf-8').split('\n');
const arrRockets = fs.readFileSync('./src/rockets.txt', 'utf-8').split('\n');

function getRightCaptain() {
  const top = arrCrew.filter((el) => el.split(' ')[3] === 'Капитан,');
  const max = Math.max(...top.map((el) => parseInt(el.split(' ')[4])));
  return top.filter((el) => parseInt(el.split(' ')[4]) === max).join();
}

function getRightDoc() {
  const top = arrCrew.filter((el) => el.split(' ')[2] === 'ж,' && el.split(' ')[3] === 'Врач,');
  const max = Math.max(...top.map((el) => parseInt(el.split(' ')[4])));
  return top.filter((el) => parseInt(el.split(' ')[4]) === max).join();
}

const getAllEngineer = () => arrCrew.filter((el) => el.split(' ')[3] === 'Бортмеханик,');

const getAllRover = () => arrEquipment.filter((el) => el.split(' ')[1] === 'марсоход,');

const getRightRovers = () => arrEquipment.filter((el) => el.split(' ')[1] === 'марсоход,' && el.split(' ')[2] > 3);

const getRightRocket = () => {
  const top = arrRockets.splice(1, 3);
  const max = Math.max(...top.map((el) => parseInt(el.split(' ')[2])));
  return top.filter((el) => parseInt(el.split(' ')[2]) === max).join();
};

getRightRocket();

module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  getRightRovers,
  getRightRocket,
};
