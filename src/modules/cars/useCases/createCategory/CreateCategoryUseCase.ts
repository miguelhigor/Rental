import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 * Retorno: void
 * Tipo de retorno: void
 * Retorno de erro: Throw new error
 * Acessar o repositorio:
 */

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) throw new Error("Category Already Exists!");

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
