import titleize from '../utils/titleize';

const should_display = (str) => {
  let parts = str.split("::", 2);
  return parts[0] === 'ny';
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
