console.log(data);

// WRITE YOUR CODE BELOW!
//Create Dog list with data name
const ulDogList = document.querySelector(".dogs-list");
for (let i = 0; i < data.length; i++) {
  const dog = data[i];
  const li = document.createElement("li");
  li.classList = "dogs-list__button";
  li.innerHTML = dog.name;
  ulDogList.appendChild(li);

  // Create main dog card with data info
  const dogMainSection = document.querySelector(".main__dog-section");
  const h2 = document.querySelector("h2");
  h2.innerHTML = dog.name;
  dogMainSection.appendChild(h2);
  const img = document.createElement("img");
  img.src = dog.image;
  dogMainSection.appendChild(img);
  const mainDiv = document.createElement("div");
  mainDiv.classList = "main__dog-section__desc";
  dogMainSection.appendChild(mainDiv);
  const h3 = document.createElement("h3");
  h3.innerHTML = "Bio";
  mainDiv.appendChild(h3);
  const p = document.createElement("p");
  p.innerHTML = dog.bio;
  mainDiv.appendChild(p);
  const secondParagraph = document.createElement("p");
  dogMainSection.appendChild(secondParagraph);
  const emElement = document.createElement("em");
  emElement.innerHTML = "Is naughty?";
  let answer;
  if (dog.isGoodDog === true) {
    answer = " yes!";
  } else {
    answer = " no!";
  }
  secondParagraph.appendChild(emElement);
  const normalText = document.createTextNode(answer);
    secondParagraph.appendChild(normalText);
    const btn = document.createElement("button")
    btn.innerHTML = "Good dog!"
    dogMainSection.appendChild(btn)
 }
