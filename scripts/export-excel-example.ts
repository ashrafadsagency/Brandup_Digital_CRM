import ExcelJS from 'exceljs';
export async function exportClients(clients:any[]) {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Clients');
  ws.columns = [
    { header:'Business Name', key:'business_name', width:30 },
    { header:'Industry', key:'industry', width:20 },
    { header:'Contact Person', key:'contact_person', width:20 },
    { header:'Phone', key:'phone', width:18 },
    { header:'Email', key:'email', width:25 },
    { header:'Status', key:'status', width:15 },
    { header:'Monthly Fee', key:'monthly_fee', width:15 },
  ];
  clients.forEach(c => ws.addRow(c));
  return await wb.xlsx.writeBuffer();
}
