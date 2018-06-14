import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const services = [
    {id: 1, name: "Computing service", price: 12, available: true, amount: 123},
    {id: 2, name: "Analiyzing service", price: 3, available: true, amount: 13413},
    {id: 3, name: "AI service", price: 1, available: false, amount: 0},
    {id: 4, name: "Storage service", price: 0.4, available: true, amount: 1224213}
];
    return {services};
}
}