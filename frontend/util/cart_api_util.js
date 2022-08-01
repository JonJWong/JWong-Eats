export const postTransaction = (cart) => {
  return $.ajax({
    method: 'POST',
    url: `api/transactions`,
    data: {cart}
  });
};