function PerkCard({ perk }) {
  return (
    <div style={{ background: 'var(--accent1-color)', color: 'var(--dark-color)', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <h2 style={{ color: 'var(--primary-color)' }}>{perk.title}</h2>
      <p>{perk.description}</p>
      <button style={{ background: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '6px', padding: '0.5rem 1rem', cursor: 'pointer' }} onClick={() => alert(perk.instructions)}>
        How to Claim
      </button>
    </div>
  );
}

export default PerkCard; 