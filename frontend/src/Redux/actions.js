export const setAllBootcamps = data => ({
  type: 'FECTH_ALL_BOOTCAMPS',
  allBootcamps: [...data],
});

export const setFilterBootcamp = filter => ({
  type: 'FILTER_BOOTCAMP',
  filterBootcamp: filter,
});