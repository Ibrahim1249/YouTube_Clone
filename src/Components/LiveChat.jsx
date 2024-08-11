import React, { useEffect, useState } from "react";
import { generate, generateRandomText } from "../Constaint/constaint";
import icon from "../assets/icons-removebg-preview.png"

function LiveChat() {
  const [chat, setChat] = useState("");
  const [userChat, setUserChat] = useState([]);

  useEffect(() => {
    let timer = setInterval(() => {
      setUserChat(prevChat => {
        let updatedChat = [...prevChat];
        if (updatedChat.length >= 20) {
          updatedChat.pop();
        }
        updatedChat.unshift({ name: generate(), message: generateRandomText() });
        return updatedChat;
      });
    }, 1500);
  
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  function handleSubmit(e) {
    e.preventDefault();
    setUserChat(prevChat => {
      let updatedChat = [...prevChat];
      if (updatedChat.length >= 20) {
        updatedChat.pop(); 
      }
      updatedChat.unshift({ name: "Ibrahim", message: chat });
      return updatedChat;
    });
  
    setChat(""); 
  }

  


  return (
    <div className="border-2 my-4 h-[650px] w-[450px] rounded-lg flex flex-col border-black">
      <h3 className="my-4 text-center">Live Chat</h3>
      <div className="flex-grow flex flex-col-reverse overflow-y-auto px-4">
        {userChat &&
          userChat.map((user, index) => (
            <div key={index} className="mb-1 flex items-center gap-1">
               <img src={icon} alt="" className="w-10 h-10 rounded-full"/>
               <p className="text-[15px] text-slate-800">{user.name}</p>
               <p className="text-[17px] font-bold pl-2">{user.message}</p>
            </div>
          ))}
      </div>
      <form
        className="border-t-2 p-4 w-full border-black"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="border-2 w-full rounded-2xl px-4 py-1 border-black"
          placeholder="chat..."
          value={chat}
          onChange={(e) => {
            setChat(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default LiveChat;
