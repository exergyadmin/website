import React, { useEffect } from 'react'
import { Calendar, ArrowRight } from 'lucide-react'

const BookCall = () => {
  const team = [
    {
      name: 'Tyler Stevens',
      role: 'CEO & Chief Engineer',
      image: '/TylerS_headshot.png',
      description: 'Chat with Tyler to discuss new projects or technical aspects of hashrate heating.',
      calLink: 'tylerkstevens/meeting'
    },
    {
      name: 'Dylan S',
      role: 'COO & CFO',
      image: '/DylanS_headshot.jpeg',
      description: 'Schedule time with Dylan to discuss new projects or operations and the numbers.',
      calLink: 'dylan-exergy/meeting'
    },
    {
      name: 'Mike C',
      role: 'CRO',
      image: '/MikeC_headshot.png',
      description: 'Connect with Mike to discuss new projects or explore partnership opportunities.',
      calLink: 'exergy-mike'
    }
  ]

  useEffect(() => {
    // Check if Cal.com embed script is already loaded
    const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]')
    
    if (!existingScript) {
      // Load Cal.com embed script only if it doesn't exist
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.innerHTML = `
        (function (C, A, L) { 
          let p = function (a, ar) { a.q.push(ar); }; 
          let d = C.document; 
          C.Cal = C.Cal || function () { 
            let cal = C.Cal; 
            let ar = arguments; 
            if (!cal.loaded) { 
              cal.ns = {}; 
              cal.q = cal.q || []; 
              d.head.appendChild(d.createElement("script")).src = A; 
              cal.loaded = true; 
            } 
            if (ar[0] === L) { 
              const api = function () { p(api, arguments); }; 
              const namespace = ar[1]; 
              api.q = api.q || []; 
              if(typeof namespace === "string"){
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar); 
              return;
            } 
            p(cal, ar); 
          }; 
        })(window, "https://app.cal.com/embed/embed.js", "init");
        
        Cal("init", "meeting", {origin:"https://app.cal.com"});
        
        Cal.ns.meeting("ui", {
          "cssVarsPerTheme": {
            "light": {"cal-brand": "#4970a5"},
            "dark": {"cal-brand": "#2f3b69"}
          },
          "hideEventTypeDetails": false,
          "layout": "month_view"
        });
      `
      document.head.appendChild(script)
    } else if (window.Cal) {
      // If script already exists and Cal is available, just initialize
      window.Cal("init", "meeting", {origin:"https://app.cal.com"})
      window.Cal.ns.meeting("ui", {
        cssVarsPerTheme: {
          light: { 'cal-brand': '#4970a5' },
          dark: { 'cal-brand': '#2f3b69' }
        },
        hideEventTypeDetails: false,
        layout: 'month_view'
      })
    }
  }, [])

  return (
    <div className="bg-surface-50 dark:bg-surface-900 min-h-screen">
      {/* Hero Section with Custom Gradient */}
      <div className="bg-gradient-to-r from-[#4970A5] to-[#718EBC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Book a Call</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Consult with our team to discuss your hashrate heating needs
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white dark:bg-surface-800 rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 mb-4">{member.role}</p>
                <p className="text-surface-600 dark:text-surface-400 mb-6">
                  {member.description}
                </p>
                <button 
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center text-base font-subheading"
                  data-cal-link={member.calLink}
                  data-cal-namespace="meeting"
                  data-cal-config='{"layout":"month_view","theme":"auto"}'
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Call
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookCall