const { Router } = require('express');
const {
    getVisitas,
    getVisitasByID,
    postVisitas,
    putVisita,
    deleteVicita
} = require('../controller/Visita.controller');


const router = Router();

router.get('/', getVisitas);
router.get('/:id', getVisitasByID);
router.post('/', postVisitas);
router.put('/:id', putVisita);
router.delete('/:id', deleteVicita);

module.exports = router;