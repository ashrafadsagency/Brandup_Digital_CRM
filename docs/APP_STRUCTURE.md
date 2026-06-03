# Suggested Next.js App Structure

app/
  layout.tsx
  page.tsx
  login/page.tsx
  dashboard/page.tsx
  clients/page.tsx
  clients/[id]/page.tsx
  leads/page.tsx
  payments/page.tsx
  follow-ups/page.tsx
  tasks/page.tsx
  content-calendar/page.tsx
  documents/page.tsx
  reports/page.tsx
  ai-assistant/page.tsx
  settings/page.tsx

components/
  layout/
    Sidebar.tsx
    Topbar.tsx
    MobileNav.tsx
  dashboard/
    KPICard.tsx
    RevenueChart.tsx
    TaskStatusChart.tsx
    PaymentStatusChart.tsx
  clients/
    ClientTable.tsx
    ClientForm.tsx
    ClientProfile.tsx
  leads/
    LeadTable.tsx
    LeadForm.tsx
  payments/
    PaymentTable.tsx
    PaymentForm.tsx
  follow-ups/
    FollowUpTable.tsx
    FollowUpForm.tsx
  tasks/
    TaskBoard.tsx
    TaskForm.tsx
  shared/
    DataTable.tsx
    SearchBar.tsx
    ExportButton.tsx
    ImportButton.tsx
    StatusBadge.tsx

lib/
  supabase.ts
  validations.ts
  excel.ts
  utils.ts
  constants.ts

hooks/
  useClients.ts
  useLeads.ts
  usePayments.ts
  useTasks.ts
  useFollowUps.ts

store/
  authStore.ts
  uiStore.ts

types/
  client.ts
  lead.ts
  payment.ts
  task.ts
  followup.ts
