var toggled = false;

document.querySelector(".Edit").addEventListener("click", function(e) {
  if (!toggled) {
    toggled = true;

    document.querySelector(".Edit").textContent = "save";

    var icon = document.createElement("i");

    icon.classList.add("fa", "fa-floppy-o");

    document.querySelector(".Edit").appendChild(icon);

    var mainDiv = document.querySelector(".blogText");

    var text = document.getElementById("blogBody");

    var textarea = document.createElement("textarea");

    textarea.classList.add("first");

    textarea.setAttribute("rows", "20");

    textarea.appendChild(document.createTextNode(`${text.textContent}`));

    text.remove();

    mainDiv.appendChild(textarea);

    return;
  }

  if (toggled) {
    toggled = false;

    document.querySelector(".Edit").textContent = "Edit";

    var icon = document.createElement("i");

    icon.classList.add("fa", "fa-pencil");

    document.querySelector(".Edit").appendChild(icon);

    var text_textarea = document.querySelector(".first");

    console.log(document.querySelector(".first").value);

    var paragraph = document.createElement("p");

    paragraph.setAttribute("id", "blogBody");

    var mainDiv = document.querySelector(".blogText");

    paragraph.textContent = text_textarea.value;

    text_textarea.remove();

    mainDiv.appendChild(paragraph);

    return;
  }
});

var count = 0;
document.querySelector(".btn-like").addEventListener("click", function() {
  count = count + 1;
  console.log(count);

  document.querySelector(".like-text").textContent =
    count + " people liked your blog";
});

var mcount = 0;

document.querySelector(".btn-comment").addEventListener("click", function() {
  mcount = mcount + 1;

  var text = document.querySelector(".comment-text");

  var a = document.createElement("div");

  a.classList.add("outer");

  var b1 = document.createElement("div");

  b1.classList.add("inner1");

  b1.appendChild(document.createTextNode(`${mcount}` + "."));

  var b2 = document.createElement("div");

  b2.classList.add("inner2");

  b2.appendChild(document.createTextNode(`${text.value}`));

  a.appendChild(b1);

  a.appendChild(b2);

  document.querySelector(".comment-list").appendChild(a);

  text.value = " ";
});
