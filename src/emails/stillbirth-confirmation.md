---
subject: Registrars appointment confirmed on {Appointment_AppointmentDate} at {Appointment_StartTime}
preheader: Registrars Appointment 
hidePreheader: true
headline: Appointment confirmed
---

Dear {Appointment_LetterRecipient}

Your {Appointment_AppointmentType} is booked for: 

Date: {Appointment_AppointmentDate}

Time: {Appointment_StartTime}

Location: {Appointment_Office_Address1}, {Appointment_Office_Address2}, {Appointment_Office_Town}, {Appointment_Office_PostCode}

{% include "partials/map-button.html" %}

Customer reference: {Appointment_Id}{Appointment_Office_EmailText}

Please arrive 10 minutes before your scheduled appointment; late arrival will mean that you will not be seen and your appointment will be rebooked.

## Attendance
  - If you are married (or in a civil partnership) only one parent needs to attend
  - If you are NOT married (or in a civil partnership) both parents need to attend if you wish for both parents names to be included on the certificate

## Do not forget
Please bring your bank card or cash if you wish to purchase certificates, they cost £11 each.
Usually the doctors or coroners will send the medical information about your baby directly to us. However, if you have the medical certificate of cause of death, please bring it to the appointment.

It is helpful to bring the following documents with you: 

- Photographic ID for both parents (e.g. passport, driving licence, biometric residence permit, permanent residence card)
- If you do not have photographic ID please bring birth certificates and proof of address for each parent 

## Change or cancel
If you cannot attend your appointment, you can change or cancel it. This needs to be done at least two working days before your appointment. Your change or cancel code is: {Appointment_RescheduleCancelCode}

{% include "partials/cancel-button.html" %}


## Your privacy
Please see our [privacy policy](https://www.leeds.gov.uk/registrarsprivacy) for information on how we process your personal data.
