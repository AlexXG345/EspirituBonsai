const API_URL = import.meta.env.VITE_API_URL;

// Obtener todos los bonsáis
export async function getBonsais() {
  const res = await fetch(`${API_URL}/api/bonsais`);
  if (!res.ok) throw new Error('Error al obtener bonsáis');
  return res.json();
}

// Obtener un bonsái por id
export async function getBonsaiById(id) {
  const res = await fetch(`${API_URL}/api/bonsais/${id}`);
  if (!res.ok) throw new Error('Bonsái no encontrado');
  return res.json();
}