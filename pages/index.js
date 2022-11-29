import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  const [name, setName] = useState("太郎");

  const clicked = () => {
    console.log('100万円分のメンダコをあげます！');
    setName("メンダコ");
  };

  useEffect(() => {
    console.log("Welcome!");
  }, []);

  return (
    <div className="text-red-500 bg-blue-500 p-5">
      <p>{name}</p>
      <button
        className="px-2 bg-white border-4 border-green-500 rounded-xl"
        onClick={clicked}
      >
        このボタンを押すと100万円もらえるよ
      </button>
    </div>
  )
}
