import style from "./ReastaurantForm.module.scss";
import { ReastaurantFormProps } from "./ReastaurantForm.types.ts";
import axios from "axios";
import { useEffect, useState } from "react";

const ReastaurantForm = ({ _id, data, deleteData }: ReastaurantFormProps) => {
  if (!data) return <>No Restaurant Selected</>;

  const [formData, setFormData] = useState({
    ratings: "",
    feedback: "",
  });

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/ratings`,
        formData
      );
      console.log("Rating submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  const newData = Array.isArray(data)
    ? data.filter((f: any) => f.id === _id)
    : [];

    useEffect(()=>{
      newData
    },[_id])
  return (
    <>
      <h3>Rate Us !</h3>
       {_id ? <div className={style.FormBox}>
        <div>
          {newData.map((item: any) => (
            <>
              <div className={style.Form} >
                <span>Restaurant id: {item.id}</span>
                <h4>Restaurant name: {item.name}</h4>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="ratings">Give ratings out of 5: </label>
                    <input
                      type="number"
                      name="ratings"
                      id="ratings"
                      min={0}
                      max={5}
                      value={formData.ratings}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="feedback">Give feedback :</label>
                    <input
                      type="text"
                      name="feedback"
                      id="feedback"
                      value={formData.feedback}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit">Rate Restaurant</button>
                </form>
                <button onClick={() => deleteData(id)}>Delete</button>
              </div>
            </>
          ))}
        </div>
      </div> : ""
      }
    </>
  )
};

export default ReastaurantForm;
