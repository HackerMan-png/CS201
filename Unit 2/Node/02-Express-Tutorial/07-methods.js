const express = require('express');
const app = express();
let { people } = require('./data');

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (name) {
    people.push({ id: new Date().getTime(), name });
    return res.status(200).json({ success: true, person: name });
  }
  res.status(400).json({ success: false, msg: 'Do better' });
});

app.put('/api/people/:id', (req, res) => {
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
});

app.delete('/api/people/:id', (req, res) => {
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
});

app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).send(`Welcome ${name}`);
  }
  res.status(400).json({ success: false, message: 'Please provide a name' });
});

app.listen(3000, () => console.log('Server is now listening at port 3000'));
