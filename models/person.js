const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mentalIssues: []
})

module.exports = mongoose.model('person', personSchema)