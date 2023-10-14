async function getData() {
  try {
    const selectedCondition = document.getElementById("parameterSelect").value;
    const apiUrl = `https://www.dnd5eapi.co/api/conditions/${selectedCondition}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const resultElement = document.getElementById("result");

    //removing the previous fetch data when fetching new data.
    while (resultElement.firstChild) {
      resultElement.removeChild(resultElement.firstChild);
    }

    const heading = document.createElement("h3");
    heading.classList.add("text-center", "text-3xl");
    heading.innerText = `Description for the ${selectedCondition} condition`;

    // Create the list element
    const list = document.createElement("ul");
    list.classList.add("text-left", "py-6");

    //rendering description in li
    data.desc.forEach((point) => {
      const listItem = document.createElement("li");
      listItem.innerText = point;
      list.appendChild(listItem);
    });

    // adding heading and list to the result element
    resultElement.appendChild(heading);
    resultElement.appendChild(list);
  } catch (error) {
    console.error("There is the error while fetching data", error);
  }
}
