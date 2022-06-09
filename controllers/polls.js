const express = require('express')

exports.listPolls = (req, res) => {
    res.render('pollsList')
}
exports.readPoll = (req, res) => {
    res.render('pollPage')
}
exports.votePoll = (req, res) => {
    // add vote to poll
    res.render('pollPage')
}

exports.editPoll = (req, res) => {
    res.render('pollForm')
}
exports.newPoll = (req, res) => {
    res.render('pollForm')
}
exports.savePoll = (req, res) => {
    // Finds and updates poll
    // If it's new, it is created
    res.render('pollForm')
}
exports.deletePoll = (req, res) => {
    res.render('pollsList')
}
