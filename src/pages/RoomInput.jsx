import React, { useState } from "react";

function RoomInput() {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      setText("");
    }
  };
  return (
    <>
      <div className="place-content-center grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  placeholder="Search"
                  value={text}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                >
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RoomInput;
