const normalSort = (data, field, order) => {
  const sortData = [...data].sort(sortByField(field, order));
  return sortData;
};

const sortByField = (field, order) => {
  return (a, b) => {
    const valA = a[field];
    const valB = b[field];
    if (order === "asc") {
      return valA === valB ? 0 : valA > valB ? -1 : 1;
    }
    if (order === "desc") {
      return valA === valB ? 0 : valA < valB ? -1 : 1;
    }
  };
};
export default normalSort;
