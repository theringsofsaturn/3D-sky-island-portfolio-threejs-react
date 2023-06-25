import { GUI } from "lil-gui";
import { useEffect } from "react";

const useGUI = (callback) => {
  useEffect(() => {
    const gui = new GUI();
    callback(gui);
    return () => gui.destroy();
  }, [callback]);
};

export default useGUI;