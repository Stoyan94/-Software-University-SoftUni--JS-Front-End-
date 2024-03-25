function extract(content) {
    contentElement = document.getElementById(content)

    const matches = contentElement.textContent.matchAll(/\(([a-zA-Z ]+)\)/g)

    const text = Array
          .from(matches)
          .map(match => match[1])
          .join('; ')

    return text;
}