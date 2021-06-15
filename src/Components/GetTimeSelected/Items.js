import React from "react";
import { Item } from "./Item";

export const Items = ({
  title,
  count,
  index,
  getTime,
  removeItem,
  editable,
}) => {
  const handleAddTime = (i, { time, rowSpan }) => {
    getTime({
      column: i,
      row: index,
      time,
      rowSpan,
    });
  };

  const RemoveItem = (e) =>
    removeItem({
      column: e,
      row: index,
    });

  return (
    <tr>
      <td>{`${title.hours > 12 ? title.hours - 12 : title.hours}:00 ${
        title.stateDay
      }`}</td>
      {count.map((val, i) => (
        <Item
          data={val}
          i={i}
          handleAddTime={handleAddTime}
          RemoveItem={RemoveItem}
          key={`Item_${val.value}_${i}_${index}`}
          editable={editable}
        />
      ))}
    </tr>
  );
};
