import { setAllBootcamps } from "./actions";

const fetchJson = path => fetch(path)
  .then(res => res.json());

const fetchAllBootcamps = () => {
  return async dispatch => {
    try {
      const bootcampFetch = await fetchJson('http://localhost:3001/bootcamps');
      dispatch(setAllBootcamps(bootcampFetch));
    } catch (err) {
      console.log(err);
    }
  }
};

const postBootcampInfo = (bootcamp, newDeveloper) => {
  return async dispatch => {
    try {
      await fetch(`http://localhost:3001/bootcamps/${bootcamp}/`, {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:newDeveloper,
      })
      dispatch(fetchAllBootcamps()) 
    } catch (err) {
      console.log(err);
    }
  }
}

export default fetchAllBootcamps;
export {postBootcampInfo}