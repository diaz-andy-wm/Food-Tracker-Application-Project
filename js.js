/**
 * Created by session1 on 10/22/15.
 */

var main = function(){
    $('#submit').click(function() {
        var foodItem = document.getElementById('foodItem').value;
        var description = document.getElementById('description').value;
        var shelfLife = document.getElementById('shelfLife').value;
        var purchaseDate = document.getElementById('dateOfPurchase').value;
        var expirationDate = document.getElementById('dateOfExpiration').value;
        var foodTable = document.getElementById('tableID');

        if(foodItem == ""){
        }else{
            var row = foodTable.insertRow(1);
            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            cell0.innerHTML = foodItem;
            cell1.innerHTML = description;
            cell2.innerHTML = shelfLife;
            cell3.innerHTML = purchaseDate;
            cell4.innerHTML = expirationDate;
            if (purchaseDate > expirationDate){
                cell0.style.backgroundColor= "lightgreen";
                cell1.style.backgroundColor= "lightgreen";
                cell2.style.backgroundColor= "lightgreen";
                cell3.style.backgroundColor= "lightgreen";
                cell4.style.backgroundColor= "lightgreen";
            }
        }
    });
};
$(document).ready(main);