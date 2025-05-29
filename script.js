let contacts = [];
let editingIndex = null;

const contactForm = document.getElementById("contactForm");
const contactList = document.getElementById("contactList");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (editingIndex !== null) {
    contacts[editingIndex] = { name, email, phone };
    editingIndex = null;
  } else {
    contacts.push({ name, email, phone });
  }

  contactForm.reset();
  renderContacts();
});

function renderContacts() {
  contactList.innerHTML = "";

  contacts.forEach((contact, index) => {
    const card = document.createElement("div");
    card.className = "contact-card";

    card.innerHTML = `
      <div class="contact-info">
        <p><strong>${contact.name}</strong></p>
        <p>${contact.email}</p>
        <p>${contact.phone}</p>
      </div>
      <div class="contact-actions">
        <button class="edit-btn" onclick="editContact(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteContact(${index})">Delete</button>
      </div>
    `;

    contactList.appendChild(card);
  });
}

function editContact(index) {
  const contact = contacts[index];
  document.getElementById("name").value = contact.name;
  document.getElementById("email").value = contact.email;
  document.getElementById("phone").value = contact.phone;
  editingIndex = index;
}

function deleteContact(index) {
  contacts.splice(index, 1);
  renderContacts();
}
