const ProjectService = require('../service/projects-service.js');

const ProjectController = {
  findAll: async  (req, res) => {
    const data = await ProjectService.findAll();

    return res.status(200).json({ data });
  },

  create: async  (req, res) => {
    const data = await ProjectService.create(req.body);

    return res.status(200).json({ data });
  },

  findOne: async  (req, res) => {
    const data = await ProjectService.findOne(req.params.id, res);

    return res.status(200).json({ data });
  },

  update: async  (req, res) => {
    const id = req.params.id;
    const body = req.body;

    const data = await ProjectService.update(id, body, res);

    return res.status(200).json({ data });
  },

  delete: async  (req, res) => {
    const id = req.params.id;

    const data = await ProjectService.delete(id, res);

    return res.status(204).json();
  },
}

module.exports = ProjectController;
