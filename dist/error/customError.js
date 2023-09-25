class customAPIErrors extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
export default customAPIErrors;
//# sourceMappingURL=customError.js.map