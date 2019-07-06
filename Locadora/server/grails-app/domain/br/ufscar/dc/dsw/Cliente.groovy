package br.ufscar.dc.dsw

import grails.rest.Resource

@Resource(uri='/clientes', readOnly = false, formats = ['json', 'xml'])
class Cliente{

    static constraints = {
        email blank: false
        senha blank: false
        cpf blank: false
        nome blank: false
        telefone nullable: true
        sexo nullable: true
        data nullable: true
         //locadora nullable: false
    }

    String email 
    String senha 
    String cpf
    String nome
    String telefone
    String sexo
    String data
}
