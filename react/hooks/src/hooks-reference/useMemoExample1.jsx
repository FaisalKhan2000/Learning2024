import { useEffect, useMemo, useState } from "react";
import format from "date-fns/format";
import "../css/reset.css";
import "../css/useMemoExample1.css";

const UseMemoExample1 = () => {
  // We hold the user's selected number in state.
  const [selectedNum, setSelectedNum] = useState(100);

  // `time` is a state variable that changes once per second,
  // so that it's always in sync with the current time.
  const time = useTime();

  // We calculate all of the prime numbers between 0 and the
  // user's chosen number, `selectedNum`:

  // const allPrimes = [];

  // for (let counter = 2; counter < selectedNum; counter++) {
  //   if (isPrime(counter)) {
  //     allPrimes.push(counter);
  //   }
  // }

  const allPrimes = useMemo(() => {
    const result = [];

    for (let counter = 2; counter < selectedNum; counter++) {
      if (isPrime(counter)) {
        result.push(counter);
      }
    }

    return result;
  }, [selectedNum]);

  const handleChange = (e) => {
    // To prevent computers from exploding,
    // we'll max out at 100k
    let num = Math.min(100_000, Number(e.target.value));

    setSelectedNum(num);
  };

  return (
    <>
      <p className="clock">{format(time, "hh:mm:ss a")}</p>
      <form>
        <label htmlFor="num">Your Number:</label>
        <input type="number" name="num" id="num" onChange={handleChange} />
      </form>

      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{" "}
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </p>
    </>
  );
};

// Helper function that calculates whether a given
// number is prime or not.

const isPrime = (n) => {
  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
};

// useTime
const useTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return time;
};

export default UseMemoExample1;
