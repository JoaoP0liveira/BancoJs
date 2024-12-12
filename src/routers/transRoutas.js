const { Router } = require("express");
const transController = require("../controller/transController");
const { validateTrans, validateTransId } = require("../middlewares/validateTrans");
const router = Router();

router.post('/', validateTrans, transController.create);

router.put('/:id', validateTrans, validateTransId, transController.update); 

router.delete('/:id', validateTransId, transController.delete ); 

router.get('/:id', validateTransId, transController.getOne); 

router.get('/', transController.getAll ); 

module.exports = router;