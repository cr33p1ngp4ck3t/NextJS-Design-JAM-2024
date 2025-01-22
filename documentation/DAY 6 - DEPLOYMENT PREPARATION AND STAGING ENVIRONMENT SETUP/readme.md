# Day 6 - Deployment Preparation and Staging Environment Setup - Summary  

## Overview:  
On Day 6, the focus was on preparing for deployment, setting up a staging environment, and ensuring the marketplace's functionality in a production-like setting. Below is a summary of the steps I completed and the outcomes achieved.  

---

### **Step 1: Hosting Platform Setup**  
- **Platform Chosen:**  
  I used **Vercel** for quick and efficient deployment of the application.  
- **Repository Connected:**  
  The GitHub repository was successfully linked to the hosting platform, with build settings and deployment scripts properly configured.  

---

### **Step 2: Configure Environment Variables**  
- **Environment Variables Added:**  
  I created a `.env` file to include sensitive variables such as:  
  ```
  NEXT_PUBLIC_SANITY_PROJECT_ID=project_id  
  NEXT_PUBLIC_SANITY_DATASET=production  
  API_KEY=api_key  
  ```  
  These variables were securely uploaded to Vercel's dashboard.  

---

### **Step 3: Deploy to Staging**  
- **Application Deployed:**  
  The application was successfully deployed to the staging environment.  
- **Deployment Validation:**  
  - The build process completed without errors.  
  - Basic functionality, including navigation and API integration, was verified in the staging environment.  

---

### **Step 4: Staging Environment Testing**  
- **Testing Conducted:**  
  - **Functional Testing:** Core features such as product listing, cart operations, and API integration were validated.  
  - **Performance Testing:** Lighthouse and GTmetrix were used to analyze speed and responsiveness, achieving positive results.  
  - **Security Testing:** Input validation, HTTPS usage, and secure API communication were verified.  

- **Test Case Reporting:**  
  A detailed CSV test report was prepared, documenting all test cases with the following fields:  
  - Test Case ID  
  - Description  
  - Steps  
  - Expected Result  
  - Actual Result  
  - Status  
  - Remarks  

---

### **Step 5: Documentation Updates**  
- **README.md Created:**  
  A professional README.md file was prepared, summarizing all project activities, deployment steps, and testing results.  
- **Project Files Organized:**  
  All files from Days 1 to 6 were structured into folders and uploaded to the GitHub repository.  

---

## Expected Output Achieved:  
1. A fully deployed staging environment for the marketplace.  
2. Environment variables securely configured in the hosting platform.  
3. A comprehensive test case and performance report documenting staging tests.  
4. Organized project files and documentation hosted in the GitHub repository.  
5. A README.md file summarizing project activities and folder structure.  

---

**Checklist for Day 6:**  
- **Deployment Preparation:** ☑  
- **Staging Environment Testing:** ☑  
- **Documentation:** ☑  
- **Form Submission:** ☑  
- **Final Review:** ☑  

With the successful completion of these steps, the marketplace is now ready for further testing and final deployment.