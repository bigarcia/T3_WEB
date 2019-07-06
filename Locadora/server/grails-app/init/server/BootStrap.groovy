package server

import br.ufscar.dc.dsw.Cliente
import br.ufscar.dc.dsw.Locadora
import br.ufscar.dc.dsw.User
import br.ufscar.dc.dsw.UserRole
import br.ufscar.dc.dsw.Role

class BootStrap {

    def init = { servletContext ->
    
        Role admin = new Role(authority: 'ROLE_ADMIN').save()

        if (admin.hasErrors()) {
            println "Cadastro de ROLE_ADMIN com erros"
            println admin.errors
        } else {
            println "ROLE_ADMIN CRIADO com sucesso"
        }

        println " "

        User user = new User(username: "admin", password: "admin").save()
        if (user.hasErrors()) {
            println "Cadastro de USER com erros"
            println user.errors
        } else {
            println "USER admin CRIADO com sucesso"
        }

        println " "

        UserRole.create(user, admin, true)

        Locadora locadora1 = new Locadora(nome: 'Locadora 1')
        locadora1.save()

        if (locadora1.hasErrors()) {
            println "Cadastro de Locadora1 com erros"
            println locadora1.errors
        } else {
            println "Locadora1 criado com sucesso"
        }

        println " "

        Cliente cliente1 = new Cliente (email: 'cliente1@gmail.com', senha:'123', 
										cpf: '11111111111', nome: 'Cliente 1', 
                                        telefone: '(11)111111111',
                                        sexo: 'f', data: '11/11/1111')
        cliente1.save()

        if (cliente1.hasErrors()) {
            println "Cadastro de Cliente1 com erros"
            println cliente1.errors
        } else {
            println "Cliente1 criado com sucesso"
        }
		
        println " "

		//COMO FAZER A RELACAO ENTRE AS TABELAS? NXN ??

        Locadora locadora2 = new Locadora(nome: 'Locadora 2')
        locadora2.save()

        if (locadora2.hasErrors()) {
            println "Cadastro de Locadora2 com erros"
            println locadora2.errors
        } else {
            println "Locadora2 criado com sucesso"
        }

        println " "

        Cliente cliente2 = new Cliente (email: 'cliente2@gmail.com', senha:'122', 
										cpf: '22222222222', nome: 'Cliente 2', telefone: '(22)22222222',
										sexo: 'm', data: '22/22/2222')
        cliente2.save()
        if (cliente2.hasErrors()) {
            println "Cadastro de Cliente2 com erros"
            println cliente2.errors
        } else {
            println "Cliente2 criado com sucesso"
        }

        println " "
        
        Locadora locadora3 = new Locadora(nome: 'Locadora 3')
        locadora3.save()
        
        if (locadora3.hasErrors()) {
            println "Cadastro de Locadora3 com erros"
            println locadora3.errors
        } else {
            println "Locadora3 criado com sucesso"
        }

        println " "

        Cliente cliente3 = new Cliente (email: 'cliente3@gmail.com', senha:'132', 
										cpf: '33333333333', nome: 'Cliente 3', telefone: '(33)333333333',
										sexo: 'm', data: '33/33/3333')
        cliente3.save()

        if (cliente3.hasErrors()) {
            println "Cadastro de Cliente3 com erros"
            println cliente3.errors
        } else {
            println "Cliente3 criado com sucesso"
        }

        println " "
    }
    def destroy = {
    }
}