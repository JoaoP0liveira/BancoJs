const cliService = require("../services/clientesService")

const cliController = {
    create: async (req, res) => {
        try{
             const cliente = await cliService.create(req.body);
            return res.status(201).json({
                msg: 'Cliente criado com sucesso',
                cliente
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar o cliente'
            })
        }
    },
    update: async (req, res) => {
        try{
            const cliente = await cliService.update(req.params.id, req.body);
            if(!cliente) {
                return res.status(400).json({
                    msg: 'Cliente nao encontrado'
                });
            }
            return res.status(200).json({
                msg: 'Cliente atualizado com sucesso',
                cliente
            });
        } catch(error) {
            return res.status(500).json({
                msg: 'Erro ao atualizar o cliente'
            })
        }
    },
    getAll: async (req, res) => {
        try{
            const clientes = await cliService.getAll();
            return res.status(200).json({
                msg: 'Todos os clientes!',
                clientes
            });
        } catch (error) {
            return res.status(200).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    getOne: async (req, res) => {
        try{
            const cliente = await cliService.getById(req.params.id);
            if(!cliente) {
                return res.status(400).json({
                    msg: 'Cliente nao encontrado!'
                });
            }
            return res.status(200).json({
                msg: 'Cliente encontrado',
                cliente
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    },
    delete: async (req, res) => {
        try{
            const cliente = await cliService.delete(req.params.id);
            if(!cliente) {
                return res.status(400).json({
                    msg: 'Cliente nao encontrado'
                })
            }
            return res.status(200).json({
                msg: 'Cliente deletado com sucesso!'
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    }
}

module.exports = cliController;