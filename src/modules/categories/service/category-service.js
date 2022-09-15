const { Category } = require('../../../database/models');

const CategoryService = {
    findAll: async () => {
        return await Category.findAll({
            attributes: ['id'],
            include: [
                {
                    required: true,
                    association: 'projects'
                },
            ],
        });
    },

    create: async (data) => {
        return await Category.create(data);
    },

    findOne: async (id, res) => {
        const model = await Category.findByPk(id, {
            attributes: ['id'],
            include: [
                {
                    required: true,
                    association: 'project'
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

    update: async (id, data, res) => {
        const model = await CategoryService.findOne(id, res);

        await model.update(data);
        return await model.reload();
    },

    delete: async (id, res) => {
        const model = await CategoryService.findOne(id, res);

        await model.destroy();
    },
}

module.exports = CategoryService;
