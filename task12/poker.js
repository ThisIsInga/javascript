//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const cardValue = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

const getHandRank = (hand) => {
  const cards = hand.split(' ').map((card) => card[0]);
  const valuesCount = Array(15).fill(0);

  for (const card of cards) {
    valuesCount[cardValue[card]]++;
  }

  const counts = valuesCount.filter((count) => count > 0).sort((a, b) => b - a);
  const rank = counts[0] === 4 ? 'four-of-a-kind'
    : counts[0] === 3 ? 'three-of-a-kind'
      : counts[0] === 2 ? (counts[1] === 2 ? 'two-pairs' : 'one-pair')
        : 'high-card';

  const highCards = cards.map((card) => cardValue[card]).sort((a, b) => b - a);
  return { rank, highCards };
};

export const bestHands = (hands) => {
  const rankedHands = hands.map((hand) => ({ hand, ...getHandRank(hand) }));
  const bestRank = Math.max(...rankedHands.map((h) => h.rank));
  const bestHands = rankedHands.filter((h) => h.rank === bestRank);

  return bestHands.map((h) => h.hand);
};
