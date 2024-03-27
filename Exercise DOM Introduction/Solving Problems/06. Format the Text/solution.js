function solve() {
  const outputElement = document.getElementById('output');
  const textAreaElement = document.getElementById('input');
  const text = textAreaElement.value;

  // Convert to paragraphs
  const result = text
      .split('.')
      .reduce((result, sentence, i) => {
        const resultIndex = Math.floor(i / 3);
        if (!result[resultIndex]) {
          result[resultIndex] = [];
        } 

        result[resultIndex].push(sentence.trim());

        return result;
      },[])
      .map(sentences => sentences.join('. '))

  // text
  //     .split('.')
  //     .map(sentence => {
  //      const pElement = document.createElement('p') 
  //       pElement.textContent = sentence;

  //       return pElement;
  //     })

  //Append to output element
}