import styles from "./Main.module.scss";
import { MainProps } from "./Main.types.ts";
import { useState, useEffect } from "react";
import style from "./Main.module.scss";
import axios from "axios";
import ReastaurantForm from "../ReastaurantForm/ReastaurantForm.tsx";
import Restaurant_List from "../Restaurant_List/Restaurant_List.tsx";
import Navbar from "../../Navbar/Navbar.tsx";

export interface hotelData {
  _id: number;
  name: string;
  cuisine?: string;
  location?: string;
  averageRating?: number;
  reviews?: [
    {
      user: string;
      rating: number;
      feedback: string;
    }
  ];
  isClicked?: boolean;
  isDeleted?: boolean;
}

const Main = ({}: MainProps) => {
  const [selectedId, setSelected] = useState('');
  const [restrodata, setRestrodata] = useState<hotelData[]>([]);

  const getdata = async () => {
    try {
      const { data } = await axios.get<hotelData[]>(
        `${import.meta.env.VITE_API_URL}api/hotel`,
        {
          headers: {
            "ngrok-skip-browser-warning": "skip-browser-warning",
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
        }
      );
      setRestrodata(data);
      // console.log(data)
      // console.log(restrodata)
      // setRestrodata([
      //   {
      //     _id: 1,
      //     cuisine: "veg",
      //     isDeleted: false,
      //     location: "Pune",
      //     name: "Tasty Eats",
      //   },
      //   {
      //     _id: 2,
      //     cuisine: "Non-veg",
      //     isDeleted: false,
      //     location: "Mumbai",
      //     name: "Fodiee",
      //   },
      //   {
      //     _id: 3,
      //     cuisine: "veg",
      //     isDeleted: false,
      //     location: "Pune",
      //     name: "Edible Emporium",
      //   },
      //   {
      //     _id: 4,
      //     cuisine: "non-veg",
      //     isDeleted: false,
      //     location: "Pune",
      //     name: "Food Fantasy",
      //   },
      //   {
      //     _id: 5,
      //     cuisine: "Non-veg",
      //     isDeleted: false,
      //     location: "Mumbai",
      //     name: "Hotel Fodiee",
      //   },
      //   {
      //     _id: 6,
      //     cuisine: "veg",
      //     isDeleted: false,
      //     location: "Pune",
      //     name: "Hotel Edible Emporium",
      //   },
      // ]);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  function onclickbutton(id: string) {
    console.log("id onclickbutton",id);
    setSelected(id);
  }
  
  const deleteData = (_id: number) => {
    setRestrodata(restrodata.filter((f) => f._id !== _id));
  };


  return (
    <>
      {/* <Navbar/> */}
      <main className={style.Main}>
        <div className={style.list}>
          <Restaurant_List
            // _id={selectedId}
            data={restrodata}
            onclickbutton={onclickbutton}
          />
        </div>
        <div className={style.form}>
          <ReastaurantForm
            data={restrodata}
            id={selectedId}
            onclickbutton={onclickbutton}
            deleteData={deleteData}
          />
        </div>
      </main>
    </>
  );
};

export default Main;
