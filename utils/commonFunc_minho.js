export function FormatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = parseInt(seconds % 60);
  
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(remainingSeconds).padStart(2, '0');
  
    return hours > 0
      ? `${paddedHours}:${paddedMinutes}:${paddedSeconds}`
      : `${paddedMinutes}:${paddedSeconds}`;
  }

export const ExpandAnimateFontGrow = (e) => {
    e.target.style.animation = 'fontGrow 0.5s ease';
};

export const ResetAnimateFontGrow = (e) => {
    e.target.style.animation = 'none';
};