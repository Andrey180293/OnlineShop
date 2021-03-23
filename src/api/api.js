import { db, auth } from "../servises/firebase";

export const getProducts = (product) => {
  db.collection(`${product}`)
    .get()
    .then((querySnapshot) => {
      return querySnapshot;
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
    });
};

useEffect(() => {
  db.collection("phones")
    .get()
    .then((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setState([...users]);
      // console.log(state);
    });
  db.collection("robots")
    .get()
    .then((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setStates([...users]);
      //  console.log(states);
    });
}, []);
