import { GUI } from "lil-gui";

const useGUI = (settings, parentGui = null) => {
  const guiRef = parentGui || new GUI();

  Object.keys(settings).forEach((key) => {
    if (
      typeof settings[key] === "object" &&
      !Array.isArray(settings[key]) &&
      settings[key] !== null
    ) {
      const folder = guiRef.addFolder(key);
      useGUI(settings[key], folder);
    } else {
      guiRef.add(settings, key);
    }
  });

  return guiRef;
};

export default useGUI;