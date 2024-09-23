

const menuBtn = document.getElementById("menu-btn");
const mobileMenuEl = document.getElementById("mobileMenu");

menuBtn.addEventListener("click",function(){
    menuBtn.children[0].classList.toggle("hidden")
    const  menuCloseBtn = document.getElementById("close-icon");
        menuCloseBtn.classList.toggle("hidden")
        mobileMenuEl.classList.toggle("hidden")
        mobileMenuEl.classList.toggle("flex")
});

window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
        mobileMenuEl.classList.add("hidden");
        mobileMenuEl.classList.remove("flex");
        menuBtn.children[0].classList.remove("hidden");
        menuCloseBtn.classList.add("hidden");
    }
});




const historyTab = document.getElementById("historyId");
const donationTab = document.getElementById("donationId");
historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-white",
    "bg-buttonColor",
   
  );

   
  historyTab.classList.remove("text-gray-600");
  donationTab.classList.remove(
    "text-white",
    "bg-buttonColor"
   
  );
  donationTab.classList.add("text-gray-600");


  document.getElementById("donationSection").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});



donationTab.addEventListener("click", function () {
    donationTab.classList.add(
      "text-white",
      "bg-buttonColor",
     
    );

    historyTab.classList.remove("text-gray-600");
    historyTab.classList.remove(
      "text-white",
      "bg-buttonColor"
     
    );
    historyTab.classList.add("text-gray-600");
    console.log("nobab",historyTab)

   
  
    document.getElementById("history-section").classList.add("hidden");
    document.getElementById("donationSection").classList.remove("hidden");
  });

  
  function showError(id) {
    console.log("Error function called",id);
    console.log(document.getElementById(id)); 
    document.getElementById(id).classList.remove("hidden");
}



let   count =0;
function getValue(textboxId, donationAmountId,headerId,) {

  
  
    count += 1;
    const textBoxValue = document.getElementById(textboxId).value;
 


   
    const parsedValue = parseFloat(textBoxValue);

    
    if (isNaN(parsedValue) || parsedValue < 0 || Array.isArray(parsedValue) || typeof parsedValue !== 'number') {
        showError("show-error"); 
        return;
    }
    
   
    const CtotalDonateAmount = document.getElementById(donationAmountId);

   
    let currentTotal = parseFloat(CtotalDonateAmount.innerText) || 0;

   
    currentTotal += parsedValue;


    const headerElement = document.getElementById(headerId);
    const CardHeading=headerElement.innerText;


 
    CtotalDonateAmount.innerText = currentTotal.toFixed(2); 
    const historyItem = document.createElement("div");
  historyItem.className =
    "bg-white p-3 rounded-md border-color: rgb(212 212 212);";

  historyItem.innerHTML = `
      
       
       
        <p class="text-xs text-black font-bold"> ${CtotalDonateAmount.innerText} 'Taka is Donated for ${new Date().getFullYear()}' ${CardHeading}</p>
        <p class="text-xs text-black"> Date:${new Date()}</p>
        
       
    `;
  const historyContainer = document.getElementById("history-list");
  console.log("historyContaineraraf",CtotalDonateAmount)

  historyContainer.insertBefore(historyItem, historyContainer.firstChild);



const headerTotalElement = document.getElementById("headeTotal");


const headerTotal = parseFloat(headerTotalElement.innerText);
console.log("nobab99", headerTotal);


const CtotalDonateAmount2 = parseFloat(document.getElementById("totalDonateAmount").innerText);


headerTotalElement.innerText = (headerTotal - CtotalDonateAmount2).toFixed(2); 

// After the donation process, open the modal
const myModal = document.getElementById("my_modal_1");
if (myModal) {
    myModal.showModal(); // Show the modal popup after donation
}
}



