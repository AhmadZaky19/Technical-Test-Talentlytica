import React, { useState } from "react";
import "./App.css";

function App() {
  const [nilai, setNilai] = useState({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });

  const handleChange = (event) => {
    let string = event.target.name.split(" ");
    let string_1 = string[0];
    let string_2 = string[1];

    if (string_1 === "aspekPenilaian_1") {
      if (string_2 === "mahasiswa_1") {
        setNilai({
          ...nilai,
          aspek_penilaian_1: {
            ...nilai.aspek_penilaian_1,
            mahasiswa_1: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_2") {
        setNilai({
          ...nilai,
          aspek_penilaian_1: {
            ...nilai.aspek_penilaian_1,
            mahasiswa_2: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_3") {
        setNilai({
          ...nilai,
          aspek_penilaian_1: {
            ...nilai.aspek_penilaian_1,
            mahasiswa_3: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_4") {
        setNilai({
          ...nilai,
          aspek_penilaian_1: {
            ...nilai.aspek_penilaian_1,
            mahasiswa_4: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_5") {
        setNilai({
          ...nilai,
          aspek_penilaian_1: {
            ...nilai.aspek_penilaian_1,
            mahasiswa_5: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_6") {
        setNilai({
          ...nilai,
          aspek_penilaian_1: {
            ...nilai.aspek_penilaian_1,
            mahasiswa_6: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_7") {
        setNilai({
          ...nilai,
          aspek_penilaian_1: {
            ...nilai.aspek_penilaian_1,
            mahasiswa_7: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_8") {
        setNilai({
          ...nilai,
          aspek_penilaian_1: {
            ...nilai.aspek_penilaian_1,
            mahasiswa_8: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_9") {
        setNilai({
          ...nilai,
          aspek_penilaian_1: {
            ...nilai.aspek_penilaian_1,
            mahasiswa_9: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_10") {
        setNilai({
          ...nilai,
          aspek_penilaian_1: {
            ...nilai.aspek_penilaian_1,
            mahasiswa_10: Number(event.target.value),
          },
        });
      }
    } else if (string_1 === "aspekPenilaian_2") {
      if (string_2 === "mahasiswa_1") {
        setNilai({
          ...nilai,
          aspek_penilaian_2: {
            ...nilai.aspek_penilaian_2,
            mahasiswa_1: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_2") {
        setNilai({
          ...nilai,
          aspek_penilaian_2: {
            ...nilai.aspek_penilaian_2,
            mahasiswa_2: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_3") {
        setNilai({
          ...nilai,
          aspek_penilaian_2: {
            ...nilai.aspek_penilaian_2,
            mahasiswa_3: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_4") {
        setNilai({
          ...nilai,
          aspek_penilaian_2: {
            ...nilai.aspek_penilaian_2,
            mahasiswa_4: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_5") {
        setNilai({
          ...nilai,
          aspek_penilaian_2: {
            ...nilai.aspek_penilaian_2,
            mahasiswa_5: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_6") {
        setNilai({
          ...nilai,
          aspek_penilaian_2: {
            ...nilai.aspek_penilaian_2,
            mahasiswa_6: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_7") {
        setNilai({
          ...nilai,
          aspek_penilaian_2: {
            ...nilai.aspek_penilaian_2,
            mahasiswa_7: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_8") {
        setNilai({
          ...nilai,
          aspek_penilaian_2: {
            ...nilai.aspek_penilaian_2,
            mahasiswa_8: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_9") {
        setNilai({
          ...nilai,
          aspek_penilaian_2: {
            ...nilai.aspek_penilaian_2,
            mahasiswa_9: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_10") {
        setNilai({
          ...nilai,
          aspek_penilaian_2: {
            ...nilai.aspek_penilaian_2,
            mahasiswa_10: Number(event.target.value),
          },
        });
      }
    } else if (string_1 === "aspekPenilaian_3") {
      if (string_2 === "mahasiswa_1") {
        setNilai({
          ...nilai,
          aspek_penilaian_3: {
            ...nilai.aspek_penilaian_3,
            mahasiswa_1: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_2") {
        setNilai({
          ...nilai,
          aspek_penilaian_3: {
            ...nilai.aspek_penilaian_3,
            mahasiswa_2: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_3") {
        setNilai({
          ...nilai,
          aspek_penilaian_3: {
            ...nilai.aspek_penilaian_3,
            mahasiswa_3: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_4") {
        setNilai({
          ...nilai,
          aspek_penilaian_3: {
            ...nilai.aspek_penilaian_3,
            mahasiswa_4: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_5") {
        setNilai({
          ...nilai,
          aspek_penilaian_3: {
            ...nilai.aspek_penilaian_3,
            mahasiswa_5: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_6") {
        setNilai({
          ...nilai,
          aspek_penilaian_3: {
            ...nilai.aspek_penilaian_3,
            mahasiswa_6: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_7") {
        setNilai({
          ...nilai,
          aspek_penilaian_3: {
            ...nilai.aspek_penilaian_3,
            mahasiswa_7: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_8") {
        setNilai({
          ...nilai,
          aspek_penilaian_3: {
            ...nilai.aspek_penilaian_3,
            mahasiswa_8: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_9") {
        setNilai({
          ...nilai,
          aspek_penilaian_3: {
            ...nilai.aspek_penilaian_3,
            mahasiswa_9: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_10") {
        setNilai({
          ...nilai,
          aspek_penilaian_3: {
            ...nilai.aspek_penilaian_3,
            mahasiswa_10: Number(event.target.value),
          },
        });
      }
    } else if (string_1 === "aspekPenilaian_4") {
      if (string_2 === "mahasiswa_1") {
        setNilai({
          ...nilai,
          aspek_penilaian_4: {
            ...nilai.aspek_penilaian_4,
            mahasiswa_1: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_2") {
        setNilai({
          ...nilai,
          aspek_penilaian_4: {
            ...nilai.aspek_penilaian_4,
            mahasiswa_2: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_3") {
        setNilai({
          ...nilai,
          aspek_penilaian_4: {
            ...nilai.aspek_penilaian_4,
            mahasiswa_3: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_4") {
        setNilai({
          ...nilai,
          aspek_penilaian_4: {
            ...nilai.aspek_penilaian_4,
            mahasiswa_4: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_5") {
        setNilai({
          ...nilai,
          aspek_penilaian_4: {
            ...nilai.aspek_penilaian_4,
            mahasiswa_5: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_6") {
        setNilai({
          ...nilai,
          aspek_penilaian_4: {
            ...nilai.aspek_penilaian_4,
            mahasiswa_6: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_7") {
        setNilai({
          ...nilai,
          aspek_penilaian_4: {
            ...nilai.aspek_penilaian_4,
            mahasiswa_7: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_8") {
        setNilai({
          ...nilai,
          aspek_penilaian_4: {
            ...nilai.aspek_penilaian_4,
            mahasiswa_8: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_9") {
        setNilai({
          ...nilai,
          aspek_penilaian_4: {
            ...nilai.aspek_penilaian_4,
            mahasiswa_9: Number(event.target.value),
          },
        });
      } else if (string_2 === "mahasiswa_10") {
        setNilai({
          ...nilai,
          aspek_penilaian_4: {
            ...nilai.aspek_penilaian_4,
            mahasiswa_10: Number(event.target.value),
          },
        });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nilai);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Aplikasi Penilaian Mahasiswa</h1>
      <form onSubmit={handleSubmit}>
        <table border={true}>
          <thead>
            <tr>
              <th></th>
              <th style={{ textAlign: "center" }}>Aspek Penilaian 1</th>
              <th style={{ textAlign: "center" }}>Aspek Penilaian 2</th>
              <th style={{ textAlign: "center" }}>Aspek Penilaian 3</th>
              <th style={{ textAlign: "center" }}>Aspek Penilaian 4</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, i) => (
              <tr key={i}>
                <td style={{ width: "25%" }}>Mahasiswa {i + 1}</td>
                {[...Array(4)].map((_, j) => (
                  <td key={j}>
                    <select
                      name={`aspekPenilaian_${j + 1} mahasiswa_${i + 1}`}
                      onChange={handleChange}
                    >
                      <option disabled selected value>
                        --
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="center">
          <button className="submitButton" type="submit">
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
