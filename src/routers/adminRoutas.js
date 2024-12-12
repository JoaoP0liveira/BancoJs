const { Router } = require("express");
const adminController = require("../controller/adminController");
const router = Router();
const {  validateAdmin, validateAdminId } = require("../middlewares/validateAdmin");

router.post('/', validateAdmin, adminController.create);

router.put('/:id', validateAdmin, validateAdminId, adminController.update); 

router.put("/:id", validateAdmin, validateAdminId, adminController.esqueciSenha);

router.delete('/:id', validateAdminId, adminController.delete ); 

router.get('/:id', validateAdminId, adminController.getOne); 

router.get('/', adminController.getAll); 

module.exports = router;