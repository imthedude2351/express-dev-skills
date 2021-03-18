const Skill = require('../models/skills');

module.exports = {
    index,
    show, 
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    // Redirect back to the show page for the todo
    res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
    // Find the todo to provide to the view
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', { skill });
}

function deleteSkill(req, res) {
    // Just like function show() 
    Skill.deleteOne(req.params.id);
    // We provide the path for the subsequent GET request
    res.redirect('/skills');
}

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Skill.create(req.body);
    // Always do a redirect when data has changed (non-GET request)
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new');
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}