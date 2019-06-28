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

        Locadora locadora1 = new Locadora(nome: 'Locadora 1')
        locadora1.save()
    
        Cliente cliente1 = new Cliente (email.cliente: 'cliente1@gmail.com', senha:'123', 
										CPF: '11111111111', nome: 'Cliente 1', telefone: '(11)111111111',
										sexo: 'f', nascimento: '11/11/1111')
        cliente1.save()
		
		//COMO FAZER A RELACAO ENTRE AS TABELAS? NXN ??

        Locadora locadora2 = new Locadora(nome: 'Locadora 2')
        locadora2.save()

        Cliente cliente2 = new Cliente (email.cliente: 'cliente2@gmail.com', senha:'122', 
										CPF: '22222222222', nome: 'Cliente 2', telefone: '(22)22222222',
										sexo: 'm', nascimento: '22/22/2222')
        cliente2.save()

        Locadora locadora3 = new Locadora(nome: 'Locadora 3')
        locadora3.save()

        Cliente cliente3 = new Cliente (email.cliente: 'cliente3@gmail.com', senha:'132', 
										CPF: '33333333333', nome: 'Cliente 3', telefone: '(33)333333333',
										sexo: 'm', nascimento: '33/33/3333')
        cliente3.save()
    }
    def destroy = {
    }
}