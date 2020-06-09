export function sortAlpha(bookData) {
  let alphaSorted = bookData.sort(function(a, b) {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
  return alphaSorted;
}

export function confirmExistence(bookContent, queryString, enabledRegex) {
  const str = bookContent.toLowerCase();
  if (enabledRegex) {
    const regex = RegExp(queryString, "g");
    return regex.test(str);
  } else {
    return str.includes(queryString);
  }
}

export function sortInputFirst(input, data, sortString) {
  var first = [];
  var others = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i][sortString].toLowerCase().startsWith(input) === true) {
      first.push(data[i]);
    } else {
      others.push(data[i]);
    }
  }
  first.sort(function(a, b) {
    return a[sortString]
      .toLowerCase()
      .localeCompare(b[sortString].toLowerCase());
  });
  others.sort(function(a, b) {
    return a[sortString]
      .toLowerCase()
      .localeCompare(b[sortString].toLowerCase());
  });
  return first.concat(others);
}
