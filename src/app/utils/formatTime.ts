function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let formattedTime = '';

  if (hours > 0) {
    formattedTime += `${hours}:`;
  }

  if (minutes > 0 || hours > 0) {
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    formattedTime += `${formattedMinutes}:`;
  }

  const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  formattedTime += formattedSeconds;

  return formattedTime;
}

export default formatTime;
