---
subject: Confirmation of your ceremony booking on {Booking_DateOfCeremony} at {Booking_Venues_Name}
preheader: Renewal of vows ceremony booking 
hidePreheader: true
headline: Your ceremony booking
---

Dear {Booking_Addressee1} and {Booking_Addressee2}
{Booking_LetterAdditionalText}
## Provisional booking details:
Your renewal of vows ceremony is at: {Booking_Venues_Name}

Date: {Booking_DateOfCeremony}

Time: {Booking_TimeOfCeremony}

Booking reference: {Booking_pkId} (You will need this reference number when paying the ceremony fee).

> This is a provisional booking only and does not guarantee that your ceremony will take place.


## To confirm your booking, you must:
  - Attend a pre-ceremony appointment. To book the appointment please call us on {Booking_District_TelephoneNumber}
  - Complete the ceremony options form (you will receive this at your appointment)
  - Pay the remaining ceremony fee of {Booking_FeeAmountPaid} at least 3 months before the date of the ceremony


## Your ceremony venue
{% render "partials/warning-message.html" %}


## Cancellations and changes
The booking fee is non-refundable and any changes to the date, time or venue will incur an administration fee. If you are unable to attend this ceremony, please email <a href="mailto:{Booking_District_EmailAddress}">{Booking_District_EmailAddress}</a> to change or cancel it. Leeds Register Office reserves the right to cancel your ceremony if you fail to pay the ceremony fee within 3 months of the {Booking_TypeOfBooking}.


{% render "partials/ceremony-privacy-t&c.md" %}
