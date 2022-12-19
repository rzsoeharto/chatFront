import React, { useRef } from "react";

function YourBubble({ arr }) {
  const bottomRef = useRef();
  return (
    <div className="flex flex-col mb-2 w-full overflow-y-scroll">
      <div ref={bottomRef} className="chat chat-end">
        <div className="chat-header">
          {/* {data.sender} */}
          ajasjhd
        </div>
        <div className="chat-bubble bg-white text-black max-w-sm word-wrap">
          {/* {data.message} */}
          hi
        </div>
      </div>
      {/* {arr.map((data, index) => (
      ))} */}
    </div>
  );
}

export default YourBubble;
