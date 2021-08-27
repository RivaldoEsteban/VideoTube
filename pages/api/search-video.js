const API_KEY = process.env.API_KEY;
const BASE_API = process.env.BASE_API;

async function searchVideo(req, res) {
  const response = await fetch(
    `${BASE_API}search?part=snippet&key=${API_KEY}&type=video&q=${req.query.input}&maxResults=${req.query.maxResults}`
  );
  if (!response.ok) {
    throw new Error("No puedes buscar videos");
  }
  if (!response.ok) {
    res.status(400).json({ error: true });
  }
  const data = await response.json();
  res.status(200).json(data);
}

export default searchVideo;
