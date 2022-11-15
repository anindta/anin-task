var kkal = [{
    "name": "egg",
    "amount": "100 g",
    "calories": "155.1kcal",
   
},
{
    "name": "beef",
    "amount": "100 g",
    "calories": "155.1kcal",
   
},
{
    "name": "oat",
    "amount": "100 g",
    "calories": "155.1kcal",
   
},]
const table = document.querySelector("#tbl-kall tbody")

var isi_body = ""

for (var i = 0; i < kkal.length; i++) {
    isi_body += "<tr>" +
        "<td>" +
        kkal[i]["name"] +
        "</td>" +
        "<td>" +
        kkal[i]["amount"] +
        "</td>" +
        "<td>" +
        kkal[i]["calories"] +
        "</td>" +
        "</tr>"
}
table.innerHTML = isi_body