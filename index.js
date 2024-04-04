var name = prompt("Entrer your name: ");
var firstChar = name.slice(0,1);
var firstCharToLower = firstChar.toLowerCase();
var restOfName = name.slice(1,name.length);
var fullName = firstCharToLower + restOfName;
alert("Hello " +fullName);