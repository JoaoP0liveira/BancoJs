const validateTrans = (req, res, next) => {
    const { tipoConta, tipoTrans, valor, data } = req.body;

    if (!tipoConta || typeof tipoConta !== 'string') {
        return res.status(400).json({ msg: 'Campos inválidos conta' });
    }

    if (!tipoTrans || typeof tipoTrans !== 'string') {
        return res.status(400).json({ msg: 'Campos inválidos trans' });
    }
    
    if (!valor || typeof valor !== 'string') {
        return res.status(400).json({ msg: 'Campos inválidos valor' });
    }

    next();
}

const validateTransId = (req, res, next) => {
    const { id } = req.params;

    if (!id || typeof id !== 'string') {
        return res.status(400).json({ msg: 'Parametro ID ivalido' });
    }

    next();
}

module.exports = { validateTrans, validateTransId };