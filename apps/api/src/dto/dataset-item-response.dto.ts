import { DatasetItemEntity } from "../db/entities/dataset-item.entity";

export class DatasetItemResponseDto {

    id: string;
    value1: string | null;
    value2: string | null;
    value3: string | null;
    value4: string | null;
    value5: string | null;
    value6: string | null;
    value7: string | null;
    value8: string | null;
    createdAt: number; 

    public static fromEntity(entity: DatasetItemEntity) {
        const dto = new DatasetItemResponseDto();

        dto.id = entity.id;
        dto.value1 = entity.value1;
        dto.value2 = entity.value2;
        dto.value3 = entity.value3;
        dto.value4 = entity.value4;
        dto.value5 = entity.value5;
        dto.value6 = entity.value6;
        dto.value7 = entity.value7;
        dto.value8 = entity.value8;
        dto.createdAt = entity.createdAt;

        return dto;
    }
}
