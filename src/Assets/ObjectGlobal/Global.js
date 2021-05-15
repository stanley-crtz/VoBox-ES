const WeekDays = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

export const getTimes = (init, end) => {
  let isMorning = true;
  let isMorningPlus = true;
  const initHourMorning = init;
  const endingHourNight = end;
  let time = [];

  for (let i = initHourMorning; i <= endingHourNight; i++) {
    let count = [];
    let hours = i;

    if (hours > 11 && isMorning) isMorning = !isMorning;

    if (hours > 10 && isMorningPlus) isMorningPlus = !isMorningPlus;

    let stateDay = isMorning ? "am" : "pm";

    let hoursPlus = hours + 1 ;

    let stateDayPlus = isMorningPlus ? "am" : "pm";

    for (let j = 0; j <= 6; j++) {
      count[j] = {
        value: {
          isActive: null,
          hours,
          stateDay,
          hoursPlus,
          stateDayPlus
        },
        category: WeekDays[j],
      };
    }

    time.push({
      title: {
        hours,
        stateDay
      },
      count,
    });
  }

  return time;
};
