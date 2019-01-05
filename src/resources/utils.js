import titleize from '../utils/titleize';

const should_display = (str) => {
  let res = false;
  let parts = str.split("::", 2);
  if (parts[0] === 'old_ny') {
      res = false;
  } else if (parts.length > 1 && parts[0].length === 2) {
    res = (parts[0] === 'ny');
  } else {
    // It's not a state prefix, so... always show
    res = true;
  }

  return res;
}

const strip_state = (str) => {
  let parts = str.split("::");
  if (should_display(str)) {
    if (parts[0] === 'ny') {
      return parts.slice(1).join("::");
    } else {
      return str;
    }
  } else {
    return "";
  }
};

const pretty_print = (str) => {
  let parts = str.split("::");
  return parts.map((s) => titleize(s)).join(" :: ");
}

export {strip_state, should_display, pretty_print} ;
