function printData(){
  let formData = new FormData(document.getElementsByTagName("form")[0]);
  for (let pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]);
  }
}
