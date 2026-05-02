const updateDisplayStag = () => {
  $("header div").removeClass("selectFormateur");
  $("#selectStagaires").removeClass("blackTxt");
  $("#selectFormateurs").addClass("blackTxt");
  $(":root").css("--theme-clr", "black");
};

const updateDisplayFrm = () => {
  $("header div").addClass("selectFormateur");
  $("#selectFormateurs").removeClass("blackTxt");
  $("#selectStagaires").addClass("blackTxt");
  $("html").css("--theme-clr", " rgb(2, 97, 124)");
};

export { updateDisplayStag, updateDisplayFrm };
