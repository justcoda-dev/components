import { Category } from '../db/models/category.model.js';
import { categoryService } from '../services/category.service.js';

export const category = {
  getCategoryList: async (req, res) => {
    try {
      const page = req.query.page ? req.query.page : 1;
      const pageSize = req.query.limit ? req.query.limit : 5;
      const list = await categoryService.getCategoriesList(
        parseInt(page - 1),
        parseInt(pageSize),
      );
      res.status(200).json({ list });
    } catch (error) {
      console.error(error);
      res.status(404).json({ error });
    }
  },
  getOptionsList: async (req, res) => {
    try {
      const list = await Category.findAndCountAll()
      console.log('LIIIIIIST', list);
      res.status(200).json({ list });
    } catch (error) {
      console.error(error);
      res.status(404).json({ error });
    }
  },
  getCategoriesSelectList: async (req, res) => {
    try {
      const list = await categoryService.selectList();
      res.status(200).json({ list });
    } catch (error) {
      console.error('error select list', error);
    }
  },
  getOneCategory: async (req, res) => {
    try {
      const { id } = req.query;
      const category = await Category.findOne({ where: { id } });
      res.status(200).json({ category });
    } catch (error) {
      console.error(error);
      res.status(404).json({ error });
    }
  },
  createCategory: async (req, res) => {
    try {
      const categoryData = req.body.category;
      console.log(categoryData);
      await Category.sync();
      const category = await Category.create({ category: categoryData });
      res.status(200).json({ category });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error });
    }
  },
  updateCategory: async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const { id } = req.query;
      const deleted = await Category.destroy({ where: { id } });
      res.status(200).json({ deleted });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error });
    }
  },
};
