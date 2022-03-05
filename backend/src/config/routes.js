const express = require("express")

module.exports = function (server) {
    // Api Routes
    const router = express.Router()
    server.use("/api", router)

    //Checklist Routes
    const checklistService = require("../api/checklist/checklistService")
    checklistService.register(router, "/checklists")
}