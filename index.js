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
    if (catalogue.deals[prop]) {
      const leftover = basketTotals[prop] % catalogue.deals[prop].amount;
      totalAmount += leftover * catalogue[prop];
      totalAmount +=
        (basketTotals[prop] - leftover) *
        (catalogue.deals[prop].price / catalogue.deals[prop].amount);
    } else {
      totalAmount += catalogue[prop] * basketTotals[prop];
    }
  }
  return totalAmount;
};

module.exports = { checkout };
