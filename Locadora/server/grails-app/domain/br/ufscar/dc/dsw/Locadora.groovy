package br.ufscar.dc.dsw

import grails.rest.Resource

@Resource(uri='/locadoras', readOnly = false, formats = ['json', 'xml'])
class Locadora {
    static constraints = {
        email_locadora blank: false
        senha_locadora blank: false
        cnpj_locadora blank: false
        nome_locadora blank: false
        cidade_locadora blank: false
    }

    String email_locadora
    String senha_locadora
    String cnpj_locadora
    String nome_locadora
    String cidade_locadora
}
