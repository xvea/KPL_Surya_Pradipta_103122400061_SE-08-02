export function tambah(a, b) {
  return a + b;
}

export function kurang(a, b) {
  return a - b;
}

export function kali(a, b) {
  return a * b;
}

export function bagi(a, b) {
  return a / b;
}

export function pangkat(a, b) {
  return a ** b;
}

export function plsv_tiga(x, a, b) {
  const k = b - a;

  if (x.length === 1) {
    return k;
  } else if (x.length === 2) {
    const v = parseInt(x);
    return bagi(k, v);
  }

  return 0;
}
