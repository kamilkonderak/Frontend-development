declare class CloudService {
    name: string;
    price: number;
    description: string | undefined;
    constructor(name: string, price: number, description?: string | undefined);
}
declare let ComputingService: CloudService;
declare let MachineLearning: CloudService;
declare let WebHost: CloudService;
declare function describeService(service: CloudService): void;
declare function addService(tag: any, name: string, price: number, description?: string): void;
