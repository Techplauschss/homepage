// Google Analytics und andere Tracking-Codes hier einfügen
// Beispiel für Google Analytics 4:

export const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Hier deine Google Analytics ID eintragen

// Google Analytics Event Tracking
export const gtag = (...args: any[]) => {
  (window as any).gtag(...args)
}

// Page View Tracking
export const pageview = (url: string) => {
  gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// Event Tracking  
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Conversion Tracking für Kontaktformular
export const trackContactFormSubmission = () => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: 'contact_form'
  })
}

// Conversion Tracking für Portfolio Views
export const trackPortfolioView = (videoTitle: string) => {
  event({
    action: 'video_view',
    category: 'engagement', 
    label: videoTitle
  })
}

// Phone Call Tracking
export const trackPhoneCall = () => {
  event({
    action: 'phone_call',
    category: 'conversion',
    label: 'header_phone_click'
  })
}
