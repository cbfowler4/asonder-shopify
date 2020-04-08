const { moment } = window;

const updateShipTimeElement = (element) => {
  const FORMAT = 'MMM D'
  const time = element.innerText.split(',');
  const newInnerText = `${moment().add(time[0], 'd').format(FORMAT)} and ${moment().add(time[1], 'd').format(FORMAT)}`
  element.innerText = newInnerText;
  element.setAttribute('style', 'display: block');
}