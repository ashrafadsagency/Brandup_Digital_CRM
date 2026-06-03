import { NextResponse } from 'next/server';
import ExcelJS from 'exceljs';

const demoClients = [
  ['Ravi Steel & Electronics', 'Solar/Electronics', 'Active', 'Social Media, Ads', '9792987725'],
  ['Vineeta Pickles', 'Food', 'Active', 'Social Media, Branding', '8081077819'],
  ['Anandam Developers', 'Real Estate', 'Active', 'Creatives, Leads', '9250479191']
];

export async function GET() {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Clients');
  sheet.columns = [
    { header: 'Client Name', key: 'client', width: 30 },
    { header: 'Industry', key: 'industry', width: 22 },
    { header: 'Status', key: 'status', width: 14 },
    { header: 'Services', key: 'services', width: 32 },
    { header: 'Phone', key: 'phone', width: 18 }
  ];
  demoClients.forEach(row => sheet.addRow(row));
  sheet.getRow(1).font = { bold: true };
  const buffer = await workbook.xlsx.writeBuffer();
  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': 'attachment; filename="brandup-clients.xlsx"'
    }
  });
}
