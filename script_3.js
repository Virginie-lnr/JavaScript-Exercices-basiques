// 2.2.2 Pyramide de Mario

let size = prompt("Salut, bienvenue dans ma pyramide! Combien d'étages veux-tu?")

current_size = 0
i = 0;

while (i <= size) {
  console.log(' '.repeat(size) + '#'.repeat(current_size));
  size = size - 1
  current_size = current_size + 1
}
