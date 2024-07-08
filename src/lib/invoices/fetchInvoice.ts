export type Invoices = {
    invoiceID: string,
    email: string,
    amount: string,
    date: Date,
    status: string,
  }
  

export async function fetchInvoices() {
    try {
      const response = await fetch('http://localhost:3000/api/invoices', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data: Invoices[] = await response.json();

      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  }