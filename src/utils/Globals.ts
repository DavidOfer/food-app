class Globals{}

class DevelopmentGlobals extends Globals{
    public urls = {
        general: "http://localhost:8080/",
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        general : "https://tenfood.herokuapp.com",
    }
}

const globals = process.env.NODE_ENV === "production" ? new ProductionGlobals() : new DevelopmentGlobals();

export default globals;