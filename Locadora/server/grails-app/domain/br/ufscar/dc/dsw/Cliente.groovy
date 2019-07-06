package br.ufscar.dc.dsw

import grails.rest.Resource

@Resource(uri='/clientes', readOnly = false, formats = ['json', 'xml'])
class Cliente extends User{

    static constraints = {
        cpf blank: false
        nome blank: false
        telefone blank: false
        sexo blank: false
        data blank: false
         //locadora nullable: false
    }

    String cpf
    String nome
    String telefone
    String sexo
    String data
}
