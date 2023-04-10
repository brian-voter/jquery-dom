"use strict";

$("article img").addClass("image-center");

$("article p").last().remove();

$("#title").css("font-size", `${Math.floor(Math.random() * 100) + 1}px`);

$("ol").append($("<li>", {text:"This is the million dollar answer."}));

$("aside").empty().append($("<p>I'm so sorry about that list.</p>"));

$("input").on("change", evt => {
  const red = $("input").eq(0).val();
  const blue = $("input").eq(1).val();
  const green = $("input").eq(2).val();

  $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
});

$("img").on("click", evt => {
  $(evt.target).remove();
});