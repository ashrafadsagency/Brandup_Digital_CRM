-- BrandUp AgencyOS Supabase/PostgreSQL Schema

create extension if not exists "uuid-ossp";

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text default 'admin' check (role in ('super_admin','admin','employee','viewer')),
  phone text,
  created_at timestamptz default now()
);

create table clients (
  id uuid primary key default uuid_generate_v4(),
  business_name text not null,
  brand_name text,
  industry text,
  contact_person text,
  phone text,
  whatsapp text,
  email text,
  website text,
  address text,
  city text,
  state text,
  country text default 'India',
  client_since date,
  status text default 'Active' check (status in ('Lead','Active','Inactive','Closed')),
  priority text default 'Medium' check (priority in ('High','Medium','Low')),
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table leads (
  id uuid primary key default uuid_generate_v4(),
  lead_name text,
  business_name text,
  phone text,
  email text,
  source text,
  stage text default 'New Lead',
  requirement text,
  budget numeric default 0,
  expected_closing_date date,
  follow_up_date date,
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table services (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references clients(id) on delete cascade,
  service_name text not null,
  start_date date,
  renewal_date date,
  monthly_fee numeric default 0,
  assigned_to text,
  status text default 'Active',
  created_at timestamptz default now()
);

create table payments (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references clients(id) on delete cascade,
  package_name text,
  monthly_fee numeric default 0,
  setup_fee numeric default 0,
  gst numeric default 0,
  invoice_number text,
  due_date date,
  paid_date date,
  amount_received numeric default 0,
  pending_amount numeric default 0,
  status text default 'Pending' check (status in ('Paid','Partial','Pending','Overdue')),
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table follow_ups (
  id uuid primary key default uuid_generate_v4(),
  related_type text check (related_type in ('Client','Lead')),
  client_id uuid references clients(id) on delete cascade,
  lead_id uuid references leads(id) on delete cascade,
  follow_up_date date not null,
  follow_up_time time,
  purpose text,
  priority text default 'Medium' check (priority in ('High','Medium','Low')),
  status text default 'Pending' check (status in ('Pending','Done','Missed')),
  notes text,
  created_at timestamptz default now()
);

create table tasks (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references clients(id) on delete cascade,
  title text not null,
  description text,
  service text,
  assigned_to text,
  priority text default 'Medium' check (priority in ('High','Medium','Low')),
  status text default 'Pending' check (status in ('Pending','In Progress','Review','Completed')),
  due_date date,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table content_calendar (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references clients(id) on delete cascade,
  content_type text check (content_type in ('Post','Reel','Story','Campaign')),
  title text not null,
  publish_date date,
  status text default 'Draft',
  caption text,
  notes text,
  created_at timestamptz default now()
);

create table documents (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references clients(id) on delete cascade,
  title text,
  file_url text,
  file_type text,
  category text,
  notes text,
  uploaded_at timestamptz default now()
);

create table activity_timeline (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references clients(id) on delete cascade,
  activity_type text,
  title text,
  description text,
  created_by text,
  created_at timestamptz default now()
);

-- Helpful indexes
create index clients_status_idx on clients(status);
create index payments_status_idx on payments(status);
create index payments_due_date_idx on payments(due_date);
create index tasks_status_idx on tasks(status);
create index follow_ups_date_idx on follow_ups(follow_up_date);
