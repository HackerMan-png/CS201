const express = require('express');
const router = express.Router();
let { people } = require('../../data');

router;
const readPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (name) {
    people.push({ id: new Date().getTime(), name });
    return res.status(200).json({ success: true, person: name });
  }
  res.status(400).json({ success: false, msg: 'Do better' });
};

const renamePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((each) => {
    if (each.id === Number(id)) {
      each.name = name;
    }
    return each;
  });
  if (!person)
    return res
      .status(400)
      .json({ success: false, msg: `no person with id ${id}` });
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(202).json({ success: true, data: newPeople });
};

const removePerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((each) => each.id === Number(id));
  console.log(person);
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.filter((person) => {
    return person.id !== Number(id);
  });
  people = newPeople;
  res.status(203).json({ success: true, data: newPeople });
};

module.exports = {
  createPerson,
  readPeople,
  renamePerson,
  removePerson,
}