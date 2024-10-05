// Define the CSS for the sticky time div
const style = `
#sticky-time-div {
    position: sticky;
    bottom: 0;
    padding: 2rem;
    z-index: 999;
    background: #272b35;
    font-size: 1.5rem;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 1em;
    padding-inline: 1em;
    border-radius: 1em;
}
`;

// Add the custom style to the page
let styleElement = document.querySelector('#sticky-time-div');
if (styleElement) {
    styleElement.remove();
}
styleElement = document.createElement('style');
styleElement.textContent = style;
document.head.appendChild(styleElement);

// Select the target element dynamically
const targetElement = document.querySelector('.container_cbd271');

// Only proceed if the target element exists
if (targetElement) {
    // Check if the time div already exists, if so, remove it
    let timeDiv = document.querySelector('#sticky-time-div');
    
    if (timeDiv) {
        timeDiv.remove();  // Remove the existing time div
    }

    // Create a new time div
    timeDiv = document.createElement('div');
    timeDiv.id = 'sticky-time-div';
    
    // Insert the new div as the first child
    targetElement.appendChild(timeDiv);

    // Immediately set the current time
    const now = new Date();
    let timeString = now.toLocaleTimeString();
    timeDiv.textContent = `${timeString}`;

    // Update the time every second
    setInterval(() => {
        const now = new Date();
        timeString = now.toLocaleTimeString();
        timeDiv.textContent = `${timeString}`;
    }, 1000);
}
