function filterContacts(contact, query) {
  const lowerCaseQuery = query.toLowerCase();
  const fullName = (contact.firstName + ' ' + contact.lastName).toLowerCase();
  return (
    contact.firstName.toLowerCase().match(lowerCaseQuery) ||
    contact.lastName.toLowerCase().match(lowerCaseQuery) ||
    fullName.match(lowerCaseQuery) ||
    contact.department.toLowerCase().match(lowerCaseQuery)
  );
}

export default filterContacts;
