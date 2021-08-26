async function searchVideo(input) {
  const response = await fetch(`/api/search-video?input=${input}`);
  if (!response.ok) {
    throw new Error("No se pudo obtener los datos");
  }
  const data = await response.json();
  return data;
}

export default searchVideo;
