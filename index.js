const div = document.querySelector("div");
const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const button = document.querySelector("button");
const body = document.querySelector("body");

div.classList.add("container");
button.classList.add("d-block","py-2","px-3", "text-white", "bg-secondary", "rounded-2");
h1.classList.add("my-4");
input.classList.add("my-4","w-100","p-3","rounded-2");
body.classList.add("bg-success");




input.value = randomQuotesFunc();

button.addEventListener("click", () => {input.value = randomQuotesFunc();
});

function randomQuotesFunc() {
  const quotes = [
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "Don't watch the clock; do what it does. Keep going.",
    "The secret of getting ahead is getting started.",
    "Well done is better than well said.",
    "You miss 100% of the shots you don’t take.",
    "A goal is a dream with a deadline.",
    "Outstanding people have one thing in common: An absolute sense of mission.",
    "Trying is winning in the moment.",
    "Fall down seven times and stand up eight.",
    "You just can't beat the person who never gives up.",
    "There is little success where there is little laughter.",
    "We cannot solve our problems with the same thinking we used when we created them.",
  ];

  const randomNumber = Math.floor(Math.random() * quotes.length);

  return quotes[randomNumber];
}
