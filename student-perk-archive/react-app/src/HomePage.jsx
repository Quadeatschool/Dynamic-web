import PerkCard from './PerkCard';
import perksData from './perksData';

function HomePage() {
  return (
    <div>
      <h1>Student Perk Archive</h1>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <input type="text" placeholder="Search perks..." style={{ flex: 1, padding: '0.5rem' }} />
        <select style={{ padding: '0.5rem' }}>
          <option value="">All Categories</option>
          <option value="food">Food</option>
          <option value="tech">Tech</option>
          <option value="retail">Retail</option>
        </select>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {perksData.map(perk => (
          <PerkCard key={perk.id} perk={perk} />
        ))}
      </div>
    </div>
  );
}

export default HomePage; 