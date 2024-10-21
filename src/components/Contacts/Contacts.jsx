
import useGetChats from '../../hooks/useGetChats';
import styles from './Contacts.module.css';

export const Contacts = ({ onSelectContact, filterType, showUnread, selectedContact }) => {
    const {loading, chats} = useGetChats();
    console.log("🧮🧮🧮🧮🧮The chats: ",chats)
    const contacts = [
        { name: "name1", id: 1, img: "/avatar.png", type: 'individual', unreadMessages: 3 },
        { name: "name2", id: 2, img: "/avatar.png", type: 'group', unreadMessages: 0 },
        { name: "name3", id: 3, img: "/avatar.png", type: 'group', unreadMessages: 0 },
        { name: "name4", id: 4, img: "/avatar.png", type: 'group', unreadMessages: 0 },
        { name: "name5", id: 5, img: "/avatar.png", type: 'individual', unreadMessages: 10 },
        { name: "name6", id: 6, img: "/avatar.png", type: 'individual', unreadMessages: 0 },
        { name: "name7", id: 7, img: "/avatar.png", type: 'individual', unreadMessages: 0 },
        { name: "name8", id: 8, img: "/avatar.png", type: 'group', unreadMessages: 90 },
        { name: "name9", id: 9, img: "/avatar.png", type: 'individual', unreadMessages: 0 },
        { name: "name10", id: 10, img: "/avatar.png", type: 'group', unreadMessages: 1 },
    ];

    const filteredContacts = contacts.filter(contact => {
        const typeMatch = filterType === 'all' || contact.type === filterType;
        const unreadMatch = !showUnread || contact.unreadMessages > 0;
        return typeMatch && unreadMatch;
    });

    const handleContactClick = (contact) => {
        if (selectedContact?.id === contact.id) {
            onSelectContact(null);
        } else {
            onSelectContact(contact);
        }
    };

    return (
        <div className={`list-group ${styles.con}`}>
            {filteredContacts.map((contact) => (
                <a
                    href="#"
                    key={contact.id}
                    onClick={() => handleContactClick(contact)}
                    className={`p-3 list-group-item list-group-item-action d-flex ${styles.contact} `}
                >
                    <div className={styles.circularImage}>
                        <img src={contact.img} alt={contact.name} />
                    </div>
                    <div className='fs-5' style={{ color: '#9049BF' }}>
                        {contact.name}
                    </div>
                    {contact.unreadMessages > 0 && (
                        <span class="badge text-bg-danger rounded-pill d-flex"
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '10px',
                            }}>{contact.unreadMessages}</span>
                    )}
                </a>
            ))}
        </div>
    );
};

export default Contacts;
