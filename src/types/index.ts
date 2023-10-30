export type ListResponse = {
    next: string;
    previous: string | null;
    results: {
        name: string;
        imageUrl?: string;
        url: string;
    }[];
};

export type CharacterDetailsResponse = {
    name: string;
    homeworld: string;
    vehicles: string[];
    url: string;
};

export type VehicleDetailsResponse = {
    name: string;
    vehicle_class: string;
    pilots: string[];
    url: string;
};

export type PlanetDetailsResponse = {
    name: string;
    population: number;
    residents: string[];
    url: string;
};
