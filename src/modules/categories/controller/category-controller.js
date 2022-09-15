const CategoryService = require('../service/category-service.js');

const CategoryController = {
  findAll: async  (req, res) => {
    const data = await CategoryService.findAll();

    return res.status(200).json({ data });
  },

  create: async  (req, res) => {
    const data = await CategoryService.create(req.body);

    return res.status(200).json({ data });
  },

  findOne: async  (req, res) => {
    const data = await CategoryService.findOne(req.params.id, res);

    return res.status(200).json({ data });
  },

  update: async  (req, res) => {
    const id = req.params.id;
    const body = req.body;

    const data = await CategoryService.update(id, body, res);

    return res.status(200).json({ data });
  },

  delete: async  (req, res) => {
    const id = req.params.id;

    const data = await CategoryService.delete(id, res);

    return res.status(204).json();
  },
}

module.exports = CategoryController;
