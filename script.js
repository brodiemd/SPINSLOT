const prizes = [
  '<img src="https://cdn.glitch.global/7c73a667-d47a-4dc0-955c-b462c1d66c84/800px-Armadyl_godsword_detail.webp?v=1744503474112" alt="Prize 1" />',
  '<img src="https://cdn.glitch.global/7c73a667-d47a-4dc0-955c-b462c1d66c84/1200px-Abyssal_bludgeon_detail.webp?v=1744503476834" alt="Prize 2" />',
  '<img src="https://cdn.glitch.global/7c73a667-d47a-4dc0-955c-b462c1d66c84/1200px-Abyssal_whip_detail.webp?v=1744503478978" alt="Prize 3" />',
  '<img src="https://cdn.glitch.global/7c73a667-d47a-4dc0-955c-b462c1d66c84/1200px-Old_school_bond_detail.webp?v=1744503471902" alt="Prize 4" />',
  '<img src="https://cdn.glitch.global/7c73a667-d47a-4dc0-955c-b462c1d66c84/1200px-Serpentine_helm_detail.webp?v=1744503484644" alt="Prize 5" />'
];

const reelImages = [
  "https://cdn.glitch.global/fd2c8a45-bd31-47e3-8790-296b8498bd20/1279-bowstring.PNG?v=1744525703585",
  "https://cdn.glitch.global/fd2c8a45-bd31-47e3-8790-296b8498bd20/1291-OSRS.PNG?v=1744525707038",
  "https://cdn.glitch.global/fd2c8a45-bd31-47e3-8790-296b8498bd20/1298-Quest.PNG?v=1744525710480",
  "https://cdn.glitch.global/fd2c8a45-bd31-47e3-8790-296b8498bd20/1308-skillmagic.PNG?v=1744525713862",
  "https://cdn.glitch.global/fd2c8a45-bd31-47e3-8790-296b8498bd20/1311-skillslayer.PNG?v=1744525716797"
];

let used = false;

document.getElementById("spinBtn").addEventListener("click", function () {
  if (used) return alert("You already spun!");  // Prevent further spins if already used
  used = true;

  const resultText = document.getElementById("resultText");
  resultText.style.display = "none";  // Hide result text before spinning

  const spinSound = document.getElementById("spinSound");
  spinSound.play();

  const reels = [
    document.querySelector("#reel1 img"),
    document.querySelector("#reel2 img"),
    document.querySelector("#reel3 img")
  ];

  let spinDuration = 3000;  // Total spin time in milliseconds
  let intervalDuration = 100;  // Speed of the emoji change

  const spin = (reel) => {
    const idx = Math.floor(Math.random() * reelImages.length);  // Get a random index from reelImages
    reel.src = reelImages[idx];  // Set the reel's image
  };

  // Ensure all reels stop on the same image
  const finalImage = reelImages[Math.floor(Math.random() * reelImages.length)];

  reels.forEach((reel, i) => {
    let interval = setInterval(() => spin(reel), intervalDuration);  // Start spinning the reels

    // Stop the spinning after the spin duration + delays for each reel
    setTimeout(() => {
      clearInterval(interval);
      reel.src = finalImage;  // Set the final image for each reel
    }, spinDuration + i * 200);  // Add delays for staggered effect
  });

  // Once the reels stop spinning, display the prize
  setTimeout(() => {
    const prize = prizes[Math.floor(Math.random() * prizes.length)];
    document.getElementById("prizeImageContainer").innerHTML = prize;
    resultText.style.display = "block";  // Show the result text
  }, spinDuration + 1000);  // Wait for spin to finish before showing prize
});
