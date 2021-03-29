const findAthlete = (data, searchName) => {
  if (searchName.length === 0) {
    return data;
  }
  const athletes = data.filter(
    ({ athleteName }) =>
      athleteName.toLowerCase().indexOf(searchName.toLowerCase()) !== -1
  );
  return athletes;
};

export default findAthlete;
