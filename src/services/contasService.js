const Conta = require("../models/contas");
const { trace } = require("../routers/router");

const ContaService = {
    create: async (conta) => {
        try{
            return await Conta.create(conta);
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar a conta');
        }
    },
    update: async (id, contaToUpdate) => {
        try{
            const conta = await Conta.findByPk(id);
            if(!conta) {
                return null;
            }
            await conta.update(contaToUpdate);
            await conta.save();
            return conta;
        }catch (error) {
            throw new Error('Ocorreu um erro ao atualizar a Conta');
        }
    },
    getById: async (id) => {
        try{
            const conta = await Conta.findByPk(id);
            if(!conta) {
                return null;
            }
            return conta;
        } catch(error) {
            throw new Error('Ocorreu um erro ao buscar uma unica Conta');
        }
    },
    getAll: async () => {
        try{
            return await Conta.findAll();
        } catch(error) {
            throw new Error ('Ocorreu um erro ao buscar todas as Conta');
        }
    },
    delete: async(id) => {
        try {
            const conta = await Conta.findByPk(id);
            if(!conta) {
                return null;
            }
            await conta.destroy();
            return conta;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar a Conta');
        }
    }
}

module.exports = ContaService;