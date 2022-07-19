---
subject: Registrars appointment reminder for {Appointment_AppointmentDate}
preheader: Registrars Appointment 
hidePreheader: true
headline: Appointment confirmed
---

Dear {Appointment_LetterRecipient}

Your appointment with a registrar is booked for: 

Date: {Appointment_AppointmentDate}

Time: {Appointment_StartTime}

Location: {Appointment_Office_Address1}, {Appointment_Office_Address2}, {Appointment_Office_Town}, {Appointment_Office_PostCode}

{% include "partials/map-button.html" %}

Customer reference: {Appointment_Id}{Appointment_Office_EmailText}

Please arrive 10 minutes before your scheduled appointment; late arrival will mean that you will not be seen and your appointment will be rebooked.

## Prepare for your appointment
Find out what to bring and who should attend at [leeds.gov.uk](https://www.leeds.gov.uk/births-deaths-and-marriages). 

## Change or cancel
If you cannot attend your appointment, you can change or cancel it. This needs to be done at least two working days before your appointment. Your change or cancel code is: {Appointment_RescheduleCancelCode}

{% include "partials/cancel-button.html" %}


## Your privacy
Please see our [privacy policy](https://www.leeds.gov.uk/registrarsprivacy) for information on how we process your personal data.
