import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';

const users = ["太郎", "メンダコ", "山田", "次郎", "田中"];

export default function Tarou() {
  const [name, setName] = useState("太郎");

  const clicked = () => {
    console.log('100万円分のメンダコをあげます！');
    setName("メンダコ");
  };

  useEffect(() => {
    console.log("Welcome!");
  }, []);

  return (
    <div className="text-red-500 bg-green-500 p-5">
      <p>{name}</p>
      <button
        className="px-2 bg-white border-4 border-green-500 rounded-xl"
        onClick={clicked}
      >
        このボタンを押すと100万円もらえるよ
      </button>

      {name === "太郎"
        ? <span>おかえりなさいご主人様</span>
        : <span>誰だお前</span>
      }

      {users.map((user, index) =>
        <Seat name={user} key={index} />
      )}

      <Milk message="以上部品によるコメントでした" />
      <Milk message={name} />
    </div>
  )
}

function Milk({message}) {
  return (
    <div className="p-4 border-2 border-black rounded-xl">
      <h1 className="text-xl font-bold">これは部品（コンポーネント）だよ</h1>
      {message}
    </div>
  );
};

function Seat({ name }) {
  return (
    <div className="text-white font-bold px-2 border-2 border-lime-500 bg-lime-300 rounded-full">
      {name}さんのお席
    </div>
  )
}