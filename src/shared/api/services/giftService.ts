import {collection, doc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "@/src/firebaseConfig";
import {ClaimGiftParams, GiftForVisiting} from "@/src/shared/types/Gifts";
import {nextDayGift, updateGiftsClaimed, updateResources} from "@/src/shared/api/helpers/apiHelpers";

/**
 *
 * Вынести локику выдачи подарков на сервер
 */
export const getGiftsByDayRange = async (userData): Promise<{ name: string; options: any[] }[]> => {
  try {
    const giftsCollectionRef = collection(db, 'gifts');
    const giftsSnapshot = await getDocs(giftsCollectionRef);

    const claimedGifts = userData?.giftsClaimed || [];

    const results: GiftForVisiting[] = [];
    const getNextGayGift = nextDayGift(userData.lastClaimedDate.seconds)

    giftsSnapshot.forEach((doc) => {
      const data = doc.data();
      const options = Object.keys(data).map((key) => {
        const giftDay = data[key].day;
        const y = claimedGifts.map(item => item.options.includes(+giftDay))[0];
        const z = Math.max.apply(null, claimedGifts.map(item => item.options)[0])

        return {
          ...data[key],
          claimed: claimedGifts.map(item => item.options.includes(+giftDay))[0],
          toClaim: getNextGayGift && +giftDay === (z + 1),
        };
      });

      results.push({
        name: doc.id,
        isAllClaimed: false,
        options,
      });
    });

    return results;
  } catch (error) {
    console.error("Ошибка при получении подарков:", error);
    return [];
  }
};

export const claimGift = async ({userId, day, userData, name, gift}:ClaimGiftParams) => {
  try {
    userData.giftsClaimed = updateGiftsClaimed(userData.giftsClaimed, day, name);
    userData.resources = updateResources(userData.resources, gift);
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      giftsClaimed: [...userData.giftsClaimed],
      lastClaimedDate: new Date(),
      resources: { ...userData.resources },
    });
    console.log("Подарок успешно забран!");
  } catch (error) {
    console.error("Ошибка при забирании подарка:", error);
  }
};