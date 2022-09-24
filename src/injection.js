import browser from "webextension-polyfill";

const key = "background"; 
browser.storage.local.get(key).then((data) => {
  console.log("set new background now")
  document.body.style = `background: url(${data[key]})`;
});
