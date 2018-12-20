using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ContactsDirectory.Core
{
    public interface IDataSource
    {
        Task<List<Contact>> GetContacts();
        Task<Contact> GetContact(Guid id);
        Task<Contact> CreateContact(Contact contact);
        Task<Contact> UpdateContact(Contact contact);
        Task<Contact> DeleteContact(Contact contact);
    }
}
