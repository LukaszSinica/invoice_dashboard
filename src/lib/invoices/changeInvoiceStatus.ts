export type Invoices = {
    invoiceID: string,
    email: string,
    amount: string,
    date: Date,
    status: string,
  }
  
type ChangeStatusProps = {
    invoiceId: string,
    status: string
}

export async function changeStatus({...props}: ChangeStatusProps) {
    try {
      const response = await fetch('http://localhost:3000/api/invoices/edit/status', {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify(props),
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