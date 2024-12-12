const transService = require("../services/transacaoService")

const transController = {
    create: async (req, res) => {
        try{
             const trans = await transService.create(req.body);
            return res.status(201).json({
                msg: 'Transação criada com sucesso',
                trans
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar a Transação'
            })
        }
    },
    update: async (req, res) => {
        try{
            const trans = await transService.update(req.params.id, req.body);
            if(!trans) {
                return res.status(400).json({
                    msg: 'Transação nao encontrada'
                });
            }
            return res.status(200).json({
                msg: 'Transação atualizada com sucesso',
                trans
            });
        } catch(error) {
            return res.status(500).json({
                msg: 'Erro ao atualizar a Transação'
            })
        }
    },
    getAll: async (req, res) => {
        try{
            const trans = await transService.getAll();
            return res.status(200).json({
                msg: 'Todos as Transações!',
                trans
            });
        } catch (error) {
            return res.status(200).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    getOne: async (req, res) => {
        try{
            const trans = await transService.getById(req.params.id);
            if(!trans) {
                return res.status(400).json({
                    msg: 'Transação nao encontrado!'
                });
            }
            return res.status(200).json({
                msg: 'Transação encontrada',
                trans
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    delete: async (req, res) => {
        try{
            const trans = await transService.delete(req.params.id);
            if(!trans) {
                return res.status(400).json({
                    msg: 'Transação nao encontrada'
                })
            }
            return res.status(200).json({
                msg: 'Transação deletada com sucesso!'
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    }
}

module.exports = transController;