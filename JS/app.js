
  const historyTab = document.getElementById("historyId");
  const donationTab = document.getElementById("donationId");
  const donationSection = document.getElementById("donationSection");
  const historySection = document.getElementById("history-section");


  window.onload = function () {
    donationTab.classList.add("text-white", "bg-buttonColor"); 
    donationSection.classList.remove("hidden"); 
    historySection.classList.add("hidden"); 

    historyTab.classList.remove("text-white", "bg-buttonColor");
    historyTab.classList.add("text-gray-600");
  };


  historyTab.addEventListener("click", function () {
    historyTab.classList.add("text-white", "bg-buttonColor");
    historyTab.classList.remove("text-gray-600");

    donationTab.classList.remove("text-white", "bg-buttonColor");
    donationTab.classList.add("text-gray-600");

    donationSection.classList.add("hidden"); 
    historySection.classList.remove("hidden"); 
  });


  donationTab.addEventListener("click", function () {
    donationTab.classList.add("text-white", "bg-buttonColor");
    donationTab.classList.remove("text-gray-600");

    historyTab.classList.remove("text-white", "bg-buttonColor");
    historyTab.classList.add("text-gray-600");

    historySection.classList.add("hidden"); 
    donationSection.classList.remove("hidden"); 
  });


  function showError(id) {
    console.log("Error function called", id);
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


  historyContainer.insertBefore(historyItem, historyContainer.firstChild);



const headerTotalElement = document.getElementById("headeTotal");


const headerTotal = parseFloat(headerTotalElement.innerText);


const CtotalDonateAmount2 = parseFloat(document.getElementById("totalDonateAmount").innerText);


headerTotalElement.innerText = (headerTotal - textBoxValue).toFixed(2); 


const myModal = document.getElementById("my_modal_1");
if (myModal) {
    myModal.showModal(); 
}
clearTextBox();
}


function clearTextBox()
{
 document.getElementById("txtNoakhali").value='';
 document.getElementById("txtReliefId").value='';
 document.getElementById("txtQuota").value='';
}
