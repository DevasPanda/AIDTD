# Decap CMS Setup Guide

This project uses **Decap CMS** (formerly Netlify CMS), a Git-based content management system that allows you to edit website content without touching code.

## ✅ What's Already Set Up

The following files have been created and configured:

```
AIDTD/
├── public/
│   └── admin/
│       ├── index.html          ✅ Admin panel UI
│       └── config.yml          ✅ CMS configuration
├── content/                    ✅ Content files (JSON)
│   ├── home.json
│   ├── courses.json
│   ├── internships.json
│   ├── about.json
│   └── settings.json
└── src/
    ├── Home.jsx               ✅ Updated to use content/home.json
    ├── Courses.jsx            ✅ Updated to use content/courses.json
    ├── Internships.jsx        ✅ Updated to use content/internships.json
    └── About.jsx              ✅ Updated to use content/about.json
```

## 🚀 How to Complete the Setup

### Step 1: Create GitHub OAuth Application

1. Go to GitHub Settings → Developer Settings → OAuth Apps
   - Direct link: https://github.com/settings/developers

2. Click **"New OAuth App"**

3. Fill in the following details:
   - **Application name**: `AIDTD CMS`
   - **Homepage URL**: `https://your-site.netlify.app` (replace with your actual Netlify URL)
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`

4. Click **"Register application"**

5. Copy the **Client ID** and click **"Generate a new client secret"**, then copy the **Client Secret**
   - ⚠️ **Important**: Save the Client Secret immediately - you won't be able to see it again!

### Step 2: Configure Netlify OAuth

1. Go to your Netlify site dashboard

2. Navigate to **Site Settings → Access Control → OAuth**

3. Click **"Install Provider"**

4. Select **GitHub** from the provider list

5. Paste your GitHub OAuth **Client ID** and **Client Secret**

6. Click **"Install"**

### Step 3: Deploy to Netlify

If you haven't already deployed your site to Netlify:

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Add Decap CMS setup"
   git push origin main
   ```

2. Netlify will automatically detect the changes and redeploy

3. Wait for the deployment to complete (usually 1-2 minutes)

### Step 4: Access the Admin Panel

1. Once deployed, visit: `https://your-site.netlify.app/admin`

2. Click **"Login with GitHub"**

3. Authorize the OAuth application

4. You should now see the Decap CMS admin panel!

## 📝 How to Edit Content

### Using the Admin Panel

1. Go to `https://your-site.netlify.app/admin`

2. Login with GitHub

3. Navigate to the content you want to edit:
   - **Pages** → Home Page
   - **Pages** → Courses Page
   - **Pages** → Internships Page
   - **Pages** → About Page
   - **Site Settings** → General Settings

4. Make your changes in the visual editor

5. Click **"Save"** (saves draft) or **"Publish"** (commits to GitHub)

6. Netlify will automatically detect the commit and redeploy your site

7. Your changes will be live in 1-2 minutes!

### Direct File Editing (Alternative)

You can also edit the JSON files directly in your code editor:

- Edit files in the `content/` folder
- Commit and push to GitHub
- Netlify will automatically redeploy

## 🎨 What Content Can Be Edited

### Home Page ([content/home.json](content/home.json))
- Hero section text and buttons
- Dashboard project cards
- Services section
- "Why AIDT&D" section

### Courses Page ([content/courses.json](content/courses.json))
- Page title and description
- Course listings (Level 01-04)
- Course topics and features
- "How it works" section

### Internships Page ([content/internships.json](content/internships.json))
- Page title and description
- Internship programs
- Application process steps
- Benefits and requirements

### About Page ([content/about.json](content/about.json))
- Mission and vision statements
- Company story
- What we do section
- Core values

### Site Settings ([content/settings.json](content/settings.json))
- Site name and description
- Contact email
- Privacy policy text
- Terms & conditions text

## 🔧 Customizing the CMS

To add new fields or content types, edit [public/admin/config.yml](public/admin/config.yml).

Example: Adding a new field to the Home page:

```yaml
- name: "home"
  label: "Home Page"
  file: "content/home.json"
  fields:
    # ... existing fields ...
    - { label: "New Field", name: "newField", widget: "string" }
```

Refer to [Decap CMS documentation](https://decapcms.org/docs/configuration-options/) for more configuration options.

## 🐛 Troubleshooting

### Can't access /admin page
- Make sure you've deployed to Netlify
- Check that `public/admin/index.html` exists
- Clear your browser cache

### OAuth login not working
- Verify GitHub OAuth app callback URL is `https://api.netlify.com/auth/done`
- Check that OAuth is configured in Netlify Site Settings
- Make sure Client ID and Secret are correct

### Changes not appearing on the site
- Wait 1-2 minutes for Netlify to rebuild
- Check the Netlify deploy logs for errors
- Verify your JSON files are valid (no syntax errors)

### JSON syntax errors
- Use [JSONLint](https://jsonlint.com/) to validate your JSON
- Common issues:
  - Missing commas between fields
  - Extra commas at the end of objects/arrays
  - Unescaped quotes in text values

## 📚 Resources

- [Decap CMS Documentation](https://decapcms.org/docs/intro/)
- [Decap CMS Widget Reference](https://decapcms.org/docs/widgets/)
- [Netlify Deployment Docs](https://docs.netlify.com/)

## 🎉 You're All Set!

Once OAuth is configured, you can edit your website content at `/admin` without ever touching code again!

**Admin URL**: `https://your-site.netlify.app/admin`

---

*Need help? Check the troubleshooting section above or refer to the Decap CMS documentation.*
