const { Router } = require("express");
const adminRoutes = require("./adminRoutas");
const cliRoutes = require("./cliRoutas");
const contaRoutes = require("./contaRoutas");
const notRoutes = require("./notRoutas");
const transRoutes = require("./transRoutas");
const authenticateToken = require('../middlewares/authenticateToken');
const adminController = require("../controller/adminController");

const router = Router();

router.use('/admin', adminRoutes);
router.use('/cliente', cliRoutes);
router.use('/contas', contaRoutes);
router.use('/notificacoes', notRoutes);
router.use('/transacoes', transRoutes);

router.post('/login', (req, res) => {
    adminController.login(req, res)
});

module.exports = router;