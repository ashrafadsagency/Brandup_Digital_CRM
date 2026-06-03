# Excel Import Export Specification

## Clients Export Columns
Client ID, Business Name, Brand Name, Industry, Contact Person, Phone, WhatsApp, Email, Website, Address, City, State, Status, Priority, Services, Monthly Fee, Client Since, Notes

## Leads Export Columns
Lead ID, Lead Name, Business Name, Phone, Email, Source, Stage, Requirement, Budget, Expected Closing Date, Follow-Up Date, Notes

## Payments Export Columns
Payment ID, Client Name, Package Name, Monthly Fee, Setup Fee, GST, Invoice Number, Due Date, Paid Date, Amount Received, Pending Amount, Status, Notes

## Tasks Export Columns
Task ID, Title, Client Name, Service, Assigned To, Priority, Status, Due Date, Description

## Follow-Ups Export Columns
Follow-Up ID, Related Type, Client/Lead Name, Date, Time, Purpose, Priority, Status, Notes

## Import Rules
- Required fields must be validated before saving.
- Duplicate phone/email should show warning.
- Invalid rows should be returned with error messages.
- User should be able to download failed import rows.
- Import preview table required before final upload.
