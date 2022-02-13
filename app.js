const btnPanel = document.getElementById("buttons");
const redeemBTN = document.getElementById("redeemBTN");
const transferBTN = document.getElementById("transferBTN");
const editBTN = document.getElementById("editBTN");

// Scripts

$("#redeemBTN").click(function(){
    $("#buttons").load("components/redeem.html");
});

$("#transferBTN").click(function(){
    alert("Transfer Button Clicked");
});

$("#editBTN").click(function(){
    alert("Edit Button Clicked");
});

$("#gobackHOME").click(function(){
    alert("Go Back");
    $("#buttons").load(location.href + " #buttons");
});