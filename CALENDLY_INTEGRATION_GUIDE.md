# 📅 Calendly Integration Setup Guide

## ✅ What's Already Done

Your website now has complete Calendly integration with:

1. **Modal Integration** - Professional popup booking window
2. **Contact Section** - Dedicated booking box next to WhatsApp
3. **Navigation Ready** - "Book Free Consultation" button
4. **Responsive Design** - Works on all devices
5. **Fallback Options** - Direct links if widget fails

## 🔧 How to Connect Your Calendly Link

### Step 1: Get Your Calendly Link
1. Go to your Calendly dashboard
2. Find your booking page URL (should look like: `https://calendly.com/yourname/consultation`)
3. Copy this URL

### Step 2: Replace Placeholder Links

**Update these 2 locations in your code:**

#### Location 1: CalendlyBooking.jsx (Line 46)
```javascript
// FIND THIS LINE:
data-url="YOUR_CALENDLY_LINK_HERE?hide_event_type_details=1&hide_gdpr_banner=1"

// REPLACE WITH:
data-url="https://calendly.com/yourname/consultation?hide_event_type_details=1&hide_gdpr_banner=1"
```

#### Location 2: CalendlyBooking.jsx (Line 58)
```javascript
// FIND THIS LINE:
onClick={() => window.open('YOUR_CALENDLY_LINK_HERE', '_blank')}

// REPLACE WITH:
onClick={() => window.open('https://calendly.com/yourname/consultation', '_blank')}
```

### Step 3: Test the Integration

1. **Save the files** after making changes
2. **Refresh your website** at `http://192.168.1.215:5173/`
3. **Click "Schedule Free Consultation"** in the Contact section
4. **Verify the modal opens** with your Calendly widget

## 🎯 How It Works

### Contact Section
- Beautiful box next to WhatsApp contact
- Professional styling matching your brand
- Opens modal when clicked

### Modal Features
- ✅ **Professional Design** - Matches your website theme
- ✅ **Calendly Widget** - Embedded booking calendar
- ✅ **What to Expect** - Sets client expectations
- ✅ **WhatsApp Fallback** - Alternative contact method
- ✅ **Responsive** - Works on mobile and desktop
- ✅ **Easy Close** - Click outside or X button

### Navigation Integration
- "Book Free Consultation" button in navigation
- Same modal opens from anywhere on site
- Consistent user experience

## 🎨 Customization Options

### Change Modal Styling
Edit `/src/components/CalendlyBooking.jsx`:
- Colors: Update `text-green-400` to your preferred colors
- Text: Modify titles and descriptions
- Layout: Adjust grid layouts and spacing

### Update WhatsApp Number
In `CalendlyBooking.jsx` line 108:
```javascript
window.open(`https://wa.me/447123456789?text=${message}`, '_blank');
//                    ↑ Replace with your WhatsApp Business number
```

## 🚀 Launch Checklist

- [ ] Replace `YOUR_CALENDLY_LINK_HERE` with your actual Calendly URL
- [ ] Update WhatsApp number in CalendlyBooking.jsx
- [ ] Test modal opens correctly
- [ ] Test Calendly widget loads in modal
- [ ] Test on mobile devices
- [ ] Test WhatsApp fallback option

## 📱 Access Your Website

- **Local:** `http://localhost:5173/`
- **Network:** `http://192.168.1.215:5173/` (any device on WiFi)

## 🆘 Troubleshooting

### If Calendly Widget Doesn't Load:
1. Check your Calendly link is correct
2. Ensure your Calendly event is published/active
3. Check browser console for errors
4. Try the "Open Calendly Directly" fallback button

### If Modal Doesn't Open:
1. Check browser console for JavaScript errors
2. Ensure the button onClick handlers are working
3. Try refreshing the page

Your Calendly integration is ready to go live! 🎉