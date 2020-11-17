const { moment } = window;

const updateEstimatedShippingElement = () => {
  const element = document.getElementById('shipping-object');

  console.log('element is: ', element);
  if (!element) {
    const estimatedShippingEl = document.getElementById('estimated-shipping');
    estimatedShippingEl.setAttribute('style', 'display: none');
    return;
  }

  
  const FORMAT = 'MMM D'
  const time = element.innerText.split(',');
  const newInnerText = `${moment().add(time[0], 'd').format(FORMAT)} and ${moment().add(time[1], 'd').format(FORMAT)}`
  element.innerText = newInnerText;
  element.setAttribute('style', 'display: inline');
  console.log('New inner text:', newInnerText);
}