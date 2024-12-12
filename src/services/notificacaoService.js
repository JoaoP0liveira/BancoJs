const Not = require("../models/notificacoes");
const { trace } = require("../routers/router");

const NotService = {
    create: async (not) => {
        try{
            return await Not.create(not);
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar a Notificação');
        }
    },
    update: async (id, notToUpdate) => {
        try{
            const not = await Not.findByPk(id);
            if(!not) {
                return null;
            }
            await not.update(notToUpdate);
            await not.save();
            return not;
        }catch (error) {
            throw new Error('Ocorreu um erro ao atualizar a Notificação');
        }
    },
    getById: async (id) => {
        try{
            const not = await Not.findByPk(id);
            if(!not) {
                return null;
            }
            return not;
        } catch(error) {
            throw new Error('Ocorreu um erro ao buscar uma unica Notificação');
        }
    },
    getAll: async () => {
        try{
            return await Not.findAll();
        } catch(error) {
            throw new Error ('Ocorreu um erro ao buscar todas as Notificações');
        }
    },
    delete: async(id) => {
        try {
            const not = await Not.findByPk(id);
            if(!not) {
                return null;
            }
            await not.destroy();
            return not;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar a Notificação');
        }
    }
}

module.exports = NotService;