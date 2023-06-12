import { useEffect } from 'react';
import GUI from 'lil-gui';

const useGUI = (ref) => {
  useEffect(() => {
    const gui = new GUI(); // The GUI class is used to create a GUI object.

    // Move the GUI to the bottom right corner of the screen.
    document.body.appendChild(gui.domElement); 

    gui.domElement.style.position = 'fixed';
    gui.domElement.style.right = '0px';
    gui.domElement.style.top = 'auto';
    gui.domElement.style.bottom = '0px';

    const folder = gui.addFolder('Transform'); // The addFolder method is used to create a folder in the GUI object.
    let control; // The control variable is used to store the control object returned by the add method.

    control = folder.add(ref.current.position, 'x', -50, 50); // The add method is used to add a control to the folder. The add method takes three arguments: the object to which the control is added, the name of the property to which the control is added, and the minimum and maximum values of the control.
    control.name('Position X'); // The name method is used to set the name of the control.

    control = folder.add(ref.current.position, 'y', -50, 50);
    control.name('Position Y');

    control = folder.add(ref.current.position, 'z', -50, 50);
    control.name('Position Z');

    control = folder.add(ref.current.rotation, 'x', -Math.PI, Math.PI); // -Math.PI and Math.PI are used to set the minimum and maximum values of the control to -π and π, respectively. This is because the rotation values are in radians. Which means that the minimum and maximum values of the control are -180° and 180°, respectively.
    control.name('Rotation X');

    control = folder.add(ref.current.rotation, 'y', -Math.PI, Math.PI);
    control.name('Rotation Y');

    control = folder.add(ref.current.rotation, 'z', -Math.PI, Math.PI);
    control.name('Rotation Z');

    control = folder.add(ref.current.scale, 'x', 0, 10);
    control.name('Scale X');

    control = folder.add(ref.current.scale, 'y', 0, 10);
    control.name('Scale Y');

    control = folder.add(ref.current.scale, 'z', 0, 10);
    control.name('Scale Z');

    folder.close(); // The close method is used to close the folder, which means that the folder will be collapsed when the GUI is created. You can also use the open method to open the folder, which means that the folder will be expanded when the GUI is created.

    return () => gui.destroy(); // The destroy method is used to destroy the GUI object when the component is unmounted. This is to prevent memory leaks.
  }, [ref]); // The useEffect hook is called every time the ref object changes. This happens when the glTF model is loaded.
};

export default useGUI;
