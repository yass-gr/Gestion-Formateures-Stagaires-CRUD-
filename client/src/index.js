const selectStgBtn = $("#selectStagaires");
const selectFrmBtn = $("#selectFormateurs");

selectStgBtn.on("click", () => {
  $("header div").removeClass("selectFormateur");
  selectStgBtn.removeClass("blackTxt");
  selectFrmBtn.addClass("blackTxt");
  $(":root").css("--theme-clr", "black");
  isStagaires = true;
});
selectFrmBtn.on("click", () => {
  $("header div").addClass("selectFormateur");
  selectFrmBtn.removeClass("blackTxt");
  selectStgBtn.addClass("blackTxt");
  $("html").css("--theme-clr", "rgb(0, 60, 255)");
  isStagaires = false;
});

let isStagaires = true;
