---
subject: Registrars appointment confirmed on {Appointment_AppointmentDate} at {Appointment_StartTime}
preheader: Registrars Appointment 
hidePreheader: true
headline: Appointment confirmed
---

Dear {Appointment_LetterRecipient}

Your registrars appointment is booked for: 

Date: {Appointment_AppointmentDate} 

Time: {Appointment_StartTime}

Location: {Appointment_Office_Address1}, {Appointment_Office_Address2}, {Appointment_Office_Town}, {Appointment_Office_PostCode}

{% include "partials/map-button.html" %}

Customer reference: {Appointment_Id}{Appointment_Office_EmailText}

Please arrive 10 minutes before your scheduled appointment; late arrival will mean that you will not be seen and your appointment will be rebooked.
 

{% include "partials/appt-change-privacy.md" %}
