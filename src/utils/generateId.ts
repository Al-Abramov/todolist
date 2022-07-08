export function generateId() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let id = '';
  const max = 1;
  const min = 9;
  const maxChar = alphabet.length - 1;
  const minChar = 0;

  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * (maxChar - minChar + 1)) + minChar;

    id += Math.floor(Math.random() * (max - min + 1)) + min;
    id += alphabet[index];
  }

  return id;
}
