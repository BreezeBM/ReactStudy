const friends = [
  { name: "LYNN", age: 15 },
  { name: "KELLY", age: 20 },
  { name: "IU", age: 25 },
  { name: "SUZY", age: 30 },
];

const timelines = [
  { desc: "nice lunch", likes: 0 },
  { desc: "cool", likes: 10 },
  { desc: "Hello", likes: 20 },
  { desc: "Got new", likes: 30 },
];

function makeDateGenerator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDateGenerator(friends);
export const getNextTimeline = makeDateGenerator(timelines);
