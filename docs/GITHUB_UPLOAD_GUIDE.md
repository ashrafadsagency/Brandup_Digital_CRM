# GitHub Upload Guide

## Upload Method 1: GitHub Website
1. Create a new GitHub repository named `brandup-agencyos`.
2. Extract this ZIP file on your computer.
3. Open the repository on GitHub.
4. Click **Add file > Upload files**.
5. Drag and drop all extracted files and folders.
6. Commit changes to the `main` branch.

## Upload Method 2: Git Command
```bash
git init
git add .
git commit -m "Initial BrandUp AgencyOS setup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/brandup-agencyos.git
git push -u origin main
```

## After Upload
1. Connect the GitHub repo to Vercel or Hostinger Node.js.
2. Add environment variables from `.env.example`.
3. Run the SQL from `supabase/schema.sql` in Supabase.
4. Deploy.
