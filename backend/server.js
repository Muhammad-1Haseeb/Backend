import express from 'express'
import cors from 'cors'

const app = express();

const PORT = 3000;

app.use(cors());

app.use('/images', express.static('images'));

app.get('/', (req, res)=>{
  res.send('Hello World!')
})

app.get('/api/images', (req, res)=>{
    const images = [
        {
      id: 1,
      src: '/images/batman-city-moonlight-neon-style-desktop-wallpaper-4k.jpg',
    },
    {
      id: 2,
      src: '/images/kaneki-ken-half-ghoul-red-glow-desktop-wallpaper-4k.jpg',
    },
    {
      id: 3,
      src: '/images/space-fog-planets-desktop-wallpaper.jpg',
    },
    ];
    res.json(images);
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})