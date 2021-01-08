import React, { useEffect, useState } from "react";
import { dbService } from "../firebase";

const Home = () => {
    const [checipe, setchecipe] = useState("");
    const [checipes, setchecipes] = useState([]);
    const getchecipes = async() => {
    
       const dbchecipes = await dbService.collection("checipe").get()
       dbchecipes.forEach((document) => {
           const checipeObject = {
               ...document.data(),
               id: document.id,
           }
           setchecipes((prev) => [checipeObject, ...prev]);
       });
        console.log(dbchecipes);
    };
    useEffect(()=>{
        getchecipes();
    },[]);
    
    
    const onSubmit = async (event) => {
      event.preventDefault();
      await dbService.collection("checipe").add({
          checipe,
          createdAt:Date.now(),
      });
      setchecipe("");
    };
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      setchecipe(value);
    };
    console.log(checipes);
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input
            value={checipe}
            onChange={onChange}
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
          />
          <input type="submit" value="checipe" />
        </form>
        <div key={checipe.id}>
            {checipes.map(checipe => <div>
                <h4>{checipe.checipe}</h4></div>)}
        </div>
      </div>
    );
  };
export default Home;