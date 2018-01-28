const data = [{
  title: 'a',
  description: 'description a',
  date: 2
}, {
  title: 'b',
  description: 'description b',
  date: 3
}, {
  title: 'c',
  description: 'description c',
  date: 1
}];

// if order is not explicity 'desc' then it will be asc
const create_sort = prop => order => (a, b) => {
  const a_val = a[prop];
  const b_val = b[prop];

  if (a_val > b_val) {
    return order === 'desc'
    ? -1
    : 1;
  }
  else if (a_val < b_val) {
    return order === 'desc'
    ? 1
    : -1;
  }

  return 0;
};

const by_title_desc = create_sort('title')('desc');
const by_date_asc = create_sort('date')('asc');

const sorted_by_title = data.slice().sort(by_title_desc);
const sorted_by_date = data.slice().sort(by_date_asc);

console.log('unsorted data', data);
console.log('sorted by title descending', sorted_by_title);
console.log('sorted by date ascending', sorted_by_date);