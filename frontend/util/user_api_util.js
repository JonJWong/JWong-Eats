export const changeUserInfo = (user) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: {user}
  });
};

export const deleteUser = (userId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${userId}`
  });
};

export const fetchUser = (userId) => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  });
};