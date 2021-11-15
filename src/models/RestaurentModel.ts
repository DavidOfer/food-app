import { FoodGroupModel } from "./FoodGroupModel";

export interface RestaurentModel{
    id:number;
    name:string;
    type:string;
    deliveryCost:number;
    minOrder:number;
    openingHour:string;
    closingHour:string;
    banner:string;
    logo:string;
    foodGroups:FoodGroupModel[]
}