export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  console.log(query);
  const photoPageHtmlString = await $fetch(query.src);
  const photoUrl = getPhotoUrl(photoPageHtmlString);

  return {
    photoUrl: photoUrl,
  };
});

const getPhotoUrl = (content: any) => {
  const links = [];
  let match;
  const regex = /(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_/]*)/g;
  while ((match = regex.exec(content))) {
    links.push(match[1]);
  }
  return `${links[0]}=s640`;
};
