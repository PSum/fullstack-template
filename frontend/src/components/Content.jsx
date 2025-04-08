import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import axios from 'axios'

export default function Content() {
  const { test, setTest } = useContext(AppContext);

  return (
    <>
      <div>nice</div>
    </>
  );
}