export const concatenar = (json) => {
  const capitalizar = (text) => {
    if (!text) return "";
    return text
      .split(" ")
      .map(
        (palabra) =>
          palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
      )
      .join(" ");
  };

  return json.map((persona) => {
    const nombre = capitalizar(persona.nombre);
    const apellido = capitalizar(persona.apellido);
    const apellido2 = capitalizar(persona.apellido2);
    return [nombre, apellido, apellido2].filter(Boolean).join(" ");
  });
};

export default concatenar;
