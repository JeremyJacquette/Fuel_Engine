import fetch from 'node-fetch'; 

async function getData() {

  try {
    const response = await fetch('https://data.economie.gouv.fr/api/explore/v2.1/catalog/datasets/prix-des-carburants-en-france-flux-instantane-v2/records?select=adresse,region,sp95_prix,sp98_prix,gazole_prix,ville&limit=5');

    if (!response.ok) {
      throw new Error("oops");
    }
    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error("Erreur de récupération des données:", error);
  }
  
}

export default getData;

