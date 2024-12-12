const { Router } = require("express");
const notController = require("../controller/notController");
const { validateNot, validateNotId } = require("../middlewares/validateNot");
const router = Router();

router.post('/', validateNot, notController.create);

router.put('/:id', validateNot, validateNotId, notController.update); 

router.delete('/:id', validateNotId, notController.delete ); 

router.get('/:id', validateNotId, notController.getOne); 

router.get('/', notController.getAll ); 

module.exports = router;