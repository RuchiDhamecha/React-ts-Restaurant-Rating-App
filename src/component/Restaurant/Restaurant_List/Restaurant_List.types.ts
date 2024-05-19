import { hotelData } from "../Main/Main"

 export interface Restaurant_ListProps {
    _id?:number
    data:hotelData[]
    onclickbutton:(id:string)=>void
 } 
