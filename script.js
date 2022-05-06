// create JS container

const container = document.querySelector('#container');
// red text:
const redText = document.createElement('p');
redText.style.color = 'red';
redText.textContent = `Hey I'm red!`;
container.appendChild(redText);


//blue h3
const blueTitle = document.createElement('h3')
blueTitle.style.color = 'blue';
blueTitle.textContent=`I'm a blue h3!`
container.appendChild(blueTitle);

// div with pink background and solid black border

const borderDiv = document.createElement('div');
borderDiv.style.borderColor='black';
borderDiv.style.borderWidth='5px';
borderDiv.style.backgroundColor = 'pink';
borderDiv.style.borderStyle='solid';

// elements nestled in the div:

const divTitle = document.createElement('h1');
const divText = document.createElement('p');
divTitle.textContent = `I'm in a div`
divText.textContent = `ME TOO!`

// append div to container, append elements to div:

container.appendChild(borderDiv);
borderDiv.appendChild(divTitle);
borderDiv.appendChild(divText);