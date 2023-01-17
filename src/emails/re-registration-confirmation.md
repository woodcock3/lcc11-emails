---
subject: Appointment confirmed to re-register a birth on {Appointment_AppointmentDate} at {Appointment_StartTime}
preheader: Registrars Re-registration Appointment 
hidePreheader: true
headline: Appointment confirmed
---

Dear {Appointment_LetterRecipient}

Your birth re-registration is booked for: 

Date: {Appointment_AppointmentDate}

Time: {Appointment_StartTime}

Location: {Appointment_Office_Address1}, {Appointment_Office_Address2}, {Appointment_Office_Town}, {Appointment_Office_PostCode}

{% include "partials/map-button.html" %}

Customer reference: {Appointment_Id}{Appointment_Office_EmailText}

Please arrive 10 minutes before your scheduled appointment; late arrival will mean that you will not be seen and your appointment will be rebooked.

## Attendance
  - If you are married (or in a civil partnership) only one parent needs to attend
  - If you are NOT married (or in a civil partnership) both parents need to attend

## Download form
If you are re-registering following the parents marriage or civil partnership. Please bring a signed & completed LA1 form:

{% var-btn "https://www.gov.uk/government/publications/application-to-re-register-a-childs-birth-following-marriage-of-natural-parents" "LA1 form - Gov.uk" %}

If you are re-registering to add the father's name. Please bring a signed & completed GRO185 form:

{% var-btn "https://www.gov.uk/government/publications/application-to-re-register-a-childs-birth-and-add-the-natural-fathers-details" "GRO185 form - Gov.uk" %}

## Do not forget
Please bring the following documents with you:

- A signed and completed [LA1](https://www.gov.uk/government/publications/application-to-re-register-a-childs-birth-following-marriage-of-natural-parents) / [GRO185 form](https://www.gov.uk/government/publications/application-to-re-register-a-childs-birth-and-add-the-natural-fathers-details)
- Your child's current birth certificate(s)
- Your marriage certificate (if applicable)
- Photographic ID for both parents (e.g. passport, driving licence, biometric residence permit, permanent residence card). If you do not have photographic ID please bring birth certificates and proof of address for each parent 
- Your bank card or cash if you wish to purchase birth certificates (£11 each) 

{% include "partials/appt-change-privacy.md" %}
