export async function GetProducts() {
  const response = await fetch('');
  const material = await response.json();

  return material?.data || [];
  
}