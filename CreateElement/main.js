const container = document.getElementById("container");
const inp = document.getElementById("inpText");
const btnSubmit = document.getElementById("btnSubmit");
const btnClear = document.getElementById("btnClear");
const btnCreateNested = document.getElementById("btnCreateNested");

inp.addEventListener("keypress", event => {
  if (event.key == "Enter")
  {
    event.preventDefault();

    btnSubmit.click();
  }
});

btnSubmit.addEventListener("click", AddPara);
btnClear.addEventListener("click", ClearParas);
btnCreateNested.addEventListener("click", CreateNested);

function ResetInput(input, value)
{
  input.value = value;
  input.focus();
}

function AddPara()
{
  const para = document.createElement("p");
  const div = document.createElement('div');

  para.textContent = inp.value;
  div.append(para);
  div.style.backgroundColor = "red";
  div.style.width = "50%";

  container.append(div);

  // reset input value
  ResetInput(inp, "");
}

function ClearParas()
{
  const childrenDiv = container.querySelectorAll("div");

  childrenDiv.forEach(child => child.remove());

  // reset input value
  ResetInput(inp, "");
}

function CreateNested()
{
  const containerNested = document.getElementById("container-nested");
  const fragment = document.createDocumentFragment();
  const li = fragment
    .appendChild(document.createElement("section"))
    .appendChild(document.createElement("ul"))
    .appendChild(document.createElement("li"));

  li.textContent = "Hi";

  containerNested.appendChild(fragment);
}
