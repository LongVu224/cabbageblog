export const getImgUrl = (imgName) => {
  return process.env.REACT_APP_STORAGE_URL + imgName + '?' + process.env.REACT_APP_STORAGE_KEY;
}
