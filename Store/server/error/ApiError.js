class ApiError extends Error{

    constructor(status, message) {
        //вызываем родительский конструктор
        super();
        this.status = status
        this.message = message
    }
    //функции которые вызываются без создания объекта
    //статус код и сообщение которое получаем параметром
    static badRequest(message) {
        return new ApiError(484, message)
    }

    static internal(message) {
        return new ApiError(500, message)
    }

    static forbidden(message) {
        return new ApiError(404, message)
    }
}
module.exports = ApiError