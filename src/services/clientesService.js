const Cli = require("../models/clientes");
const { trace } = require("../routers/router");

const CliService = {
    create: async (cli) => {
        try{
            return await Cli.create(cli);
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar usuario');
        }
    },
    update: async (id, cliToUpdate) => {
        try{
            const cli = await Cli.findByPk(id);
            if(!cli) {
                return null;
            }
            await cli.update(cliToUpdate);
            await cli.save();
            return cli;
        }catch (error) {
            throw new Error('Ocorreu um erro ao atualizar Cliente');
        }
    },
    getById: async (id) => {
        try{
            const cli = await Cli.findByPk(id);
            if(!cli) {
                return null;
            }
            return cli;
        } catch(error) {
            throw new Error('Ocorreu um erro ao buscar um unico Cliente');
        }
    },
    getAll: async () => {
        try{
            return await Cli.findAll();
        } catch(error) {
            throw new Error ('Ocorreu um erro ao buscar todos os Cliente');
        }
    },
    delete: async(id) => {
        try {
            const cli = await Cli.findByPk(id);
            if(!cli) {
                return null;
            }
            await cli.destroy();
            return cli;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o Cliente');
        }
    }
}

module.exports = CliService;