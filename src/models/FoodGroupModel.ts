import { DishModel } from "./DishModel";

export interface FoodGroupModel{
    id:number;
    name:string;
    dishes:DishModel[]
}