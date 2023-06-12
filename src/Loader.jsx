import { Html, useProgress } from '@react-three/drei';

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    active && (
      <Html center>
        <div
          style={{
            background: 'rgba(0,0,0,0.8)',
            color: '#FFF',
            padding: '20px',
            borderRadius: '5px',
          }}
        >
          <strong>Loading: {item}</strong>
          <br />
          <progress id="progress" max={100} value={progress}>
            {progress}
          </progress>
        </div>
      </Html>
    )
  );
}

export default Loader;