export const updateGiftsClaimed = (giftsClaimed: any[], day: number, name: string) => {
  if (giftsClaimed.length === 0) {
    return [{ name, options: [day] }];
  }

  let giftFound = false;
  const updatedGifts = giftsClaimed.map(item => {
    if (item.name === name) {
      item.options.push(day);
      giftFound = true;
    }
    return item;
  });

  if (!giftFound) {
    updatedGifts.push({ name, options: [day] });
  }

  return updatedGifts;
};

export const updateResources = (resources: any, gift: { value: string, type: string }) => {
  switch (gift.type) {
    case 'silver':
      resources.silver += parseInt(gift.value);
      break;
    case 'rubies':
      resources.rubies += parseInt(gift.value);
      break;
    case 'energy':
      resources.energy += parseInt(gift.value);
      break;
    default:
      console.error("Неизвестный тип подарка:", gift.type);
  }
  return resources;
};

export const nextDayGift = (userLastClaimDate) => {
  const clickTime = new Date(userLastClaimDate * 1000);
  const currentTime = new Date();
  const clickDateStart = new Date(clickTime.getFullYear(), clickTime.getMonth(), clickTime.getDate());
  const currentDateStart = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
  return currentDateStart > clickDateStart
}