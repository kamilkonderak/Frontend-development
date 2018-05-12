import {CommonModule} from '@angular/common';
export class Person{
    name: string;
    yob: number;
    constructor(firstname: string, yob: number)
    {
        this.name = firstname
        this.yob = yob
    }
}