export type Users = {
    id: string,
    name: string,
    email: string,
    image: string,
  }
  

export async function fetchUsers() {
    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data: Users[] = await response.json();
      console.log(data); // This will log on the server side
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  }