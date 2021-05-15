import React from "react";
import { Header } from "./Header";
import { Items } from "./Items";

const Index = ({ time: data, getArrayTime, getTime }) => {
  const addTime = ({ row, column, time, rowSpan }) => {

    for (let i = row; i < row + rowSpan; i++) {
      data[i].count[column].value.isActive = false;
    }

    data[row].count[column].value = {...time, isActive: true};

    getTime({
      value: {...time},
      category: data[row].count[column].category,
    });
    getArrayTime(data);
  };

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
