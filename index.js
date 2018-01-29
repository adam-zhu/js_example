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

const scrub_props = props => Object.keys(props).reduce((clean, k) =>
  props[k] !== undefined && props[k] !== null
  ? Object.assign(clean, { [k]: props[k] })
  : clean
, {});

const pick_props = (keys, source_obj) => scrub_props(keys.map(k => source_obj[k]));

module.exports = {
  create_sort,
  pick_props
};


// demo usage
// const data = [{
//   title: 'a',
//   description: 'description a',
//   date: 2
// }, {
//   title: 'b',
//   description: 'description b',
//   date: 3
// }, {
//   title: 'c',
//   description: 'description c',
//   date: 1
// }];
// const by_title_desc = create_sort('title')('desc');
// const by_date_asc = create_sort('date')('asc');
// const sorted_by_title = data.slice().sort(by_title_desc);
// const sorted_by_date = data.slice().sort(by_date_asc);

// console.log('unsorted data', data);
// console.log('sorted by title descending', sorted_by_title);
// console.log('sorted by date ascending', sorted_by_date);


// const from_this_obj = {
//   a: '1',
//   b: '2',
//   c: '3',
//   d: '4'
// };
// const these_props = ['a', 'b', 'c', 'e'];

// console.log(pick_props(these_props, from_this_obj));