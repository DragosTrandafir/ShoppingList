import React from "react";
//interface Props {
// heading: string;
//}
import { useState, useEffect } from "react";
import ColorPickerRandom from "./ColorPickerRandom";

function ListAlerts() {
  const [inputValue, setInputValue] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [checked, setChecked] = useState(false);

  function hasLetters(s: string) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] != " ") return true;
    }
    return false;
  }
  function changeList(list: string[], value: string) {
    // Create a new array with the updated value
    if (value !== "" && hasLetters(value)) {
      const newList = [...list, value];
      return newList;
    } else {
      alert("The element is not an available option!");
      return list;
    }
  }

  function deleteItem(list: string[], index: number) {
    const newList: string[] = [];
    list.map((item, pos) => index != pos && newList.push(item));
    return newList;
  }

  const handlekeydown = (event1) => {
    if (event1.key === "Enter") {
      setItemsList(changeList(itemsList, inputValue));
      setInputValue("");
    }
  };

  return (
    <>
      <center>
        <h1>Shopping list</h1>
      </center>
      <div className="btn-group" role="group" aria-label="Basic example">
        <div className="input-group mb-3 form-width">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Item:
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Input an item"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyDown={(event) => {
              handlekeydown(event);
            }}
          />
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              setItemsList(changeList(itemsList, inputValue));
              setInputValue("");
            }}
          >
            Add
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setItemsList([]);
            }}
          >
            Delete everything
          </button>
        </div>
      </div>
      <div className="container-fluid">
        {itemsList.length < 1 ? (
          <p>No items in the list!</p>
        ) : (
          <ul>
            {itemsList.map((item, index) => (
              <ColorPickerRandom key={index}>
                <li>
                  <input
                    type="checkbox"
                    value="checkboxval"
                    onClick={() => {
                      setTimeout(() => {
                        setItemsList(deleteItem(itemsList, index));
                      }, 700);
                    }}
                    onChange={() => setChecked(checked)}
                    checked={checked}
                  />
                  <span>{item}</span>
                </li>
              </ColorPickerRandom>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default ListAlerts;
