export async function GetProducts() {
  const response = await fetch('http://localhost:8080/material');
  const material = await response.json();

  return material?.data || [];
  
}