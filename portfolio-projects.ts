export type Project = {
  title: string
  description: string
  details: string
  tags: string[]
  image: string | null
}

type Category = {
  label: string
  blurb: string
  projects: Project[]
}

export const categories: Category[] = [
  {
    label: 'Zoho',
    blurb: 'All Zoho CRM, Desk, Flow, and Sheet implementations in one place, from lead intake to customer resolution',
    projects: [
      { title: 'Zoho Flow Website Forms', description: 'Connected website forms to Zoho CRM, Zoho Desk, and Zoho Sheet for a coordinated intake process.', details: 'Designed Zoho Flow automations for contact, quote, moving, and quick-booking forms. The flows route submissions into the right CRM and Desk records, create supporting sheet entries, and keep the customer journey moving without manual re-entry.', tags: ['Zoho Flow', 'Zoho CRM', 'Zoho Desk', 'Zoho Sheet'], image: '/projects/zoho-flow-website-forms.png' },
      { title: 'Zoho CRM Leads Workspace', description: 'Configured a structured lead workspace for managing booking enquiries, owners, services, urgency, and contact details.', details: 'Organized Zoho CRM lead records with custom views, booking fields, contact information, service details, tags, and ownership data so teams can qualify and act on enquiries consistently.', tags: ['Zoho CRM', 'Leads', 'CRM Operations', 'Data Management'], image: '/projects/zoho-crm-leads-workspace.png' },
      { title: 'Zoho CRM Analytics Dashboard', description: 'Built an analytics dashboard tracking enquiries, bookings, revenue, sources, team performance, and conversion outcomes.', details: 'Created a management dashboard with KPI cards and visual reports for monthly enquiry trends, source performance, team performance, booking outcomes, pipeline, and booking value.', tags: ['Zoho CRM', 'Analytics', 'Dashboards', 'Reporting'], image: '/projects/zoho-crm-analytics-dashboard.png' },
      { title: 'Zoho CRM Reports Library', description: 'Created a reusable reporting library for revenue, lead volume, enquiry channels, pipeline, and booking performance.', details: 'Structured CRM reports that turn operational records into clear performance views, including revenue by sector, monthly booking value, lead volume, source performance, and booking conversion.', tags: ['Zoho CRM', 'Reports', 'Business Intelligence', 'Performance'], image: '/projects/zoho-crm-reports-library.png' },
      { title: 'Webform Initial Desk Acknowledgement', description: 'Automatically acknowledged new enquiries after they were created as Zoho Desk tickets and linked to CRM.', details: 'Built a live Zoho Flow with CRM triggers, decision logic, delays, lead lookups, and a Desk email reply. The workflow gives customers a timely acknowledgement while keeping the ticket and lead context connected for the team.', tags: ['Zoho Flow', 'Zoho Desk', 'Zoho CRM', 'Customer Support'], image: '/projects/webform-initial-desk-acknowledgement.png' },
      { title: 'Inbound Bookings Ticket Workflow', description: 'Structured inbound booking requests in Zoho Desk with purpose-built booking and ticket fields.', details: 'Configured booking and ticket information layouts for the Inbound Bookings Team, including journey type, service type, postcode, contact details, CRM IDs, subject, and description fields.', tags: ['Zoho Desk', 'Ticketing', 'CRM Operations', 'Bookings'], image: '/projects/inbound-bookings-ticket-workflow.png' },
      { title: 'Zoho Flow Execution Monitoring', description: 'Monitored automation health with execution summaries, success rates, and daily flow activity.', details: 'Used Zoho Flow summary reporting to track execution volume and success across the last seven days, making it easier to spot failures, validate automations, and maintain reliable operations.', tags: ['Zoho Flow', 'Reporting', 'Monitoring', 'Automation'], image: '/projects/zoho-flow-execution-monitoring.png' },
    ],
  },
  {
    label: 'n8n',
    blurb: 'n8n implementations in one place, from AI agents and LLM workflows to API orchestration, data processing, and content automation',
    projects: [
      { title: 'AI-Powered Facebook Chatbot', description: 'Developed intelligent chatbot handling customer inquiries and support requests.', details: 'Built AI agent integrated with Facebook Messenger using advanced prompt engineering to qualify leads, answer common questions, and route complex inquiries to human agents.', tags: ['n8n', 'AI', 'Facebook', 'Customer Service', 'Chatbot'], image: '/projects/workflow-06.png' },
      { title: 'Jobs Scraper + Resume Optimizer', description: 'Built system scraping job listings and automatically tailoring resumes using AI.', details: 'Created automation that scrapes job postings, extracts key requirements, and uses AI to tailor resumes for improved matching and application success rates.', tags: ['n8n', 'AI', 'Web Scraping', 'Automation'], image: '/projects/workflow-07.png' },
      { title: 'AI Appointment Setter', description: 'Automated workflow qualifying leads and scheduling appointments efficiently.', details: 'Built AI agent that qualifies leads through conversation, checks availability, and automatically schedules appointments in calendar systems while sending confirmation emails.', tags: ['n8n', 'AI', 'Sales Automation', 'Lead Management'], image: null },
      { title: 'RAG Knowledge Base Agents', description: 'Developed AI agents leveraging knowledge bases for context-aware responses.', details: 'Created advanced AI agents using Retrieval-Augmented Generation (RAG) technology to provide accurate, context-aware responses based on company knowledge bases and documentation.', tags: ['n8n', 'AI', 'RAG', 'Knowledge Management'], image: null },
      { title: 'YouTube Shorts & Reels Creator', description: 'Automated generation and formatting of short-form video content for distribution.', details: 'Set up an n8n workflow to automatically convert long-form content into optimized YouTube Shorts and Instagram Reels with captions, transitions, and platform-specific formatting.', tags: ['n8n', 'Video Automation', 'Social Media', 'Content'], image: null },
    ],
  },
  {
    label: 'Make.com',
    blurb: 'All Make.com scenarios in one place, covering data, files, finance, notifications, and business processes',
    projects: [
      { title: 'Gmail to Google Drive Auto-Organization', description: 'Automated intelligent sorting and organization of email attachments into structured folders.', details: 'Built a Make.com scenario to categorize and organize email attachments into Google Drive folders based on file type, sender, and date.', tags: ['Make.com', 'Gmail', 'Google Drive', 'Workflow Automation'], image: '/projects/workflow-04.png' },
      { title: 'Xero to Asana Financial Workflow', description: 'Streamlined financial operations by automating transaction exports and task creation.', details: 'Created a Make.com integration between Xero and Asana to automatically create project tasks from financial transactions, enabling seamless project accounting and expense tracking.', tags: ['Make.com', 'Xero', 'Asana', 'Finance'], image: '/projects/workflow-05.png' },
      { title: 'Zoho to WooCommerce Product Creation', description: 'Created WooCommerce products from Zoho Inventory records with duplicate checks and category handling.', details: 'Built a Make.com scenario that watches Zoho Inventory, searches WooCommerce products, aggregates data, routes existing and new SKU paths, and creates products when needed.', tags: ['Make.com', 'Zoho Inventory', 'WooCommerce', 'Product Sync'], image: '/projects/zoho-to-woocommerce-product-creation.png' },
      { title: 'WooCommerce Product ID Backfill', description: 'Backfilled WooCommerce product IDs into Zoho Inventory records while handling matched and unmatched products.', details: 'Created a scheduled Make.com workflow using iterators, routers, filters, WooCommerce searches, and Zoho Inventory API calls to reconcile existing product identifiers.', tags: ['Make.com', 'WooCommerce', 'Zoho Inventory', 'Data Reconciliation'], image: '/projects/woocommerce-product-id-backfill.png' },
      { title: 'Product Reconciliation and Variant Sync', description: 'Reconciled products and variants across Zoho Inventory and WooCommerce with branching logic.', details: 'Designed a large-scale Make.com scenario with routers, iterators, JSON parsing, aggregation, and conditional paths to synchronize product records and variants between systems.', tags: ['Make.com', 'Zoho Inventory', 'WooCommerce', 'Variants'], image: '/projects/product-reconciliation-and-variant-sync.png' },
      { title: 'WooCommerce Orders to Zoho Sales Orders', description: 'Converted WooCommerce orders into Zoho Inventory sales orders with customer and product routing.', details: 'Built an on-demand Make.com workflow that searches for existing customers, creates or updates records, parses order data, iterates through line items, and generates Zoho sales orders.', tags: ['Make.com', 'WooCommerce', 'Zoho Inventory', 'Order Automation'], image: '/projects/woocommerce-orders-to-zoho-sales-orders.png' },
      { title: 'WooCommerce Product Variant Updates', description: 'Updated WooCommerce products and variations from Zoho Inventory data with fallback paths.', details: 'Implemented a Make.com scenario that checks product existence, branches between simple products and variants, and updates the matching WooCommerce records.', tags: ['Make.com', 'WooCommerce', 'Zoho Inventory', 'Product Variants'], image: null },
      { title: 'Product Creation with Variant Support', description: 'Created WooCommerce products and variants from Zoho Inventory with structured branching and parsing.', details: 'Built a working Make.com product sync using routers, iterators, JSON parsing, WooCommerce actions, and Zoho Inventory API calls for simple and variable products.', tags: ['Make.com', 'WooCommerce', 'Zoho Inventory', 'Variant Automation'], image: '/projects/product-creation-with-variant-support.png' },
    ],
  },
  {
    label: 'Zapier',
    blurb: 'All Zapier implementations in one place, covering lead management, task creation, follow-up, and AI content repurposing',
    projects: [
      { title: 'AI Content Repurposing Engine', description: 'Created an intelligent system transforming long-form content into optimized social media formats automatically.', details: 'Developed a Zapier-based AI automation that takes blog posts and long-form content, automatically generating optimized versions for LinkedIn, Instagram, Twitter, and Facebook.', tags: ['Zapier', 'AI', 'Content Creation', 'Automation'], image: '/projects/workflow-03.png' },
      { title: 'Asana CRM Lead Engagement Workflow', description: 'Automated lead tracking and follow-up system ensuring consistent engagement and zero missed opportunities.', details: 'Implemented a Zapier integration connecting CRM data with Asana, automating task creation, notifications, and follow-up reminders to ensure no lead falls through the cracks.', tags: ['Zapier', 'Asana', 'CRM', 'Lead Management'], image: '/projects/workflow-01.png' },
      { title: 'Automated Lead Enrichment System', description: 'Enhanced lead records with company data, engagement scores, and firmographic information for better targeting.', details: 'Created a Zapier API workflow that enriches lead profiles automatically, improving data quality and supporting more targeted outreach.', tags: ['Zapier', 'API', 'Lead Gen', 'Data Processing'], image: '/projects/workflow-02.png' },
    ],
  },
]

