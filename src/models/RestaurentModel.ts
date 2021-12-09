import { FoodGroupModel } from "./FoodGroupModel";
import { ReviewModel } from "./ReviewModel";

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
    rating:number;
    reviewCount:number;
    reviews:ReviewModel[];
}