import $api from "../http/api";
import { Destination } from "../components/assets/utils/Destination";
import { SearchOptions } from "../components/assets/utils/SearchOptions";
import { DestinationDto } from "../components/assets/utils/DestinationDto";

export default class DestinationServices {
    static async getDestinations(searchOptions: SearchOptions | null): Promise<Destination[]> {
        const response = await $api.get<Destination[]>('/destination', {
            params: searchOptions || {},
        });
        return response.data;
    }

    static async createDestination(destination: DestinationDto): Promise<Destination> {
        const response = await $api.post<Destination>('/destination', destination);
        return response.data;
    }

    static async updateDestination(destination_id: string, destination: DestinationDto): Promise<void> {
        await $api.put(`/destination?id=${destination_id}`, destination);
    }

    static async deleteDestination(destination_id: string): Promise<void> {
        await $api.delete(`/destination?id=${destination_id}`);
    }
}
