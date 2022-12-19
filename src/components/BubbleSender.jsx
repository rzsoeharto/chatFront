import React, { useEffect, useRef } from "react";

function BubbleSender({ arr }) {
  const bottomRef = useRef();
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [arr]);

  return (
    <>
      <div className="flex flex-col mb-2 w-full overflow-y-scroll">
        {arr.map((data, index) => (
          <div ref={bottomRef} key={index} className="chat chat-start">
            <div className="chat-header">{data.sender}</div>
            <div className="chat-bubble max-w-sm word-wrap">{data.message}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BubbleSender;
