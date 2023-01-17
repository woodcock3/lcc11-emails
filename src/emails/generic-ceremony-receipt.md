---
subject: Registrars payment receipt
preheader: Ceremony payment receipt 
hidePreheader: true
headline: Leeds Register Office payment receipt
---

Customer names(s): {Booking_Addressee1} {Booking_ContactName1}, {Booking_Addressee2} {Booking_ContactName2}

Venue for {Booking_TypeOfBooking} ceremony: {Booking_Venues_Name}

Date: {Booking_DateOfCeremony}

Time: {Booking_TimeOfCeremony}

Booking Ref: {Booking_pkId}
{Booking_LetterAdditionalText}


## Payment Confirmation
{Payment_Summary_Email}

VAT No: 171 4591 62

You may wish to save or print this email receipt for your records.


{% render "partials/ceremony-privacy-t&c.md" %}
