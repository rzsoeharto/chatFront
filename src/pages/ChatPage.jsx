import React, { useRef, useState } from "react";
import { useContext } from "react";
import BubbleSender from "../components/BubbleSender";
import YourBubble from "../components/YourBubble";
import AuthContext from "../context/AuthContext";
import ChatContext from "../context/ChatContext";
// import MessageProfilePic from "../components/MessageProfilePic";

function ChatPage() {
  let { user } = useContext(AuthContext);
  let { chatSocket } = useContext(ChatContext);
  const [arr, setArr] = useState([]);

  const ref = useRef();

  chatSocket.onmessage = function (e) {
    const data = JSON.parse(e.data);
    const sender = data["sender"];
    setArr((oldArr) => [...oldArr, data]);
  };

  const handleSend = () => {
    if (ref.current.value != "") {
      chatSocket.send(
        JSON.stringify({
          sender: user,
          message: ref.current.value,
        })
      );
      ref.current.value = "";
    }
  };

  return (
    <>
      <div className="flex flex-col w-full h-full place-content-center px-8">
        <div className="flex h-4/5 p-2 space-x-1">
          <BubbleSender arr={arr} />
        </div>

        <div className="flex place-content-end">
          <input
            type="text"
            id="message"
            className="bg-white text-black rounded-full w-11/12 px-5"
            ref={ref}
          />

          <input
            type="button"
            value="Send"
            className="bg-white text-black p-1 rounded-full ml-4 w-1/12 cursor-pointer hover:bg-black hover:text-white"
            onClick={handleSend}
          />
        </div>
      </div>
    </>
  );
}

export default ChatPage;
