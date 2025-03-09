const media = (json) => {
  const total = json.reduce((acc, persona) => acc + persona.edad, 0);
  const promedio = total / json.length;
  return promedio;
};

export default media;
