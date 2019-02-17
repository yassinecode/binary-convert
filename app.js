
function convert(){
  var decimal = parseInt(document.getElementById("decimal").value);
  var binary="";
  var hexadecimal="";
  while(decimal>0){
    binary=(decimal%2).toString()+binary;
    decimal=parseInt(decimal/2);
  }
  document.getElementById("binary").value=binary;
  while(binary.length %4!=0){
    binary="0"+binary;
  }
  var t =["A","B","C","D","E","F"];
  for(var i=0;i<binary.length;i=i+4){
    var hexa= parseInt(binary.charAt(i))*8+parseInt(binary.charAt(i+1))*4+parseInt(binary.charAt(i+2))*2+parseInt(binary.charAt(i+3));
    if(hexa>9){
      hexadecimal+=t[hexa%10];
    }
    else {
      hexadecimal+=hexa.toString();
    }
  }
  document.getElementById("hexadecimal").value=hexadecimal;
}
