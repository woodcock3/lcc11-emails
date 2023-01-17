---
subject: Appointment confirmed to register a death on {Appointment_AppointmentDate} at {Appointment_StartTime}
preheader: Registrars Appointment 
hidePreheader: true
headline: Appointment confirmed
---

Dear {Appointment_LetterRecipient}

Your registrars appointment is at: {Appointment_Office_Address1}, {Appointment_Office_Address2}, {Appointment_Office_Town}, {Appointment_Office_PostCode}

Date: {Appointment_AppointmentDate} 

Time: {Appointment_StartTime} 

{% include "partials/map-button.html" %}

Customer reference: {Appointment_Id}{Appointment_Office_EmailText}

Please arrive 10 minutes before your scheduled appointment; late arrival will mean that you will not be seen and your appointment will be rebooked.

## Do not forget
Please bring cash if you wish to buy some death certificates, they cost £11 each.
Usually the doctors or coroners send the medical information about the deceased directly to us. However, if you have the medical certificate of cause of death, please bring it to the appointment.

It is helpful to bring the following documents for the deceased: 

- Birth certificate or passport
- Driving licence
- Marriage/civil partnership certificate (if applicable)
- Medical card/NHS number

You will be asked for the following information about the deceased:

- Their full name and any other names they were known by or used
- Their date and place of birth
- Their usual address
- Their last occupation

And if applicable:

- Their maiden name
- The name, date of birth and occupation of their spouse or civil partner 

## Tell us once
Tell Us Once is a free service that lets you report a death to most government organisations in one go. At the appointment the registrar will explain the Tell Us Once service when you register the death. They will give you a unique reference number so you can use the service yourself online or by phone. For more information about Tell Us Once please visit: [GOV.UK](www.gov.uk/after-a-death/organisations-you-need-to-contact-and-tell-us-once)

{% include "partials/appt-change-privacy.md" %}
