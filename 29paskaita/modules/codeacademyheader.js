function codeAcademyHeader(element) {
  const header = document.createElement("h1");
  header.textContent = "Kleika";
  header.style.textAlign = "center";
  header.style.color = "purple";
  element.prepend(header);
}

export default codeAcademyHeader;
