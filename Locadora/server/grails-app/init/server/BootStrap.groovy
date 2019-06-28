package server

import br.ufscar.dc.dsw.Cliente
import br.ufscar.dc.dsw.Locadora

class BootStrap {

    def init = { servletContext ->
    
        Locadora locadora1 = new Locadora(nome: 'Locadora1', cnpj: '11111111111111', cidade: 'São Carlos')
        locadora1.save()
    
        Cliente cliente = new Cliente (cpf : '444.444.444-44', nome: 'Bianca', telefone: '999999999',
                      sexo: 'feminino', nascimento: '19/12/1995', locadora: locadora1)
        cliente.save()

    }
    def destroy = {
    }
}
