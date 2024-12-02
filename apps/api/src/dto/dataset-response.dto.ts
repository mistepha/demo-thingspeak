import { DatasetEntity } from "../db/entities/dataset.entity";
import { DatasetItemResponseDto } from "./dataset-item-response.dto";

export class DatasetResponseDto {

    id: string;

    name: string;

    items: DatasetItemResponseDto[];

    public static fromEntity(entity: DatasetEntity) {
        const dto = new DatasetResponseDto();

        dto.id = entity.id;
        dto.name = entity.name;

        if (entity.items.isInitialized()) {
            dto.items = entity.items
                .map(i => DatasetItemResponseDto.fromEntity(i));
        }
            
        return dto;
    }

}
