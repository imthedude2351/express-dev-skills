const skills = [
    {id: 125223, skill: 'JavaScript', done: true},
    {id: 127904, skill: 'HTML', done: true},
    {id: 139608, skill: 'Node', done: false},
    {id: 221430, skill: 'CSS', done: true}
  ];
  
  module.exports = {
    getAll,
    getOne, 
    create,
    deleteOne,
    update
  };
  
  function update(id, skill) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skill.id = id;
    skills.splice(idx, 1, skill);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skills => skills.id === id);
    skills.splice(idx, 1);
  }
    
  function create(skill) {
    // New skill should not be "done"
    skill.done = false;
    skills.push(skill);
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }