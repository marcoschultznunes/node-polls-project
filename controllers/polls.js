const express = require('express')
const moment = require('moment')
const Poll = require('../models/polls')
const Option = require('../models/options')

const findPoll = async (id) => {
    const poll = await Poll.findOne({where: {id: id}})
    const options = await Option.findAll({where: {pollId: id}})
    return ({poll: poll, options: options})
}

exports.listPolls = async (req, res) => {
    try {
        const polls = await Poll.findAll()
        res.render('pollsList', {polls: polls})
    } catch(err) {
        res.render('pollsList')
    }
}

exports.readPoll = async (req, res) => {
    try {
        const {id} = req.params
        const {poll, options} = await findPoll(id)
        res.render('pollPage', {
            poll: poll, options: options
        })
    } catch (e) {
        res.redirect('/')
    }
    
}

exports.votePoll = (req, res) => {
    // add vote to poll
    res.render('pollPage')
}

exports.editPoll = async (req, res) => {
    try {
        const id = req.params.id
        const {poll, options} = await findPoll(id)
        res.render('pollForm', {
            id: id,
            title: poll.title,
            finished: moment(new Date(poll.finished)).format("YYYY-MM-DDTHH:mm:ss"),
            options: options.map(opt => opt.description)
        })
    } catch(e) {
        res.redirect('/')
    }
    
}
exports.newPoll = (req, res) => {
    res.render('pollForm')
}

exports.savePoll = async (req, res) => {
    try {
        const {id} = req.params
        const {title, finished} = req.body
        let {options} = req.body

        if(id) {  // update
            const poll = await Poll.update({
                title: title, finished: finished
            }, {where: {id: id}})
            await Option.destroy({where: {pollId: id}})
            
            options = options.map((description, i) => ({
                description: description,
                pollId: id
            }))
            
            await Option.bulkCreate(options)
            
            res.redirect('/')
        } else {  // insert
            const poll = await Poll.create({
                title: title,
                started: new Date(),
                finished: finished
            })
            
            options = options.map((description, i) => ({
                description: description,
                pollId: poll.id
            }))
            
            await Option.bulkCreate(options)
            
            res.redirect('/')
        }
        
    } catch (e) {
        res.redirect('/')
    }
}
exports.deletePoll = async (req, res) => {
    try {
        const {id} = req.params
        await Option.destroy({where: {pollId: id}})
        await Poll.destroy({where: {id: id}})
    
        res.redirect('/')
    } catch (e) {
        res.redirect('/')
    }
}
