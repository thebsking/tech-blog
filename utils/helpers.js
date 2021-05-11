const { databaseVersion } = require("../config/connection")

module.exports = {
    format_date: (date) => {
        return date.toLocaleString();
    }
}