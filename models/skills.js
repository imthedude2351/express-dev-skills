const skills = [
    {id: 125223, skill: 'JavaScript', done: true},
    {id: 127904, skill: 'HTML', done: true},
    {id: 139608, skill: 'Node', done: false},
    {id: 221430, skill: 'CSS', done: true}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }