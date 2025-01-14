import { Category } from "../model/category.model.js";
export const saveInBulk = async (request, response, next) => {
    try {
        let categoryList = request.body;
        for (let category of categoryList) {
            await Category.create({ categoryName: category });
        }
        return response.status(200).json({message:"All category Saved....."});
    } catch (error) {
        console.log(error);
        return response.status(500).json({error: "Internal Server Error"});
    }
}