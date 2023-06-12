import { Html, useProgress } from '@react-three/drei';

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    active && (
      <Html center>
        <div
          style={{
            background: 'rgba(255,255,255,0.8)',
            color: '#000',
            padding: '20px',
            borderRadius: '5px',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0px 0px 20px 3px rgba(0,0,0,0.5)',
            fontFamily: '"Arial", sans-serif',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          <div>Loading: {item}</div>
          <progress
            id="progress"
            max={100}
            value={progress}
            style={{
              width: '100%', 
              marginTop: '15px',
              height: '20px',
              borderRadius: '10px',
              border: 'none',
              color: '#000',
              backgroundColor: '#ccc',
            }}
          >
            {progress}
          </progress>
        </div>
      </Html>
    )
  );
}

export default Loader;
