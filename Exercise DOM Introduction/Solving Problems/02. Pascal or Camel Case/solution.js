function solve() {
  const textElement = document.getElementById('text');
  const namingConventionElement = document.getElementById('naming-convention');
  const resultElement = document.querySelector('#result');

  const text = textElement.value;
  const namingConvention = namingConventionElement.value;

  const convertToPascalCase = (text) =>
    text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  
  const conventor = {
    'Pascal Case': convertToPascalCase,
    'Camel Case': (text) => convertToPascalCase(text).charAt(0).toLowerCase() + convertToPascalCase(text).slice(1)
  };

  if (!conventor[namingConvention]) {
    resultElement.textContent = 'Error!';
    return;
  }

  resultElement.textContent = conventor[namingConvention](text);
}