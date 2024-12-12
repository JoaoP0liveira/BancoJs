const notService = require("../services/notificacaoService")

const notController = {
    create: async (req, res) => {
        try{
             const not = await notService.create(req.body);
            return res.status(201).json({
                msg: 'Notificação criada com sucesso',
                not
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar a Notificação'
            })
        }
    },
    update: async (req, res) => {
        try{
            const not = await notService.update(req.params.id, req.body);
            if(!not) {
                return res.status(400).json({
                    msg: 'Notificação nao encontrada'
                });
            }
            return res.status(200).json({
                msg: 'Notificação atualizada com sucesso',
                not
            });
        } catch(error) {
            return res.status(500).json({
                msg: 'Erro ao atualizar a Notificação'
            })
        }
    },
    getAll: async (req, res) => {
        try{
            const nots = await notService.getAll();
            return res.status(200).json({
                msg: 'Todos as Notificações!',
                nots
            });
        } catch (error) {
            return res.status(200).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    getOne: async (req, res) => {
        try{
            const not = await notService.getById(req.params.id);
            if(!not) {
                return res.status(400).json({
                    msg: 'Notificação nao encontrado!'
                });
            }
            return res.status(200).json({
                msg: 'Notificação encontrada',
                not
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    delete: async (req, res) => {
        try{
            const not = await notService.delete(req.params.id);
            if(!not) {
                return res.status(400).json({
                    msg: 'Notificação nao encontrada'
                })
            }
            return res.status(200).json({
                msg: 'Notificação deletada com sucesso!'
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    }
}

module.exports = notController;