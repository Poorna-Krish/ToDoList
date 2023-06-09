class InputError extends Error { 
    httpCode  
    constructor(name, message, httpCode) {
      super();
      this.name = name;
      this.message = message;
      this.httpCode = httpCode;
    }
}
class HttpError extends Error { 
    httpCode  
    constructor(name, message, httpCode) {
      super();
      this.name = name;
      this.message = message;
      this.httpCode = httpCode;
    }
}
class NotFoundError extends Error { 
  httpCode  
  constructor(name, message) {
    super();
    this.name = name;
    this.message = message;
  }
}
module.exports = {
    HttpError,
    InputError,
    NotFoundError
};