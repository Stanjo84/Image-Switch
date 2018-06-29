function imgFunc() {  
  var img = document.querySelector("img");

  if (img.src.match ("http://www.todayifoundout.com/wp-content/uploads/2014/02/full-moon.jpg")) {
  img.setAttribute("src", "https://img.purch.com/h/1000/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAxOS80MzAvb3JpZ2luYWwvc2RvLXgxNC1zb2xhci1mbGFyZS5qcGc="); 
  
  } else {

  img.setAttribute("src", "http://www.todayifoundout.com/wp-content/uploads/2014/02/full-moon.jpg");  
  }
}