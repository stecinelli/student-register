export const allBootcamps = (state = null, action) => {
  switch (action.type) {
    case 'FECTH_ALL_BOOTCAMPS':
      return {
        allBootcamps: action.allBootcamps,
        bootcampListName: action.allBootcamps.map(bootcampInfo => bootcampInfo.bootcamp)
      };
    default:
      return state;
  }
};

export const filterBootcamp = (state = 'all', action) => {
  switch (action.type) {
    case 'FILTER_BOOTCAMP':
      return action.filterBootcamp;
    default:
      return state;
  }
};