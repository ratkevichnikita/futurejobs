export interface UserProgress {
  level: number;          // Текущий уровень пользователя
  progressPercentage: number; // Процент прогресса до следующего уровня
}

// Функция для расчета необходимого опыта на следующий уровень
const calculateXPForNextLevel = (level: number, baseXP: number = 1000, exponent: number = 1.5): number => {
  return Math.floor(baseXP * Math.pow(level, exponent));
};

// Функция для определения уровня пользователя и процента прогресса до следующего уровня
export const getUserLevel = (currentXP: number, baseXP: number = 1000, exponent: number = 1.5): UserProgress => {
  let level = 1;
  let xpForNextLevel = calculateXPForNextLevel(level, baseXP, exponent);
  let xpForCurrentLevel = 0; // Будем отслеживать сколько нужно для текущего уровня

  // Пока опыта достаточно для перехода на следующий уровень
  while (currentXP >= xpForNextLevel) {
    level++;
    currentXP -= xpForNextLevel;
    xpForCurrentLevel = xpForNextLevel;
    xpForNextLevel = calculateXPForNextLevel(level, baseXP, exponent);
  }

  // Рассчитываем процент прогресса до следующего уровня
  const progressPercentage = Math.round(((currentXP / (xpForNextLevel - xpForCurrentLevel)) * 100));

  return { level, progressPercentage };
};
