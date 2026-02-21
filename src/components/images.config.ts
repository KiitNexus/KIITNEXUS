
// CLOUDINARY IMAGE CONFIG
// All images are served from Cloudinary.
// Replace the URLs below with your actual Cloudinary URLs.
// Format: https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/YOUR_IMAGE_ID


 const images = {
  // ---- LANDING PAGE ----
  groupPhoto: 'https://res.cloudinary.com/your_cloud_name/image/upload/group_photo',
  downloadImage: 'https://res.cloudinary.com/your_cloud_name/image/upload/download_image',

  // ---- BACKGROUND SLIDESHOW ----
  campus: [
    'https://res.cloudinary.com/your_cloud_name/image/upload/campus1',
    'https://res.cloudinary.com/your_cloud_name/image/upload/campus2',
    'https://res.cloudinary.com/your_cloud_name/image/upload/campus3',
    'https://res.cloudinary.com/your_cloud_name/image/upload/group1',
  ],

  // ---- ABOUT SECTION ----
  about: {
    branding: 'https://res.cloudinary.com/your_cloud_name/image/upload/branding',
    design: 'https://res.cloudinary.com/your_cloud_name/image/upload/design',
    development: 'https://res.cloudinary.com/your_cloud_name/image/upload/development',
  },

  // ---- MEMBERS ----
  members: {
    founder: 'https://res.cloudinary.com/your_cloud_name/image/upload/founder',
    techHead1: 'https://res.cloudinary.com/your_cloud_name/image/upload/tech_head_1',
    techHead2: 'https://res.cloudinary.com/your_cloud_name/image/upload/tech_head_2',
    techHead3: 'https://res.cloudinary.com/your_cloud_name/image/upload/tech_head_3',
    webLead: 'https://res.cloudinary.com/your_cloud_name/image/upload/web_lead',
    androidLead: 'https://res.cloudinary.com/your_cloud_name/image/upload/android_lead',
    flutterLead: 'https://res.cloudinary.com/your_cloud_name/image/upload/flutter_lead',
    cloudLead: 'https://res.cloudinary.com/your_cloud_name/image/upload/cloud_lead',
    mlLead: 'https://res.cloudinary.com/your_cloud_name/image/upload/ml_lead',
    designLead: 'https://res.cloudinary.com/your_cloud_name/image/upload/design_lead',
    broadcastLead: 'https://res.cloudinary.com/your_cloud_name/image/upload/broadcast_lead',
    marketingLead: 'https://res.cloudinary.com/your_cloud_name/image/upload/marketing_lead',
    opsLead: 'https://res.cloudinary.com/your_cloud_name/image/upload/ops_lead',
    // Placeholder images for core members (male/female or generic)
    member1: 'https://res.cloudinary.com/your_cloud_name/image/upload/member_1',
    member2: 'https://res.cloudinary.com/your_cloud_name/image/upload/member_2',
  },
}

export default images;