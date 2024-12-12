const { Router } = require("express");
const contaController = require("../controller/contaController");
const router = Router();
const { validateConta, validateContaId } = require("../middlewares/validateConta");

router.post('/', validateConta, contaController.create);

router.put('/:id', validateConta, validateContaId, contaController.update); 

router.delete('/:id', validateContaId, contaController.delete ); 

router.get('/:id', validateContaId, contaController.getOne); 

router.get('/', contaController.getAll ); 

module.exports = router;