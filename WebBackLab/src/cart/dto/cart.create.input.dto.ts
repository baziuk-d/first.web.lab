import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

export class CreateCartDto {
    @ApiProperty({ example: 1, description: 'The amount of items in the cart' })
    @IsInt()
    @Min(1)
    amount: number;

    @ApiProperty({ example: true, description: 'Indicates if the cart is hot' })
    isHot: boolean;

    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'The ID of the destination' })
    destinationId: string;
}
