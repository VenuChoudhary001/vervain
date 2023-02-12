import React,{useContext} from "react";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import GLOBAL_CONTEXT from "../context/store";

const appId = "3f431fef-0a1b-47c9-b5b0-306bf625f1ce";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);
const VoiceSearch = ({setSearch,setShow}) => {

  const { getSearchedItems}=useContext(GLOBAL_CONTEXT)
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const startListening = () =>{
      setSearch(transcript)
      SpeechRecognition.startListening({ continuous: true });
    }
  if (!browserSupportsSpeechRecognition) {
    return (<>
     <div className="absolute rounded-[10px] top-[50px] bg-dark-200 w-[500px] h-[200px] flex flex-col gap-2 items-center justify-center z-[80]">
      <div
        className=" bg-dark-200 w-10 h-10 border-[1px] cursor-pointer flex items-center justify-center rounded-full"
      >
        <img src={"/voice.svg"} alt="" />
      </div>
      <p className="text-white">Your browser doesn't support</p>
    </div>
    </>)
  }
  const handleSearch=()=>{
    setSearch(transcript);
    setShow(false);
    getSearchedItems(transcript)
  }


  return (
    <div className="absolute rounded-[10px] top-[50px] bg-dark-200 w-[500px] h-[200px] flex flex-col gap-2 items-center justify-center z-[80]">
        <img src="/close.svg" alt="" className="block w-4 absolute top-5 right-5 cursor-pointer" onClick={()=>setShow(false)} />
      <p className="font-medium text-red-500">Microphone: {listening ? "on" : "off"}</p>
      <p className="font-medium text-red-500">Hold on to the microphone</p>
      <div
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={()=>SpeechRecognition.stopListening}
        onMouseUp={SpeechRecognition.stopListening}
        className=" bg-dark-200 w-10 h-10 border-[1px] cursor-pointer flex items-center justify-center rounded-full"
      >
        <img src={listening?"/voice_red.svg":"/voice.svg"} alt="" />
      </div>
      <p className="text-white">{transcript}</p>
      <div className="bg-dark p-2 cursor-pointer  max-w-min rounded" onClick={handleSearch}>Search</div>
    </div>
  );
};

export default VoiceSearch;
