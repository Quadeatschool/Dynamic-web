import { useState } from 'react';

function SubmitPerk() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    link: '',
    instructions: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  }

  return (
    <div>
      <h1>Submit a Perk</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Perk Name" required style={{ padding: '0.5rem' }} />
        <input name="company" value={form.company} onChange={handleChange} placeholder="Company" required style={{ padding: '0.5rem' }} />
        <input name="link" value={form.link} onChange={handleChange} placeholder="Link" type="url" style={{ padding: '0.5rem' }} />
        <textarea name="instructions" value={form.instructions} onChange={handleChange} placeholder="How to claim" required style={{ padding: '0.5rem' }} />
        <button type="submit" style={{ background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '6px', padding: '0.5rem 1rem', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SubmitPerk; 