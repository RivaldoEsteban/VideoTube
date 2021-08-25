// https://www.googleapis.com/youtube/v3/search?key=[key]&channelId=[canalID]&part=snippet,id&order=date&maxResults=5
// import dotenv from "dotenv";

async function getVideoList() {
  const response = await fetch(`/api/videos`);
  console.log(response);
  if (!response.ok) {
    throw new Error("No se pudo obtener los datos");
  }
  const data = await response.json();
  return data;
}

export default getVideoList;
