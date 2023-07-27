export function getData(url) {
  const fetchResul = fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((atsInJs) => {
      // console.log('FETCH atsInJs ===', atsInJs);
      return atsInJs;
    })
    .catch((error) => {
      console.warn('FETCH ivyko klaida:', error);
    });
  return fetchResul;
}

export async function getDataAsync(url) {
  try {
    const resp = await fetch(url);
    const atsInJs = await resp.json();
    return atsInJs;
  } catch (error) {
    console.warn(error);
  }
}

export async function apiData(url) {
  try {
    const resp = await fetch(url);
    const result = await resp.json();
    return [result, null];
  } catch (error) {
    // jei yra klaida
    console.warn('klaida apiData fn', error);
    return [null, error];
  }
}
