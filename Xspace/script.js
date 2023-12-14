let selectedCharacter = ''; // Variable to store the selected character

function selectCard(cardNumber, characterName) {
    selectedCharacter = characterName; // Store the selected character name

    // Reset border color for all cards
    for (let i = 1; i <= 5; i++) {
      document.getElementById(`card${i}`).classList.remove('selected');
    }
  
    // Set border color for the selected card
    let selectedCard = document.getElementById(`card${cardNumber}`);
    selectedCard.classList.add('selected');
  
    // Display the character's name
    let displayName = document.getElementById('display-name');
    displayName.textContent = characterName;
    displayName.style.opacity = 1;
  
    // Animation for displaying the name
    setTimeout(() => {
      displayName.style.opacity = 0;
    }, 1500); // Display for 1.5 seconds
  }
  
