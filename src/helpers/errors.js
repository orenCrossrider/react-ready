export default class ErrorsHelper {
    static toString(errorsData) {
        let errors = '';
        for (let key in errorsData) {
            let value = errorsData[key];
            if (value instanceof Array) {
                let fieldErrors = value.join();
                errors += `${key} - ${fieldErrors} `;
            } else {
                errors += `${key} - ${value} `;
            }
        }
        return errors;
    }
}
