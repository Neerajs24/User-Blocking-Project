// Initialize an empty array to  
// store blocked users 
const blockedList = []; 
  
// Function to block a user 
function blockUser() { 
  
    // Get the input element 
    const userInput =  
        document.getElementById('userInput'); 
          
    // Trim the input value 
    const userName = userInput.value.trim(); 
      
    // Check if the input is not empty and  
    // the user is not already blocked 
    if (userName !== '' && !blockedList.includes(userName)) { 
      
        // Add the user to the blocked list 
        blockedList.push(userName); 
          
        // Call the function to display the updated  
        // blocked list 
        displayBlockedList(); 
    } 
    else if(blockedList.includes(userName)){ 
        alert("User already Blocked!") 
    }else if(userName == ''){ 
        alert("Please enter a username!") 
    } 
      
    // Clear the input field 
    userInput.value = ''; 
} 
  
// Function to display the blocked list 
function displayBlockedList() { 
  
    // Get the container for the list 
    const listContainer =  
        document.getElementById('blockedList'); 
          
    // Clear the container 
    listContainer.innerHTML = ''; 
      
    // Iterate through the blockedList and  
    // display each user 
    blockedList.forEach(user => { 
        const listItem = document.createElement('li'); 
        listItem.textContent = user; 
        listContainer.appendChild(listItem); 
    }); 
} 
  
  
// Function to unblock a user 
function unblockUser(index) { 
  
    // Remove the user from the blockedList array  
    // based on the provided index 
    blockedList.splice(index, 1); 
      
    // Call the function to display the  
    // updated blocked list 
    displayBlockedList(); 
} 
  
// Function to display the blocked list  
// with an additional unblock button 
function displayBlockedList() { 
  
    // Get the container for the list 
    const listContainer =  
        document.getElementById('blockedList'); 
          
    // Clear the container 
    listContainer.innerHTML = ''; 
      
    // Iterate through the blockedList and display  
    // each user with an unblock button 
    blockedList.forEach((user, index) => { 
        const listItem = document.createElement('li'); 
        listItem.textContent = user; 
        listItem.className = 'blockeduser'; 
        const unblockButton =  
            document.createElement('button'); 
        unblockButton.textContent = 'Unblock'; 
        unblockButton.className = 'unblockbutton'; 
        unblockButton.onclick = function () { 
            unblockUser(index); 
        }; 
        listItem.appendChild(unblockButton); 
        listContainer.appendChild(listItem); 
    }); 
}