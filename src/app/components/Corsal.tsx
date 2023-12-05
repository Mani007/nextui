import React, {useState} from 'react'
import {items} from '../data/datacard'
import Card from './Card'
function Corsal() {
const [activeIndex, setActiveIndex] = useState(0);
const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <>
     <div className="container justify-center mx-auto flex px-5 py-7 md:flex-row flex-col items-center" >
        {items.map((item) => {
          return (
            <div className='mx-3'>
                    <Card images = {item.images} title = {item.title} description = {item.description}  />
            </div>
          )
        })}
      </div>
      <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">back</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  dot 
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">next</span>
        </button>

    </>
  )
}

export default Corsal