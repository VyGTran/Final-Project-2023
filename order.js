"use strict";

window.addEventListener("load", function() {
    var orderForm = document.forms.orderForm;
    orderForm.elements.shoe.focus();

    calcOrder();

    orderForm.elements.shoe.onchange = calcOrder;
    orderForm.elements.insurance.onchange = calcOrder;

    var shippingType = document.querySelectorAll ('input[name="shippingType"]');
    for (var i = 0; i < shippingType.length; i++) {
        shippingType[i].onclick = calcOrder;
    }
});

function calcOrder() {
    var orderForm = document.forms.orderForm;

    var mIndex = orderForm.elements.shoe.selectedIndex;
    var mCost = orderForm.elements.shoe.options[mIndex].value;
    var qIndex = orderForm.elements.insurance.selectedIndex;
    var insurance = orderForm.elements.insurance[qIndex].value;

    var initialCost = mCost;
    orderForm.elements.initialCost.value = formatNumber(initialCost)

    var iCost = insurance * 20;
    orderForm.elements.iCost.value = formatUSCurrency(iCost, 2);

    var sCost = document.querySelector('input[name="shippingType"]:checked').value;
    orderForm.elements.sCost.value = formatUSCurrency(sCost, 2);

    var totalCost = mCost + iCost + sCost;
    orderForm.elements.totalCost.value = formatUSCurrency(totalCost), 2;

    orderForm.elements.sh
}

function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
