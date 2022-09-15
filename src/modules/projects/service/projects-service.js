const { Project } = require('../../../database/models');

const ProjectService = {
  findAll: async  () => {
    return await Project.findAll({
      attributes: ['id', 'name', 'description', 'image'],
      include: [
        {
          required: true,
          association: 'categories',
          attributes: ['id', 'name'],
        },
      ]
    });
  },

  create: async  (data) => {
    return await Project.create(data);
  },

  findOne: async  (id, res) => {
    const model = await Project.findByPk(id, {
      attributes: ['id', 'name', 'description', 'image'],
      include: [
        {
          required: true,
          association: 'category',
          attributes: ['id', 'name'],
        },
      ],
    });

    if (!model) {
      res.status(404).json({
        'message': 'The requested data not found.',
      });
    }

    return model;
  },

  update: async  (id, data, res) => {
    const model = await ProjectService.findOne(id, res);

    await model.update(data);
    return await model.reload();
  },

  delete: async  (id, res) => {
    const model = await ProjectService.findOne(id, res);

    await model.destroy();
  },
}

module.exports = ProjectService;
