document.getElementById('buyButton').addEventListener('click', () => {
  const wallet = document.getElementById('walletAddress').value;
  const amount = document.getElementById('amount').value;

  if (wallet && amount) {
    document.getElementById('paymentDetails').classList.remove('hidden');
    document.querySelectorAll('.wallet-amount').forEach(item => {
      item.textContent = `$${amount}`;
    });
  } else {
    alert('Please fill out all fields.');
  }
});

document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', () => {
    const walletId = button.getAttribute('data-wallet');
    const walletAddress = document.getElementById(walletId).textContent;
    navigator.clipboard.writeText(walletAddress);
    alert('Wallet address copied!');
  });
});
// Countdown Timer
function startCountdown(targetDate) {
  const countdownTimer = document.getElementById("countdownTimer");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      countdownTimer.textContent = "Presale has ended!";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTimer.textContent = `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
  }

  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();
}

// Set presale end date (e.g., 2 days, 3 hours, 5 minutes from now)
const presaleEndDate = new Date();
presaleEndDate.setDate(presaleEndDate.getDate() + 25);
presaleEndDate.setHours(presaleEndDate.getHours() + 12);
presaleEndDate.setMinutes(presaleEndDate.getMinutes() + 50);
startCountdown(presaleEndDate);

// Token statistics (can be manually updated if needed)
document.getElementById("totalTokens").textContent = "1,000,000";
document.getElementById("soldTokens").textContent = "68,988";
document.getElementById("remainingTokens").textContent = "28,898";