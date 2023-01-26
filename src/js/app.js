export default function convertingNumber(number) {
  let changedNumber = number.replace(/[)(\-\s]/g, '');

  if (!/[+]/.test(changedNumber)) changedNumber = `+${changedNumber}`;

  if (/^(\+8)/.test(changedNumber) && changedNumber.length === 12) {
    changedNumber = changedNumber.replace(/8/, '7');
  }

  return changedNumber;
}
