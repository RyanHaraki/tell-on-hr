import { useState } from "react";
import Link from "next/link";
import { addIssue } from "../firebase/firebase";

// JS version of html; CSS in HTMl in JS
export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [issues, setIssues] = useState([]);

  const onTextChange = (e) => setText(e.target.value);

  const addToIssues = async () => {
    addIssue(text);
  };

  return (
    <div>
      {/* HEADER */}
      <div className="flex align-center justify-center items-center p-3 bg-headerColor bg-opacity-50">
        <img src="/LOGO1.svg" width={100} height={50} />
        <Link href="/">
          <p className="font-bold px-5 text-white text-xl hover:text-gray-300 cursor-pointer">
            TELLONHR
          </p>
        </Link>
        <Link href="/issues">
          <p className="text-white text-xl font-bold hover:text-gray-300 cursor-pointer px-5">
            View Issues
          </p>
        </Link>
      </div>

      <div className="flex h-screen justify-center items-center flex-col">
        <h1 className="text-2xl py-5 font-bold text-headerColor text-opacity-60">
          What's on your mind?
        </h1>
        <textarea
          className="w-2/3 md:w-1/2 h-40 rounded-md border-gray-200 border-2 my-4 p-2"
          placeholder="Type something here..."
          onChange={onTextChange}
        />

        <button
          onClick={addToIssues}
          className="text-white px-4 py-3 rounded-md m-10 bg-headerColor hover:bg-gray-500 bg-opacity-50 font-bold"
        >
          Submit
        </button>
      </div>

      {issues.map((item, e) => {
        return <p key={e}>{item.text}</p>;
      })}
    </div>
  );
}
