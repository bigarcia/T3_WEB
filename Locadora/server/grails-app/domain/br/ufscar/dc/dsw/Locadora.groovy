package br.ufscar.dc.dsw

import grails.rest.Resource

@Resource(uri='/locadoras', readOnly = false, formats = ['json', 'xml'])
class Locadora {
    static constraints = {
        cnpj blank: false
        nome blank: false
        cidade blank: false
    }

    String email
    String senha
    String cnpj
    String nome
    String cidade
}
