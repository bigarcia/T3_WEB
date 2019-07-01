package server

import br.ufscar.dc.dsw.Cliente
import br.ufscar.dc.dsw.Locadora
import br.ufscar.dc.dsw.User
import br.ufscar.dc.dsw.UserRole
import br.ufscar.dc.dsw.Role

class BootStrap {

    def init = { servletContext ->
    
        Role admin = new Role(authority: 'ROLE_ADMIN').save()
        User user = new User(username: "admin", password: "admin").save()
        UserRole.create(user, admin, true)

        Locadora locadora1 = new Locadora(nome_locadora: 'Locadora 1')
        locadora1.save()
    
        Cliente cliente1 = new Cliente (email_cliente: 'cliente1@gmail.com', senha_cliente:'123', 
										cpf_cliente: '11111111111', nome_cliente: 'Cliente 1', 
                                        telefone_cliente: '(11)111111111',
                                        sexo_cliente: 'f', nascimento_cliente: '11/11/1111')
        cliente1.save()
		
		//COMO FAZER A RELACAO ENTRE AS TABELAS? NXN ??

        Locadora locadora2 = new Locadora(nome_locadora: 'Locadora 2')
        locadora2.save()

        Cliente cliente2 = new Cliente (email_cliente: 'cliente2@gmail.com', senha_cliente:'122', 
										cpf_cliente: '22222222222', nome_cliente: 'Cliente 2', telefone_cliente: '(22)22222222',
										sexo_cliente: 'm', nascimento_cliente: '22/22/2222')
        cliente2.save()

        Locadora locadora3 = new Locadora(nome_locadora: 'Locadora 3')
        locadora3.save()

        Cliente cliente3 = new Cliente (email_cliente: 'cliente3@gmail.com', senha_cliente:'132', 
										cpf_cliente: '33333333333', nome_cliente: 'Cliente 3', telefone_cliente: '(33)333333333',
										sexo_cliente: 'm', nascimento_cliente: '33/33/3333')
        cliente3.save()
    }
    def destroy = {
    }
}