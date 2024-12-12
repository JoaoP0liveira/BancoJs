const { Router } = require("express");
const cliController = require("../controller/cliController");
const router = Router();
const { validateCli, validateCliId } = require("../middlewares/validateCli");

router.post('/', validateCli, cliController.create);

router.put('/:id', validateCli, validateCliId, cliController.update); 

router.delete('/:id', validateCliId, cliController.delete ); 

router.get('/:id', validateCliId, cliController.getOne); 

router.get('/', cliController.getAll ); 

module.exports = router;