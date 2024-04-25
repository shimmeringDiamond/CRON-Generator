class Model {
    Option: Options;
    constructor() {
        console.log("new selection model")
        this.Option = Options.Weekly;
    }
}
enum Options {
    None = 0,
    Daily = 1,
    Weekly = 1 << 1,
    Monthly = 1 << 2,
    Yearly = 1 << 3,
}


export {
    Model,
    Options,
}