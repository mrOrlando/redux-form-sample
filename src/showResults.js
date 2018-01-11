export default function showResults(values) {
  // print the form values to the console
  console.log('form values', values);
  alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}
