//Create cat

import { Category } from "../models/categoryModel.js";

export const createCategoryController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    //validation
    if (!title) {
      return res.status(500).send({
        success: false,
        msg: "Please Provide Image And Title",
      });
    }
    const newCategory = new Category({ title, imageUrl });
    await newCategory.save();
    res.status(201).send({
      success: true,
      msg: "New Category Created",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Create Category  API",
      error,
    });
  }
};

export const getAllCategoryController = async (req, res) => {
  try {
    const categories = await Category.find({});
    if (!categories) {
      return res.status(404).send({
        success: false,
        msg: "No Categories Found",
      });
    }

    res.status(200).send({
      success: true,
      totalCat: categories.length,
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Get All Category  API",
      error,
    });
  }
};

export const UpdateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageUrl } = req.body;

    const updateCategory = await Category.findByIdAndUpdate(
      id,
      { title, imageUrl },
      { new: true }
    );
    if (!updateCategory) {
      return res.status(500).send({
        success: false,
        msg: "No Category Found",
      });
    }
    res.status(200).send({
      success: true,
      msg: "Category Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Update Category  API",
      error,
    });
  }
};

export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(500).send({
        success: false,
        msg: "Please Provide Valid Category ID",
      });
    }
    const category = await Category.findById(id);
    if (!category) {
      return res.status(200).send({
        success: false,
        msg: "No Category Found On This ID",
      });
    }

    await Category.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      msg: "Category Deleted SuccessFully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error In Delete Category  API",
      error,
    });
  }
};
