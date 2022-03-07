let input = (false);
let type = typeof(input);
if(type == "number"){
    console.log("TYPE DATA NUMBER");
}
else if(type == "string"){
    console.log("TYPE DATA STRING");
}
else if(type == "boolean"){
    console.log("TYPE DATA BOOLEAN");
}
else if(type == "undefined"){
    console.log("TYPE DATA UNDIFINED");
}
else{
    console.log("TYPE DATA OBJECT");
}
let input = ("i");
let type = typeof(input);
// console.log(type)
switch (type){
    case "number" :
        console.log("TYPE DATA NUMBER");
        break;
    case "string" :
        console.log("TYPE DATA STRING");
        break;
    case "boolean" :
        console.log("TYPE DATA BOOLEAN");
        break;
    case "undefined" :
        console.log("TYPE DATA UNDIFINED");
        break;
    default :
        console.log("TYPE DATA OBJECT");
}