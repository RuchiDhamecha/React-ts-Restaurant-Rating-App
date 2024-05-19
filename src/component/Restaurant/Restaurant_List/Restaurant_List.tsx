import style from "./Restaurant_List.module.scss";
import styles from "./Restaurant_List.module.scss";
import { Restaurant_ListProps } from "./Restaurant_List.types.ts";
import { useEffect } from "react";

const Restaurant_List = (props: Restaurant_ListProps) => {
  console.log(props.data.data);
  return (
    <>
      <h3>Restaurants Near You!</h3>
      {props.data && props.data.data ? (
        props.data.data.map((d: any) => (
          <div
            key={d.id}
            className={styles.List}
            onClick={() => {
              props.onclickbutton(d._id);
              console.log(d._id);
            }}
          >
            <h4>{d.name}</h4>
            <div>
              <span>{d.cuisine} |</span>
              <span> {d.location}</span>
            </div>
          </div>
        ))
      ) : (
        <h3>Loading</h3>
      )}
    </>
  );
};

export default Restaurant_List;
