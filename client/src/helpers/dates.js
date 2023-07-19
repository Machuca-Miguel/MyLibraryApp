

const getLastDateObject = (objectsArray, category) => {
  let result = null;

  if (objectsArray.length > 0) {
    let lastElement = objectsArray[0];

    for (let element of objectsArray) {
      if (element[category] > lastElement[category]) {
        lastElement = element;
      }
    }

    result = lastElement;
  }

  return result;
};

export const getLastIsReadDateObject = (objectsArray) => {
  return getLastDateObject(objectsArray, "is_read_date");
};

export const getLastReadingDateObject = (objectsArray) => {
  return getLastDateObject(objectsArray, "added_reading_date");
};

export const getLastToReadDateObject = (objectsArray) => {
  return getLastDateObject(objectsArray, "to_read_date");
};

export const getLastWishlistedObject = (objectsArray) => {
  return getLastDateObject(objectsArray, "wishlist_date");
};
