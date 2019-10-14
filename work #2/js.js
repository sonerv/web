function AD(a, b) {
  if (a.length != b.length) {
    console.log(false);
    return false;
  }
  for (var i = 0; i < a.length; i++) {
    if (a[i]!== b[i]) {
      return false;
    }
  }
  return true;
}
