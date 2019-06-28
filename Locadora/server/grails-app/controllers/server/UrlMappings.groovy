class UrlMappings {

    static mappings = {
        "/clientes"(resources:"cliente")
        "/locadoras"(resources:"locadora")
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}