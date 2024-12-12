const validateConta = (req, res, next) => {
    const { saldo } = req.body;

    if (!saldo || typeof saldo !== 'string') {
        return res.status(400).json({ msg: 'Campos inválidos' });
    }

    next();
}

const validateContaId = (req, res, next) => {
    const { id } = req.params;

    if (!id || typeof id !== 'string') {
        return res.status(400).json({ msg: 'Parametro ID ivalido' });
    }

    next();
}

module.exports = { validateConta, validateContaId };