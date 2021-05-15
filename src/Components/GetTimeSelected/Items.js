import React from "react";
import { Item } from "./Item";

export const Items = ({ title, count, index, getTime }) => {
  const handleAddTime = (i, { time, rowSpan }) => {
    
    getTime({
      column: i,
      row: index,
      time,
      rowSpan,
    });
    
  };

  return (
    <tr>
      <td>{`${title.hours > 12 ? title.hours - 12 : title.hours}:00 ${title.stateDay}`}</td>
      {count.map((val, i) => (
        <Item
          data={val}
          i={i}
          handleAddTime={handleAddTime}
          key={`Item_${val.value}_${i}_${index}`}
        />
      ))}
    </tr>
  );
};
