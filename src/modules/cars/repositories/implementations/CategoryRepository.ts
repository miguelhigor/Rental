import { getRepository, Repository } from "typeorm";

import { Categories } from "../../entities/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoryRepository implements ICategoriesRepository {
    private repository: Repository<Categories>;

    constructor() {
        this.repository = getRepository(Categories);
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name,
        });

        await this.repository.save(category);
    }

    async list(): Promise<Categories[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Categories> {
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export { CategoryRepository };
