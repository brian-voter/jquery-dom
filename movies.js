"use strict";

const container = $("#moviesContainer");

$("#addButton").on("click", (evt) => {
  evt.preventDefault();

  const name = $("#titleInput").val();
  const rating = $("#ratingInput").val();

  const movieDiv = $(`<div class="movieDiv">${name}: ${rating}</div>`);

  container.append(movieDiv);
});

$("#deleteAllButton").on("click", () => {
  container.empty();
});