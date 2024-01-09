function openLink(link: string): void {
  window.open(link);
}

export function openContact(link: string): void {
  if (link === "g") {
    openLink("https://github.com/rafaelmasselli");
  } else if (link === "l") {
    openLink("https://www.linkedin.com/in/rafaelmasselli/");
  } else if (link === "c") {
    openLink(
      "https://docs.google.com/document/d/1YwY2Gk7LTl_ouVdEFw0LA7US3ihyx9vS/edit?usp=sharing&ouid=103065465210553769649&rtpof=true&sd=true"
    );
  }
}
