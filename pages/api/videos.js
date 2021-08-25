const API_KEY = "AIzaSyD5BW9S1W4ode8MJsCfqjJ0g7P15D1koog";
const CHANNEL_ID = "UCLsSfk2x6p3XvlknDi39zCQ";
const BASE_API = "https://www.googleapis.com/youtube/v3/";

async function getVideoList(req, res) {
  console.log(req);
  const response = await fetch(
    `${BASE_API}search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
  );
  if (!response.ok) {
    res.status(400).json({ error: true });
  }
  const data = await response.json();
  res.status(200).json(data);
}
export default getVideoList;
