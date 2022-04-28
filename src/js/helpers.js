const generatedRandomDate = function() {
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  const date1 = new Date('8.08.2008').getTime();
  const date2 = new Date().getTime();

  const options = { day: 'numeric', month: 'long', year: 'numeric' }

  const date = new Date(random(date1, date2));
  const formattedDate = date.toLocaleDateString('ru-RU', options);

  return {
    formattedDate,
    date,
  }
}

export {
  generatedRandomDate,

}
