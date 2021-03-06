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
