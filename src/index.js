import React, { useEffect, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function Child2() {
  useEffect(() => {
    console.log("Child2 effect create");

    return () => {
      console.log("Child2 effect destroy");
    };
  }, []);

  useLayoutEffect(() => {
    console.log("Child2 layout effect create");

    return () => {
      console.log("Child2 layout effect destroy");
    };
  }, []);

  return <p>Child2</p>;
}

function Child1() {
  useEffect(() => {
    console.log("Child1 effect create");

    return () => {
      console.log("Child1 effect destroy");
    };
  }, []);

  useLayoutEffect(() => {
    console.log("Child1 layout effect create");

    return () => {
      console.log("Child1 layout effect destroy");
    };
  }, []);

  return <p>Child1</p>;
}

function App() {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum(function add1(pre) {
      return pre + 1;
    });
    setNum(function add2(pre) {
      return pre + 2;
    });
    setNum(function add3(pre) {
      return pre + 3;
    });
    setTimeout(function logNum() {
      console.log(num);
    });
  };

  useEffect(() => {
    console.log("App effect create");

    return () => {
      console.log("App effect destroy");
    };
  }, []);

  useLayoutEffect(() => {
    console.log("App layout effect create");

    return () => {
      console.log("App layout effect destroy");
    };
  }, []);

  return (
    <div onClick={handleClick}>
      dongdongdong {num}
      <div>{num % 12 === 0 ? <Child1 /> : num}</div>
      <div>
        <p>{num % 12 === 0 ? <Child2 /> : num}</p>
      </div>
    </div>
  );
}

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
