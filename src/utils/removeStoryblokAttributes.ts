function removeStoryblokAttributes(htmlString: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  const dataBlokElements = doc.querySelectorAll("[data-blok-c]");
  const dataBlokUIDElements = doc.querySelectorAll("[data-blok-uid]");

  dataBlokElements.forEach((element) => {
    element.removeAttribute("data-blok-c");
  });

  dataBlokUIDElements.forEach((element) => {
    element.removeAttribute("data-blok-uid");
  });

  return doc.body.innerHTML;
}

export default removeStoryblokAttributes;
