const selectedSeatEl = document.getElementById('selected-seat');
const totalBookedEl = document.getElementById('total-booked');
const availableSeatEl = document.getElementById('available-seat');
const totalTicketPriceEl = document.getElementById('total-price');
const couponInputEl = document.getElementById('coupon-field');
const couponButtonEl = document.getElementById('coupon-btn');
let totalTicketPrice = 0;
const couponCodeOne = document.getElementById('coupon-code-one').innerText;
const couponCodeTwo = document.getElementById('coupon-code-two').innerText;
let  grandTotal = 0;
const phoneNumberEl = document.getElementById("phone-number");
const nextButtonEl = document.getElementById("nextButton");

console.log(couponCodeOne,couponCodeTwo)


// function handleSelectSeat(event){
//     console.log(event.innerText);
//     selectedSeatEl.innerHTML = `<li class="text-base font-normal flex justify-between">
//     <span>${event.innerText}</span>
//     <span>Economy</span>
//     <span>500</span>
//     </li>`
// }

let selectedSeat = [];
function handleSelectSeat(event){
    const value = event.innerText;
    if(selectedSeat.includes(value)){
        return alert('Seat Already Booked. Please try another seat.');
    }else if(selectedSeat.length < 4){
        event.classList.add('bg-primary','text-white');
        document.getElementById('default-text-seat').classList.add('hidden');
        selectedSeat.push(event.innerText);
        
        totalBookedEl.innerText = selectedSeat.length;
    
        // decrease available seat
        const availableSeat = parseInt(availableSeatEl.innerText);
        availableSeatEl.innerText = availableSeat - 1;
    
        selectedSeatEl.innerHTML += `<li class="text-base font-normal flex justify-between">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>500</span>
        </li>`
    
        // update total ticket price
        totalTicketPrice += 550;
        totalTicketPriceEl.innerText = totalTicketPrice.toFixed(2);
    
        // enable the coupon field and btn
        if(selectedSeat.length >= 4){
            couponInputEl.removeAttribute('disabled');
            couponButtonEl.removeAttribute('disabled');
        }
    }else{
        return alert('maximus seat is booked');
    }
  
}
console.log('coupon 2:',couponCodeTwo)

couponButtonEl.addEventListener('click',function(event){
    const couponInputValue = couponInputEl.value;
    console.log('couponInput: ',typeof couponInputValue)
    if(couponInputValue !== "NEW15" && couponInputValue !== "Coupon 20"){
        alert('Your Provided value is not valid coupon.');
        return;
        
    }
    if(couponInputValue === "NEW15"){
        grandTotal = totalTicketPrice * 0.15;
    }else if(couponInputValue === "Coupon 20"){
        grandTotal = totalTicketPrice * 0.20;
    }
    const grandTotalEl = document.getElementById('grand-total');
    grandTotalEl.innerText = totalTicketPrice - grandTotal;
    console.log(grandTotal);
    const showCouponPrice = document.getElementById('show-coupon-price');
    showCouponPrice.innerHTML = `
        <p>Discount</p>
        <p>
            <span>BDT:</span>
            <span>${grandTotal}</span>
        </p>
    `;
    
});



phoneNumberEl.addEventListener("input",function (event){
    const phoneInputValue = event.target.value;
    
    if(phoneInputValue.length >= 11){
        nextButtonEl.removeAttribute('disabled');
    }

})

//  reset input or reload the webpage

document.getElementById('btn-continue').addEventListener('click',function(){
    window.location.reload();
})
