const name = prompt("Name of new directory to create:");
if (name) {
fetch(document.location.href + "/" + encodeURIComponent(name), {
  method: "MKCOL",
  mode: "same-origin",
  credentials: "same-origin",
  redirect: "follow",
  cache: "default",
  body: "FIXME",
})
  .then(response => {
    alert(response.statusText || response.status)
  })
}
