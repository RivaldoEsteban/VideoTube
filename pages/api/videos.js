const API_KEY = process.env.API_KEY;
const CHANNEL_ID = process.env.CHANNEL_ID;
const BASE_API = process.env.BASE_API;

async function getVideoList(req, res) {
  const response = await fetch(
    `${BASE_API}search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
  );
  console.log("response", response);
  if (!response.ok) {
    res.status(400).json({ error: true });
  }
  const data = await response.json();
  res.status(200).json(data);
}
export default getVideoList;
