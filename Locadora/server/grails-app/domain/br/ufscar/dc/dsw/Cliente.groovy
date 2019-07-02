package br.ufscar.dc.dsw

import grails.rest.Resource

@Resource(uri='/clientes', readOnly = false, formats = ['json', 'xml'])
class Cliente extends User{

    static constraints = {
        cpf_cliente blank: false
        nome_cliente blank: false
        telefone_cliente blank: false
        sexo_cliente blank: false
        nascimento_cliente blank: false
         //locadora nullable: false
    }

    String cpf_cliente
    String nome_cliente
    String telefone_cliente
    String sexo_cliente
    String nascimento_cliente
}
