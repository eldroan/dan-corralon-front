export default async function loginUserMock(email, password) {
  // Esperamos aleatoreamente entre 1000 y 3000 ms para nuestra "request"
  const timeout = Math.floor(Math.random() * 2001) + 1000;
  await new Promise((p) => setTimeout(p, timeout));

  // Ejemplo hardcodeado de falla
  if (email == "leandroamarillo@outlook.com") {
    return { error: "Lo siento Leandro, me temo que no puedo hacer eso..." };
  }

  return { success: true };
}
