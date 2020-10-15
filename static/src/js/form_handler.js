function printData(){
  let formData = new FormData(document.getElementsByTagName("form")[0]);
  let result = {};
  for (var key of formData.keys()) {
		result[key] = formData.get(key);
	}
  console.log(result);

}
