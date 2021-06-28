export const selectLink = (idLink) => {
  const links = ["home", "about", "projects"];
  const noSelectLinks = links.filter((link) => link !== idLink);

  document.getElementById(idLink).classList.add("link-active");
  noSelectLinks.map((link) =>
    document.getElementById(link).classList.remove("link-active")
  );
};
