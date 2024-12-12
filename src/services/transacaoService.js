const Trans = require("../models/transacoes");
const { trace } = require("../routers/router");

const TransService = {
    create: async (trans) => {
        try{
            return await Trans.create(trans);
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar a transação');
        }
    },
    update: async (id, transToUpdate) => {
        try{
            const trans = await trans.findByPk(id);
            if(!trans) {
                return null;
            }
            await trans.update(transToUpdate);
            await trans.save();
            return trans;
        }catch (error) {
            throw new Error('Ocorreu um erro ao atualizar a transação');
        }
    },
    getById: async (id) => {
        try{
            const trans = await Trans.findByPk(id);
            if(!trans) {
                return null;
            }
            return trans;
        } catch(error) {
            throw new Error('Ocorreu um erro ao buscar uma unica transação');
        }
    },
    getAll: async () => {
        try{
            return await Trans.findAll();
        } catch(error) {
            throw new Error ('Ocorreu um erro ao buscar todas as transações');
        }
    },
    delete: async(id) => {
        try {
            const trans = await Trans.findByPk(id);
            if(!trans) {
                return null;
            }
            await trans.destroy();
            return trans;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar a transação');
        }
    }
}

module.exports = TransService;