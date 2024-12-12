const validateNot = (req, res, next) => {
    const { mensagem, dataNot } = req.body;

    if (!mensagem || typeof mensagem !== 'string') {
        return res.status(400).json({ msg: 'Campos inválidos' });
    }

    next();
}

const validateNotId = (req, res, next) => {
    const { id } = req.params;

    if (!id || typeof id !== 'string') {
        return res.status(400).json({ msg: 'Parametro ID ivalido' });
    }

    next();
}

module.exports = { validateNot, validateNotId };