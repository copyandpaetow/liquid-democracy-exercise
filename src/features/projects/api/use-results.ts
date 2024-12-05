import { useState, useEffect } from "react";
import { Data, getData } from "./data";

/*
this is a super hacky way of doing this. We would need proper caching, invalidation etc. This is something I would use a library for but is out of scope here

*/

export const useResults = () => {
  const [result, setResult] = useState<{
    status: "idle" | "loading" | "success" | "error";
    data: Data | null;
  }>({ status: "idle", data: null });

  useEffect(() => {
    const fetchData = async () => {
      setResult((prevState) => ({ ...prevState, status: "loading" }));

      try {
        const data = await getData();
        //@ts-expect-error the stringified data is not type data, but the re-parsed one is.I want to wrestle with TS atm
        const parsed = JSON.parse(data) as Data;
        console.log({ data, parsed });
        setResult((prevState) => ({
          ...prevState,
          status: "success",
          data: parsed,
        }));
      } catch (error) {
        setResult((prevState) => ({
          ...prevState,
          status: "error",
          data: null,
        }));
      }
    };
    fetchData();
  }, []);

  return result;
};
