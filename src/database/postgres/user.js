const { Pool } = require('pg');
const myDb = require('./');

class UserTable extends myDb {
    async insert(user) {
        try {
            const { insertUser, selectUser } = require('../../queries/user');

            const UserExists = await this._pool.query(selectUser, [user.email]);

            if (UserExists.rows[0]) return "Email já cadastrado no sistema!";

            // console.log('data to be inserted ',user)
            const VERIFIED_INSERT = await this._pool.query(insertUser, [
                user.username,
                user.email,
                user.password,
                user.cpf,
                user.phone
            ]);

            if (VERIFIED_INSERT.rows[0].name) {
                return `Bem vindo(a), ${VERIFIED_INSERT.rows[0].name}! Seu cadastro foi bem-sucedido! Por favor realize seu acesso.`;
            } else {
                return `Eita, Giovana! Algo deu errado ao tentar registrar no banco de dados...`;
            }
        } catch (error) {
            console.log(error);
            return "Eita, Giovana! O forninho caiu! Algo deu errado..."
        }
    }

    async validate(email, password) {
        try {
            const { validateUser } = require('../../queries/user');

            const VALIDATED_USER = await this._pool.query(validateUser, [
                email,
                password
            ]);

            // console.log('validade response: ',VALIDATED_USER)
            if (VALIDATED_USER.rows[0]) {
                return { userExists: true, message:`Validação bem-sucedida. Divirta-se, ${VALIDATED_USER.rows[0].name.split(' ',1)}!` , data: VALIDATED_USER.rows[0] };
            } else {
                return { userExists: false, message:`Ops! Não conseguimos validar seu acesso`};
            }
        } catch (error) {
            console.log(error);
        }
    }

    async update(user, id) {
        try {
            const { updateUser } = require('../../queries/user');

            const VERIFIED_INSERT = await this._pool.query(updateUser, [
                user.username,
                user.email,
                user.password,
                user.cpf,
                user.phone,
                user.cardname,
                user.cardnum,
                user.cardcvv,
                user.card_expiration,
                id
            ]);

            if (VERIFIED_INSERT.rows[0]) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
        }
    }

    async delete(user) {
        try {
            const { deleteUser } = require('../../queries/user');

            const DELETED_USER = await this._pool.query(deleteUser, [user.id]);

            if (DELETED_USER.rows[0]) {
                return true;
            }

            return false;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserTable;
