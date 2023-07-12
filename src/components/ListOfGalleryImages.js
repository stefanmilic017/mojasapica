const importAll = (r) => r.keys().map(r);

const images = importAll(require.context('../images/gallery', false, /\.(jpg|png|JPG)$/));

const sortedImages = images
.map((image, index) => ({
  image: image,
  name: `krevetic-${index + 1}`,
}))
.sort((a, b) => {
  const nameA = parseInt(a.image.split('-')[1], 10);
  const nameB = parseInt(b.image.split('-')[1], 10);
  return nameA - nameB;
})

export const ListOfGalleryImages = sortedImages;
