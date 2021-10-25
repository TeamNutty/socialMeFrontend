import React from 'react';

function CheckoutCreditPayment() {
  return (
    <div>
      <form id="checkoutForm" method="POST" action="/charge">
        <script
          type="text/javascript"
          src="https://cdn.omise.co/omise.js"
          data-key="OMISE_PUBLIC_KEY"
          data-amount="12345"
          data-currency="THB"
          data-default-payment-method="credit_card"
        ></script>
      </form>
    </div>
  );
}

export default CheckoutCreditPayment;
