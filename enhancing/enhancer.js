module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const { enhancement } = item;

  if (enhancement < 20) {
    return { ...item, enhancement: enhancement + 1 };
  } else {
    return { ...item };
  }
}

function fail(item) {
  const { enhancement, durability } = item;
  if (enhancement > 16) {
    return { ...item, enhancement: enhancement - 1 };
  } else if (enhancement >= 15) {
    return { ...item, durability: durability - 10 };
  } else {
    return { ...item, durability: durability - 5 };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  const { enhancement, name } = item;
  if (enhancement === 0) {
    return { ...item };
  } else {
    return { ...item, name: '[+' + `${enhancement}` + ']' + ' ' + name };
  }
}
