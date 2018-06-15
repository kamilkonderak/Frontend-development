import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const services = [
    {id: 1, name: "Computing service", price: 12, available: true, amount: 123},
    {id: 2, name: "Analiyzing service", price: 3, available: true, amount: 13413},
    {id: 3, name: "AI service", price: 1, available: false, amount: 0},
    {id: 4, name: "Container service", price: 0.1, available: true, amount: 1224213},
    {id: 5, name: "Voice service", price: 2, available: true, amount: 102},
    {id: 6, name: "Backup service", price: 14, available: true, amount: 120},
    {id: 7, name: "VPN service", price: 9, available: true, amount: 0},
    {id: 8, name: "Blockchain service", price: 3, available: false, amount: 64},
    {id: 9, name: "Application service", price: 10, available: true, amount: 455},
    {id: 10, name: "Web service", price: 8, available: true, amount: 579}
];
    return {services};
}
}