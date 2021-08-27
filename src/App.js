import "./styles.css";
import Axios from "axios";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState("");
  const [fname, setFname] = useState("");

  const getRecord = (e) => {
    const newdata = { data };
    newdata[e.target.id] = e.target.value;
    //console.log(newdata.name);
    //setData(newdata.name);

    //const getname = newdata.name;
    setFname(newdata.name);
  };

  const getValue = (e) => {
    const url = "https://restcountries.eu/rest/v2/all";

    Axios.get(url)
      .then((Res) => {
        // console.log(Res.data);
        //console.log(getname);
        let llenght = Res.data.length;
        for (let i = 0; i < llenght; i++) {
          //if(Res.data[)
          //console.log(Res.data[i].name);
          //console.log(fname);
          if (Res.data[i].name === fname) {
            //console.log(Res.data[i].population);
            setData(Res.data[i].population);
          }
        }
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <input
          onChange={(e) => getRecord(e)}
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <br />
        <br />
        <input
          onChange={(e) => getRecord(e)}
          value={data}
          type="text"
          name="pdata"
          id="pdata"
          placeholder="population"
        />
        <br />
        <br />
        <input
          onClick={(e) => getValue(e)}
          type="button"
          name="submit"
          id="submit"
          value="submit"
        />
      </div>
    </div>
  );
}
