const skills = [
    {id: 2021, skill: 'JavaScript, HTML, CSS'},
    {id: 6920, skill: 'Node, Express, jQuery'},
    {id: 1111, skill: 'Python, Matlab'},
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
  };

  function update(id, skill) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skill.id = id;
    skills.splice(idx, 1, skill);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    skill.id = Date.now() % 10000000;
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