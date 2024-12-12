const Admin = require("../models/administradores");
const { trace } = require("../routers/router");

const adminService = {
    create: async (admin) => {
        try{
            return await Admin.create(admin);
        } catch (error) {
            throw new Error('Ocorreu um erro ao criar usuario');
        }
    },
    esqueciSenha: async (id, novaSenha) => {
        try {
          const admin = await Admin.findByPk(id);
          if (!admin) {
            return null;
          }
          await admin.update({ senha: novaSenha });
          return admin;
        } catch (error) {
          throw new Error("Ocorreu um erro ao trocar a senha do Admin");
        }
      },
    update: async (id, adminToUpdate) => {
        try{
            const admin = await Admin.findByPk(id);
            if(!admin) {
                return null;
            }
            await admin.update(adminToUpdate);
            await admin.save();
            return admin;
        }catch (error) {
            throw new Error('Ocorreu um erro ao atualizar administrador');
        }
    },
    getById: async (id) => {
        try{
            const admin = await Admin.findByPk(id);
            if(!admin) {
                return null;
            }
            return admin;
        } catch(error) {
            throw new Error('Ocorreu um erro ao buscar um unico administrador');
        }
    },
    getAll: async () => {
        try{
            return await Admin.findAll();
        } catch(error) {
            throw new Error ('Ocorreu um erro ao buscar todos os administradores');
        }
    },
    delete: async(id) => {
        try {
            const admin = await Admin.findByPk(id);
            if(!admin) {
                return null;
            }
            await admin.destroy();
            return admin;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o administrador');
        }
    }
}

module.exports = adminService;