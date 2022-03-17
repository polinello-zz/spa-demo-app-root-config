export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function header() {
  // The header is always active
  return true;
}

export function home(location) {
  return prefix(location, "home");
}

//testpage
export function testPage(location) {
  return prefix(location, "testPage");
}
