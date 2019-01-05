import API from './API';

class ContactsAPI extends API {
  constructor() {
    super('contacts');
  }

  /**
   * Get all contacts
   */
  async get() {
    return await this.request();
  }

  /**
   * Insert a new contact into the database
   *
   * @param {object} contact - Contact object
   */
  async create(contact) {
    return await this.request('', { method: 'POST', body: contact });
  }
}

export default ContactsAPI;
