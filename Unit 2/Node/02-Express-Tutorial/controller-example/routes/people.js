const express = require('express');
const router = express.Router();
let { people } = require('../../data');

const {
  createPerson,
  readPeople,
  renamePerson,
  removePerson,
} = require('../controllers/people');

// router.get('/', readPeople)
// router.post('/', createPerson)
// router.put('/:id', renamePerson)
// router.delete('/:id', removePerson)

router.route('/').get(readPeople).post(createPerson);
router.route('/:id').put(renamePerson).delete(removePerson);

module.exports = router;
