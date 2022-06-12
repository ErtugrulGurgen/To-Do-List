let inputById = document.getElementById("input");
let checkById = document.getElementById("check");

inputById.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
      if (inputById.value == "") {
        alert("Please write a task");
      } else {
        let newTask = inputById.value;
        let divAdded = document.createElement("div");
        divAdded.setAttribute("class", "newDiv");
        let newPara = document.createElement("p");
        newPara.setAttribute("class", "addedItem");
        let node = document.createTextNode(newTask);
        newPara.appendChild(node);
        divAdded.appendChild(newPara);
        let newCheck = document.createElement("button");
        newCheck.setAttribute("class", "newButton");
        let checkNode = document.createTextNode("-");
        newCheck.appendChild(checkNode);
        divAdded.appendChild(newCheck);
        document.getElementById("taskList").appendChild(divAdded);
        let addedItemByClass = document.getElementsByClassName("addedItem");
        for (let a = 0; a < addedItemByClass.length; a++) {
          newCheck.setAttribute("id", `check${a}`);
          newPara.setAttribute("id", `para${a}`);
          divAdded.setAttribute("id", `div${a}`);
        }
        divAdded.style.border = "1px solid black";
        divAdded.style.borderRadius = "2rem";
        divAdded.style.backgroundColor = "white";
        divAdded.style.width = "18rem";
        divAdded.style.height = "2rem";
        divAdded.style.margin = "5% 0 0 16%";
        for (let i = 0; i < addedItemByClass.length; i++) {
          addedItemByClass[i].style.paddingLeft = "1rem";
          addedItemByClass[i].style.paddingTop = "0.4rem";
          addedItemByClass[i].style.fontWeight = "bolder";
          newCheck.style.width = "20px";
          newCheck.style.height = "20px";
          newCheck.style.position = "relative";
          newCheck.style.top = "-20px";
          newCheck.style.left = "263px";
          newCheck.style.borderRadius = "1rem";
          newCheck.style.border = "1px solid rgb(63, 62, 62)";
          newCheck.style.fontWeight = "bolder";
          newButtonByClass = document.getElementsByClassName(`newButton`);
          inputById.value = "";
          //Remove added items
          for (let x = 0; x < newButtonByClass.length; x++) {
            newButtonByClass[x].addEventListener("click", () => {
              let divRemove = document.getElementById(`div${x}`);
              divRemove.remove();
            });
          }
        }
    }
  }
});

function addEvent() {
  // create new items
  if (inputById.value == "") {
    alert("Please write a task");
  } else {
    let newTask = inputById.value;
    let divAdded = document.createElement("div");
    divAdded.setAttribute("class", "newDiv");
    let newPara = document.createElement("p");
    newPara.setAttribute("class", "addedItem");
    let node = document.createTextNode(newTask);
    newPara.appendChild(node);
    divAdded.appendChild(newPara);
    let newCheck = document.createElement("button");
    newCheck.setAttribute("class", "newButton");
    let checkNode = document.createTextNode("-");
    newCheck.appendChild(checkNode);
    divAdded.appendChild(newCheck);
    document.getElementById("taskList").appendChild(divAdded);
    let addedItemByClass = document.getElementsByClassName("addedItem");
    for (let a = 0; a < addedItemByClass.length; a++) {
      newCheck.setAttribute("id", `check${a}`);
      newPara.setAttribute("id", `para${a}`);
      divAdded.setAttribute("id", `div${a}`);
    }
    divAdded.style.border = "1px solid black";
    divAdded.style.borderRadius = "2rem";
    divAdded.style.backgroundColor = "white";
    divAdded.style.width = "18rem";
    divAdded.style.height = "2rem";
    divAdded.style.margin = "5% 0 0 16%";
    for (let i = 0; i < addedItemByClass.length; i++) {
      addedItemByClass[i].style.paddingLeft = "1rem";
      addedItemByClass[i].style.paddingTop = "0.4rem";
      addedItemByClass[i].style.fontWeight = "bolder";
      newCheck.style.width = "20px";
      newCheck.style.height = "20px";
      newCheck.style.position = "relative";
      newCheck.style.top = "-20px";
      newCheck.style.left = "263px";
      newCheck.style.borderRadius = "1rem";
      newCheck.style.border = "1px solid rgb(63, 62, 62)";
      newCheck.style.fontWeight = "bolder";
      newButtonByClass = document.getElementsByClassName(`newButton`);
      inputById.value = "";
      //Remove added items
      for (let x = 0; x < newButtonByClass.length; x++) {
        newButtonByClass[x].addEventListener("click", () => {
          let divRemove = document.getElementById(`div${x}`);
          divRemove.remove();
        });
      }
    }
  }
}
checkById.addEventListener("click", addEvent);
