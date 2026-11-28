function addAccordionTo(rootId, item)
{
  const root = document.getElementById(rootId);
  const newItem = item.cloneNode(true); // Nhân bản toàn bộ node và con bên trong
  const newId = `du-thao${root.childElementCount + 1}`;

  const header = newItem.querySelector(".accordion-header");
  const collapse = newItem.querySelector(".collapse");
  const button = newItem.querySelector(".accordion-button");

  header.firstChild.nodeValue = `Header ${newId}\n`;

  // Cập nhật ID và target khớp nhau cho Bootstrap hoạt động
  collapse.setAttribute("id", newId);
  collapse.classList.remove("show"); // Đảm bảo item mới mặc định đóng

  button.setAttribute("data-bs-target", `#${newId}`);
  button.setAttribute("aria-controls", newId);
  button.setAttribute("aria-expanded", "false");
  button.classList.add("collapsed");

  root.append(newItem);
}

function deleteAccordionItem(rootId)
{
  const root = document.getElementById(rootId);
 
  if (root.lastElementChild)
    root.removeChild(root.lastElementChild);
}
