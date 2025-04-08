import { useContext, useEffect } from "react";
import axios from 'axios'

export default function Content() {
  const { test, setTest } = useContext(AppContext);

  return (
    <>
      <div>Hello</div>
    </>
  );
}