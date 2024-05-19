import { hotelData } from "../Main/Main"

 
 export interface ReastaurantFormProps {
    _id:string
    onclickbutton?:(id:number)=>void
    data:hotelData[]
    deleteData:(id:number)=>void
 } 
