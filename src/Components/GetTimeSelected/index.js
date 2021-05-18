import React from "react";
import { Header } from "./Header";
import { Items } from "./Items";

const Index = ({ time: data, getArrayTime, getTime, activityWorkdays, removeTime }) => {

  const addTime = ({ row, column, time, rowSpan }) => {

    for (let i = row; i < row + rowSpan; i++) {
      data[i].count[column].value.isActive = false;
    }

    data[row].count[column].value = { ...time, isActive: true };

    getTime({
      value: { ...time },
      category: data[row].count[column].category,
    });
    getArrayTime(data);
  };

  const removeItem = ({ row, column }) => {

    const { hours, hoursPlus, stateDay, stateDayPlus } = data[row].count[column].value;
    const rowSpan = hoursPlus - hours;
    const category = data[row].count[column].category;

    const removeActivityWorkdays = activityWorkdays.filter(({ value, category: searchCategory }, i) => {

      const {hours: searchHours, hoursPlus: searchHoursPlus, stateDay: searchStateDay, stateDayPlus: searchStateDayPlus} = value;

      const result = (
        searchHours === hours &&
        searchHoursPlus === hoursPlus &&
        searchStateDay === stateDay &&
        searchStateDayPlus === stateDayPlus &&
        searchCategory === category
      )

      return !result

    })


    for (let i = row; i < row + rowSpan; i++) {
      data[i].count[column].value.isActive = null;
    }

    data[row].count[column].value = {
      ...data[row].count[column].value,
      isActive: null,
      hoursPlus: hours + 1,
      stateDayPlus: hours + 1 > 11 ? "pm" : "am"
    };

    getArrayTime(data);
    removeTime(removeActivityWorkdays);

  }

  return (
    <div className="containerTables">
      <table>
        <Header />
      </table>
      <div className="tableSon">
        <table>
          <tbody>
            {data.map(({ title, count }, i) => (
              <Items
                title={title}
                count={count}
                index={i}
                getTime={addTime}
                removeItem={removeItem}
                key={`${title}_${i}`}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
