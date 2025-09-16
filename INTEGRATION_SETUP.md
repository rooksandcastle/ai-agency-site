# Integration Setup Instructions

## WhatsApp Business Integration

1. **Get your WhatsApp Business number:**
   - Sign up for WhatsApp Business
   - Note your full phone number with country code (e.g., +44 7123 456789)
   - Remove spaces and plus sign for the code: `447123456789`

2. **Update the code:**
   - Open `src/App.jsx`
   - Find both instances of: `const whatsappNumber = "YOUR_WHATSAPP_NUMBER";`
   - Replace `YOUR_WHATSAPP_NUMBER` with your actual number
   - Example: `const whatsappNumber = "447123456789";`

## Calendly Integration

### Option 1: Simple Link Integration (Current Setup)
1. Sign up at [calendly.com](https://calendly.com)
2. Create a booking page
3. Copy your Calendly scheduling link
4. In `src/App.jsx`, find: `https://calendly.com/your-link-here`
5. Replace with your actual Calendly link

### Option 2: Full Widget Integration (Recommended)
1. Get your Calendly embed code from your Calendly dashboard
2. Replace the placeholder divs in both:
   - AssessmentQuiz component (line ~636)
   - ContactSection component (line ~905)
3. Paste the Calendly widget code directly

## Testing
- For WhatsApp: Click the WhatsApp button - it should open WhatsApp with your number
- For Calendly: Click booking buttons - they should open your scheduling page

## Additional Improvements

### Logo Enhancement
- Your current logo is at `/logo.png`
- For better quality, consider using an SVG version
- Upload your SVG to `/public/` folder and update the `src` attribute in the Logo component

### Color Scheme Customization
- The current green theme uses: `green-400`, `green-500`, `green-600`
- To change colors, find and replace these Tailwind classes throughout the code
- Consider using your brand colors instead

## Page Structure Changes Made
- ✅ Removed quotes above hero section
- ✅ Put main value proposition first
- ✅ Fixed duplicate logos
- ✅ Improved mobile responsiveness
- ✅ Enhanced business flow process
- ✅ Made timeline section bigger
- ✅ Moved ethical framework under pricing
- ✅ Removed blog and resources from main page
- ✅ Improved header with more white space
- ✅ Better content hierarchy for mobile and web

## Next Steps
1. Update WhatsApp number in the code
2. Set up Calendly integration
3. Test both integrations
4. Consider uploading a better logo (SVG format)
5. Launch your improved website!