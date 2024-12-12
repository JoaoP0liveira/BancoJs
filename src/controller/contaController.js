const contaService = require("../services/contasService")

const contaController = {
    create: async (req, res) => {
        try{
             const conta = await contaService.create(req.body);
            return res.status(201).json({
                msg: 'Conta criado com sucesso',
                conta
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar o conta'
            })
        }
    },
    update: async (req, res) => {
        try{
            const conta = await contaService.update(req.params.id, req.body);
            if(!conta) {
                return res.status(400).json({
                    msg: 'Conta nao encontrado'
                });
            }
            return res.status(200).json({
                msg: 'Conta atualizado com sucesso',
                conta
            });
        } catch(error) {
            return res.status(500).json({
                msg: 'Erro ao atualizar o conta'
            })
        }
    },
    getAll: async (req, res) => {
        try{
            const contas = await contaService.getAll();
            return res.status(200).json({
                msg: 'Todos os contas!',
                contas
            });
        } catch (error) {
            return res.status(200).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    getOne: async (req, res) => {
        try{
            const conta = await contaService.getById(req.params.id);
            if(!conta) {
                return res.status(400).json({
                    msg: 'Conta nao encontrado!'
                });
            }
            return res.status(200).json({
                msg: 'Conta encontrado',
                conta
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    delete: async (req, res) => {
        try{
            const conta = await contaService.delete(req.params.id);
            if(!conta) {
                return res.status(400).json({
                    msg: 'Conta nao encontrado'
                })
            }
            return res.status(200).json({
                msg: 'Conta deletado com sucesso!'
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    }
}

module.exports = contaController;