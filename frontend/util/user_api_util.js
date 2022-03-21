export const changeUserInfo = (user) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: {user}
  })
};

export const deleteUser = (userId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${userId}}`
  })
};