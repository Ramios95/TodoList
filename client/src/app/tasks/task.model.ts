export class Task {
    public id: number;
    public title: string;
    public description: string;
    public completed: boolean;
    public duedate: string;
    public createdAt: string;
    public updatedAt: string;
    constructor(title: string,description: string,completed: boolean,duedate:string,createdAt:string,updatedAt:string){

this.title = title;
this.completed = completed;
this.description= description;
this.duedate=duedate;
this.createdAt=createdAt;
this.updatedAt=updatedAt;
    }
}