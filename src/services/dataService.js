const athletesData = [
  {
    place: "1",
    athleteName: "Иванов Иван",
    country: "Украина",
    time: 33.5,
    hit: 4,
    rateFire: 2.2,
  },
  {
    place: "3",
    athleteName: "Петров Петр",
    country: "Уругваи",
    time: 34.5,
    hit: 2,
    rateFire: 2.5,
  },
  {
    place: "2",
    athleteName: "Димитров Дмитрий",
    country: "Россия",
    time: 36.5,
    hit: 3,
    rateFire: 2.7,
  },
  {
    place: "4",
    athleteName: "Серов Дмитрий",
    country: "Америка",
    time: 37.5,
    hit: 2,
    rateFire: 2.3,
  },
];

const getData = new Promise((resolve) => {
  setTimeout(() => {
    resolve(athletesData);
  }, 1000);
});
export default getData;
