const Checklist = require("./checklist")

Checklist.methods(["get", "post", "put", "delete"])
Checklist.updateOptions({ new: true, runValidators: true })

module.exports = Checklist