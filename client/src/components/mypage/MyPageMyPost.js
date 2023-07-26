// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");
//   return `${year}.${month}.${day}.`;
// };

// const MyPostItem = ({ post }) => {
//   const { createdAt, userId, title, postnum } = post;
//   const limitedTitle = title.length > 10 ? `${title.slice(0, 10)}...` : title;
//   const limitedUserId = userId.length > 6 ? `${userId.slice(0, 6)}..` : userId;
//   const formattedDate = formatDate(createdAt);
// };
