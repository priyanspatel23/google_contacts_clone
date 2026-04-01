import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import ContactList from './pages/ContactList';
import ContactDetail from './pages/ContactDetail';
import ContactForm from './pages/ContactForm';
import PlaceholderPage from './pages/PlaceholderPage';
import LabelView from './pages/LabelView';
import { SEED } from './data/contacts';

function App() {
  const [q, setQ] = useState('');
  const [contacts, setContacts] = useState(SEED);

  const toggleFavorite = (id) => {
    setContacts((cs) =>
      cs.map((c) => (c.id === id ? { ...c, isFavorite: !c.isFavorite } : c))
    );
  };

  return (
    <>
      <TopBar q={q} setQ={setQ} />
      <div className="app-layout">
        <Sidebar />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <ContactList
                  contacts={contacts.filter((c) => !c.isDeleted)}
                  q={q}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
            <Route
              path="/starred"
              element={<ContactList contacts={contacts.filter((c) => c.isFavorite && !c.isDeleted)} q={q} title="Starred contacts" toggleFavorite={toggleFavorite} />}
            />
            <Route
              path="/contact/:id"
              element={<ContactDetail contacts={contacts} toggleFavorite={toggleFavorite} />}
            />
            <Route path="/new" element={<ContactForm contacts={contacts} setContacts={setContacts} />} />
            <Route path="/edit/:id" element={<ContactForm contacts={contacts} setContacts={setContacts} edit />} />
            <Route path="/frequent" element={<ContactList contacts={contacts.filter(c => !c.isDeleted).slice(0, 5)} q={q} title="Frequently contacted" />} />
            <Route path="/directory" element={<PlaceholderPage icon="bi-building" title="Directory" desc="Your organization's contacts will appear here." />} />
            <Route
              path="/label/:name"
              element={<LabelView contacts={contacts.filter((c) => !c.isDeleted)} q={q} toggleFavorite={toggleFavorite} />}
            />
            <Route path="/trash" element={<ContactList contacts={contacts.filter(c => c.isDeleted)} q={q} title="Trash" />} />
            <Route path="/merge" element={<PlaceholderPage icon="bi-intersect" title="Merge & fix" desc="Duplicate contacts will appear here." />} />
            <Route path="/import" element={<PlaceholderPage icon="bi-upload" title="Import contacts" desc="Upload a CSV or vCard file." />} />
            <Route path="/export" element={<PlaceholderPage icon="bi-download" title="Export contacts" desc="Download your contacts as a CSV or vCard." />} />
          </Routes>
        </main>
      </div>

      <Link to="/new" className="fab d-flex d-md-none" title="New contact">
        <i className="bi bi-plus-lg"></i>
      </Link>
    </>
  );
}

export default App;
