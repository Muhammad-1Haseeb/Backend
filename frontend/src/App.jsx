import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get('/api/images')
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <>
      <h1 className="text-red-500 text-4xl font-bold">Full Stack Images App</h1>
      <p>Total Images: {images.length}</p>

      {images.map((image) => (
        <div key={image.id} style={{ marginBottom: '20px' }}>
          <img
            src={image.src}
            alt={`Image ${image.id}`}
            width="400"
          />
        </div>
      ))}
    </>
  );
}

export default App;
