const getLastDateObject = (objectsArray, category) => {
  let result = null;

  if (objectsArray.length > 0) {
    const defaultDate = new Date('1900-01-01');
    let lastDate = defaultDate;

    for (let element of objectsArray) {
      const currentDate = element[category] ? new Date(element[category]) : defaultDate;
      if (currentDate > lastDate) {
        lastDate = currentDate;
        result = element;
      }
    }
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
