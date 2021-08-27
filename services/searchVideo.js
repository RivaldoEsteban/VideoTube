async function searchVideo(input, maxResults) {
  console.log(maxResults);
  const response = await fetch(
    `/api/search-video?input=${input}&maxResults=${maxResults}`
  );
  if (!response.ok) {
    throw new Error("No se pudo obtener los datos");
  }
  const data = await response.json();
  return data;
}

export default searchVideo;
