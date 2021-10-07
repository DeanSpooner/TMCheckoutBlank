const checkout = (catalogue, basket) => {
  let totalAmount = 0;
  const basketTotals = {};
  for (let i = 0; i < basket.length; i += 1) {
    if (!basketTotals[basket[i]]) {
      basketTotals[basket[i]] = 1;
    } else {
      basketTotals[basket[i]] += 1;
    }
  }
  for (const prop in basketTotals) {
    totalAmount += catalogue[prop] * basketTotals[prop];
  }
  return totalAmount;
};

module.exports = { checkout };
