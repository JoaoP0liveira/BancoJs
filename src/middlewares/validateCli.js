const validateCli = (req, res, next) => {
    const { nome, email } = req.body;

    if (!nome || typeof nome !== 'string') {
        return res.status(400).json({ msg: 'Campos inválidos' });
    }

    if (!email || typeof email !== 'string') {
        return res.status(400).json({ msg: 'Campos inválidos' })
    }

    if (!(email.includes("@") && email.includes("."))) {
        return res.status(400).json({msg: 'Campo email inválido'})
    } 
    
    next();
}

const validateCliId = (req, res, next) => {
    const { id } = req.params;

    if (!id || typeof id !== 'string') {
        return res.status(400).json({ msg: 'Parametro ID ivalido' });
    }

    next();
}

module.exports = { validateCli, validateCliId };